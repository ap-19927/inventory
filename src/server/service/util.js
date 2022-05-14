const { body,validationResult } = require('express-validator');

module.exports = {
  validator: [// Validate and sanitize fields.
  body('name').trim().isLength({ min: 1 }).escape().withMessage('Name must be specified.')
      .isAscii().withMessage('Name must be Ascii encoded.').toLowerCase(),
  body('description').trim().isLength({ min: 1 }).escape().withMessage('Description must be specified.')
      .isAscii().withMessage('Description must be Ascii encoded.'),
  body('price').trim().isLength({ min: 1 }).escape().withMessage('Price must be specified.')
      .isNumeric().withMessage('Price must be a number.'),
  body('quantity').trim().isLength({ min: 1 }).escape().withMessage('Quantity must be specified.')
    .isNumeric().withMessage('Quantity must be a number.'),
  body('reorderLevel').trim().isLength({ min: 1 }).escape().withMessage('Reorder Level must be specified.')
    .isNumeric().withMessage('Reorder Level must be a number.'),
  body('reorderQuantity').trim().isLength({ min: 1 }).escape().withMessage('Reorder Quantity must be specified.')
    .isNumeric().withMessage('Reorder Quantity must be a number.')
  ],
  deleteValidator: body('deletionComments').optional({nullable: true, checkFalsy: true}).trim().escape().isAscii().withMessage('Comments must be Ascii encoded.'),
  // Process request after validation and sanitization.
   processRequest: (req,res,renderChange,title,changeData,item,redirectURI) => {
       // Extract the validation errors from a request.
    let errors =  validationResult(req);
    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render(renderChange, { title: title, data: req.body, errors: errors.array() });
      return;
    }
    else {
      // Data from form is valid.
      changeData(item);
      res.redirect('/'+redirectURI);
    }
  }
}
