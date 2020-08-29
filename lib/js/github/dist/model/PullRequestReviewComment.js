"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestReviewCommentLinks = _interopRequireDefault(require("./PullRequestReviewCommentLinks"));

var _ReactionRollup = _interopRequireDefault(require("./ReactionRollup"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestReviewComment model module.
 * @module model/PullRequestReviewComment
 * @version 0.0.5
 */
var PullRequestReviewComment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestReviewComment</code>.
   * Pull Request Review Comments are comments on a portion of the Pull Request&#39;s diff.
   * @alias module:model/PullRequestReviewComment
   * @param links {module:model/PullRequestReviewCommentLinks} 
   * @param authorAssociation {String} How the author of the comment is associated with the pull request.
   * @param body {String} The text of the comment.
   * @param commitId {String} The SHA of the commit to which the comment applies.
   * @param createdAt {Date} 
   * @param diffHunk {String} The diff of the line that the comment refers to.
   * @param htmlUrl {String} HTML URL for the pull request review comment.
   * @param id {Number} The ID of the pull request review comment.
   * @param nodeId {String} The node ID of the pull request review comment.
   * @param originalCommitId {String} The SHA of the original commit to which the comment applies.
   * @param originalPosition {Number} The index of the original line in the diff to which the comment applies.
   * @param path {String} The relative path of the file to which the comment applies.
   * @param position {Number} The line index in the diff to which the comment applies.
   * @param pullRequestReviewId {Number} The ID of the pull request review to which the comment belongs.
   * @param pullRequestUrl {String} URL for the pull request that the review comment belongs to.
   * @param updatedAt {Date} 
   * @param url {String} URL for the pull request review comment
   * @param user {module:model/SimpleUser} 
   */
  function PullRequestReviewComment(links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, nodeId, originalCommitId, originalPosition, path, position, pullRequestReviewId, pullRequestUrl, updatedAt, url, user) {
    _classCallCheck(this, PullRequestReviewComment);

    PullRequestReviewComment.initialize(this, links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, nodeId, originalCommitId, originalPosition, path, position, pullRequestReviewId, pullRequestUrl, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestReviewComment, null, [{
    key: "initialize",
    value: function initialize(obj, links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, nodeId, originalCommitId, originalPosition, path, position, pullRequestReviewId, pullRequestUrl, updatedAt, url, user) {
      obj['_links'] = links;
      obj['author_association'] = authorAssociation;
      obj['body'] = body;
      obj['commit_id'] = commitId;
      obj['created_at'] = createdAt;
      obj['diff_hunk'] = diffHunk;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['original_commit_id'] = originalCommitId;
      obj['original_position'] = originalPosition;
      obj['path'] = path;
      obj['position'] = position;
      obj['pull_request_review_id'] = pullRequestReviewId;
      obj['pull_request_url'] = pullRequestUrl;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>PullRequestReviewComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewComment} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewComment} The populated <code>PullRequestReviewComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestReviewComment();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _PullRequestReviewCommentLinks["default"].constructFromObject(data['_links']);
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

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('diff_hunk')) {
          obj['diff_hunk'] = _ApiClient["default"].convertToType(data['diff_hunk'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('in_reply_to_id')) {
          obj['in_reply_to_id'] = _ApiClient["default"].convertToType(data['in_reply_to_id'], 'Number');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('original_commit_id')) {
          obj['original_commit_id'] = _ApiClient["default"].convertToType(data['original_commit_id'], 'String');
        }

        if (data.hasOwnProperty('original_line')) {
          obj['original_line'] = _ApiClient["default"].convertToType(data['original_line'], 'Number');
        }

        if (data.hasOwnProperty('original_position')) {
          obj['original_position'] = _ApiClient["default"].convertToType(data['original_position'], 'Number');
        }

        if (data.hasOwnProperty('original_start_line')) {
          obj['original_start_line'] = _ApiClient["default"].convertToType(data['original_start_line'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('pull_request_review_id')) {
          obj['pull_request_review_id'] = _ApiClient["default"].convertToType(data['pull_request_review_id'], 'Number');
        }

        if (data.hasOwnProperty('pull_request_url')) {
          obj['pull_request_url'] = _ApiClient["default"].convertToType(data['pull_request_url'], 'String');
        }

        if (data.hasOwnProperty('reactions')) {
          obj['reactions'] = _ReactionRollup["default"].constructFromObject(data['reactions']);
        }

        if (data.hasOwnProperty('side')) {
          obj['side'] = _ApiClient["default"].convertToType(data['side'], 'String');
        }

        if (data.hasOwnProperty('start_line')) {
          obj['start_line'] = _ApiClient["default"].convertToType(data['start_line'], 'Number');
        }

        if (data.hasOwnProperty('start_side')) {
          obj['start_side'] = _ApiClient["default"].convertToType(data['start_side'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _SimpleUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return PullRequestReviewComment;
}();
/**
 * @member {module:model/PullRequestReviewCommentLinks} _links
 */


PullRequestReviewComment.prototype['_links'] = undefined;
/**
 * How the author of the comment is associated with the pull request.
 * @member {String} author_association
 */

PullRequestReviewComment.prototype['author_association'] = undefined;
/**
 * The text of the comment.
 * @member {String} body
 */

PullRequestReviewComment.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

PullRequestReviewComment.prototype['body_html'] = undefined;
/**
 * @member {String} body_text
 */

PullRequestReviewComment.prototype['body_text'] = undefined;
/**
 * The SHA of the commit to which the comment applies.
 * @member {String} commit_id
 */

PullRequestReviewComment.prototype['commit_id'] = undefined;
/**
 * @member {Date} created_at
 */

PullRequestReviewComment.prototype['created_at'] = undefined;
/**
 * The diff of the line that the comment refers to.
 * @member {String} diff_hunk
 */

PullRequestReviewComment.prototype['diff_hunk'] = undefined;
/**
 * HTML URL for the pull request review comment.
 * @member {String} html_url
 */

PullRequestReviewComment.prototype['html_url'] = undefined;
/**
 * The ID of the pull request review comment.
 * @member {Number} id
 */

PullRequestReviewComment.prototype['id'] = undefined;
/**
 * The comment ID to reply to.
 * @member {Number} in_reply_to_id
 */

PullRequestReviewComment.prototype['in_reply_to_id'] = undefined;
/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 * @member {Number} line
 */

PullRequestReviewComment.prototype['line'] = undefined;
/**
 * The node ID of the pull request review comment.
 * @member {String} node_id
 */

PullRequestReviewComment.prototype['node_id'] = undefined;
/**
 * The SHA of the original commit to which the comment applies.
 * @member {String} original_commit_id
 */

PullRequestReviewComment.prototype['original_commit_id'] = undefined;
/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 * @member {Number} original_line
 */

PullRequestReviewComment.prototype['original_line'] = undefined;
/**
 * The index of the original line in the diff to which the comment applies.
 * @member {Number} original_position
 */

PullRequestReviewComment.prototype['original_position'] = undefined;
/**
 * The first line of the range for a multi-line comment.
 * @member {Number} original_start_line
 */

PullRequestReviewComment.prototype['original_start_line'] = undefined;
/**
 * The relative path of the file to which the comment applies.
 * @member {String} path
 */

PullRequestReviewComment.prototype['path'] = undefined;
/**
 * The line index in the diff to which the comment applies.
 * @member {Number} position
 */

PullRequestReviewComment.prototype['position'] = undefined;
/**
 * The ID of the pull request review to which the comment belongs.
 * @member {Number} pull_request_review_id
 */

PullRequestReviewComment.prototype['pull_request_review_id'] = undefined;
/**
 * URL for the pull request that the review comment belongs to.
 * @member {String} pull_request_url
 */

PullRequestReviewComment.prototype['pull_request_url'] = undefined;
/**
 * @member {module:model/ReactionRollup} reactions
 */

PullRequestReviewComment.prototype['reactions'] = undefined;
/**
 * The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment
 * @member {module:model/PullRequestReviewComment.SideEnum} side
 * @default 'RIGHT'
 */

PullRequestReviewComment.prototype['side'] = 'RIGHT';
/**
 * The first line of the range for a multi-line comment.
 * @member {Number} start_line
 */

PullRequestReviewComment.prototype['start_line'] = undefined;
/**
 * The side of the first line of the range for a multi-line comment.
 * @member {module:model/PullRequestReviewComment.StartSideEnum} start_side
 * @default 'RIGHT'
 */

PullRequestReviewComment.prototype['start_side'] = 'RIGHT';
/**
 * @member {Date} updated_at
 */

PullRequestReviewComment.prototype['updated_at'] = undefined;
/**
 * URL for the pull request review comment
 * @member {String} url
 */

PullRequestReviewComment.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

PullRequestReviewComment.prototype['user'] = undefined;
/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */

PullRequestReviewComment['SideEnum'] = {
  /**
   * value: "LEFT"
   * @const
   */
  "LEFT": "LEFT",

  /**
   * value: "RIGHT"
   * @const
   */
  "RIGHT": "RIGHT"
};
/**
 * Allowed values for the <code>start_side</code> property.
 * @enum {String}
 * @readonly
 */

PullRequestReviewComment['StartSideEnum'] = {
  /**
   * value: "LEFT"
   * @const
   */
  "LEFT": "LEFT",

  /**
   * value: "RIGHT"
   * @const
   */
  "RIGHT": "RIGHT"
};
var _default = PullRequestReviewComment;
exports["default"] = _default;