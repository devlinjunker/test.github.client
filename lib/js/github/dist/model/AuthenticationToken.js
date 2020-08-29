"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthenticationToken model module.
 * @module model/AuthenticationToken
 * @version 0.0.5
 */
var AuthenticationToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthenticationToken</code>.
   * Authentication Token
   * @alias module:model/AuthenticationToken
   * @param expiresAt {Date} The time this token expires
   * @param token {String} The token used for authentication
   */
  function AuthenticationToken(expiresAt, token) {
    _classCallCheck(this, AuthenticationToken);

    AuthenticationToken.initialize(this, expiresAt, token);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthenticationToken, null, [{
    key: "initialize",
    value: function initialize(obj, expiresAt, token) {
      obj['expires_at'] = expiresAt;
      obj['token'] = token;
    }
    /**
     * Constructs a <code>AuthenticationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenticationToken} obj Optional instance to populate.
     * @return {module:model/AuthenticationToken} The populated <code>AuthenticationToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthenticationToken();

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'Date');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], Object);
        }

        if (data.hasOwnProperty('repositories')) {
          obj['repositories'] = _ApiClient["default"].convertToType(data['repositories'], [_Repository["default"]]);
        }

        if (data.hasOwnProperty('repository_selection')) {
          obj['repository_selection'] = _ApiClient["default"].convertToType(data['repository_selection'], 'String');
        }

        if (data.hasOwnProperty('single_file')) {
          obj['single_file'] = _ApiClient["default"].convertToType(data['single_file'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthenticationToken;
}();
/**
 * The time this token expires
 * @member {Date} expires_at
 */


AuthenticationToken.prototype['expires_at'] = undefined;
/**
 * @member {Object} permissions
 */

AuthenticationToken.prototype['permissions'] = undefined;
/**
 * The repositories this token has access to
 * @member {Array.<module:model/Repository>} repositories
 */

AuthenticationToken.prototype['repositories'] = undefined;
/**
 * Describe whether all repositories have been selected or there's a selection involved
 * @member {module:model/AuthenticationToken.RepositorySelectionEnum} repository_selection
 */

AuthenticationToken.prototype['repository_selection'] = undefined;
/**
 * @member {String} single_file
 */

AuthenticationToken.prototype['single_file'] = undefined;
/**
 * The token used for authentication
 * @member {String} token
 */

AuthenticationToken.prototype['token'] = undefined;
/**
 * Allowed values for the <code>repository_selection</code> property.
 * @enum {String}
 * @readonly
 */

AuthenticationToken['RepositorySelectionEnum'] = {
  /**
   * value: "all"
   * @const
   */
  "all": "all",

  /**
   * value: "selected"
   * @const
   */
  "selected": "selected"
};
var _default = AuthenticationToken;
exports["default"] = _default;