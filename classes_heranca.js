class DataList {
  constructor() {
    this.data = [];
  }

  //função statica dentro da classe, não visualiza o restante da class e pode ser chamada sem new, apenas pra tarar informação
  static addNovo() {
    this.lista = document.querySelector("#lista");
    this.lista.innerHTML += this.lista.innerHTML = `<li>Novo</li>`;
  }

  add(data) {
    this.data.push(data);
    // this.lista = document.querySelector("#lista");
    // this.lista.innerHTML += this.lista.innerHTML = `<li>${this.data}</li>`;
  }
}

//classe sem parametro// extends cria hereança da classse DataList
class TodoList extends DataList {
  //método contrutor da classe, o que vai rodar primeiro
  constructor() {
    super();
    this.tudos = [];
  }
  addTudo() {
    this.tudos.push("novo Tudo");

    this.lista = document.querySelector("#lista");
    this.add("Teste");
    this.lista.innerHTML += this.lista.innerHTML = `<li>${this.tudos} e ${this.data}</li>`;
  }
}

//instancia a classe
var minhalista = new TodoList();

var bottonElement = document.querySelector("#novotudo");

bottonElement.onclick = function() {
  //minhalista.addTudo();
  TodoList.addNovo();
};

// class tudoList2 {
//   constructor() {
//     this.tudos = [];
//   }
//   constructor(tudo) {
//     this.tudos = tudo;
//   }
// }
