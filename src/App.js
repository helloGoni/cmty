import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SectionMenu1 from "./components/main/SectionMenu1";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SectionMenu1></SectionMenu1>
      <Footer></Footer>
    </div>
  );
}

export default App;
