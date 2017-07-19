import React, { Component } from 'react';
import * as keywords from './data/keywords.json';
import CheckboxKeyword from './CheckboxKeyword/CheckboxKeyword';

class Form extends Component {

  render() {
    const showKeyword = keywords.map((item, index) =>
      <CheckboxKeyword item={item} key={index} /> );

    return (
        <div className="form">
          <h2>Mots clefs</h2>
          { showKeyword }
        </div>
    );
  }
}

export default Form;
