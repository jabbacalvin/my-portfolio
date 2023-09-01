import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import Calvin from "../../assets/images/Calvin";

const Loader = () => {
  return (
    <LoaderContainer>
      <Calvin width={250} />
    </LoaderContainer>
  );
};

export default Loader;
