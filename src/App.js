import "./App.css";
import NavBar from "./components/NavBar";
import ExpandingCards from "./components/days/day1/ExpandingCards";
import ProgressStep from "./components/days/day2/ProgressStep";
import RotatingNav from "./components/days/day3/RotatingNav";
import HiddenSearch from "./components/days/day4/HiddenSearch";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ExpandingCards />
      <ProgressStep />
      <RotatingNav />
      <HiddenSearch />
    </div>
  );
}

export default App;
