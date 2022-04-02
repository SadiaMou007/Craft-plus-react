import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { handleRemoveItem, product } = props;

  const { img, name, price, shipping } = product;
  return (
    <div className="dd">
      <div className="d">
        <div className="ddd">
          <img src={img} className="col-4 "></img>
          <div>
            <h4 title={name}>
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </h4>
            <h4>${price}</h4>
            <h4>Shipping: {shipping}</h4>
          </div>
        </div>

        <FontAwesomeIcon
          onClick={() => handleRemoveItem(product)}
          className="icon"
          icon={faRemove}
        />
      </div>
    </div>
  );
};

export default ReviewItem;
