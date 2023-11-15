import "./footer.css";
import img1 from "../../img/Logo.png";
import img2 from "../../img/app-img1-1.png";
import img3 from "../../img/app-img2-1.png";
import { AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
export default function Footer() {
  const elem1 = [
    "About Us",
    "Concept",
    "Franchise",
    "Business",
    "Restaurant signup",
    "For Investors",
  ];
  const elem2 = [
    "Get help",
    "Read FAQs",
    "Restaurants",
    "Specialities",
    "Sign up to deliver",
  ];
  const elem3 = [
    "Contact us",
    "Yellow kitchen Paris 11",
    "69 avenue de la Republique 75011 Paris",
    "0800 111 126",
    "contact@yellowkitchens.com",
  ];

  return (
    <footer>
      <div className="footer_contanier">
        <div className="logos">
          <img src={img1} />
          <hr />
          <div className="img_item">
            <img src={img2} />
            <img src={img3} />
          </div>
        </div>
        <div className="footer_elements">
          <div className="footer_element">
            {elem1.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
          </div>
          <div className="footer_element">
            {elem2.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
          </div>
          <div className="footer_element">
            {elem3.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="finish">
        <div className="icons">
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <BsFacebook />
        </div>
        <div className="info">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>© 2020 Yellow kitchen</p>
        </div>
      </div>
    </footer>
  );
}
