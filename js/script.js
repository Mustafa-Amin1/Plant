const navLis = Array.from(document.getElementsByClassName('nav-item'))
for (let i = 0; i < navLis.length; i++) {
    navLis[i].addEventListener('click', addActive)
}
function addActive() {
    for (let i = 0; i < navLis.length; i++) {
        if (!this.classList.contains('active')) {
            this.classList.add("active");
            navLis[i].classList.remove('active')
        } else {
            navLis[i].classList.remove('active')
        }
    }
}


















// Language switch
const languageAnqur = Array.from(document.getElementsByClassName("dropdown-item "))

languageAnqur[0].addEventListener('click', EnglishPage)
languageAnqur[1].addEventListener('click', ArabicPage)
function EnglishPage() {
    if (document.firstElementChild.getAttribute('dir') === "rtl") {
        document.firstElementChild.setAttribute('dir', "ltr")
        document.firstElementChild.setAttribute('lang', "en")
    }
}
function ArabicPage() {
    if (document.firstElementChild.getAttribute('dir') === "ltr") {
        document.firstElementChild.setAttribute('dir', "rtl")
        document.firstElementChild.setAttribute('lang', "ar")
        nav.innerText = languages.Ar.Home

    }
}

var languages = {

    eng: {
        Home: "Home"
    },
    Ar: {
        Home: "الرئيسية"
    }
}
