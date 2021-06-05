import React, { useMemo } from "react";
import { parse } from "query-string";
import CardComponent from "components/Card/index";
import BreadcrumbComponent from "components/Breadcrumb";
import { useSearch } from "hooks/useSearch";

const ResultsView: React.FC = () => {
  const { search } = parse(window.location.search);
  const { fetch, results, loading } = useSearch();

  const countCategories: any = {};
  results
    .map((result) => result.category_id)
    .forEach(function (numero) {
      countCategories[numero] = (countCategories[numero] || 0) + 1;
    });

  useMemo(() => {
    if (search && !loading) {
      fetch(search as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const breadcrumbAttrs = useMemo(() => {
    return results?.find(
      (result) =>
        result.category_id === Object.entries(countCategories)?.sort()[0][0]
    )?.attributes?.filter((attr) => attr.value_id && attr.value_name && attr.id && attr.name)
    .map((attr) => attr.value_name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  return (
    <div className="results-wiew-wrapper">
      <BreadcrumbComponent
        attributes={breadcrumbAttrs}
      />

      <div className="content-results">
        {results.slice(0, 4).map((item) => (
          <CardComponent item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ResultsView;
