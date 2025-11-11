export default function CTA(){
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Grow more with less.</h3>
            <p className="text-slate-700 mt-2">Join the early access list to get updates and pilot opportunities.</p>
          </div>
          <form onSubmit={(e)=> e.preventDefault()} className="flex w-full md:w-auto gap-3">
            <input placeholder="Email address" className="w-full md:w-72 px-4 py-3 rounded-xl border border-white/60 bg-white/80 outline-none focus:ring-2 ring-emerald-300" />
            <button className="px-5 py-3 rounded-xl bg-emerald-600 text-white shadow hover:bg-emerald-700 transition">Notify me</button>
          </form>
        </div>
      </div>
    </section>
  )
}
