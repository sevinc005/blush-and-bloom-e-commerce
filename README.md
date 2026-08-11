# 🌸 Blush & Bloom — E-Commerce Website

**Blush & Bloom** geniş kosmetika məhsulları kataloqunu, kateqoriya və brendlərə görə dinamik filterləməni, anında axtarış sistemini və səbət/favorit idarəetməsini təmin edən müasir, responsive e-ticarət veb saytıdır.

---

## ✨ Əsas Xüsusiyyətlər (Features)

* **🎨 Responsive & Modern UI/UX:** Bütün mobil cihazlar, planşetlər və masaüstü ekranlar üçün tam uyğunlaşdırılmış (Fully Responsive) interfeys.
* **⚡ Yüksək Performanslı Keşləmə (Caching):** TanStack Query inteqrasiyası sayəsində müraciət olunan kateqoriyalar keşlənir, təkrar sorğularda məhsullar 0 saniyəyə ekrana gəlir.
* **🔍 İntellektual Axtarış Sistemi (Smart Search):** İstifadəçi eyni vaxtda həm brend, həm də məhsul adını (məsələn: `nyx blush`) daxil edərək dəqiq axtarış nəticələri əldə edə bilir.
* **📂 Brend və Kateqoriya Filterləri:** Məhsulları həm brendlərə (NYX, Maybelline, Dior və s.), həm də tiplərə (Blush, Lipstick, Mascara və s.) görə sürətli filterləmə.
* **🛒 Səbət və Favoritlərin İdarə Edilməsi:** Məhsulları səbətə əlavə etmək, porsiyaları idarə etmək və favorit siyahısı formalaşdırmaq imkanı.
* **📱 Mobile-First Naviqasiya:** Mobildə istifadəçi təcrübəsini artıran üfqi (horizontal) scrollable brendlər menyusu və rahat kart layout-u.
* **🔔 İnteraktiv Bildirişlər:** Hot-Toast dəstəyi ilə estetik pop-up xəbərdarlıqlar.

---

## 🛠️ İstifadə Olunan Texnologiyalar (Tech Stack)

### **Frontend & Core:**
* **React.js (v18+)** — Komponent əsaslı UI arxitekturası
* **Vite** — Yüksək sürətli build aləti və inkişaf mühiti
* **JavaScript (ES6+)** — Əsas proqramlaşdırma dili

### **State & Data Fetching:**
* **TanStack Query (React Query v5)** — Async state management, API data fetching, caching və smooth UI transition-lar üçün
* **React Router DOM (v6)** — Səhifələr arası SPA (Single Page Application) naviqasiyası üçün

### **Styling & Design:**
* **Custom CSS3** — Modular CSS, Flexbox, CSS Grid, Media Queries (Responsive Mobile Design) və xüsusi Mesh Gradient fonlar
* **React Icons** — İnteraktiv ikon seti

### **UI Notifications & API:**
* **React Hot Toast** — Xüsusi dizayn edilmiş pop-up notification sistemləri
* **Makeup REST API** — Real vaxt kosmetika məhsulları məlumat bazası

---

## 📁 Layihə Strukturu (Project Structure)

```text
blush-and-bloom-websites/
├── src/
│   ├── components/       # UI Komponentləri (Navbar, Footer, ProductCard, Sidebar və s.)
│   ├── hooks/            # Custom React Hooks (useProducts.js və s.)
│   ├── pages/            # Səhifələr (HomePage, CartPage, FavoritesPage, Account)
│   ├── services/         # API funksiyaları və axios/fetch tənzimləmələri
│   ├── styles/           # Qlobal və komponent CSS faylları (main.css)
│   ├── App.jsx           # Əsas App komponenti və Route tənzimləmələri
│   └── main.jsx          # Layihənin giriş nöqtəsi (Providers setup)
├── public/               # Statik media və ikonlar
├── package.json          # Asılılıqlar və scriptlər
└── README.md             # Layihə sənədləşdirilməsi
