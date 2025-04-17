window.onload = function() {
    let count = 0;

    const buttonStart = document.getElementById('button-start');
    const buttonReset = document.getElementById('button-reset');
    const display = document.getElementById('display');

    buttonStart.onclick = function() {
        count++;
        display.innerHTML = count;
    };

    buttonReset.onclick = function() {
        count = 0;
        display.innerText = count;
    };
};     

//The output might not work at first. Open it with live server to see the preview.