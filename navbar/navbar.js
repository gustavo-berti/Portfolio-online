async function loadNavbar() {
    try {
        const response = await fetch('../navbar/navbar.html');
        const navbarHtml = await response.text();
        document.querySelector('.navbar').innerHTML = navbarHtml;
    } catch (error) {
        console.log("Deu ruim")
    }
}

loadNavbar();