class fila {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(nome, sobrenome, email, cpf, telefone) {
    let no_trab = new node_cliente(nome, sobrenome, email, cpf, telefone);
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

  dequeue() {
    let trab;
    if (this.size == 0) {
      return "Fila vazia";
    } else if (this.size == 1) {
      trab = this.head;
      this.head = null;
      this.tail = null;
    } else {
      trab = this.head;
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return trab;
  }

  imprimeFila() {
    let no_trab = this.head;
    let retorno = "";
    if (this.size == 0) {
      return "Fila vazia";
    } else {
      for(let i = 0; i < this.size; i++) {
        retorno += ("Nome: " + no_trab.nome + "<br>Sobrenome: " + no_trab.sobrenome + "<br>E-mail: " + no_trab.email + "<br>CPF: " + no_trab.cpf + "<br>Telefone: " + no_trab.telefone + "<br><br>");
        no_trab = no_trab.next;
      }
      return retorno;
    }
  }
}
