import React, {Component} from 'react'; 
import brut from './brutality.png';
import tac from './tactics.png';
import heal from './health.png';


class Display extends Component {
   constructor () {
      super (); 

      this.state = {
         
      }
   }

   
render () {
const {newBosses, index, newNinjas} = this.props; 

      return (
         <div className="battle">   
            <div id='left-guy'> {newBosses.length && 
               <section>
                  <h1> {newBosses[index].name} </h1>                    
                   
                     <h4> Biome: {newBosses[index].biome} </h4>
                     <h4> Attacks: {newBosses[index].attacks} </h4>
                     <h4> Rating: {newBosses[index].rating} </h4>
                     <h4> Reward: {newBosses[index].reward} </h4>
               </section> }
            </div>

            <div id="right-guy"> {newNinjas.length && 
               <section className="player">
               <h1> {newNinjas[0].name} </h1> 
                  <button id="brute"> Brutality 
                     <img src={brut} alt="Brutality"/>
                  </button>
                  <button id="tact">Tactics
                     <img src={tac} alt="Tactics"/>
                  </button>
                  <button id="hell">Survival
                     <img src={heal} alt="Survival"/>
                  </button>
                  <h4> Mutation: {newNinjas[0].mutation} </h4>
                  <h4> Weapon: {newNinjas[0].weapon} </h4>
                  <h4> Rating: {newNinjas[0].rating} </h4>
            </section> }
            </div>
         </div>
      )  
   }
}

export default Display; 