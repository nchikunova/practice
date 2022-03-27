import { connect } from 'react-redux';
import SingleCounter from './SingleCounter';
import * as actions from '../../redux/counter/actions';

const mapStateToProps = ({ counter: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
