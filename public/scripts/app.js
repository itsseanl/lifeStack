'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsonProducts = require('./jsonProducts.js');

var _jsonProducts2 = _interopRequireDefault(_jsonProducts);

var _products = require('./components/flexItem/products.js');

var _products2 = _interopRequireDefault(_products);

var _header = require('./components/header/header.js');

var _header2 = _interopRequireDefault(_header);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactModalApp = function (_React$Component) {
  _inherits(ReactModalApp, _React$Component);

  function ReactModalApp(props) {
    _classCallCheck(this, ReactModalApp);

    var _this = _possibleConstructorReturn(this, (ReactModalApp.__proto__ || Object.getPrototypeOf(ReactModalApp)).call(this, props));

    _this.state = {
      products: [{
        "name": "Macbook Air",
        "price": "$999",
        "description": "blahblahblah",
        "image": "/images/mba.png"
      }, {
        "name": "Custom Build",
        "price": "$780",
        "description": "blahblahblah",
        "image": "/images/carbide400c.png"
      }, {
        "name": "HP 25es IPS FHD",
        "price": "$150",
        "description": "blahblahblah",
        "image": "/images/hp25es.png"
      }]
    };
    return _this;
  }

  _createClass(ReactModalApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'appWrapper' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'navbar' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              'Products'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Programs'
            ),
            _react2.default.createElement(
              'li',
              null,
              'About'
            )
          )
        ),
        _react2.default.createElement(_products2.default, { productList: this.state.products })
      );
    }
  }]);

  return ReactModalApp;
}(_react2.default.Component);

var appRoot = document.getElementById('app');
_reactDom2.default.render(_react2.default.createElement(ReactModalApp, null), document.getElementById('app'));
