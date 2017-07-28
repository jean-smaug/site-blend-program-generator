import React from 'react';
import * as keywords from './data/keywords.json';
import * as thematiques from './data/thematiques.json';
import * as objectifs from './data/objectifs.json';
import CheckboxKeyword from './CheckboxKeyword/CheckboxKeyword';
import CheckboxDomain from './CheckboxDomain/CheckboxDomain';
import CheckboxObjectif from './CheckboxObjectif/CheckboxObjectif';
import Mixeur from './Mixeur/Mixeur';
import './Form.css';

const Form = () => {
  const showKeyword = keywords.map(item => (
    <CheckboxKeyword item={item} key={item.id} />
  ));
  const showTheme = thematiques.map(item => (
    <CheckboxDomain item={item} key={item.id} />
  ));
  const showObjectif = objectifs.map(item => (
    <CheckboxObjectif item={item} key={item.id} />
  ));
  return (
    <div className="form">
      <div className="items">
        <div className="item">
          <h1 className="category-title">Les thématiques</h1>
          { showTheme }
        </div>
        <div className="item">
          <h1 className="category-title">Les sujets</h1>
          { showKeyword }
        </div>
        <div className="item">
          <h1 className="category-title">Vos objectifs</h1>
          { showObjectif }
        </div>
        <div className="item">
          <Mixeur />
        </div>
      </div>
    </div>
  );
};

export default Form;
