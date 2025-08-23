

const navLinks = document.querySelector(".navLinks");
const body = document.body;

function showMenu(){
    navLinks.classList.toggle("active")
    if(navLinks.classList.contains("active")){
        body.classList.add("lock-scroll");
    } else{
        body.classList.remove("lock-scroll")
    }
}
function hideMenu(){
    navLinks.classList.remove("active")
    body.classList.remove("lock-scroll")
}

const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
            
        } else{
            entry.target.classList.remove("show")
        }
    });
});
const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.remove("moveRight")
        } else{
            entry.target.classList.add("moveRight")
            entry.target.classList.add("leaveRight")
        }
    });
});
const observer3 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.remove("moveLeft")
            
        } else{
            entry.target.classList.add("moveLeft")
        }
    });
});
const observer4 = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("normal")
        } else{
            entry.target.classList.remove("normal")
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer1.observe(el));

const rightItems = document.querySelectorAll(".right");
rightItems.forEach((item) => observer2.observe(item))

const leftItems = document.querySelectorAll(".left");
leftItems.forEach((item) => observer3.observe(item))

const centerItems = document.querySelectorAll(".smaller");
centerItems.forEach((item) => observer4.observe(item))