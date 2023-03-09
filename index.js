
let celsius = document.getElementById('celsius');
let kelvin = document.getElementById('kelvin');
let fahrenheit = document.getElementById('fahrenheit');


celsius.oninput = function () {
    let fh = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(fh.toFixed(2));

    let kel = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(kel.toFixed(2));
}
kelvin.oninput = function () {
    let fh = (parseFloat(
        kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(fh.toFixed(2));

    let cel = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(cel.toFixed(2));
}

fahrenheit.oninput = function () {
    let cel = ((parseFloat(
        fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(cel.toFixed(2));

    let kel = (parseFloat(
        fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(kel.toFixed(2));
}
