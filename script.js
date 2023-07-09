let search = document.querySelector('.search');
let close = document.querySelector('.close');
let searchBox = document.querySelector('.SearchBox');
search.onclick = function(){
    searchBox.classList.add('active');
}
close.onclick = function(){
    searchBox.classList.remove('active');
}