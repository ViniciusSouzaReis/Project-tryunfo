import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome da carta:
          <input
            data-testid="name-input"
            type="text"
            name="card-name"
            id="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição da carta:
          <textarea
            data-testid="description-input"
            name="description-input"
            id="description-input"
          />
        </label>
        <label htmlFor="card-att1">
          Primeiro Atributo da carta:
          <input
            data-testid="attr1-input"
            type="number"
            name="card-att1"
            id="card-att1"
          />
        </label>
        <label htmlFor="card-att2">
          Segundo Atributo da carta:
          <input
            data-testid="attr2-input"
            type="number"
            name="card-att2"
            id="card-att2"
          />
        </label>
        <label htmlFor="card-att3">
          Terceiro Atributo da carta:
          <input
            data-testid="attr3-input"
            type="number"
            name="card-att3"
            id="card-att3"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="image-input"
            id="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select data-testid="rare-input" name="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
