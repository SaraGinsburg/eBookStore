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
