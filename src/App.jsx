import "./App.css";
import HamroPatroCalendar from "./components/HamroPatroCalender";
function App() {
  return (
    <div className="calender-container">
      <div className="description">
        <h1>Calendar WPA app scrapped </h1>
        <p>Welcome to the Calendar App!</p>
      </div>
      <div>
        <HamroPatroCalendar />
      </div>
      <footer>
        <h2>by Nabaraj Rai</h2>
      </footer>
    </div>
  );
}

export default App;
