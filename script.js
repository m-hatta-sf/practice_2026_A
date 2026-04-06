/**
 * Bootstrap 5 自動インジェクション（注入）スクリプト
 */
(function injectBootstrap() {
    const VERSION = '5'; 
    const CDN_URL = `https://cdn.jsdelivr.net/npm/bootstrap@${VERSION}/dist/css/bootstrap.min.css`;

    if (!document.querySelector(`link[href*="bootstrap"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = CDN_URL;
        document.head.prepend(link);
        console.log(`✅ Bootstrap v${VERSION} を動的に注入しました！`);
    }
})();

/**
 * ハンバーガーメニューの開閉処理
 */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // ボタンが存在する場合のみ処理を実行（エラー防止）
    if (hamburger && navMenu) {
        // ハンバーガーボタンをクリックしたときの処理
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // メニュー内のリンクをクリックしたときにメニューを閉じる処理
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});