import React from "react";

const PageGuideComponent = () => {
  return (
    <section className="page-guide-component">
      <img
        src={process.env.PUBLIC_URL + "/assets/icons/guide/arrow-left.svg"}
      />
    </section>
  );
};

export default PageGuideComponent;
