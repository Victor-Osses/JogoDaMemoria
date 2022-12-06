window.addEventListener('DOMContentLoaded', () => {
    const editToggle = document.getElementById('toggle-edit');
    editToggle.addEventListener('change', toggleFormEnabling);

    const form = document.getElementById('user-info-form');
    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();

        await updateUser();

        editToggle.checked = false;
        toggleFormEnabling();
    })
});

function toggleFormEnabling() {
    const formFields = document.querySelectorAll('#user-info-form input');
    for (let field of formFields) {
        if (['cpf', 'birthday', 'user'].indexOf(field.id) < 0) {
            field.disabled = !field.disabled;
        }
    }

    const updateBtn = document.getElementById('update-btn');
    updateBtn.disabled = !updateBtn.disabled;
}

async function updateUser() {
    const form = document.getElementById('user-info-form');
    const data = {};

    if (form.elements['password'].value !== form.elements['password-repeat'].value) {
        displayMessage("Senha e confirmação de senha não são iguais!");
        return;
    }

    for (let field of ['full-name', 'phone', 'email', 'password']) {
        data[field] = form.elements[field].value;
    }
    await fetch('php/user/update.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((data) => data.json())
    .then((res) => {
        if (!res['success']) {
            displayMessage(res['errorMsg']);
            return;
        } else {
            displayMessage("Atualização concluída com sucesso!");
        }
    });
}

function displayMessage(msg) {
    document.getElementById('msg-container').textContent = msg;
    setTimeout(() => {
        document.getElementById('msg-container').textContent = "";
    }, 1500);
}
