import { connect }      from 'react-redux'
import * as formActions  from '../../actions/formActions'
import App              from './App'

const mapStateToProps = (state) => {
  return {
    state: {
      form : state.form,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMotClef: (mot) => {
      dispatch(formActions.addMotClef(mot))
    },
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer
