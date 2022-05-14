const util = require('../../service/util');
const service = require('../../service/service');
const title = 'Create Inventory';

/****
create
*/
exports.create = (req, res) => {
  res.render('create', { title: title })
};

// Create object with escaped and trimmed data.
const item = (req) => {
  return {
    'name': req.body.name,
    'description': req.body.description,
    'price': req.body.price,
    'quantity': req.body.quantity,
    'inventoryValue': req.body.price*req.body.quantity,
    'reorderLevel': req.body.reorderLevel,
    'reorderQuantity': req.body.reorderQuantity,
    'deleted': false
  }
};
exports.create_post = [
  ...util.validator,
  (req,res) => { util.processRequest(req,res,'create',title,service.createData,item(req),'') }
];
