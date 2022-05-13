const service = require('../../service/service');
exports.read = (req, res) => {
  res.render('inventoryList',{ title: 'Inventory List', data: service.inventory() });
};
exports.deleted = (req,res) => {
  res.render('deletedList', {title: "Deleted Inventory", data: service.inventory()})
}
exports.readItem = (req, res) => {
  res.render('itemDetail',{ title: 'Product Detail', data: service.getData(req.params.id) });
};
