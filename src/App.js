import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Utility from "./components/Utility";
import Specifics from "./components/Specifics";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Utility />
      <Specifics />
      <FAQ />
    </div>
  );
}

export default App;
