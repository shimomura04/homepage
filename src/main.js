// ======== formのバリデーション処理 ========
import './style.css';
import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');
validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '最大入力文字数は15文字です。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'email',
      errorMessage: '形式が正しくありません。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
      errorMessage:
        'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力してください。',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18以上の数字を入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '150以下の数字を入力してください。',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
  ])
  .onSuccess((event) => {
    const formData = new FormData(event.target);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    console.log(formData.get('age'));
    console.log(formData.get('address'));
  });

// ===== swiperの処理 ========
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

let title1;
// let title2;
let swiper_status;

// swiper1の処理
const swiper1 = new Swiper('.swiper_1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper_1 .swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper_1 .swiper-button-next',
    prevEl: '.swiper_1 .swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper_1 .swiper-scrollbar',
  },

  on: {
    init: function () {
      title1 = document.createTextNode('スライド1を表示しています。');
      swiper_status = document.getElementById('swiper_status_1');
      swiper_status.appendChild(title1);
      // console.log(title);
    },
  },
});

swiper1.on('slideChange', function () {
  let slide = swiper1.realIndex + 1;

  if (title1) {
    title1.remove();
  }

  title1 = document.createTextNode('スライド' + slide + 'を表示しています');
  swiper_status = document.getElementById('swiper_status_1');
  swiper_status.appendChild(title1);
  // console.log(title);
});

// swiper2の処理
const swiper2 = new Swiper('.swiper_2', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper_2 .swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper_2 .swiper-button-next',
    prevEl: '.swiper_2 .swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper_2 .swiper-scrollbar',
  },
});

// swiper2のタイトル表示処理
const swiper2_titles = ['1のイラスト', '2のイラスト', '3のイラスト'];

let titleElement2 = document.createTextNode(swiper2_titles[swiper2.realIndex]);

let titleContainer2 = document.getElementById('swiper_status_2');

titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  titleElement2.remove();

  titleElement2 = document.createTextNode(swiper2_titles[swiper2.realIndex]);

  titleContainer2.appendChild(titleElement2);
});
