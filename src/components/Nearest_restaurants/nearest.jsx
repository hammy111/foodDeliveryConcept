import { useState } from "react";
import "./nearest.css";
import { TiLocationOutline } from "react-icons/ti";
export default function Nearset_restaurant() {
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState("Send!");
  return (
    <div className="nearest">
      <div className="text">
        <h2>Your nearest restaurants</h2>
        <p>
          Each kitchen works with its own delivery area to deliver food to you
          as soon as possible
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (text !== "") {
            setText("");
            setSubmit("Sended !");
            setTimeout(() => {
              setSubmit("Send!");
            }, 3000);
          }
        }}
      >
        <label>
          <TiLocationOutline />
          <input
            type="text"
            placeholder={"Enter delivery address"}
            className="address"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </label>
        <input type="submit" value={submit} className="send" />
      </form>
    </div>
  );
}
