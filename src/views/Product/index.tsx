import React, { useMemo } from "react";
import BreadcrumbComponent from "components/Breadcrumb";
import { useParams } from 'react-router-dom';
import { useProduct } from "hooks/useProduct";

interface IParams {
  id: string;
}


const ProductView: React.FC = () => {
  const { id: productId } = useParams<IParams>();
  console.info('params', productId);

  const { fetch, loading } = useProduct();

  useMemo(() => {
    if (productId && !loading) {
      fetch(productId as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div className="results-wiew-wrapper">
      <BreadcrumbComponent />
      productId { productId }
    </div>
  );
};

export default ProductView;
