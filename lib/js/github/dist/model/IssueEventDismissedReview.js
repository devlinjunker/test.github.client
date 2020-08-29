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
 * The IssueEventDismissedReview model module.
 * @module model/IssueEventDismissedReview
 * @version 0.0.5
 */
var IssueEventDismissedReview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEventDismissedReview</code>.
   * @alias module:model/IssueEventDismissedReview
   * @param dismissalMessage {String} 
   * @param reviewId {Number} 
   * @param state {String} 
   */
  function IssueEventDismissedReview(dismissalMessage, reviewId, state) {
    _classCallCheck(this, IssueEventDismissedReview);

    IssueEventDismissedReview.initialize(this, dismissalMessage, reviewId, state);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventDismissedReview, null, [{
    key: "initialize",
    value: function initialize(obj, dismissalMessage, reviewId, state) {
      obj['dismissal_message'] = dismissalMessage;
      obj['review_id'] = reviewId;
      obj['state'] = state;
    }
    /**
     * Constructs a <code>IssueEventDismissedReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventDismissedReview} obj Optional instance to populate.
     * @return {module:model/IssueEventDismissedReview} The populated <code>IssueEventDismissedReview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventDismissedReview();

        if (data.hasOwnProperty('dismissal_commit_id')) {
          obj['dismissal_commit_id'] = _ApiClient["default"].convertToType(data['dismissal_commit_id'], 'String');
        }

        if (data.hasOwnProperty('dismissal_message')) {
          obj['dismissal_message'] = _ApiClient["default"].convertToType(data['dismissal_message'], 'String');
        }

        if (data.hasOwnProperty('review_id')) {
          obj['review_id'] = _ApiClient["default"].convertToType(data['review_id'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventDismissedReview;
}();
/**
 * @member {String} dismissal_commit_id
 */


IssueEventDismissedReview.prototype['dismissal_commit_id'] = undefined;
/**
 * @member {String} dismissal_message
 */

IssueEventDismissedReview.prototype['dismissal_message'] = undefined;
/**
 * @member {Number} review_id
 */

IssueEventDismissedReview.prototype['review_id'] = undefined;
/**
 * @member {String} state
 */

IssueEventDismissedReview.prototype['state'] = undefined;
var _default = IssueEventDismissedReview;
exports["default"] = _default;