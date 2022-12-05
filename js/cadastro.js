//Créditos de ajuda: https://stackoverflow.com/questions/58150828/how-can-i-verify-form-passwords-match-using-javascript

document.getElementById("btnRegisterUser").addEventListener("click", function(e) { 
    let senha = document.getElementById("password").value;
    let confirmacaoSenha = document.getElementById("passwordconfirmation").value;
  
    if (senha !== confirmacaoSenha) {
      e.preventDefault();
      alert("As senhas não são iguais");
    }
})
