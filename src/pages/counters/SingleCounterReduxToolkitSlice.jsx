import { connect } from 'react-redux';
import * as actions from '../../redux/counterToolkitSlice/reducer';
import SingleCounter from './SingleCounter';

const mapStateToProps = ({ counterToolkitSlice: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
