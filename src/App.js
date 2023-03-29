import './App.css';
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="left">
        <h1>
          Learn to code by <br /> watching others.
        </h1>
        <p>
          See how experienced developers solve problems in real time. <br />
          Watching scripted tutorials ig great, but understanding how <br />
          developers think is invaluable.
        </p>
      </div>
      <div className="right">
        <Form />
      </div>
    </div>
  );
}

export default App;
