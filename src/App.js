import './App.css';

const Header = () => {
  const text = "Hello Sammi"

  const getText = text => {
    return (
      <div>
    <h1>Hello {text}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente magni enim, possimus eligendi laborum!
    </p>
  </div>
    )
  }

  return <div> {getText('sammi')} </div>
}
const Field = () => {
  const placeholder = 'Typing...'
  const typeInput = "text"

  return <input type= {typeInput} placeholder = {placeholder} />
}

const Button = () => {
  const user = false
  const login = 'login'

  return <button>{user ? 'logout' : login }</button>
}
function App() {
  return (
  <div className='App'>
    <Header/>
    <Field/>
    <Button/>
  </div>
  )
}

export default App;
