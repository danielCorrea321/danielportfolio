class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this); //Assim o this referencia à própria class MobileNavbar
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => { //Cada item
            //Quero saber se cada link possui a propriedade animation
            link.style.animation
                ? (link.style.animation = "") //Se existe animation no style de link tira
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`); //Se não existir

        });
    }

handleClick() {
    this.navList.classList.toggle(this.activeClass); //O 'nav-list' em sua lista de classes vai ganha um active
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

}


addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);
    this.mobileMenu.onclick = function() {
        if(document.querySelector('.manual-navigation').classList.contains('displayNone')) {
            document.querySelector('.manual-navigation').classList.remove('displayNone');
            document.querySelector('.navigation-auto').classList.remove('displayNone');
            for (let i = 1; i <= 3; i++) {
                document.querySelector('.title-slide'+i).classList.remove('displayNone');
            }
            for (let i = 4; i <= 6; i++) {
                document.querySelector('.line'+i).classList.remove('displayNone');
            }
        } else {
            document.querySelector('.manual-navigation').classList.add('displayNone');
            document.querySelector('.navigation-auto').classList.add('displayNone');
            for (let i = 1; i <= 3; i++) {
                document.querySelector('.title-slide'+i).classList.add('displayNone');
            }
            for (let i = 4; i <= 6; i++) {
                document.querySelector('.line'+i).classList.add('displayNone');
            }
        }
            
    }
}
init() {
    if(this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
}
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

//SLIDE ----------------------------------------------------------------

let count = 1;
document.querySelector('#radio1').checked = true;

setInterval( function(){
    nextImage();
}, 5000);

function nextImage(){
    count++;
    if(count>3) {
        count=1;
    }

    document.querySelector('#radio'+count).checked = true;
}

//CARD FLIP

let card = document.querySelector('#card');
card.addEventListener('click',(e)=>{
    card.classList.toggle('flip');
});
let card2 = document.querySelector('#card2');
card2.addEventListener('click',(e)=>{
    card2.classList.toggle('flip');
});
let card3 = document.querySelector('#card3');
card3.addEventListener('click',(e)=>{
    card3.classList.toggle('flip');
});
let card4 = document.querySelector('#card4');
card4.addEventListener('click',(e)=>{
    card4.classList.toggle('flip');
});
let card5 = document.querySelector('#card5');
card5.addEventListener('click',(e)=>{
    card5.classList.toggle('flip');
});