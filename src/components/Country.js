import styled from "styled-components";
import { Link } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/countryDetailAction";

const Country = ({ name, population, region, capital, flag }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(name));
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledCountry>
      <Link to={`/country/${name}`}>
        <div className="flag_section" onClick={loadDetailHandler}>
          <img src={flag} alt="flag" />
        </div>
      </Link>
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
  height: 40vh;
  max-width: 350px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  background: ${({ theme }) => theme.card};
  /* transition: all 0.75s ease; */

  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    cursor: pointer;
  }

  .info_section {
    padding: 1rem 2rem;
  }
`;

export default Country;
