class Clientes {
  //Encapsulamento
  constructor(nome, idade, email, cidade){
      this.nome = nome;
      this.idade = idade;
      this.email = email;
      this.cidade = cidade;
  }
  mostrarDados(){
    let resultado = document.querySelector('.resultado');

    resultado.innerText = `Nome: ${this.nome}`, `Idade: ${this.idade}`, `Email: ${this.email}`, `Cidade: ${this.cidade}`
  }

}