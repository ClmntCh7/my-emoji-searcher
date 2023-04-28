import "./App.css";
import Search from "./components/Search";
import data from "./assets/emojiList_mar8cs.json";

const App = () => {
  return (
    <main>
      <Search data={data} />
    </main>
  );
}

export default App;
