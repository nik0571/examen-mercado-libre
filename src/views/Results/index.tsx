import React, { useMemo } from "react";
import { parse } from "query-string";
import CardComponent from "components/Card/index";
import BreadcrumbComponent from "components/Breadcrumb";
import { useSearch } from "hooks/useSearch";

const ResultsView: React.FC = () => {
  const { search } = parse(window.location.search);
  const { fetch, results, loading } = useSearch();

  useMemo(() => {
    if (search && !loading) {
      fetch(search as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  console.info("results", results);

  return (
    <div className="results-wiew-wrapper">
      <BreadcrumbComponent />

      <div className="content-results">
        {results.slice(0, 4).map((item) => (
          <CardComponent item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ResultsView;
