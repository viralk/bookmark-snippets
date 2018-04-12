// Highlight all elements in the page
javascript: (function () {
  document.body.innerHTML += "<style>*{outline: 1px solid #FF0000 !important;}</style>";
})();

// Highlight all links in the page
javascript: (function () {
  var _a = document.getElementsByTagName('a');
  for (var i = 0; i < _a.length; i++) {
      _a[i].style.outline = "2px solid #FF0000";
  }
})();

// Hide all iframes in the page. The iframes are set as hidden to preserve page layout
javascript: (function () {
  var _iframe = document.getElementsByTagName('iframe');
  for (let i = 0; i < _iframe.length; i++) {
    _iframe[i].style.visibility = 'hidden';
  }
})();

// Hide all images in the page. The images are set as hidden to preserve page layout
// the last line also removes the images used as a background
javascript: (function () {
  var _img = document.getElementsByTagName('img');
  var _canvas = document.getElementsByTagName('canvas');
  var _svg = document.getElementsByTagName('svg');
  for (var i = 0; i < _img.length; i++) {
    _img[i].style.visibility = "hidden";
  }
  for (var i = 0; i < _canvas.length; i++) {
    _canvas[i].style.visibility = "hidden";
  }
  for (var i = 0; i < _svg.length; i++) {
    _svg[i].style.visibility = "hidden";
  }
  // Removes the images used as background
  document.body.innerHTML += "<style>*{background-image: none !important;}</style>";
})();

// Check all checkbox in the page
javascript: (function () {
  var _inputs = document.getElementsByTagName('input');
  for (var i = 0; i < _inputs.length; i++) {
    if (_inputs[i].type.toLowerCase() == 'checkbox') {
      _inputs[i].checked = true;
    }
  }
})();
