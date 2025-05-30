import topmenuData from "../assets/topmenu.json";

export default function TopMenu() {
  return (
    <section id="topproduct" className="px-6 py-10 bg-green-300 scroll-mt-20 rounded-xl">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 font-serif">
        Top Menu Sedap
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {topmenuData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-200 hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-2 font-serif">
                {item.name}
              </h2>
              <hr className="border-t border-green-300 my-2" />
              <p className="text-lg text-gray-700 font-medium">Rp. {item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
