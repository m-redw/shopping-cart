import { useOutletContext } from "react-router";

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
    <div>
      <img src={productObj.thumbnail} />
      <h3>{productObj.title}</h3>
      <div className="amt-input">
        <button onClick={decrementAmt} disabled={amount - 1 <= 0}>
          -
        </button>
        <input type="number" onChange={changeAmt} value={amount} min={1} />
        <button onClick={incrementAmt}>+</button>
      </div>
      <button onClick={() => removeProduct(productObj.id)}>Remove</button>
      <h4>{productObj.price}</h4>
    </div>
  );
};

export default CartProduct;
