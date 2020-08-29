"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions = _interopRequireDefault(require("./ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProtectedBranchRequiredPullRequestReviews model module.
 * @module model/ProtectedBranchRequiredPullRequestReviews
 * @version 0.0.5
 */
var ProtectedBranchRequiredPullRequestReviews = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranchRequiredPullRequestReviews</code>.
   * @alias module:model/ProtectedBranchRequiredPullRequestReviews
   * @param url {String} 
   */
  function ProtectedBranchRequiredPullRequestReviews(url) {
    _classCallCheck(this, ProtectedBranchRequiredPullRequestReviews);

    ProtectedBranchRequiredPullRequestReviews.initialize(this, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranchRequiredPullRequestReviews, null, [{
    key: "initialize",
    value: function initialize(obj, url) {
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ProtectedBranchRequiredPullRequestReviews</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchRequiredPullRequestReviews} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchRequiredPullRequestReviews} The populated <code>ProtectedBranchRequiredPullRequestReviews</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranchRequiredPullRequestReviews();

        if (data.hasOwnProperty('dismiss_stale_reviews')) {
          obj['dismiss_stale_reviews'] = _ApiClient["default"].convertToType(data['dismiss_stale_reviews'], 'Boolean');
        }

        if (data.hasOwnProperty('dismissal_restrictions')) {
          obj['dismissal_restrictions'] = _ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions["default"].constructFromObject(data['dismissal_restrictions']);
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

  return ProtectedBranchRequiredPullRequestReviews;
}();
/**
 * @member {Boolean} dismiss_stale_reviews
 */


ProtectedBranchRequiredPullRequestReviews.prototype['dismiss_stale_reviews'] = undefined;
/**
 * @member {module:model/ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions} dismissal_restrictions
 */

ProtectedBranchRequiredPullRequestReviews.prototype['dismissal_restrictions'] = undefined;
/**
 * @member {Boolean} require_code_owner_reviews
 */

ProtectedBranchRequiredPullRequestReviews.prototype['require_code_owner_reviews'] = undefined;
/**
 * @member {Number} required_approving_review_count
 */

ProtectedBranchRequiredPullRequestReviews.prototype['required_approving_review_count'] = undefined;
/**
 * @member {String} url
 */

ProtectedBranchRequiredPullRequestReviews.prototype['url'] = undefined;
var _default = ProtectedBranchRequiredPullRequestReviews;
exports["default"] = _default;