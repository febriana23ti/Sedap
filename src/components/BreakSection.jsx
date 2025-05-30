export default function BreakSection() {
  return (
    <section className="w-full py-5 bg-green-300 rounded-2xl">
      <div className="w-full px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-lg text-emerald-900 shadow-md border border-white/50 text-center">
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="mt-2 text-base">Menu Variatif</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-emerald-900 shadow-md border border-white/50 text-center">
            <h2 className="text-4xl font-bold">15.000+</h2>
            <p className="mt-2 text-base">Pelanggan Terlayani</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-emerald-900 shadow-md border border-white/50 text-center">
            <h2 className="text-4xl font-bold">#1</h2>
            <p className="mt-2 text-base"> Pilihan No.1 untuk Makan Keluarga</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-emerald-900 shadow-md border border-white/50 text-center">
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="mt-2 text-base">Tahun Menyajikan Cita Rasa Asli</p>
          </div>
        </div>
      </div>
    </section>
  );
}
