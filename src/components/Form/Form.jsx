import React from 'react';
import * as keywords from './data/keywords.json';
import * as thematiques from './data/thematiques.json';
import CheckboxKeyword from './CheckboxKeyword/CheckboxKeyword';
import CheckboxTheme from './CheckboxTheme/CheckboxTheme';

const Form = () => {
  const showKeyword = keywords.map(item => (
    <CheckboxKeyword item={item} key={item.id} />
  ));
  const showTheme = thematiques.map(item => (
    <CheckboxTheme item={item} key={item.id} />
  ));

  return (
    <div className="form">
      <h2>Thème des conférences</h2>
      {showTheme}
      <h2>Mots clefs</h2>
      {showKeyword}
    </div>
  );
};

export default Form;
