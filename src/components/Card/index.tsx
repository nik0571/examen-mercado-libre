import React from "react";
import IconFreeShipping from '../../assets/ic_shipping.png';
import { IResult } from "hooks/interfaces/result";
import { formatCurrency } from "helpers";
import { APP_ROUTE_PATHS } from "constants/routes";

interface ICardComponent {
  item: IResult;
}

const CardComponent: React.FC<ICardComponent> = ({ item }) => {

  return (
    <a href={`${APP_ROUTE_PATHS.ITEMS}/${item.id}`} className="card-wrapper">
      <div className="content-img">
        <img src={item.thumbnail} width="180" alt={ item.title } />
      </div>
      <div className="content-description">
        <h2 className="price">
          <span>{ formatCurrency(Number(item.price)) }</span>
          {
            item.shipping.free_shipping &&
            <img className="icon-free-shipping" src={IconFreeShipping} width="18" alt="Free Shipping" />
          }
        </h2>
        <p className="title">{ item.title }</p>
        <p className="subtitle">{ item?.attributes.find((attr) => attr.id === 'ITEM_CONDITION')?.value_name}</p>
      </div>
      <div className="content-metadata">
        <span>{ item.address.state_name }</span>
      </div>
    </a>
  );
};

export default CardComponent;
