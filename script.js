let btn_git = document.getElementById('git');
let btn_fake_news = document.getElementById('fake-news');
let btn_monitoring = document.getElementById('monitoring');

btn_git.addEventListener('click',()=>{
    location.href="project-git.html";
})

btn_fake_news.addEventListener('click',()=>{
    location.href="project-fake-news.html";
})

btn_monitoring.addEventListener('click',()=>{
    location.href="project-monitoring.html";
})

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