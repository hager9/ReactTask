import Alerts from './Components/Alerts/Alerts';
import DataContextProvider from './Components/DataContext';

function App() {


  return <>
  
        <DataContextProvider>

          <Alerts/>
        
        </DataContextProvider>
  </>
}

export default App;
