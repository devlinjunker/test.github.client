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
 * The IssueSimple model module.
 * @module model/IssueSimple
 * @version 0.0.5
 */
var IssueSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueSimple</code>.
   * Issue Simple
   * @alias module:model/IssueSimple
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
   * @param state {String} 
   * @param title {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   */
  function IssueSimple(assignee, authorAssociation, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labels, labelsUrl, locked, milestone, nodeId, _number, repositoryUrl, state, title, updatedAt, url, user) {
    _classCallCheck(this, IssueSimple);

    IssueSimple.initialize(this, assignee, authorAssociation, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labels, labelsUrl, locked, milestone, nodeId, _number, repositoryUrl, state, title, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueSimple, null, [{
    key: "initialize",
    value: function initialize(obj, assignee, authorAssociation, closedAt, comments, commentsUrl, createdAt, eventsUrl, htmlUrl, id, labels, labelsUrl, locked, milestone, nodeId, _number, repositoryUrl, state, title, updatedAt, url, user) {
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
      obj['state'] = state;
      obj['title'] = title;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>IssueSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueSimple} obj Optional instance to populate.
     * @return {module:model/IssueSimple} The populated <code>IssueSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueSimple();

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

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
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

  return IssueSimple;
}();
/**
 * @member {String} active_lock_reason
 */


IssueSimple.prototype['active_lock_reason'] = undefined;
/**
 * @member {module:model/SimpleUser} assignee
 */

IssueSimple.prototype['assignee'] = undefined;
/**
 * @member {Array.<module:model/SimpleUser>} assignees
 */

IssueSimple.prototype['assignees'] = undefined;
/**
 * @member {String} author_association
 */

IssueSimple.prototype['author_association'] = undefined;
/**
 * @member {String} body
 */

IssueSimple.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

IssueSimple.prototype['body_html'] = undefined;
/**
 * @member {String} body_text
 */

IssueSimple.prototype['body_text'] = undefined;
/**
 * @member {Date} closed_at
 */

IssueSimple.prototype['closed_at'] = undefined;
/**
 * @member {Number} comments
 */

IssueSimple.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

IssueSimple.prototype['comments_url'] = undefined;
/**
 * @member {Date} created_at
 */

IssueSimple.prototype['created_at'] = undefined;
/**
 * @member {String} events_url
 */

IssueSimple.prototype['events_url'] = undefined;
/**
 * @member {String} html_url
 */

IssueSimple.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

IssueSimple.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/IssueSearchResultItemLabels>} labels
 */

IssueSimple.prototype['labels'] = undefined;
/**
 * @member {String} labels_url
 */

IssueSimple.prototype['labels_url'] = undefined;
/**
 * @member {Boolean} locked
 */

IssueSimple.prototype['locked'] = undefined;
/**
 * @member {module:model/Milestone} milestone
 */

IssueSimple.prototype['milestone'] = undefined;
/**
 * @member {String} node_id
 */

IssueSimple.prototype['node_id'] = undefined;
/**
 * @member {Number} number
 */

IssueSimple.prototype['number'] = undefined;
/**
 * @member {module:model/Integration} performed_via_github_app
 */

IssueSimple.prototype['performed_via_github_app'] = undefined;
/**
 * @member {module:model/IssuePullRequest} pull_request
 */

IssueSimple.prototype['pull_request'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

IssueSimple.prototype['repository'] = undefined;
/**
 * @member {String} repository_url
 */

IssueSimple.prototype['repository_url'] = undefined;
/**
 * @member {String} state
 */

IssueSimple.prototype['state'] = undefined;
/**
 * @member {String} timeline_url
 */

IssueSimple.prototype['timeline_url'] = undefined;
/**
 * @member {String} title
 */

IssueSimple.prototype['title'] = undefined;
/**
 * @member {Date} updated_at
 */

IssueSimple.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

IssueSimple.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

IssueSimple.prototype['user'] = undefined;
var _default = IssueSimple;
exports["default"] = _default;