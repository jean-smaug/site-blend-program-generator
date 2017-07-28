import React from 'react';
import { connect } from 'react-redux';
import * as keywords from './data/keywords.json';
import * as domains from './data/domains.json';
import CheckboxKeyword from './checkboxKeyword/checkboxKeyword.component';
import CheckboxDomain from './checkboxDomain/checkboxDomain.component';
import Mixeur from './mixeur/mixeur.component';
import { addKeyword } from './blender.action';

const Form = () => {
  const showKeyword = keywords.map(item => (
    <CheckboxKeyword item={item} key={item.id} />
  ));
  const showTheme = domains.map(item => (
    <CheckboxDomain item={item} key={item.id} />
  ));
  return (
    <div className="form">
      <h2>Thème des conférences</h2>
      {showTheme}
      <h2>Mots clefs</h2>
      {showKeyword}
      <Mixeur />
    </div>
  );
};

const mapStateToProps = state => ({
  state: { form: state.form },
});

const mapDispatchToProps = dispatch => ({
  addKeyword: (word) => {
    dispatch(addKeyword(word));
  },
});

connect(mapStateToProps, mapDispatchToProps)(Form);

export default Form;
