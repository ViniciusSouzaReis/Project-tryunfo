import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  name: '',
  description: '',
  attr1: '',
  attr2: '',
  attr3: '',
  image: '',
  rarity: '',
  trunfo: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      trunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
