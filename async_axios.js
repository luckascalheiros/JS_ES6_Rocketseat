// const minhapromessa = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });

// async function executaPromessa() {
//   //quando tiver um await na frente da promessa a proxima linha só irá executar apos o resultado da primeira
//   const response = await minhapromessa();
//   console.log(response);
// }

// const response = async () => {
//   teste = await minhapromessa();
//   return teste;
// };

// console.log(response());

import axios from "axios";

class api {
  static async gatUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.log("Erro: " + error);
    }
  }
}

api.gatUserInfo("luckascalheiros");
