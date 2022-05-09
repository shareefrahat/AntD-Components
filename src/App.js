import "./App.css";
import AntButton from "./components/AntButton/AntButton";
import AntDropDown from "./components/AntDropDown/AntDropDown";
import AntTimeline from "./components/AntTimeline/AntTimeline";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Ant Design Components</h1>

        <div>
          <AntTimeline></AntTimeline>
        </div>
        <div>
          <AntButton></AntButton>
        </div>
        <div>
          <AntDropDown></AntDropDown>
        </div>
      </div>
    </div>
  );
}

export default App;
