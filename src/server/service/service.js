const db = require('../database/db');
const { v4: uuid } = require("uuid");

const getData = (id) => {
  return db.getData(id);
};

const changeData = (product,dbChangeData) => {
  try {
    dbChangeData(product);
  } catch (error) {
    throw error;
  }
};

/****
read
*/
const inventory = () => {
  return db.inventory();
};

/****
create
*/
const createData = (item) => {
  const product = {
    id: uuid(),
    ...item,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    deletionComments: '',
    deletedAt: ''
  };
  changeData(product, db.createData);
};

/****
update
*/
const updateData = (item) => {
  const product = {
    ...item,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    deletionComments: '',
    deletedAt: ''
  };
  changeData(product, db.updateData);
};

/****
delete
*/
const deleteData = (item) => {
  const product = {
    ...item,
    deletedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
  };
  changeData(product, db.updateData);
};
module.exports = {inventory, getData, createData, updateData, deleteData};
