import React from 'react';

class TideList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

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
  }

  render() {
    console.log(
      'render()',
      {
        props: this.props,
        state: this.state,
    });

    return (
      <h2>
        hello fromTideList
      </h2>
    );
  }
}

export default TideList;
