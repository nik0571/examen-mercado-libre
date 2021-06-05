import { useState } from "react";
import { search } from "../services";
import { IResult } from "./interfaces/result";

function useSearch() {
  const [results, setResults] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetch = (text: string) => {
    setLoading(true);
    search(text)
      .then(({ data }) => {
        setResults(data?.results);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  return { fetch, results, loading, error };
}

export { useSearch };
