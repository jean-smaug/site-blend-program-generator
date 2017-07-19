import React, { Component } from 'react';
import * as keywords from './data/keywords.json';
import * as thematiques from './data/thematiques.json';
import CheckboxKeyword from './CheckboxKeyword/CheckboxKeyword';
import CheckboxTheme from './CheckboxTheme/CheckboxTheme';

class Form extends Component {

  render() {
    const showKeyword = keywords.map((item, index) =>
      <CheckboxKeyword item={item} key={index} /> );
    const showTheme = thematiques.map((item, index) =>
      <CheckboxTheme item={item} key={index} /> );

    return (
        <div className="form">
          <h2>Thème des conférences</h2>
          { showTheme }
          <h2>Mots clefs</h2>
          { showKeyword }
        </div>
    );
  }
}

export default Form;
