# Node.js Products Backend

تطبيق Backend بسيط باستخدام Node.js يعرض بيانات المنتجات من ملف JSON عبر صفحات ويب ديناميكية.

## المميزات

- عرض جميع المنتجات في صفحة رئيسية (Overview).
- عرض تفاصيل كل منتج في صفحة منفصلة (Product).
- استخدام قوالب HTML ديناميكية.
- إدارة البيانات من ملف JSON.

## طريقة التشغيل

1. **تثبيت Node.js:**  
   تأكد من وجود Node.js على جهازك. [تحميل Node.js](https://nodejs.org/)

2. **تشغيل التطبيق:**  
   افتح الطرفية داخل مجلد المشروع وشغل الأمر التالي:
   ```bash
   node index.js
   ```

3. **زيارة التطبيق:**  
   افتح المتصفح وادخل على:
   ```
   http://127.0.0.1:8000/
   ```

## هيكل المشروع

```
first_pro/
│
├── index.js
├── data.json
├── modules/
│   └── replaceTemplate.js
├── template-card.html
├── template-overview.html
├── template-product.html
└── README.md
```


---

تم تطويره بواسطة Node.js
