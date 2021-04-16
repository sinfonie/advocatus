function menuHover(selector) {
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

function menuClickListener() {
    if (document.querySelector('#nav-menu-btn') !== null) {
        document.querySelector('#nav-menu-btn')
            .addEventListener('click', e => {
                addRemoveClass(document.querySelector('#nav-menu'), 'nav-menu__links--show')
            }, false);
    }
}

function sizingHover(selector) {
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


function sizingClickListener() {
    if (document.querySelector('#sizing-menu-btn') !== null) {
        document.querySelector('#sizing-menu-btn')
            .addEventListener('click', e => {
                addRemoveClass(document.querySelector('#sizing-menu'), 'accesibility__sizing-menu--show')
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

function addRemoveClass(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
    } else {
        el.classList.add(className)
    }
}

function addContrastListener() {
    if (document.querySelector("#contrast-btn") !== null) {
        document.querySelector("#contrast-btn")
            .addEventListener('click', e => {
                addRemoveClass(document.body, 'contrast')
            }, false)
    }
}

const slide = new Slider("#slider-main", {
    pauseTime: 6000,
    generateDots: true,
    generatePrevNext: true,
});

const elementId = 'sizing-normal';

function fontsSizing(primaryClass, secondaryClass) {
    if (!document.body.classList.contains(primaryClass)) {
        document.body.classList.add(primaryClass);
        if (document.body.classList.contains(secondaryClass)) {
            document.body.classList.remove(secondaryClass);
        }
    } else {
        document.body.classList.remove(primaryClass);
    }
}

function addSizingListener() {
    if (document.querySelector("#sizing-large") !== null) {
        document.querySelector("#sizing-large")
            .addEventListener('click', e => {
                fontsSizing('sizing-large', 'sizing-larger')
            }, false);
    }
    if (document.querySelector("#sizing-larger") !== null) {
        document.querySelector("#sizing-larger")
            .addEventListener('click', e => {
                fontsSizing('sizing-larger', 'sizing-large')
            }, false);
    }
    if (document.querySelector("#sizing-normal") !== null) {
        document.querySelector("#sizing-normal")
            .addEventListener('click', e => {
                if (document.body.classList.contains('sizing-large')) {
                    document.body.classList.remove('sizing-large');
                }
                if (document.body.classList.contains('sizing-larger')) {
                    document.body.classList.remove('sizing-larger');
                }
            }, false);
    }
}

sizingClickListener();
menuClickListener();
addSizingListener();
addContrastListener();
menuHover('#nav-menu');
menuHover('#nav-menu-btn');
sizingHover('#sizing-menu');
sizingHover('#sizing-menu-btn');