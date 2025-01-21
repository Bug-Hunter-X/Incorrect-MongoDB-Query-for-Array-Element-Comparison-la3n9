```javascript
// Correct query using $elemMatch
db.users.find( { scores: { $elemMatch: { $gt: 80 } } } );
```