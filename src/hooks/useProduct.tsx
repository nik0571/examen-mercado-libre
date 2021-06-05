import { useState } from "react";
import { getProduct } from "../services";
import { IResult } from "./interfaces/result";

function useProduct() {
  const [results, setResults] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetch = (id: string) => {
    setLoading(true);
    getProduct(id)
      .then((response) => {
        setResults(response);
        return response;
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  return { fetch, results, loading, error };
}

export { useProduct };
