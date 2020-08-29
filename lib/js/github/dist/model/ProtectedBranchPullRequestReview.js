"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProtectedBranchPullRequestReviewDismissalRestrictions = _interopRequireDefault(require("./ProtectedBranchPullRequestReviewDismissalRestrictions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProtectedBranchPullRequestReview model module.
 * @module model/ProtectedBranchPullRequestReview
 * @version 0.0.5
 */
var ProtectedBranchPullRequestReview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranchPullRequestReview</code>.
   * Protected Branch Pull Request Review
   * @alias module:model/ProtectedBranchPullRequestReview
   * @param dismissStaleReviews {Boolean} 
   * @param requireCodeOwnerReviews {Boolean} 
   */
  function ProtectedBranchPullRequestReview(dismissStaleReviews, requireCodeOwnerReviews) {
    _classCallCheck(this, ProtectedBranchPullRequestReview);

    ProtectedBranchPullRequestReview.initialize(this, dismissStaleReviews, requireCodeOwnerReviews);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranchPullRequestReview, null, [{
    key: "initialize",
    value: function initialize(obj, dismissStaleReviews, requireCodeOwnerReviews) {
      obj['dismiss_stale_reviews'] = dismissStaleReviews;
      obj['require_code_owner_reviews'] = requireCodeOwnerReviews;
    }
    /**
     * Constructs a <code>ProtectedBranchPullRequestReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchPullRequestReview} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchPullRequestReview} The populated <code>ProtectedBranchPullRequestReview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranchPullRequestReview();

        if (data.hasOwnProperty('dismiss_stale_reviews')) {
          obj['dismiss_stale_reviews'] = _ApiClient["default"].convertToType(data['dismiss_stale_reviews'], 'Boolean');
        }

        if (data.hasOwnProperty('dismissal_restrictions')) {
          obj['dismissal_restrictions'] = _ProtectedBranchPullRequestReviewDismissalRestrictions["default"].constructFromObject(data['dismissal_restrictions']);
        }

        if (data.hasOwnProperty('require_code_owner_reviews')) {
          obj['require_code_owner_reviews'] = _ApiClient["default"].convertToType(data['require_code_owner_reviews'], 'Boolean');
        }

        if (data.hasOwnProperty('required_approving_review_count')) {
          obj['required_approving_review_count'] = _ApiClient["default"].convertToType(data['required_approving_review_count'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProtectedBranchPullRequestReview;
}();
/**
 * @member {Boolean} dismiss_stale_reviews
 */


ProtectedBranchPullRequestReview.prototype['dismiss_stale_reviews'] = undefined;
/**
 * @member {module:model/ProtectedBranchPullRequestReviewDismissalRestrictions} dismissal_restrictions
 */

ProtectedBranchPullRequestReview.prototype['dismissal_restrictions'] = undefined;
/**
 * @member {Boolean} require_code_owner_reviews
 */

ProtectedBranchPullRequestReview.prototype['require_code_owner_reviews'] = undefined;
/**
 * @member {Number} required_approving_review_count
 */

ProtectedBranchPullRequestReview.prototype['required_approving_review_count'] = undefined;
/**
 * @member {String} url
 */

ProtectedBranchPullRequestReview.prototype['url'] = undefined;
var _default = ProtectedBranchPullRequestReview;
exports["default"] = _default;