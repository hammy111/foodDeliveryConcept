import "./buttons.css"

export default function Buttons_item(props){
  return(
    <div className="buttons_item">
        <h2>{props.title}</h2>
        <span>{props.text}</span>
    </div>
  )
}