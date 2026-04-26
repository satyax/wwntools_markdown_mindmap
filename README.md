🧠 Markdown to Mindmap Generator

Sebuah aplikasi web Single-Page Application (SPA) ringan yang mengubah teks berbasis kerangka/penomoran (numbered list) menjadi Mind Map (Peta Konsep) interaktif secara instan.
Dibangun sepenuhnya tanpa build-tools atau backend, cukup jalankan file HTML di browser Anda!


✨ Fitur Utama:
🚀 Instan & Ringan: Berjalan sepenuhnya di sisi klien (browser) tanpa perlu server.
🌳 Interactive Mindmap: Ditenagai oleh D3.js. Mendukung fitur Pan (geser), Zoom, dan Expand/Collapse (buka/tutup cabang).
🎨 Dynamic Coloring: Pewarnaan otomatis untuk setiap cabang utama beserta anak-anak cabangnya agar visualisasi lebih rapi dan mudah dibaca.
💡 Smart Tooltips: Teks paragraf biasa di bawah judul/nomor akan otomatis dikonversi menjadi tooltip (catatan tersembunyi) yang muncul saat kursor diarahkan ke kotak mindmap.
💾 Local Persistence: Anda dapat menyimpan teks yang sedang dikerjakan ke dalam file lokal (mindmap_data.js). Saat HTML dibuka kembali, pekerjaan terakhir Anda akan dimuat secara otomatis!
🪟 Fullscreen Mode: Mode layar penuh untuk fokus pada visualisasi peta konsep.

🛠️ Teknologi yang Digunakan
HTML5 & Vanilla JavaScript (Tanpa framework JS kompleks).
Tailwind CSS (via CDN) untuk styling dan antarmuka yang modern & responsif.
D3.js (v7) untuk kalkulasi tree layout dan manipulasi SVG visualisasi data.
Lucide Icons (via CDN) untuk ikon antarmuka.

📦 Cara Penggunaan (Instalasi)
Karena aplikasi ini zero-dependency di sisi server, Anda tidak perlu melakukan npm install atau konfigurasi rumit.
Clone repositori ini atau unduh sebagai .zip:
git clone [https://github.com/username-anda/markdown-to-mindmap.git](https://github.com/username-anda/markdown-to-mindmap.git)
Buka folder proyek hasil unduhan.
Klik dua kali pada file index.html untuk membukanya di browser modern pilihan Anda (Chrome, Firefox, Edge, Safari).
Mulai ketik kerangka teks Anda di panel sebelah kiri!

📝 Panduan Format Penulisan (Syntax)
Aplikasi ini menggunakan algoritma Regex untuk membaca tingkat kedalaman (hirarki) berdasarkan penomoran bercabang.
Aturan Dasar:
Node/Cabang: Harus dimulai dengan angka dan titik (contoh: 1. , 1.1. , 2.3.4.a. ).
Spasi: Harus ada minimal satu spasi setelah penomoran sebelum judul cabang.
Deskripsi/Tooltip: Teks apapun yang ditulis di baris baru tanpa format angka di depannya akan otomatis masuk sebagai deskripsi/tooltip untuk cabang/node yang berada tepat di atasnya.

Contoh Format:
1. Proyek Utama
Ini adalah deskripsi untuk Proyek Utama. Teks ini akan menjadi tooltip.

1.1. Divisi Marketing
1.1.1. Strategi Q1
Fokus pada kampanye media sosial.

1.1.2. Strategi Q2
1.2. Divisi Tech
1.2.1. Pengembangan Fitur A

💾 Menyimpan Data ke Lokal
Agar data Anda tidak hilang saat browser di-refresh:
Klik tombol berikon Disket (Save) di sebelah tombol "Buat Mindmap".
File bernama mindmap_data.js akan terunduh.
Pindahkan/timpa file mindmap_data.js tersebut ke dalam folder yang SAMA dengan letak file index.html.
Refresh browser Anda. Teks terakhir otomatis termuat!

🤝 Kontribusi
Kontribusi selalu diterima! Jika Anda memiliki ide fitur baru, menemukan bug, atau ingin meningkatkan algoritma parsing teksnya:
Fork repositori ini.
Buat branch fitur Anda (git checkout -b fitur-keren-saya).
Lakukan commit perubahan Anda (git commit -m 'Menambahkan fitur keren').
Push ke branch tersebut (git push origin fitur-keren-saya).
Buka sebuah Pull Request.

📄 Lisensi
Proyek ini didistribusikan di bawah lisensi MIT. Lihat file LICENSE untuk informasi lebih lanjut.
