import React from "react";
import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <div>
                    <Card>
                        <CardImg width="10%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div />
            );
    }
    renderComments(dish) {
        if (dish != null && dish.comments != null) {
            const commentlist = dish.comments.map((comment) => {
                const oldDate = new Date(comment.date);
                const options = {month: "long", day: "numeric", year: "numeric"};
                const formattedDate = oldDate.toLocaleDateString("en-US", options);
                return (
                    <div>
                        <ul className="list-unstyled" key={comment.id}>
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {formattedDate}</li>
                        </ul>
                    </div>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {commentlist}
                </div>
            );
        }
        else{
            return(
                <div />
            );
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-xs-12 col-lg-5 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-sm-12 col-xs-12 col-lg-5 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}
export default DishDetail;