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
 * The AppInstallationsInstallationIdAccessTokensPermissions model module.
 * @module model/AppInstallationsInstallationIdAccessTokensPermissions
 * @version 0.0.5
 */
var AppInstallationsInstallationIdAccessTokensPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AppInstallationsInstallationIdAccessTokensPermissions</code>.
   * @alias module:model/AppInstallationsInstallationIdAccessTokensPermissions
   */
  function AppInstallationsInstallationIdAccessTokensPermissions() {
    _classCallCheck(this, AppInstallationsInstallationIdAccessTokensPermissions);

    AppInstallationsInstallationIdAccessTokensPermissions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AppInstallationsInstallationIdAccessTokensPermissions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AppInstallationsInstallationIdAccessTokensPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppInstallationsInstallationIdAccessTokensPermissions} obj Optional instance to populate.
     * @return {module:model/AppInstallationsInstallationIdAccessTokensPermissions} The populated <code>AppInstallationsInstallationIdAccessTokensPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AppInstallationsInstallationIdAccessTokensPermissions();

        if (data.hasOwnProperty('contents')) {
          obj['contents'] = _ApiClient["default"].convertToType(data['contents'], 'String');
        }

        if (data.hasOwnProperty('def_not_a_repo')) {
          obj['def_not_a_repo'] = _ApiClient["default"].convertToType(data['def_not_a_repo'], 'String');
        }

        if (data.hasOwnProperty('deployments')) {
          obj['deployments'] = _ApiClient["default"].convertToType(data['deployments'], 'String');
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], 'String');
        }

        if (data.hasOwnProperty('single_file')) {
          obj['single_file'] = _ApiClient["default"].convertToType(data['single_file'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AppInstallationsInstallationIdAccessTokensPermissions;
}();
/**
 * @member {String} contents
 */


AppInstallationsInstallationIdAccessTokensPermissions.prototype['contents'] = undefined;
/**
 * @member {String} def_not_a_repo
 */

AppInstallationsInstallationIdAccessTokensPermissions.prototype['def_not_a_repo'] = undefined;
/**
 * @member {String} deployments
 */

AppInstallationsInstallationIdAccessTokensPermissions.prototype['deployments'] = undefined;
/**
 * @member {String} issues
 */

AppInstallationsInstallationIdAccessTokensPermissions.prototype['issues'] = undefined;
/**
 * @member {String} single_file
 */

AppInstallationsInstallationIdAccessTokensPermissions.prototype['single_file'] = undefined;
var _default = AppInstallationsInstallationIdAccessTokensPermissions;
exports["default"] = _default;