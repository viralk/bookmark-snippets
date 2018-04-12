// Highlight all elements in the page
javascript: (function () {
  document.body.innerHTML += "<style>*{outline: solid #f00 1px !important;}</style>";
})();

// Highlight all links in the page
javascript: (function () {
  var _a = document.getElementsByTagName('a');
  for (var i = 0; i < _a.length; i++) {
      _a[i].style.border = "2px solid #FF0000";
  }
})();

// Remove all iframes in the page
javascript: (function () {
  var _iframe = document.getElementsByTagName('iframe');
  for (let i = 0; i < _iframe.length; i++) {
    _iframe[i].style.display = 'none';
  }
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
