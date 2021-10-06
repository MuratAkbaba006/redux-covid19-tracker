import "./App.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import ChooseArea from "./components/ChooseArea";
import Graphic from "./components/Graphic";
import { useSelector } from "react-redux";
function App() {
  const data = useSelector((state) => state.covid.globaldata);
  const status = useSelector((state) => state.covid.status);

  return (
    <div className="App">
      <Header />
      <Content />
      <ChooseArea />
      {data.length !== 0 && <Graphic data={data} status={status} />}
    </div>
  );
}

export default App;
