//Get Value
document.querySelectorAll('input[type=color]').forEach(function (picker) {
    //Target Point
    var targetlabel = document.querySelector('label[for="' + picker.id + '"]'),
        colorArea = document.createElement(span);

    colorArea.innerHTML = picker.value;
    targetlabel.appendChild(colorArea);
    
    //Now AddEventListener
    picker.addEventListener('change', function() {
        colorArea.innerHTML = picker.value;
        targetlabel.appendChild(colorArea);
    });
});