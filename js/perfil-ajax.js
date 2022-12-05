window.addEventListener('DOMContentLoaded', () => {
    const editToggle = document.getElementById('toggle-edit');
    editToggle.addEventListener('change', toggleFormEnabling);

    const form = document.getElementById('user-info-form');
    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        await updateUser();
    })
});

function toggleFormEnabling() {
    const formFields = document.querySelectorAll('#user-info-form input');
    for (let field of formFields) {
        field.disabled = !field.disabled;
    }

    const updateBtn = document.getElementById('update-btn');
    updateBtn.disabled = !updateBtn.disabled;
}

async function updateUser() {
    const form = document.getElementById('user-info-form');
    const data = {};

    if (form.elements['password'].value !== form.elements['password-repeat'].value) {
        alert("Senha e confirmação de senha não são iguais!");
        return;
    }

    for (let field of ['user', 'full-name', 'birthday', 'cpf', 'phone', 'email', 'password']) {
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
            alert('Falha ao atualizar perfil: ', res['errorMsg']);
            return;
        }
        console.log(res);
    });
}
