
import Cart from "./cart"
import styles from './headerStyle.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return <>
        <div className={styles.myHeader}>
            <Navbar className={styles.myHeader} bg="light" data-bs-theme="light" > 
                <Container>
                    {/* <Navbar.Brand href="#home">COCAO</Navbar.Brand> */}
                    <img className={styles.myLogo} src={require('./logo.jpeg')}></img>
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link className={styles.navIteam} href="#home">Home</Nav.Link>
                        </Link>
                        <Nav.Link className={styles.navIteam} href="#features">Features</Nav.Link>
                        <Nav.Link className={styles.navIteam} href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className={styles.navIteam} href="#locations">Store Locations</Nav.Link>
                        <Nav.Link className={styles.navIteam} href="#gifts">Gifts</Nav.Link>
                        <Nav.Link className={styles.navIteam} href="#recipes">Recipes</Nav.Link>
                        <Nav.Link className={styles.navIteam} href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* <Link to="/">
                <Button variant="primary" size="lg" active>
                    Home
                </Button>{' '}
            </Link> */}
        </div>
    </>
}

export default Header;