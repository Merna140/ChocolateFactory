
import { Link } from 'react-router-dom';
import styles from './mainStyle.module.css';
import Card from 'react-bootstrap/Card';


function Main() {
    return (
        <>
            <div className={styles.mainDiv}>
                <p className={styles.welcome}>Welcome To Our Chacolate Factory</p>
                <p className={styles.welcome}>Are You</p>
                <div className={styles.main}>
                    <Link to="/userMain/user" className={styles.myLink} >
                        <Card className={styles.myCard} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text className={styles.cardText}>
                                    Customer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/userMain/producer" className={styles.myLink}>
                        <Card className={styles.myCard} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text className={styles.cardText}>
                                    Provider
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Main