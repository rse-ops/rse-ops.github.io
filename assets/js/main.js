function fadeOutPreloader(t, e) {
    (opacity = 1),
        (interval = setInterval(function () {
            opacity <= 0
                ? ((t.style.zIndex = 0), (t.style.opacity = 0), (t.style.filter = "alpha(opacity = 0)"), (document.documentElement.style.overflowY = "auto"), document.getElementById("preloader").remove(), clearInterval(interval))
                : ((opacity -= 0.1), (t.style.opacity = opacity), (t.style.filter = "alpha(opacity = " + 100 * opacity + ")"));
        }, e));
}
setTimeout(function () {
    fadeOutPreloader(document.getElementById("preloader"), 69);
}, 500),

    $(document).ready(function () {
        $(window).on("beforeunload", function () {
            window.scrollTo(0, 0);
        }),
            particlesJS.load("landing", "assets/particles.json", function () {});
    });
