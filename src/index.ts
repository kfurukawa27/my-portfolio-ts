function mostrarValor(valor: string | number) {
    if (typeof valor === "string") {
        console.log(valor.toUpperCase());
    } else {
        console.log(valor.toFixed(2));
    }
}

mostrarValor("olá")
mostrarValor(24)

class Carro { 
    dirigir() {
        console.log("Dirigindo meu carro");
    }
}
class Barco { 
    navegar() {
        console.log("Dirigindo meu barco");
    }

}

function mover(veiculo: Carro | Barco) {
    if (veiculo instanceof Carro) {
        veiculo.dirigir()
    } else {
        veiculo.navegar()
    }
}

const meuCarro = new Carro();
const meuBarco = new Barco();

mover(meuCarro);
mover(meuBarco)