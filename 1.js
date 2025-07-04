                      //bhaskara
alert("Fórmula de Bhaskara");
let a = parseInt(prompt('Digite a'));
let b = parseInt(prompt('Digite b'));
let c = parseInt(prompt('Digite c'));
let delta = (b ** 2) - (4 * a * c);
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("As raízes são x1 = " + x1 + " e x2 = " + x2);
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert("x = " + x);
} else {
    alert("Impossível calcular as raízes");
}
