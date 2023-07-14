import Timer from "./components/Timer";
import Memo, { ListData } from "./components/hooks/Memo";
import Ref from "./components/hooks/Ref";

function App() {
  return (
    <div>
      <Timer/>
      <Ref/>
      <Memo/>
      <ListData/>
      
    </div>
  );
}

export default App;
