"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestLinks model module.
 * @module model/PullRequestLinks
 * @version 0.0.5
 */
var PullRequestLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestLinks</code>.
   * @alias module:model/PullRequestLinks
   * @param comments {module:model/Link} 
   * @param commits {module:model/Link} 
   * @param html {module:model/Link} 
   * @param issue {module:model/Link} 
   * @param reviewComment {module:model/Link} 
   * @param reviewComments {module:model/Link} 
   * @param self {module:model/Link} 
   * @param statuses {module:model/Link} 
   */
  function PullRequestLinks(comments, commits, html, issue, reviewComment, reviewComments, self, statuses) {
    _classCallCheck(this, PullRequestLinks);

    PullRequestLinks.initialize(this, comments, commits, html, issue, reviewComment, reviewComments, self, statuses);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestLinks, null, [{
    key: "initialize",
    value: function initialize(obj, comments, commits, html, issue, reviewComment, reviewComments, self, statuses) {
      obj['comments'] = comments;
      obj['commits'] = commits;
      obj['html'] = html;
      obj['issue'] = issue;
      obj['review_comment'] = reviewComment;
      obj['review_comments'] = reviewComments;
      obj['self'] = self;
      obj['statuses'] = statuses;
    }
    /**
     * Constructs a <code>PullRequestLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestLinks} obj Optional instance to populate.
     * @return {module:model/PullRequestLinks} The populated <code>PullRequestLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestLinks();

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _Link["default"].constructFromObject(data['comments']);
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _Link["default"].constructFromObject(data['commits']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _Link["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _Link["default"].constructFromObject(data['issue']);
        }

        if (data.hasOwnProperty('review_comment')) {
          obj['review_comment'] = _Link["default"].constructFromObject(data['review_comment']);
        }

        if (data.hasOwnProperty('review_comments')) {
          obj['review_comments'] = _Link["default"].constructFromObject(data['review_comments']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _Link["default"].constructFromObject(data['self']);
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _Link["default"].constructFromObject(data['statuses']);
        }
      }

      return obj;
    }
  }]);

  return PullRequestLinks;
}();
/**
 * @member {module:model/Link} comments
 */


PullRequestLinks.prototype['comments'] = undefined;
/**
 * @member {module:model/Link} commits
 */

PullRequestLinks.prototype['commits'] = undefined;
/**
 * @member {module:model/Link} html
 */

PullRequestLinks.prototype['html'] = undefined;
/**
 * @member {module:model/Link} issue
 */

PullRequestLinks.prototype['issue'] = undefined;
/**
 * @member {module:model/Link} review_comment
 */

PullRequestLinks.prototype['review_comment'] = undefined;
/**
 * @member {module:model/Link} review_comments
 */

PullRequestLinks.prototype['review_comments'] = undefined;
/**
 * @member {module:model/Link} self
 */

PullRequestLinks.prototype['self'] = undefined;
/**
 * @member {module:model/Link} statuses
 */

PullRequestLinks.prototype['statuses'] = undefined;
var _default = PullRequestLinks;
exports["default"] = _default;