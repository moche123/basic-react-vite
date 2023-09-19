import { CardInfo } from "./interfaces/Card.interface"


function Card( {age,name}:CardInfo ) {
  return (
    <div>Hello {age}, your name is {name}</div>
  )
}

export default Card