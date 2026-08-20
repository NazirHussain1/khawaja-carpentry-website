import { MapPin, Navigation } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';

const locations = [
  {
    city: 'Dubai',
    description: 'Fast pallet delivery for warehouses, factories, and logistics businesses in Dubai.',
    detail: 'Jebel Ali, Al Quoz and Dubai Industrial City coverage.',
    backgroundImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85'
  },
  {
    city: 'Sharjah',
    description: 'Trusted wooden pallet supplier serving industrial areas across Sharjah.',
    detail: 'Sajja Industrial and Sharjah Industrial Area supply.',
    backgroundImage: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=900&q=85'
  },
  {
    city: 'Abu Dhabi',
    description: 'Bulk supply of pallets and crates for industrial and commercial businesses.',
    detail: 'Mussafah, ICAD and Abu Dhabi logistics support.',
    backgroundImage: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=900&q=85'
  },
  {
    city: 'JAFZA',
    description: 'Export-standard pallets and wooden crates for JAFZA logistics and shipping companies.',
    detail: 'Export packing and port-ready pallet solutions.',
    backgroundImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=85'
  },
  {
    city: 'Jebel Ali',
    description: 'Reliable pallet solutions for warehouses and cargo operations in Jebel Ali.',
    detail: 'Reliable support for cargo, freight and warehouse operations.',
    backgroundImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=85'
  },
  {
    city: 'Ras Al Khaimah',
    description: 'Affordable pallet and packaging supply for factories and industrial customers.',
    detail: 'Factory, manufacturing and industrial-area delivery.',
    backgroundImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85'
  },
  {
    city: 'Ajman',
    description: 'Quick supply of wooden pallets and packaging materials in Ajman.',
    detail: 'Quick local supply for SMEs and distribution teams.',
    backgroundImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85'
  },
  {
    city: 'Fujairah',
    description: 'Industrial pallet and crate delivery services across Fujairah.',
    detail: 'Port, marine, construction and industrial supply.',
    backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85'
  }
];

const whatsappUrl = `https://wa.me/971542046121?text=${encodeURIComponent('Hello, I need pallets anywhere in UAE.')}`;

export default function IndustriesSection() {
  return (
    <section className="bg-[#fffefa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 border-b border-[#b9c7c2] px-1 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#52837d]">
              <Navigation size={14} />
              Areas We Serve
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-normal leading-tight text-[#173b42] sm:text-5xl">Serving All Emirates Across UAE</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Reliable wooden pallet and packaging supply services across major industrial and commercial areas in UAE.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We supply wooden pallets, plastic pallets, wooden crates, and jumbo bags to warehouses, factories,
              logistics companies, exporters, and industrial businesses throughout UAE.
            </p>
          </div>

          <div className="bg-[#fffefa] p-0 lg:pl-8">
            <div className="relative mx-auto min-h-80 max-w-md px-3 py-4 sm:min-h-96">
              <div className="absolute left-[12%] right-[12%] top-1/2 border-t border-dashed border-[#9bb8ae]" aria-hidden="true" />
              <div className="absolute left-[30%] top-[28%] h-[45%] rotate-[22deg] border-l border-dashed border-[#9bb8ae]" aria-hidden="true" />
              <div className="absolute left-[57%] top-[23%] h-[50%] -rotate-[25deg] border-l border-dashed border-[#9bb8ae]" aria-hidden="true" />
              <div className="absolute left-[74%] top-[42%] h-[30%] rotate-[42deg] border-l border-dashed border-[#9bb8ae]" aria-hidden="true" />
              <div className="absolute left-[18%] top-[43%] size-3 rounded-full bg-[#315b5d] ring-4 ring-[#dce9e4]" />
              <div className="absolute left-[31%] top-[25%] size-3 rounded-full bg-[#315b5d] ring-4 ring-[#dce9e4]" />
              <div className="absolute left-[45%] top-[53%] size-3 rounded-full bg-[#315b5d] ring-4 ring-[#dce9e4]" />
              <div className="absolute left-[59%] top-[22%] size-3 rounded-full bg-[#315b5d] ring-4 ring-[#dce9e4]" />
              <div className="absolute left-[73%] top-[45%] size-3 rounded-full bg-[#315b5d] ring-4 ring-[#dce9e4]" />
              <div className="absolute left-[84%] top-[67%] size-3 rounded-full bg-[#315b5d] ring-4 ring-[#dce9e4]" />
              <div className="absolute left-[45%] top-[9%] size-3 rounded-full bg-[#315b5d] ring-4 ring-[#dce9e4]" />
              <div className="absolute left-[17%] top-[50%] text-[10px] font-black uppercase tracking-[0.12em] text-[#52837d]">Abu Dhabi</div>
              <div className="absolute left-[27%] top-[18%] text-[10px] font-black uppercase tracking-[0.12em] text-[#52837d]">Dubai</div>
              <div className="absolute left-[40%] top-[58%] text-[10px] font-black uppercase tracking-[0.12em] text-[#52837d]">JAFZA</div>
              <div className="absolute left-[54%] top-[14%] text-[10px] font-black uppercase tracking-[0.12em] text-[#52837d]">RAK</div>
              <div className="absolute left-[68%] top-[37%] text-[10px] font-black uppercase tracking-[0.12em] text-[#52837d]">Sharjah</div>
              <div className="absolute left-[78%] top-[72%] text-[10px] font-black uppercase tracking-[0.12em] text-[#52837d]">Fujairah</div>
              <div className="absolute left-[41%] top-0 text-[10px] font-black uppercase tracking-[0.12em] text-[#52837d]">Ajman</div>
              <div className="absolute bottom-2 left-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#52837d]">UAE Coverage</p>
                <strong className="mt-1 block font-serif text-3xl font-normal text-[#173b42]">7 Emirates</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {locations.map((location) => (
            <article className="group relative min-h-64 overflow-hidden rounded-none bg-slate-900 text-white" key={location.city}>
              <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={location.backgroundImage} alt={`${location.city} skyline`} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/10 transition duration-500 group-hover:via-slate-950/70" />
              <div className="relative flex min-h-64 flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-sky-200">
                  <MapPin size={19} />
                  <span className="text-xs font-black uppercase tracking-[0.18em]">UAE coverage</span>
                </div>
                <h3 className="mt-3 font-serif text-3xl font-normal">{location.city}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">{location.description}</p>
                <p className="max-h-0 overflow-hidden text-sm leading-6 text-sky-100 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-16 group-hover:opacity-100">{location.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-[#173b42] px-6 py-8 text-center text-white">
          <h3 className="font-serif text-3xl font-normal">Need pallets anywhere in UAE?</h3>
          <div className="mt-5 flex justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-950/25 transition duration-300 hover:-translate-y-1 hover:from-violet-600 hover:to-sky-400"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
