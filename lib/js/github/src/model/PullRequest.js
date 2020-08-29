/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IssueSearchResultItemLabels from './IssueSearchResultItemLabels';
import Milestone from './Milestone';
import PullRequestBase from './PullRequestBase';
import PullRequestHead from './PullRequestHead';
import PullRequestLinks from './PullRequestLinks';
import SimpleUser from './SimpleUser';
import TeamSimple from './TeamSimple';

/**
 * The PullRequest model module.
 * @module model/PullRequest
 * @version 0.0.5
 */
class PullRequest {
    /**
     * Constructs a new <code>PullRequest</code>.
     * Pull requests let you tell others about changes you&#39;ve pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
     * @alias module:model/PullRequest
     * @param links {module:model/PullRequestLinks} 
     * @param additions {Number} 
     * @param assignee {module:model/SimpleUser} 
     * @param authorAssociation {String} 
     * @param base {module:model/PullRequestBase} 
     * @param body {String} 
     * @param changedFiles {Number} 
     * @param closedAt {Date} 
     * @param comments {Number} 
     * @param commentsUrl {String} 
     * @param commits {Number} 
     * @param commitsUrl {String} 
     * @param createdAt {Date} 
     * @param deletions {Number} 
     * @param diffUrl {String} 
     * @param head {module:model/PullRequestHead} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param issueUrl {String} 
     * @param labels {Array.<module:model/IssueSearchResultItemLabels>} 
     * @param locked {Boolean} 
     * @param maintainerCanModify {Boolean} Indicates whether maintainers can modify the pull request.
     * @param mergeCommitSha {String} 
     * @param mergeable {Boolean} 
     * @param mergeableState {String} 
     * @param merged {Boolean} 
     * @param mergedAt {Date} 
     * @param mergedBy {module:model/SimpleUser} 
     * @param milestone {module:model/Milestone} 
     * @param nodeId {String} 
     * @param _number {Number} Number uniquely identifying the pull request within its repository.
     * @param patchUrl {String} 
     * @param reviewCommentUrl {String} 
     * @param reviewComments {Number} 
     * @param reviewCommentsUrl {String} 
     * @param state {module:model/PullRequest.StateEnum} State of this Pull Request. Either `open` or `closed`.
     * @param statusesUrl {String} 
     * @param title {String} The title of the pull request.
     * @param updatedAt {Date} 
     * @param url {String} 
     * @param user {module:model/SimpleUser} 
     */
    constructor(links, additions, assignee, authorAssociation, base, body, changedFiles, closedAt, comments, commentsUrl, commits, commitsUrl, createdAt, deletions, diffUrl, head, htmlUrl, id, issueUrl, labels, locked, maintainerCanModify, mergeCommitSha, mergeable, mergeableState, merged, mergedAt, mergedBy, milestone, nodeId, _number, patchUrl, reviewCommentUrl, reviewComments, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user) { 
        
        PullRequest.initialize(this, links, additions, assignee, authorAssociation, base, body, changedFiles, closedAt, comments, commentsUrl, commits, commitsUrl, createdAt, deletions, diffUrl, head, htmlUrl, id, issueUrl, labels, locked, maintainerCanModify, mergeCommitSha, mergeable, mergeableState, merged, mergedAt, mergedBy, milestone, nodeId, _number, patchUrl, reviewCommentUrl, reviewComments, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, links, additions, assignee, authorAssociation, base, body, changedFiles, closedAt, comments, commentsUrl, commits, commitsUrl, createdAt, deletions, diffUrl, head, htmlUrl, id, issueUrl, labels, locked, maintainerCanModify, mergeCommitSha, mergeable, mergeableState, merged, mergedAt, mergedBy, milestone, nodeId, _number, patchUrl, reviewCommentUrl, reviewComments, reviewCommentsUrl, state, statusesUrl, title, updatedAt, url, user) { 
        obj['_links'] = links;
        obj['additions'] = additions;
        obj['assignee'] = assignee;
        obj['author_association'] = authorAssociation;
        obj['base'] = base;
        obj['body'] = body;
        obj['changed_files'] = changedFiles;
        obj['closed_at'] = closedAt;
        obj['comments'] = comments;
        obj['comments_url'] = commentsUrl;
        obj['commits'] = commits;
        obj['commits_url'] = commitsUrl;
        obj['created_at'] = createdAt;
        obj['deletions'] = deletions;
        obj['diff_url'] = diffUrl;
        obj['head'] = head;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['issue_url'] = issueUrl;
        obj['labels'] = labels;
        obj['locked'] = locked;
        obj['maintainer_can_modify'] = maintainerCanModify;
        obj['merge_commit_sha'] = mergeCommitSha;
        obj['mergeable'] = mergeable;
        obj['mergeable_state'] = mergeableState;
        obj['merged'] = merged;
        obj['merged_at'] = mergedAt;
        obj['merged_by'] = mergedBy;
        obj['milestone'] = milestone;
        obj['node_id'] = nodeId;
        obj['number'] = _number;
        obj['patch_url'] = patchUrl;
        obj['review_comment_url'] = reviewCommentUrl;
        obj['review_comments'] = reviewComments;
        obj['review_comments_url'] = reviewCommentsUrl;
        obj['state'] = state;
        obj['statuses_url'] = statusesUrl;
        obj['title'] = title;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>PullRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequest} obj Optional instance to populate.
     * @return {module:model/PullRequest} The populated <code>PullRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequest();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = PullRequestLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('active_lock_reason')) {
                obj['active_lock_reason'] = ApiClient.convertToType(data['active_lock_reason'], 'String');
            }
            if (data.hasOwnProperty('additions')) {
                obj['additions'] = ApiClient.convertToType(data['additions'], 'Number');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], SimpleUser);
            }
            if (data.hasOwnProperty('assignees')) {
                obj['assignees'] = ApiClient.convertToType(data['assignees'], [SimpleUser]);
            }
            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = ApiClient.convertToType(data['author_association'], 'String');
            }
            if (data.hasOwnProperty('base')) {
                obj['base'] = PullRequestBase.constructFromObject(data['base']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('changed_files')) {
                obj['changed_files'] = ApiClient.convertToType(data['changed_files'], 'Number');
            }
            if (data.hasOwnProperty('closed_at')) {
                obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'Date');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'Number');
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('commits')) {
                obj['commits'] = ApiClient.convertToType(data['commits'], 'Number');
            }
            if (data.hasOwnProperty('commits_url')) {
                obj['commits_url'] = ApiClient.convertToType(data['commits_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deletions')) {
                obj['deletions'] = ApiClient.convertToType(data['deletions'], 'Number');
            }
            if (data.hasOwnProperty('diff_url')) {
                obj['diff_url'] = ApiClient.convertToType(data['diff_url'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('head')) {
                obj['head'] = PullRequestHead.constructFromObject(data['head']);
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('issue_url')) {
                obj['issue_url'] = ApiClient.convertToType(data['issue_url'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [IssueSearchResultItemLabels]);
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('maintainer_can_modify')) {
                obj['maintainer_can_modify'] = ApiClient.convertToType(data['maintainer_can_modify'], 'Boolean');
            }
            if (data.hasOwnProperty('merge_commit_sha')) {
                obj['merge_commit_sha'] = ApiClient.convertToType(data['merge_commit_sha'], 'String');
            }
            if (data.hasOwnProperty('mergeable')) {
                obj['mergeable'] = ApiClient.convertToType(data['mergeable'], 'Boolean');
            }
            if (data.hasOwnProperty('mergeable_state')) {
                obj['mergeable_state'] = ApiClient.convertToType(data['mergeable_state'], 'String');
            }
            if (data.hasOwnProperty('merged')) {
                obj['merged'] = ApiClient.convertToType(data['merged'], 'Boolean');
            }
            if (data.hasOwnProperty('merged_at')) {
                obj['merged_at'] = ApiClient.convertToType(data['merged_at'], 'Date');
            }
            if (data.hasOwnProperty('merged_by')) {
                obj['merged_by'] = ApiClient.convertToType(data['merged_by'], SimpleUser);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = ApiClient.convertToType(data['milestone'], Milestone);
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('patch_url')) {
                obj['patch_url'] = ApiClient.convertToType(data['patch_url'], 'String');
            }
            if (data.hasOwnProperty('rebaseable')) {
                obj['rebaseable'] = ApiClient.convertToType(data['rebaseable'], 'Boolean');
            }
            if (data.hasOwnProperty('requested_reviewers')) {
                obj['requested_reviewers'] = ApiClient.convertToType(data['requested_reviewers'], [SimpleUser]);
            }
            if (data.hasOwnProperty('requested_teams')) {
                obj['requested_teams'] = ApiClient.convertToType(data['requested_teams'], [TeamSimple]);
            }
            if (data.hasOwnProperty('review_comment_url')) {
                obj['review_comment_url'] = ApiClient.convertToType(data['review_comment_url'], 'String');
            }
            if (data.hasOwnProperty('review_comments')) {
                obj['review_comments'] = ApiClient.convertToType(data['review_comments'], 'Number');
            }
            if (data.hasOwnProperty('review_comments_url')) {
                obj['review_comments_url'] = ApiClient.convertToType(data['review_comments_url'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('statuses_url')) {
                obj['statuses_url'] = ApiClient.convertToType(data['statuses_url'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], SimpleUser);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PullRequestLinks} _links
 */
PullRequest.prototype['_links'] = undefined;

/**
 * @member {String} active_lock_reason
 */
PullRequest.prototype['active_lock_reason'] = undefined;

/**
 * @member {Number} additions
 */
PullRequest.prototype['additions'] = undefined;

/**
 * @member {module:model/SimpleUser} assignee
 */
PullRequest.prototype['assignee'] = undefined;

/**
 * @member {Array.<module:model/SimpleUser>} assignees
 */
PullRequest.prototype['assignees'] = undefined;

/**
 * @member {String} author_association
 */
PullRequest.prototype['author_association'] = undefined;

/**
 * @member {module:model/PullRequestBase} base
 */
PullRequest.prototype['base'] = undefined;

/**
 * @member {String} body
 */
PullRequest.prototype['body'] = undefined;

/**
 * @member {Number} changed_files
 */
PullRequest.prototype['changed_files'] = undefined;

/**
 * @member {Date} closed_at
 */
PullRequest.prototype['closed_at'] = undefined;

/**
 * @member {Number} comments
 */
PullRequest.prototype['comments'] = undefined;

/**
 * @member {String} comments_url
 */
PullRequest.prototype['comments_url'] = undefined;

/**
 * @member {Number} commits
 */
PullRequest.prototype['commits'] = undefined;

/**
 * @member {String} commits_url
 */
PullRequest.prototype['commits_url'] = undefined;

/**
 * @member {Date} created_at
 */
PullRequest.prototype['created_at'] = undefined;

/**
 * @member {Number} deletions
 */
PullRequest.prototype['deletions'] = undefined;

/**
 * @member {String} diff_url
 */
PullRequest.prototype['diff_url'] = undefined;

/**
 * Indicates whether or not the pull request is a draft.
 * @member {Boolean} draft
 */
PullRequest.prototype['draft'] = undefined;

/**
 * @member {module:model/PullRequestHead} head
 */
PullRequest.prototype['head'] = undefined;

/**
 * @member {String} html_url
 */
PullRequest.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
PullRequest.prototype['id'] = undefined;

/**
 * @member {String} issue_url
 */
PullRequest.prototype['issue_url'] = undefined;

/**
 * @member {Array.<module:model/IssueSearchResultItemLabels>} labels
 */
PullRequest.prototype['labels'] = undefined;

/**
 * @member {Boolean} locked
 */
PullRequest.prototype['locked'] = undefined;

/**
 * Indicates whether maintainers can modify the pull request.
 * @member {Boolean} maintainer_can_modify
 */
PullRequest.prototype['maintainer_can_modify'] = undefined;

/**
 * @member {String} merge_commit_sha
 */
PullRequest.prototype['merge_commit_sha'] = undefined;

/**
 * @member {Boolean} mergeable
 */
PullRequest.prototype['mergeable'] = undefined;

/**
 * @member {String} mergeable_state
 */
PullRequest.prototype['mergeable_state'] = undefined;

/**
 * @member {Boolean} merged
 */
PullRequest.prototype['merged'] = undefined;

/**
 * @member {Date} merged_at
 */
PullRequest.prototype['merged_at'] = undefined;

/**
 * @member {module:model/SimpleUser} merged_by
 */
PullRequest.prototype['merged_by'] = undefined;

/**
 * @member {module:model/Milestone} milestone
 */
PullRequest.prototype['milestone'] = undefined;

/**
 * @member {String} node_id
 */
PullRequest.prototype['node_id'] = undefined;

/**
 * Number uniquely identifying the pull request within its repository.
 * @member {Number} number
 */
PullRequest.prototype['number'] = undefined;

/**
 * @member {String} patch_url
 */
PullRequest.prototype['patch_url'] = undefined;

/**
 * @member {Boolean} rebaseable
 */
PullRequest.prototype['rebaseable'] = undefined;

/**
 * @member {Array.<module:model/SimpleUser>} requested_reviewers
 */
PullRequest.prototype['requested_reviewers'] = undefined;

/**
 * @member {Array.<module:model/TeamSimple>} requested_teams
 */
PullRequest.prototype['requested_teams'] = undefined;

/**
 * @member {String} review_comment_url
 */
PullRequest.prototype['review_comment_url'] = undefined;

/**
 * @member {Number} review_comments
 */
PullRequest.prototype['review_comments'] = undefined;

/**
 * @member {String} review_comments_url
 */
PullRequest.prototype['review_comments_url'] = undefined;

/**
 * State of this Pull Request. Either `open` or `closed`.
 * @member {module:model/PullRequest.StateEnum} state
 */
PullRequest.prototype['state'] = undefined;

/**
 * @member {String} statuses_url
 */
PullRequest.prototype['statuses_url'] = undefined;

/**
 * The title of the pull request.
 * @member {String} title
 */
PullRequest.prototype['title'] = undefined;

/**
 * @member {Date} updated_at
 */
PullRequest.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
PullRequest.prototype['url'] = undefined;

/**
 * @member {module:model/SimpleUser} user
 */
PullRequest.prototype['user'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
PullRequest['StateEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"
};



export default PullRequest;
