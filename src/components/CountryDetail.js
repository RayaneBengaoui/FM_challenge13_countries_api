import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { clearDetail } from "../actions/countryDetailAction";

import backArrow from "../icons/back.svg";

import Border from "../components/Border";

const CountryDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { country, isLoading } = useSelector((state) => state.detail);

  const backHandler = () => {
    document.body.style.overflow = "auto";
    dispatch(clearDetail());
    history.push("/");
  };

  return (
    <>
      {!isLoading && (
        <CountryDetailStyled>
          <BackButton onClick={backHandler}>
            <img src={backArrow} alt="" />
            Back
          </BackButton>
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
                    return <Border alphaCode={border} />;
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
  background-color: #f3f3f3;
  padding: 0rem 7rem;
`;

const BackButton = styled.div`
  margin: 5rem 0rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 7rem;
  padding: 0.5rem 3.8rem;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  font-weight: bolder;
  background-color: white;
  img {
    margin-right: 0.5rem;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flag = styled.img.attrs((props) => ({
  src: props.flag,
}))`
  max-width: 40rem;
  height: 40vh;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;

  .upper-section {
    display: flex;

    &__left {
      margin-right: 30rem;
    }
  }

  .lower-section {
    padding-top: 5rem;
  }
`;

export default CountryDetail;
