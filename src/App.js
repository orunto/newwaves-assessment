import "./App.scss";
import { Chat, Header, ParticipantScreen } from "./components/compounds";
import { ControlsTab } from "./components/elements";

function App() {
  return (
    <>
      <div className="loadercontainer">
        <h3>Entering Meeting Room Now...</h3>
        <div className="loader"></div>
      </div>
      <Header />
      <main>
        <ParticipantScreen />
        <Chat />
      </main>
      <ControlsTab />
    </>
  );
}

export default App;
