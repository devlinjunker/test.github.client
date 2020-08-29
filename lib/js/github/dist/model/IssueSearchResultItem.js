"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Integration = _interopRequireDefault(require("./Integration"));

var _IssuePullRequest = _interopRequireDefault(require("./IssuePullRequest"));

var _IssueSearchResultItemLabels = _interopRequireDefault(require("./IssueSearchResultItemLabels"));

var _Milestone = _interopRequireDefault(require("./Milestone"));

var _Repository = _interopRequireDefault(require("./Repository"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueSearchResultItem model module.
 * @module model/IssueSearchResultItem
 * @version 0.0.5
 */
var IssueSearchResultItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueSearchResultItem</code>.
   * Issue Search Result Item
   * @alias module:model/IssueSearchResultItem
   * @param assignee {module:model/SimpleUser} 
   * @param authorAssociation {String} 
   * @param closedAt {Date} 
   * @param comments {Number} 
   * @param commentsUrl {String} 
   * @param createdAt {Date} 
   * @param eventsUrl {String} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param labels {Array.<module:model/IssueSearchResultItemLabels>} 
   * @param labelsUrl {String} 
   * @param locked {Boolean} 
   * @param milestone {module:model/Milestone} 
   * @param nodeId {String} 
   * @param _number {Number} 
   * @param repositoryUrl {String} 
   * @param score {Number} 
   * @param state {String} 
   * @param title {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   */
  function IssueSearchResultItem(assignee, authorAssociation, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labels, labelsUrl, locked, milestone, nodeId, _number, repositoryUrl, score, state, title, updatedAt, url, user) {
    _classCallCheck(this, IssueSearchResultItem);

    IssueSearchResultItem.initialize(this, assignee, authorAssociation, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labels, labelsUrl, locked, milestone, nodeId, _number, repositoryUrl, score, state, title, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueSearchResultItem, null, [{
    key: "initialize",
    value: function initialize(obj, assignee, authorAssociation, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labels, labelsUrl, locked, milestone, nodeId, _number, repositoryUrl, score, state, title, updatedAt, url, user) {
      obj['assignee'] = assignee;
      obj['author_association'] = authorAssociation;
      obj['closed_at'] = closedAt;
      obj['comments'] = comments;
      obj['comments_url'] = commentsUrl;
      obj['created_at'] = createdAt;
      obj['events_url'] = eventsUrl;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['labels'] = labels;
      obj['labels_url'] = labelsUrl;
      obj['locked'] = locked;
      obj['milestone'] = milestone;
      obj['node_id'] = nodeId;
      obj['number'] = _number;
      obj['repository_url'] = repositoryUrl;
      obj['score'] = score;
      obj['state'] = state;
      obj['title'] = title;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>IssueSearchResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueSearchResultItem} obj Optional instance to populate.
     * @return {module:model/IssueSearchResultItem} The populated <code>IssueSearchResultItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueSearchResultItem();

        if (data.hasOwnProperty('active_lock_reason')) {
          obj['active_lock_reason'] = _ApiClient["default"].convertToType(data['active_lock_reason'], 'String');
        }

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _ApiClient["default"].convertToType(data['assignee'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('assignees')) {
          obj['assignees'] = _ApiClient["default"].convertToType(data['assignees'], [_SimpleUser["default"]]);
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

        if (data.hasOwnProperty('closed_at')) {
          obj['closed_at'] = _ApiClient["default"].convertToType(data['closed_at'], 'Date');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], [_IssueSearchResultItemLabels["default"]]);
        }

        if (data.hasOwnProperty('labels_url')) {
          obj['labels_url'] = _ApiClient["default"].convertToType(data['labels_url'], 'String');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _ApiClient["default"].convertToType(data['milestone'], _Milestone["default"]);
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('performed_via_github_app')) {
          obj['performed_via_github_app'] = _ApiClient["default"].convertToType(data['performed_via_github_app'], _Integration["default"]);
        }

        if (data.hasOwnProperty('pull_request')) {
          obj['pull_request'] = _IssuePullRequest["default"].constructFromObject(data['pull_request']);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('repository_url')) {
          obj['repository_url'] = _ApiClient["default"].convertToType(data['repository_url'], 'String');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('text_matches')) {
          obj['text_matches'] = _ApiClient["default"].convertToType(data['text_matches'], [Object]);
        }

        if (data.hasOwnProperty('timeline_url')) {
          obj['timeline_url'] = _ApiClient["default"].convertToType(data['timeline_url'], 'String');
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

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return IssueSearchResultItem;
}();
/**
 * @member {String} active_lock_reason
 */


IssueSearchResultItem.prototype['active_lock_reason'] = undefined;
/**
 * @member {module:model/SimpleUser} assignee
 */

IssueSearchResultItem.prototype['assignee'] = undefined;
/**
 * @member {Array.<module:model/SimpleUser>} assignees
 */

IssueSearchResultItem.prototype['assignees'] = undefined;
/**
 * @member {String} author_association
 */

IssueSearchResultItem.prototype['author_association'] = undefined;
/**
 * @member {String} body
 */

IssueSearchResultItem.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

IssueSearchResultItem.prototype['body_html'] = undefined;
/**
 * @member {String} body_text
 */

IssueSearchResultItem.prototype['body_text'] = undefined;
/**
 * @member {Date} closed_at
 */

IssueSearchResultItem.prototype['closed_at'] = undefined;
/**
 * @member {Number} comments
 */

IssueSearchResultItem.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

IssueSearchResultItem.prototype['comments_url'] = undefined;
/**
 * @member {Date} created_at
 */

IssueSearchResultItem.prototype['created_at'] = undefined;
/**
 * @member {Boolean} draft
 */

IssueSearchResultItem.prototype['draft'] = undefined;
/**
 * @member {String} events_url
 */

IssueSearchResultItem.prototype['events_url'] = undefined;
/**
 * @member {String} html_url
 */

IssueSearchResultItem.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

IssueSearchResultItem.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/IssueSearchResultItemLabels>} labels
 */

IssueSearchResultItem.prototype['labels'] = undefined;
/**
 * @member {String} labels_url
 */

IssueSearchResultItem.prototype['labels_url'] = undefined;
/**
 * @member {Boolean} locked
 */

IssueSearchResultItem.prototype['locked'] = undefined;
/**
 * @member {module:model/Milestone} milestone
 */

IssueSearchResultItem.prototype['milestone'] = undefined;
/**
 * @member {String} node_id
 */

IssueSearchResultItem.prototype['node_id'] = undefined;
/**
 * @member {Number} number
 */

IssueSearchResultItem.prototype['number'] = undefined;
/**
 * @member {module:model/Integration} performed_via_github_app
 */

IssueSearchResultItem.prototype['performed_via_github_app'] = undefined;
/**
 * @member {module:model/IssuePullRequest} pull_request
 */

IssueSearchResultItem.prototype['pull_request'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

IssueSearchResultItem.prototype['repository'] = undefined;
/**
 * @member {String} repository_url
 */

IssueSearchResultItem.prototype['repository_url'] = undefined;
/**
 * @member {Number} score
 */

IssueSearchResultItem.prototype['score'] = undefined;
/**
 * @member {String} state
 */

IssueSearchResultItem.prototype['state'] = undefined;
/**
 * @member {Array.<Object>} text_matches
 */

IssueSearchResultItem.prototype['text_matches'] = undefined;
/**
 * @member {String} timeline_url
 */

IssueSearchResultItem.prototype['timeline_url'] = undefined;
/**
 * @member {String} title
 */

IssueSearchResultItem.prototype['title'] = undefined;
/**
 * @member {Date} updated_at
 */

IssueSearchResultItem.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

IssueSearchResultItem.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

IssueSearchResultItem.prototype['user'] = undefined;
var _default = IssueSearchResultItem;
exports["default"] = _default;