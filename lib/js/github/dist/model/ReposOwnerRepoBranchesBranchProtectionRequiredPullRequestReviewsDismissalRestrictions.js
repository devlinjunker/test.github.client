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
 * The ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions model module.
 * @module model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions
 * @version 0.0.5
 */
var ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions</code>.
   * Specify which users and teams can dismiss pull request reviews. Pass an empty &#x60;dismissal_restrictions&#x60; object to disable. User and team &#x60;dismissal_restrictions&#x60; are only available for organization-owned repositories. Omit this parameter for personal repositories.
   * @alias module:model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions
   */
  function ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions() {
    _classCallCheck(this, ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions);

    ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions} The populated <code>ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions();

        if (data.hasOwnProperty('teams')) {
          obj['teams'] = _ApiClient["default"].convertToType(data['teams'], ['String']);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions;
}();
/**
 * The list of team `slug`s with dismissal access
 * @member {Array.<String>} teams
 */


ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.prototype['teams'] = undefined;
/**
 * The list of user `login`s with dismissal access
 * @member {Array.<String>} users
 */

ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.prototype['users'] = undefined;
var _default = ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions;
exports["default"] = _default;