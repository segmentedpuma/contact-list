const Name = ({contacts}) => {


  
  return (
    <ul>
      
      {
        contacts.map((currentObject) => {
          return <li key={currentObject.id}>{currentObject.name}</li>
        })
      }
    </ul>
  )

}

export default Name;