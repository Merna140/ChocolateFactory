import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './signUpStyle.module.css';
import Card from 'react-bootstrap/Card';

function Login() {

  return (
    <Card className={styles.myCard} >

      <Form>
        <h1 className={styles.formHeader}>Log In</h1>
        <Form.Group className="mb-3" id="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="exampleInputEmail1" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicPassword">
          <Form.Label >Password</Form.Label>
          <Form.Control controlid="exampleInputPassword1" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" id="exampleCheck1">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>

  );
}

export default Login;