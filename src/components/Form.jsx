import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome da carta:
          <input
            data-testid="name-input"
            name="nameInput"
            type="text"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição da carta:
          <textarea
            data-testid="description-input"
            name="description"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-att1">
          Primeiro Atributo da carta:
          <input
            data-testid="attr1-input"
            min={ 0 }
            type="number"
            id="card-att1"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-att2">
          Segundo Atributo da carta:
          <input
            data-testid="attr2-input"
            type="number"
            min={ 0 }
            name="attr2"
            id="card-att2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-att3">
          Terceiro Atributo da carta:
          <input
            data-testid="attr3-input"
            type="number"
            min={ 0 }
            name="attr3"
            id="card-att3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="image"
            id="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            name="rarity"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="trunfo"
              name="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />) }
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
