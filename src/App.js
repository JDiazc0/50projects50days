import "./App.css";
import NavBar from "./components/NavBar";
import ExpandingCards from "./components/days/day01/ExpandingCards"; /*day1*/
import ProgressStep from "./components/days/day02/ProgressStep"; /*day2*/
import RotatingNav from "./components/days/day03/RotatingNav"; /*day3*/
import HiddenSearch from "./components/days/day04/HiddenSearch"; /*day4*/
import BlurryLoading from "./components/days/day05/BlurryLoading"; /*day5*/
import ScrollAnimation from "./components/days/day06/ScrollAnimation"; /*day6*/
import SplitLandingPage from "./components/days/day07/SplitLandingPage"; /*day7*/
import FromWave from "./components/days/day08/FormWave"; /*day8*/
import SoundBoard from "./components/days/day09/SoundBoard"; /*day9*/
import DadJokes from "./components/days/day10/DadJokes"; /*day10*/
import EventKeyCode from "./components/days/day11/EventKeyCode"; /*day11*/
import Faq from "./components/days/day12/Faq"; /*day12*/
import RandomChoicePicker from "./components/days/day13/RandomChoicePicker"; /*day13*/
import AnimatedNav from "./components/days/day14/AnimatedNav"; /*day14*/
import IncrementingCounter from "./components/days/day15/IncrementingCounter"; /*day15*/
import DrinkWater from "./components/days/day16/DrinkWater"; /*day16*/
import MovieApp from "./components/days/day17/MovieApp"; /* day17 */
import BackgroundSlider from "./components/days/day18/BackgroundSlider"; /* day18 */
import ThemeClock from "./components/days/day19/ThemeClock"; /* day19 */
import RippleEffect from "./components/days/day20/RippleEffect"; /* day20*/
import DragAndDrop from "./components/days/day21/DragAndDrop"; /* day21 */
import DrawingApp from "./components/days/day22/DrawingApp"; /* day22 */
import KineticLoader from "./components/days/day23/KineticLoader"; /* day23 */
import ContentPlaceholder from "./components/days/day24/ContentPlaceholder"; /* day24 */
import Elevator from "./components/days/elevator/Elevator";

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
      <IncrementingCounter /> {/**day15 */}
      <DrinkWater /> {/**day16 */}
      <MovieApp /> {/**day17 */}
      <BackgroundSlider /> {/**day18 */}
      <ThemeClock /> {/**day19 */}
      <RippleEffect /> {/**day20 */}
      <DragAndDrop /> {/**day21 */}
      <DrawingApp /> {/**day22 */}
      <KineticLoader /> {/**day23 */}
      <ContentPlaceholder />
      {/*day24*/}
      <Elevator /> {/**Elevator */}
    </div>
  );
}

export default App;
