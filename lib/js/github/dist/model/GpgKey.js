"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GpgKeyEmails = _interopRequireDefault(require("./GpgKeyEmails"));

var _GpgKeySubkeys = _interopRequireDefault(require("./GpgKeySubkeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GpgKey model module.
 * @module model/GpgKey
 * @version 0.0.5
 */
var GpgKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GpgKey</code>.
   * A unique encryption key
   * @alias module:model/GpgKey
   * @param canCertify {Boolean} 
   * @param canEncryptComms {Boolean} 
   * @param canEncryptStorage {Boolean} 
   * @param canSign {Boolean} 
   * @param createdAt {Date} 
   * @param emails {Array.<module:model/GpgKeyEmails>} 
   * @param expiresAt {Date} 
   * @param id {Number} 
   * @param keyId {String} 
   * @param primaryKeyId {Number} 
   * @param publicKey {String} 
   * @param rawKey {String} 
   * @param subkeys {Array.<module:model/GpgKeySubkeys>} 
   */
  function GpgKey(canCertify, canEncryptComms, canEncryptStorage, canSign, createdAt, emails, expiresAt, id, keyId, primaryKeyId, publicKey, rawKey, subkeys) {
    _classCallCheck(this, GpgKey);

    GpgKey.initialize(this, canCertify, canEncryptComms, canEncryptStorage, canSign, createdAt, emails, expiresAt, id, keyId, primaryKeyId, publicKey, rawKey, subkeys);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GpgKey, null, [{
    key: "initialize",
    value: function initialize(obj, canCertify, canEncryptComms, canEncryptStorage, canSign, createdAt, emails, expiresAt, id, keyId, primaryKeyId, publicKey, rawKey, subkeys) {
      obj['can_certify'] = canCertify;
      obj['can_encrypt_comms'] = canEncryptComms;
      obj['can_encrypt_storage'] = canEncryptStorage;
      obj['can_sign'] = canSign;
      obj['created_at'] = createdAt;
      obj['emails'] = emails;
      obj['expires_at'] = expiresAt;
      obj['id'] = id;
      obj['key_id'] = keyId;
      obj['primary_key_id'] = primaryKeyId;
      obj['public_key'] = publicKey;
      obj['raw_key'] = rawKey;
      obj['subkeys'] = subkeys;
    }
    /**
     * Constructs a <code>GpgKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GpgKey} obj Optional instance to populate.
     * @return {module:model/GpgKey} The populated <code>GpgKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GpgKey();

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
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('emails')) {
          obj['emails'] = _ApiClient["default"].convertToType(data['emails'], [_GpgKeyEmails["default"]]);
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'Date');
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
          obj['subkeys'] = _ApiClient["default"].convertToType(data['subkeys'], [_GpgKeySubkeys["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GpgKey;
}();
/**
 * @member {Boolean} can_certify
 */


GpgKey.prototype['can_certify'] = undefined;
/**
 * @member {Boolean} can_encrypt_comms
 */

GpgKey.prototype['can_encrypt_comms'] = undefined;
/**
 * @member {Boolean} can_encrypt_storage
 */

GpgKey.prototype['can_encrypt_storage'] = undefined;
/**
 * @member {Boolean} can_sign
 */

GpgKey.prototype['can_sign'] = undefined;
/**
 * @member {Date} created_at
 */

GpgKey.prototype['created_at'] = undefined;
/**
 * @member {Array.<module:model/GpgKeyEmails>} emails
 */

GpgKey.prototype['emails'] = undefined;
/**
 * @member {Date} expires_at
 */

GpgKey.prototype['expires_at'] = undefined;
/**
 * @member {Number} id
 */

GpgKey.prototype['id'] = undefined;
/**
 * @member {String} key_id
 */

GpgKey.prototype['key_id'] = undefined;
/**
 * @member {Number} primary_key_id
 */

GpgKey.prototype['primary_key_id'] = undefined;
/**
 * @member {String} public_key
 */

GpgKey.prototype['public_key'] = undefined;
/**
 * @member {String} raw_key
 */

GpgKey.prototype['raw_key'] = undefined;
/**
 * @member {Array.<module:model/GpgKeySubkeys>} subkeys
 */

GpgKey.prototype['subkeys'] = undefined;
var _default = GpgKey;
exports["default"] = _default;