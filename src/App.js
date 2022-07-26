import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      allCards: [],
      nameInput: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: '',
      trunfo: false,
      hasTrunfo: false,
      isDisable: true,
    };
  }

  checkButtonNumber = () => {
    const {
      attr1,
      attr2,
      attr3,
    } = this.state;
    const maxNumber = 90;
    const minNumber = 0;
    const maxSum = 210;
    const number1 = parseInt(attr1, 10) > maxNumber || parseInt(attr1, 10) < minNumber;
    const number2 = parseInt(attr2, 10) > maxNumber || parseInt(attr2, 10) < minNumber;
    const number3 = parseInt(attr3, 10) > maxNumber || parseInt(attr3, 10) < minNumber;
    const sum = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);
    const compareSum = sum > maxSum;
    const compare = number1 || number2 || number3 || compareSum;
    return compare;
  }

  checkButtonLength = () => {
    const {
      nameInput,
      description,
      image,
      rarity,
    } = this.state;
    const checkLength = nameInput.length === 0
    || description.length === 0
    || image.length === 0
    || rarity.length === 0;
    return checkLength;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const buttonIsDisabledLength = this.checkButtonLength();
      const buttonIsDisabledNumber = this.checkButtonNumber();
      const compareBoll = buttonIsDisabledLength || buttonIsDisabledNumber;
      this.setState({ isDisable: compareBoll });
    });
  };

  checkHasTrunfo = () => {
    const { trunfo } = this.state;
    this.setState(
      trunfo ? { hasTrunfo: true } : { hasTrunfo: false },
    );
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { nameInput,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      hasTrunfo,
      isDisable,
    } = this.state;
    const cardBuild = {
      nameInput,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      hasTrunfo,
      isDisable,
    };
    this.setState((prevState) => ({
      allCards: [...prevState.allCards, cardBuild],
      nameInput: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rarity: '',
      trunfo: false,
      hasTrunfo: this.checkHasTrunfo(),
      isDisable: true,
    }));
  }

  render() {
    const {
      allCards,
      nameInput,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
      hasTrunfo,
      isDisable,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameInput }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isDisable }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
        <h2>Cartas criadas:</h2>
        { allCards.map((element) => (
          <div key={ element.nameInput }>
            <Card
              key={ element.nameInput }
              className={ element.nameInput }
              cardName={ element.nameInput }
              cardDescription={ element.description }
              cardAttr1={ element.attr1 }
              cardAttr2={ element.attr2 }
              cardAttr3={ element.attr3 }
              cardImage={ element.image }
              cardRare={ element.rarity }
              cardTrunfo={ element.trunfo }
            />
            <button
              type="button"
              className={ element.nameInput }
              onClick={ () => element.remove() }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
