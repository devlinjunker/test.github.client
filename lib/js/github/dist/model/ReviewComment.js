"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReviewCommentLinks = _interopRequireDefault(require("./ReviewCommentLinks"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReviewComment model module.
 * @module model/ReviewComment
 * @version 0.0.5
 */
var ReviewComment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReviewComment</code>.
   * Legacy Review Comment
   * @alias module:model/ReviewComment
   * @param links {module:model/ReviewCommentLinks} 
   * @param authorAssociation {String} 
   * @param body {String} 
   * @param commitId {String} 
   * @param createdAt {Date} 
   * @param diffHunk {String} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param nodeId {String} 
   * @param originalCommitId {String} 
   * @param originalPosition {Number} 
   * @param path {String} 
   * @param position {Number} 
   * @param pullRequestReviewId {Number} 
   * @param pullRequestUrl {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   */
  function ReviewComment(links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, nodeId, originalCommitId, originalPosition, path, position, pullRequestReviewId, pullRequestUrl, updatedAt, url, user) {
    _classCallCheck(this, ReviewComment);

    ReviewComment.initialize(this, links, authorAssociation, body, commitId, createdAt, diffHunk, htmlUrl, id, nodeId, originalCommitId, originalPosition, path, position, pullRequestReviewId, pullRequestUrl, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReviewComment, null, [{
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
     * Constructs a <code>ReviewComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReviewComment} obj Optional instance to populate.
     * @return {module:model/ReviewComment} The populated <code>ReviewComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReviewComment();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _ReviewCommentLinks["default"].constructFromObject(data['_links']);
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
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return ReviewComment;
}();
/**
 * @member {module:model/ReviewCommentLinks} _links
 */


ReviewComment.prototype['_links'] = undefined;
/**
 * @member {String} author_association
 */

ReviewComment.prototype['author_association'] = undefined;
/**
 * @member {String} body
 */

ReviewComment.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

ReviewComment.prototype['body_html'] = undefined;
/**
 * @member {String} body_text
 */

ReviewComment.prototype['body_text'] = undefined;
/**
 * @member {String} commit_id
 */

ReviewComment.prototype['commit_id'] = undefined;
/**
 * @member {Date} created_at
 */

ReviewComment.prototype['created_at'] = undefined;
/**
 * @member {String} diff_hunk
 */

ReviewComment.prototype['diff_hunk'] = undefined;
/**
 * @member {String} html_url
 */

ReviewComment.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

ReviewComment.prototype['id'] = undefined;
/**
 * @member {Number} in_reply_to_id
 */

ReviewComment.prototype['in_reply_to_id'] = undefined;
/**
 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
 * @member {Number} line
 */

ReviewComment.prototype['line'] = undefined;
/**
 * @member {String} node_id
 */

ReviewComment.prototype['node_id'] = undefined;
/**
 * @member {String} original_commit_id
 */

ReviewComment.prototype['original_commit_id'] = undefined;
/**
 * The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
 * @member {Number} original_line
 */

ReviewComment.prototype['original_line'] = undefined;
/**
 * @member {Number} original_position
 */

ReviewComment.prototype['original_position'] = undefined;
/**
 * The original first line of the range for a multi-line comment.
 * @member {Number} original_start_line
 */

ReviewComment.prototype['original_start_line'] = undefined;
/**
 * @member {String} path
 */

ReviewComment.prototype['path'] = undefined;
/**
 * @member {Number} position
 */

ReviewComment.prototype['position'] = undefined;
/**
 * @member {Number} pull_request_review_id
 */

ReviewComment.prototype['pull_request_review_id'] = undefined;
/**
 * @member {String} pull_request_url
 */

ReviewComment.prototype['pull_request_url'] = undefined;
/**
 * The side of the first line of the range for a multi-line comment.
 * @member {module:model/ReviewComment.SideEnum} side
 * @default 'RIGHT'
 */

ReviewComment.prototype['side'] = 'RIGHT';
/**
 * The first line of the range for a multi-line comment.
 * @member {Number} start_line
 */

ReviewComment.prototype['start_line'] = undefined;
/**
 * The side of the first line of the range for a multi-line comment.
 * @member {module:model/ReviewComment.StartSideEnum} start_side
 * @default 'RIGHT'
 */

ReviewComment.prototype['start_side'] = 'RIGHT';
/**
 * @member {Date} updated_at
 */

ReviewComment.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

ReviewComment.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

ReviewComment.prototype['user'] = undefined;
/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */

ReviewComment['SideEnum'] = {
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

ReviewComment['StartSideEnum'] = {
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
var _default = ReviewComment;
exports["default"] = _default;