import "./App.css";
import NavBar from "./components/NavBar";
import ExpandingCards from "./components/days/day1/ExpandingCards"; /*day1*/
import ProgressStep from "./components/days/day2/ProgressStep"; /*day2*/
import RotatingNav from "./components/days/day3/RotatingNav"; /*day3*/
import HiddenSearch from "./components/days/day4/HiddenSearch"; /*day4*/
import BlurryLoading from "./components/days/day5/BlurryLoading"; /*day5*/
import ScrollAnimation from "./components/days/day6/ScrollAnimation"; /*day6*/
import SplitLandingPage from "./components/days/day7/SplitLandingPage"; /*day7*/
import FromWave from "./components/days/day8/FormWave"; /*day8*/
import SoundBoard from "./components/days/day9/SoundBoard"; /*day9*/
import DadJokes from "./components/days/day10/DadJokes"; /*day10*/
import EventKeyCode from "./components/days/day11/EventKeyCode"; /*day11*/
import Faq from "./components/days/day12/Faq"; /*day12*/
import RandomChoicePicker from "./components/days/day13/RandomChoicePicker"; /*day13*/
import AnimatedNav from "./components/days/day14/AnimatedNav"; /*day14*/

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
      <SplitLandingPage /> {/**day7 */}
      <FromWave /> {/**day8 */}
      <SoundBoard /> {/**day9 */}
      <DadJokes /> {/**day10 */}
      <EventKeyCode /> {/**day11 */}
      <Faq /> {/**day12 */}
      <RandomChoicePicker /> {/**day13 */}
      <AnimatedNav /> {/**day14 */}
    </div>
  );
}

export default App;
