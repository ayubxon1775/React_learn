import {Component} from 'react'

class User extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0, age: ''
    }
  }
  onIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }
  onDecrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }))
  }
  onRestart = () => {
    this.setState({
      counter: 0
    })
  }

  changeHandler = (e, name) => {
    this.setState({
     age: e.target.value
    })
  }
  render() {
    const { firstName, lastName, link} = this.props
    const {age, counter} = this.state

    return(
      <div className="w-50 mx-auto">
      <div className='border p-3 mt-5'>
        <h1>
          Mening ismim - {firstName}, sharifim - {lastName}, yoshim - {age}
        </h1>
        <a href={link}>youtube kanalim</a>
        <div className='mt-3'>
        <button onClick={this.onIncrement} className='btn btn-success'>
          Increment
        </button>
        <button onClick={this.onDecrement} className='btn btn-danger mx-2'>
          Decrement
        </button>
        <button onClick={this.onRestart} className='btn btn-info'>
          Restart
        </button>
        <p>{counter}</p>
        </div>
        <form>
          <span>Yoshingiz</span>
          <input type="text" className='form-control' onChange={e => this.changeHandler (e, 'sammi')} />
        </form>
      </div>
      </div>
    )
  }
}




// const User = ({ firstName, lastName, link}) => {
//   return (
//     <div>
//       <h1>Mening ismim - {firstName.name}, Sharifim - {lastName()}
//       </h1>
//       <a href={link}>You tube kanalim</a>
//     </div>
//   )
// }

const App = () => {
  return ( 
  <div>
    <User firstName ='Samar' lastName = "Badriddinov"   link="youtube.com" />
    <User firstName = 'Omar' lastName = "Abdullayev"   link="google.com" />
  </div>
)
}

export default App