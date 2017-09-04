import React from 'react';
import _ from 'lodash';

import './blender.css';
import * as domains from './data/domains.json';
import * as objectifs from './data/objectives.json';
import CheckboxKeyword from './checkboxKeyword/checkboxKeyword.component';
import CheckboxDomain from './checkboxDomain/checkboxDomain.component';
import CheckboxObjectif from './checkboxObjectif/checkboxObjectif.component';
import InformationsInput from './informationsInput/informationsInputcomponent';
import Mixeur from './mixeur/mixeur.component';
import ModalRestore from './modalRestore/modalRestore.component';
import { getTags } from '../../lib/dataFilter.lib';
import { getConferences } from '../../lib/database';

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
      tags: [],
    });
  };

  componentDidMount = async () => {
    const conferences = await getConferences() || [];
    this.setState({ tags: getTags(conferences) });
  }

  // handleClickOpen = () => {
  //   document.getElementsByClassName('button-wrapper')[0].className = 'button-wrapper clicked';
  //   document.getElementById('pool').className = 'onShow';
  //   setTimeout(() => { document.getElementsByClassName('layered-content')[0].className = 'layered-content active'; }, 700);
  // };
  //
  // handleClickClose = () => {
  //   document.getElementsByClassName('button-wrapper')[0].className = 'button-wrapper';
  //   document.getElementsByClassName('layered-content')[0].className = 'layered-content';
  //   setTimeout(() => { document.getElementById('pool').className = ''; }, 1500);
  // };

  renderPage = () => {
    switch (this.state.currentPage) {
      case 2:
        return (
          <div className="column is-12">
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
            {_.map(this.state.tags, (item) => {
              if (
                this.state.filterKeywords === '' ||
                  item.libelle.toLowerCase().includes(this.state.filterKeywords.toLowerCase())
              ) {
                return <CheckboxKeyword item={item} key={item} />;
              }
              return null;
            })
              .filter(item => item !== null)
              .slice(0, 10)}
          </div>
        );
      case 3:
        return (
          <div className="column is-12">
            <h1 className="category-title">Les objectifs</h1>
            <section className="todo">
              <ul className="todo-list">
                {_.map(objectifs, item => <CheckboxObjectif item={item} key={item.id} />)}</ul>
            </section>
          </div>
        );
      case 4:
        return (
          <div className="column is-12">
            <div className="columns">
              <div className="column is-8">
                <h1 className="category-title">Vos informations (facultatif)</h1>
                <InformationsInput />
              </div>
              <div className="column is-4">
                <Mixeur />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="column is-12">
            <h1 className="category-title">Vos sujets favoris</h1>
            <h2 className="category-desc">
                Choisissez vos types de conférences préférées ainsi que le niveau souhaité.. :)
            </h2>
            <hr />
            <div className="columns">
              {_.map(domains, item =>
                (<div className="column is-4">
                  <CheckboxDomain item={item} key={item.id} />
                </div>),
              )}
            </div>
          </div>
        );
    }
  };

  render() {
    return (
      <div>
        {/* <div id="pool" > */}
        {/* <div className="button-wrapper"> */}
        {/* <div className="layer" /> */}
        {/* <button onClick={this.handleClickOpen} className="btn-info main-button fa fa-info"> */}
        {/* <div className="ripple" /> */}
        {/* </button> */}
        {/* </div> */}
        {/* <div className="layered-content"> */}
        {/* <button onClick={this.handleClickClose} */}
        {/* className="btn-info close-button close-button1 fa fa-times" /> */}
        {/* <div className="content"> */}
        {/* <p>Développeur</p> */}
        {/* <h1>Maxime Blanc</h1> */}
        {/* <h1>Maxime Chabert</h1> */}
        {/* <p>On peut aussi mettre ici plein de texte, ça quoi sert  etc</p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {this.state.isModalVisible
          ? <ModalRestore
            closeModal={this.toggleModal}
          />
          : null}
        <div className="columns">
          <div className="modal-wrap column is-8 is-offset-2">
            <div className="modal-header">
              <span className={this.state.currentPage === 1 ? 'is-active' : null} />
              <span className={this.state.currentPage === 2 ? 'is-active' : null} />
              <span className={this.state.currentPage === 3 ? 'is-active' : null} />
              <span className={this.state.currentPage === 4 ? 'is-active' : null} />
            </div>
            <div className="modal-bodies">
              <div className="modal-body">
                <article className="message is-info">
                  <div className="message-body">
                    <a className="link-restore" role="presentation" onClick={() => this.toggleModal()} >
                      Vous avez déja généré un planning ? Cliquez-ici </a>
                  </div>
                </article>
                <div className="columns">
                  {this.renderPage()}
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <hr />
                    <div className="columns">
                      <div className="column is-3">
                        {this.state.currentPage > 1
                          ? <input
                            className="btn-precedent"
                            type="button"
                            onClick={this.previousPage}
                            value="< Précédent"
                          />
                          : ''}
                      </div>
                      <div className="column is-3 is-offset-6" >
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
