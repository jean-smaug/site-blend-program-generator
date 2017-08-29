import React from 'react';
import _ from 'lodash';

import './blender.css';
import * as keywords from './data/keywords.json';
import * as domains from './data/domains.json';
import * as objectifs from './data/objectives.json';
import CheckboxKeyword from './checkboxKeyword/checkboxKeyword.component';
import CheckboxDomain from './checkboxDomain/checkboxDomain.component';
import CheckboxObjectif from './checkboxObjectif/checkboxObjectif.component';
import InformationsInput from './informationsInput/informationsInputcomponent';
import Mixeur from './mixeur/mixeur.component';
import ModalRestore from './modalRestore/modalRestore.component';

export default class Blender extends React.Component {
  state = {
    currentPage: 1,
    filterKeywords: '',
    isModalVisible: false,
  };

  nextPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  previousPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
  };

  handleFilterKeyword = (event) => {
    const value = event.target.value;
    this.setState(() => ({ filterKeywords: value }));
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case 2:
        return (
          <div className="columns">
            <div className="column">
              <h1 className="category-title">Les thématiques</h1>
              <h2 className="category-desc">
                Cochez les mots clefs qui correspondent à votre profil de chef... :)
              </h2>
              <hr />
              <div className="control">
                <input
                  className="input"
                  onChange={this.handleFilterKeyword}
                  type="text"
                  placeholder="Rechercher d'autres mots clefs..."
                />
              </div>
              {_.map(keywords, (item) => {
                if (
                  this.state.filterKeywords === '' ||
                  item.libelle.toLowerCase().includes(this.state.filterKeywords.toLowerCase())
                ) {
                  return <CheckboxKeyword item={item} key={item.id} />;
                }
                return null;
              })
                .filter(item => item !== null)
                .slice(0, 10)}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="columns">
            <div className="column">
              <h1 className="category-title">Les objectifs</h1>
              {_.map(objectifs, item => <CheckboxObjectif item={item} key={item.id} />)}
            </div>
          </div>
        );
      case 4:
        return (<div className="columns">
          <div className="column">
            <h1 className="category-title">Vos informations (facultatif)</h1>
            <InformationsInput />
          </div>
          <div className="column">
            <Mixeur />
          </div>
        </div>);
      default:
        return (
          <div className="columns">
            <div className="column">
              <h1 className="category-title">Vos sujets favoris</h1>
              <h2 className="category-desc">
                Choisissez vos types de conférences préférées ainsi que le niveau souhaité.. :)
              </h2>
              <hr />
              <div className="columns">
                {_.map(domains, item =>
                  (<div className="column">
                    <CheckboxDomain item={item} key={item.id} />
                  </div>),
                )}
              </div>
            </div>
          </div>
        );
    }
  };


  render() {
    return (
      <div>
        {this.state.isModalVisible
          ? <ModalRestore
            closeModal={this.toggleModal}
          />
          : null}
        <div className="header">
          <img src="http://www.blendwebmix.com/wp-content/uploads/2017/04/Blend-Web-Mix-2-1-e1492005334702.png" width="145" height="45" alt="BlendWebMix 2017" />
          {/*<h1> Créer votre menu personnalisé ! </h1>*/}
            {/*<h1>Choisissez les ingrédients de vos smoothies</h1>*/}
            {/*<h2>et laissez-nous vous proposer un BlendWebMix sur mesure...</h2>*/}
        </div>
        {/*<div className="sub-header" >*/}
          {/*<img src="http://www.blendwebmix.com/wp-content/uploads/2016/05/top-header_lowres-2.jpg" alt="banniere" />*/}
        {/*</div>*/}
        <div className="form">
          <div className="columns">
            <div className="modal-wrap column">
              <div className="modal-header">
                <span className={this.state.currentPage === 1 ? 'is-active' : null} />
                <span className={this.state.currentPage === 2 ? 'is-active' : null} />
                <span className={this.state.currentPage === 3 ? 'is-active' : null} />
                <span className={this.state.currentPage === 4 ? 'is-active' : null} />
              </div>
              <div className="modal-bodies">
                <div className="modal-body">
                  <div className="items">
                    {this.renderPage()}
                  </div>
                  <div className="modal-footer">
                    <hr />
                    <div className="columns">
                      <div className="column is-4">
                        {this.state.currentPage > 1
                          ? <input
                            className="btn-precedent"
                            type="button"
                            onClick={this.previousPage}
                            value="< Précédent"
                          />
                          : ''}
                      </div>
                      <div className="column is-4">
                        <a className="link-restore" role="presentation" onClick={() => this.toggleModal()} >
                          Vous avez déja généré un planning ? Cliquez-ici
                        </a>
                      </div>
                      <div className="column is-4 is-offset-2">
                        {this.state.currentPage < 4
                          ? <input
                            className="btn-suivant"
                            type="button"
                            onClick={this.nextPage}
                            value="Suivant >"
                          />
                          : ''}
                      </div>
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
