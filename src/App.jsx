//get the data from the api
//send the data to the three components
//retun a ul with the specific items of things
let baseURL = `https://jsonplaceholder.typicode.com/`;
import Name from './name';





import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [contacts, setContacts] = useState([]);



  useEffect(() => {
    const getContacts = async () => {
      try {
        let response = await fetch(`${baseURL}users`);
        let json = await response.json();
        setContacts(json);
        // contacts = thingy;
        console.log(json);
        console.log(contacts);
      }
      catch (error) {
        console.log(error);
      }
    }
    getContacts();
    
  }, []);






  return (
    <>
      <h1>Contacts</h1>

      <Name contacts={contacts}/>
    </>
  )
}

export default App
