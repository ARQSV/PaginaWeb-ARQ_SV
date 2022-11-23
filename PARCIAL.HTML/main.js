$(sdf).after(content);

window.addEventListener("scroll",function(){
    var inicio = document.querySelector("inicio");
    inicio.classList.toggle("abajo",window.scrollY>0);
})