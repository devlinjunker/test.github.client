"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchProtectionAllowDeletions = _interopRequireDefault(require("./BranchProtectionAllowDeletions"));

var _BranchProtectionRequiredStatusChecks = _interopRequireDefault(require("./BranchProtectionRequiredStatusChecks"));

var _BranchRestrictionPolicy = _interopRequireDefault(require("./BranchRestrictionPolicy"));

var _ProtectedBranchAdminEnforced = _interopRequireDefault(require("./ProtectedBranchAdminEnforced"));

var _ProtectedBranchPullRequestReview = _interopRequireDefault(require("./ProtectedBranchPullRequestReview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchProtection model module.
 * @module model/BranchProtection
 * @version 0.0.5
 */
var BranchProtection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchProtection</code>.
   * Branch Protection
   * @alias module:model/BranchProtection
   * @param enabled {Boolean} 
   * @param requiredStatusChecks {module:model/BranchProtectionRequiredStatusChecks} 
   */
  function BranchProtection(enabled, requiredStatusChecks) {
    _classCallCheck(this, BranchProtection);

    BranchProtection.initialize(this, enabled, requiredStatusChecks);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchProtection, null, [{
    key: "initialize",
    value: function initialize(obj, enabled, requiredStatusChecks) {
      obj['enabled'] = enabled;
      obj['required_status_checks'] = requiredStatusChecks;
    }
    /**
     * Constructs a <code>BranchProtection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchProtection} obj Optional instance to populate.
     * @return {module:model/BranchProtection} The populated <code>BranchProtection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchProtection();

        if (data.hasOwnProperty('allow_deletions')) {
          obj['allow_deletions'] = _BranchProtectionAllowDeletions["default"].constructFromObject(data['allow_deletions']);
        }

        if (data.hasOwnProperty('allow_force_pushes')) {
          obj['allow_force_pushes'] = _BranchProtectionAllowDeletions["default"].constructFromObject(data['allow_force_pushes']);
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('enforce_admins')) {
          obj['enforce_admins'] = _ProtectedBranchAdminEnforced["default"].constructFromObject(data['enforce_admins']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('protection_url')) {
          obj['protection_url'] = _ApiClient["default"].convertToType(data['protection_url'], 'String');
        }

        if (data.hasOwnProperty('required_linear_history')) {
          obj['required_linear_history'] = _BranchProtectionAllowDeletions["default"].constructFromObject(data['required_linear_history']);
        }

        if (data.hasOwnProperty('required_pull_request_reviews')) {
          obj['required_pull_request_reviews'] = _ProtectedBranchPullRequestReview["default"].constructFromObject(data['required_pull_request_reviews']);
        }

        if (data.hasOwnProperty('required_status_checks')) {
          obj['required_status_checks'] = _BranchProtectionRequiredStatusChecks["default"].constructFromObject(data['required_status_checks']);
        }

        if (data.hasOwnProperty('restrictions')) {
          obj['restrictions'] = _BranchRestrictionPolicy["default"].constructFromObject(data['restrictions']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchProtection;
}();
/**
 * @member {module:model/BranchProtectionAllowDeletions} allow_deletions
 */


BranchProtection.prototype['allow_deletions'] = undefined;
/**
 * @member {module:model/BranchProtectionAllowDeletions} allow_force_pushes
 */

BranchProtection.prototype['allow_force_pushes'] = undefined;
/**
 * @member {Boolean} enabled
 */

BranchProtection.prototype['enabled'] = undefined;
/**
 * @member {module:model/ProtectedBranchAdminEnforced} enforce_admins
 */

BranchProtection.prototype['enforce_admins'] = undefined;
/**
 * @member {String} name
 */

BranchProtection.prototype['name'] = undefined;
/**
 * @member {String} protection_url
 */

BranchProtection.prototype['protection_url'] = undefined;
/**
 * @member {module:model/BranchProtectionAllowDeletions} required_linear_history
 */

BranchProtection.prototype['required_linear_history'] = undefined;
/**
 * @member {module:model/ProtectedBranchPullRequestReview} required_pull_request_reviews
 */

BranchProtection.prototype['required_pull_request_reviews'] = undefined;
/**
 * @member {module:model/BranchProtectionRequiredStatusChecks} required_status_checks
 */

BranchProtection.prototype['required_status_checks'] = undefined;
/**
 * @member {module:model/BranchRestrictionPolicy} restrictions
 */

BranchProtection.prototype['restrictions'] = undefined;
/**
 * @member {String} url
 */

BranchProtection.prototype['url'] = undefined;
var _default = BranchProtection;
exports["default"] = _default;