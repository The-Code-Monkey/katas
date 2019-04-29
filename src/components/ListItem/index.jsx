import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactStars from 'react-stars'

class ListItem extends Component {
  render() {
    const { props } = this;
    const { data } = props;
    return (
      <div className="col-10 mb-4 list-item">
        <Card>
          <CardImg top width="100%" height="200px" src="https://via.placeholder.com/600x200" alt="Hotel Image" />
          <CardBody>
            <CardTitle>{data.name}</CardTitle>
            <CardSubtitle>
              <ReactStars
              count={5}
              edit={false}
              value={data.starRating}
              half={false}
              size={24}
              color2={'#ffd700'} />
            </CardSubtitle>
            <CardText>{data.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ListItem;
