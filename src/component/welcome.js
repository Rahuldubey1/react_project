import react, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {favoriteFood: "Dosa"};
      }
      render() {
        return (
            <>
            <h1>Example for constructor in Mounting</h1>
            <h1>My Favorite Food is <span>{this.state.favoriteFood}</span></h1>
            </>
        );
      }
}

export default Welcome