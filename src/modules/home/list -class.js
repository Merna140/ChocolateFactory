import { Component } from "react";
import MyCard from "./card";
import styles from './myListStyle.module.css';
import Layout from "./layout";

class List2 extends Component{
    
    add(index) {
        let list = [];
        list = [...this.props.ar];
        list[index].count++;
        console.log(list);
        this.props.update(list)
      }
    
    subtract(index) {
        if (this.props.ar[index].count > 0) {
        let list = [];
        list = [...this.props.ar];
        list[index].count--;
        this.props.update(list)
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