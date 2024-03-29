import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #2a8642;
    -webkit-font-smoothing: antialiased !important;
  }

  :root {
    $translucentBlack: rgba(0, 0, 0, 0.4);
    $translucentWhite: rgba(255, 255, 255, 0.16);

    $darkGray: #616161;
    $mediumGray: #95a5a6;
    $lightGray: #d2d7d3;
    $extraLightGray: #f9f9f9;

    $divider: #ebebe7;

    $primaryColor: #000000;
    $accentColor: #818181;

    $primaryDisabled: lighten(desaturate($primaryColor, 9.22), 21.96);

    $info: #77ade5;
    $success: #34a853;
    $error: #ea4335;
    $warning: #fbbc05;
    $white: #fff;
    $black: #3c4242;

    $blue-100: #a4c8ed;
    $blue-200: #76ace3;
    $blue-300: #4991da;
    $blue-400: #1b75d1;
    $blue-500: #165ea7;
    $blue-600: #10467d;

    $orange-100: #ffd7a1;
    $orange-200: #ffc471;
    $orange-300: #ffb042;
    $orange-400: #ff9c13;
    $orange-500: #cc7d0f;
    $orange-600: #995e0b;

    $gray-50: #f0f0f0;
    $gray-75: #e8e8e8;
    $gray-100: #d5dbdb;
    $gray-200: #bfc9ca;
    $gray-300: #aab7b8;
    $gray-400: #95a5a6;
    $gray-500: #778485;
    $gray-600: #596364;

    $green-100: #aedcba;
    $green-200: #85cb98;
    $green-300: #5db975;
    $green-400: #34a853;
    $green-500: #2a8642;

    $yellow-100: #fde49b;
    $yellow-200: #fdd769;
    $yellow-300: #fcc937;
    $yellow-400: #fbbc05;
    $yellow-500: #c99604;

    $light-blue-100: #c9def5;
    $light-blue-200: #adceef;
    $light-blue-300: #92bdea;
    $light-blue-400: #77ade5;
    $light-blue-500: #5f8ab7;

    $red-100: #f7b4ae;
    $red-200: #f28e86;
    $red-300: #ee695d;
    $red-400: #ea4335;
    $red-500: #bb362a;

    $z-index-1: 100;
    $z-index-2: 200;
    $z-index-3: 300;
    $z-index-4: 400;
    $z-index-5: 500;
    $z-index-6: 600;
    $z-index-7: 700;
    $z-index-8: 800;
    $z-index-9: 900;
    $z-index-10: 1000;

    $font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    $font-size-base: 16px;
    $font-size-small: 0.8125rem;
    $font-size-extra-small: 0.75rem;
  }
`;
