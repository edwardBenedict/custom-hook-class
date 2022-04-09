import logo from "./logo.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log('res',response);
      return response.json();
    })
    .then((data) => console.log(data));

  return (
    <div className="App">
      <h1>Custom Hook</h1>
    </div>
  );
}

export default App;
