import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const sampleArr = [
    {
        key: "P001",
        name: "Gaming Laptop",
        price: 1500,
        category: "Laptops",
        dimensions: "15.6-inch",
        description: "High-performance gaming laptop with RTX 4060 GPU and 16GB RAM.",
        profilePicture: "https://example.com/images/gaming-laptop.jpg",
        availablity: true
    },
    {
        key: "P002",
        name: "Mechanical Keyboard",
        price: 120,
        category: "Accessories",
        dimensions: "Full-size",
        description: "RGB backlit mechanical keyboard with customizable switches.",
        profilePicture: "https://example.com/images/mechanical-keyboard.jpg",
        availablity: true
    }
];

export default function AdminItemPage() {
    const [items, setItems] = useState(sampleArr);

    const [itemsLoaded, setItemsLoaded] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/api/products", {
            
       //const result = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/`+productKey,{

            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data);
            setItems(res.data);
            setItemsLoaded(true)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [itemsLoaded]);

    const handleDelete = (key) => {
        if(window.confirm("Are you sure you want to delete this item?")){
        setItems(items.filter(item => item.key !== key));

        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`,{
            headers: {Authorization: `Bearer ${token}`},
        }).then(
            (res)=>{
                console.log(res.data);
                setItemsLoaded(itemsLoaded); //delete item & reload the page
            }
        ).catch(
            (err)=>{
                console.error(err);
            }
        )
        }
    };

    return (
        <div className="w-full h-full p-4 bg-gray-100 relative flex items-center flex-col">
          {!itemsLoaded && <div className="border-4 my-4 border-b-green-500 rounded-full animate-spin bg-0 w-[100px] h-[100px]"></div>}
           {itemsLoaded && <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-3">Key</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Dimensions</th>
                            <th className="p-3">Availability</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>     
                        
                        {items.map((product,index) => (     //set items table data

                            <tr key={product.key} className="border-b hover:bg-gray-100">
                                <td className="p-3 text-center">{product.key}</td>
                                <td className="p-3 text-center">{product.name}</td>
                                <td className="p-3 text-center">${product.price.toFixed(2)}</td>
                                <td className="p-3 text-center">{product.category}</td>
                                <td className="p-3 text-center">{product.dimensions}</td>
                                <td className="p-3 text-center">
                                    {product.availablity ? 
                                        <span className="text-green-600 font-semibold">Available</span> : 
                                        <span className="text-red-600 font-semibold">Not Available</span>}
                                </td>
                                <td className="p-3 text-center flex justify-center gap-4">
                                  
                                    <button onClick={()=>{
                                        navigate(`/admin/items/edit/`,{state:product})
                                    }}
                                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                                        <FaEdit className="inline mr-1" /> Edit
                                        </button>
                                    
                                    <button onClick={() => handleDelete(product.key)} 
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 transition">
                                        <FaTrash className="inline mr-1" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            <Link to="/admin/items/add" className="fixed bottom-5 right-5 text-red-900 hover:text-red-700">
                <CiCirclePlus className="text-[70px]" />
            </Link>
        </div>
    );
}
