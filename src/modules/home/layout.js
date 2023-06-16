import { Component } from "react";
import List2 from "./list -class";
import Cart2 from "./cart2";
import { Container } from "react-bootstrap";
import styles from './layoutStyle.module.css';


class Layout extends Component {

    state = {
        ar: [{ image: require('./img1.png'), title: "card1", count: 0, price: 100 }, { image: require('./img2.png'), title: "card2", count: 0, price: 200 }, { image: require('./img3.png'), title: "card3", count: 0, price: 300 }, { image: require('./img4.png'), title: "card4", count: 0, price: 400 }],
        img: '',
        price: 0,
        counter: 0,
        sum: 0
    };

    cartist = [];


    update(myArray) {
        this.cartist = myArray.filter((e, i) => e.count);
        let sum = 0;
        this.cartist.forEach(e => sum = sum + (e.count * e.price))
        this.setState({ ar: [...myArray], sum: sum });
    }

    render() {
        return <>
            <img className={styles.mainImg} src={require('./main.jpg')} />
            <Container>
                <p className={styles.mainTitle}>Availabel Products</p>
                <div>
                    <List2 ar={this.state.ar} update={(x) => { this.update(x) }} />
                    <p className={styles.cartTitle}>Added to your cart</p>
                    <Cart2 cartArray={this.cartist} sum={this.state.sum} />
                </div>
            </Container>
        </>
    }
}

export default Layout;