import React from "react";
interface IBreadcrumbComponent {
  attributes?: any[];
}

const BreadcrumbComponent: React.FC<IBreadcrumbComponent> = ({
  attributes = [],
}) => {
  console.info("attributes", attributes);

  return (
    <div className="breadcrumb-wrapper">
      {
        attributes
        .map((attr) => {
          return (
            <span key={attr}>{attr}</span>
          )
        })
      }
    </div>
  );
};

export default BreadcrumbComponent;
