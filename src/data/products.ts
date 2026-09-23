export interface Product {
  id: string;
  name: string;
  category: "Pakan" | "Pupuk";
  price: number;
  unit: string;
  seller: string;
  location: string;
  rating: number;
  sold: number;
  imageUrl: string;
  stock: number;
  description?: string;
}

export const productsData: Product[] = [
  {
    id: "p1",
    name: "Maggot BSF Fresh Premium",
    category: "Pakan",
    price: 7000,
    unit: "kg",
    seller: "Peternakan Maggot Berkah",
    location: "Gunungpati, Semarang",
    rating: 4.8,
    sold: 150,
    imageUrl: "/Maggot Fresh.webp",
    stock: 50,
    description: "Maggot BSF hidup segar, baru dipanen. Sangat cocok sebagai pakan alternatif berprotein tinggi untuk unggas dan lele."
  },
  {
    id: "p2",
    name: "Maggot BSF Kering (Oven) High Protein",
    category: "Pakan",
    price: 45000,
    unit: "500gr",
    seller: "EcoFeed Sekaran",
    location: "Sekaran, Semarang",
    rating: 4.9,
    sold: 320,
    imageUrl: "/Maggot Kering.webp",
    stock: 25,
    description: "Maggot BSF yang dikeringkan dengan suhu optimal sehingga awet disimpan lama. Cocok untuk pakan burung kicau dan ikan hias."
  },
  {
    id: "p3",
    name: "Pupuk Organik Kasgot (Bekas Maggot)",
    category: "Pupuk",
    price: 3500,
    unit: "kg",
    seller: "Kebun Subur Patemon",
    location: "Patemon, Semarang",
    rating: 4.7,
    sold: 400,
    imageUrl: "/Kasgot.webp",
    stock: 100,
    description: "Sisa budidaya maggot (Kasgot) yang kaya akan unsur hara. Sangat disarankan untuk menyuburkan tanah pada urban farming atau tanaman hias."
  },
  {
    id: "p4",
    name: "Paket Hemat Maggot Fresh 5 Kg",
    category: "Pakan",
    price: 30000,
    unit: "paket",
    seller: "Peternakan Maggot Berkah",
    location: "Gunungpati, Semarang",
    rating: 4.9,
    sold: 85,
    imageUrl: "/Paket Maggot.webp",
    stock: 15,
    description: "Pembelian jumlah besar dengan harga lebih murah. Cocok untuk peternak lele atau ayam skala menengah."
  },
  {
    id: "p5",
    name: "Pupuk Kasgot Premium (Halus)",
    category: "Pupuk",
    price: 5000,
    unit: "kg",
    seller: "Tani Jaya Ungaran",
    location: "Ungaran Barat",
    rating: 4.6,
    sold: 210,
    imageUrl: "/Kasgot Premium.webp",
    stock: 40,
    description: "Kasgot yang telah diayak halus sehingga lebih mudah diserap oleh akar tanaman kecil atau tanaman dalam pot."
  },
  {
    id: "p6",
    name: "Dried Maggot BSF Grade A",
    category: "Pakan",
    price: 85000,
    unit: "1kg",
    seller: "Banyumanik BSF Farm",
    location: "Banyumanik, Semarang",
    rating: 5.0,
    sold: 60,
    imageUrl: "/Maggot Kering Grade A.webp",
    stock: 10,
    description: "Maggot kering grade A dengan ukuran yang seragam dan kandungan protein tertinggi. Dikemas dengan aman."
  }
];
