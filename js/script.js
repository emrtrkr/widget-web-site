// Ürün Verileri (Simülasyon)
const products = [
    {
        id: 1,
        brand: 'Lab.Q.',
        name: 'Klasik Trench Coat',
        price: 8990,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        badge: 'new'
    },
    {
        id: 2,
        brand: 'Lab.Q.',
        name: 'Deri Çanta - Siyah',
        price: 5490,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 3,
        brand: 'Lab.Q.',
        name: 'Yüksek Topuklu Ayakkabı',
        price: 3290,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 4,
        brand: 'Lab.Q.',
        name: 'İpek Elbise - Kırmızı',
        price: 4590,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
        badge: 'new'
    },
    {
        id: 5,
        brand: 'Lab.Q.',
        name: 'Deri Ceket - Kahverengi',
        price: 6990,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 6,
        brand: 'Lab.Q.',
        name: 'Gömlek - Beyaz',
        price: 1290,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 7,
        brand: 'Lab.Q.',
        name: 'Çocuk Elbise - Pembe',
        price: 1890,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: 'new'
    },
    {
        id: 8,
        brand: 'Lab.Q.',
        name: 'Deri Çizme - Siyah',
        price: 4290,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: null
    },
    {
        id: 9,
        brand: 'Lab.Q.',
        name: 'Kozmetik Seti - Premium',
        price: 2490,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 10,
        brand: 'Lab.Q.',
        name: 'Yatak Odası Seti - Bej',
        price: 12990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        badge: null
    },
    {
        id: 11,
        brand: 'Lab.Q.',
        name: 'Outlet - Klasik Elbise',
        price: 1990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: null
    },
    {
        id: 12,
        brand: 'Lab.Q.',
        name: 'Çanta - Deri Crossbody',
        price: 3890,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: 'new'
    },
    {
        id: 13,
        brand: 'Lab.Q.',
        name: 'Blazer - Siyah',
        price: 3490,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1591047139829-91fce7753a94?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: null
    },
    {
        id: 14,
        brand: 'Lab.Q.',
        name: 'Çizme - Deri Uzun',
        price: 4790,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        badge: null
    },
    {
        id: 15,
        brand: 'Lab.Q.',
        name: 'Pantolon - Klasik',
        price: 2190,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        badge: null
    },
    {
        id: 16,
        brand: 'Lab.Q.',
        name: 'Kazak - Yün',
        price: 1790,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: 'new'
    },
    {
        id: 17,
        brand: 'Lab.Q.',
        name: 'Çocuk Mont - Kış',
        price: 1490,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 18,
        brand: 'Lab.Q.',
        name: 'Çocuk Ayakkabı - Spor',
        price: 990,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: null
    },
    {
        id: 19,
        brand: 'Lab.Q.',
        name: 'Makyaj Seti - Profesyonel',
        price: 3290,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: 'new'
    },
    {
        id: 20,
        brand: 'Lab.Q.',
        name: 'Parfüm - Premium',
        price: 4490,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 21,
        brand: 'Lab.Q.',
        name: 'Yatak Örtüsü Seti - Premium',
        price: 8990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 22,
        brand: 'Lab.Q.',
        name: 'Masa Örtüsü - Lüks',
        price: 2490,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 23,
        brand: 'Lab.Q.',
        name: 'Outlet - Deri Ceket',
        price: 2990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 24,
        brand: 'Lab.Q.',
        name: 'Outlet - Elbise',
        price: 1490,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: 'limited'
    },
    // Kadın Kategorisi - Ek Ürünler (20+ olacak)
    {
        id: 25,
        brand: 'Lab.Q.',
        name: 'Bluz - İpek',
        price: 1890,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
        badge: null
    },
    {
        id: 26,
        brand: 'Lab.Q.',
        name: 'Pantolon - Klasik',
        price: 2490,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1591047139829-91fce7753a94?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: 'new'
    },
    {
        id: 27,
        brand: 'Lab.Q.',
        name: 'Etek - Midi',
        price: 1790,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        badge: null
    },
    {
        id: 28,
        brand: 'Lab.Q.',
        name: 'Kazak - Yün',
        price: 2190,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: null
    },
    {
        id: 29,
        brand: 'Lab.Q.',
        name: 'Ceket - Klasik',
        price: 3490,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1591047139829-91fce7753a94?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: 'new'
    },
    {
        id: 30,
        brand: 'Lab.Q.',
        name: 'Gömlek - Beyaz',
        price: 1290,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 31,
        brand: 'Lab.Q.',
        name: 'Mont - Kış',
        price: 4990,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        badge: null
    },
    {
        id: 32,
        brand: 'Lab.Q.',
        name: 'Şal - İpek',
        price: 890,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
        badge: null
    },
    {
        id: 33,
        brand: 'Lab.Q.',
        name: 'Çanta - El',
        price: 3890,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: 'new'
    },
    {
        id: 34,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Topuklu',
        price: 2790,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: null
    },
    {
        id: 35,
        brand: 'Lab.Q.',
        name: 'Bot - Kış',
        price: 3290,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: null
    },
    {
        id: 36,
        brand: 'Lab.Q.',
        name: 'Spor Ayakkabı',
        price: 1990,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: null
    },
    {
        id: 37,
        brand: 'Lab.Q.',
        name: 'Takım Elbise',
        price: 5990,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1591047139829-91fce7753a94?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: 'new'
    },
    {
        id: 38,
        brand: 'Lab.Q.',
        name: 'Şort - Yaz',
        price: 990,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
        badge: null
    },
    {
        id: 39,
        brand: 'Lab.Q.',
        name: 'Tişört - Pamuk',
        price: 790,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 40,
        brand: 'Lab.Q.',
        name: 'Sweatshirt',
        price: 1490,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: null
    },
    {
        id: 41,
        brand: 'Lab.Q.',
        name: 'Yelek - Deri',
        price: 2790,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 42,
        brand: 'Lab.Q.',
        name: 'Çizme - Uzun',
        price: 4290,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 43,
        brand: 'Lab.Q.',
        name: 'Sandalet - Yaz',
        price: 1490,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: null
    },
    {
        id: 44,
        brand: 'Lab.Q.',
        name: 'Çanta - Omuz',
        price: 3190,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    // Erkek Kategorisi - Ek Ürünler (20+ olacak)
    {
        id: 45,
        brand: 'Lab.Q.',
        name: 'Takım Elbise - Klasik',
        price: 7990,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: 'new'
    },
    {
        id: 46,
        brand: 'Lab.Q.',
        name: 'Kravat - İpek',
        price: 590,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 47,
        brand: 'Lab.Q.',
        name: 'Kemer - Deri',
        price: 890,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 48,
        brand: 'Lab.Q.',
        name: 'Mont - Kış',
        price: 5490,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        badge: null
    },
    {
        id: 49,
        brand: 'Lab.Q.',
        name: 'Sweatshirt - Kapüşonlu',
        price: 1890,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: 'new'
    },
    {
        id: 50,
        brand: 'Lab.Q.',
        name: 'Tişört - Polo',
        price: 990,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 51,
        brand: 'Lab.Q.',
        name: 'Şort - Yaz',
        price: 790,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        badge: null
    },
    {
        id: 52,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Klasik',
        price: 2490,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: null
    },
    {
        id: 53,
        brand: 'Lab.Q.',
        name: 'Spor Ayakkabı',
        price: 1990,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: 'new'
    },
    {
        id: 54,
        brand: 'Lab.Q.',
        name: 'Bot - Deri',
        price: 3290,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: null
    },
    {
        id: 55,
        brand: 'Lab.Q.',
        name: 'Çanta - Laptop',
        price: 2190,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 56,
        brand: 'Lab.Q.',
        name: 'Cüzdan - Deri',
        price: 1290,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 57,
        brand: 'Lab.Q.',
        name: 'Yelek - Klasik',
        price: 1990,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 58,
        brand: 'Lab.Q.',
        name: 'Blazer - Klasik',
        price: 3990,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: 'new'
    },
    {
        id: 59,
        brand: 'Lab.Q.',
        name: 'Hırka - Yün',
        price: 1790,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: null
    },
    {
        id: 60,
        brand: 'Lab.Q.',
        name: 'Çorap - Premium',
        price: 190,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 61,
        brand: 'Lab.Q.',
        name: 'Şapka - Klasik',
        price: 890,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 62,
        brand: 'Lab.Q.',
        name: 'Eldiven - Deri',
        price: 690,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 63,
        brand: 'Lab.Q.',
        name: 'Atlet - Pamuk',
        price: 390,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 64,
        brand: 'Lab.Q.',
        name: 'Boxer - Premium',
        price: 290,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    // Çocuk Kategorisi - Ek Ürünler (20+ olacak)
    {
        id: 65,
        brand: 'Lab.Q.',
        name: 'Çocuk Tişört - Renkli',
        price: 490,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: 'new'
    },
    {
        id: 66,
        brand: 'Lab.Q.',
        name: 'Çocuk Pantolon',
        price: 690,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 67,
        brand: 'Lab.Q.',
        name: 'Çocuk Etek',
        price: 590,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 68,
        brand: 'Lab.Q.',
        name: 'Çocuk Kazak',
        price: 790,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 69,
        brand: 'Lab.Q.',
        name: 'Çocuk Ceket',
        price: 1290,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: 'new'
    },
    {
        id: 70,
        brand: 'Lab.Q.',
        name: 'Çocuk Şort',
        price: 390,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 71,
        brand: 'Lab.Q.',
        name: 'Çocuk Gömlek',
        price: 590,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 72,
        brand: 'Lab.Q.',
        name: 'Çocuk Sweatshirt',
        price: 690,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 73,
        brand: 'Lab.Q.',
        name: 'Çocuk Çizme',
        price: 890,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: null
    },
    {
        id: 74,
        brand: 'Lab.Q.',
        name: 'Çocuk Terlik',
        price: 390,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: 'new'
    },
    {
        id: 75,
        brand: 'Lab.Q.',
        name: 'Çocuk Çanta',
        price: 490,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 76,
        brand: 'Lab.Q.',
        name: 'Çocuk Şapka',
        price: 290,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 77,
        brand: 'Lab.Q.',
        name: 'Çocuk Atkı',
        price: 390,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 78,
        brand: 'Lab.Q.',
        name: 'Çocuk Eldiven',
        price: 290,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 79,
        brand: 'Lab.Q.',
        name: 'Çocuk Çorap',
        price: 90,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 80,
        brand: 'Lab.Q.',
        name: 'Çocuk Mayo',
        price: 390,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: 'new'
    },
    {
        id: 81,
        brand: 'Lab.Q.',
        name: 'Çocuk Pijama',
        price: 590,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 82,
        brand: 'Lab.Q.',
        name: 'Çocuk Takım',
        price: 1290,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 83,
        brand: 'Lab.Q.',
        name: 'Çocuk Yelek',
        price: 690,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    {
        id: 84,
        brand: 'Lab.Q.',
        name: 'Çocuk Hırka',
        price: 790,
        category: 'cocuk',
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1503919005314-30f6a1e1e43e?w=800&q=80',
        badge: null
    },
    // Ayakkabı & Çanta Kategorisi - Ek Ürünler (20+ olacak)
    {
        id: 85,
        brand: 'Lab.Q.',
        name: 'Çanta - Sırt',
        price: 2790,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: 'new'
    },
    {
        id: 86,
        brand: 'Lab.Q.',
        name: 'Çanta - Gece',
        price: 3490,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 87,
        brand: 'Lab.Q.',
        name: 'Çanta - Tote',
        price: 2190,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 88,
        brand: 'Lab.Q.',
        name: 'Çanta - Klavye',
        price: 1890,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 89,
        brand: 'Lab.Q.',
        name: 'Cüzdan - Deri',
        price: 1290,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 90,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Spor',
        price: 2290,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: 'new'
    },
    {
        id: 91,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Klasik',
        price: 2490,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: null
    },
    {
        id: 92,
        brand: 'Lab.Q.',
        name: 'Sandalet - Yaz',
        price: 1490,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: null
    },
    {
        id: 93,
        brand: 'Lab.Q.',
        name: 'Terlik - Ev',
        price: 490,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: null
    },
    {
        id: 94,
        brand: 'Lab.Q.',
        name: 'Bot - Kış',
        price: 3290,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: null
    },
    {
        id: 95,
        brand: 'Lab.Q.',
        name: 'Çizme - Uzun',
        price: 4290,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 96,
        brand: 'Lab.Q.',
        name: 'Çanta - Mini',
        price: 1790,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 97,
        brand: 'Lab.Q.',
        name: 'Çanta - Bel',
        price: 990,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 98,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Topuklu',
        price: 2790,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: 'new'
    },
    {
        id: 99,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Düz',
        price: 1990,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: null
    },
    {
        id: 100,
        brand: 'Lab.Q.',
        name: 'Çanta - Laptop',
        price: 2190,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 101,
        brand: 'Lab.Q.',
        name: 'Çanta - Seyahat',
        price: 3990,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 102,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Yürüyüş',
        price: 2490,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: null
    },
    {
        id: 103,
        brand: 'Lab.Q.',
        name: 'Çanta - El',
        price: 3190,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: 'new'
    },
    {
        id: 104,
        brand: 'Lab.Q.',
        name: 'Ayakkabı - Platform',
        price: 2990,
        category: 'ayakkabi-canta',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: null
    },
    // Kozmetik Kategorisi - Ek Ürünler (20+ olacak)
    {
        id: 105,
        brand: 'Lab.Q.',
        name: 'Ruj - Premium',
        price: 490,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: 'new'
    },
    {
        id: 106,
        brand: 'Lab.Q.',
        name: 'Fondöten - Doğal',
        price: 890,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: null
    },
    {
        id: 107,
        brand: 'Lab.Q.',
        name: 'Maskara - Uzun Kirpik',
        price: 390,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: null
    },
    {
        id: 108,
        brand: 'Lab.Q.',
        name: 'Göz Kalemi',
        price: 290,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: null
    },
    {
        id: 109,
        brand: 'Lab.Q.',
        name: 'Allık - Doğal',
        price: 490,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: 'new'
    },
    {
        id: 110,
        brand: 'Lab.Q.',
        name: 'Göz Farı - Palet',
        price: 690,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: null
    },
    {
        id: 111,
        brand: 'Lab.Q.',
        name: 'Nemlendirici - Yüz',
        price: 1290,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 112,
        brand: 'Lab.Q.',
        name: 'Temizleyici - Yüz',
        price: 890,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 113,
        brand: 'Lab.Q.',
        name: 'Serum - Anti-Aging',
        price: 1990,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: 'new'
    },
    {
        id: 114,
        brand: 'Lab.Q.',
        name: 'Güneş Kremi - SPF50',
        price: 790,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 115,
        brand: 'Lab.Q.',
        name: 'Göz Kremi',
        price: 1290,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 116,
        brand: 'Lab.Q.',
        name: 'Tonik - Yüz',
        price: 690,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 117,
        brand: 'Lab.Q.',
        name: 'Peeling - Yüz',
        price: 890,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 118,
        brand: 'Lab.Q.',
        name: 'Maske - Yüz',
        price: 590,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 119,
        brand: 'Lab.Q.',
        name: 'Dudak Kremi',
        price: 290,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: null
    },
    {
        id: 120,
        brand: 'Lab.Q.',
        name: 'Fırça Seti',
        price: 1290,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1522338242992-e1a55daa48f0?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
        badge: 'new'
    },
    {
        id: 121,
        brand: 'Lab.Q.',
        name: 'Parfüm - Kadın',
        price: 3490,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 122,
        brand: 'Lab.Q.',
        name: 'Parfüm - Erkek',
        price: 3490,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 123,
        brand: 'Lab.Q.',
        name: 'Deodorant - Roll-On',
        price: 390,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    {
        id: 124,
        brand: 'Lab.Q.',
        name: 'Şampuan - Premium',
        price: 590,
        category: 'kozmetik',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1595425970377-c970029bf94e?w=800&q=80',
        badge: null
    },
    // Ev & Yaşam Kategorisi - Ek Ürünler (20+ olacak)
    {
        id: 125,
        brand: 'Lab.Q.',
        name: 'Yastık - Premium',
        price: 1290,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: 'new'
    },
    {
        id: 126,
        brand: 'Lab.Q.',
        name: 'Battaniye - Yün',
        price: 1990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 127,
        brand: 'Lab.Q.',
        name: 'Nevresim - Premium',
        price: 2490,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 128,
        brand: 'Lab.Q.',
        name: 'Perde - İpek',
        price: 3490,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 129,
        brand: 'Lab.Q.',
        name: 'Halı - Premium',
        price: 5990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: 'new'
    },
    {
        id: 130,
        brand: 'Lab.Q.',
        name: 'Mum - Lüks',
        price: 490,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 131,
        brand: 'Lab.Q.',
        name: 'Vazo - Seramik',
        price: 890,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 132,
        brand: 'Lab.Q.',
        name: 'Tabak Seti - Premium',
        price: 1290,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 133,
        brand: 'Lab.Q.',
        name: 'Bardak Seti - Kristal',
        price: 1490,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: 'new'
    },
    {
        id: 134,
        brand: 'Lab.Q.',
        name: 'Çarşaf - Premium',
        price: 990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 135,
        brand: 'Lab.Q.',
        name: 'Havlu Seti - Premium',
        price: 1790,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 136,
        brand: 'Lab.Q.',
        name: 'Yorgan - Yün',
        price: 2990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 137,
        brand: 'Lab.Q.',
        name: 'Yatak Başlığı - Premium',
        price: 3990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 138,
        brand: 'Lab.Q.',
        name: 'Masa Örtüsü - İpek',
        price: 1890,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 139,
        brand: 'Lab.Q.',
        name: 'Paspas - Premium',
        price: 690,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 140,
        brand: 'Lab.Q.',
        name: 'Çerçeve - Altın',
        price: 890,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: 'new'
    },
    {
        id: 141,
        brand: 'Lab.Q.',
        name: 'Süs Eşyası - Premium',
        price: 1290,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 142,
        brand: 'Lab.Q.',
        name: 'Saat - Duvar',
        price: 2990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 143,
        brand: 'Lab.Q.',
        name: 'Ayna - Premium',
        price: 1990,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: null
    },
    {
        id: 144,
        brand: 'Lab.Q.',
        name: 'Lamba - Masa',
        price: 1490,
        category: 'ev-yasam',
        image: 'https://images.unsplash.com/photo-1631889993954-0d6a2373ee88?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        badge: 'new'
    },
    // Outlet Kategorisi - Ek Ürünler (20+ olacak)
    {
        id: 145,
        brand: 'Lab.Q.',
        name: 'Outlet - Bluz',
        price: 990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 146,
        brand: 'Lab.Q.',
        name: 'Outlet - Pantolon',
        price: 1290,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1591047139829-91fce7753a94?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
        badge: null
    },
    {
        id: 147,
        brand: 'Lab.Q.',
        name: 'Outlet - Ceket',
        price: 1990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 148,
        brand: 'Lab.Q.',
        name: 'Outlet - Ayakkabı',
        price: 1490,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 149,
        brand: 'Lab.Q.',
        name: 'Outlet - Çanta',
        price: 1790,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        badge: null
    },
    {
        id: 150,
        brand: 'Lab.Q.',
        name: 'Outlet - Kazak',
        price: 890,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: null
    },
    {
        id: 151,
        brand: 'Lab.Q.',
        name: 'Outlet - Gömlek',
        price: 790,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
        badge: null
    },
    {
        id: 152,
        brand: 'Lab.Q.',
        name: 'Outlet - Mont',
        price: 2490,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 153,
        brand: 'Lab.Q.',
        name: 'Outlet - Etek',
        price: 690,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        badge: null
    },
    {
        id: 154,
        brand: 'Lab.Q.',
        name: 'Outlet - Tişört',
        price: 490,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
        badge: null
    },
    {
        id: 155,
        brand: 'Lab.Q.',
        name: 'Outlet - Sweatshirt',
        price: 990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: null
    },
    {
        id: 156,
        brand: 'Lab.Q.',
        name: 'Outlet - Bot',
        price: 1990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 157,
        brand: 'Lab.Q.',
        name: 'Outlet - Çizme',
        price: 1790,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1608256246200-53e6092ff716?w=800&q=80',
        badge: null
    },
    {
        id: 158,
        brand: 'Lab.Q.',
        name: 'Outlet - Spor Ayakkabı',
        price: 1290,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        badge: null
    },
    {
        id: 159,
        brand: 'Lab.Q.',
        name: 'Outlet - Yelek',
        price: 1190,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 160,
        brand: 'Lab.Q.',
        name: 'Outlet - Hırka',
        price: 1090,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
        badge: 'limited'
    },
    {
        id: 161,
        brand: 'Lab.Q.',
        name: 'Outlet - Blazer',
        price: 1990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 162,
        brand: 'Lab.Q.',
        name: 'Outlet - Takım',
        price: 2990,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        badge: null
    },
    {
        id: 163,
        brand: 'Lab.Q.',
        name: 'Outlet - Şort',
        price: 590,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        badge: null
    },
    {
        id: 164,
        brand: 'Lab.Q.',
        name: 'Outlet - Pantolon',
        price: 1190,
        category: 'outlet',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        imageHover: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        badge: 'limited'
    }
];

// Kategori İsimleri
const categoryNames = {
    'all': 'Tüm Ürünler',
    'kadin': 'Kadın',
    'erkek': 'Erkek',
    'cocuk': 'Çocuk',
    'ev-yasam': 'Ev & Yaşam',
    'outlet': 'Outlet',
    'kozmetik': 'Kozmetik',
    'ayakkabi-canta': 'Ayakkabı & Çanta'
};

// Sepet
let cart = []; // {product: {...}, quantity: number}
let cartCount = 0;

// DOM Elementleri
const productsGrid = document.getElementById('productsGrid');
const productsTitle = document.getElementById('productsTitle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const cartCountElement = document.querySelector('.cart-count');
const categoryLinks = document.querySelectorAll('.category-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const productModalOverlay = document.getElementById('productModalOverlay');
const productModalContent = document.getElementById('productModalContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const cartModalOverlay = document.getElementById('cartModalOverlay');
const cartModalContent = document.getElementById('cartModalContent');
const cartModalCloseBtn = document.getElementById('cartModalCloseBtn');
const cartBtn = document.querySelector('.cart-btn');

// Popüler Ürünleri Getir (Anasayfa için)
function getFeaturedProducts() {
    // Badge'i "new" olan ürünleri öncelikle al, yoksa rastgele seç
    const newProducts = products.filter(p => p.badge === 'new');
    const featuredCount = 12;
    
    if (newProducts.length >= featuredCount) {
        // Yeni ürünlerden rastgele seç
        return shuffleArray([...newProducts]).slice(0, featuredCount);
    } else {
        // Yeni ürünler + rastgele ürünler
        const remaining = featuredCount - newProducts.length;
        const otherProducts = products.filter(p => p.badge !== 'new');
        const randomProducts = shuffleArray([...otherProducts]).slice(0, remaining);
        return [...newProducts, ...randomProducts];
    }
}

// Array karıştırma fonksiyonu
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Ürünleri Render Etme
function renderProducts(productsToRender = products, category = 'all', isHomePage = false) {
    // Fade out animasyonu
    productsGrid.style.opacity = '0';
    productsGrid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        productsGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                    <p style="font-size: 1.2rem; color: var(--color-dark-gray);">Bu kategoride henüz ürün bulunmamaktadır.</p>
                </div>
            `;
        } else {
            productsToRender.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        }
        
        // Başlık güncelleme
        if (productsTitle) {
            if (isHomePage || category === 'all') {
                productsTitle.textContent = 'Öne Çıkan Ürünler';
            } else {
                productsTitle.textContent = categoryNames[category] || 'Ürünler';
            }
        }
        
        // Fade in animasyonu
        productsGrid.style.opacity = '1';
        productsGrid.style.transform = 'translateY(0)';
    }, 200);
}

// Ürün Kartı Oluşturma
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;
    
    const badgeHTML = product.badge 
        ? `<span class="product-badge ${product.badge}">${product.badge === 'new' ? 'Yeni' : 'Tükenmek Üzere'}</span>`
        : '';
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image" data-hover="${product.imageHover || product.image}">
            ${badgeHTML}
            <div class="product-actions">
                <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Hızlı Ekle</button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatPrice(product.price)} TL</div>
        </div>
    `;
    
    // Hover efekti için görsel değiştirme
    const productImage = card.querySelector('.product-image');
    const originalSrc = product.image;
    const hoverSrc = product.imageHover || product.image;
    
    card.addEventListener('mouseenter', () => {
        productImage.src = hoverSrc;
    });
    
    card.addEventListener('mouseleave', () => {
        productImage.src = originalSrc;
    });
    
    // Ürün kartına tıklama - Modal aç
    card.addEventListener('click', (e) => {
        // Buton tıklamalarını hariç tut
        if (!e.target.closest('.quick-add-btn')) {
            openProductModal(product.id);
        }
    });
    
    return card;
}

// Fiyat Formatlama
function formatPrice(price) {
    return new Intl.NumberFormat('tr-TR').format(price);
}

// Sepete Ekleme
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Sepette bu ürün var mı kontrol et
        const existingItem = cart.find(item => item.product.id === productId);
        
        if (existingItem) {
            // Varsa miktarı artır
            existingItem.quantity++;
        } else {
            // Yoksa yeni ekle
            cart.push({ product: product, quantity: 1 });
        }
        
        cartCount++;
        updateCartCount();
        
        // Kısa bir bildirim göster
        showNotification(`${product.name} sepete eklendi`);
    }
}

// Sepet Sayısını Güncelleme
function updateCartCount() {
    // Toplam ürün sayısını hesapla
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        if (cartCount > 0) {
            cartCountElement.style.display = 'flex';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}

// Sepet Modalını Açma
function openCartModal() {
    renderCart();
    cartModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Sepet Modalını Kapatma
function closeCartModal() {
    cartModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Sepeti Render Etme
function renderCart() {
    if (!cartModalContent) return;
    
    if (cart.length === 0) {
        cartModalContent.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <div class="cart-empty-text">Sepetiniz Boş</div>
                <div class="cart-empty-subtext">Alışverişe başlamak için ürünleri keşfedin</div>
            </div>
        `;
        return;
    }
    
    let cartHTML = '<div class="cart-items">';
    
    cart.forEach((item, index) => {
        const product = item.product;
        const quantity = item.quantity;
        const itemTotal = product.price * quantity;
        
        cartHTML += `
            <div class="cart-item" data-cart-index="${index}">
                <div class="cart-item-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-brand">${product.brand}</div>
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-price">${formatPrice(itemTotal)} TL</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="cart-item-quantity-btn" onclick="decreaseQuantity(${index})">−</button>
                        <span class="cart-item-quantity-value">${quantity}</span>
                        <button class="cart-item-quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">Kaldır</button>
                </div>
            </div>
        `;
    });
    
    cartHTML += '</div>';
    
    // Sepet özeti
    const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    const shipping = subtotal >= 500 ? 0 : 50; // 500 TL üzeri ücretsiz kargo
    const total = subtotal + shipping;
    
    cartHTML += `
        <div class="cart-summary">
            <div class="cart-summary-row">
                <span class="cart-summary-label">Ara Toplam</span>
                <span class="cart-summary-value">${formatPrice(subtotal)} TL</span>
            </div>
            <div class="cart-summary-row">
                <span class="cart-summary-label">Kargo</span>
                <span class="cart-summary-value">${shipping === 0 ? 'Ücretsiz' : formatPrice(shipping) + ' TL'}</span>
            </div>
            <div class="cart-summary-row total">
                <span class="cart-summary-label">Toplam</span>
                <span class="cart-summary-value">${formatPrice(total)} TL</span>
            </div>
        </div>
        <div class="cart-actions">
            <button class="cart-action-btn cart-action-btn-primary" onclick="checkout()">Ödemeye Geç</button>
            <button class="cart-action-btn cart-action-btn-secondary" onclick="clearCart()">Sepeti Temizle</button>
        </div>
    `;
    
    cartModalContent.innerHTML = cartHTML;
}

// Miktar Artırma
function increaseQuantity(index) {
    if (cart[index]) {
        cart[index].quantity++;
        cartCount++;
        updateCartCount();
        renderCart();
    }
}

// Miktar Azaltma
function decreaseQuantity(index) {
    if (cart[index]) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            cartCount--;
        } else {
            // Miktar 1 ise ürünü sepetten çıkar
            removeFromCart(index);
            return;
        }
        updateCartCount();
        renderCart();
    }
}

// Sepetten Ürün Kaldırma
function removeFromCart(index) {
    if (cart[index]) {
        const product = cart[index].product;
        cartCount -= cart[index].quantity;
        cart.splice(index, 1);
        updateCartCount();
        renderCart();
        showNotification(`${product.name} sepetten kaldırıldı`);
    }
}

// Sepeti Temizleme
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Sepetinizdeki tüm ürünleri kaldırmak istediğinize emin misiniz?')) {
        cart = [];
        cartCount = 0;
        updateCartCount();
        renderCart();
        showNotification('Sepet temizlendi');
    }
}

// Ödemeye Geçme (Simülasyon)
function checkout() {
    if (cart.length === 0) {
        showNotification('Sepetiniz boş!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const shipping = total >= 500 ? 0 : 50;
    const finalTotal = total + shipping;
    
    showNotification(`Ödeme sayfasına yönlendiriliyorsunuz... Toplam: ${formatPrice(finalTotal)} TL`);
    // Gerçek uygulamada burada ödeme sayfasına yönlendirme yapılır
}

// Global scope'a ekle (onclick için)
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.checkout = checkout;

// Bildirim Gösterme
function showNotification(message) {
    // Basit bir bildirim oluştur
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #000;
        color: #fff;
        padding: 1rem 2rem;
        border-radius: 4px;
        z-index: 10000;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Mobil Menü Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// URL'den kategoriyi oku
function getCategoryFromURL() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p);
    const categoryFromPath = pathParts[pathParts.length - 1] || '';
    
    // Kategori mapping
    const categoryMap = {
        'kadin': 'kadin',
        'erkek': 'erkek',
        'cocuk': 'cocuk',
        'ev-yasam': 'ev-yasam',
        'outlet': 'outlet',
        'kozmetik': 'kozmetik',
        'ayakkabi-canta': 'ayakkabi-canta'
    };
    
    return categoryMap[categoryFromPath] || null;
}

// Kategori Filtreleme Fonksiyonu
function filterProductsByCategory(category, updateURL = true) {
    // Aktif kategoriyi vurgula (navbar)
    categoryLinks.forEach(l => l.classList.remove('active'));
    const activeNavLink = document.querySelector(`.category-link[data-category="${category}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
    
    // Mobil menü linklerini de güncelle
    mobileNavLinks.forEach(l => l.classList.remove('active'));
    const activeMobileLink = document.querySelector(`.mobile-nav-link[data-category="${category}"]`);
    if (activeMobileLink) {
        activeMobileLink.classList.add('active');
    }
    
    // Mobil menüyü kapat
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // URL'i güncelle (History API ile)
    if (updateURL) {
        try {
            const newUrl = category === 'all' || !category
                ? '/'
                : `/${category}`;
            // Sadece HTTP/HTTPS protokolünde çalışır, file:// protokolünde çalışmaz
            if (window.location.protocol !== 'file:') {
                window.history.pushState({ category: category }, '', newUrl);
            }
            
            // Sayfa başlığını güncelle
            const categoryTitle = category === 'all' || !category
                ? 'Lab.Q. - Lüks Moda & Yaşam'
                : `${categoryNames[category]} - Lab.Q.`;
            document.title = categoryTitle;
        } catch (e) {
            // Dosya sistemi üzerinden açıldığında hata olabilir, görmezden gel
            console.log('URL güncelleme atlandı (dosya sistemi modu)');
        }
    }
    
    // Ürünleri filtrele ve göster
    if (category === 'all' || !category) {
        // Anasayfa - sadece popüler ürünler
        const featuredProducts = getFeaturedProducts();
        renderProducts(featuredProducts, 'all', true);
    } else {
        // Kategori sayfası - o kategorinin tüm ürünleri
        const filteredProducts = products.filter(p => p.category === category);
        renderProducts(filteredProducts, category, false);
    }
    
    // Ürün bölümüne kaydır
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Navbar Kategori Linkleri
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        filterProductsByCategory(category);
    });
});

// Mobil Menü Kategori Linkleri
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        if (category) {
            filterProductsByCategory(category);
        }
    });
});

// Kategori Kartlarına Tıklama
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.dataset.category;
        if (category) {
            filterProductsByCategory(category);
        }
    });
});

// Sticky Header Efekti
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('.newsletter-input').value;
        if (email) {
            showNotification('Bülten aboneliğiniz başarıyla oluşturuldu!');
            newsletterForm.reset();
        }
    });
}

// Sepet Butonuna Tıklama
if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openCartModal();
    });
}

// Sepet Modal Kapatma Event Listeners
if (cartModalCloseBtn) {
    cartModalCloseBtn.addEventListener('click', closeCartModal);
}

if (cartModalOverlay) {
    cartModalOverlay.addEventListener('click', (e) => {
        if (e.target === cartModalOverlay) {
            closeCartModal();
        }
    });
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartModalOverlay.classList.contains('active')) {
            closeCartModal();
        }
    });
}

// Logo'ya tıklama - Anasayfaya git
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        filterProductsByCategory('all');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Hero butonuna tıklama - Ürünlere kaydır
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// Ürün Detay Modalını Açma
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const badgeHTML = product.badge 
        ? `<span class="product-modal-badge ${product.badge}">${product.badge === 'new' ? 'Yeni' : 'Tükenmek Üzere'}</span>`
        : '';
    
    // Ürün açıklaması ve detayları (simüle edilmiş)
    const descriptions = {
        'kadin': 'Şık ve zarif tasarımı ile kadınların vazgeçilmezi. Yüksek kaliteli malzemelerden üretilmiştir.',
        'erkek': 'Klasik ve modern tasarımın buluştuğu bu ürün, erkek gardırobunun olmazsa olmazıdır.',
        'cocuk': 'Çocuklar için özel olarak tasarlanmış, sağlıklı ve konforlu ürün.',
        'ayakkabi-canta': 'Premium kalitede deri ve malzemelerden üretilmiştir. Uzun ömürlü ve şık tasarım.',
        'kozmetik': 'Cilt dostu, doğal içerikli, profesyonel kalitede kozmetik ürünü.',
        'ev-yasam': 'Ev dekorasyonunuzu zenginleştirecek, lüks ve kaliteli ev eşyası.',
        'outlet': 'Özel fiyatlı outlet ürünü. Stoklar sınırlıdır.'
    };
    
    const sizes = {
        'kadin': ['XS', 'S', 'M', 'L', 'XL'],
        'erkek': ['S', 'M', 'L', 'XL', 'XXL'],
        'cocuk': ['4 Yaş', '6 Yaş', '8 Yaş', '10 Yaş', '12 Yaş'],
        'ayakkabi-canta': ['36', '37', '38', '39', '40', '41', '42'],
        'kozmetik': ['Tek Boy'],
        'ev-yasam': ['Tek Boy'],
        'outlet': ['S', 'M', 'L']
    };
    
    const colors = ['Siyah', 'Beyaz', 'Bej', 'Kahverengi', 'Gri'];
    
    productModalContent.innerHTML = `
        <div class="product-modal-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-modal-image">
            ${badgeHTML}
        </div>
        <div class="product-modal-info">
            <div class="product-modal-brand">${product.brand}</div>
            <h2 class="product-modal-name">${product.name}</h2>
            <div class="product-modal-price">${formatPrice(product.price)} TL</div>
            <p class="product-modal-description">
                ${descriptions[product.category] || 'Yüksek kaliteli malzemelerden üretilmiş, şık ve zarif tasarıma sahip ürün.'}
            </p>
            <div class="product-modal-details">
                <h4>Ürün Detayları</h4>
                <ul>
                    <li><strong>Kategori:</strong> ${categoryNames[product.category] || product.category}</li>
                    <li><strong>Bedenler:</strong> ${sizes[product.category]?.join(', ') || 'Tek Boy'}</li>
                    <li><strong>Renkler:</strong> ${colors.slice(0, 3).join(', ')}</li>
                    <li><strong>Malzeme:</strong> Premium Kalite</li>
                    <li><strong>Bakım:</strong> Özel Bakım Gerektirir</li>
                    <li><strong>Kargo:</strong> 500 TL ve üzeri ücretsiz kargo</li>
                </ul>
            </div>
            <div class="product-modal-actions">
                <button class="product-modal-btn product-modal-btn-primary" onclick="addToCartFromModal(${product.id})">
                    Sepete Ekle
                </button>
                <button class="product-modal-btn product-modal-btn-secondary" onclick="addToFavorites(${product.id})">
                    Favorilere Ekle
                </button>
            </div>
        </div>
    `;
    
    productModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Ürün Detay Modalını Kapatma
function closeProductModal() {
    productModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Modal Kapatma Event Listeners
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
}

if (productModalOverlay) {
    productModalOverlay.addEventListener('click', (e) => {
        if (e.target === productModalOverlay) {
            closeProductModal();
        }
    });
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productModalOverlay.classList.contains('active')) {
            closeProductModal();
        }
    });
}

// Modal'dan Sepete Ekleme
function addToCartFromModal(productId) {
    addToCart(productId);
    showNotification('Ürün sepete eklendi!');
}

// Favorilere Ekleme (Simülasyon)
function addToFavorites(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} favorilere eklendi!`);
    }
}

// Sayfa Yüklendiğinde URL'den kategoriyi yükle
document.addEventListener('DOMContentLoaded', () => {
    const categoryFromURL = getCategoryFromURL();
    
    if (categoryFromURL) {
        // Kategori sayfası - o kategorinin tüm ürünlerini göster
        filterProductsByCategory(categoryFromURL, false);
    } else {
        // Anasayfa - sadece popüler ürünleri göster
        const featuredProducts = getFeaturedProducts();
        renderProducts(featuredProducts, 'all', true);
    }
    
    updateCartCount();
    
    // Browser geri/ileri butonları için event listener
    window.addEventListener('popstate', (e) => {
        const categoryFromURL = getCategoryFromURL();
        if (categoryFromURL) {
            filterProductsByCategory(categoryFromURL, false);
        } else {
            const featuredProducts = getFeaturedProducts();
            renderProducts(featuredProducts, 'all', true);
        }
    });
    
    // CSS Animasyonları Ekle
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .category-link.active {
            color: var(--color-gold);
        }
        
        .category-link.active::after {
            width: 100%;
        }
        
        .products-grid {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .mobile-nav-link.active {
            color: var(--color-gold);
        }
    `;
    document.head.appendChild(style);
});

