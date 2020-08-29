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
 * The Key model module.
 * @module model/Key
 * @version 0.0.5
 */
var Key = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Key</code>.
   * Key
   * @alias module:model/Key
   */
  function Key() {
    _classCallCheck(this, Key);

    Key.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Key, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Key</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Key} obj Optional instance to populate.
     * @return {module:model/Key} The populated <code>Key</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Key();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('key_id')) {
          obj['key_id'] = _ApiClient["default"].convertToType(data['key_id'], 'String');
        }

        if (data.hasOwnProperty('read_only')) {
          obj['read_only'] = _ApiClient["default"].convertToType(data['read_only'], 'Boolean');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Key;
}();
/**
 * @member {Date} created_at
 */


Key.prototype['created_at'] = undefined;
/**
 * @member {Number} id
 */

Key.prototype['id'] = undefined;
/**
 * @member {String} key
 */

Key.prototype['key'] = undefined;
/**
 * @member {String} key_id
 */

Key.prototype['key_id'] = undefined;
/**
 * @member {Boolean} read_only
 */

Key.prototype['read_only'] = undefined;
/**
 * @member {String} title
 */

Key.prototype['title'] = undefined;
/**
 * @member {String} url
 */

Key.prototype['url'] = undefined;
/**
 * @member {Boolean} verified
 */

Key.prototype['verified'] = undefined;
var _default = Key;
exports["default"] = _default;