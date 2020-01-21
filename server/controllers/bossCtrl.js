const bossData = require('../boss-data')

module.exports = {
   getBoss: (req, res) => {
      res.status(200).send(bossData); 
   }   
}