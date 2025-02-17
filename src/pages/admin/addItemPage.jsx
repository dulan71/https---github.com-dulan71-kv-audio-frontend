import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItems() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("0");
  const [productCategory, setProductCategory] = useState("");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const navigate = useNavigate()

  async function handleAddItem(){
    console.log(productKey,productName,productPrice,productCategory, productDescription, productDimensions)
    
    const token = localStorage.getItem("token")

    if(token){

        try{

       const result =  axios.post("http://localhost:3000/api/products",{

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
      <h1 className="text-xl font-bold mb-4">Add Items</h1>
      <div className="w-[400px] border p-4 flex flex-col items-center gap-2">
        <input
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

        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />

        <button onClick={handleAddItem} className="rounded-lg bg-blue-500 text-white p-2 w-full hover:bg-blue-600">
          Add
        </button>
        <button onClick={()=>{navigate("/admin/items/")}} className="rounded-lg bg-red-500 text-white p-2 w-full hover:bg-blue-600">
            Cancel
        </button>
      </div>
    </div>
  );
}
