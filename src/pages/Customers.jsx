import customerData from "../assets/customers.json";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const loyaltyColors = {
        Gold: "text-yellow-500",
        Silver: "text-gray-400",
        Bronze: "text-amber-700",
      };
    return (
        <>
            <PageHeader title="Customers" breadcrumb={["Customers", "Customer Data"]}>
                <button onClick={() => window.location.href = "/formCust"} className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-4 text-l">
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
                {customerData.map((item)=> (
                    <div key={item.customerId} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                        <h2 className="text-lg font-bold text-gray-800">{item.customerName}</h2>
                        <p className="text-gray-600 font-bold">{item.email}</p>
                        <p className="text-gray-600">📞: {item.phone}</p>
                        <p className={`${loyaltyColors[item.loyalty]} font-bold`}>{item.loyalty}</p>
                    </div>)
                )}
            </div>
        </>
    )
}