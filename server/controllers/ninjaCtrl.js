const ninjaData = require('../ninja-data');
let id = 1;

module.exports = {
   getNinja: (req, res) => {
      res.status(200).send(ninjaData);
   },
   
   editNinja: (req, res) => {
      const {id} = req.params
      const {name, mutation, weapon, rating} = req.body
      const index = ninjaData.findIndex(e => e.id === +id)
      
      ninjaData[index] = {
         id: +id,
         name,
         mutation,
         weapon,
         rating
      }
      
      res.status(200).send(ninjaData);
   },
   
   createNinja: (req, res) => {
      const {name, mutation, weapon, rating} = req.body
      const ninjaObj = {
         id: id,
         name,
         mutation,
         weapon,
         rating
      }
      id++
      ninjaData.unshift(ninjaObj)
      res.status(200).send(ninjaData)
      
   },

   deleteNinja: (req, res) => {
      const {id} = req.params
      let index = ninjaData.findIndex(e => e.id === +id)
      ninjaData.splice(index, 1)
      res.status(200).send(ninjaData);
   }
}