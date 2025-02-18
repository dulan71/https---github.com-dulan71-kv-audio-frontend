import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemPage() {

    const location = useLocation() //set items in to update text

    console.log(location)

  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.category);
  const [productDimensions, setProductDimensions] = useState(location.state.dimensions);
  const [productDescription, setProductDescription] = useState(location.state.description);
  const navigate = useNavigate()
 
 
  async function handleAddItem(){
    console.log(productKey,productName,productPrice,productCategory, productDescription, productDimensions)
    
    const token = localStorage.getItem("token")

    if(token){

        try{

       const result = await axios.put("http://localhost:3000/api/products/"+productKey,{

            key : productKey,
            name : productName,
            price : productPrice,
            category : productCategory,
            dimensions : productDimensions,
            description : productDescription
        },{

            headers : {
                Authorization : "Bearer " + token,
                //mehana Bearer + space aniwaren add wenn oni
            },
        });
console.log(result);
        toast.success(result.message);

        navigate("/admin/items")

    }catch(err){
        
        toast.error(err.message);
    }
        
    }else{
        toast.error("You are not authorized to add items")

    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Update Item</h1>
      <div className="w-[400px] border p-4 flex flex-col items-center gap-2">
       
        <input
          disabled   // no change primary key
          type="text"
          placeholder="Product Key"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="" disabled>Select Category</option>
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        <input
          type="text"
          placeholder="Product Dimensions"
          value={productDimensions}
          onChange={(e) => setProductDimensions(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <textarea
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <button onClick={handleAddItem} className="rounded-lg bg-blue-500 text-white p-2 w-full hover:bg-blue-600">
          Update Item
        </button>
        <button onClick={()=>{navigate("/admin/items/")}} className="rounded-lg bg-red-500 text-white p-2 w-full hover:bg-red-600">
            Cancel
        </button>
      </div>
    </div>
  );
}
