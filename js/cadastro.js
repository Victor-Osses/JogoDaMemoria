document.getElementById("btnRegisterUser").addEventListener("click", function(e) { 
    let senha = document.getElementById("password").value;
    let confirmacaoSenha = document.getElementById("passwordconfirmation").value;
  
    if (senha !== confirmacaoSenha) {
      e.preventDefault();
      alert("As senhas não são iguais");
    }
})
