import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

import Axios from "../../axios-orders";

import Spinner from "../../components/UI/Spinner/spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.5,
  cheese: 0.5,
  meat: 1.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalprice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentWillMount() {
    Axios.get("https://react-burger-ddf01.firebaseio.com/ingredients.json")
      .then(res => this.setState({ ingredients: res.data }))
      .catch(err => this.setState({ error: true }));
  }

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey];
      })
      .reduce((total, el) => {
        return total + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredienthandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalprice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredienthandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalprice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert("you continue!");

    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalprice,
      customer: {
        name: "ravraw",
        address: {
          street: "123 street",
          zipcode: "3ty333",
          country: "canada"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    Axios.post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(err => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disbaledInfo = {
      ...this.state.ingredients
    };
    for (let key in disbaledInfo) {
      disbaledInfo[key] = disbaledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredienthandler}
            ingredientRemoved={this.removeIngredienthandler}
            disabled={disbaledInfo}
            price={this.state.totalprice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </React.Fragment>
      );

      orderSummary = (
        <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalprice}
        />
      );
      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanceledHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, Axios);
