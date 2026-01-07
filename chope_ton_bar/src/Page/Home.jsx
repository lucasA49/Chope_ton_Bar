import "../index.css"
// components
import Header from "../Components/Header.jsx";
import Navbar from "../Components/NavBar.jsx";
import MapBanner from "../Components/MapBanner.jsx";
function Home() {
  return (
  <>
  <Header />
  <MapBanner />
  <Navbar />
  </>
  )
}
export default Home;