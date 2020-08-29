"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchRestrictionPolicy = _interopRequireDefault(require("./BranchRestrictionPolicy"));

var _ProtectedBranchAllowDeletions = _interopRequireDefault(require("./ProtectedBranchAllowDeletions"));

var _ProtectedBranchEnforceAdmins = _interopRequireDefault(require("./ProtectedBranchEnforceAdmins"));

var _ProtectedBranchRequiredPullRequestReviews = _interopRequireDefault(require("./ProtectedBranchRequiredPullRequestReviews"));

var _ProtectedBranchRequiredSignatures = _interopRequireDefault(require("./ProtectedBranchRequiredSignatures"));

var _StatusCheckPolicy = _interopRequireDefault(require("./StatusCheckPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProtectedBranch model module.
 * @module model/ProtectedBranch
 * @version 0.0.5
 */
var ProtectedBranch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranch</code>.
   * Branch protections protect branches
   * @alias module:model/ProtectedBranch
   * @param url {String} 
   */
  function ProtectedBranch(url) {
    _classCallCheck(this, ProtectedBranch);

    ProtectedBranch.initialize(this, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranch, null, [{
    key: "initialize",
    value: function initialize(obj, url) {
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ProtectedBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranch} obj Optional instance to populate.
     * @return {module:model/ProtectedBranch} The populated <code>ProtectedBranch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranch();

        if (data.hasOwnProperty('allow_deletions')) {
          obj['allow_deletions'] = _ProtectedBranchAllowDeletions["default"].constructFromObject(data['allow_deletions']);
        }

        if (data.hasOwnProperty('allow_force_pushes')) {
          obj['allow_force_pushes'] = _ProtectedBranchAllowDeletions["default"].constructFromObject(data['allow_force_pushes']);
        }

        if (data.hasOwnProperty('enforce_admins')) {
          obj['enforce_admins'] = _ProtectedBranchEnforceAdmins["default"].constructFromObject(data['enforce_admins']);
        }

        if (data.hasOwnProperty('required_linear_history')) {
          obj['required_linear_history'] = _ProtectedBranchAllowDeletions["default"].constructFromObject(data['required_linear_history']);
        }

        if (data.hasOwnProperty('required_pull_request_reviews')) {
          obj['required_pull_request_reviews'] = _ProtectedBranchRequiredPullRequestReviews["default"].constructFromObject(data['required_pull_request_reviews']);
        }

        if (data.hasOwnProperty('required_signatures')) {
          obj['required_signatures'] = _ProtectedBranchRequiredSignatures["default"].constructFromObject(data['required_signatures']);
        }

        if (data.hasOwnProperty('required_status_checks')) {
          obj['required_status_checks'] = _StatusCheckPolicy["default"].constructFromObject(data['required_status_checks']);
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

  return ProtectedBranch;
}();
/**
 * @member {module:model/ProtectedBranchAllowDeletions} allow_deletions
 */


ProtectedBranch.prototype['allow_deletions'] = undefined;
/**
 * @member {module:model/ProtectedBranchAllowDeletions} allow_force_pushes
 */

ProtectedBranch.prototype['allow_force_pushes'] = undefined;
/**
 * @member {module:model/ProtectedBranchEnforceAdmins} enforce_admins
 */

ProtectedBranch.prototype['enforce_admins'] = undefined;
/**
 * @member {module:model/ProtectedBranchAllowDeletions} required_linear_history
 */

ProtectedBranch.prototype['required_linear_history'] = undefined;
/**
 * @member {module:model/ProtectedBranchRequiredPullRequestReviews} required_pull_request_reviews
 */

ProtectedBranch.prototype['required_pull_request_reviews'] = undefined;
/**
 * @member {module:model/ProtectedBranchRequiredSignatures} required_signatures
 */

ProtectedBranch.prototype['required_signatures'] = undefined;
/**
 * @member {module:model/StatusCheckPolicy} required_status_checks
 */

ProtectedBranch.prototype['required_status_checks'] = undefined;
/**
 * @member {module:model/BranchRestrictionPolicy} restrictions
 */

ProtectedBranch.prototype['restrictions'] = undefined;
/**
 * @member {String} url
 */

ProtectedBranch.prototype['url'] = undefined;
var _default = ProtectedBranch;
exports["default"] = _default;