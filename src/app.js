import './style.css';
// window.alert('app.js!');

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

let sections = document.getElementsByClassName('gallery-container'); //画像グループ
let backgroundImage = document.getElementById('backgroundImage'); // 背景領域

// セクションごとにViewer.jsを適用する
for (let i = 0; i < sections.length; i++) {
  let section = sections[i];

  // スライドショーの表示設定
  new Viewer(section, {
    button: true,
    navbar: false,
    title: true,
    transition: true,
    minZoomRatio: 0.15,
    maxZoomRatio: 1.5,
    viewMode: 1,
    interval: 9000,

    // 画像が新たに表示されたとき or 切り替わったときに背景を設定する処理

    // Viewer.jsのイベント関数
    viewed(event) {
      // 現在表示中の画像を取得
      let currentImage = this.viewer.image; // "this.viewer.image"現在表示されている画像プロパティ

      // 現在表示中の画像と、背景要素を両方取得しているとき
      if (currentImage && backgroundImage) {
        backgroundImage.style.backgroundImage = `url("${currentImage.src}")`;
        // id"backgroundImage"のhtml要素が入った変数の、backgroundImageというcssプロパティに、現在表示中の画像URLを反映させる。
      }
    },
  });
}
