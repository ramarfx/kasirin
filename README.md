
# Kasirin

Kasirin is a simple api for cashier system written in typescript and using express and prisma as the backend, also using supabase as the database



## Features

- product
- store
- cart 

## API Reference

### base url
```
https://kasirin.vercel.app
```

### register your store

```http
  POST /store
```
##### body:
```json
{
    "name": "toko-budi"
}
```

### Get all Product

```http
  GET /products/${store}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `store`      | `string` | **Required**. your store name |


### Get one product
```http
  GET /products/${store}/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `store`      | `string` | **Required**. your store name |
| `id`      | `integer` | **Required**. product's id |


### Delete product

```http
  DELETE /products/${store}/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `store`      | `string` | **Required**. your store name |
| `id`      | `integer` | **Required**. product's id |


### Create product

```http
  POST /products/${store}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `store`      | `string` | **Required**. your store name |

#### body: 
```json
{
  "name": "kecap manis",
  "price": 8000,
  "image": (your product image)
}
```




## Cart

### Add product to cart

```http
  POST /products/${store}/${id}/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `store`      | `string` | **Required**. your store name |
| `id`      | `integer` | **Required**. the product's id |


### get product from cart

```http
  GET /cart/${store}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `store`      | `string` | **Required**. your store name |



### remove product from cart

```http
  DELETE /cart/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. the product's id |


### remove all product from cart

```http
  DELETE /cart/${store}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `store`      | `string` | **Required**. your store name |