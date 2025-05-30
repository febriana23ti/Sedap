import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const FormOrders = () => {
    const [customerName, setCustomerName] = useState("");
    const [status, setStatus] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [orderDate, setOrderDate] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ customerName, status, totalPrice, orderDate });
    };

    return (
        <div>
            <PageHeader title="Orders" breadcrumb={["Orders", "Add Order"]}>
            <button onClick={() => window.location.href = "/orders"} className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-1 text-l">
                    Back
                </button>
            </PageHeader>

            <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
                    Order Form
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter customer name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Total Price
                        </label>
                        <input
                            type="number"
                            value={totalPrice}
                            onChange={(e) => setTotalPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter total price"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Order Date
                        </label>
                        <input
                            type="date"
                            value={orderDate}
                            onChange={(e) => setOrderDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormOrders;
