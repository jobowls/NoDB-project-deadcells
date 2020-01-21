import React, { Component } from "react";

class Ninjadex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: "",
      mutation: "",
      weapon: "",
      rating: "",
      toggleAdd: false,
      editToggle: false
    };
  }

  addToggle = () => {
    this.setState({ toggleAdd: !this.toggleAdd });
  };

  handleAdd = () => {
    const { name, mutation, weapon, rating } = this.state;
    this.props.addFn({ name, mutation, weapon, rating });
    this.addToggle();
  };

  handleInput = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  createNinja = () => {
    const { name, mutation, weapon, rating } = this.state;
    this.props.createNinja({ name, mutation, weapon, rating });
    this.setState({
      name: "",
      mutation: "",
      weapon: "",
      rating: "",
      toggleAdd: !this.state.toggleAdd
    });
  };

  editToggle = element => {
   const {name, mutation, weapon, rating, id, editToggle} = this.state
   if(editToggle){
      this.setState({
         id: element.id,
         name: element.name,
         mutation: element.mutation,
         weapon: element.weapon,
         rating: element.rating,
         editToggle: !this.state.editToggle
       }, ()=> {
          this.props.updatedNinjas({name, mutation, weapon, rating, id})
       });
      }
    this.setState({
      id: element.id,
      name: element.name,
      mutation: element.mutation,
      weapon: element.weapon,
      rating: element.rating,
      editToggle: !this.state.editToggle
    });
  };
      
  render() {
    
    const { newNinjas, deleteNinja } = this.props;

    return (
      <div>
      
        <button onClick={this.addToggle}> Equip Your Ninja! </button>
        {this.state.toggleAdd && (
          <div>
            <p>Player Name: </p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.name}
              name="name"
            />
            <p>Select Ninja Class:</p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.mutation}
              name="mutation"
            />
            <p>Select Ninja's Weapon:</p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.weapon}
              name="weapon"
            />
            <p>Rating:</p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.rating}
              name="rating"
            />
            <button onClick={() => this.createNinja()}>Fight!</button>
          </div>
        )}
        {newNinjas.length > 1 &&
          newNinjas.map((element, index) =>
            !this.state.editToggle ? (
              <div key={index} find={element} id={element.id}>
                <h2> {element.name} </h2>
                <p> {element.rating} </p>
                <p> {element.weapon} </p>
                <button onClick={() => this.editToggle(element)}>
                  {" "}
                  edit{" "}
                </button>
                <button onClick={()=> deleteNinja(element.id)}>Delete Ninja</button>
              </div>
            ) : (
               <div>
            <p>Player Name: </p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.name}
              name="name"
            />
            <p>Select Ninja Class:</p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.mutation}
              name="mutation"
            />
            <p>Select Ninja's Weapon:</p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.weapon}
              name="weapon"
            />
            <p>Rating:</p>
            <input
              onChange={e => this.handleInput(e.target)}
              value={this.state.rating}
              name="rating"
            />
            <button onClick={() => this.editToggle(element)}>Save Ninja</button>
          </div>
            )
          )}
      </div>
    );
  }
}

export default Ninjadex;
