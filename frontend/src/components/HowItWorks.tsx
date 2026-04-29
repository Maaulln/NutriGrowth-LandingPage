import { motion } from "framer-motion";
import { UserPlus, Camera, Activity } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Buat Profil Anak",
      description: "Masukkan data dasar anak: nama, usia, tinggi, dan berat badan saat ini.",
      icon: UserPlus,
      color: "bg-primary text-white"
    },
    {
      number: "2",
      title: "Catat Nutrisi",
      description: "Scan foto piring makan atau catat manual makanan harian si kecil.",
      icon: Camera,
      color: "bg-secondary text-secondary-foreground"
    },
    {
      number: "3",
      title: "Pantau & Analisis",
      description: "Dapatkan insight instan apakah nutrisi harian sudah memenuhi standar.",
      icon: Activity,
      color: "bg-accent text-white"
    }
  ];

  return (
    <section id="cara-kerja" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">CARA KERJA</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Tiga langkah mudah menuju kesehatan optimal
          </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 border-t-2 border-dashed border-border z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-display font-bold shadow-lg mb-6 ${step.color}`}>
                  {step.number}
                </div>
                <div className="bg-white p-2 rounded-2xl inline-flex mb-4 shadow-sm border border-border">
                  <step.icon size={24} className="text-foreground/70" />
                </div>
                <h4 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h4>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
