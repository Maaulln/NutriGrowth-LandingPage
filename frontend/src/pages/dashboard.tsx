import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { api, type RegisteredUser, type UserFormData } from "@/lib/api";
import {
  Users,
  UserPlus,
  Pencil,
  Trash2,
  X,
  LayoutDashboard,
  Home,
  Search,
  RefreshCw,
  ChevronRight,
  LogOut,
  ShieldCheck,
} from "lucide-react";

// ─── Stat Card ──────────────────────────────────────────────────────────────
function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: number | string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex items-center gap-5">
      <div className={`p-4 rounded-xl ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <p className="text-3xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

// ─── Modal Form ──────────────────────────────────────────────────────────────
function UserModal({
  open,
  onClose,
  onSubmit,
  initial,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
  initial?: RegisteredUser | null;
  loading: boolean;
}) {
  const [form, setForm] = useState<UserFormData>({ name: "", email: "" });

  useEffect(() => {
    setForm(initial ? { name: initial.name, email: initial.email } : { name: "", email: "" });
  }, [initial, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            {initial ? <Pencil size={18} className="text-emerald-600" /> : <UserPlus size={18} className="text-emerald-600" />}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              {initial ? "Edit Data User" : "Tambah User Baru"}
            </h2>
            <p className="text-xs text-slate-400">
              {initial ? "Perbarui informasi user terdaftar" : "Daftarkan user baru ke sistem"}
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(form);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Lengkap</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Masukkan nama lengkap"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all text-sm text-slate-800 placeholder:text-slate-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Alamat Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Masukkan alamat email"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all text-sm text-slate-800 placeholder:text-slate-300"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors disabled:opacity-60"
            >
              {loading ? "Menyimpan..." : initial ? "Perbarui" : "Tambahkan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Delete Dialog ───────────────────────────────────────────────────────────
function DeleteDialog({
  open,
  onClose,
  onConfirm,
  name,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name: string;
  loading: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trash2 className="text-red-500" size={22} />
        </div>
        <h2 className="text-lg font-bold text-slate-800 text-center mb-2">Konfirmasi Hapus</h2>
        <p className="text-sm text-slate-500 text-center mb-6">
          Yakin ingin menghapus user <span className="font-semibold text-slate-700">{name}</span>? Tindakan ini tidak dapat dibatalkan.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {loading ? "Menghapus..." : "Hapus"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Avatar ──────────────────────────────────────────────────────────────────
function UserAvatar({ name }: { name: string }) {
  const colors = [
    "from-emerald-400 to-teal-500",
    "from-blue-400 to-indigo-500",
    "from-violet-400 to-purple-500",
    "from-rose-400 to-pink-500",
    "from-amber-400 to-orange-500",
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;
  return (
    <div
      className={`w-9 h-9 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

// ─── Main Dashboard Page ─────────────────────────────────────────────────────
export default function DashboardPage() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const [users, setUsers] = useState<RegisteredUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<RegisteredUser | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<RegisteredUser | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.getUsers();
      setUsers(res.data);
    } catch {
      toast({ variant: "destructive", title: "Gagal", description: "Tidak dapat memuat data dari server." });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleCreate = async (data: UserFormData) => {
    setActionLoading(true);
    try {
      await api.createUser(data);
      toast({ title: "Berhasil!", description: "User baru berhasil ditambahkan." });
      setModalOpen(false);
      fetchData();
    } catch (e: unknown) {
      toast({ variant: "destructive", title: "Gagal", description: (e as Error).message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdate = async (data: UserFormData) => {
    if (!editTarget) return;
    setActionLoading(true);
    try {
      await api.updateUser(editTarget.id, data);
      toast({ title: "Berhasil!", description: "Data user berhasil diperbarui." });
      setEditTarget(null);
      fetchData();
    } catch (e: unknown) {
      toast({ variant: "destructive", title: "Gagal", description: (e as Error).message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setActionLoading(true);
    try {
      await api.deleteUser(deleteTarget.id);
      toast({ title: "Berhasil!", description: "User berhasil dihapus." });
      setDeleteTarget(null);
      fetchData();
    } catch (e: unknown) {
      toast({ variant: "destructive", title: "Gagal", description: (e as Error).message });
    } finally {
      setActionLoading(false);
    }
  };

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const todayCount = users.filter(
    (u) => new Date(u.created_at).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* ── Sidebar ── */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-lg">N</div>
            <div>
              <p className="font-bold text-sm">NutriGrowth</p>
              <p className="text-[10px] text-slate-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <a
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group"
          >
            <Home size={18} className="text-slate-400 group-hover:text-white transition-colors" />
            Landing Page
          </a>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <LayoutDashboard size={18} />
            Manajemen User
            <ChevronRight size={14} className="ml-auto" />
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="px-4 py-4 border-t border-slate-800 space-y-2">
          {/* Stats mini */}
          <div className="bg-slate-800 rounded-xl px-4 py-3">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Total User</p>
            <p className="text-2xl font-bold text-white">{users.length}</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LogOut size={18} />
            Kembali ke Beranda
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="text-xl font-bold text-slate-800">Manajemen User</h1>
            <p className="text-xs text-slate-400 mt-0.5">Kelola semua data user yang terdaftar</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
              title="Refresh"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            </button>
            <button
              onClick={() => { setEditTarget(null); setModalOpen(true); }}
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm shadow-emerald-200"
            >
              <UserPlus size={16} />
              Tambah User
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto px-8 py-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <StatCard title="Total User Terdaftar" value={users.length} icon={Users} color="bg-emerald-500" />
            <StatCard title="Daftar Hari Ini" value={todayCount} icon={UserPlus} color="bg-blue-500" />
            <StatCard title="Hasil Pencarian" value={filtered.length} icon={ShieldCheck} color="bg-violet-500" />
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-700">Daftar User Terdaftar</h2>
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari nama atau email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all w-56"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">ID</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">User</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tanggal Daftar</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {loading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <tr key={i}>
                        {Array.from({ length: 5 }).map((_, j) => (
                          <td key={j} className="px-6 py-4">
                            <div className="h-4 bg-slate-100 rounded-full animate-pulse w-24" />
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center">
                            <Users size={24} className="text-slate-300" />
                          </div>
                          <p className="text-slate-400 text-sm font-medium">
                            {search ? "Tidak ada hasil yang cocok" : "Belum ada user terdaftar"}
                          </p>
                          {!search && (
                            <button
                              onClick={() => { setEditTarget(null); setModalOpen(true); }}
                              className="text-xs text-emerald-600 font-semibold hover:underline"
                            >
                              + Tambah user pertama
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filtered.map((u) => (
                      <tr key={u.id} className="hover:bg-slate-50/70 transition-colors group">
                        <td className="px-6 py-4 text-slate-400 font-mono text-xs">#{u.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <UserAvatar name={u.name} />
                            <span className="font-semibold text-slate-700">{u.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-500">{u.email}</td>
                        <td className="px-6 py-4 text-slate-400 text-xs">
                          {new Date(u.created_at).toLocaleDateString("id-ID", {
                            day: "numeric", month: "long", year: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => { setEditTarget(u); setModalOpen(true); }}
                              className="p-2 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                              title="Edit"
                            >
                              <Pencil size={14} />
                            </button>
                            <button
                              onClick={() => setDeleteTarget(u)}
                              className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                              title="Hapus"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            {!loading && filtered.length > 0 && (
              <div className="px-6 py-3 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
                <span>Menampilkan {filtered.length} dari {users.length} total user</span>
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <ShieldCheck size={12} />
                  Data tersimpan aman
                </span>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* ── Modals ── */}
      <UserModal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditTarget(null); }}
        onSubmit={editTarget ? handleUpdate : handleCreate}
        initial={editTarget}
        loading={actionLoading}
      />
      <DeleteDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        name={deleteTarget?.name ?? ""}
        loading={actionLoading}
      />
    </div>
  );
}
