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
 * The InstallationTokenPermissions model module.
 * @module model/InstallationTokenPermissions
 * @version 0.0.5
 */
var InstallationTokenPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallationTokenPermissions</code>.
   * @alias module:model/InstallationTokenPermissions
   */
  function InstallationTokenPermissions() {
    _classCallCheck(this, InstallationTokenPermissions);

    InstallationTokenPermissions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallationTokenPermissions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallationTokenPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallationTokenPermissions} obj Optional instance to populate.
     * @return {module:model/InstallationTokenPermissions} The populated <code>InstallationTokenPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallationTokenPermissions();

        if (data.hasOwnProperty('contents')) {
          obj['contents'] = _ApiClient["default"].convertToType(data['contents'], 'String');
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], 'String');
        }

        if (data.hasOwnProperty('single_file')) {
          obj['single_file'] = _ApiClient["default"].convertToType(data['single_file'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstallationTokenPermissions;
}();
/**
 * @member {String} contents
 */


InstallationTokenPermissions.prototype['contents'] = undefined;
/**
 * @member {String} issues
 */

InstallationTokenPermissions.prototype['issues'] = undefined;
/**
 * @member {String} metadata
 */

InstallationTokenPermissions.prototype['metadata'] = undefined;
/**
 * @member {String} single_file
 */

InstallationTokenPermissions.prototype['single_file'] = undefined;
var _default = InstallationTokenPermissions;
exports["default"] = _default;