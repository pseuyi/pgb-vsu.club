' ';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _Base2 = require('./Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js

var Object3D = function (_Base) {
  _inherits(Object3D, _Base);

  _createClass(Object3D, [{
    key: 'getChildContext',


    // fixme: +props.obj
    // static propTypes = {
    //   obj: PropTypes.object,
    // };

    value: function getChildContext() {
      return {
        parent: this.obj
      };
    }
  }]);

  function Object3D() {
    var _Object$getPrototypeO;

    _classCallCheck(this, Object3D);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Object3D)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.obj = new _three2.default.Object3D(); // placeholder

    // Component name as default Object name
    // friendly to threejs-inspector
    _this.obj.name = _this.constructor.name;
    return _this;
  }

  _createClass(Object3D, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
      if (this.context.parent) this.context.parent.add(this.obj);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.context.parent) this.context.parent.remove(this.obj);
    }

    // updating position & rotation

  }, {
    key: 'update',
    value: function update() {
      var _props = this.props;
      var position = _props.position;
      var rotation = _props.rotation;

      if (position) Object.assign(this.obj.position, position);
      if (rotation) Object.assign(this.obj.rotation, rotation);
    }
  }]);

  return Object3D;
}(_Base3.default);

Object3D.contextTypes = {
  parent: _react.PropTypes.object
};
Object3D.childContextTypes = {
  parent: _react.PropTypes.object
};
Object3D.propTypes = _extends({}, _Base3.default.propTypes, {
  position: _react.PropTypes.object,
  rotation: _react.PropTypes.object
});
exports.default = Object3D;