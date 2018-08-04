webpackJsonp([0],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'footer',
          { className: 'py-5 bg-black', id: 'footerSec' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              { className: 'm-0 text-center text-white footerText' },
              '\xA9 2018 Copyright OctaviusMoore. All Rights Reserved.'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;


var app = document.getElementById('app');
var footer = document.getElementById('footer');

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: 'masthead text-center text-white' },
          _react2.default.createElement(
            'div',
            { className: 'masthead-content' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'h1',
                { className: 'masthead-heading mb-0' },
                'The Polar Bay'
              ),
              _react2.default.createElement(
                'h2',
                { className: 'masthead-subheading mb-0' },
                'welcome'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement('div', { className: 'col-lg-12' })
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;


var app = document.getElementById('app');
var head = document.getElementById('header');

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactGoogleMaps = __webpack_require__(130);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Maps = function (_React$Component) {
  _inherits(Maps, _React$Component);

  function Maps() {
    _classCallCheck(this, Maps);

    var _this = _possibleConstructorReturn(this, (Maps.__proto__ || Object.getPrototypeOf(Maps)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Maps, [{
    key: 'render',
    value: function render() {
      var markers = this.props.markers || [];
      return _react2.default.createElement(
        'div',
        { id: 'locationSec' },
        _react2.default.createElement(
          _reactGoogleMaps.GoogleMap,
          {
            defaultZoom: 12,
            defaultCenter: { lat: 42.416, lng: -82.920 } },
          _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: 42.416, lng: -82.920 } })
        )
      );
    }
  }]);

  return Maps;
}(_react2.default.Component);

var app = document.getElementById('app');
var maps = document.getElementById('maps');

exports.default = (0, _reactGoogleMaps.withGoogleMap)(Maps);

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menus = function (_React$Component) {
  _inherits(Menus, _React$Component);

  function Menus() {
    _classCallCheck(this, Menus);

    var _this = _possibleConstructorReturn(this, (Menus.__proto__ || Object.getPrototypeOf(Menus)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Menus, [{
    key: 'randomPics',
    value: function randomPics() {
      var pic1 = document.getElementsByClassName('square1').src = "04.jpg";
      var listPics = [pic1];
      return listPics[Math.floor(Math.random() * listPics.length)];
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container', id: 'menuSec' },
          _react2.default.createElement(
            'div',
            { className: 'row align-items-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6 order-lg-2' },
              _react2.default.createElement(
                'div',
                { className: 'p-5 imgGroup' },
                _react2.default.createElement('img', { className: 'img-fluid rounded-0 square1', src: '04.jpg', alt: '' }),
                _react2.default.createElement('img', { className: 'img-fluid rounded-0 square2', src: '08.jpg', alt: '' }),
                _react2.default.createElement('img', { className: 'img-fluid rounded-0 square3', src: '09.jpg', alt: '' }),
                _react2.default.createElement('img', { className: 'img-fluid rounded-0 square4', src: '10.jpg', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6 order-lg-1' },
              _react2.default.createElement(
                'div',
                { className: 'p-5' },
                _react2.default.createElement('div', { className: 'bg-circle-3 bg-circle' }),
                _react2.default.createElement('div', { className: 'bg-circle-4 bg-circle' }),
                _react2.default.createElement(
                  'h2',
                  { className: 'display-4 enjoy' },
                  'Enjoy! ',
                  _react2.default.createElement('br', null),
                  'Our Menus'
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'menuList' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'lunch menu'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'dinner menu'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'sushi'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'desserts'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'wine list'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'martinis'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Menus;
}(_react2.default.Component);

exports.default = Menus;


var app = document.getElementById('app');
var menus = document.getElementById('menus');

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-expand-lg navbar-dark navbar-custom fixed-top' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              { className: 'navbar-brand' },
              'The Polar Bay'
            ),
            _react2.default.createElement(
              'button',
              { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarResponsive', 'aria-controls': 'navbarResponsive', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
              _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'navbarResponsive' },
              _react2.default.createElement(
                'ul',
                { className: 'navbar-nav ml-auto' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', href: '#menuSec' },
                    'Menus'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', href: '#aboutSec' },
                    'About'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', href: '#locationSec' },
                    'Location'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', href: '#contactSec' },
                    'Contact'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;


var app = document.getElementById('app');
var nav = document.getElementById('navbar');

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reservations = function (_React$Component) {
  _inherits(Reservations, _React$Component);

  function Reservations() {
    _classCallCheck(this, Reservations);

    var _this = _possibleConstructorReturn(this, (Reservations.__proto__ || Object.getPrototypeOf(Reservations)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Reservations, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'bg-black', id: 'contactSec' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row align-items-center' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-6 order-lg-2' },
                _react2.default.createElement(
                  'div',
                  { className: 'p-5' },
                  _react2.default.createElement(
                    'h6',
                    { className: 'display-4' },
                    'HOURS'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lunch Monday - Friday: 11:30pm - 2:30pm',
                    _react2.default.createElement('br', null),
                    'Dinner Monday - Thursday: 5:00pm - 10:00pm Friday: 5:00pm - 10:30pm',
                    _react2.default.createElement('br', null),
                    'Saturday: 12:00pm - 10:30pm Sunday: 12:00pm - 10:00pm'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-6 order-lg-1' },
                _react2.default.createElement(
                  'div',
                  { className: 'p-5' },
                  _react2.default.createElement(
                    'h6',
                    { className: 'display-4' },
                    'LOCATION'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'The Polar Bay Restuarant and Sushi Bar',
                    _react2.default.createElement('br', null),
                    '1234 main st.',
                    _react2.default.createElement('br', null),
                    'Detroit, MI 12345',
                    _react2.default.createElement('br', null),
                    'Phone: 313-555-1212'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Reservations;
}(_react2.default.Component);

exports.default = Reservations;


var app = document.getElementById('app');
var reservations = document.getElementById('reservations');

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section1 = function (_React$Component) {
  _inherits(Section1, _React$Component);

  function Section1() {
    _classCallCheck(this, Section1);

    var _this = _possibleConstructorReturn(this, (Section1.__proto__ || Object.getPrototypeOf(Section1)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Section1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row align-items-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6 order-lg-2' },
              _react2.default.createElement(
                'div',
                { className: 'p-5' },
                _react2.default.createElement('img', { className: 'img-fluid rounded-circle img1', src: 'https://shiro-restaurant.com/wp-content/uploads/2017/02/salmon-on-the-beach.jpg', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6 order-lg-1', id: 'aboutSec' },
              _react2.default.createElement(
                'div',
                { className: 'p-5' },
                _react2.default.createElement(
                  'h2',
                  { className: 'display-4' },
                  'Welcome To ',
                  _react2.default.createElement('br', null),
                  ' The Polar Bay'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Our varied menu offers breakfast, lunch, luxury afternoon tea and evening meals based on tapas in addition to other special dishes prepared by our highly skilled kitchen team.'
                ),
                _react2.default.createElement('div', { className: 'bg-circle-1 bg-circle s1' })
              )
            )
          )
        )
      );
    }
  }]);

  return Section1;
}(_react2.default.Component);

exports.default = Section1;


var app = document.getElementById('app');
var sec1 = document.getElementById('section1');

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section2 = function (_React$Component) {
  _inherits(Section2, _React$Component);

  function Section2() {
    _classCallCheck(this, Section2);

    var _this = _possibleConstructorReturn(this, (Section2.__proto__ || Object.getPrototypeOf(Section2)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Section2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row align-items-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'div',
                { className: 'p-5' },
                _react2.default.createElement('img', { className: 'img-fluid rounded-circle', src: '07.jpg', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                'div',
                { className: 'p-5' },
                _react2.default.createElement(
                  'h2',
                  { className: 'display-4' },
                  'Dine With Us!'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'The Polar Bay  was built in 1929, a gift from Charles Rogers to his future wife Harriet Thornton and, is a resturant and sushi bar. We specialise in the best produce from Gwynedd, Wales and the world and offer breakfast, lunch, fantastically presented afternoon teas and evening meals based on tapas and other inspirational meals.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Section2;
}(_react2.default.Component);

exports.default = Section2;


var app = document.getElementById('app');
var sec2 = document.getElementById('section2');

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section3 = function (_React$Component) {
  _inherits(Section3, _React$Component);

  function Section3() {
    _classCallCheck(this, Section3);

    var _this = _possibleConstructorReturn(this, (Section3.__proto__ || Object.getPrototypeOf(Section3)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Section3, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row align-items-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6 order-lg-2' },
              _react2.default.createElement(
                'div',
                { className: 'p-5' },
                _react2.default.createElement('img', { className: 'img-fluid rounded-circle', src: '01.jpg', alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6 order-lg-1' },
              _react2.default.createElement(
                'div',
                { className: 'p-5' },
                _react2.default.createElement(
                  'h2',
                  { className: 'display-4' },
                  'Let there be rock!'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'A casual vibe permeates the atmosphere at The Polar Bay\'s, impressive Audio Visual capabilities, an exquisitely landscaped garden patio and special events and perfomances showcasing talent from the metro detroit area'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Section3;
}(_react2.default.Component);

exports.default = Section3;


var app = document.getElementById('app');
var sec3 = document.getElementById('section3');

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactGoogleMaps = __webpack_require__(130);

var _Navbar = __webpack_require__(232);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Header = __webpack_require__(229);

var _Header2 = _interopRequireDefault(_Header);

var _Section = __webpack_require__(234);

var _Section2 = _interopRequireDefault(_Section);

var _Section3 = __webpack_require__(235);

var _Section4 = _interopRequireDefault(_Section3);

var _Section5 = __webpack_require__(236);

var _Section6 = _interopRequireDefault(_Section5);

var _Menus = __webpack_require__(231);

var _Menus2 = _interopRequireDefault(_Menus);

var _Maps = __webpack_require__(230);

var _Maps2 = _interopRequireDefault(_Maps);

var _Reservations = __webpack_require__(233);

var _Reservations2 = _interopRequireDefault(_Reservations);

var _Footer = __webpack_require__(228);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = { name: "Octavius" };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Section2.default, null),
        _react2.default.createElement(_Section4.default, null),
        _react2.default.createElement(_Section6.default, null),
        _react2.default.createElement(_Menus2.default, null),
        _react2.default.createElement(_Maps2.default, {
          loadingElement: _react2.default.createElement('div', { style: { height: '100%' } }),
          containerElement: _react2.default.createElement('div', { style: { height: '400px' } }),
          mapElement: _react2.default.createElement('div', { style: { height: '100%' } }) }),
        _react2.default.createElement(_Reservations2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;


var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[238]);