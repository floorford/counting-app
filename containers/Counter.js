// react redux's connect function
import { connect } from "react-redux";

// importing the action
import { updateCounter } from "../actions";

// import in the component
import Counter from "../Counter";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => {
  return {
    onPress: amount => dispatch(updateCounter(amount)),
  };
};

// connect up mapStateToProps with the Counter component
// Counter's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
