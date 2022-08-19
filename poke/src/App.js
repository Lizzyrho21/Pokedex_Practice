import React, { Component } from 'react';
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    poke: [], 
    }
  }
// pokemon handler
  getPokemon = async () => {
    let URL =  'https://pokeapi.co/api/v2/pokemon/6/';
    let res = await axios.get(URL);

    console.log(res.data);
    // in my setState, I put the data returned INSIDE an array. you see the brackets?
    this.setState({poke: [res.data]}, () => console.log(this.state.poke));
  }
  render() {
    return (
        <div>
      Pokemon:

<button onClick={this.getPokemon}>Click me, darn it!</button>
{/* I had to make a ternary (shorthand if/else). That way, I would not get an error when a value was empty */}
{this.state.poke !== null ? this.state.poke.map((el) => {
  return(
    <>
    <h1>{el.name}</h1>
    {/* Now I can access sprites!! */}
    <img src={el.sprites.back_default} alt={el.name}/>
    </>
  )
}): 'I am loading...'} 
      </div>

    )
  }
}



