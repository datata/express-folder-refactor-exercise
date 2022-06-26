## Refactor express-mongoose app
You must refactor index.js with this folders arquitecture.

```
/src
├── config
|   └── database.js
├── controllers
|   ├── ProductController.js
|   └── UserController.js
├── middleware
|   └── ejemploMiddleware.js
├── models
|   ├── Product.js
|   └── User.js   
├── routes
|   ├── product.routes.js
|   └── user.routes.js
└── index.js
```