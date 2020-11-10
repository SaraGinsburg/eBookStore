import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../node_modules/axios/index";

import { detailsProduct, updateProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

function ProductEditScreen(props) {
  const productId = props.match.params.id; //get product id from url
  const dispatch = useDispatch();

  //define hooks for product fields
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [uploading, setUploading] = useState(false);

  const productUpdate = useSelector((state) => state.productUpdate); //get information from Redux store
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      props.history.push("/productlist");
    }
    if (!product.name) {
      dispatch(detailsProduct(productId));
    } else {
      setId(product._id);
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setPublisher(product.publisher);
      setDescription(product.description);
      setCondition(product.condition);
    }
    return () => {
      //
    };
  }, [product, dispatch, productId, successUpdate, props.history]);

  const uploadFileHandler = (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    Axios.post("/api/uploads", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (forImages) {
          setImages([...images, response.data]);
        } else {
          setImage(response.data);
        }
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: id,
        name,
        price,
        image,
        images,
        category,
        countInStock,
        publisher,
        description,
        condition,
      })
    );
  };
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  // const [loadingUpload, setLoadingUpload] = useState(false); //define a state hook, default value is false
  // const [errorUpload, setErrorUpload] = useState("");
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const bodyFormData = new FormData(); //when sending a request to upload a file, we need to create an object (an instance) from the FormData class
  //   bodyFormData.append("image", file); //the key for the append is 'image' and the value is the content of the selected file
  //   setLoadingUpload(true);
  //   try {
  //     const { data } = await Axios.post("/api/uploads", bodyFormData, {
  //       //send ajax request. path of api is '/api/uploads'
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     });
  //     setImage(data);
  //     setLoadingUpload(false);
  //   } catch (error) {
  //     setErrorUpload(error.message);
  //     setLoadingUpload(false);
  //   }
  // };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {id}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {product.name && (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image Url</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image-file">Image File</label>
              <input
                type="file"
                id="image-file"
                label="Choose Image"
                onChange={uploadFileHandler}
              />
              {uploading && <LoadingBox />}
            </div>
            <div>
              <label htmlFor="image-file">Additional Images</label>
              <div>
                <ul>
                  {images.length === 0 && <li>No image</li>}
                  {images.map((x) => (
                    <li>{x}</li>
                  ))}
                </ul>
                <input
                  type="file"
                  id="additional-image-file"
                  label="Choose Image"
                  onChange={(e) => uploadFileHandler(e, true)}
                />
              </div>
              {uploading && <LoadingBox />}
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter Count In Stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="publisher">Publisher</label>
              <input
                id="publisher"
                type="text"
                placeholder="Enter Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="condition">Condition</label>
              <input
                id="condition"
                type="text"
                placeholder="Enter Condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                onClick={() => props.history.push("/productlist")}
                type="button"
              >
                Back
              </button>{" "}
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ProductEditScreen;
