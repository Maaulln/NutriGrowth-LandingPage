import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Bunda Rina",
      role: "Ibu dari Rayyan (3 tahun)",
      content: "Anak saya dulu sangat picky eater, saya bingung apakah gizinya cukup. Sejak pakai NutriGrowth, saya bisa pantau kalori dan vitamin hariannya. Sangat menenangkan pikiran!",
      image: "/images/avatar-1.png",
      rating: 5
    },
    {
      name: "Ayah Dito",
      role: "Ayah dari Kania (1.5 tahun)",
      content: "Fitur cek stuntingnya sangat akurat dan laporannya mudah dibaca. Kami bahkan bisa tunjukkan grafiknya ke dokter anak saat kontrol bulanan. Aplikasi wajib untuk orang tua baru.",
      image: "/images/avatar-2.png",
      rating: 5
    },
    {
      name: "Bunda Sarah",
      role: "Ibu dari Bima (4 tahun)",
      content: "Suka banget sama UI-nya yang lucu dan warna-warni! Anak saya bahkan suka ikut lihat icon sayurannya. Konsultasi dengan ahli gizinya juga fast response dan solutif.",
      image: "/images/avatar-3.png",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">TESTIMONI ORANG TUA</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Dipercaya oleh ribuan keluarga Indonesia
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-border relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-8 right-8 text-primary/20" size={48} />
              
              <div className="flex gap-1 mb-6 text-secondary">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-8 leading-relaxed italic relative z-10">
                "{testi.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-muted">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testi.name}</h4>
                  <p className="text-sm text-foreground/60">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
