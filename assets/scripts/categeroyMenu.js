const openCategoryList = document.getElementById('buttonList')
const listCategories = document.getElementById('categoriesList')
const boxCategory = document.querySelector('.categories-block')

const mediaQ = window.matchMedia("(width < 769px)")

mediaQ.addEventListener('change', (e) => updateListCategories(e))

function updateListCategories(e) {
    const isMobile = e.matches
    console.log(isMobile)
    if (isMobile) {
        listCategories.setAttribute('inert', '')
    }
    else {
        listCategories.classList.remove('animation')
        document.body.classList.remove('no-scroll')
        listCategories.removeAttribute('inert')
        listCategories.classList.remove('active')
    }
}

function openCategoryMenu() {
    listCategories.classList.add('animation')
    listCategories.classList.add('active')
    listCategories.removeAttribute('inert')

    document.body.classList.add('no-scroll')

    boxCategory.classList.add('active')
}

function closeCategoryMenu() {
    boxCategory.classList.remove('active')
    listCategories.classList.remove('active')

    listCategories.setAttribute('inert', '')
    document.body.classList.remove('no-scroll')

    setTimeout(() => {
        listCategories.classList.remove('animation')
    }, 150)
}

updateListCategories(media)