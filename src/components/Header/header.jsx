import "./header.css";
import logo from "../../img/LogoHeader.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill, BsCart, BsTelephone } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Header() {
  const elements = ["Delivery info", "About us", "Restaurants", "Specialities"];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <>
      <header className="header_container">
        <img src={logo} alt="logo" />
        <div className="header_menu_container">
          <div className="login_container  def_blocs">
            <BsFillPersonFill />
            <span>Log in</span>
          </div>
          <div className="shop_container  def_blocs">
            <BsCart />
            <span>0</span>
          </div>
          <div
            className="burger_container"
            onClick={() => {
              setOpen(!open);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </header>
      <div className="burger_menu" style={{ right: open ? "0" : "-100vw" }}>
        <div className="burger">
          <div className="burger_contact">
            <div className="burger_contact_types">
              <BsTelephone />
              <p>0800 111 126</p>
            </div>
            <p>8:00 - 22:00</p>
          </div>
          <div className="burger_elements">
            {elements.map((item, id) => {
              return (
                <div className="burger_every_element" key={id}>
                  <p>{item}</p>
                </div>
              );
            })}
            <div className="language_container">
              <select name="language">
                <option value="English">English</option>
                <option value="Russian">Russian</option>
                <option value="Armenia">Armenia</option>
              </select>
            </div>
          </div>
          <div className="login">
            <div className="shop_container into_bruger">
              <BsCart />
              <span>0</span>
            </div>
            <div className="login_container into_burger">
              <BsFillPersonFill />
              <span>Log in</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
