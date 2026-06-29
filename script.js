// 画面のHTMLがすべて読み込まれたらスタート！
window.addEventListener('DOMContentLoaded', () => {
    
    // ① 動かしたいターゲット（h1タグ）をロックオン！
    const mainTitle = document.querySelector('.main-visual-content h1');
    
    // ② 0.5秒（500ミリ秒）だけ待つタイマーを起動
    setTimeout(() => {
        // ③ 0.5秒経ったら、h1に「fade-in」というシールをペタッと貼る！
        mainTitle.classList.add('fade-in');
    }, 500);

});