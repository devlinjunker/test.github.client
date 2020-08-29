"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestReviewLinks = _interopRequireDefault(require("./PullRequestReviewLinks"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestReview model module.
 * @module model/PullRequestReview
 * @version 0.0.5
 */
var PullRequestReview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestReview</code>.
   * Pull Request Reviews are reviews on pull requests.
   * @alias module:model/PullRequestReview
   * @param links {module:model/PullRequestReviewLinks} 
   * @param authorAssociation {String} 
   * @param body {String} The text of the review.
   * @param commitId {String} A commit SHA for the review.
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the review
   * @param nodeId {String} 
   * @param pullRequestUrl {String} 
   * @param state {String} 
   * @param user {module:model/SimpleUser} 
   */
  function PullRequestReview(links, authorAssociation, body, commitId, htmlUrl, id, nodeId, pullRequestUrl, state, user) {
    _classCallCheck(this, PullRequestReview);

    PullRequestReview.initialize(this, links, authorAssociation, body, commitId, htmlUrl, id, nodeId, pullRequestUrl, state, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestReview, null, [{
    key: "initialize",
    value: function initialize(obj, links, authorAssociation, body, commitId, htmlUrl, id, nodeId, pullRequestUrl, state, user) {
      obj['_links'] = links;
      obj['author_association'] = authorAssociation;
      obj['body'] = body;
      obj['commit_id'] = commitId;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['pull_request_url'] = pullRequestUrl;
      obj['state'] = state;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>PullRequestReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReview} obj Optional instance to populate.
     * @return {module:model/PullRequestReview} The populated <code>PullRequestReview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestReview();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _PullRequestReviewLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('author_association')) {
          obj['author_association'] = _ApiClient["default"].convertToType(data['author_association'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('body_html')) {
          obj['body_html'] = _ApiClient["default"].convertToType(data['body_html'], 'String');
        }

        if (data.hasOwnProperty('body_text')) {
          obj['body_text'] = _ApiClient["default"].convertToType(data['body_text'], 'String');
        }

        if (data.hasOwnProperty('commit_id')) {
          obj['commit_id'] = _ApiClient["default"].convertToType(data['commit_id'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('pull_request_url')) {
          obj['pull_request_url'] = _ApiClient["default"].convertToType(data['pull_request_url'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('submitted_at')) {
          obj['submitted_at'] = _ApiClient["default"].convertToType(data['submitted_at'], 'Date');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return PullRequestReview;
}();
/**
 * @member {module:model/PullRequestReviewLinks} _links
 */


PullRequestReview.prototype['_links'] = undefined;
/**
 * @member {String} author_association
 */

PullRequestReview.prototype['author_association'] = undefined;
/**
 * The text of the review.
 * @member {String} body
 */

PullRequestReview.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

PullRequestReview.prototype['body_html'] = undefined;
/**
 * @member {String} body_text
 */

PullRequestReview.prototype['body_text'] = undefined;
/**
 * A commit SHA for the review.
 * @member {String} commit_id
 */

PullRequestReview.prototype['commit_id'] = undefined;
/**
 * @member {String} html_url
 */

PullRequestReview.prototype['html_url'] = undefined;
/**
 * Unique identifier of the review
 * @member {Number} id
 */

PullRequestReview.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

PullRequestReview.prototype['node_id'] = undefined;
/**
 * @member {String} pull_request_url
 */

PullRequestReview.prototype['pull_request_url'] = undefined;
/**
 * @member {String} state
 */

PullRequestReview.prototype['state'] = undefined;
/**
 * @member {Date} submitted_at
 */

PullRequestReview.prototype['submitted_at'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

PullRequestReview.prototype['user'] = undefined;
var _default = PullRequestReview;
exports["default"] = _default;