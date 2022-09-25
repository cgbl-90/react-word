import logo from "./logo.svg";
import carmen from "./carmen.svg";
import Editor from "./Editor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={carmen} alt="Carmen López" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
      <Editor />
      <footer>
        <p>Coded by Carmen López @ 2022</p>
      </footer>
    </div>
  );
}

export default App;
