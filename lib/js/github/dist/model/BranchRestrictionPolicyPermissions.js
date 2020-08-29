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
 * The BranchRestrictionPolicyPermissions model module.
 * @module model/BranchRestrictionPolicyPermissions
 * @version 0.0.5
 */
var BranchRestrictionPolicyPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchRestrictionPolicyPermissions</code>.
   * @alias module:model/BranchRestrictionPolicyPermissions
   */
  function BranchRestrictionPolicyPermissions() {
    _classCallCheck(this, BranchRestrictionPolicyPermissions);

    BranchRestrictionPolicyPermissions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchRestrictionPolicyPermissions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchRestrictionPolicyPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicyPermissions} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicyPermissions} The populated <code>BranchRestrictionPolicyPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchRestrictionPolicyPermissions();

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

  return BranchRestrictionPolicyPermissions;
}();
/**
 * @member {String} contents
 */


BranchRestrictionPolicyPermissions.prototype['contents'] = undefined;
/**
 * @member {String} issues
 */

BranchRestrictionPolicyPermissions.prototype['issues'] = undefined;
/**
 * @member {String} metadata
 */

BranchRestrictionPolicyPermissions.prototype['metadata'] = undefined;
/**
 * @member {String} single_file
 */

BranchRestrictionPolicyPermissions.prototype['single_file'] = undefined;
var _default = BranchRestrictionPolicyPermissions;
exports["default"] = _default;