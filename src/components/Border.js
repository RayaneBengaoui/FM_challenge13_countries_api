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

const StyledBorder = styled.div`
  padding: 0.3rem 0.7rem;
  border: solid 1px #b6b6b6;
  max-width: 15rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

export default Border;
