// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div id="flex-container">

      
      <div id="flex-item">
        <div id="product-head">
          <img src="/image"></img>
          <h2>TITLE</h2>
        </div>
        <div id="product-info">
          <h2>
            <span id="dolar-span">$</span>549
          </h2>
        </div>
      </div>


      {/* product2 */}

      <div id="flex-item">
        <div id="product-head">
          <img src="/image"></img>
          <h2>TITLE 2</h2>
        </div>

        <div id="product-info">
          <h2>
            <span id="dolar-span">$</span>899
          </h2>    
        </div>
      </div>
    </div>
  );
  
}

export default App;
