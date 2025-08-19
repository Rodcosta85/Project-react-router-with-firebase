// esse code block é gerado pelo próprio firebase quando voce faz a conexão com algum app
// No nosso caso, a aplicação web dentro do vs code
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFzyDgEJ2QunnJKMbySfgR_zL88KSc-D0", // chave de API igual é feito em uma chamada de qualquer API, mas é o firebase em si
  authDomain: "some-users-db.firebaseapp.com",
  projectId: "some-users-db",
  storageBucket: "some-users-db.firebasestorage.app",
  messagingSenderId: "703194179021",
  appId: "1:703194179021:web:02ebc3c3c85a4a633a9084",
  measurementId: "G-1D3XPKTCPM"
};


// faz com que o firebase entenda qual projeto está interagindo, retornando um objeto app
// é usado como uma referência para acessar o firebase
// precisa começar com essa declaração antes das outras para iniciar o firestore dentro do nosso app/projeto
const app = initializeApp(firebaseConfig);





// inicializa o firebase dentro do vs code e também conecta com o javascript. 
// Nos permite acessar a database (db) que foi criada dentro do firebase
// Contém as ids e a chave, como destacado anteriormente no firebaseConfig
const db = getFirestore(app);





const auth = getAuth(app);

export { db, auth }
