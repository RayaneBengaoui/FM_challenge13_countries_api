import styled from "styled-components";

import { useSelector } from "react-redux";
const Border = ({ alphaCode }) => {
  const { countries } = useSelector((state) => state.countries);

  const alphaCodeToName = (alpha) => {
    const countryBorder = countries.filter((country) => {
      return alpha === country.alpha3Code;
    });

    return countryBorder[0].name;
  };

  return <StyledBorder>{alphaCodeToName(alphaCode)}</StyledBorder>;
};

const StyledBorder = styled.div``;

export default Border;
