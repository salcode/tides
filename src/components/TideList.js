import React from 'react';

const getUrl = (beginDate, endDate, station) => {
    return `https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${beginDate}&end_date=${endDate}&datum=MLLW&station=${station}&time_zone=lst_ldt&units=english&interval=hilo&format=json`;
}

const getTideTypeLabel = (type) => {
  console.log(type);
  switch (type) {
    case 'H':
      return 'High';
    case 'L':
      return 'Low';
  }
  return 'undefined';
}

class TideList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      predictions: [],
    };

    console.log(
      'constructor',
      {
        props,
        state: this.state,
      }
    );
  }

  componentDidMount() {
    console.log(
      'componentDidMount',
      {
        props: this.props,
        state: this.state,
    });

    const {
      beginDate,
      endDate,
      station,
    } = this.props;

    fetch(getUrl(beginDate, endDate, station))
      .then(result => result.json())
      .then(
        (result) => {
          /**
           * Example result:
           * {
           *   predictions: [
           *     {
           *       t: "2020-05-29 01:57",
           *       v: "5.388",
           *       type: "H"
           *     },
           *     {
           *       t: "2020-05-29 08:23",
           *       v: "0.213",
           *       type: "L"
           *     }
           *   ],
           * }
           */
          this.setState({
            error: result.error,
            isLoaded: true,
            predictions: result.predictions,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, predictions } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    console.log(
      'render()',
      {
        props: this.props,
        state: this.state,
    });

    return (
      <ul>
        {predictions.map(prediction => (
          <li key={prediction.t}>
            {getTideTypeLabel(prediction.type)} Tide at {prediction.t} ({prediction.v} ft)
          </li>
        ))}
      </ul>
    );
  }
}

export default TideList;
