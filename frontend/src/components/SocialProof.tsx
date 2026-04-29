import { motion } from "framer-motion";
import { HeartPulse, CheckCircle2, Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-10 bg-white border-y border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          
          <motion.div 
            className="flex flex-col items-center justify-center text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary/10 p-3 rounded-2xl text-primary mb-3">
              <HeartPulse size={28} />
            </div>
            <h3 className="font-display font-bold text-3xl text-foreground mb-1">50.000+</h3>
            <p className="text-foreground/60 font-medium">Orang Tua Terbantu</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center justify-center text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-secondary/20 p-3 rounded-2xl text-yellow-600 mb-3">
              <Star size={28} fill="currentColor" />
            </div>
            <div className="flex items-center gap-1 mb-1">
              <h3 className="font-display font-bold text-3xl text-foreground">4.9</h3>
              <div className="flex text-secondary">
                <Star size={20} fill="currentColor" />
              </div>
            </div>
            <p className="text-foreground/60 font-medium">Rating App Store & Play</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center justify-center text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-accent/10 p-3 rounded-2xl text-accent mb-3">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="font-display font-bold text-3xl text-foreground mb-1">95%</h3>
            <p className="text-foreground/60 font-medium">Akurasi Deteksi Nutrisi</p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
