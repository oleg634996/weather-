import { Component } from "react";
import {
  InfoCurrentWeather,
  CurrentWeatherItem,
} from "./CurrentWeather.styled";

class CurrentWeather extends Component {
  render() {
    const { temp_c, feelslike_c, wind_kph, pressure_mb, humidity, vis_km } =
      this.props.onCurrent;

    return (
      <InfoCurrentWeather>
        <h2>
          {Math.round(temp_c)} C
          <span>
            <img src={this.props.onIcon} alt="" />
          </span>{" "}
        </h2>

        <CurrentWeatherItem>
          <li>
            <p>влажность</p>
            <p>{humidity} %</p>
          </li>
          <li>
            <p>видемость</p>
            <p>{vis_km} км</p>
          </li>
          <li>
            <p>давление </p>
            <p>{pressure_mb} гПа</p>
          </li>
          <li>
            <p>ветер</p>
            <p>{wind_kph} км/ч</p>
          </li>
          <li>
            <p>ощущаеться</p>
            <p>{Math.round(feelslike_c)}С</p>
          </li>
        </CurrentWeatherItem>
      </InfoCurrentWeather>
    );
  }
}

export default CurrentWeather;
