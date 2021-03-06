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
 * The PullRequestReviewCommentLinksHtml model module.
 * @module model/PullRequestReviewCommentLinksHtml
 * @version 0.0.5
 */
var PullRequestReviewCommentLinksHtml = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestReviewCommentLinksHtml</code>.
   * @alias module:model/PullRequestReviewCommentLinksHtml
   * @param href {String} 
   */
  function PullRequestReviewCommentLinksHtml(href) {
    _classCallCheck(this, PullRequestReviewCommentLinksHtml);

    PullRequestReviewCommentLinksHtml.initialize(this, href);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestReviewCommentLinksHtml, null, [{
    key: "initialize",
    value: function initialize(obj, href) {
      obj['href'] = href;
    }
    /**
     * Constructs a <code>PullRequestReviewCommentLinksHtml</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewCommentLinksHtml} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewCommentLinksHtml} The populated <code>PullRequestReviewCommentLinksHtml</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestReviewCommentLinksHtml();

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullRequestReviewCommentLinksHtml;
}();
/**
 * @member {String} href
 */


PullRequestReviewCommentLinksHtml.prototype['href'] = undefined;
var _default = PullRequestReviewCommentLinksHtml;
exports["default"] = _default;