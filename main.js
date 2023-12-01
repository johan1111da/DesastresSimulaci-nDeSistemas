let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow' , window.scrollY > 0);
})

function openPDF(event) {
    event.preventDefault(); 
    var pdfURL = event.target.getAttribute('data-pdf');
    window.open(pdfURL, '_blank');
}
