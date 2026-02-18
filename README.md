# ShoppyGlobe Backend

Node.js + Express + MongoDB backend for ShoppyGlobe.

## Setup
```bash
npm install

create .env

PORT=5000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret

Run
npm run dev



Routes

Auth:

POST /register

POST /login

Products:

POST /products

GET /products

GET /products/:id

Cart (JWT required):

POST /cart/addtocart

PUT /cart/updatecart/:productId

DELETE /cart/removecart/:productId

clone from git hub
git clone https://github.com/Er-Saurabh-Gondane/shopeeglobebackend.git