import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,999", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>Description</p>

      <Price
        oldPrice={oldPrices[idx]}
        newPrice={newPrices[idx]}
      />
    </div>
  );
}

export default Product;