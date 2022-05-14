const util = require('../../service/util');
const service = require('../../service/service');
const title = 'update';

/****
update
*/
exports.update = (req, res) => {
  res.render('update', { title: title, data: service.getData(req.params.id) })
};

// Create object with escaped and trimmed data.
const item = (req) => {
  return {
    'id': req.params.id,
    'name': req.body.name,
    'description': req.body.description,
    'price': req.body.price,
    'quantity': req.body.quantity,
    'inventoryValue': req.body.price*req.body.quantity,
    'reorderLevel': req.body.reorderLevel,
    'reorderQuantity': req.body.reorderQuantity,
    'deleted': false,
    'createdAt' : req.body.createdAt
  }
};
exports.update_post = [
  ...util.validator,
  //  util.updateValidator,
  (req,res) => {
    util.processRequest(req,res,'update',title,service.updateData,item(req),req.params.id) }
];
