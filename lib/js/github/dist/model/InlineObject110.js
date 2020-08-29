"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoPullsPullNumberReviewsComments = _interopRequireDefault(require("./ReposOwnerRepoPullsPullNumberReviewsComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject110 model module.
 * @module model/InlineObject110
 * @version 0.0.5
 */
var InlineObject110 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject110</code>.
   * @alias module:model/InlineObject110
   */
  function InlineObject110() {
    _classCallCheck(this, InlineObject110);

    InlineObject110.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject110, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject110</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject110} obj Optional instance to populate.
     * @return {module:model/InlineObject110} The populated <code>InlineObject110</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject110();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], [_ReposOwnerRepoPullsPullNumberReviewsComments["default"]]);
        }

        if (data.hasOwnProperty('commit_id')) {
          obj['commit_id'] = _ApiClient["default"].convertToType(data['commit_id'], 'String');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject110;
}();
/**
 * **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
 * @member {String} body
 */


InlineObject110.prototype['body'] = undefined;
/**
 * Use the following table to specify the location, destination, and contents of the draft review comment.
 * @member {Array.<module:model/ReposOwnerRepoPullsPullNumberReviewsComments>} comments
 */

InlineObject110.prototype['comments'] = undefined;
/**
 * The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
 * @member {String} commit_id
 */

InlineObject110.prototype['commit_id'] = undefined;
/**
 * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://developer.github.com/v3/pulls/reviews/#submit-a-review-for-a-pull-request) when you are ready.
 * @member {module:model/InlineObject110.EventEnum} event
 */

InlineObject110.prototype['event'] = undefined;
/**
 * Allowed values for the <code>event</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject110['EventEnum'] = {
  /**
   * value: "APPROVE"
   * @const
   */
  "APPROVE": "APPROVE",

  /**
   * value: "REQUEST_CHANGES"
   * @const
   */
  "REQUEST_CHANGES": "REQUEST_CHANGES",

  /**
   * value: "COMMENT"
   * @const
   */
  "COMMENT": "COMMENT"
};
var _default = InlineObject110;
exports["default"] = _default;