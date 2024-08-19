import './App.scss';
import { ControlsTab, Header, ParticipantScreen } from './components/compounds';


function App() {
  return (
    <>
      <Header/>
      <main>
        <ParticipantScreen/>
      </main>
      <ControlsTab/>
    </>
  );
}

export default App;
