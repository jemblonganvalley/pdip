## Proses Build web pdiperjuangan.id

1. Silakan jalankan build di dalam root directory dengan cara

```
yarn build
```

2. Setelah proses build berjalan dengan baik, silakan buka folder bernama **_build_** dan buka file bernama **_index.html_**.
3. Rename file **\*index.html** menjadi **_main.html_**
4. Silakan buka file tersebut, dan file akan tersusun berantakan, sikan gunakan linter atau pretier.
5. **Cut** bagian bawah file :

```
    <script src="/static/js/2.99a3e30e.chunk.js"></script>
    <script src="/static/js/main.c827149f.chunk.js"></script>
  </body>
</html>
```

dan pindahkan ke sebuah file **_/layouts/main.html_** <br /> 

6. Copy bagian atas head di file **_/build/main.html_**:

```
<link href="/static/css/2.94071387.chunk.css" rel="stylesheet" />
<link href="/static/css/main.b17a95b6.chunk.css" rel="stylesheet" />
```
dan replace ke **_/layouts/main.html_**

7. Hapus baris dari ```<!DOCTYPE html >``` sampai ```<body>``` pada file **/build/main.html**
intinya kita menyisakan area body dari file tersebut, karena head dan penutup body sudah ada di file **/layout/main.html**