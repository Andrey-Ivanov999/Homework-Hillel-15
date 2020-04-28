window.onload = function() {
    var inputs = document.getElementsByTagName('input');
    var result = document.getElementById(' area ');

    this.setInterval(function() {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[inputs.length - 1].value == inputs[i].value) {

                area.value += inputs[i].value + " ";
            } else {
                area.value += inputs[i].value + ",";
            }
            // console.log(inputs[i].value)


        }
        // console.log(result)
    }, 3000);
}