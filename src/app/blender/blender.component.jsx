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
      filterKeywords: ''
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.handleFilterKeyword = this.handleFilterKeyword.bind(this);
  }

  nextPage() {
    this.setState((prevState) => {
      return {currentPage: prevState.currentPage + 1};
    });
  }

  previousPage() {
    this.setState((prevState) => {
      return {currentPage: prevState.currentPage - 1};
    });
  }

  handleFilterKeyword(event){
    const value = event.target.value;
    this.setState(() => {
      return {filterKeywords: value}
    })
  }

  renderPage() {
    if (this.state.currentPage === 2) {
      return (
        <div className="column">
          <h1 className="category-title">Les thématiques</h1>
          <div className="control">
            <input className="input" onChange={this.handleFilterKeyword} type="text" placeholder="Rechercher d'autres mots clefs..." />
          </div>
          {keywords.map((item) => {
            if((this.state.filterKeywords === '' || item.libelle.toLowerCase().includes(this.state.filterKeywords.toLowerCase()))){
              return <CheckboxKeyword item={item} key={item.id} />;
            }
            return null;
          }).filter(item => (item !== null )).slice(0, 5)}
        </div>
      );
    } else if (this.state.currentPage === 3) {
      return (
        <div className="column">
          <h1 className="category-title">Les objectifs</h1>
          {objectifs.map(item => (<CheckboxObjectif item={item} key={item.id} />))}
        </div>
      );
    }
    return (
      <div className="column">
        <h1 className="category-title">Les sujets</h1>
        <div className="columns">
          {domains.map(item => (<div className="column"><CheckboxDomain item={item} key={item.id} /></div>))}
        </div>
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
          <progress className="progress is-orange" value={ this.state.currentPage * 33.333} max="100">45%</progress>
          <div className="columns items">
            <div className="column">
              { this.state.currentPage > 1 ? <input type="button" onClick={this.previousPage} value="Précédent" /> : '' }
            </div>
            { this.renderPage() }
            <div className="column">
              { this.state.currentPage < 3 ? <input type="button" onClick={this.nextPage} value="Suivant" /> : <Mixeur /> }
            </div>
          </div>
        </div>
        <div className="arrow" />
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
