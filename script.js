let btn_git = document.getElementById('git');
let btn_fake_news = document.getElementById('fake-news');
let btn_monitoring = document.getElementById('monitoring');

let toggle_button = document.getElementById('toggle-button');
let toggle_icon = document.getElementById('toggle-icon');

let github = document.getElementById('github');
let instagram = document.getElementById('instagram');
let linkedin = document.getElementById('linkedin');

github.addEventListener('click', ()=>{
    location.href="https://github.com/gustavo-berti";
});

instagram.addEventListener('click', ()=>{
    location.href="https://www.instagram.com/gustavo_gberti/";
});

linkedin.addEventListener('click', ()=>{
    location.href="https://www.linkedin.com/in/gustavo-gimenez-berti-70797a250/";
});

btn_git.addEventListener('click',()=>{
    location.href="project-git.html";
});

btn_fake_news.addEventListener('click',()=>{
    location.href="project-fake-news.html";
});

btn_monitoring.addEventListener('click',()=>{
    location.href="project-monitoring.html";
});

document.getElementById('navbar-toggle').addEventListener('click', ()=>{
    const menu = document.getElementById('navbar-menu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; 
        console.log(menu);
    } else {
        menu.style.display = "none"; 
        
    }
    console.log("Salve")
});

function toggleMode(){
    let body = document.querySelector('body');
    let theme = body.getAttribute('data-theme');

    if(theme === 'light'){
        body.setAttribute('data-theme', '');
        toggle_icon.src = "assets/sun.png"
    } else {
        body.setAttribute('data-theme', 'light');
        toggle_icon.src = "assets/moon.png"
    }
}