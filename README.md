# MongoDB Query Bug: Array Element Comparison

This repository demonstrates a common error in MongoDB queries involving array comparisons. The bug lies in how the query attempts to directly compare an array field to a value, which leads to incorrect results.

## Bug Description:
The provided JavaScript code inserts a document into the 'users' collection. It then tries to query for documents where a score in the 'scores' array is greater than 80.  The direct comparison of the array to a value will fail.

## Solution:
The solution uses the `$elemMatch` operator to correctly specify the condition within the array. This ensures that the query searches for documents where at least one element in the 'scores' array satisfies the specified condition.