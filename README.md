# 🛒 E-Ticaret / Online Shop Projesi

Modern web teknolojileri kullanılarak geliştirilmiş, dinamik ve kullanıcı dostu bir E-Ticaret demo projesi! 🚀 

Bu proje, React ekosistemindeki güncel araçları (React 19, Redux Toolkit, React Router DOM) kullanarak uçtan uca bir alışveriş deneyimi sunmayı hedeflemektedir. Veri yönetimi için `json-server` ile oluşturulmuş, anında tepki veren bir mock backend (REST API) kullanılmıştır.

## ✨ Öne Çıkan Özellikler

- **🛍️ Kapsamlı Ürün Yönetimi**: `db.json` üzerinden beslenen ve dinamik olarak ekranda listelenen ürün kataloğu. (Veritabanına anında yeni ürün eklenebilir!)
- **🛒 Gelişmiş Sepet Sistemi**: Ürünleri sepete ekleme, çıkarma, miktar güncelleme ve toplam tutar hesaplama.
- **🔍 Dinamik Arama ve Filtreleme**: Kategorilere ve isimlere göre hızlı ve etkili ürün filtreleme özellikleri.
- **⚡ Modern Durum Yönetimi (State Management)**: Redux Toolkit ile uygulamanın her yerinde tutarlı ve performanslı veri yönetimi.
- **🛣️ Pürüzsüz Sayfa Geçişleri**: React Router DOM ile sayfa yenilenmeden, hızlı ve SPA (Single Page Application) ruhuna uygun gezinti ve detay sayfaları.
- **💅 Şık ve Duyarlı Arayüz**: Material-UI (MUI) ve modern CSS yaklaşımları ile tasarlanmış, her cihaza (mobil, tablet, masaüstü) uyumlu göz alıcı UI.

## 🛠️ Kullanılan Teknolojiler

- **Frontend**: React 19, Vite, Material UI (MUI), Emotion
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router DOM (v7)
- **HTTP İstemcisi**: Axios
- **Mock Backend**: JSON-Server (REST API simülasyonu)
- **İkonlar**: React Icons

## 🚀 Projeyi Bilgisayarınızda Çalıştırma

Projeyi yerel ortamınızda çalıştırmak ve tam performansıyla deneyimlemek (ürün ekleme/çekme dahil) için aşağıdaki adımları sırasıyla uygulayın.

### 1️⃣ Kurulum
Önce projeyi klonlayın ve bağımlılıklarını yükleyin:
```bash
git clone https://github.com/suleymankonak/online-shop-demo.git
cd "Online Shop Project"
npm install
```

### 2️⃣ API Sunucusunu Başlatma (Veritabanı İçin)
Ürünlerin listelenmesi ve anında yeni ürün eklenebilmesi için `json-server`'ı çalıştırmalısınız. 
**Terminalde yeni bir sekme açın** ve şu komutu girin:
```bash
npm run server
```
> _Not: Bu komut arka planda `json-server src/DBJSON/db.json -p 3000` çalıştırarak sahte sunucuyu 3000 portunda başlatır. Artık ürünler `src/DBJSON/db.json` dosyasından okunup yazılacaktır._

### 3️⃣ Uygulamayı Başlatma (Frontend)
Şimdi veritabanımız hazır, frontend'i ayağa kaldıralım. **Farklı bir terminal penceresi açıp** projeyi başlatın:
```bash
npm run dev
```

Uygulamanız artık `http://localhost:5173` (veya terminalde belirtilen adreste) çalışıyor olacak! 🎉

## 📄 Lisans

Bu proje [MIT License](LICENSE) ile lisanslanmıştır. © 2026 Süleyman Konak