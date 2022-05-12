// Custom Scripts
// burgerMenu
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// tabs 

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active')

//Skroll
function toSkroll() {
    const links = document.querySelector('.menu');
    const header = document.querySelector('header');
    const about = document.querySelector('.section__about');
    const service = document.querySelector('.section__scope');
    const work = document.querySelector('.section__portfolio');
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    links.addEventListener('click', e => {
        const target = e.target;
        switch (target.name) {
            case 'home': header.scrollIntoView({ block: "start", behavior: "smooth" });
                break;
            case 'about': about.scrollIntoView({ block: "start", behavior: "smooth" });
                break;
            case 'service': service.scrollIntoView({ block: "start", behavior: "smooth" });
                break;
            case 'work': work.scrollIntoView({ block: "start", behavior: "smooth" });
                break;
        }
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
    })
}
toSkroll()
// Modal
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)

    const body = document.body

    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add('locked')
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none'
        body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
            body.classList.remove('locked')
        }
    })
}
bindModal('.btn__hero', '.modal__wrapper', '.modal__close')
bindModal('.btn__offer', '.modal__wrapper', '.modal__close')