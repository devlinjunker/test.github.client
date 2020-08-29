"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstallationTokenPermissions = _interopRequireDefault(require("./InstallationTokenPermissions"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstallationToken model module.
 * @module model/InstallationToken
 * @version 0.0.5
 */
var InstallationToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallationToken</code>.
   * Authentication token for a GitHub App installed on a user or org.
   * @alias module:model/InstallationToken
   */
  function InstallationToken() {
    _classCallCheck(this, InstallationToken);

    InstallationToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallationToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallationToken} obj Optional instance to populate.
     * @return {module:model/InstallationToken} The populated <code>InstallationToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallationToken();

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _InstallationTokenPermissions["default"].constructFromObject(data['permissions']);
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

  return InstallationToken;
}();
/**
 * @member {String} expires_at
 */


InstallationToken.prototype['expires_at'] = undefined;
/**
 * @member {module:model/InstallationTokenPermissions} permissions
 */

InstallationToken.prototype['permissions'] = undefined;
/**
 * @member {Array.<module:model/Repository>} repositories
 */

InstallationToken.prototype['repositories'] = undefined;
/**
 * @member {module:model/InstallationToken.RepositorySelectionEnum} repository_selection
 */

InstallationToken.prototype['repository_selection'] = undefined;
/**
 * @member {String} single_file
 */

InstallationToken.prototype['single_file'] = undefined;
/**
 * @member {String} token
 */

InstallationToken.prototype['token'] = undefined;
/**
 * Allowed values for the <code>repository_selection</code> property.
 * @enum {String}
 * @readonly
 */

InstallationToken['RepositorySelectionEnum'] = {
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
var _default = InstallationToken;
exports["default"] = _default;