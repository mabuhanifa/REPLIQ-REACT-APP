import Timer from "./components/Timer";
import Callback from "./components/hooks/Callback";
import { ListData } from "./components/hooks/Memo";
import Ref from "./components/hooks/Ref";

function App() {
  return (
    <div>
      <Timer/>
      <Ref/>
      <Callback/>
      <ListData/>
      
    </div>
  );
}

export default App;
