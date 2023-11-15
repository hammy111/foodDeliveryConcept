import FoodCourt from "./FoodCourt/foodCourt_item";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Limons from "./Limons/Limons";
import Map from "./Map/map";
import Nearset_restaurant from "./Nearest_restaurants/nearest";
import Restaurants from "./Restaurants/restaurants";
import Specialities from "./Specialities/Specialities";
import YellowKhitchens from "./YellowKitchen/YellowKhitchen";

export default function App() {
  return (
    <>
      <Header />
      <FoodCourt />
      <Restaurants />
      <Nearset_restaurant />
      <Specialities />
      <Limons />
      <Map />
      <YellowKhitchens />
      <Footer />
    </>
  );
}
