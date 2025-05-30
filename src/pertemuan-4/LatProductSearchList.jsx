import productData from "./product.json"
import { useState } from "react";

export default function LatProductSearchList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    const _searchTerm = searchTerm.toLowerCase();
    const filteredProduct = productData.filter((product) => {
        const matchesSearch =
          product.title
                    .toLowerCase()
                    .includes(_searchTerm) ||
          product.description
                    .toLowerCase()
                    .includes(_searchTerm);
    
        const matchesTag = selectedTag ? product.tags.includes(selectedTag) : true;
    
        return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(productData.flatMap((product) => product.tags)),
    ];

    return (
        <div className="p-8">
            <h1 class="text-5xl font-bold text-center">Feb Products</h1>
            <br />
            <input
                type="text"
                name="searchTerm"
                placeholder="Search product..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select name="selectedTag" className="w-full p-2 border-gray-300 rounded mb-4"
                onChange={(e) => setSelectedTag(e.target.value)}>
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                    {tag}
                    </option>
                ))}
            </select>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {filteredProduct.map((item)=> (
                    <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-blue-50">
                    <div class="flex justify-between">
                        <h2 className="text-3xl font-bold text-gray-800">{item.title} - {item.brand}</h2>
                        <p className="text-xl text-yellow-600">✨{item.rating}/5</p>
                    </div>
                    <p className="text-lg text-black">{item.description}</p>

                    <p className="text-gray-600 mb-2">Specification - Width: {item.dimensions.width}, Heigt: {item.dimensions.height}, Depth: {item.dimensions.depth}</p>
                    <div class="flex space-x-2">
                        <p className="text-3xl text-red-600"><strong>Price: ${item.price}</strong></p>
                        <p className="text-lg text-green-600">Discount: {item.discountPercentage}%</p>
                    </div>
                    <p className="text-xl text-gray-600">Stock: {item.stock}</p>

                    {item.tags.map((tag,index)=>(
                        <span key={index} className="bg-indigo-400 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                            {tag}
                        </span>
                    ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
