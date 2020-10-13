# Fetch Server data using React hooks

1. set a proxy in frontend/package.json
2. in HomeScreen.js define a hook, with a default value of an empty array const [products, setProduct] = useState([]);
3. fetch data from server
   useEffect(()=>{
   effect
   return () => {
   //;
   }
   },[])
   empty array (as input, the second parameter) means it will run only after component did mount

useEffect(() => {
const fetchData = async () => {
const { data } = await axios.get("/api/products");
setProduct(data);
};

4. use axios library, a library to fetch data from web API, npm install axios

# Manage State with Redux

1. npm install redux react-redux
2. to use Redux, create a store. the Store has a reducer and a state
3. createStore accepts 3 parameters: reducer , initialState
4. the reducer is a function that gets a state and an action, and returns a new state based on the action
5. create reducers folder
6. wrap app with Provider and pass store to app
7. Thunk is a middleware for Redux, it allows us to run async operation inside action in redux
8. npm install redux-thunk
9. composeEnhancer
10. useSelector instead of useState
11. useDispatch()

# connect Product with Redux

1. useSelector to access the product Details (productDetails) state from Redux
2. useDispatch - to dispatch an action
3. useEffect - dispatch an action (detailsProduct), for input an [] (empty array ), means that the code - dispatch(detailsProduct()) - will run after component did mount (after rendering onto the screen)
4. define detailsProduct() in actions/productActions
5. accepts a parameter - productId, it returns a function that accepts dispatch
   dispatch is used inside the try-catch. After getting the data, dispatch PRODUCT_DETAILS_SUCCESS
6. in ProductScreen - deconstruct product, loading, error from productDetails
7. create api in server.js
8. productDetailsReducer
9. implement addToCart
10. manage qty of product, in ProductScreen define a hook to get qty entered by user, setQty , useState(1) - default value is 1.
11. replace static option for qty
12. n = [...Array(5).keys()] will give an array such as  [0, 1, 2, 3, 4] \* explaining ProductScreen.js line 57, creating an array for countInStock and generating the <option></option>
13. handleAddToCart - this function will redirect user. this is a method to redirect to another place.
    props.history.push("/cart" + props.match.params.id)

# connect to mongoDB

1. create .env file, it is a configuration file
   contain the address of mongoDB connection string
2. in terminal, install dotenv, to allow accessing the variable from .env in the node application
3. in backend, create new file config.js, in it export default an object
4. in server.js import config and dotenv
5. connect mongoose. now we are connected to mongoDB
6. create models
7. create routes folder, we'll use the routes feature of express

# Create Sign-in Backend

1. create / sign-in api
2. check email and password
3. generate token
4. install json web token
5. install dotenv
6. return token and data
7. test it using postman

# signIn and register screens

1. create route for signIn in userRoute.js
2. post request, with handler and responder
3. User.findOne filter checking for corresponding email and password
4. if user exists, send back a token (an identifier) for authentication puposes.
5. npm install jasonwebtoken
6. create a util.js file in the backend folder. jwt.sign(), first parameter is the payload which is the user, and the second parameter is a secret key to encrypt the payload
7. has to be in the .env file
8. add JWT_SECRET to config.js
9. SigninScreen.js.
10. in App.js define route to signinScreen
11. const userSignin = useSelector((state)=>state.userSignin); accessing userSignin from the redux store. and from the userSignin will access the user information { loading, userInfo, error}
12. in useEffect(...) if userInfo exists, will direct user to the homepage - {props.history.push("/")}. in the [], place userInfo, [userInfo], if userInfo state changes, then these lines of code - if (userInfo){
    props.history.push("/");
    }
    will run.
13. npm install body-parser. body-parser is a middleware for express that provides the data that the user enters in the post request into the node application.
    at the server, import bodyParser
14. right after const app = express(); enter
    app.use(bodyParser.json()). by having this I am able to read data
15. in store.js, define const userInfo, based on the data we get from the user
16. in App.js, define const userSignin and based on it, userInfo
17. provide backend for register. in userRoute.js

# manage products screen

1. in util.js, write method to authenticate user and admin, const isAuth = (req, res, next) => {

} next is a middleware for express. then, get token from req.headers.authorization.
if token exists, keep only token, (get rid of the barrier part).

2. isAdmin - if req.user exists and req.user.isAdmin, then return next(), which means accept this request
3. creat model for products (in backend)
4. create router for getting all products, "/" - root, (req, res) - handler, will send the list of products to the user.
5. create router for posting a product
6. in fronend, ProductsScreen to create a new product
7. create saveProduct action creator:
   it accepts product as an argument and returns an async function that uses dispatch as an argument.
   in the try part of a try-catch, try {
   dispatch({type: PRODUCT_SAVE_REQUEST, payload: product})
   const {data} = await Axios.post('/api/products', product, {
   headers: {
   'Authorization': 'Bearer ' + userInfo.token
   }
   } )  
    first argument, the method is '/api/products'
   second argument, the body is the product itself,
   third argument, includes the headers. the token comes from getState
   }
8. create constants
9. add to product reducers, include in store.js
10. import PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_SAVE_FAIL,
    in productReducers and in productActions
11. create a route for products in App.js
12. Axios.put - for product update. create route for put in productRoute.js (backend), status code 200, for update
13. in Products Screen, in useEffect place [successSave] in the array of variables that changing them rerun the useEffect.
    if (successSave) {
    setModalVisible(false);
    }
    dispatch(listProducts());
    the dispatch will refresh the data

# order details screen

1. when a user clicks on 'place order', he will be directed to the order details screen.
2. in backend, create file orderModel.js
3. in orderRoute.js, const router = express.Router(); get access to router from express.Router()
   send status code 201, when successful, beacuse an item was created. this is creating an endpoint for creating an order on the server
4. in useEffect we want to call detailsOrder(), the id of the order is props.match.params.id. by making an empty array [], for input it means that the useEffect will run only at the beginning of this component.

# connect to paypal

1. go to paypal.com/bizsignup, create a paypal business account
2. in server.js create a route for "/api/config/paypal" , we want to return the client id to the front end.
3. create component PaypalButton.js
4. inside PaypalButton function we will load paypal script,
   if(!window.paypal) - it means that it was not loaded
   inside addPaypalSdk, we'll get access to paypal client id
   create a script element - const script = document.createElement('script');

from Readme.md

# ECommerce Website

1. Introduction to this course
   1. what you will build
   2. what you will learn
   3. who are audiences
2. Install Tools
   1. Code Editor
   2. Web Browser
   3. VS Code Extension
3. Website Template
   1. Create amazona folder
   2. create template folder
   3. create index.html
   4. add default HTML code
   5. link to style.css
   6. create header, main and footer
   7. style elements
4. Display Products
   1. create products div
   2. add product attributes
   3. add link, image, name and price
5. Create React App
   1. npx create-react-app frontend
   2. npm start
   3. Remove unused files
   4. copy index.html content to App.js
   5. copy style.css content to index.css
   6. replace class with className
6. Share Code On Github
   1. Initialize git repository
   2. Commit changes
   3. Create github account
   4. Create repo on github
   5. connect local repo to github repo
   6. push changes to github
7. Create Rating and Product Component
   1. create components/Rating.js
   2. create div.rating
   3. style div.rating, span and last span
   4. Create Product component
   5. Use Rating component
8. Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Route for Home Screen
   3. Create HomeScreen.js
   4. Add product list code there
   5. Create ProductScreen.js
   6. Add new Route from product details to App.js
   7. Create 3 columns for product image, info and action
9. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
10. Load Products From Backend
    1. edit HomeScreen.js
    2. define products, loading and error.
    3. create useEffect
    4. define async fetchData and call it
    5. install axios
    6. get data from /api/products
    7. show them in the list
    8. create Loading Component
    9. create Message Box Component
    10. use them in HomeScreen
11. Install ESlint For Code Linting
    1. install VSCode eslint extension
    2. npm install -D eslint
    3. run ./node_modules/.bin/eslint --init
    4. Create ./frontend/.env
    5. Add SKIP_PREFLIGHT_CHECK=true
12. Add Redux to Home Screen
    1. npm install redux react-redux
    2. Create store.js
    3. initState= {products:[]}
    4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
    5. export default createStore(reducer, initState)
    6. Edit HomeScreen.js
    7. shopName = useSelector(state=>state.products)
    8. const dispatch = useDispatch()
    9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
    10. Add store to index.js
13. Add Redux to Product Screen
    1. create product details constants, actions and reducers
    2. add reducer to store.js
    3. use action in ProductScreen.js
    4. add /api/product/:id to backend api
14. Handle Add To Cart Button
    1. Handle Add To Cart in ProductScreen.js
    2. create CartScreen.js
15. Implement Add to Cart Action
    1. create addToCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
    4. render cartItems.length
16. Build Cart Screen
    1. create 2 columns for cart items and cart action
    2. cartItems.length === 0 ? cart is empty
    3. show item image, name, qty and price
    4. Proceed to Checkout button
    5. Implement remove from cart action
17. Implement Remove From Cart Action
    1. create removeFromCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
18. Create Sample Users In MongoDB
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create userRoute
    9. Seed sample data
19. Create Sample Products In MongoDB
    1. create models/productModel.js
    2. create productSchema and productModel
    3. create productRoute
    4. Seed sample data
20. Create Sign-in Backend
    1. create /signin api
    2. check email and password
    3. generate token
    4. install json web token
    5. install dotenv
    6. return token and data
    7. test it using postman

{
name: "Stay With Me",
category: "Novel",
image:
"https://images-na.ssl-images-amazon.com/images/I/41DC7iV9OCL._SY498_BO1,204,203,200_.jpg",
price: 24.95,
publisher: "Hamodia",
condition: "new",
countInStock: 15,
},
