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
