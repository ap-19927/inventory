# Inventory Tracking app

A simple CRUD app for an inventory list. Uses express, body-parser, express-validator, uuid and pug. Part of an application for a Fall 2022 Shopify Developer Internship.

## replit
https://replit.com/@ap19927/inventory#.replit

## run from scratch
git clone https://github.com/ap-19927/inventory.git \
cd inventory\
npm i\
npm run dev

## Read
Upon opening http://localhost:3000, there is a table of inventory items (the index) with various data points. One of these data points, the id, is a uuid generated by the node module of the same name. The id provides a link to the `itemDetail` page for that item and displays its data points in a single row.

## Create
The navigation allows a user to create a new inventory item and to return back to the index. On the `create` page navigated to by the Create Inventory link, the user can fill in most of the data points. Upon submission, the user is taken to the index.

## Update
On the `itemDetail` page, if the item is not deleted, there is a link below the table to update the item. The `update` page is similar to the `create page`. Upon submission, the user is taken to the updated `itemDetail` page.

## Delete
On the `itemDetail` page, if the item is not deleted, there is a link below the table to delete the item. The `delete` page allows the user to add deletion comments. Upon submission, the user is taken the the index.

## Deleted
Below the table on the index, there is a link to the deleted items. This page is similar in structure to the index, but includes more data points such as `deletionComments` and `deletedAt`. Again, the uuid is a link to the `itemDetail` page.

## UnDeletion
On the `itemDetail` page, if the item is deleted, there is a link below the table to `unDelete` the item. The `delete` page allows the user to add deletion comments. Upon submission, the user is taken the the index. Upon submission, the user is taken to the updated `itemDetail` page.

## Issues
1. The views (the files with `.pug` ext) are with the controllers. Normally I would put them in their own folder, maybe on the client side, but I decided to keep them with the controllers for ease of access.
2. I tried to keep an api-like logic structure. But I am not sure I achieved that. c.f. 1. in the References.
3. The "deleted" products aren't removed from the `.json` database. They are only flagged as deleted so as to allow for undeletion. Maybe I could include a feature which removes the object from the database after a certain amount of time (by checking the `deletedAt` data point whenever, say, the `deleted` objects are accessed).
4. The database is a simple `.json` file. I believe this can be somewhat easily changed to access an actual database by only changing the `database` logic along with some configurations in the main `app.js`.
5. I'd like to get better at catching and dealing with errors.
6. Not a test-driven approach.
## References
1. https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
2. https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/
