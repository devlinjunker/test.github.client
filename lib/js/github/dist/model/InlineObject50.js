"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions = _interopRequireDefault(require("./ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject50 model module.
 * @module model/InlineObject50
 * @version 0.0.5
 */
var InlineObject50 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject50</code>.
   * @alias module:model/InlineObject50
   */
  function InlineObject50() {
    _classCallCheck(this, InlineObject50);

    InlineObject50.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject50, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject50</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject50} obj Optional instance to populate.
     * @return {module:model/InlineObject50} The populated <code>InlineObject50</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject50();

        if (data.hasOwnProperty('dismiss_stale_reviews')) {
          obj['dismiss_stale_reviews'] = _ApiClient["default"].convertToType(data['dismiss_stale_reviews'], 'Boolean');
        }

        if (data.hasOwnProperty('dismissal_restrictions')) {
          obj['dismissal_restrictions'] = _ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions["default"].constructFromObject(data['dismissal_restrictions']);
        }

        if (data.hasOwnProperty('require_code_owner_reviews')) {
          obj['require_code_owner_reviews'] = _ApiClient["default"].convertToType(data['require_code_owner_reviews'], 'Boolean');
        }

        if (data.hasOwnProperty('required_approving_review_count')) {
          obj['required_approving_review_count'] = _ApiClient["default"].convertToType(data['required_approving_review_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineObject50;
}();
/**
 * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
 * @member {Boolean} dismiss_stale_reviews
 */


InlineObject50.prototype['dismiss_stale_reviews'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions} dismissal_restrictions
 */

InlineObject50.prototype['dismissal_restrictions'] = undefined;
/**
 * Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) have reviewed.
 * @member {Boolean} require_code_owner_reviews
 */

InlineObject50.prototype['require_code_owner_reviews'] = undefined;
/**
 * Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.
 * @member {Number} required_approving_review_count
 */

InlineObject50.prototype['required_approving_review_count'] = undefined;
var _default = InlineObject50;
exports["default"] = _default;