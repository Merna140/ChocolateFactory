import { Component } from "react";
import List2 from "./list -class";
import Cart2 from "./cart2";

class Layout extends Component {

    state = {
        ar: [{ image: require('./img1.jpg'), title: "card1", count: 0, price: 100 }, { image: require('./img2.jpg'), title: "card2", count: 0, price: 200 }, { image: require('./img3.jpg'), title: "card3", count: 0, price: 300 }, { image: require('./img4.jpg'), title: "card4", count: 0, price: 400 }],
        img: '',
        price: 0,
        counter: 0,
        sum:0
    };

    cartist = [];


    update(myArray) {
        this.cartist = myArray.filter((e, i) => e.count);
        let sum =0;
        this.cartist.forEach(e=> sum=sum+(e.count*e.price))
        this.setState({ ar: [...myArray] , sum : sum});
    }

    render() {
        return <>
            <div className="myLayout">
                <List2 ar={this.state.ar} update={(x) => { this.update(x) }} />
                <Cart2 cartArray={this.cartist} sum={this.state.sum} />
            </div>
        </>
    }
}

export default Layout;