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
 * The InstallationPermissions model module.
 * @module model/InstallationPermissions
 * @version 0.0.5
 */
var InstallationPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallationPermissions</code>.
   * @alias module:model/InstallationPermissions
   */
  function InstallationPermissions() {
    _classCallCheck(this, InstallationPermissions);

    InstallationPermissions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallationPermissions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallationPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallationPermissions} obj Optional instance to populate.
     * @return {module:model/InstallationPermissions} The populated <code>InstallationPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallationPermissions();

        if (data.hasOwnProperty('checks')) {
          obj['checks'] = _ApiClient["default"].convertToType(data['checks'], 'String');
        }

        if (data.hasOwnProperty('contents')) {
          obj['contents'] = _ApiClient["default"].convertToType(data['contents'], 'String');
        }

        if (data.hasOwnProperty('deployments')) {
          obj['deployments'] = _ApiClient["default"].convertToType(data['deployments'], 'String');
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], 'String');
        }

        if (data.hasOwnProperty('organization_administration')) {
          obj['organization_administration'] = _ApiClient["default"].convertToType(data['organization_administration'], 'String');
        }

        if (data.hasOwnProperty('pull_requests')) {
          obj['pull_requests'] = _ApiClient["default"].convertToType(data['pull_requests'], 'String');
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _ApiClient["default"].convertToType(data['statuses'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstallationPermissions;
}();
/**
 * @member {String} checks
 */


InstallationPermissions.prototype['checks'] = undefined;
/**
 * @member {String} contents
 */

InstallationPermissions.prototype['contents'] = undefined;
/**
 * @member {String} deployments
 */

InstallationPermissions.prototype['deployments'] = undefined;
/**
 * @member {String} issues
 */

InstallationPermissions.prototype['issues'] = undefined;
/**
 * @member {String} metadata
 */

InstallationPermissions.prototype['metadata'] = undefined;
/**
 * @member {String} organization_administration
 */

InstallationPermissions.prototype['organization_administration'] = undefined;
/**
 * @member {String} pull_requests
 */

InstallationPermissions.prototype['pull_requests'] = undefined;
/**
 * @member {String} statuses
 */

InstallationPermissions.prototype['statuses'] = undefined;
var _default = InstallationPermissions;
exports["default"] = _default;