import styles from "../Styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.welcomeSection}>
        <h1>Welcome to Cant-Shop-Here-azon!</h1>
        <p>Click on Shop to starting shopping!</p>
        <p>Add products to your cart and once you're ready...</p>
        <p>You can look in cart... That's about it LOL.</p>
        <img
          className={styles.img}
          src="/thumbs-up.png"
          alt="Cutie patootie doing a thumbs up."
        />
      </div>

      <div className={styles.creditsSection}>
        <h2>Credits</h2>
        <p>Site made by Edwin Lee</p>
        <p>
          Fake products API: <a href="https://dummyjson.com/">DummgJSON</a>
        </p>
        <p>
          Cart SVG:{" "}
          <a href="https://pictogrammers.com/library/mdi/icon/cart-outline/">
            Pictogrammers
          </a>
        </p>
        <p>Drawing right above: Edwin Lee</p>
      </div>
    </div>
  );
};

export default Home;
