import Buttons_item from "./buttons_item"

const buttons= [
    {title:"Delivery", text:"Order in" , id:1},
    {title:"Takeout", text:"Grab and go", id:2}
]
export default function Buttons (){
    return(
        <div className="buttons">
              {buttons.map(item=> <Buttons_item 
               title = {item.title}    
               text = {item.text}
               key = {item.id}
               />)}
        </div>
    )
}