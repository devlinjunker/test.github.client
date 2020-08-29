"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestReviewCommentLinksHtml = _interopRequireDefault(require("./PullRequestReviewCommentLinksHtml"));

var _PullRequestReviewCommentLinksPullRequest = _interopRequireDefault(require("./PullRequestReviewCommentLinksPullRequest"));

var _PullRequestReviewCommentLinksSelf = _interopRequireDefault(require("./PullRequestReviewCommentLinksSelf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestReviewCommentLinks model module.
 * @module model/PullRequestReviewCommentLinks
 * @version 0.0.5
 */
var PullRequestReviewCommentLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestReviewCommentLinks</code>.
   * @alias module:model/PullRequestReviewCommentLinks
   * @param html {module:model/PullRequestReviewCommentLinksHtml} 
   * @param pullRequest {module:model/PullRequestReviewCommentLinksPullRequest} 
   * @param self {module:model/PullRequestReviewCommentLinksSelf} 
   */
  function PullRequestReviewCommentLinks(html, pullRequest, self) {
    _classCallCheck(this, PullRequestReviewCommentLinks);

    PullRequestReviewCommentLinks.initialize(this, html, pullRequest, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestReviewCommentLinks, null, [{
    key: "initialize",
    value: function initialize(obj, html, pullRequest, self) {
      obj['html'] = html;
      obj['pull_request'] = pullRequest;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>PullRequestReviewCommentLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewCommentLinks} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewCommentLinks} The populated <code>PullRequestReviewCommentLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestReviewCommentLinks();

        if (data.hasOwnProperty('html')) {
          obj['html'] = _PullRequestReviewCommentLinksHtml["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('pull_request')) {
          obj['pull_request'] = _PullRequestReviewCommentLinksPullRequest["default"].constructFromObject(data['pull_request']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _PullRequestReviewCommentLinksSelf["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return PullRequestReviewCommentLinks;
}();
/**
 * @member {module:model/PullRequestReviewCommentLinksHtml} html
 */


PullRequestReviewCommentLinks.prototype['html'] = undefined;
/**
 * @member {module:model/PullRequestReviewCommentLinksPullRequest} pull_request
 */

PullRequestReviewCommentLinks.prototype['pull_request'] = undefined;
/**
 * @member {module:model/PullRequestReviewCommentLinksSelf} self
 */

PullRequestReviewCommentLinks.prototype['self'] = undefined;
var _default = PullRequestReviewCommentLinks;
exports["default"] = _default;