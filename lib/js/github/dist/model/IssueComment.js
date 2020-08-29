"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Integration = _interopRequireDefault(require("./Integration"));

var _ReactionRollup = _interopRequireDefault(require("./ReactionRollup"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueComment model module.
 * @module model/IssueComment
 * @version 0.0.5
 */
var IssueComment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueComment</code>.
   * Comments provide a way for people to collaborate on an issue.
   * @alias module:model/IssueComment
   * @param authorAssociation {String} 
   * @param createdAt {Date} 
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the issue comment
   * @param issueUrl {String} 
   * @param nodeId {String} 
   * @param updatedAt {Date} 
   * @param url {String} URL for the issue comment
   * @param user {module:model/SimpleUser} 
   */
  function IssueComment(authorAssociation, createdAt, htmlUrl, id, issueUrl, nodeId, updatedAt, url, user) {
    _classCallCheck(this, IssueComment);

    IssueComment.initialize(this, authorAssociation, createdAt, htmlUrl, id, issueUrl, nodeId, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueComment, null, [{
    key: "initialize",
    value: function initialize(obj, authorAssociation, createdAt, htmlUrl, id, issueUrl, nodeId, updatedAt, url, user) {
      obj['author_association'] = authorAssociation;
      obj['created_at'] = createdAt;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['issue_url'] = issueUrl;
      obj['node_id'] = nodeId;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>IssueComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueComment} obj Optional instance to populate.
     * @return {module:model/IssueComment} The populated <code>IssueComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueComment();

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

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issue_url')) {
          obj['issue_url'] = _ApiClient["default"].convertToType(data['issue_url'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('performed_via_github_app')) {
          obj['performed_via_github_app'] = _ApiClient["default"].convertToType(data['performed_via_github_app'], _Integration["default"]);
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

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return IssueComment;
}();
/**
 * @member {String} author_association
 */


IssueComment.prototype['author_association'] = undefined;
/**
 * Contents of the issue comment
 * @member {String} body
 */

IssueComment.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

IssueComment.prototype['body_html'] = undefined;
/**
 * @member {String} body_text
 */

IssueComment.prototype['body_text'] = undefined;
/**
 * @member {Date} created_at
 */

IssueComment.prototype['created_at'] = undefined;
/**
 * @member {String} html_url
 */

IssueComment.prototype['html_url'] = undefined;
/**
 * Unique identifier of the issue comment
 * @member {Number} id
 */

IssueComment.prototype['id'] = undefined;
/**
 * @member {String} issue_url
 */

IssueComment.prototype['issue_url'] = undefined;
/**
 * @member {String} node_id
 */

IssueComment.prototype['node_id'] = undefined;
/**
 * @member {module:model/Integration} performed_via_github_app
 */

IssueComment.prototype['performed_via_github_app'] = undefined;
/**
 * @member {module:model/ReactionRollup} reactions
 */

IssueComment.prototype['reactions'] = undefined;
/**
 * @member {Date} updated_at
 */

IssueComment.prototype['updated_at'] = undefined;
/**
 * URL for the issue comment
 * @member {String} url
 */

IssueComment.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

IssueComment.prototype['user'] = undefined;
var _default = IssueComment;
exports["default"] = _default;