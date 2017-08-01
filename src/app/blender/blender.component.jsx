import React from 'react'
import { connect } from 'react-redux'
import * as keywords from './data/keywords.json'
import * as domains from './data/domains.json'
import * as objectifs from './data/objectives.json'
import 'bulma/css/bulma.css'
import CheckboxKeyword from './checkboxKeyword/checkboxKeyword.component'
import CheckboxDomain from './checkboxDomain/checkboxDomain.component'
import CheckboxObjectif from './checkboxObjectif/checkboxObjectif.component'
import Mixeur from './mixeur/mixeur.component'
import { addKeyword } from './blender.action'
import './blender.css'

const Form = () => {
  const showKeyword = keywords.map(item => (
    <CheckboxKeyword item={item} key={item.id} />
  ))
  const showTheme = domains.map(item => (
    <CheckboxDomain item={item} key={item.id} />
  ))
  const showObjectif = objectifs.map(item => (
    <CheckboxObjectif item={item} key={item.id} />
  ))
  return (
    <div>
      <div className='form'>
        <div className='form-header'>
          <h1>Choisissez les ingrédients de vos smoothies</h1>
          <h2>et laissez-nous vous proposer un BlendWebMix sur mesure...</h2>
        </div>
        <div className='columns items'>
          <div className='column'>
            <h1 className='category-title'>Les thématiques</h1>
            {showTheme}
          </div>
          <div className='column'>
            <h1 className='category-title'>Les sujets</h1>
            {showKeyword}
          </div>
          <div className='column'>
            <h1 className='category-title'>Vos objectifs</h1>
            {showObjectif}
          </div>
          <div className='column mix-btn'>
            <Mixeur />
          </div>
        </div>
      </div>
      <div className='arrow' />
    </div>
  )
}

const mapStateToProps = state => ({
  state: { form: state.form }
})

const mapDispatchToProps = dispatch => ({
  addKeyword: (word) => {
    dispatch(addKeyword(word))
  }
})

connect(mapStateToProps, mapDispatchToProps)(Form)

export default Form
