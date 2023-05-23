const openModalClienteButtom = document.querySelector("#open_modal_cliente");
const openModalFornecedorButtom = document.querySelector("#open_modal_fornecedor");
const closeModalButtom = document.querySelector("#close_modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

openModalClienteButtom.addEventListener("click", () => toggleModal());
openModalClienteButtom.addEventListener("click", () => print_fila());

openModalFornecedorButtom.addEventListener("click", () => toggleModal());
openModalFornecedorButtom.addEventListener("click", () => print_pilha());

closeModalButtom.addEventListener("click", () => toggleModal());
fade.addEventListener("click", () => toggleModal());