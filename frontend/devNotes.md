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
