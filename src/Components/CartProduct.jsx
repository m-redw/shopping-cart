import { useOutletContext } from "react-router";
import styles from "../Styles/CartProduct.module.css";

const CartProduct = ({ productObj, amount }) => {
  const [cart, setCart] = useOutletContext();

  const removeProduct = (id) => {
    const newMap = new Map(cart);
    newMap.delete(id);
    setCart(newMap);
  };

  const decrementAmt = () => {
    const newMap = new Map(cart);
    const pId = productObj.id;

    let value = Number(amount - 1);
    if (value <= 0) value = 1;

    newMap.set(pId, {
      product: productObj,
      amount: value,
    });

    setCart(newMap);
  };

  const incrementAmt = () => {
    const newMap = new Map(cart);
    const pId = productObj.id;

    newMap.set(pId, {
      product: productObj,
      amount: amount + 1,
    });

    setCart(newMap);
  };

  const changeAmt = (e) => {
    const newMap = new Map(cart);
    const pId = productObj.id;

    let value = Number(e.target.value);
    if (value === 0) value = 1;

    newMap.set(pId, {
      product: productObj,
      amount: value,
    });

    setCart(newMap);
  };

  return (
    <div className={styles.rect}>
      <img className={styles.img} src={productObj.thumbnail} />
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{productObj.title}</h3>
        <div>
          <button
            className={styles.amtButtons}
            onClick={decrementAmt}
            disabled={amount - 1 <= 0}
          >
            -
          </button>
          <input
            className={styles.amtInput}
            type="number"
            onChange={changeAmt}
            value={amount}
            min={1}
          />
          <button className={styles.amtButtons} onClick={incrementAmt}>
            +
          </button>

          <button
            className={styles.removeButton}
            onClick={() => removeProduct(productObj.id)}
          >
            Remove
          </button>
        </div>
        <h4 className={styles.price}>{productObj.price}</h4>
      </div>
    </div>
  );
};

export default CartProduct;
