class node_cliente{
  constructor(nome, sobrenome, email, cpf, telefone) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
  
    this.next = null;
    this.prev = null;
  }
}
