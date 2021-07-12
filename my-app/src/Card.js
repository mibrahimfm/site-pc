import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class AulaCard extends React.Component {
    render() {
      return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.content}
          </Card.Text>
          <Button variant="primary">{this.props.button}</Button>
        </Card.Body>
      </Card>
      )
    }
  }