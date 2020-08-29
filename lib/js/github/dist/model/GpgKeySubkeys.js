"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyType = _interopRequireDefault(require("./AnyType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GpgKeySubkeys model module.
 * @module model/GpgKeySubkeys
 * @version 0.0.5
 */
var GpgKeySubkeys = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GpgKeySubkeys</code>.
   * @alias module:model/GpgKeySubkeys
   */
  function GpgKeySubkeys() {
    _classCallCheck(this, GpgKeySubkeys);

    GpgKeySubkeys.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GpgKeySubkeys, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GpgKeySubkeys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GpgKeySubkeys} obj Optional instance to populate.
     * @return {module:model/GpgKeySubkeys} The populated <code>GpgKeySubkeys</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GpgKeySubkeys();

        if (data.hasOwnProperty('can_certify')) {
          obj['can_certify'] = _ApiClient["default"].convertToType(data['can_certify'], 'Boolean');
        }

        if (data.hasOwnProperty('can_encrypt_comms')) {
          obj['can_encrypt_comms'] = _ApiClient["default"].convertToType(data['can_encrypt_comms'], 'Boolean');
        }

        if (data.hasOwnProperty('can_encrypt_storage')) {
          obj['can_encrypt_storage'] = _ApiClient["default"].convertToType(data['can_encrypt_storage'], 'Boolean');
        }

        if (data.hasOwnProperty('can_sign')) {
          obj['can_sign'] = _ApiClient["default"].convertToType(data['can_sign'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], [_AnyType["default"]]);
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('key_id')) {
          obj['key_id'] = _ApiClient["default"].convertToType(data['key_id'], 'String');
        }

        if (data.hasOwnProperty('primary_key_id')) {
          obj['primary_key_id'] = _ApiClient["default"].convertToType(data['primary_key_id'], 'Number');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('raw_key')) {
          obj['raw_key'] = _ApiClient["default"].convertToType(data['raw_key'], 'String');
        }

        if (data.hasOwnProperty('subkeys')) {
          obj['subkeys'] = _ApiClient["default"].convertToType(data['subkeys'], [_AnyType["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GpgKeySubkeys;
}();
/**
 * @member {Boolean} can_certify
 */


GpgKeySubkeys.prototype['can_certify'] = undefined;
/**
 * @member {Boolean} can_encrypt_comms
 */

GpgKeySubkeys.prototype['can_encrypt_comms'] = undefined;
/**
 * @member {Boolean} can_encrypt_storage
 */

GpgKeySubkeys.prototype['can_encrypt_storage'] = undefined;
/**
 * @member {Boolean} can_sign
 */

GpgKeySubkeys.prototype['can_sign'] = undefined;
/**
 * @member {String} created_at
 */

GpgKeySubkeys.prototype['created_at'] = undefined;
/**
 * @member {Array.<module:model/AnyType>} emails
 */

GpgKeySubkeys.prototype['emails'] = undefined;
/**
 * @member {String} expires_at
 */

GpgKeySubkeys.prototype['expires_at'] = undefined;
/**
 * @member {Number} id
 */

GpgKeySubkeys.prototype['id'] = undefined;
/**
 * @member {String} key_id
 */

GpgKeySubkeys.prototype['key_id'] = undefined;
/**
 * @member {Number} primary_key_id
 */

GpgKeySubkeys.prototype['primary_key_id'] = undefined;
/**
 * @member {String} public_key
 */

GpgKeySubkeys.prototype['public_key'] = undefined;
/**
 * @member {String} raw_key
 */

GpgKeySubkeys.prototype['raw_key'] = undefined;
/**
 * @member {Array.<module:model/AnyType>} subkeys
 */

GpgKeySubkeys.prototype['subkeys'] = undefined;
var _default = GpgKeySubkeys;
exports["default"] = _default;