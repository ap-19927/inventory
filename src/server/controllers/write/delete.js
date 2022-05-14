const util = require('../../service/util');
const service = require('../../service/service');
const title = 'delete';

/****
delete
*/
exports.delete = (req, res) => {
  res.render('delete', { title: title, data: service.getData(req.params.id) })
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
    'deleted': true,
    'createdAt' : req.body.createdAt,
    'updatedAt' : req.body.updatedAt,
    'deletionComments' : req.body.deletionComments
  }
};
exports.delete_post = [
  util.deleteValidator,
  (req,res) => { util.processRequest(req,res,'delete',title,service.deleteData,item(req),'') }
];

/****
unDelete
*/
const undeleteTitle = 'unDelete';
exports.unDelete = (req, res) => {
  res.render('undelete', { title: undeleteTitle, data: service.getData(req.params.id) })
};
