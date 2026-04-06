/**
 * Bootstrap 5 自動インジェクション（注入）スクリプト
 */
(function injectBootstrap() {

    const VERSION = '5'; 
    const CDN_URL = `https://cdn.jsdelivr.net/npm/bootstrap@${VERSION}/dist/css/bootstrap.min.css`;

    // 2. すでに読み込まれていないかチェック（二重読み込み防止）
    if (!document.querySelector(`link[href*="bootstrap"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = CDN_URL;
        
        // 3. <head> の一番上に追加（自分のCSSより先に読み込ませる）
        document.head.prepend(link);
        
        console.log(`✅ Bootstrap v${VERSION} を動的に注入しました！`);
    }
})();