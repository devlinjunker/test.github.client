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
 * The TeamDiscussion model module.
 * @module model/TeamDiscussion
 * @version 0.0.5
 */
var TeamDiscussion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamDiscussion</code>.
   * A team discussion is a persistent record of a free-form conversation within a team.
   * @alias module:model/TeamDiscussion
   * @param author {module:model/SimpleUser} 
   * @param body {String} The main text of the discussion.
   * @param bodyHtml {String} 
   * @param bodyVersion {String} The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
   * @param commentsCount {Number} 
   * @param commentsUrl {String} 
   * @param createdAt {Date} 
   * @param htmlUrl {String} 
   * @param lastEditedAt {Date} 
   * @param nodeId {String} 
   * @param _number {Number} The unique sequence number of a team discussion.
   * @param pinned {Boolean} Whether or not this discussion should be pinned for easy retrieval.
   * @param _private {Boolean} Whether or not this discussion should be restricted to team members and organization administrators.
   * @param teamUrl {String} 
   * @param title {String} The title of the discussion.
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function TeamDiscussion(author, body, bodyHtml, bodyVersion, commentsCount, commentsUrl, createdAt, htmlUrl, lastEditedAt, nodeId, _number, pinned, _private, teamUrl, title, updatedAt, url) {
    _classCallCheck(this, TeamDiscussion);

    TeamDiscussion.initialize(this, author, body, bodyHtml, bodyVersion, commentsCount, commentsUrl, createdAt, htmlUrl, lastEditedAt, nodeId, _number, pinned, _private, teamUrl, title, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamDiscussion, null, [{
    key: "initialize",
    value: function initialize(obj, author, body, bodyHtml, bodyVersion, commentsCount, commentsUrl, createdAt, htmlUrl, lastEditedAt, nodeId, _number, pinned, _private, teamUrl, title, updatedAt, url) {
      obj['author'] = author;
      obj['body'] = body;
      obj['body_html'] = bodyHtml;
      obj['body_version'] = bodyVersion;
      obj['comments_count'] = commentsCount;
      obj['comments_url'] = commentsUrl;
      obj['created_at'] = createdAt;
      obj['html_url'] = htmlUrl;
      obj['last_edited_at'] = lastEditedAt;
      obj['node_id'] = nodeId;
      obj['number'] = _number;
      obj['pinned'] = pinned;
      obj['private'] = _private;
      obj['team_url'] = teamUrl;
      obj['title'] = title;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>TeamDiscussion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamDiscussion} obj Optional instance to populate.
     * @return {module:model/TeamDiscussion} The populated <code>TeamDiscussion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamDiscussion();

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

        if (data.hasOwnProperty('comments_count')) {
          obj['comments_count'] = _ApiClient["default"].convertToType(data['comments_count'], 'Number');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
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

        if (data.hasOwnProperty('pinned')) {
          obj['pinned'] = _ApiClient["default"].convertToType(data['pinned'], 'Boolean');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('reactions')) {
          obj['reactions'] = _ReactionRollup["default"].constructFromObject(data['reactions']);
        }

        if (data.hasOwnProperty('team_url')) {
          obj['team_url'] = _ApiClient["default"].convertToType(data['team_url'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
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

  return TeamDiscussion;
}();
/**
 * @member {module:model/SimpleUser} author
 */


TeamDiscussion.prototype['author'] = undefined;
/**
 * The main text of the discussion.
 * @member {String} body
 */

TeamDiscussion.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

TeamDiscussion.prototype['body_html'] = undefined;
/**
 * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
 * @member {String} body_version
 */

TeamDiscussion.prototype['body_version'] = undefined;
/**
 * @member {Number} comments_count
 */

TeamDiscussion.prototype['comments_count'] = undefined;
/**
 * @member {String} comments_url
 */

TeamDiscussion.prototype['comments_url'] = undefined;
/**
 * @member {Date} created_at
 */

TeamDiscussion.prototype['created_at'] = undefined;
/**
 * @member {String} html_url
 */

TeamDiscussion.prototype['html_url'] = undefined;
/**
 * @member {Date} last_edited_at
 */

TeamDiscussion.prototype['last_edited_at'] = undefined;
/**
 * @member {String} node_id
 */

TeamDiscussion.prototype['node_id'] = undefined;
/**
 * The unique sequence number of a team discussion.
 * @member {Number} number
 */

TeamDiscussion.prototype['number'] = undefined;
/**
 * Whether or not this discussion should be pinned for easy retrieval.
 * @member {Boolean} pinned
 */

TeamDiscussion.prototype['pinned'] = undefined;
/**
 * Whether or not this discussion should be restricted to team members and organization administrators.
 * @member {Boolean} private
 */

TeamDiscussion.prototype['private'] = undefined;
/**
 * @member {module:model/ReactionRollup} reactions
 */

TeamDiscussion.prototype['reactions'] = undefined;
/**
 * @member {String} team_url
 */

TeamDiscussion.prototype['team_url'] = undefined;
/**
 * The title of the discussion.
 * @member {String} title
 */

TeamDiscussion.prototype['title'] = undefined;
/**
 * @member {Date} updated_at
 */

TeamDiscussion.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

TeamDiscussion.prototype['url'] = undefined;
var _default = TeamDiscussion;
exports["default"] = _default;