import productData from "./product.json"

export default function LatProductList() {
    return (
        <div className="p-8">
            {productData.map((item)=> (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">Description: {item.description}</p>
                    <p className="text-gray-600">Category: {item.category}</p>
                    <h2 className="text-gray-600"><strong>Price: {item.price}</strong></h2>
                    <p className="text-gray-600">Discount: {item.discountPercentage}</p>
                    <p className="text-gray-600">Rating: {item.rating}/5</p>
                    <p className="text-gray-600">Stock: {item.stock}</p>
                    <p className="text-gray-600">Brand: {item.brand}</p>
                    <p className="text-gray-600">Specification - Width: {item.dimensions.width}, Heigt: {item.dimensions.height}, Depth: {item.dimensions.depth}</p>

                    {item.tags.map((tag,index)=>(
                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                            {tag}
                        </span>
                    ))}
                </div>)
            )}
        </div>
    )
}
