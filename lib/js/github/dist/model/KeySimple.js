"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The KeySimple model module.
 * @module model/KeySimple
 * @version 0.0.5
 */
var KeySimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>KeySimple</code>.
   * Key Simple
   * @alias module:model/KeySimple
   * @param id {Number} 
   * @param key {String} 
   */
  function KeySimple(id, key) {
    _classCallCheck(this, KeySimple);

    KeySimple.initialize(this, id, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(KeySimple, null, [{
    key: "initialize",
    value: function initialize(obj, id, key) {
      obj['id'] = id;
      obj['key'] = key;
    }
    /**
     * Constructs a <code>KeySimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeySimple} obj Optional instance to populate.
     * @return {module:model/KeySimple} The populated <code>KeySimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new KeySimple();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return KeySimple;
}();
/**
 * @member {Number} id
 */


KeySimple.prototype['id'] = undefined;
/**
 * @member {String} key
 */

KeySimple.prototype['key'] = undefined;
var _default = KeySimple;
exports["default"] = _default;