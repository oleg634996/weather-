import "./App.css";
import { Component } from "react";
import FormSearch from "./components/FormSearch/FormSearch";
import ForecastFetch from "./components/API/Api";
import NameWeather from "./components/NameWeather/NameWeather";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import { Container, InfoWeather } from "./App.styled";

class App extends Component {
  state = {
    city: "",
    location: {},
    current: {},
    forecast: {},
    icon: "",
    fotoWeather: [
      {
        name: "Moderate or heavy rain with thunder",
        url: "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Sunny",
        url: "https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Clear",
        url: "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=pexels-francesco-ungaro-281260.jpg&fm=jpg",
      },
      {
        name: "Partly cloudy",
        url: "https://images.pexels.com/photos/12309576/pexels-photo-12309576.jpeg?cs=srgb&dl=pexels-eugene-golovesov-12309576.jpg&fm=jpg",
      },
      {
        name: "Overcast",
        url: "https://images.pexels.com/photos/1000735/pexels-photo-1000735.jpeg?cs=srgb&dl=pexels-brett-sayles-1000735.jpg&fm=jpg",
      },
      {
        name: "Patchy light rain with thunder",
        url: "https://images.pexels.com/photos/8589272/pexels-photo-8589272.jpeg?cs=srgb&dl=pexels-ahmed-8589272.jpg&fm=jpg",
      },
      {
        name: "Light rain shower",
        nrl: "https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg",
      },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      ForecastFetch(this.state.city).then(({ data }) => {
        console.log(data);
        const { location, current, forecast } = data;
        const { condition } = current;
        // const textWeather = forecast;
        this.setState({
          location: location,
          current: current,
          forecast: forecast,
          icon: condition.icon,
          // text: condition.text,
        });
        console.log(condition.text);
        this.onBack(condition.text);
      });
    }

    // this.onBack(condition.text);
  }

  onSubmit = (data) => {
    this.setState({ city: data });
  };

  onBack = (event) => {
    const { fotoWeather } = this.state;
    const d = fotoWeather.find((f) => f.name === event);
    const { name, url } = d;
    if (name === event) {
      document.body.style.backgroundImage = `url(${url})`;
      console.log(d);
    }
  };

  render() {
    const { location, current, forecast, icon } = this.state;
    // console.log(Weather);
    // console.log(current);
    return (
      <Container>
        <FormSearch onSubmit={this.onSubmit} />
        <InfoWeather>
          {icon !== "" ? (
            <CurrentWeather onCurrent={current} onIcon={icon} />
          ) : (
            ""
          )}

          <NameWeather onLocation={location} />
          {icon !== "" ? <Forecast onForecast={forecast} /> : ""}
        </InfoWeather>
      </Container>
    );
  }
}

export default App;
