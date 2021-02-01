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
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  max-width: 30rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.card};
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
    color: ${({ theme }) => theme.hoverText};
  }
`;

export default Border;
