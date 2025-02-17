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
        },
        {
            key: "P003",
            name: "Gaming Mouse",
            price: 60,
            category: "Accessories",
            dimensions: "Medium",
            description: "High-DPI gaming mouse with programmable buttons.",
            profilePicture: "https://example.com/images/gaming-mouse.jpg",
            availablity: true
        },
        {
            key: "P004",
            name: "4K Monitor",
            price: 350,
            category: "Monitors",
            dimensions: "27-inch",
            description: "UHD 4K monitor with HDR support and 144Hz refresh rate.",
            profilePicture: "https://example.com/images/4k-monitor.jpg",
            availablity: false
        },
        {
            key: "P005",
            name: "Graphics Card RTX 4080",
            price: 1200,
            category: "Components",
            dimensions: "Standard",
            description: "Latest Nvidia RTX 4080 with 16GB VRAM for ultra gaming.",
            profilePicture: "https://example.com/images/rtx-4080.jpg",
            availablity: true
        },
        {
            key: "P006",
            name: "NVMe SSD 1TB",
            price: 100,
            category: "Storage",
            dimensions: "M.2",
            description: "High-speed NVMe SSD with 7000MB/s read speed.",
            profilePicture: "https://example.com/images/nvme-ssd.jpg",
            availablity: true
        }
    ];


import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItemPage(){

    const [items,setItems]= useState(sampleArr)

    //items array

    return(
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th> Key </th>
                    <th> Name </th>
                    <th> Price </th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    <th>Availability</th>
                </thead>
                <tbody>
                    {
                        items.map((product)=>{
                            console.log(product)
                            return(// insert data into table
                                <tr key = {product.key}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.availablity}</td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
           <Link to = "/admin/items/add">
            <CiCirclePlus className="text-[70px] absolute right-2 bottom-2
            hover:text-red-900 "/>
            </Link>
        </div>
    )
}