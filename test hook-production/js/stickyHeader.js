window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var fakeHeader = document.getElementById("fake-header__inner");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset >= 1) {
    fakeHeader.classList.add("js-is-sticky");
  } else {
    fakeHeader.classList.remove("js-is-sticky");
  }
}