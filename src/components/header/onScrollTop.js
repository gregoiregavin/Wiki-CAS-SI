const onScrollTop = () => {

    let globalHeader = document.getElementsByClassName('global-header')[0]
    let mainLogo = document.getElementsByClassName('main-logo')[0]
    let mainHeading = document.getElementsByClassName('main-heading')[0]
    let mainNav = document.getElementsByClassName('main-nav')[0]
    let searchIcon = document.getElementsByClassName('search-icon')[0]

    window.onscroll = function () {

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            globalHeader.classList.add('scrolled')
            mainLogo.classList.add('scrolled')
            mainHeading.classList.add('scrolled')
            mainNav.classList.add('hidden')
            searchIcon.classList.add('scrolled')
        } else {
            globalHeader.classList.remove('scrolled')
            mainLogo.classList.remove('scrolled')
            mainHeading.classList.remove('scrolled')
            mainNav.classList.remove('hidden')
            searchIcon.classList.remove('scrolled')
        }
    }
}

export default onScrollTop