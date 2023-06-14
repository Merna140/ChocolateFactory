import MyCard from "./card";
import styles from './myListStyle.module.css'; 

function List() {
    return <>
        <div className={styles.myList}>
            {Array(4).fill(<MyCard />)}
        </div>
    </>
}

export default List;