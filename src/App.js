import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import Releases from "./components/releases/Releases";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";
import Separador from "./components/separador/Separador";
import Bio from "./components/bio/Bio";
import Form from "./components/form/Form"
import Playlists from "./components/playlists/Playlists";
import Booking from "./components/booking/Booking";

function App() {
  return (
    <div className="App">
      <Cover />
      <Navbar />
      <Releases />
      <Separador />
      <Slider />
      <Playlists />
      <Bio />
      <Booking />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
