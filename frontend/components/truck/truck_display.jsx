import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectAllTrucks } from '../../reducers/selectors';

class TruckDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderTrucks() {
    let truckList;

    if (this.props.trucks[0]) {
      truckList = this.props.trucks.map((truck) => (
        <li key={truck.id}>
          <h2>{truck.name} assignments</h2>
          {this.renderJobs(truck)}
        </li>
      ));
    }

    return (
      <ul>
        {truckList}
      </ul>
    );
  }

  renderJobs(truck){
    const jobList = truck.jobs.map((job) => (
      <li key={job.id}>
        {`${job.mover}, ${job.moveDate}, ${job.startTime}, ${job.move_time} hours`}
      </li>
    ));

    return (
      <ul>
        {jobList}
      </ul>
    );
  }

  render() {
    if (this.props.trucks) {
      return (
        <div>
          <h1>Trucks</h1>
          {this.renderTrucks()}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

const mapStateToProps = ({trucks}) => ({
  trucks: selectAllTrucks(trucks)
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestTrucks: () => dispatch(requestTrucks())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TruckDisplay);
