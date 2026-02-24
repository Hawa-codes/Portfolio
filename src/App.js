import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import SKill from "./components/Skill/skill";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <SKill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
