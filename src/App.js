import './App.scss';
import { Chat, Header, ParticipantScreen } from './components/compounds';
import { ControlsTab } from './components/elements';


function App() {
  return (
    <>
      <Header/>
      <main>
        <ParticipantScreen/>
        <Chat/>
      </main>
      <ControlsTab/>
    </>
  );
}

export default App;
