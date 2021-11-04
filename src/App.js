import "./App.css";
import "./key";
import Axios, * as others from "axios";

function App() {
  const YOUR_APP_ID = "4da09b8d";
  const YOUR_APP_KEY = "23c7b2c1d347e5914627e18225d85a11";

  var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes() {
    var result = await Axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <h1 onClick={getRecipes}>🍔Food Recipe Plaza🍔</h1>
    </div>
  );
}

export default App;
