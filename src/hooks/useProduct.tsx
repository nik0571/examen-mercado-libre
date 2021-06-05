import { useState } from "react";
import { getProduct } from "../services";
import { IProduct } from "./interfaces/product";

function useProduct() {
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetch = (id: string) => {
    setLoading(true);
    getProduct(id)
      .then((response) => {
        setProduct(response);
        return response;
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  return { fetch, product, loading, error };
}

export { useProduct };
