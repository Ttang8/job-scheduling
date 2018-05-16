import { connect } from 'react-redux';
import { createTruck, requestTrucks, clearErrors } from '../../actions/truck_actions';
import TruckUploadForm from './truck_upload_form';

const mapStateToProps = ({trucks, errors}) => ({
  trucks,
  errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestTrucks: () => dispatch(requestTrucks()),
    createTruck: (truck) => dispatch(createTruck(truck)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckUploadForm);
