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
 * The CredentialAuthorization model module.
 * @module model/CredentialAuthorization
 * @version 0.0.5
 */
var CredentialAuthorization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CredentialAuthorization</code>.
   * Credential Authorization
   * @alias module:model/CredentialAuthorization
   * @param credentialAuthorizedAt {Date} Date when the credential was authorized for use.
   * @param credentialId {Number} Unique identifier for the credential.
   * @param credentialType {String} Human-readable description of the credential type.
   * @param login {String} User login that owns the underlying credential.
   */
  function CredentialAuthorization(credentialAuthorizedAt, credentialId, credentialType, login) {
    _classCallCheck(this, CredentialAuthorization);

    CredentialAuthorization.initialize(this, credentialAuthorizedAt, credentialId, credentialType, login);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CredentialAuthorization, null, [{
    key: "initialize",
    value: function initialize(obj, credentialAuthorizedAt, credentialId, credentialType, login) {
      obj['credential_authorized_at'] = credentialAuthorizedAt;
      obj['credential_id'] = credentialId;
      obj['credential_type'] = credentialType;
      obj['login'] = login;
    }
    /**
     * Constructs a <code>CredentialAuthorization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialAuthorization} obj Optional instance to populate.
     * @return {module:model/CredentialAuthorization} The populated <code>CredentialAuthorization</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CredentialAuthorization();

        if (data.hasOwnProperty('credential_accessed_at')) {
          obj['credential_accessed_at'] = _ApiClient["default"].convertToType(data['credential_accessed_at'], 'Date');
        }

        if (data.hasOwnProperty('credential_authorized_at')) {
          obj['credential_authorized_at'] = _ApiClient["default"].convertToType(data['credential_authorized_at'], 'Date');
        }

        if (data.hasOwnProperty('credential_id')) {
          obj['credential_id'] = _ApiClient["default"].convertToType(data['credential_id'], 'Number');
        }

        if (data.hasOwnProperty('credential_type')) {
          obj['credential_type'] = _ApiClient["default"].convertToType(data['credential_type'], 'String');
        }

        if (data.hasOwnProperty('fingerprint')) {
          obj['fingerprint'] = _ApiClient["default"].convertToType(data['fingerprint'], 'String');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], ['String']);
        }

        if (data.hasOwnProperty('token_last_eight')) {
          obj['token_last_eight'] = _ApiClient["default"].convertToType(data['token_last_eight'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CredentialAuthorization;
}();
/**
 * Date when the credential was last accessed. May be null if it was never accessed
 * @member {Date} credential_accessed_at
 */


CredentialAuthorization.prototype['credential_accessed_at'] = undefined;
/**
 * Date when the credential was authorized for use.
 * @member {Date} credential_authorized_at
 */

CredentialAuthorization.prototype['credential_authorized_at'] = undefined;
/**
 * Unique identifier for the credential.
 * @member {Number} credential_id
 */

CredentialAuthorization.prototype['credential_id'] = undefined;
/**
 * Human-readable description of the credential type.
 * @member {String} credential_type
 */

CredentialAuthorization.prototype['credential_type'] = undefined;
/**
 * Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key.
 * @member {String} fingerprint
 */

CredentialAuthorization.prototype['fingerprint'] = undefined;
/**
 * User login that owns the underlying credential.
 * @member {String} login
 */

CredentialAuthorization.prototype['login'] = undefined;
/**
 * List of oauth scopes the token has been granted.
 * @member {Array.<String>} scopes
 */

CredentialAuthorization.prototype['scopes'] = undefined;
/**
 * Last eight characters of the credential. Only included in responses with credential_type of personal access token.
 * @member {String} token_last_eight
 */

CredentialAuthorization.prototype['token_last_eight'] = undefined;
var _default = CredentialAuthorization;
exports["default"] = _default;