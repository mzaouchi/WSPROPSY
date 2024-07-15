import './App.css';
import Child from './Components/Child';

function App() {
  var name = "Achref"
  var age = 30
  var pays = ["Tunisie","Maroc","Jardin","Czech"]
  var product = {
    productName : "Jordan",
    size : 42,
    color : "Red",
    price : 120,
    town : {
      city :"LA",
      cp : 1145
    }    
  }

  var track = "Fullstack JS"

  const SayHello =()=> alert("Hello ya cha3b")

  const hello=(a)=> alert(`Hello ${a}`)

  var show = false
  return (
    <div>
      <h1>Workshop Props</h1>
      <Child name={name} mahmoud={age} pays={pays} product={product} track={track} SayHello={SayHello} hello={hello} show={show}>
        <h1>GOMYCODE</h1>
        <h2>Youssef</h2>
        <h3>Jardin de Carthage</h3>
      </Child>
    </div>
  );
}

export default App;
