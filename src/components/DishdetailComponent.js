import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

function DishdetailComponent(props) {

    function renderDish(dish) {
        if (dish !== null)
            return(
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    function renderComments(comments) {
        if (comments !== null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(comment => (
                            <li key={comment.id}>
                                <p>{ comment.comment }</p>
                                <p>
                                    -- {
                                        comment.author
                                    } { new Intl.DateTimeFormat('en-US', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric'
                                    }).format(new Date(comment.date))}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {renderDish(props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {props.dish !== null && renderComments(props.dish.comments)}
            </div>
        </div>
    );
}
export default DishdetailComponent;
