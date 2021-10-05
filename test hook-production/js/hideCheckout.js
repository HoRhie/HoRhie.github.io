var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

// Hides fixed footer, when keybord is opened
hideCheckout();

function hideCheckout() {
    document.write([
        "<style>",
        ".checkout { visibility: hidden; }",
        "@media screen and (orientation: portrait) and (min-height: " + (Math.max(windowWidth, windowHeight) - 30) + "px)",
        "{ .checkout { visibility: visible; } }",
        "@media screen and (orientation: landscape) and (min-height: " + (Math.min(windowWidth, windowHeight) - 30) + "px)",
        "{ .checkout { visibility: visible; } }",
        "</style>"
    ].join(" "));
}