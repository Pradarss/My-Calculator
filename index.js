let aboutme = document.getElementById('about-me');
let intro = document.getElementById('intro');
let about = document.getElementById('about');
let aboutnav = document.getElementById('aboutnav');
let choose = document.getElementById('choose');
let line = document.getElementById('line');
let footer = document.getElementById('footer');
let home = document.getElementById('home');

function aboutmeh(){
    aboutme.style.display = '';
    intro.style.display = 'none';
    about.style.display = 'none';
    choose.style.display = 'none';
    line.style.display = 'none';
    footer.style.bottom = '0';
    // document.getElementById('main').style.height = '64vh';
}

function homei(){
    aboutme.style.display = 'none';
    intro.style.display = '';
    about.style.display = '';
    choose.style.display = '';
    line.style.display = '';
    footer.style.bottom = '';
    // document.getElementById('main').style.height = '100vh';
}

    export function aboutmeh();

// aboutnav.addEventListener('click',()=>{
//     function about(){
//         aboutme.style.display = '';
//         intro.style.display = 'none';
//         about.style.display = 'none';
//         choose.style.display = 'none';
//         line.style.display = 'none';
//         footer.style.bottom = '0';
//         // document.getElementById('main').style.height = '64vh';
//     }
// })

// aboutnav.addEventListener('click',function(){
//         aboutme.style.display = '';
//         intro.style.display = 'none';
//         about.style.display = 'none';
//         choose.style.display = 'none';
//         line.style.display = 'none';
//         footer.style.bottom = '0';
//         // document.getElementById('main').style.height = '64vh';
//     })

// home.addEventListener('click',()=>{
//     function home(){
//     aboutme.style.display = 'none';
//     intro.style.display = '';
//     about.style.display = '';
//     choose.style.display = '';
//     line.style.display = '';
//     footer.style.bottom = '';
//     // document.getElementById('main').style.height = '100vh';
//     }
// })