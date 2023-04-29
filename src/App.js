// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="App">
      {productsArr.map((product) => (
        <div key={product.title}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <img src={product.imageUrl} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default App;
