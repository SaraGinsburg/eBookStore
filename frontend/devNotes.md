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
