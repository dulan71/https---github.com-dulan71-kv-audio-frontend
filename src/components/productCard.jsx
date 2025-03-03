export default function ProductCard({ item }) {
    return (
      <div className="w-[200px] rounded-2xl overflow-hidden shadow-lg bg-white p-4 border border-gray-200 m-4">
        {/* Product Image */}
        <img className= " w-full h-48 object-cover rounded-xl" src={item.profilePicture} alt={item.name} />
        
        {/* Product Details */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600 text-sm">{item.category}</p>
          <p className="mt-2 text-gray-700">{item.description}</p>
          <p className="mt-2 text-gray-500 text-sm">Dimensions: {item.dimensions}</p>
        </div>
        
        {/* Price & Availability */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">${item.price}</span>
          <span className={`text-sm px-3 py-1 rounded-full ${item.availablity ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {item.availablity ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        {/* View Details Button */}
        <div className="mt-4 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Details</button>
        </div>
      </div>
    );
}