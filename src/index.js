function mostrarValor(valor) {
    if (typeof valor === "string") {
        console.log(valor.toUpperCase());
    }
    else {
        console.log(valor.toFixed(2));
    }
}
mostrarValor("olá");
mostrarValor(24);
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.dirigir = function () {
        console.log("Dirigindo meu carro");
    };
    return Carro;
}());
var Barco = /** @class */ (function () {
    function Barco() {
    }
    Barco.prototype.navegar = function () {
        console.log("Dirigindo meu barco");
    };
    return Barco;
}());
function mover(veiculo) {
    if (veiculo instanceof Carro) {
        veiculo.dirigir();
    }
    else {
        veiculo.navegar();
    }
}
var meuCarro = new Carro();
var meuBarco = new Barco();
mover(meuCarro);
mover(meuBarco);
