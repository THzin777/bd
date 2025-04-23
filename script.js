import { DB } from "./firebaseconfig";
import {
  collection,
  addDoc,
} from "https://teste-b28fe-default-rtdb.firebaseio.com/";
function getimputs() {
  return {
    nome: document.getelelementbyid("nome"),
    idade: document.getElementById("idade"),
    cargo: document.getElementById("cargo"),
  };
  function getvalues(nome, idade, cargo) {
    return {
      nome: nome.value.trim(),
      idade: parseInt(idade.value),
      cargo: cargo.value.trin(),
    };
  }
}
