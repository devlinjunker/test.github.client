"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews = _interopRequireDefault(require("./ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews"));

var _ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks = _interopRequireDefault(require("./ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks"));

var _ReposOwnerRepoBranchesBranchProtectionRestrictions = _interopRequireDefault(require("./ReposOwnerRepoBranchesBranchProtectionRestrictions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject49 model module.
 * @module model/InlineObject49
 * @version 0.0.5
 */
var InlineObject49 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject49</code>.
   * @alias module:model/InlineObject49
   * @param enforceAdmins {Boolean} Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
   * @param requiredPullRequestReviews {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews} 
   * @param requiredStatusChecks {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks} 
   * @param restrictions {module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions} 
   */
  function InlineObject49(enforceAdmins, requiredPullRequestReviews, requiredStatusChecks, restrictions) {
    _classCallCheck(this, InlineObject49);

    InlineObject49.initialize(this, enforceAdmins, requiredPullRequestReviews, requiredStatusChecks, restrictions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject49, null, [{
    key: "initialize",
    value: function initialize(obj, enforceAdmins, requiredPullRequestReviews, requiredStatusChecks, restrictions) {
      obj['enforce_admins'] = enforceAdmins;
      obj['required_pull_request_reviews'] = requiredPullRequestReviews;
      obj['required_status_checks'] = requiredStatusChecks;
      obj['restrictions'] = restrictions;
    }
    /**
     * Constructs a <code>InlineObject49</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject49} obj Optional instance to populate.
     * @return {module:model/InlineObject49} The populated <code>InlineObject49</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject49();

        if (data.hasOwnProperty('allow_deletions')) {
          obj['allow_deletions'] = _ApiClient["default"].convertToType(data['allow_deletions'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_force_pushes')) {
          obj['allow_force_pushes'] = _ApiClient["default"].convertToType(data['allow_force_pushes'], 'Boolean');
        }

        if (data.hasOwnProperty('enforce_admins')) {
          obj['enforce_admins'] = _ApiClient["default"].convertToType(data['enforce_admins'], 'Boolean');
        }

        if (data.hasOwnProperty('required_linear_history')) {
          obj['required_linear_history'] = _ApiClient["default"].convertToType(data['required_linear_history'], 'Boolean');
        }

        if (data.hasOwnProperty('required_pull_request_reviews')) {
          obj['required_pull_request_reviews'] = _ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews["default"].constructFromObject(data['required_pull_request_reviews']);
        }

        if (data.hasOwnProperty('required_status_checks')) {
          obj['required_status_checks'] = _ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks["default"].constructFromObject(data['required_status_checks']);
        }

        if (data.hasOwnProperty('restrictions')) {
          obj['restrictions'] = _ReposOwnerRepoBranchesBranchProtectionRestrictions["default"].constructFromObject(data['restrictions']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject49;
}();
/**
 * Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see \"[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\" in the GitHub Help documentation.
 * @member {Boolean} allow_deletions
 */


InlineObject49.prototype['allow_deletions'] = undefined;
/**
 * Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see \"[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\" in the GitHub Help documentation.\"
 * @member {Boolean} allow_force_pushes
 */

InlineObject49.prototype['allow_force_pushes'] = undefined;
/**
 * Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
 * @member {Boolean} enforce_admins
 */

InlineObject49.prototype['enforce_admins'] = undefined;
/**
 * Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see \"[Requiring a linear commit history](https://help.github.com/github/administering-a-repository/requiring-a-linear-commit-history)\" in the GitHub Help documentation.
 * @member {Boolean} required_linear_history
 */

InlineObject49.prototype['required_linear_history'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews} required_pull_request_reviews
 */

InlineObject49.prototype['required_pull_request_reviews'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredStatusChecks} required_status_checks
 */

InlineObject49.prototype['required_status_checks'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions} restrictions
 */

InlineObject49.prototype['restrictions'] = undefined;
var _default = InlineObject49;
exports["default"] = _default;