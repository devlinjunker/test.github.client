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
 * The ActionsPublicKey model module.
 * @module model/ActionsPublicKey
 * @version 0.0.5
 */
var ActionsPublicKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionsPublicKey</code>.
   * The public key used for setting Actions Secrets.
   * @alias module:model/ActionsPublicKey
   * @param key {String} The Base64 encoded public key.
   * @param keyId {String} The identifier for the key.
   */
  function ActionsPublicKey(key, keyId) {
    _classCallCheck(this, ActionsPublicKey);

    ActionsPublicKey.initialize(this, key, keyId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionsPublicKey, null, [{
    key: "initialize",
    value: function initialize(obj, key, keyId) {
      obj['key'] = key;
      obj['key_id'] = keyId;
    }
    /**
     * Constructs a <code>ActionsPublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsPublicKey} obj Optional instance to populate.
     * @return {module:model/ActionsPublicKey} The populated <code>ActionsPublicKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionsPublicKey();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
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

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActionsPublicKey;
}();
/**
 * @member {String} created_at
 */


ActionsPublicKey.prototype['created_at'] = undefined;
/**
 * @member {Number} id
 */

ActionsPublicKey.prototype['id'] = undefined;
/**
 * The Base64 encoded public key.
 * @member {String} key
 */

ActionsPublicKey.prototype['key'] = undefined;
/**
 * The identifier for the key.
 * @member {String} key_id
 */

ActionsPublicKey.prototype['key_id'] = undefined;
/**
 * @member {String} title
 */

ActionsPublicKey.prototype['title'] = undefined;
/**
 * @member {String} url
 */

ActionsPublicKey.prototype['url'] = undefined;
var _default = ActionsPublicKey;
exports["default"] = _default;