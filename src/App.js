import "./App.css";
import NavBar from "./components/NavBar";
import ExpandingCards from "./components/days/day1/ExpandingCards"; /*day1*/
import ProgressStep from "./components/days/day2/ProgressStep"; /*day2*/
import RotatingNav from "./components/days/day3/RotatingNav"; /*day3*/
import HiddenSearch from "./components/days/day4/HiddenSearch"; /*day4*/
import BlurryLoading from "./components/days/day5/BlurryLoading"; /*day5*/
import ScrollAnimation from "./components/days/day6/ScrollAnimation"; /*day6*/

function App() {
  return (
    <div className="App">
      <NavBar />
      <ExpandingCards /> {/**day1 */}
      <ProgressStep /> {/**day2 */}
      <RotatingNav /> {/**day3 */}
      <HiddenSearch /> {/**day4 */}
      <BlurryLoading /> {/**day5 */}
      <ScrollAnimation /> {/**day6 */}
    </div>
  );
}

export default App;
