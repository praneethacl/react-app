import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from "reactstrap";
import {Link, useParams } from 'react-router-dom'

  function RenderDish({dish}) {
    return (
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
  }

  function RenderComments({comments}) {
    if (comments != null) {
      return (
        <div >
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author} ,{" "}
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

  const Dishdetail = (props) => {
    let params  = useParams();
    console.log(params);
    const dishForDishDetail = props.dishes.filter((dish) => dish.id === parseInt(params.dishId,10))[0]
    const commentForDishDetail = props.comments.filter((comment) => comment.dishId === parseInt(params.dishId,10))
    console.log(dishForDishDetail, commentForDishDetail);
    if (dishForDishDetail != null) {
      return (
        <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{dishForDishDetail.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>{dishForDishDetail.name}</h3>
                  <hr />
              </div>                
          </div>
          <div className="row">
              <div className="col-12 col-md-5 m-1">
                  <RenderDish dish={dishForDishDetail} />
              </div>
              <div className="col-12 col-md-5 m-1">
                  <RenderComments comments={commentForDishDetail} />
              </div>
          </div>
        </div>
      )
    } else {
      return <div></div>;
    }
  }

export default Dishdetail;
