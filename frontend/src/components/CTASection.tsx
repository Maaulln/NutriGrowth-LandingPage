import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CTASection() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        toast({
          title: "Berhasil!",
          description: data.message,
        });
        setName("");
        setEmail("");
      } else {
        toast({
          variant: "destructive",
          title: "Gagal",
          description: data.error || "Terjadi kesalahan.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Koneksi Gagal",
        description: "Tidak dapat terhubung ke server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-emerald-400 rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-primary/20">
          
          {/* Background Decorative */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-2xl"></div>
          
          <div className="flex-1 text-white z-10 text-center md:text-left">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
              Mulai Jaga Nutrisi Si Kecil Sekarang
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto md:mx-0">
              Daftar ke waitlist kami untuk mendapatkan akses prioritas dan uji coba gratis saat aplikasi diluncurkan.
            </p>
            
            {!success ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  required
                  className="w-full px-5 py-3 rounded-xl border-none outline-none text-black placeholder:text-gray-400 focus:ring-4 focus:ring-white/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Alamat Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  className="w-full px-5 py-3 rounded-xl border-none outline-none text-black placeholder:text-gray-400 focus:ring-4 focus:ring-white/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white hover:bg-black/80 font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 mt-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">Memproses...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Gabung Waitlist <Send size={18} />
                    </span>
                  )}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-center"
              >
                <CheckCircle2 className="mx-auto h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-2">Pendaftaran Berhasil!</h3>
                <p className="text-white/90">Anda telah terdaftar sebagai pengguna prioritas NutriGrowth.</p>
              </motion.div>
            )}
          </div>
          
          <motion.div 
            className="flex-1 max-w-sm relative z-10 hidden md:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square relative rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
               <img src="/images/family-cta.png" alt="Happy Family" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
