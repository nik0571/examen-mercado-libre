import React, { useMemo } from "react";
import BreadcrumbComponent from "components/Breadcrumb";
import { useParams } from 'react-router-dom';
import { useProduct } from "hooks/useProduct";
import { formatCurrency } from "helpers";

interface IParams {
  id: string;
}


const ProductView: React.FC = () => {
  const { id: productId } = useParams<IParams>();
  console.info('params', productId);

  const { fetch, loading, product } = useProduct();

  console.info('product', product);

  useMemo(() => {
    if (productId && !loading) {
      fetch(productId as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div className="results-wiew-wrapper">
      <BreadcrumbComponent />
      <div className="product-wrapper">
        <div className="content-left">
          <div className="content-img">
            <img src={ product?.data?.pictures?.find((picture) => picture.size === "500x500")?.secure_url || product?.data?.thumbnail} width="680" alt={ product?.data?.title } />
          </div>
          <div className="content-description">
            <h2 className="title">
              Descriptión del producto
            </h2>
            <p className="text">
              { product?.description?.plain_text }
            </p>
          </div>
        </div>
        <div className="content-right">
          <p className="condition">{ product?.data?.attributes.find((attr) => attr.id === 'ITEM_CONDITION')?.value_name}</p>
          <h2 className="title">{ product?.data?.title }</h2>
          { product?.data?.subtitle &&
            <h3 className="subtitle">{ product?.data?.subtitle}</h3>
          }
          <p className="price">
            <span>{ formatCurrency(Number(product?.data?.price)) }</span><sup>00</sup>
          </p>

          <button className="btn btn-sixth">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
