angular.module('recipesApp')
.component('navbar', {
  template: `
    <div class="navBar">
      <div class="logo">
        <h3>Recipe App</h3>
      </div>
      <div class="navLink" ui-sref="home">
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1"
           id="Layer_1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 87.9 84"
           style="enable-background:new 0 0 87.9 84;" xml:space="preserve" class="SVGicon">
        <g transform="translate(0,-952.36218)">
          <path d="M44,952.4c-0.4,0-0.8,0.2-1.3,0.5l-42,36c-0.6,0.5-0.9,1.5-0.6,2.2c0.3,0.8,1.1,1.3,1.9,1.3h11v42c0,1,1,2,2,2h58
            c1,0,2-1,2-2v-42h11c0.8,0,1.6-0.5,1.9-1.3s0-1.7-0.6-2.2l-42-36C44.8,952.5,44.4,952.4,44,952.4z M44,957l36.6,31.4H73
            c-1,0-2,1-2,2v42H17v-42c0-1-1-2-2-2H7.4L44,957z M30,994.4v12h12v-12H30z M46,994.4v12h12v-12H46z M30,1010.4v12h12v-12H30z
             M46,1010.4v12h12v-12H46z"/>
        </g>
        </svg>
        <h4>Home</h4>
      </div>
      <div class="navLink" ui-sref="recipes">
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 70.7 90.5" style="enable-background:new 0 0 70.7 90.5;" xml:space="preserve" class="SVGicon">
        <g>
          <path d="M59,24.7c0-4.4-3.6-8-8-8c-2,0-3.8,0.8-5.2,2c-1.4-1.2-3.2-2-5.2-2s-3.9,0.8-5.3,2c-1.4-1.2-3.2-2-5.3-2c-4.4,0-8,3.6-8,8
            c0,3.3,2,6.2,4.9,7.4v12.6h27.2V32.1C57,30.9,59,28,59,24.7z"/>
          <rect x="26.8" y="48.7" width="27.2" height="4"/>
        </g>
        <path d="M8.5,0C3.8,0,0,3.8,0,8.5v62.4c0,4.7,3.8,8.5,8.5,8.5h23.2v11.2l8.5-5l8.5,5V79.3h17.7V67.1h4.3V0H8.5z M61.7,74.6h-13v-3.4
          h-17v3.4H8.5c-2.1,0-3.8-1.7-3.8-3.8S6.4,67,8.5,67h53.2V74.6z M66,62.4H14.8V4.7H66V62.4z"/>
        </svg>
        <h4>Recipes</h4>
      </div>
      <div class="navLink" ui-sref="form">
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 70.7 90.5" style="enable-background:new 0 0 70.7 90.5;" xml:space="preserve" class="SVGicon">
        <g>
          <path d="M8.5,0C3.8,0,0,3.8,0,8.5v62.4c0,4.7,3.8,8.5,8.5,8.5h23.2v11.2l8.5-5l8.5,5V79.3h17.7V67.1h4.3V0H8.5z M61.7,74.6h-13
            v-3.4h-17v3.4H8.5c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8h53.2V74.6z M66,62.4H14.8V4.7H66V62.4z"/>
          <polygon points="35.4,55.1 45.4,55.1 45.4,41.5 59,41.5 59,31.5 45.4,31.5 45.4,18 35.4,18 35.4,31.5 21.9,31.5 21.9,41.5
            35.4,41.5   "/>
        </g>
        </svg>
        <h4>Add Recipe</h4>
      </div>
    </div>
    `
});