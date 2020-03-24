const usuario = {
  nome: "lucas",
  tel: "9989988",
  idade: 28,
  endereco: {
    rua: "B1",
    numero: 102
  }
};

const {
  nome,
  idade,
  endereco: { rua }
} = usuario;

console.log(nome);
console.log(idade);
console.log(rua);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
