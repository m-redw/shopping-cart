import { useState } from "react";
import styles from "../Styles/Product.module.css";

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
    <div className={styles.rect}>
      <img className={styles.img} src={productObj.thumbnail} />
      <div>
        <h4>{productObj.title}</h4>
        <p>{productObj.description}</p>
        <h4 className={styles.rating}>{productObj.rating} / 5</h4>
        <h3 className={styles.price}>${productObj.price}</h3>
        <div>
          <button onClick={addToCart} className={styles.addToCart}>
            Add to Cart
          </button>
          <button className={styles.inputButtons} onClick={decrementAmt}>
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
