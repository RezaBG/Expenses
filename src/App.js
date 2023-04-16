import React from "react";
import Product from "./components/Product/Product";

class App extends React.Component {
  render() {
    return (
      <div id="main" className="container">
        <h2>React App</h2>
        <Product title="Book1" price="99" />
        <Product title="Book2" price="89" />
        <Product title="Book3" price="109" />
      </div>
    );
  }
}

export default App;
