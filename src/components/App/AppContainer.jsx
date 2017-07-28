import { connect } from 'react-redux';
import * as formActions from '../Blender/formActions';
import App from './App';

const mapStateToProps = state => ({
  state: { form: state.form },
});

const mapDispatchToProps = dispatch => ({
  addKeyword: (word) => {
    dispatch(formActions.addKeyword(word));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
