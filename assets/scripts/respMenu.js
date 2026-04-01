const openButton = document.getElementById('hambuMenu')
const navbar = document.getElementById('navcont')
const menuItems = document.querySelector('.menuItems')
const bckgMenuList = document.querySelector('.bckgNavList')


const media = window.matchMedia("(width < 768px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
    const isMobile = e.matches
    console.log(isMobile)
    if (isMobile) {
        navbar.setAttribute('inert', '')
    }
    else {
        navbar.removeAttribute('inert')
        navbar.classList.remove('showMenu')
        navbar.classList.remove('menuAnimation')
        menuItems.classList.remove('active')
        bckgMenuList.classList.remove('active')
    }
}

function openRespMenu() {
    navbar.classList.add('menuAnimation')
    navbar.removeAttribute('inert')

    void navbar.offsetWidth;

    navbar.classList.add('showMenu')
    menuItems.classList.add('active')
    bckgMenuList.classList.add('active')
    openButton.setAttribute('aria-expanded', 'true')
}

function closeRespMenu() {
    navbar.classList.remove('showMenu')
    menuItems.classList.remove('active')
    bckgMenuList.classList.remove('active')
    openButton.setAttribute('aria-expanded', 'false')


    setTimeout(() => {
        navbar.classList.remove('menuAnimation')
        navbar.setAttribute('inert', '')
    }, 250)
}



updateNavbar(media)