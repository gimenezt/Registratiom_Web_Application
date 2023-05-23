class node_fornecedor{
  constructor(cnpj, razao_social, nome_fantasia, email, telefone) {
    this.cnpj = cnpj;
    this.razao_social = razao_social;
    this.nome_fantasia = nome_fantasia;
    this.email = email;
    this.telefone = telefone;
  
    this.next = null;
    this.prev = null;
  }
}
