import "./card.css"

export default function Card_item(props){
return(
    <div className="card_items">
        <img src={require(`../../../img/${props.url}`)} alt="" />
        <p>{props.text}</p>
    </div>
)
}