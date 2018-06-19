// react redux's connect function
import { connect } from "react-redux";

// importing the action
import { resetCounter, resetHistory } from "../actions";

// import in the component
import Reseter from "../Reseter";

const mapDispatchToProps = dispatch => {
  return {
    onResetCounter: () => dispatch(resetCounter()),
    onResetHistory: () => dispatch(resetHistory()),
  };
};

// connect up mapStateToProps with the component
// Reseter's props are now controlled by this file
export default connect(null, mapDispatchToProps)(Reseter);
