import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(values => values.main.temp);
    const pressures = cityData.list.map(values => values.main.pressure);
    const humidities = cityData.list.map(values => values.main.humidity);

    return (
      <tr key={cityData.city.id}>
        <th scope="row">{cityData.city.name}</th>
        <td><Chart data={temps} color="blue" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);