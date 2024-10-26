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

export default Header