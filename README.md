# 🌱 NutriGrowth

Platform pemantauan nutrisi dan tumbuh kembang anak yang dirancang untuk membantu orang tua menjaga kesehatan si kecil.

---

## 📁 Struktur Proyek

```
my-new-project/
├── backend/       # Laravel 10 API (PHP 8.1+)
└── frontend/      # React + Vite (Node.js)
```

---

## ⚙️ Persyaratan Sistem

| Kebutuhan | Versi Minimum |
|-----------|--------------|
| PHP       | 8.1          |
| Composer  | 2.x          |
| Node.js   | 18.x         |
| npm       | 9.x          |

---

## 🚀 Cara Menjalankan

### 1. Backend (Laravel 10)

> **Penting**: Selalu buka terminal **baru** dan jalankan dari path lengkap (absolut).

```bash
# Buka terminal BARU, lalu:
cd /Users/maaullntech/Documents/COde/my-new-project/backend

# (Pertama kali saja) Salin file environment
cp .env.example .env

# (Pertama kali saja) Generate app key
php artisan key:generate

# (Pertama kali saja) Buat file database SQLite
touch database/database.sqlite

# (Pertama kali saja) Jalankan migrasi database
php artisan migrate

# Jalankan server development
php artisan serve
```

Server backend akan berjalan di: **http://localhost:8000**

---

### 2. Frontend (React + Vite)

```bash
# Buka terminal BARU (terpisah dari terminal backend), lalu:
cd /Users/maaullntech/Documents/COde/my-new-project/frontend

# (Pertama kali saja) Install dependensi
npm install

# Jalankan server development
npm run dev
```

Aplikasi frontend akan berjalan di: **http://localhost:5173**

---

## 🔗 API Endpoints

Frontend berkomunikasi dengan backend melalui REST API.

| Method | Endpoint        | Deskripsi                   |
|--------|-----------------|------------------------------|
| POST   | `/api/waitlist` | Daftarkan email ke waitlist  |

**Request Body** (JSON):
```json
{
  "name": "Nama Lengkap",
  "email": "email@contoh.com"
}
```

**Response Sukses** (201):
```json
{
  "message": "Berhasil mendaftar ke waitlist!",
  "data": { "id": 1, "name": "Nama", "email": "email@contoh.com" }
}
```

---

## 🛠️ Troubleshooting

### ❌ `Could not open input file: artisan`

**Penyebab**: Terminal merujuk ke direktori lama yang sudah tidak ada.

**Solusi**: Tutup terminal tersebut. Buka terminal **baru**, lalu:
```bash
cd /Users/maaullntech/Documents/COde/my-new-project/backend
php artisan serve
```

---

### ❌ `getcwd: cannot access parent directories`

**Penyebab**: Sesi terminal lama yang "terjebak". **Solusi sama**: Buka terminal baru.

---

### ❌ Port 8000 sudah digunakan

```bash
# Matikan proses di port 8000
lsof -ti:8000 | xargs kill -9

# Atau jalankan di port lain
php artisan serve --port=8001
```

> Jika menggunakan port lain, update URL di `frontend/src/components/CTASection.tsx` pada baris `fetch("http://localhost:8001/api/waitlist")`.

---

## 🗄️ Database

Proyek ini menggunakan **SQLite** (tidak perlu instalasi MySQL).
File database: `backend/database/database.sqlite`

Untuk melihat isi database, gunakan [DB Browser for SQLite](https://sqlitebrowser.org/).

---

## 📦 Tech Stack

| Layer    | Teknologi                              |
|----------|----------------------------------------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS |
| Backend  | Laravel 10, PHP 8.1, SQLite             |
# NutriGrowth-LandingPage
