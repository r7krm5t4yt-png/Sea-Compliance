// Mobile menu: open/close the navigation on small screens
(function () {
    var toggle = document.querySelector('.menu-toggle');
    var links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    function setOpen(open) {
        links.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function () {
        setOpen(!links.classList.contains('open'));
    });

    // Close the menu after a link is tapped
    links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') setOpen(false);
    });
})();
