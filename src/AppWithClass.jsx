import { Component } from "react";
import { fetchCocktails } from "./api/cocktails";
import CocktailComponent from "./components/CocktailComponent.jsx";

export class AppWithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      name: "nika",
      cocktails: {
        isLoading: true,
        isLoaded: false,
        isError: false,
      },
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    try {
      const cocktails = await fetchCocktails();
      this.setState({
        cocktails: {
          data: cocktails,
          isLoading: false,
          isLoaded: true,
          isError: false,
        },
      });
    } catch (err) {
      this.setState({
        cocktails: {
          data: [],
          isLoading: false,
          isLoaded: true,
          isError: true,
        },
      });
    }
  }

  handleClick(id) {
    const newArray = [...this.state.cocktails.data];
    const filteredArray = newArray.filter((element) => element.idDrink !== id);
    this.setState({
      cocktails: {
        data: filteredArray,
        isLoading: false,
        isLoaded: true,
        isError: false,
      },
    });
  }

  render() {
    const { number, name, cocktails } = this.state;

    if (cocktails.isLoading) {
      return <h1>იტვირთება...</h1>;
    }

    if (cocktails.isError) {
      return <h1>შეცდომა...</h1>;
    }

    return (
      <section className="cocktails-container">
        {cocktails.data.map((cocktail, index) => {
          return (
            <CocktailComponent
              key={index}
              cocktail={cocktail}
              // handleClick={this.handleClick}
              handleClick={() => this.handleClick(cocktail.idDrink)}
            />
          );
        })}
      </section>
    );
  }
}

// {
/* <CocktailComponent /> */
// }

// export default AppWithClass;

// componentDidUpdate(prevProps, prevState) {
// 	console.log("prevState", prevState);
// 	console.log("nextState", prevProps);
// }

// componentDidMount
// componentWillUnmount() {}
// componentDidUpdate

// componentDidCatch(error, info) {
// 	console.log("errored");
// 	console.log("erorshia", info);
// }
