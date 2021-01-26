import styled from "styled-components";

import { useSelector } from "react-redux";

const CountryDetail = () => {
  const { country, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CountryDetailStyled>
          <BackButton>Back</BackButton>
          <Details>
            <Flag flag={country.flag} />
            <Description>
              <h1>{country.name}</h1>
              <div className="upper-section">
                <div className="upper-section__left">
                  <p>
                    <span>Native Name:</span> {country.nativeName}
                  </p>
                  <p>
                    <span>Population:</span> {country.population}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  <p>
                    <span>Sub Region:</span> {country.subregion}
                  </p>
                  <p>
                    <span>Capital:</span> {country.capital}
                  </p>
                </div>
                <div className="upper-section__right">
                  <p>
                    <span>Top Level Domain:</span> {country.topLevelDomain}
                  </p>
                  <p>
                    <span>Currency:</span>{" "}
                    {country.currencies.map((currency) => {
                      return `${currency.name} `;
                    })}
                  </p>
                  <p>
                    <span>Languages:</span>{" "}
                    {country.languages.map((language) => {
                      return `${language.name} `;
                    })}
                  </p>
                </div>
              </div>
              <div className="lower-section">
                <p>
                  <span>Border Countries:</span>{" "}
                  {country.borders.map((border) => {
                    return `${border} `;
                  })}
                </p>
              </div>
            </Description>
          </Details>
        </CountryDetailStyled>
      )}
    </>
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
