import React from 'react';
import { connect } from 'react-redux';
import './blender.css';
import * as keywords from './data/keywords.json';
import * as domains from './data/domains.json';
import * as objectifs from './data/objectives.json';
import CheckboxKeyword from './checkboxKeyword/checkboxKeyword.component';
import CheckboxDomain from './checkboxDomain/checkboxDomain.component';
import CheckboxObjectif from './checkboxObjectif/checkboxObjectif.component';
import Mixeur from './mixeur/mixeur.component';
import { addKeyword } from './blender.action';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  nextPage() {
    console.log(this.state.currentPage);
    this.setState({ currentPage: this.currentPage + 1 });
  }

  previousPage() {
    this.setState({ currentPage: this.currentPage - 1 });
  }

  renderPage() {
    if (this.state.currentPage === 2) {
      return (
        <div className="column">
          <h1 className="category-title">Les sujets</h1>
          {domains.map(item => (<CheckboxDomain item={item} key={item.id} />))}
        </div>);
    } else if (this.state.currentPage === 3) {
      return (
        <div className="column">
          <h1 className="category-title">Les objectifs</h1>
          {objectifs.map(item => (<CheckboxObjectif item={item} key={item.id} />))}
        </div>);
    } else if (this.state.currentPage === 4) {
      return <Mixeur />;
    }
    return (
      <div className="column">
        <h1 className="category-title">Les thématiques</h1>
        {keywords.map(item => (<CheckboxKeyword item={item} key={item.id} />))}
      </div>
    );
  }


  render() {
    return (
      <div>
        <div className="form">
          <div className="form-header">
            <h1>Choisissez les ingrédients de vos smoothies</h1>
            <h2>et laissez-nous vous proposer un BlendWebMix sur mesure...</h2>
          </div>
          <div className="columns items">
            <div className="column">
              <input type="button" onClick={this.previousPage} value="Précédent" />
            </div>
            { this.renderPage() }
            <div className="column">
              <input type="button" onClick={this.nextPage} value="Suivant" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
