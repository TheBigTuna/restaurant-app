webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

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
              'a',
              { className: 'navbar-brand', href: '#' },
              'Start Bootstrap'
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
                    { className: 'nav-link', href: '#' },
                    'Sign Up'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', href: '#' },
                    'Log In'
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

_reactDom2.default.render(_react2.default.createElement(Navbar, null), nav);

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

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
                _react2.default.createElement('img', { className: 'img-fluid rounded-circle img1', src: '01.jpg', alt: '' })
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
                  'For those about to rock...'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
                )
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

_reactDom2.default.render(_react2.default.createElement(Section1, null), sec1);

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

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
                _react2.default.createElement('img', { className: 'img-fluid rounded-circle', src: '02.jpg', alt: '' })
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
                  'We salute you!'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
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

_reactDom2.default.render(_react2.default.createElement(Section2, null), sec2);

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

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
                _react2.default.createElement('img', { className: 'img-fluid rounded-circle', src: '03.jpg', alt: '' })
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
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.'
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

_reactDom2.default.render(_react2.default.createElement(Section3, null), sec3);

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Navbar = __webpack_require__(100);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Header = __webpack_require__(99);

var _Header2 = _interopRequireDefault(_Header);

var _Section = __webpack_require__(101);

var _Section2 = _interopRequireDefault(_Section);

var _Section3 = __webpack_require__(102);

var _Section4 = _interopRequireDefault(_Section3);

var _Section5 = __webpack_require__(103);

var _Section6 = _interopRequireDefault(_Section5);

var _Footer = __webpack_require__(98);

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
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;


var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

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
        _react2.default.createElement('footer', { className: 'py-5 bg-black' }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'p',
            { className: 'm-0 text-center text-white small' },
            'Copyright \xA9 Your Website 2018'
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

_reactDom2.default.render(_react2.default.createElement(Footer, null), footer);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

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
                'One Page Wonder'
              ),
              _react2.default.createElement(
                'h2',
                { className: 'masthead-subheading mb-0' },
                'Will Rock Your Socks Off'
              ),
              _react2.default.createElement(
                'a',
                { href: '#', className: 'btn btn-primary btn-xl rounded-pill mt-5' },
                'Learn More'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'bg-circle-1 bg-circle' }),
          _react2.default.createElement('div', { className: 'bg-circle-2 bg-circle' }),
          _react2.default.createElement('div', { className: 'bg-circle-3 bg-circle' }),
          _react2.default.createElement('div', { className: 'bg-circle-4 bg-circle' })
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

_reactDom2.default.render(_react2.default.createElement(Header, null), head);

/***/ })

},[105]);