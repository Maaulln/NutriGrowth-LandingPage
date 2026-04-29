import { motion } from "framer-motion";
import { Utensils, Ruler, LineChart, Stethoscope } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Deteksi Nutrisi Harian",
      description: "Scan foto makanan si kecil dan dapatkan hitungan gizi (kalori, protein, vitamin) secara otomatis dalam hitungan detik.",
      icon: Utensils,
      color: "bg-primary/10 text-primary",
      borderColor: "group-hover:border-primary/30"
    },
    {
      title: "Cek Risiko Stunting",
      description: "Analisis cerdas tinggi badan, berat, dan usia anak dibandingkan dengan standar kurva pertumbuhan WHO.",
      icon: Ruler,
      color: "bg-secondary/20 text-yellow-600",
      borderColor: "group-hover:border-secondary/50"
    },
    {
      title: "Laporan Tumbuh Kembang",
      description: "Pantau milestone pertumbuhan anak lewat grafik visual yang mudah dipahami secara mingguan dan bulanan.",
      icon: LineChart,
      color: "bg-blue-100 text-blue-600",
      borderColor: "group-hover:border-blue-300"
    },
    {
      title: "Konsultasi Ahli Gizi",
      description: "Tanya jawab langsung dengan dokter anak dan ahli gizi bersertifikat via chat terintegrasi kapan saja.",
      icon: Stethoscope,
      color: "bg-accent/10 text-accent",
      borderColor: "group-hover:border-accent/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="fitur" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">FITUR UNGGULAN</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Semua yang Anda butuhkan untuk <span className="text-accent">tumbuh kembang</span> si kecil
          </h3>
          <p className="text-lg text-foreground/70">
            NutriGrowth menyederhanakan pemantauan kesehatan anak dengan alat-alat cerdas yang ramah pengguna.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`group bg-white p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${feature.borderColor}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h4 className="font-display font-bold text-2xl text-foreground mb-3">{feature.title}</h4>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
