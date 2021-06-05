import React from 'react';
import { parse } from 'query-string';
import CardComponent from 'components/Card/index';
import BreadcrumbComponent from 'components/Breadcrumb';

const ResultsView: React.FC= () => {
  const { search } = parse(window.location.search);

  return (
    <div className="results-wiew-wrapper">
      <BreadcrumbComponent />

      <div className="content-results">
        {
          Array(4).fill(1).map(() =>
            <CardComponent></CardComponent>
          )
        }
      </div>

    </div>
  );
};

export default ResultsView;
