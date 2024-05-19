document.addEventListener('scroll', function(e) {
    var scrolled = window.pageYOffset;
    var parallaxElements = document.querySelectorAll('.layer.text');
    parallaxElements.forEach(function(elem) {
        var speed = elem.getAttribute('data-speed');
        var yPos = -(scrolled * speed) + 'px';
        elem.style.transform = 'translateY(' + yPos + ')';
    });
});
