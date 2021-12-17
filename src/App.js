import useWindowsSize from "./utils/useWindowsSize";
import Header from "./Components/Header";

function App() {
  const { width } = useWindowsSize();
  return (
    <Header/>
  );
}

export default App;
