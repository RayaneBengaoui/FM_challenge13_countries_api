import styled from "styled-components";

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <StyledCountry>
      <div className="flag_section">
        <img src={flag} alt="flag" />
      </div>
      <div className="info_section">
        <h2>{name}</h2>
        <p>
          <span>Population: </span> {population}
        </p>
        <p>
          <span>Region: </span> {region}
        </p>
        <p>
          <span>Capital: </span> {capital}
        </p>
      </div>
    </StyledCountry>
  );
};

const StyledCountry = styled.div`
  min-height: 30vh;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }

  .info_section {
    padding: 3rem;
  }
`;

export default Country;
