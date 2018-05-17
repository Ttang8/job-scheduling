import React, {Component} from 'react';

class TruckUploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      start_time: "12:00 AM",
      end_time: "12:00 AM",
      overnight: false
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestTrucks();
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const truck = this.state;
    this.props.createTruck({truck});
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Add Truck</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input placeholder="Name of truck" type="text" autoFocus="autofocus"
            value={this.state.name} onChange={this.update('name')}></input>
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
          <h2>End Time (hour)</h2>
          <select onChange={this.update('end_time')} value={this.state.end_time}>
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
          </select> <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default TruckUploadForm;
