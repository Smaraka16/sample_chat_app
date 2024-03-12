import './App.css';

import ResponsiveAppBar from './Components/headerBar/Header'
import ChatRenderer from './Components/chatBar/Chat';

function App() {
   
  return (
    <div className="App">
      <div className='app_header'>
        <ResponsiveAppBar />
      </div>

      <div className='app_chat'>
        <ChatRenderer />
      </div>
    </div>
  );
}

export default App;
