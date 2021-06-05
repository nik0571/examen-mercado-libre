import React from 'react';
import { parse } from 'query-string';
import CardComponent from 'components/Card/index';

const ResultsView: React.FC= () => {
  const { search } = parse(window.location.search);

  return (
    <div className="ResultsViewWrapper">
      <h1>Results for : { search }  </h1>

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
