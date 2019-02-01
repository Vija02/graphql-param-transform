# Graphql Param Transform

[https://gql.michaelsalim.co.uk/](https://gql.michaelsalim.co.uk/)

A really quick app to transform graphql schema.

### Example
> You can copy this from GraphiQL
```
id: Int
transactionId: Int
storeId: Int!
transactionDate: Datetime!
totalQuantity: Int!
createdAt: Datetime
updatedAt: Datetime
```

Transform into

```
id: $id, transactionId: $transactionId, storeId: $storeId, transactionDate: $transactionDate, totalQuantity: $totalQuantity, createdAt: $createdAt, updatedAt: $updatedAt
```

and 

```
$id: Int, $transactionId: Int, $storeId: Int!, $transactionDate: Datetime!, $totalQuantity: Int!, $createdAt: Datetime, $updatedAt: Datetime
```

## Motivation
 
I keep having to do this so often, so -w-
