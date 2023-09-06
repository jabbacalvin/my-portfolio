import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import { ReactComponent as Calvin } from "../../assets/images/Calvin.svg";

const Loader = () => {
  return (
    <LoaderContainer>
      <Calvin width={500} />
    </LoaderContainer>
  );
};

export default Loader;
