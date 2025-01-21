```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.insertOne( { name: "John Doe", age: 30, scores: [85, 92, 78] } );

// This query is intended to find users with a score greater than 80
// However, it will return no results because it's trying to compare the array directly
db.users.find( { scores: { $gt: 80 } } ); 
```