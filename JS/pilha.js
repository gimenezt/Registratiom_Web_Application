class pilha {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(cnpj, razao_social, nome_fantasia, email, telefone) {
    let no_trab = new node_fornecedor(cnpj, razao_social, nome_fantasia, email, telefone);
    if (this.size == 0) {
      this.head = no_trab;
      this.tail = no_trab;
    } else {
      this.tail.next = no_trab;
      no_trab.prev = this.tail;
      this.tail = no_trab;
    }
    this.size++;
  }

  pop() {
    let retorno;
    if (this.size == 0) {
      return "Lista vazia";
    } else if (this.size == 1) {
      retorno = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      retorno = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return retorno;
  }

  imprimePilha()
  {
    let no_trab = this.head;
    let retorno = "";
    if (this.size == 0) {
     console.log("Pilha vazia");
     return "Pilha vazia"
    } 
    else 
    {
      for(let i = 0; i < this.size; i++) {
        retorno += ("CNPJ: " + no_trab.cnpj + "<br>Razão Social: " + no_trab.razao_social + "<br>Nome Fantasia: " + no_trab.nome_fantasia + "<br>E-mail: " + no_trab.email + "<br>Telefone: " + no_trab.telefone + "<br><br>");
      no_trab = no_trab.next;
      }
      console.log(retorno);
      return retorno;
    }
  }
}
