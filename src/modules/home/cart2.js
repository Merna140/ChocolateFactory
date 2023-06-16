import styles from './cartStyle.module.css';
import Layout from './layout';

function Cart2({ cartArray, sum }) {
    return <>
        <div className={styles.myCart}>
            {
                cartArray.map((e, i) => {
                    console.log(sum);
                    console.log(sum);

                    return (<>
                        <div className={styles.myCartDiv}>
                            <img className={styles.myCartImg} srcSet={e.image}></img>
                            <p className={styles.myCartP}>Total price: {e.count}*{e.price} = {e.count * e.price}</p>
                        </div>
                        <div className={styles.total}>
                            Total: {sum}
                        </div>
                    </>
                    )
                })
            }
        </div>
    </>
}

export default Cart2