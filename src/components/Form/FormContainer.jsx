import { connect }      from 'react-redux'
import * as formActions  from '../../actions/formActions'
import Form              from './Form'


const mapStateToProps = (state) => ({
  state: { form: state.form }
});

const mapDispatchToProps = (dispatch) => ({
  addKeyword: (word) => {
    dispatch(formActions.addKeyword(word))
  }
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer
