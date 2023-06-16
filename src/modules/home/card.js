import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyImage from './../../mqdefault.jpg';
import styles from './myButtonStyle.module.css';

function MyCard({ card,add,subtract }) {
  return (
    <Card className={styles.myCard} >
      <Card.Img className={styles.myImg}  variant="top" src={card.image} />
      <Card.Body >
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          Price= {card.price}
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={add} className={styles.myButton} variant="primary">+</Button>
        <Button onClick={subtract} className={styles.myButton} variant="primary">-</Button>
        <p>Amount: {card.count}</p>
      </Card.Body>
    </Card>
  );
}

export default MyCard;