import styled from "styled-components";

import { useSelector } from "react-redux";

const CountryDetail = () => {
  const { country } = useSelector((state) => state.detail);

  return (
    <CountryDetailStyled>
      <BackButton>Back</BackButton>
      <Details>
        <Flag flag={country.flag} />
        <Description></Description>
      </Details>
    </CountryDetailStyled>
  );
};

const CountryDetailStyled = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: lightblue;
`;

const BackButton = styled.button``;
const Details = styled.div``;

const Flag = styled.img.attrs((props) => ({
  src: props.flag,
}))``;

const Description = styled.div``;

export default CountryDetail;
