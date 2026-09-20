import { useState } from "react";
import styles from "../Styles/Product.module.css";

const Product = ({ productObj, onSubmit }) => {
  const [amt, setAmt] = useState(1);

  const decrementAmt = () => {
    let newAmt = amt - 1;
    if (newAmt < 1) newAmt = 1;
    setAmt(newAmt);
  };

  const incrementAmt = () => {
    let newAmt = amt + 1;
    if (newAmt < 1) newAmt = 1;
    setAmt(newAmt);
  };

  const changeAmt = (e) => {
    let newAmt = Number(e.target.value);
    if (newAmt < 1) newAmt = 1;
    setAmt(newAmt);
  };

  const addToCart = () => {
    onSubmit({ product: productObj, amount: amt });
  };

  return (
    <div className={styles.rect}>
      <img className={styles.img} src={productObj.thumbnail} />
      <div>
        <h4>{productObj.title}</h4>
        <p>{productObj.description}</p>
        <h4 className={styles.rating}>Rating: {productObj.rating} / 5</h4>
        <h3 className={styles.price}>${productObj.price}</h3>
        <div>
          <button onClick={addToCart} className={styles.addToCart}>
            Add to Cart
          </button>
          <button
            className={styles.inputButtons}
            disabled={amt <= 1}
            onClick={decrementAmt}
          >
            -
          </button>
          <input
            className={styles.input}
            type="number"
            onChange={changeAmt}
            value={amt}
          />
          <button className={styles.inputButtons} onClick={incrementAmt}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
