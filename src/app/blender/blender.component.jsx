import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './blender.css';
import * as keywords from './data/keywords.json';
import * as domains from './data/domains.json';
import * as objectifs from './data/objectives.json';
import CheckboxKeyword from './checkboxKeyword/checkboxKeyword.component';
import CheckboxDomain from './checkboxDomain/checkboxDomain.component';
import CheckboxObjectif from './checkboxObjectif/checkboxObjectif.component';
import Mixeur from './mixeur/mixeur.component';
import { addKeyword } from './blender.action';

class Blender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      filterKeywords: '',
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.handleFilterKeyword = this.handleFilterKeyword.bind(this);
  }

  nextPage() {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  }

  previousPage() {
    this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
  }

  handleFilterKeyword(event) {
    const value = event.target.value;
    this.setState(() => ({ filterKeywords: value }));
  }

  renderPage() {
    if (this.state.currentPage === 2) {
      return (
        <div className="columns">
          <div className="column">
            <h1 className="category-title">Les thématiques</h1>
            <h2 className="category-desc">Cochez les mots clefs qui correspondent à votre profil de chef... :)</h2>
            <hr />
            <div className="control">
              <input className="input" onChange={this.handleFilterKeyword} type="text" placeholder="Rechercher d'autres mots clefs..." />
            </div>
            {keywords.map((item) => {
              if ((this.state.filterKeywords === '' || item.libelle.toLowerCase().includes(this.state.filterKeywords.toLowerCase()))) {
                return <CheckboxKeyword item={item} key={item.id} />;
              }
              return null;
            }).filter(item => (item !== null)).slice(0, 10)}
          </div>
        </div>
      );
    } else if (this.state.currentPage === 3) {
      return (
        <div className="columns">
          <div className="column">
            <h1 className="category-title">Les objectifs</h1>
            {objectifs.map(item => (<CheckboxObjectif item={item} key={item.id} />))}
          </div>
          <div className="column"><Mixeur /></div>
        </div>
      );
    }
    return (
      <div className="columns">
        <div className="column">
          <h1 className="category-title">Vos sujets favoris</h1>
          <h2 className="category-desc">Choisissez vos types de conférences préférées ainsi que le niveau souhaité.. :)</h2>
          <hr />
          <div className="columns">
            {domains.map(item => (<div className="column"><CheckboxDomain item={item} key={item.id} /></div>))}
          </div>
        </div>
      </div>
    );
  }


  render() {
    return (
      <div >
        <div className="form">
          <div className="form-header">
            <h1>Choisissez les ingrédients de vos smoothies</h1>
            <h2>et laissez-nous vous proposer un BlendWebMix sur mesure...</h2>
          </div>
          <div className="columns">
            <div className="modal-wrap column">
              <div className="modal-header">
                <span className={this.state.currentPage === 1 ? 'is-active' : null} />
                <span className={this.state.currentPage === 2 ? 'is-active' : null} />
                <span className={this.state.currentPage === 3 ? 'is-active' : null} />
              </div>
              <div className="modal-bodies">
                <div className="modal-body">
                  <div className="items">
                    { this.renderPage() }
                  </div>
                  <hr/>
                  <div className=" columns">
                    <div className="column is-4">
                      { this.state.currentPage > 1 ? <input className="btn-precedent" type="button" onClick={this.previousPage} value="< Précédent" /> : '' }
                    </div>
                      <div className="column is-4 is-offset-6">
                      { this.state.currentPage < 3 ? <input className="btn-suivant" type="button" onClick={this.nextPage} value="Suivant >" /> : '' }
                    </div>
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blender);
