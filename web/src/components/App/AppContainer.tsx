import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state: any) => {
  return {
    header: state.someAppState.header
  };
};

export default connect(mapStateToProps)(App);
