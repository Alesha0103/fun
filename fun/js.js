function buttonClick1 (button) {
    document.getElementById('fine').style.display = 'block';
    document.getElementById('bad').style.display = 'none';
}
function buttonClick2 (button) {
    document.getElementById('bad').style.display = 'block';
    document.getElementById('fine').style.display = 'none';
}
function buttonClick () {
    (buttonClick1 || buttonClick2);
}

let showDiv = document.querySelector('.content');
showDiv.addEventListener('click', function(e) {
    function hideShowDiv() {
        if (event.target !== showDiv) {    
            showDiv.style.display = 'none';
            showDiv.removeEventListener('click')
        }
    }
    hideShowDiv();
})

// function hideContent () {
//     display = document.getElementById('123').style.display;
//     if (display = 'block') {
//         document.getElementById('123').style.display = 'none';
//     }
// }