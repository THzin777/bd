import { db } from "./firebaseConfig.js";
import {collection,addDoc} from "https://gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

function getInputs() {
  return {
    nome: document.getElementById("nome"),
    idade: document.getElementById("idade"),
    cargo: document.getElementById("cargo")
  };
}
  function getValores({nome, idade, cargo}) {
    return {
      nome: nome.value.trin(),
      idade: parseInt(idade.value),
      cargo: cargo.value.trin()
    };
  }

document.getElementById("botaoEnviar").addEventListener("click", async function(){
  const Inputs = getInputs();
  const dados = getValores (Inputs);
  console.log('Inputs:',Inputs) 
  console.log('Dados',dados)
 
  try{
  const ref =  await addDoc (collection(db, "funcionarios"),dados);
  console.log("ID do documento", ref.id);
  }
  catch(e){
  console.log("Error",e)
 }
});
document.addEventListener()
