// useQuery é um hook customizado para acessarmos os items definidos dentro da nossa firebase através de uma funçao simples
// importa a coleçao (no nosso caso "users") e os documentos de dentro dela (user1, user2, etc etc);
// necessário importar para posteriormente conseguirmos acessar os items de dentro da firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

function useQuery() { // nome da função é o mesmo do hook

  async function getData(col) { // passa col (collection) como parametro para podermos utilizá-la posteriormente

    // getDocs é usado para pegar os documentos da coleção especifica
    // db é a detabase da firestore
    // col é um parametro aleatorio para representar o nome da coleção, poderia ser "users" no meu caso

    // resumindo, quando passamos db e col estamos mandando a firestore nos dar a referência dessa coleção.
    // O getDocs com collection dentro funcionam como uma promessa!!!
    // a nossa const snapshot retorna um objeto puxado pelo getDocs
    const snapshot = await getDocs(collection(db, col)); 
    
  

    // snapshot.docs é um array, e cada elemento de dentro do array é um QuerySnapshotDocument que representa cada objeto de dentro da nossa firebase
    // Lembrando que cada usuário é um objeto com as suas chaves e valores dentro dele. user1 é um, user2 é outro, e assim em diante
    // ai como ele está acessando os objetos, ele mapeia as infos (item) dos objetos para podermos usá-las:::
      // map(...) is used to transform each document snapshot into a plain JavaScript object with its id and data.
    const docs = snapshot.docs.map(item => ({ id: item.id, ...item.data() }));


    return docs;
  }

  return { getData }
}

export default useQuery;

// The hook returns an object containing the getData function, 
// allowing components that use this hook to call getData and retrieve Firestore data as needed. 
// Finally, useQuery is exported as the default export, so it can be 
// easily imported and used in other parts of your application.


// para DELETAR documentos: 

    // import { deleteDoc, doc } from "firebase/firestore";
    // import { db } from "./firebase.js";
    // await deleteDoc(doc(db, "collectionName", "documentId"));


// para ATUALIZAR documentos:

    // import { updateDoc, doc } from "firebase/firestore";
    // import { db } from "./firebase.js";

  //   await updateDoc(
  // doc(db, "collectionName", "documentId"), // reference to the document
  // { keyToUpdate: "newValue" }              // object with the fields to update
  // }; 