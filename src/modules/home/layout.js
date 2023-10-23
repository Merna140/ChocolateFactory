import { Component } from "react";
import List2 from "./list -class";
import Cart2 from "./cart2";
import { Container } from "react-bootstrap";
import styles from './layoutStyle.module.css';


class Layout extends Component {

    state = {
        ar: [{ image: require('./img1.png'), title: "Hershey´s Bar Chocolate", count: 0, price: 320}, { image: require('./img2.png'), title: "Toblerone Milk Chocolate", count: 0, price: 120 }, { image: require('./img3.png'), title: "Kit Kat chocolate bar", count: 0, price: 25 }, { image: require('./img4.png'), title: "Snickers Almond Chocolate", count: 0, price: 35 }, { image: require('./img5.png'), title: "Chocolate bar Cadbury Dairy Milk", count: 0, price: 35 },{ image: require('./img6.png'), title: "Cadbury Dairy Milk Bubbly", count: 0, price: 40 },{ image: require('./img7.png'), title: "Snickers bar", count: 0, price: 25 },{ image: require('./img8.png'), title: "White chocolate Milka Cream", count: 0, price: 120 },{ image: require('./img9.png'), title: "Kinder Bueno Chocolate bar", count: 0, price: 50 },{ image: require('./img10.png'), title: "Crunch Cream Milka Oreo", count: 0, price: 45 },{ image: require('./img11.png'), title: "Mars", count: 0, price: 30 },{ image: require('./img12.png'), title: "M&M's Milk Chocolate", count: 0, price: 20 }],
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