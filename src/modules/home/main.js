
import { Link } from 'react-router-dom';
import styles from './mainStyle.module.css';

function Main() {
    return (
        <>
            <div className={styles.main}>
                <Link to="/userMain/user">
                    <button className={styles.myButton}>User</button>
                </Link>
                <Link to="/userMain/producer">
                    <button className={styles.myButton}>Producer</button>
                </Link>
            </div>
        </>
    )
}

export default Main