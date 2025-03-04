/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://megaputra.com', // Ganti dengan domain website Anda
    generateRobotsTxt: true, // Menghasilkan robots.txt secara otomatis
    sitemapSize: 5000, // Batasan jumlah URL per file sitemap
    generateIndexSitemap: false, // Menonaktifkan sitemap index jika tidak diperlukan
    priority: 0.7, // Prioritas default untuk halaman
    changefreq: 'daily', // Frekuensi perubahan halaman
};