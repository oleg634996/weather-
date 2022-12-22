import styled from "@emotion/styled";

export const InfoNameWeather = styled.div`
  text-align: center;
  font-family: "Acme", sans-serif;
  & > h1,
  h2 {
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: radial-gradient(circle, #553c9a, #ee4b2b);
  }
  & > h1:hover,
  h2:hover {
    text-shadow: 4px 4px 0px #efeded, 6px 6px 0px #f66d52;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 100px;
  margin: 0;
`;
export const SubTitle = styled.h2`
  text-align: center;
  font-size: 65px;
  margin: 0;
`;
