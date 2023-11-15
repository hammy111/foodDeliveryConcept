import Card_item from "./card_items";

const card = [
  {
    url: "Page_1.png",
    text: "delivery in all paris in less than 30 minutes",
    id: 1,
  },
  { url: "delivery.png", text: "Free delivery from 29 euros", id: 2 },
  { url: "paris.png", text: "Only fresh and French products", id: 3 },
];

export default function Cards() {
  return (
    <div className="cards">
      {card.map((item,i) => (
        <Card_item key={i} url={item.url} text={item.text}  />
      ))}
    </div>
  );
}
