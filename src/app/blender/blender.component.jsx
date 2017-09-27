import React from 'react';
import _ from 'lodash';

import './blender.css';
import * as domains from './data/domains.json';
import CheckboxKeyword from './checkboxKeyword/checkboxKeyword.component';
import CheckboxDomain from './checkboxDomain/checkboxDomain.component';
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
    tagsSelected: [],
  };

  componentDidMount = async () => {
    const conferences = await getConferences() || [];
    this.setState({ tags: _.shuffle(getTags(conferences)) });
  };

  keywordsChange = (type, tag) => {
    if (type === 'ADD') {
      this.setState({ tagsSelected: [...this.state.tagsSelected, { libelle: tag, color: _.sample(['info', 'success', 'primary', 'warning']) }] });
    } else if (type === 'REMOVE') {
      this.setState({ tagsSelected: _.filter(
        this.state.tagsSelected,
        element => element.libelle !== tag,
      ) });
    }
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

  // handleClickOpen = () => {
  //   document.getElementsByClassName('button-wrapper')[0].className = 'button-wrapper clicked';
  //   document.getElementById('pool').className = 'onShow';
  //   setTimeout(() => { document.getElementsByClassName('layered-content')[0].className
  // = 'layered-content active'; }, 700);
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
              Quels sont les domaines qui vous intéressent ? A quel niveau les abordez-vous?
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
      case 3:
        return (
          <div className="column is-12">
            <h1 className="category-title">Les sujets</h1>
            <h2 className="category-desc">
              Sélectionnez les mots-clefs qui vous intéressent.
            </h2>
            {_.map(this.state.tagsSelected, item => (
              <span
                role="presentation"
                className={`tag is-${item.color} keyword-elt`}
              >
                {item.libelle}
              </span>
            ),
            )
            }
            <hr />
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="control">
                  <input
                    className="input"
                    onChange={this.handleFilterKeyword}
                    type="text"
                    placeholder="Rechercher d'autres mots clefs..."
                  />
                </div>
                {_.map(this.state.tags, (item) => {
                  if (item !== undefined) {
                    if (
                      this.state.filterKeywords === '' ||
                      _.startsWith(item.toLowerCase(), this.state.filterKeywords.toLowerCase())
                    ) {
                      return (<CheckboxKeyword
                        change={this.keywordsChange}
                        item={item}
                        key={item}
                      />);
                    }
                  }
                  return null;
                })
                  .filter(item => item !== null)
                  .slice(0, 25)}
              </div>
            </div>
          </div>
        );
      // case 4:
      //   return (
      //     <div className="column is-12">
      //       <h1 className="category-title">Les objectifs</h1>
      //       <section className="todo">
      //         <ul className="todo-list">
      //           {_.map(objectifs, item => <CheckboxObjectif item={item} key={item.id} />)}</ul>
      //       </section>
      //     </div>
      //   );
      case 4:
        return (
          <div className="column is-12">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h1 className="category-title">Vos informations</h1>
                <h2 className="category-desc">
                  {`Ces informations sont facultatives, elles nous permettront l'année prochaine
                    de vous envoyer des informations plus adaptées à vos centres d'intérêt.`}
                </h2>
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <InformationsInput />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="column is-12">
            <div className="columns">
              <div className="column is-6 is-offset-3 accueil" >
                <h1>Laissez-nous vous concoctez un BlendWebMix sur mesure...</h1>
              </div>
            </div>
            <div className="columns">
              <div className="column is-8 is-offset-2 desc">
                <p>Le blender est un compositeur de planning spécialement crafté pour vous
                  sélectionner les conférences et les animations les plus suceptibles de
                  correspondre à vos attentes.</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-4" >
                <input
                  className="btn-begin"
                  type="button"
                  onClick={this.nextPage}
                  value="Commencer >"
                />
              </div>
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
              <span role="presentation" className={this.state.currentPage === 1 ? 'is-active' : null} onClick={() => this.setState({ currentPage: 1 })} />
              <span role="presentation" className={this.state.currentPage === 2 ? 'is-active' : null} onClick={() => this.setState({ currentPage: 2 })} />
              <span role="presentation" className={this.state.currentPage === 3 ? 'is-active' : null} onClick={() => this.setState({ currentPage: 3 })} />
              <span role="presentation" className={this.state.currentPage === 4 ? 'is-active' : null} onClick={() => this.setState({ currentPage: 4 })} />
            </div>
            <div className="modal-bodies">
              <div className="modal-body">
                {this.state.currentPage === 1 ? <article className="message is-info">
                  <div className="message-body">
                    <a className="link-restore" role="presentation" onClick={() => this.toggleModal()} >
                      Vous avez déja généré un planning ? Cliquez-ici </a>
                  </div>
                </article> : ''}
                <div className="columns">
                  {this.renderPage()}
                </div>
                <div className="columns">
                  <div className="column is-12">
                    {this.state.currentPage > 1 ? <hr /> : ''}
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
                        {this.state.currentPage !== 4 && this.state.currentPage !== 1 ?
                          <input
                            className="btn-suivant"
                            type="button"
                            onClick={this.nextPage}
                            value="Suivant >"
                          />
                          : ''}
                        { this.state.currentPage === 4 ? <Mixeur /> : '' }
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
