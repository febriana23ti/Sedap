import orderData from "../assets/orders.json"
import PageHeader from "../components/PageHeader";

export default function Orders() {
    const statusColors = {
        Completed: "text-green-600",
        Pending: "text-yellow-600",
        Cancelled: "text-red-600",
      };
    return (
        <div>
            <PageHeader title="Orders" breadcrumb={["Orders", "Order List"]}>
                <button onClick={() => window.location.href = "/formOrders"} className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-4 text-l">
                    Add
                </button>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-lg mr-4 text-l">
                    Export
                </button>
                <button onClick={() => window.location.href = "/"} className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-1 text-l">
                    Back
                </button>
            </PageHeader>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {orderData.map((item)=> (
                    <div key={item.orderId} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                        <h2 className="text-lg font-bold text-gray-800">{item.customerName}</h2>
                        <p className={`${statusColors[item.status]} font-semibold`}>{item.status}</p>
                        <p className="text-gray-600 font-bold">${item.totalPrice}</p>
                        <p className="text-gray-600">Order Date: {item.orderDate}</p>
                    </div>)
                )}
            </div>
        </div>
    )
}