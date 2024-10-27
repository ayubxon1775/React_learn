const User = ({ firstName, lastName, link}) => {
  return (
    <div>
      <h1>Mening ismim - {firstName.name}, Sharifim - {lastName()}
      </h1>
      <a href={link}>You tube kanalim</a>
    </div>
  )
}

const App = () => {
  return ( 
  <div>
    <User firstName={{name : 'Samar'}} lastName={() => "Badriddinov" }  link="youtube.com" />
    <User firstName={{name : 'Omar'}} lastName={() => "Abdullayev" }  link="google.com" />
  </div>
)
}

export default App