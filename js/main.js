const menuItems = document.querySelectorAll(".menu-item"); 

menuItems.forEach(function(item){
    item.addEventListener("click", function(e){
        const activeItem = document.querySelector( ".active");
        activeItem.classList.remove("active");
        e.target.classList.add("active");
    });
});


const swith = document.querySelector(".switch");

swith.addEventListener("click",function() {
    swith.classList.toggle("activeSwich");
    document.body.classList.toggle("activeSwich");
} );















