import helloWorld from './helloWorld';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
messages();



import ambilDataUser from "./ambilDataUser";
ambilDataUser()
  .then((users) => {
  });



// index.js
import ambilDataUser from "./ambilDataUser";
ambilDataUser()
  .then((users) => {
  });
  