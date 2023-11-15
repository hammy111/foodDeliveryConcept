import "./foodCourt.css";
import img1 from "../../img/Photo.png";
import Buttons from "./button";
import Cards from "./Card_items/card";
export default function FoodCourt() {
  return (
    <div className="section_1">
      <div className="section_1_conatiner">
        <div>
          <h1>Your Food court at home</h1>
          <Buttons />
        </div>
        <img src={img1} />
      </div>
      <Cards />
    </div>
  );
}
