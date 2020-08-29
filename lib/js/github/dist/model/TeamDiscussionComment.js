"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReactionRollup = _interopRequireDefault(require("./ReactionRollup"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TeamDiscussionComment model module.
 * @module model/TeamDiscussionComment
 * @version 0.0.5
 */
var TeamDiscussionComment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamDiscussionComment</code>.
   * A reply to a discussion within a team.
   * @alias module:model/TeamDiscussionComment
   * @param author {module:model/SimpleUser} 
   * @param body {String} The main text of the comment.
   * @param bodyHtml {String} 
   * @param bodyVersion {String} The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
   * @param createdAt {Date} 
   * @param discussionUrl {String} 
   * @param htmlUrl {String} 
   * @param lastEditedAt {Date} 
   * @param nodeId {String} 
   * @param _number {Number} The unique sequence number of a team discussion comment.
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function TeamDiscussionComment(author, body, bodyHtml, bodyVersion, createdAt, discussionUrl, htmlUrl, lastEditedAt, nodeId, _number, updatedAt, url) {
    _classCallCheck(this, TeamDiscussionComment);

    TeamDiscussionComment.initialize(this, author, body, bodyHtml, bodyVersion, createdAt, discussionUrl, htmlUrl, lastEditedAt, nodeId, _number, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamDiscussionComment, null, [{
    key: "initialize",
    value: function initialize(obj, author, body, bodyHtml, bodyVersion, createdAt, discussionUrl, htmlUrl, lastEditedAt, nodeId, _number, updatedAt, url) {
      obj['author'] = author;
      obj['body'] = body;
      obj['body_html'] = bodyHtml;
      obj['body_version'] = bodyVersion;
      obj['created_at'] = createdAt;
      obj['discussion_url'] = discussionUrl;
      obj['html_url'] = htmlUrl;
      obj['last_edited_at'] = lastEditedAt;
      obj['node_id'] = nodeId;
      obj['number'] = _number;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>TeamDiscussionComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamDiscussionComment} obj Optional instance to populate.
     * @return {module:model/TeamDiscussionComment} The populated <code>TeamDiscussionComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamDiscussionComment();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('body_html')) {
          obj['body_html'] = _ApiClient["default"].convertToType(data['body_html'], 'String');
        }

        if (data.hasOwnProperty('body_version')) {
          obj['body_version'] = _ApiClient["default"].convertToType(data['body_version'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('discussion_url')) {
          obj['discussion_url'] = _ApiClient["default"].convertToType(data['discussion_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('last_edited_at')) {
          obj['last_edited_at'] = _ApiClient["default"].convertToType(data['last_edited_at'], 'Date');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('reactions')) {
          obj['reactions'] = _ReactionRollup["default"].constructFromObject(data['reactions']);
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TeamDiscussionComment;
}();
/**
 * @member {module:model/SimpleUser} author
 */


TeamDiscussionComment.prototype['author'] = undefined;
/**
 * The main text of the comment.
 * @member {String} body
 */

TeamDiscussionComment.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

TeamDiscussionComment.prototype['body_html'] = undefined;
/**
 * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
 * @member {String} body_version
 */

TeamDiscussionComment.prototype['body_version'] = undefined;
/**
 * @member {Date} created_at
 */

TeamDiscussionComment.prototype['created_at'] = undefined;
/**
 * @member {String} discussion_url
 */

TeamDiscussionComment.prototype['discussion_url'] = undefined;
/**
 * @member {String} html_url
 */

TeamDiscussionComment.prototype['html_url'] = undefined;
/**
 * @member {Date} last_edited_at
 */

TeamDiscussionComment.prototype['last_edited_at'] = undefined;
/**
 * @member {String} node_id
 */

TeamDiscussionComment.prototype['node_id'] = undefined;
/**
 * The unique sequence number of a team discussion comment.
 * @member {Number} number
 */

TeamDiscussionComment.prototype['number'] = undefined;
/**
 * @member {module:model/ReactionRollup} reactions
 */

TeamDiscussionComment.prototype['reactions'] = undefined;
/**
 * @member {Date} updated_at
 */

TeamDiscussionComment.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

TeamDiscussionComment.prototype['url'] = undefined;
var _default = TeamDiscussionComment;
exports["default"] = _default;