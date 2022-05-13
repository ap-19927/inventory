const inv = require("./inv.json");
const fs = require("fs");


const getData = (id) => {
  const index = inventory().findIndex((ele) => {if(ele.id===id) return true});
  return inventory()[index];
};

const saveToDatabase = (inv) => {
  fs.writeFileSync("./src/server/database/inv.json", JSON.stringify(inv, null, 2), {
    encoding: "utf-8",
  });
};

/****
read
*/
const inventory = () => {
  return inv.inventory;
}

/****
create
*/
const createData = (newItem) => {
  const isAlreadyAdded =
    inventory().findIndex((ele) => {if(ele.name===newItem.name) return true}) > -1;
  if (isAlreadyAdded) {
    throw new Error(`Item with the name ${newItem.name} already exists`)
  }
  try {
    inventory().push(newItem);
    saveToDatabase(inv);
  } catch (e) {
    throw { status: 500, message: e?.message || e };
  }
};

/****
update
*/
const updateData = (updatedItem) => {
  const index = inventory().findIndex((item) => item.name === updatedItem.name);
  try {
    inventory()[index] = {...updatedItem};
    saveToDatabase(inv);
  } catch (e) {
    throw { status: 500, message: e?.message || e };
  }
};

module.exports = {inventory, getData, createData, updateData};
