import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        label="Click-Click"
        className="buttonWrapper"
        onClick={() => alert("hi")}
        styles={{ fontSize: "30px" }}
      />
      <Button variant="danger" styles={{ marginLeft: "15px" }} />
    </div>
  );
}

export default App;
