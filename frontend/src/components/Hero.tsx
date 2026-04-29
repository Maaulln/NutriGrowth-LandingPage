import { motion } from "framer-motion";
import { Star, Apple, Carrot, Citrus, Sparkles, Download, PlayCircle, Utensils, Ruler } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden overflow-x-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10 blob-shape-1 opacity-60 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/15 to-primary/5 blob-shape-2 opacity-60 -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Floating decorative icons */}
      <div className="absolute top-40 left-10 md:left-20 text-accent/80 floating">
        <Sparkles size={40} />
      </div>
      <div className="absolute top-32 right-10 md:right-[40%] text-secondary floating-delayed">
        <Star size={48} fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-20 md:left-[30%] text-primary floating">
        <Carrot size={40} />
      </div>
      <div className="absolute top-60 right-10 md:right-20 text-accent floating-delayed">
        <Apple size={36} fill="currentColor" className="text-accent/40" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-sm border border-primary/20 mb-6 mx-auto lg:mx-0">
              <Sparkles size={16} className="text-secondary" />
              <span className="text-sm font-bold text-primary">Tumbuh Sehat, Tumbuh Ceria!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground mb-6">
              Pantau Nutrisi Anak, <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Cegah Stunting</span> Sejak Dini
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Deteksi risiko stunting & nutrisi harian si kecil hanya dalam genggaman. Mudah, akurat, dan menyenangkan untuk orang tua hebat!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={20} />
                Download Sekarang
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white border-2 border-border hover:border-primary/50 text-foreground font-bold py-4 px-8 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <PlayCircle size={20} className="text-primary" />
                Lihat Demo
              </motion.button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-foreground/60 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary/30 flex items-center justify-center text-xs">
                    👨‍👩‍👧
                  </div>
                ))}
              </div>
              <span>Bergabung dengan 50.000+ orang tua</span>
            </div>
          </motion.div>
          
          {/* Image / Mockup */}
          <motion.div 
            className="flex-1 relative w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glassmorphic floating badges */}
            <motion.div 
              className="absolute top-10 -left-6 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-xl z-20 hidden sm:flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                <Utensils size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Protein</p>
                <p className="text-sm font-bold text-slate-800">24.5 Gram</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-20 -right-6 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-2xl p-4 shadow-xl z-20 hidden sm:flex items-center gap-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                <Ruler size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Risiko Stunting</p>
                <p className="text-sm font-bold text-slate-800">Sangat Rendah ✨</p>
              </div>
            </motion.div>

            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-primary/20 aspect-[3/4] bg-white z-10">
              <img 
                src="/images/hero-mockup.png" 
                alt="NutriGrowth App Mockup" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Decorative background circle behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
