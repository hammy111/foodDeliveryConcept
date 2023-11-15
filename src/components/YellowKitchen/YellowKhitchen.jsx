import "./yellowKhitchen.css"
import YellowKhitchen_items from "./yellowKhitchen_item"
const images = [
    {url:"img1.png", id:1,},
    {url:"img2.png", id:2,},
    {url:"img3.png", id:3,},
    {url:"img4.png", id:4,},
]
export default function YellowKhitchens(){
    return(
        <div className="khitchen">
            <div className="title">
                <h2>#YellowKhitchens</h2>
                <h3>in instagram</h3>
        </div>
        <div className="images">
        {images.map((item,i) => (
        <YellowKhitchen_items key={i} url={item.url} />
      ))}
            </div>
        </div>
    )
}
