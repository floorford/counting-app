// react redux's connect function
import { connect } from "react-redux";

// import in the component
import Scroller from "../Scroller";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
  return {
    history: state.history,
  };
};

// connect up mapStateToProps with the Counter component
// Counter's props are now controlled by this file
export default connect(mapStateToProps)(Scroller);
