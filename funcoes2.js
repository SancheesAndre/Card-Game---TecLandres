function TestaCPF(strCPF, senha, confirmaSenha, nome, sobrenome, dataNascimento, telefone, email){
    //Link para validar CPF: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
      var Soma;
      var Resto;
      var resultadoVálido;
      var senhaCorreta;
      var nomeCorreto;
      var dataNascimentoCorreto;
      var telefoneCorreto;
      var emailCorreto;
      resultadoVálido = 0;
      senhaCorreta = 0;
      nomeCorreto = 0;
      sobrenomeCorreto = 0;
      dataNascimentoCorreto = 0;
      telefoneCorreto = 0;
      emailCorreto = 0
      Soma = 0;
      resultadoInvalido = "";
      if (strCPF == "00000000000")//return false;
      {
          alert("CPF é inválido, pois está preenchido com 00000000000");
          resultadoInvalido = "inválido";
      }
      else{
          for (i=1; i<=9; i++) {
              Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
          }
          Resto = (Soma * 10) % 11;	
          if ((Resto == 10) || (Resto == 11)){
              Resto = 0;
          }
          if (Resto != parseInt(strCPF.substring(9, 10)) ) //return false;
          {
              //alert("O número do CPF é inválido");
              resultadoInvalido = "inválido";
          }
      
          Soma = 0;
          for (i = 1; i <= 10; i++){
          Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
          }
          Resto = (Soma * 10) % 11;
      
          if ((Resto == 10) || (Resto == 11))
          {
              Resto = 0;
          }
          
          if (Resto != parseInt(strCPF.substring(10, 11) ) || resultadoInvalido == "inválido") //return false;
          {
              alert("O número do CPF é inválido");
              resultadoInvalido = "inválido";
          }
          else{
            resultadoVálido = 1;
          }
      }

//-------------------------------------------------------------------------------------------------------------//

        //Validação da senha e verificar se foi inserida alguma senha

          if(senha != confirmaSenha){
              alert("As senhas são diferentes");
          }
          else{
              senhaCorreta = 1;
          }

//-------------------------------------------------------------------------------------------------------------//

          //Garantir que o nome não está vazio

          if(nome == ""){
              alert("Insira o seu nome"); 
          }
          else{
              nomeCorreto = 1;
          }

//-------------------------------------------------------------------------------------------------------------//

          //Garantir que o sobrenome não esteja vazio

          if(sobrenome == ""){
              alert("Insira o seu sobrenome");
          }
          else{
              sobrenomeCorreto = 1;
          }

//-------------------------------------------------------------------------------------------------------------//
          
          //Garantir que a data de nascimento não esteja vazia

          if(dataNascimento == ""){
            alert("Insira a data de nascimento");
          }
          else{
              dataNascimentoCorreto = 1;
          }

//-------------------------------------------------------------------------------------------------------------//

          //Garantir que o número de telefone não esteja vazio

          if(telefone == ""){
            alert("Insira um número de telefone");
          }
          else{
              if(telefone == "00000000" || telefone == "0000000000" || telefone == "00000000" || telefone == "00000000000"){
                  alert ("Número de telefone inválido");
              }
              else{
                  telefoneCorreto = 1;
              }
          }

//-------------------------------------------------------------------------------------------------------------//

          //Garantir que o email não esteja vazio

          if(email == ""){
            alert("Insira um email");
          }
          else{
              emailCorreto = 1;
          }

//-------------------------------------------------------------------------------------------------------------//
  
          //Confirmação do cadastro

          if(resultadoVálido == "1" && senhaCorreta == "1" && nomeCorreto == "1" && sobrenomeCorreto == "1" && dataNascimentoCorreto == "1" && telefoneCorreto == "1" && emailCorreto == "1"){
              alert("Cadastrado com sucesso");
          }
          else{
              alert("Verifique algum campo, você pode ter deixado algo vazio ou incorreto")
          }
}
  
  //var strCPF = "12345678909";
  //alert(TestaCPF(strCPF));
  //if (resultadoInvalido != "inválido")
  //{
  //	alert("Cadastrado Com Sucesso");//return true;
  //}