import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { DISHES } from "../shared/dishes";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <Card.Img src={dish.image} alt={dish.name} />
        <Card.Body>
          <Card.Title>{dish.name}</Card.Title>
          <Card.Text>{dish.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function DishDetail(props) {
  const dish = props.dish;
  if (dish == null) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments comments={dish.comments} />
      </div>
    </div>
  );
}

class Menu1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Card onClick={() => this.props.onClick(dish.id)}>
            <Card.Img src={dish.image} alt={dish.name} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <Container>
        <Row>{menu}</Row>
      </Container>
    );
  }
}

export default Menu1;
