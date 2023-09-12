import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Hero from "./components/Hero";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200">
      <Hero />
      <Gallary />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
