# Node.js Lesson 20: Sharing Data Between Routes

## What I Learned

Export multiple values to share data across modules:

```javascript
// admin.js
exports.routes = router;
exports.products = products;
```

```javascript
// shop.js
const adminData = require('./admin');
console.log(adminData.products);  // Access shared array
```

## Challenges

- Understanding that `products` array is shared by **reference** (same array in memory)
- Difference between `exports.x` and `module.exports`

## Q&A

**Q: Why not use a global variable instead?**

A: Global variables pollute the namespace and make dependencies unclear. Module exports make it explicit which data is shared and where it comes from.

**Q: Can I use `module.exports` instead?**

A: Yes. `module.exports = { routes: router, products }` works the same way.

**Q: What happens when the server restarts?**

A: All data is lost. For persistence, use a database (MongoDB, MySQL, etc.) or file storage.

**Q: Are there other patterns to share data?**

A: Yes:
- **Database** - Best for production
- **Singleton pattern** - Create a dedicated data store module
- **Dependency injection** - Pass data as function arguments
- **Event emitter** - Publish/subscribe pattern
