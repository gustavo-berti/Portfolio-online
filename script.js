let toggle_button = document.getElementById('toggle-button');
let toggle_icon = document.getElementById('toggle-icon');

let github = document.getElementById('github');
let instagram = document.getElementById('instagram');
let linkedin = document.getElementById('linkedin');

function goToGit() {
    location.href = "project-git.html";
};

function goToFakeNews() {
    location.href = "project-fake-news.html";
};

function goToMonitoring() {
    location.href = "project-monitoring.html";
};

try {
    instagram.addEventListener('click', () => {
        location.href = "https://www.instagram.com/gustavo_gberti/";
    });
} catch (error) { }

try {

    linkedin.addEventListener('click', () => {
        location.href = "https://www.linkedin.com/in/gustavo-gimenez-berti-70797a250/";
    });
} catch (error) { }

try {

    btn_git.addEventListener('click', () => {
        location.href = "https://github.com/gustavo-berti";
    });
} catch (error) { }


document.getElementById('navbar-toggle').addEventListener('click', () => {
    const menu = document.getElementById('navbar-menu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
        console.log(menu);
    } else {
        menu.style.display = "none";

    }
    console.log("Salve")
});

function toggleMode() {
    let body = document.querySelector('body');
    let theme = body.getAttribute('data-theme');

    if (theme === 'light') {
        body.setAttribute('data-theme', '');
        toggle_icon.src = "assets/sun.png"
    } else {
        body.setAttribute('data-theme', 'light');
        toggle_icon.src = "assets/moon.png"
    }
}