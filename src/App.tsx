import "./App.css";
import { Dialog } from "./components/facyBorder";
import { Chat, Contacts, SplitPane } from "./components/splitPane";
function App() {
  return (
    <div className="App">
      <Dialog title="Welcome" message="Thank you for visiting" />
      <SplitPane left={<Contacts />} right={<Chat />} />
    </div>
  );
}

export default App;
