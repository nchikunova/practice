import { connect } from 'react-redux';
import * as actions from '../../redux/counterToolkit/actions';
import SingleCounter from './SingleCounterState';

const mapStateToProps = ({ counterToolkit: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
