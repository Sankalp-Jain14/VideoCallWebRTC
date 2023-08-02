import {Routes , Route} from 'react-router-dom'
import './App.css';
import LobbyScreen from './screens/Lobby';
import RoomPage from './screens/Room';

function App() {
  return ( <div className="App">
    <Routes>
     <Route path='/' element ={<LobbyScreen />} />
     <Route path="/room/:roomId" element={<RoomPage />} /> {/*:roomId is dynamic path means we have to render our room page. jab hum room me join ho jayegenge to hum user ko us particular route pr push karenge */}
    </Routes>
    </div>
  );
}

export default App;
