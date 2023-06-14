import { Component } from "react";
import MyCard from "./card";
import styles from './myListStyle.module.css';
import Layout from "./layout";

class List2 extends Component{
    // state = {ar:[{image: require('./img1.jpg'),title:"card1",count:0,price:100},{image: require('./img2.jpg'),title:"card2",count:0,price:200},{image: require('./img3.jpg'),title:"card3",count:0,price:300},{image: require('./img4.jpg'),title:"card4",count:0,price:400}]}
    
    add(index) {
        let list = [];
        list = [...this.props.ar];
        list[index].count++;
        console.log(list);
        this.props.update(list)
        // this.setState({ar:list});
      }
    
    subtract(index) {
        if (this.props.ar[index].count > 0) {
        let list = [];
        list = [...this.props.ar];
        list[index].count--;
        this.props.update(list)
        // this.setState({ar:list})
        }
      }
    
    render(){        
        return <>
            <div className={styles.myList}>
                {
                    this.props.ar.map((e,i)=> {
                        return<MyCard card={e} add={()=>{this.add(i)}} subtract={()=>{this.subtract(i)}}  key={i}/>
                    })
                }
            </div>
        </>
    }

}

export default List2;