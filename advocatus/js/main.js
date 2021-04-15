function addMenuListner(selector) {
    if (document.querySelector(selector) !== null) {
        let el = document.querySelector(selector);
        el.addEventListener('mouseover', e => {
            showHideMenu(true, '#nav-menu', 'nav-menu__links--show')
        }, false);
        el.addEventListener('mouseleave', e => {
            showHideMenu(false, '#nav-menu', 'nav-menu__links--show')
        }, false);
    }
}

function addSizingListner(selector) {
    if (document.querySelector(selector) !== null) {
        let el = document.querySelector(selector);
        el.addEventListener('mouseover', e => {
            showHideMenu(true, '#sizing-menu', 'accesibility__sizing-menu--show')
        }, false);
        el.addEventListener('mouseleave', e => {
            showHideMenu(false, '#sizing-menu', 'accesibility__sizing-menu--show')
        }, false);
    }
}

function showHideMenu(active, selector, className) {
    let el = document.querySelector(selector);
    if (active) {
        if (!el.classList.contains(className)) {
            el.classList.add(className);
        }
    } else {
        if (el.classList.contains(className)) {
            el.classList.remove(className);
        }
    }
}

const slide = new Slider("#slider-main", {
    pauseTime: 6000,
    generateDots: true,
    generatePrevNext: true,
});

addMenuListner('#nav-menu');
addMenuListner('#nav-menu-btn');
addSizingListner('#sizing-menu');
addSizingListner('#sizing-menu-btn');