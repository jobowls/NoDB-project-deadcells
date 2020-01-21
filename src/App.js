import React, {Component} from 'react';
import axios from 'axios'; 
import './App.css';
import Header from './Components/Header';
import Display from './Components/Display';
import Ninjadex from './Components/Ninjadex';


class App extends Component {
  constructor(){
    super(); 

    this.state = {
      newBosses: [],
      newNinjas: [],
      index: Math.ceil(Math.random() * 9)
    }

  }

  componentDidMount() {
    axios.get('/api/bosses/')
    .then(res => {
      axios.get('/api/ninjas/').then(results => {
        this.setState({newBosses: res.data, newNinjas: results.data, updatedNinjas: results.data }); 
      })
    }).catch(err => console.log(err))
  }

  createNinja = ({name, mutation, weapon, rating} ) => {
    axios.post(`/api/ninjas/`, {name, mutation, weapon, rating }).then(res => {
      this.setState({newNinjas: res.data});
      console.log(res.data)
    }).catch(err => console.log(err))
  }

  editToggle = ({name, mutation, weapon, rating, id}) => {
    console.log(name)
    axios.put(`/api/ninjas/${id}`, {name, mutation, weapon, rating}).then(res => {
      console.log(res)
      this.setState({newNinjas: res.data})
    }).catch(err => console.log(err))
  }

  deleteNinja = (id) => {
    axios.delete(`/api/ninjas/${id}`).then(res => {
      this.setState({newNinjas: res.data})
    }).catch(err => console.log(err))
  }

  render() {
    const { newBosses, index, newNinjas} = this.state;
    return(
      <div className="App">
        <Header />
        <Display newBosses={newBosses} index={index} newNinjas={newNinjas}/> 
        <Ninjadex 
                createNinja={this.createNinja} 
                newNinjas={newNinjas} 
                updatedNinjas={this.editToggle} 
                deleteNinja={this.deleteNinja}/>
      </div> 
    );
  }
}

export default App;