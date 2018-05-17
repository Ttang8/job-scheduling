import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createJob } from '../../actions/job_actions';

class JobUploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mover: "",
      move_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      move_time: 0,
      overnight: false
    };

    this.date = new Date();
    this.formatDate = `${this.date.getFullYear()}-${this.date.getMonth()+1 < 10? `0${this.date.getMonth()+1}`: this.date.getMonth()+1}-${this.date.getDate()<10? `0${this.date.getDate()()}`: this.date.getDate()}`;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const job = this.state;
    this.props.createJob({job});
  }

  update(field){
    console.log(typeof event.target.value);
    return event => this.setState({[field]: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Add Job</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input placeholder="Name of person" type="text" autoFocus="autofocus"
            value={this.state.mover} onChange={this.update('mover')}></input>
          <h2>Move Date</h2>
          <input type="date" defaultValue={this.formatDate} onChange={this.update('move_date')}></input>
          <h2>Start Time (hour)</h2>
          <select onChange={this.update('start_time')} value={this.state.start_time}>
            <option value="12:00 AM">12 AM</option>
            <option value="1:00 AM">1 AM</option>
            <option value="2:00 AM">2 AM</option>
            <option value="3:00 AM">3 AM</option>
            <option value="4:00 AM">4 AM</option>
            <option value="5:00 AM">5 AM</option>
            <option value="6:00 AM">6 AM</option>
            <option value="7:00 AM">7 AM</option>
            <option value="8:00 AM">8 AM</option>
            <option value="9:00 AM">9 AM</option>
            <option value="10:00 AM">10 AM</option>
            <option value="11:00 AM">11 AM</option>
            <option value="12:00 PM">12 PM</option>
            <option value="1:00 PM">1 PM</option>
            <option value="2:00 PM">2 PM</option>
            <option value="3:00 PM">3 PM</option>
            <option value="4:00 PM">4 PM</option>
            <option value="5:00 PM">5 PM</option>
            <option value="6:00 PM">6 PM</option>
            <option value="7:00 PM">7 PM</option>
            <option value="8:00 PM">8 PM</option>
            <option value="9:00 PM">9 PM</option>
            <option value="10:00 PM">10 PM</option>
            <option value="11:00 PM">11 PM</option>
          </select>
          <h2>Estimated hours</h2>
          <input placeholder="Estimated move hours" type="number" autoFocus="autofocus"
            value={this.state.mover_time} onChange={this.update('move_time')}></input>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    createJob: (job) => dispatch(createJob(job))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(JobUploadForm);
