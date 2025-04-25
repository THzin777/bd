import { db } from './firebaseConfig.js ';
import { collection, addDoc, getDocs,doc,deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


// SALVANDO DADOS NO BANCO 
function getInputs() {
    return {
        nome: document.getElementById('nome'),
        idade: document.getElementById('idade'),
        cargo: document.getElementById('cargo')
    };
}

function getValores({ nome, idade, cargo }) {
    return {
        nome: nome.value.trim(),
        idade: parseInt(idade.value),
        cargo: cargo.value.trim()
    };
}

function limpar({nome, idade, cargo}){
    nome.value = ''
    idade.value = ''
    cargo.value = ''
}

document.getElementById("btnEnviar").addEventListener('click', async function(){
    const Inputs = getInputs(); 
    const dados =getValores(Inputs)

    console.log("Inputs:", Inputs)
    console.log("Dados", dados)

    if (!dados.idade || !dados.nome || !dados.cargo){
        alert("Preencha todos os campos.");
        return
    } 
    try{
        const ref = await addDoc(collection(db, "funcionarios"), dados);
        console.log("ID do documento", ref.id); 
        limpar(Inputs)
        alert("Funcionário cadastrado com sucesso: ")
    }catch (e){
        console.log("Erro: ", e)
    }
});

// CONSULTAR (LISTAR) OS DADOS DO BANCO

   

async function buscarFuncionarios() {
    const dadosBanco = await getDocs(collection(db, "funcionarios"));
    console.log(dadosBanco)
    const funcionarios = []; 
    for (let funcionario of dadosBanco.docs){
        funcionarios.push({id: funcionario.id, ...funcionario.data() });
    }
    console.log(funcionarios)
    return funcionarios
}

const listaFuncionariosDiv = document.getElementById("listar-funcionarios")

async function carregarListaDeFuncionarios() {
    listaFuncionariosDiv.innerHTML = '<p> Carregando lista de Funcionarios... </p>';
    try {
        let funcionario = await buscarFuncionarios();
        console.log(funcionario)
        renderizarListaDeFuncionarios(funcionario);
    } catch (error) {
        console.log("Erro ao carregar a lista de funcionarios: ", error);
        listaFuncionariosDiv.innerHTML = '<p> Erro ao carregar a lista de funcionários... </p>';
    }
}

function renderizarListaDeFuncionarios(funcionarios){
    listaFuncionariosDiv.innerHTML= '';

    if (funcionarios.length === 0){
        listaFuncionariosDiv.innerHTML = '<p> Nenhum Funcionário cadastrado ainda ;( </p> ';
        return 
    }
    for (let funcionario of funcionarios) {
        const funcionarioDiv = document.createElement('div');
        funcionarioDiv.innerHTML = `
            <strong> Nome: </strong> ${funcionario.nome} <br>
            <strong> Idade: </strong> ${funcionario.idade} <br>
            <strong> Cargo: </strong> ${funcionario.cargo} <br>
            <button class = "btn-excluir " data-id= "${funcionario.id}" > excluir </button>
            <hr>
        `
        listaFuncionariosDiv.appendChild(funcionarioDiv);
    }
}

document.addEventListener('DOMContentLoaded', carregarListaDeFuncionarios);

//EXCLUIR DADOS DO BANCO DE DADOS 

async function excluirFuncionario(idfuncionario) {
  try{
    const documentoDeletar = doc(db, 'funcionarios', idfuncionario);
    await deleteDoc (documentoDeletar);
    console.log("funcionario com ID" + idfuncionario + 'foi excluido');
  return true;
  }catch (erro){
    console.log("Erro ao excluir o funcionario", erro);
    alert("Ocorreu um erro ao excluir funcionario. Tente novamente");
    return false;
   }
}

async function lidarclique(eventoDeClique) {
  const btnexcluir = eventoDeClique.target.closest('.btn-excluir');
  const certeza = confirm("Tem certeza que deseja fazer essa exclusão");
if(certeza){



  if (btnexcluir){
  const idfuncionario = btnexcluir.dataset.id;
  const exclusaoBemSucedida = await excluirFuncionario (idfuncionario);
 

  if(exclusaoBemSucedida){
    carregarListaDeFuncionarios();
    alert('Funcionario excluido com sucesso!');
   }
  }

}else{
  alert("Exclusao cancelada");
}
  return
}

listaFuncionariosDiv.addEventListener('click', lidarclique);
