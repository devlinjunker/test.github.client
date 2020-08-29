"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationGrantApp = _interopRequireDefault(require("./ApplicationGrantApp"));

var _ScopedInstallation = _interopRequireDefault(require("./ScopedInstallation"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Authorization model module.
 * @module model/Authorization
 * @version 0.0.5
 */
var Authorization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Authorization</code>.
   * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
   * @alias module:model/Authorization
   * @param app {module:model/ApplicationGrantApp} 
   * @param createdAt {Date} 
   * @param fingerprint {String} 
   * @param hashedToken {String} 
   * @param id {Number} 
   * @param note {String} 
   * @param noteUrl {String} 
   * @param scopes {Array.<String>} A list of scopes that this authorization is in.
   * @param token {String} 
   * @param tokenLastEight {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Authorization(app, createdAt, fingerprint, hashedToken, id, note, noteUrl, scopes, token, tokenLastEight, updatedAt, url) {
    _classCallCheck(this, Authorization);

    Authorization.initialize(this, app, createdAt, fingerprint, hashedToken, id, note, noteUrl, scopes, token, tokenLastEight, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Authorization, null, [{
    key: "initialize",
    value: function initialize(obj, app, createdAt, fingerprint, hashedToken, id, note, noteUrl, scopes, token, tokenLastEight, updatedAt, url) {
      obj['app'] = app;
      obj['created_at'] = createdAt;
      obj['fingerprint'] = fingerprint;
      obj['hashed_token'] = hashedToken;
      obj['id'] = id;
      obj['note'] = note;
      obj['note_url'] = noteUrl;
      obj['scopes'] = scopes;
      obj['token'] = token;
      obj['token_last_eight'] = tokenLastEight;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Authorization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Authorization} obj Optional instance to populate.
     * @return {module:model/Authorization} The populated <code>Authorization</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Authorization();

        if (data.hasOwnProperty('app')) {
          obj['app'] = _ApplicationGrantApp["default"].constructFromObject(data['app']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('fingerprint')) {
          obj['fingerprint'] = _ApiClient["default"].convertToType(data['fingerprint'], 'String');
        }

        if (data.hasOwnProperty('hashed_token')) {
          obj['hashed_token'] = _ApiClient["default"].convertToType(data['hashed_token'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('installation')) {
          obj['installation'] = _ApiClient["default"].convertToType(data['installation'], _ScopedInstallation["default"]);
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('note_url')) {
          obj['note_url'] = _ApiClient["default"].convertToType(data['note_url'], 'String');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], ['String']);
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('token_last_eight')) {
          obj['token_last_eight'] = _ApiClient["default"].convertToType(data['token_last_eight'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return Authorization;
}();
/**
 * @member {module:model/ApplicationGrantApp} app
 */


Authorization.prototype['app'] = undefined;
/**
 * @member {Date} created_at
 */

Authorization.prototype['created_at'] = undefined;
/**
 * @member {String} fingerprint
 */

Authorization.prototype['fingerprint'] = undefined;
/**
 * @member {String} hashed_token
 */

Authorization.prototype['hashed_token'] = undefined;
/**
 * @member {Number} id
 */

Authorization.prototype['id'] = undefined;
/**
 * @member {module:model/ScopedInstallation} installation
 */

Authorization.prototype['installation'] = undefined;
/**
 * @member {String} note
 */

Authorization.prototype['note'] = undefined;
/**
 * @member {String} note_url
 */

Authorization.prototype['note_url'] = undefined;
/**
 * A list of scopes that this authorization is in.
 * @member {Array.<String>} scopes
 */

Authorization.prototype['scopes'] = undefined;
/**
 * @member {String} token
 */

Authorization.prototype['token'] = undefined;
/**
 * @member {String} token_last_eight
 */

Authorization.prototype['token_last_eight'] = undefined;
/**
 * @member {Date} updated_at
 */

Authorization.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Authorization.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

Authorization.prototype['user'] = undefined;
var _default = Authorization;
exports["default"] = _default;