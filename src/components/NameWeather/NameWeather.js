import { Component } from "react";
import { SubTitle, Title, InfoNameWeather } from "./NameWeather.styled";

class NameWeather extends Component {
  render() {
    const { name, country, localtime } = this.props.onLocation;
    return (
      <InfoNameWeather>
        <Title>{name}</Title>
        <SubTitle>{country}</SubTitle>
        <h2>{localtime}</h2>
      </InfoNameWeather>
    );
  }
}

export default NameWeather;
