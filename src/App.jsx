import Home from "./components/Home/Home";
import GlobalProvider from "./components/GlobalContext/GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
