import styled from "styled-components";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { loadDetailInstant } from "../actions/countryDetailAction";

const Border = ({ alphaCode }) => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const alphaCodeToName = (alpha) => {
    const countryBorder = countries.filter((country) => {
      return alpha === country.alpha3Code;
    });

    return countryBorder[0].name;
  };

  const getBorderCountry = () => {
    dispatch(loadDetailInstant(alphaCodeToName(alphaCode)));
  };

  return (
    <StyledBorder onClick={getBorderCountry}>
      {alphaCodeToName(alphaCode)}
    </StyledBorder>
  );
};

const StyledBorder = styled.div`
  padding: 0.3rem 0.7rem;
  border: solid 1px #b6b6b6;
  max-width: 15rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export default Border;
