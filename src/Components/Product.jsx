import { useState } from "react";

const Product = ({ productObj, onSubmit }) => {
  const [amt, setAmt] = useState(1);

  const decrementAmt = () => {
    setAmt(amt - 1);
  };

  const incrementAmt = () => {
    setAmt(amt + 1);
  };

  const changeAmt = (e) => setAmt(e.target.value);

  const addToCart = () => {
    onSubmit({ product: productObj, amount: amt });
  };

  return (
    <div>
      <img src={productObj.thumbnail} />
      <h4>{productObj.title}</h4>
      <p>{productObj.description}</p>
      <h4>{productObj.rating} / 5</h4>
      <h3>{productObj.price}</h3>
      <button onClick={addToCart}>Add to Cart</button>
      <div className="amt-input">
        <button onClick={decrementAmt}>-</button>
        <input type="number" onChange={changeAmt} value={amt} />
        <button onClick={incrementAmt}>+</button>
      </div>
    </div>
  );
};

export default Product;
