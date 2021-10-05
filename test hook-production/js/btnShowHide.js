var elem = document.getElementById('elemShowHide');
var btn = document.getElementById('btnShowHide');
var table = document.getElementsByClassName('table-item-wrapper')[0];
var tableHeight = table.offsetHeight;

elem.classList.add('js-hidden')
function btnShowHide() {
    if (elem.classList.contains('js-shown')) {
        table.style.maxHeight = "65px";
        elem.classList.remove('js-shown');
        elem.classList.add('js-hidden');
        btn.firstChild.innerText = "Show";
    } else {
        table.style.maxHeight = tableHeight + "px";
        elem.classList.remove('js-hidden');
        elem.classList.add('js-shown');
        btn.firstChild.innerText = "Hide";
    }
}