import styled from "@emotion/styled";

export const InfoCurrentWeather = styled.div`
  font-family: "Kdam Thmor Pro", sans-serif;
  width: 400px;
  background: radial-gradient(circle, #0077ea, #1f4f96, #1b2949, #000);
  box-shadow: inset rgba(0, 0, 0, 0.6) 0 -3px 8px,
    inset rgba(252, 255, 255, 0.7) 0 3px 8px, rgba(0, 0, 0, 0.8) 0 3px 8px -3px;
  border-radius: 10px;
  opacity: 0.7;
  & > h2 {
    text-align: center;
  }
`;
export const CurrentWeatherItem = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    border-radius: 13px;
    & > p {
      text-shadow: 0px 3px 0px #b2a98f, 2 0px 14px 10px rgba(0, 0, 0, 0.15),
        3 0px 24px 2px rgba(0, 0, 0, 0.1), 4 0px 34px 30px rgba(0, 0, 0, 0.1);
    }
  }
`;
