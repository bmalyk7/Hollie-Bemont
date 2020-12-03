"Use strict";


const menu = document.querySelector('.menu_wrapper');
const main = document.querySelector('.menu');
const divs = document.querySelectorAll('.divider');
const items = document.querySelectorAll('.menu_item');
const linkItems = document.querySelectorAll('.link_item');
const promo = document.querySelector(".promo");
const application = document.querySelector(".application");
const topLine = document.querySelector('.top_line');
const middleLine = document.querySelector('.middle_line');
const bottomLine = document.querySelector('.bottom_line');
const hideMenu = document.querySelector('.hide_menu');
const content = document.querySelector('.content');
const hamburger = document.querySelector('.hamburger_block');
const hideItems = document.querySelectorAll('.check');
const mobMenu = document.querySelector('.hide');
const contact = document.querySelector('.contact');

let a;

function change(i){
    if(i == 0){
        application.style.display = "none";
        promo.style.display = "flex";
        contact.style.display ="none";
    }
    if(i == 1){
        promo.style.display = "none";
        application.style.display = "block";
        contact.style.display ="none";
    }
    if(i==2){
        contact.style.display ="block";
        application.style.display = "none";
        promo.style.display = "none";
    }
    
    if(middleLine.classList.contains('change')){
        application.style.display = "none";
        promo.style.display = "none";
    }
}





function clean(){
    divs.forEach((item)=>{
        item.classList.remove('active');
    });
}

function add(i){
    divs[i].classList.add('active');
}



main.addEventListener('click', e =>{
    const target = e.target;
    console.log(target);
    if(target && target.classList.contains('link_logo')){
        application.style.display = "none";
        promo.style.display = "flex";
        contact.style.display ="none";
        clean();
        add(0);
    }
});


menu.addEventListener('click',(e)=>{
const target = e.target;
if(target && target.classList.contains('link_item')){
   linkItems.forEach((item,i)=>{
    if(target == item){
        clean();
        add(i);
        change(i);
        a = i;
    }
   });
}
});

function toogle(){
    topLine.classList.toggle('change');
    middleLine.classList.toggle('change');
    bottomLine.classList.toggle('change');
    hideMenu.classList.toggle('change');
    content.classList.toggle('change');
}




hamburger.addEventListener('click',toogle);





mobMenu.addEventListener('click',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('hide_link1')){
        hideItems.forEach((item,i)=>{
            if(target ==item){
                toogle();
                change(i);
                clean();
                add(i);
            }
        });
    }
});


mobMenu.addEventListener('click',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('hide_link2')){
        
        hideItems.forEach((item,i)=>{
            console.log(target);
            if(target == item){
                console.log('hi');
                toogle();
                clean();
                change(i);
                add(i);
            }
        });
    }
});

mobMenu.addEventListener('click',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('hide_link3')){
        
        hideItems.forEach((item,i)=>{
            console.log(target);
            if(target == item){
                console.log('hi');
                toogle();
                change(i);
                clean();
                add(i);
            }
        });
    }
});


