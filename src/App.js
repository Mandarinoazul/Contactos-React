import './App.css';
import { useEffect, useState} from 'react';
import Card from './components/Card';
import ListCard from './components/ListCard';


function App() {


  const [users,setUser] = useState([]); //para traer datos de la api "Random user"
  const [contactos, setContactos] = useState([]); 
  
  
  
  //funcion para capturar datos de la pagina
  // No me muestra datos de la pagina suministrada 
  const getData = async () => {
    const data = await fetch("http://www.raydelto.org/agenda/php")
    const dataJson = await data.json()
    //console.log(dataJson.results)
    setUser(dataJson.results)
  }

  //usamos usEffect para que cuando se renderice la página podamos ver datos de la api en a la card 
  useEffect(() =>{
      getData()
    },[])

  
  const HandleAddContact = () =>{
    //probé con spread operator pero no funcionaba, luego utilice la funcion concat
    setContactos(contactos.concat(users))
    //setContactos(currentUsers => currentUsers.concat(users)) ---> otra forma de hacerlo
    getData() 
  }  

  const HandleRemoveContact = (id) =>{
    const newContancts = contactos.filter( contact => contact.login.uuid !== id);
    setContactos(newContancts)
    console.log(newContancts)
  }


 
  return (
    <div className="App">
      <div className='Card-Conteiner'>
          { /*Card de usuario principal */
          users.map( user =>  
            <Card key={user.login.uuid}
                 
                  CompleteName={user.name.first + " " + user.name.last}
            
                 
                  tel={user.phone}
                 
                  agregarContacto={HandleAddContact} /* funcion para agregrar un contacto, dentro de esta funcion tambien utilizamos genData() para obenter nuevos usuarios de la api */
                  recargarDatos={getData} /* utilizamos la funcion getData, que tambien utilizamos en 
                  el hook useEffect para que podamos rederizar nueva informacion en la card de usuarios*/
            />
            )
          }
         
      </div>
      <div className='List-container'>
        <ListCard listaDeContactos={contactos} FuncionEliminarContacto={HandleRemoveContact} />
      </div>
    </div>
  );
}

export default App;