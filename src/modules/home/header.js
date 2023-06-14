
import Cart from "./cart"
import styles from './headerStyle.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
    return <>
        <div className={styles.myHeader}> My Header
            <Link to="/">
                <Button variant="primary" size="lg" active>
                    Home
                </Button>{' '}
            </Link>
        </div>
    </>
}

export default Header;