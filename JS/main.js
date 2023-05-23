var cliente = new fila();
var fornecedor = new pilha();
var formCliente = document.getElementById("formulario_cliente");
var formFornecedor = document.getElementById("formulario_forn");

function enqueue_fila(){
    let nome_cliente = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let cpf = document.getElementById("cpf").value;
    let email_cliente = document.getElementById("email").value;
    let telefone_cliente = document.getElementById("telefone").value;
    if (nome_cliente != "" && sobrenome != "" && cpf != "" && email_cliente != "" && telefone_cliente != "")
    {
      cliente.enqueue(nome_cliente, sobrenome, email_cliente, cpf, telefone_cliente);
      formCliente.reset();
    }
    else console.log("Form vazio");
} 

function dequeue_fila(){
  return cliente.dequeue();
}

function print_fila(){
  document.querySelector("#print_header").innerHTML = "Clientes"
  document.querySelector("#print").innerHTML = cliente.imprimeFila();
}

function push_pilha(){
    let nome_forn = document.getElementById("nomeFantasia").value;
    let razao = document.getElementById("razaoSocial").value;
    let cnpj = document.getElementById("cnpj").value;
    let email_forn = document.getElementById("emailforn").value;
    let telefone_forn = document.getElementById("telefoneforn").value;
    //if (nome_forn != "" && razao != "" && cnpj != "" && email_forn != "" && telefone_forn != "")
    //{
      fornecedor.push(cnpj, razao, nome_forn, email_forn, telefone_forn);
      formFornecedor.reset();
    //}
    //else console.log("Form vazio");
}

function pop_pilha(){
  console.log("Removeu pilha");
  return fornecedor.pop();
}

function print_pilha(){
  document.querySelector("#print_header").innerHTML = "Fornecedores"
  document.querySelector("#print").innerHTML = fornecedor.imprimePilha();
}

document.querySelector("#btn_forn").addEventListener("click", () => push_pilha());
document.querySelector("#btn_cliente").addEventListener("click", () => enqueue_fila());

document.querySelector("#remover_fornecedor").addEventListener("click", () => pop_pilha());
document.querySelector("#remover_cliente").addEventListener("click", () => dequeue_fila());
