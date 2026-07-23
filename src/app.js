import './style.css';
// window.alert('app.js!');

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

let sections = document.getElementsByClassName('gallery-container');

for (let i = 0; i < sections.length; i++) {
  let section = sections[i];

  new Viewer(section, {
    button: true,
    navbar: false,
    title: true,
    transition: true,
    minZoomRatio: 0.15,
    maxZoomRatio: 1.5,
    viewMode: 1,
    interval: 9000,
  });
}
