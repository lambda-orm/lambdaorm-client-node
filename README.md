# λORM Client Node

Lambdaorm client node is an http client to consume [lambdaorm service](https://github.com/FlavioLionelRita/lambdaorm-svc)

## Usage

### Consume general endpoints

```typescript
import { orm } from 'lambdaorm-client-node'
import { Orders } from './model'

async function execute() {
  try {
    orm.init('http://localhost:9291')
    console.log(await orm.general.ping())
    console.log(await orm.general.health())
  } catch (error: any) {
    console.error(error)
  }
}
execute()
```

Results:

```javascript
{message: 'pong', time: '2023-11-19T04:25:36.840Z'}
{uptime: 6124.260961852, message: 'OK', time: '2023-11-19T04:25:36.846Z'}
```

### Use lambda expression

```typescript
import { orm } from 'lambdaorm-client-node'
import { Orders } from './model'

async function execute() {
  try {
    orm.init('http://localhost:9291')
    const query = (id: number) =>
      Orders.filter(p => p.id == id).include(p => [
        p.customer.map(c => c.name),
        p.details.include(d =>
          d.product.include(pr =>
            pr.category.map(cat => cat.name)
          ).map(pr => pr.name)
        ).map(d => [d.quantity, d.unitPrice]),
      ])
    const data = { id: 10248 }
    const plan = await orm.plan(query, { stage: 'default' })
    console.log(JSON.stringify(plan, null, 2))
    const result = await orm.execute(query, data, { stage: 'default' })
    console.log(JSON.stringify(result, null, 2))
  } catch (error: any) {
    console.error(error)
  }
}
execute()
```

### Use string expression

```typescript
import { orm } from 'lambdaorm-client-node'
async function execute() {
  try {
    orm.init('http://localhost:9291')
    const query = `Orders.filter(p => p.id == id)
                    .include(p => [p.customer.map(c => c.name),p.details
                      .include(d => d.product
                        .include(pr => pr.category.map(cat => cat.name))
                      .map(pr => pr.name))
                    .map(d => [d.quantity, d.unitPrice])])`
    const data = { id: 10248 }
    const plan = await orm.plan(query, { stage: 'default' })
    console.log(JSON.stringify(plan, null, 2))
    const result = await orm.execute(query, data, { stage: 'default' })
    console.log(JSON.stringify(result, null, 2))
  } catch (error: any) {
    console.error(error)
  }
}
execute()
```

Result of plan method:

```json
{
  "entity": "Orders",
  "dialect": "MySQL",
  "source": "default",
  "sentence": "SELECT o.OrderID AS id, o.CustomerID AS customerId, o.EmployeeID AS employeeId, o.OrderDate AS orderDate, o.RequiredDate AS requiredDate, o.ShippedDate AS shippedDate, o.ShipVia AS shipViaId, o.Freight AS freight, o.ShipName AS name, o.ShipAddress AS address, o.ShipCity AS city, o.ShipRegion AS region, o.ShipPostalCode AS postalCode, o.ShipCountry AS country, o.CustomerID AS `__customerId`, o.OrderID AS `__id` FROM Orders o  WHERE o.OrderID = ? ",
  "children": [
    {
      "entity": "Customers",
      "dialect": "MySQL",
      "source": "default",
      "sentence": "SELECT c.CompanyName AS name, c.CustomerID AS LambdaOrmParentId FROM Customers c  WHERE  c.CustomerID IN (?) ",
      "children": []
    },
    {
      "entity": "Orders.details",
      "dialect": "MySQL",
      "source": "default",
      "sentence": "SELECT o1.Quantity AS quantity, o1.UnitPrice AS unitPrice, o1.ProductID AS `__productId`, o1.OrderID AS LambdaOrmParentId FROM `Order Details` o1  WHERE  o1.OrderID IN (?) ",
      "children": [
        {
          "entity": "Products",
          "dialect": "MySQL",
          "source": "default",
          "sentence": "SELECT p.ProductName AS name, p.CategoryID AS `__categoryId`, p.ProductID AS LambdaOrmParentId FROM Products p  WHERE  p.ProductID IN (?) ",
          "children": [
            {
              "entity": "Categories",
              "dialect": "MySQL",
              "source": "default",
              "sentence": "SELECT c1.CategoryName AS name, c1.CategoryID AS LambdaOrmParentId FROM Categories c1  WHERE  c1.CategoryID IN (?) ",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
```

Result of execution method:

```json
[
  {
    "id": 10248,
    "customerId": "VINET",
    "employeeId": 5,
    "orderDate": "1996-07-04T00:00:00.000Z",
    "requiredDate": "1996-08-01T00:00:00.000Z",
    "shippedDate": "1996-07-16T00:00:00.000Z",
    "shipViaId": 3,
    "freight": 32.38,
    "name": "Vins et alcools Chevalier",
    "address": "59 rue de l-Abbaye",
    "city": "Reims",
    "region": null,
    "postalCode": "51100",
    "country": "France",
    "customer": {
      "name": "Vins et alcools Chevalier"
    },
    "details": [
      {
        "quantity": 12,
        "unitPrice": 14,
        "product": {
          "name": "Queso Cabrales",
          "category": {
            "name": "Dairy Products"
          }
        }
      },
      {
        "quantity": 10,
        "unitPrice": 9.8,
        "product": {
          "name": "Singaporean Hokkien Fried Mee",
          "category": {
            "name": "Grains/Cereals"
          }
        }
      },
      {
        "quantity": 5,
        "unitPrice": 34.8,
        "product": {
          "name": "Mozzarella di Giovanni",
          "category": {
            "name": "Dairy Products"
          }
        }
      }
    ]
  }
]
```

## Service

You can access various images at [flaviorita/lambdaorm-svc](https://hub.docker.com/repository/docker/flaviorita/lambdaorm-svc/general)

## Labs

You can access various labs at [github.com/FlavioLionelRita/lambdaorm-labs](https://github.com/FlavioLionelRita/lambdaorm-labs)

## Documentation

- [Source Code](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/main/doc/source/README.md)
- [Lambdaorm Wiki](https://github.com/FlavioLionelRita/lambdaorm/wiki/)
- [CLI](https://www.npmjs.com/package/lambdaorm-cli)
- [Labs](https://github.com/FlavioLionelRita/lambdaorm-labs)
