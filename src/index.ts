// 1. Definindo o contrato (a interface)
interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // Propriedade opcional com '?'
  readonly id: number; // Propriedade somente leitura
}

// 2. Usando a interface para tipar um objeto
const usuario: Pessoa = {
  id: 1,
  nome: "Ana",
  idade: 30,
  email: "ana@email.com"
};

// 3. Usando em uma função
function imprimirDetalhes(pessoa: Pessoa) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

imprimirDetalhes(usuario); // Funciona!

// const usuarioInvalido: Pessoa = { nome: "Carlos" }; // Erro! Falta 'id' e 'idade'.

// // Sem generics (usando 'any'), perdemos a segurança de tipos.
// function primeiroElementoAny(arr: any[]): any {
//   return arr[0];
// }

// const primeiroNome = primeiroElementoAny(["Alice", "Bob"]); // tipo 'any'
// const primeiroNumero = primeiroElementoAny([1, 2, 3]); // tipo 'any'

 // Com generics, mantemos a segurança de tipos!
function primeiroElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

// O TypeScript infere o tipo de T automaticamente:
const primeiroNome = primeiroElemento(["Alice", "Bob"]); // tipo 'string'
const primeiroNumero = primeiroElemento([10, 20, 30]);   // tipo 'number'

console.log(primeiroNome?.toUpperCase())
console.log(primeiroNumero?.toFixed(2));