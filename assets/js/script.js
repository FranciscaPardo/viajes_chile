$(document).ready(function(){ 
    $("#modal").modal('show');   
});


var nav = document.querySelector("nav");
window.addEventListener("scroll", function() {
    if (this.window.pageYOffset >100) {
        nav.classList.add("bg-dark");
    } else {
        nav.classList.remove("bg-dark");
    }
});

$(".btn-info").click (function(){
    alert("mensaje enviado")
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

