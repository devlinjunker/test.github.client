"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Milestone = _interopRequireDefault(require("./Milestone"));

var _PullRequestLinks = _interopRequireDefault(require("./PullRequestLinks"));

var _PullRequestSimpleBase = _interopRequireDefault(require("./PullRequestSimpleBase"));

var _PullRequestSimpleLabels = _interopRequireDefault(require("./PullRequestSimpleLabels"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

var _TeamSimple = _interopRequireDefault(require("./TeamSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestSimple model module.
 * @module model/PullRequestSimple
 * @version 0.0.5
 */
var PullRequestSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestSimple</code>.
   * Pull Request Simple
   * @alias module:model/PullRequestSimple
   * @param links {module:model/PullRequestLinks} 
   * @param assignee {module:model/SimpleUser} 
   * @param authorAssociation {String} 
   * @param base {module:model/PullRequestSimpleBase} 
   * @param body {String} 
   * @param closedAt {Date} 
   * @param commentsUrl {String} 
   * @param commitsUrl {String} 
   * @param createdAt {Date} 
   * @param diffUrl {String} 
   * @param head {module:model/PullRequestSimpleBase} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param issueUrl {String} 
   * @param labels {Array.<module:model/PullRequestSimpleLabels>} 
   * @param locked {Boolean} 
   * @param mergeCommitSha {String} 
   * @param mergedAt {Date} 
   * @param milestone {module:model/Milestone} 
   * @param nodeId {String} 
   * @param _number {Number} 
   * @param patchUrl {String} 
   * @param reviewCommentUrl {String} 
   * @param reviewCommentsUrl {String} 
   * @param state {String} 
   * @param statusesUrl {String} 
   * @param title {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   */
  function PullRequestSimple(links, assignee, authorAssociation, base, body, closedAt, commentsUrl, commitsUrl, createdAt, diffUrl, head, htmlUrl, id, issueUrl, labels, locked, mergeCommitSha, mergedAt, milestone, nodeId, _number, patchUrl, reviewCommentUrl, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user) {
    _classCallCheck(this, PullRequestSimple);

    PullRequestSimple.initialize(this, links, assignee, authorAssociation, base, body, closedAt, commentsUrl, commitsUrl, createdAt, diffUrl, head, htmlUrl, id, issueUrl, labels, locked, mergeCommitSha, mergedAt, milestone, nodeId, _number, patchUrl, reviewCommentUrl, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestSimple, null, [{
    key: "initialize",
    value: function initialize(obj, links, assignee, authorAssociation, base, body, closedAt, commentsUrl, commitsUrl, createdAt, diffUrl, head, htmlUrl, id, issueUrl, labels, locked, mergeCommitSha, mergedAt, milestone, nodeId, _number, patchUrl, reviewCommentUrl, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user) {
      obj['_links'] = links;
      obj['assignee'] = assignee;
      obj['author_association'] = authorAssociation;
      obj['base'] = base;
      obj['body'] = body;
      obj['closed_at'] = closedAt;
      obj['comments_url'] = commentsUrl;
      obj['commits_url'] = commitsUrl;
      obj['created_at'] = createdAt;
      obj['diff_url'] = diffUrl;
      obj['head'] = head;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['issue_url'] = issueUrl;
      obj['labels'] = labels;
      obj['locked'] = locked;
      obj['merge_commit_sha'] = mergeCommitSha;
      obj['merged_at'] = mergedAt;
      obj['milestone'] = milestone;
      obj['node_id'] = nodeId;
      obj['number'] = _number;
      obj['patch_url'] = patchUrl;
      obj['review_comment_url'] = reviewCommentUrl;
      obj['review_comments_url'] = reviewCommentsUrl;
      obj['state'] = state;
      obj['statuses_url'] = statusesUrl;
      obj['title'] = title;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>PullRequestSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestSimple} obj Optional instance to populate.
     * @return {module:model/PullRequestSimple} The populated <code>PullRequestSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestSimple();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _PullRequestLinks["default"].constructFromObject(data['_links']);
        }

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

        if (data.hasOwnProperty('base')) {
          obj['base'] = _PullRequestSimpleBase["default"].constructFromObject(data['base']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('closed_at')) {
          obj['closed_at'] = _ApiClient["default"].convertToType(data['closed_at'], 'Date');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('commits_url')) {
          obj['commits_url'] = _ApiClient["default"].convertToType(data['commits_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('diff_url')) {
          obj['diff_url'] = _ApiClient["default"].convertToType(data['diff_url'], 'String');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('head')) {
          obj['head'] = _PullRequestSimpleBase["default"].constructFromObject(data['head']);
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

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], [_PullRequestSimpleLabels["default"]]);
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }

        if (data.hasOwnProperty('merge_commit_sha')) {
          obj['merge_commit_sha'] = _ApiClient["default"].convertToType(data['merge_commit_sha'], 'String');
        }

        if (data.hasOwnProperty('merged_at')) {
          obj['merged_at'] = _ApiClient["default"].convertToType(data['merged_at'], 'Date');
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

        if (data.hasOwnProperty('patch_url')) {
          obj['patch_url'] = _ApiClient["default"].convertToType(data['patch_url'], 'String');
        }

        if (data.hasOwnProperty('requested_reviewers')) {
          obj['requested_reviewers'] = _ApiClient["default"].convertToType(data['requested_reviewers'], [_SimpleUser["default"]]);
        }

        if (data.hasOwnProperty('requested_teams')) {
          obj['requested_teams'] = _ApiClient["default"].convertToType(data['requested_teams'], [_TeamSimple["default"]]);
        }

        if (data.hasOwnProperty('review_comment_url')) {
          obj['review_comment_url'] = _ApiClient["default"].convertToType(data['review_comment_url'], 'String');
        }

        if (data.hasOwnProperty('review_comments_url')) {
          obj['review_comments_url'] = _ApiClient["default"].convertToType(data['review_comments_url'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('statuses_url')) {
          obj['statuses_url'] = _ApiClient["default"].convertToType(data['statuses_url'], 'String');
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

  return PullRequestSimple;
}();
/**
 * @member {module:model/PullRequestLinks} _links
 */


PullRequestSimple.prototype['_links'] = undefined;
/**
 * @member {String} active_lock_reason
 */

PullRequestSimple.prototype['active_lock_reason'] = undefined;
/**
 * @member {module:model/SimpleUser} assignee
 */

PullRequestSimple.prototype['assignee'] = undefined;
/**
 * @member {Array.<module:model/SimpleUser>} assignees
 */

PullRequestSimple.prototype['assignees'] = undefined;
/**
 * @member {String} author_association
 */

PullRequestSimple.prototype['author_association'] = undefined;
/**
 * @member {module:model/PullRequestSimpleBase} base
 */

PullRequestSimple.prototype['base'] = undefined;
/**
 * @member {String} body
 */

PullRequestSimple.prototype['body'] = undefined;
/**
 * @member {Date} closed_at
 */

PullRequestSimple.prototype['closed_at'] = undefined;
/**
 * @member {String} comments_url
 */

PullRequestSimple.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

PullRequestSimple.prototype['commits_url'] = undefined;
/**
 * @member {Date} created_at
 */

PullRequestSimple.prototype['created_at'] = undefined;
/**
 * @member {String} diff_url
 */

PullRequestSimple.prototype['diff_url'] = undefined;
/**
 * Indicates whether or not the pull request is a draft.
 * @member {Boolean} draft
 */

PullRequestSimple.prototype['draft'] = undefined;
/**
 * @member {module:model/PullRequestSimpleBase} head
 */

PullRequestSimple.prototype['head'] = undefined;
/**
 * @member {String} html_url
 */

PullRequestSimple.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

PullRequestSimple.prototype['id'] = undefined;
/**
 * @member {String} issue_url
 */

PullRequestSimple.prototype['issue_url'] = undefined;
/**
 * @member {Array.<module:model/PullRequestSimpleLabels>} labels
 */

PullRequestSimple.prototype['labels'] = undefined;
/**
 * @member {Boolean} locked
 */

PullRequestSimple.prototype['locked'] = undefined;
/**
 * @member {String} merge_commit_sha
 */

PullRequestSimple.prototype['merge_commit_sha'] = undefined;
/**
 * @member {Date} merged_at
 */

PullRequestSimple.prototype['merged_at'] = undefined;
/**
 * @member {module:model/Milestone} milestone
 */

PullRequestSimple.prototype['milestone'] = undefined;
/**
 * @member {String} node_id
 */

PullRequestSimple.prototype['node_id'] = undefined;
/**
 * @member {Number} number
 */

PullRequestSimple.prototype['number'] = undefined;
/**
 * @member {String} patch_url
 */

PullRequestSimple.prototype['patch_url'] = undefined;
/**
 * @member {Array.<module:model/SimpleUser>} requested_reviewers
 */

PullRequestSimple.prototype['requested_reviewers'] = undefined;
/**
 * @member {Array.<module:model/TeamSimple>} requested_teams
 */

PullRequestSimple.prototype['requested_teams'] = undefined;
/**
 * @member {String} review_comment_url
 */

PullRequestSimple.prototype['review_comment_url'] = undefined;
/**
 * @member {String} review_comments_url
 */

PullRequestSimple.prototype['review_comments_url'] = undefined;
/**
 * @member {String} state
 */

PullRequestSimple.prototype['state'] = undefined;
/**
 * @member {String} statuses_url
 */

PullRequestSimple.prototype['statuses_url'] = undefined;
/**
 * @member {String} title
 */

PullRequestSimple.prototype['title'] = undefined;
/**
 * @member {Date} updated_at
 */

PullRequestSimple.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

PullRequestSimple.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

PullRequestSimple.prototype['user'] = undefined;
var _default = PullRequestSimple;
exports["default"] = _default;