const hamburger = document.getElementById('hamburger');
const {body} = document;

hamburger.addEventListener('click',()=>{
    body.classList.toggle('show-nav');  //yoksa show-nav class'ını ekle varsa sil
})