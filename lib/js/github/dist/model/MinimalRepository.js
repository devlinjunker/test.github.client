"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MinimalRepositoryLicense = _interopRequireDefault(require("./MinimalRepositoryLicense"));

var _MinimalRepositoryPermissions = _interopRequireDefault(require("./MinimalRepositoryPermissions"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MinimalRepository model module.
 * @module model/MinimalRepository
 * @version 0.0.5
 */
var MinimalRepository = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MinimalRepository</code>.
   * Minimal Repository
   * @alias module:model/MinimalRepository
   * @param archiveUrl {String} 
   * @param assigneesUrl {String} 
   * @param blobsUrl {String} 
   * @param branchesUrl {String} 
   * @param collaboratorsUrl {String} 
   * @param commentsUrl {String} 
   * @param commitsUrl {String} 
   * @param compareUrl {String} 
   * @param contentsUrl {String} 
   * @param contributorsUrl {String} 
   * @param deploymentsUrl {String} 
   * @param description {String} 
   * @param downloadsUrl {String} 
   * @param eventsUrl {String} 
   * @param fork {Boolean} 
   * @param forksUrl {String} 
   * @param fullName {String} 
   * @param gitCommitsUrl {String} 
   * @param gitRefsUrl {String} 
   * @param gitTagsUrl {String} 
   * @param hooksUrl {String} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param issueCommentUrl {String} 
   * @param issueEventsUrl {String} 
   * @param issuesUrl {String} 
   * @param keysUrl {String} 
   * @param labelsUrl {String} 
   * @param languagesUrl {String} 
   * @param mergesUrl {String} 
   * @param milestonesUrl {String} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param notificationsUrl {String} 
   * @param owner {module:model/SimpleUser} 
   * @param _private {Boolean} 
   * @param pullsUrl {String} 
   * @param releasesUrl {String} 
   * @param stargazersUrl {String} 
   * @param statusesUrl {String} 
   * @param subscribersUrl {String} 
   * @param subscriptionUrl {String} 
   * @param tagsUrl {String} 
   * @param teamsUrl {String} 
   * @param treesUrl {String} 
   * @param url {String} 
   */
  function MinimalRepository(archiveUrl, assigneesUrl, blobsUrl, branchesUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, deploymentsUrl, description, downloadsUrl, eventsUrl, fork, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, languagesUrl, mergesUrl, milestonesUrl, name, nodeId, notificationsUrl, owner, _private, pullsUrl, releasesUrl, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, tagsUrl, teamsUrl, treesUrl, url) {
    _classCallCheck(this, MinimalRepository);

    MinimalRepository.initialize(this, archiveUrl, assigneesUrl, blobsUrl, branchesUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, deploymentsUrl, description, downloadsUrl, eventsUrl, fork, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, languagesUrl, mergesUrl, milestonesUrl, name, nodeId, notificationsUrl, owner, _private, pullsUrl, releasesUrl, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, tagsUrl, teamsUrl, treesUrl, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MinimalRepository, null, [{
    key: "initialize",
    value: function initialize(obj, archiveUrl, assigneesUrl, blobsUrl, branchesUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, deploymentsUrl, description, downloadsUrl, eventsUrl, fork, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, languagesUrl, mergesUrl, milestonesUrl, name, nodeId, notificationsUrl, owner, _private, pullsUrl, releasesUrl, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, tagsUrl, teamsUrl, treesUrl, url) {
      obj['archive_url'] = archiveUrl;
      obj['assignees_url'] = assigneesUrl;
      obj['blobs_url'] = blobsUrl;
      obj['branches_url'] = branchesUrl;
      obj['collaborators_url'] = collaboratorsUrl;
      obj['comments_url'] = commentsUrl;
      obj['commits_url'] = commitsUrl;
      obj['compare_url'] = compareUrl;
      obj['contents_url'] = contentsUrl;
      obj['contributors_url'] = contributorsUrl;
      obj['deployments_url'] = deploymentsUrl;
      obj['description'] = description;
      obj['downloads_url'] = downloadsUrl;
      obj['events_url'] = eventsUrl;
      obj['fork'] = fork;
      obj['forks_url'] = forksUrl;
      obj['full_name'] = fullName;
      obj['git_commits_url'] = gitCommitsUrl;
      obj['git_refs_url'] = gitRefsUrl;
      obj['git_tags_url'] = gitTagsUrl;
      obj['hooks_url'] = hooksUrl;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['issue_comment_url'] = issueCommentUrl;
      obj['issue_events_url'] = issueEventsUrl;
      obj['issues_url'] = issuesUrl;
      obj['keys_url'] = keysUrl;
      obj['labels_url'] = labelsUrl;
      obj['languages_url'] = languagesUrl;
      obj['merges_url'] = mergesUrl;
      obj['milestones_url'] = milestonesUrl;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['notifications_url'] = notificationsUrl;
      obj['owner'] = owner;
      obj['private'] = _private;
      obj['pulls_url'] = pullsUrl;
      obj['releases_url'] = releasesUrl;
      obj['stargazers_url'] = stargazersUrl;
      obj['statuses_url'] = statusesUrl;
      obj['subscribers_url'] = subscribersUrl;
      obj['subscription_url'] = subscriptionUrl;
      obj['tags_url'] = tagsUrl;
      obj['teams_url'] = teamsUrl;
      obj['trees_url'] = treesUrl;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>MinimalRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MinimalRepository} obj Optional instance to populate.
     * @return {module:model/MinimalRepository} The populated <code>MinimalRepository</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MinimalRepository();

        if (data.hasOwnProperty('archive_url')) {
          obj['archive_url'] = _ApiClient["default"].convertToType(data['archive_url'], 'String');
        }

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('assignees_url')) {
          obj['assignees_url'] = _ApiClient["default"].convertToType(data['assignees_url'], 'String');
        }

        if (data.hasOwnProperty('blobs_url')) {
          obj['blobs_url'] = _ApiClient["default"].convertToType(data['blobs_url'], 'String');
        }

        if (data.hasOwnProperty('branches_url')) {
          obj['branches_url'] = _ApiClient["default"].convertToType(data['branches_url'], 'String');
        }

        if (data.hasOwnProperty('clone_url')) {
          obj['clone_url'] = _ApiClient["default"].convertToType(data['clone_url'], 'String');
        }

        if (data.hasOwnProperty('collaborators_url')) {
          obj['collaborators_url'] = _ApiClient["default"].convertToType(data['collaborators_url'], 'String');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('commits_url')) {
          obj['commits_url'] = _ApiClient["default"].convertToType(data['commits_url'], 'String');
        }

        if (data.hasOwnProperty('compare_url')) {
          obj['compare_url'] = _ApiClient["default"].convertToType(data['compare_url'], 'String');
        }

        if (data.hasOwnProperty('contents_url')) {
          obj['contents_url'] = _ApiClient["default"].convertToType(data['contents_url'], 'String');
        }

        if (data.hasOwnProperty('contributors_url')) {
          obj['contributors_url'] = _ApiClient["default"].convertToType(data['contributors_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('default_branch')) {
          obj['default_branch'] = _ApiClient["default"].convertToType(data['default_branch'], 'String');
        }

        if (data.hasOwnProperty('delete_branch_on_merge')) {
          obj['delete_branch_on_merge'] = _ApiClient["default"].convertToType(data['delete_branch_on_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('deployments_url')) {
          obj['deployments_url'] = _ApiClient["default"].convertToType(data['deployments_url'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('downloads_url')) {
          obj['downloads_url'] = _ApiClient["default"].convertToType(data['downloads_url'], 'String');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('fork')) {
          obj['fork'] = _ApiClient["default"].convertToType(data['fork'], 'Boolean');
        }

        if (data.hasOwnProperty('forks')) {
          obj['forks'] = _ApiClient["default"].convertToType(data['forks'], 'Number');
        }

        if (data.hasOwnProperty('forks_count')) {
          obj['forks_count'] = _ApiClient["default"].convertToType(data['forks_count'], 'Number');
        }

        if (data.hasOwnProperty('forks_url')) {
          obj['forks_url'] = _ApiClient["default"].convertToType(data['forks_url'], 'String');
        }

        if (data.hasOwnProperty('full_name')) {
          obj['full_name'] = _ApiClient["default"].convertToType(data['full_name'], 'String');
        }

        if (data.hasOwnProperty('git_commits_url')) {
          obj['git_commits_url'] = _ApiClient["default"].convertToType(data['git_commits_url'], 'String');
        }

        if (data.hasOwnProperty('git_refs_url')) {
          obj['git_refs_url'] = _ApiClient["default"].convertToType(data['git_refs_url'], 'String');
        }

        if (data.hasOwnProperty('git_tags_url')) {
          obj['git_tags_url'] = _ApiClient["default"].convertToType(data['git_tags_url'], 'String');
        }

        if (data.hasOwnProperty('git_url')) {
          obj['git_url'] = _ApiClient["default"].convertToType(data['git_url'], 'String');
        }

        if (data.hasOwnProperty('has_downloads')) {
          obj['has_downloads'] = _ApiClient["default"].convertToType(data['has_downloads'], 'Boolean');
        }

        if (data.hasOwnProperty('has_issues')) {
          obj['has_issues'] = _ApiClient["default"].convertToType(data['has_issues'], 'Boolean');
        }

        if (data.hasOwnProperty('has_pages')) {
          obj['has_pages'] = _ApiClient["default"].convertToType(data['has_pages'], 'Boolean');
        }

        if (data.hasOwnProperty('has_projects')) {
          obj['has_projects'] = _ApiClient["default"].convertToType(data['has_projects'], 'Boolean');
        }

        if (data.hasOwnProperty('has_wiki')) {
          obj['has_wiki'] = _ApiClient["default"].convertToType(data['has_wiki'], 'Boolean');
        }

        if (data.hasOwnProperty('homepage')) {
          obj['homepage'] = _ApiClient["default"].convertToType(data['homepage'], 'String');
        }

        if (data.hasOwnProperty('hooks_url')) {
          obj['hooks_url'] = _ApiClient["default"].convertToType(data['hooks_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('is_template')) {
          obj['is_template'] = _ApiClient["default"].convertToType(data['is_template'], 'Boolean');
        }

        if (data.hasOwnProperty('issue_comment_url')) {
          obj['issue_comment_url'] = _ApiClient["default"].convertToType(data['issue_comment_url'], 'String');
        }

        if (data.hasOwnProperty('issue_events_url')) {
          obj['issue_events_url'] = _ApiClient["default"].convertToType(data['issue_events_url'], 'String');
        }

        if (data.hasOwnProperty('issues_url')) {
          obj['issues_url'] = _ApiClient["default"].convertToType(data['issues_url'], 'String');
        }

        if (data.hasOwnProperty('keys_url')) {
          obj['keys_url'] = _ApiClient["default"].convertToType(data['keys_url'], 'String');
        }

        if (data.hasOwnProperty('labels_url')) {
          obj['labels_url'] = _ApiClient["default"].convertToType(data['labels_url'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('languages_url')) {
          obj['languages_url'] = _ApiClient["default"].convertToType(data['languages_url'], 'String');
        }

        if (data.hasOwnProperty('license')) {
          obj['license'] = _MinimalRepositoryLicense["default"].constructFromObject(data['license']);
        }

        if (data.hasOwnProperty('merges_url')) {
          obj['merges_url'] = _ApiClient["default"].convertToType(data['merges_url'], 'String');
        }

        if (data.hasOwnProperty('milestones_url')) {
          obj['milestones_url'] = _ApiClient["default"].convertToType(data['milestones_url'], 'String');
        }

        if (data.hasOwnProperty('mirror_url')) {
          obj['mirror_url'] = _ApiClient["default"].convertToType(data['mirror_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('network_count')) {
          obj['network_count'] = _ApiClient["default"].convertToType(data['network_count'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('notifications_url')) {
          obj['notifications_url'] = _ApiClient["default"].convertToType(data['notifications_url'], 'String');
        }

        if (data.hasOwnProperty('open_issues')) {
          obj['open_issues'] = _ApiClient["default"].convertToType(data['open_issues'], 'Number');
        }

        if (data.hasOwnProperty('open_issues_count')) {
          obj['open_issues_count'] = _ApiClient["default"].convertToType(data['open_issues_count'], 'Number');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _MinimalRepositoryPermissions["default"].constructFromObject(data['permissions']);
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('pulls_url')) {
          obj['pulls_url'] = _ApiClient["default"].convertToType(data['pulls_url'], 'String');
        }

        if (data.hasOwnProperty('pushed_at')) {
          obj['pushed_at'] = _ApiClient["default"].convertToType(data['pushed_at'], 'Date');
        }

        if (data.hasOwnProperty('releases_url')) {
          obj['releases_url'] = _ApiClient["default"].convertToType(data['releases_url'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('ssh_url')) {
          obj['ssh_url'] = _ApiClient["default"].convertToType(data['ssh_url'], 'String');
        }

        if (data.hasOwnProperty('stargazers_count')) {
          obj['stargazers_count'] = _ApiClient["default"].convertToType(data['stargazers_count'], 'Number');
        }

        if (data.hasOwnProperty('stargazers_url')) {
          obj['stargazers_url'] = _ApiClient["default"].convertToType(data['stargazers_url'], 'String');
        }

        if (data.hasOwnProperty('statuses_url')) {
          obj['statuses_url'] = _ApiClient["default"].convertToType(data['statuses_url'], 'String');
        }

        if (data.hasOwnProperty('subscribers_count')) {
          obj['subscribers_count'] = _ApiClient["default"].convertToType(data['subscribers_count'], 'Number');
        }

        if (data.hasOwnProperty('subscribers_url')) {
          obj['subscribers_url'] = _ApiClient["default"].convertToType(data['subscribers_url'], 'String');
        }

        if (data.hasOwnProperty('subscription_url')) {
          obj['subscription_url'] = _ApiClient["default"].convertToType(data['subscription_url'], 'String');
        }

        if (data.hasOwnProperty('svn_url')) {
          obj['svn_url'] = _ApiClient["default"].convertToType(data['svn_url'], 'String');
        }

        if (data.hasOwnProperty('tags_url')) {
          obj['tags_url'] = _ApiClient["default"].convertToType(data['tags_url'], 'String');
        }

        if (data.hasOwnProperty('teams_url')) {
          obj['teams_url'] = _ApiClient["default"].convertToType(data['teams_url'], 'String');
        }

        if (data.hasOwnProperty('temp_clone_token')) {
          obj['temp_clone_token'] = _ApiClient["default"].convertToType(data['temp_clone_token'], 'String');
        }

        if (data.hasOwnProperty('template_repository')) {
          obj['template_repository'] = _ApiClient["default"].convertToType(data['template_repository'], 'String');
        }

        if (data.hasOwnProperty('topics')) {
          obj['topics'] = _ApiClient["default"].convertToType(data['topics'], ['String']);
        }

        if (data.hasOwnProperty('trees_url')) {
          obj['trees_url'] = _ApiClient["default"].convertToType(data['trees_url'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], 'String');
        }

        if (data.hasOwnProperty('watchers')) {
          obj['watchers'] = _ApiClient["default"].convertToType(data['watchers'], 'Number');
        }

        if (data.hasOwnProperty('watchers_count')) {
          obj['watchers_count'] = _ApiClient["default"].convertToType(data['watchers_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MinimalRepository;
}();
/**
 * @member {String} archive_url
 */


MinimalRepository.prototype['archive_url'] = undefined;
/**
 * @member {Boolean} archived
 */

MinimalRepository.prototype['archived'] = undefined;
/**
 * @member {String} assignees_url
 */

MinimalRepository.prototype['assignees_url'] = undefined;
/**
 * @member {String} blobs_url
 */

MinimalRepository.prototype['blobs_url'] = undefined;
/**
 * @member {String} branches_url
 */

MinimalRepository.prototype['branches_url'] = undefined;
/**
 * @member {String} clone_url
 */

MinimalRepository.prototype['clone_url'] = undefined;
/**
 * @member {String} collaborators_url
 */

MinimalRepository.prototype['collaborators_url'] = undefined;
/**
 * @member {String} comments_url
 */

MinimalRepository.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

MinimalRepository.prototype['commits_url'] = undefined;
/**
 * @member {String} compare_url
 */

MinimalRepository.prototype['compare_url'] = undefined;
/**
 * @member {String} contents_url
 */

MinimalRepository.prototype['contents_url'] = undefined;
/**
 * @member {String} contributors_url
 */

MinimalRepository.prototype['contributors_url'] = undefined;
/**
 * @member {Date} created_at
 */

MinimalRepository.prototype['created_at'] = undefined;
/**
 * @member {String} default_branch
 */

MinimalRepository.prototype['default_branch'] = undefined;
/**
 * @member {Boolean} delete_branch_on_merge
 */

MinimalRepository.prototype['delete_branch_on_merge'] = undefined;
/**
 * @member {String} deployments_url
 */

MinimalRepository.prototype['deployments_url'] = undefined;
/**
 * @member {String} description
 */

MinimalRepository.prototype['description'] = undefined;
/**
 * @member {Boolean} disabled
 */

MinimalRepository.prototype['disabled'] = undefined;
/**
 * @member {String} downloads_url
 */

MinimalRepository.prototype['downloads_url'] = undefined;
/**
 * @member {String} events_url
 */

MinimalRepository.prototype['events_url'] = undefined;
/**
 * @member {Boolean} fork
 */

MinimalRepository.prototype['fork'] = undefined;
/**
 * @member {Number} forks
 */

MinimalRepository.prototype['forks'] = undefined;
/**
 * @member {Number} forks_count
 */

MinimalRepository.prototype['forks_count'] = undefined;
/**
 * @member {String} forks_url
 */

MinimalRepository.prototype['forks_url'] = undefined;
/**
 * @member {String} full_name
 */

MinimalRepository.prototype['full_name'] = undefined;
/**
 * @member {String} git_commits_url
 */

MinimalRepository.prototype['git_commits_url'] = undefined;
/**
 * @member {String} git_refs_url
 */

MinimalRepository.prototype['git_refs_url'] = undefined;
/**
 * @member {String} git_tags_url
 */

MinimalRepository.prototype['git_tags_url'] = undefined;
/**
 * @member {String} git_url
 */

MinimalRepository.prototype['git_url'] = undefined;
/**
 * @member {Boolean} has_downloads
 */

MinimalRepository.prototype['has_downloads'] = undefined;
/**
 * @member {Boolean} has_issues
 */

MinimalRepository.prototype['has_issues'] = undefined;
/**
 * @member {Boolean} has_pages
 */

MinimalRepository.prototype['has_pages'] = undefined;
/**
 * @member {Boolean} has_projects
 */

MinimalRepository.prototype['has_projects'] = undefined;
/**
 * @member {Boolean} has_wiki
 */

MinimalRepository.prototype['has_wiki'] = undefined;
/**
 * @member {String} homepage
 */

MinimalRepository.prototype['homepage'] = undefined;
/**
 * @member {String} hooks_url
 */

MinimalRepository.prototype['hooks_url'] = undefined;
/**
 * @member {String} html_url
 */

MinimalRepository.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

MinimalRepository.prototype['id'] = undefined;
/**
 * @member {Boolean} is_template
 */

MinimalRepository.prototype['is_template'] = undefined;
/**
 * @member {String} issue_comment_url
 */

MinimalRepository.prototype['issue_comment_url'] = undefined;
/**
 * @member {String} issue_events_url
 */

MinimalRepository.prototype['issue_events_url'] = undefined;
/**
 * @member {String} issues_url
 */

MinimalRepository.prototype['issues_url'] = undefined;
/**
 * @member {String} keys_url
 */

MinimalRepository.prototype['keys_url'] = undefined;
/**
 * @member {String} labels_url
 */

MinimalRepository.prototype['labels_url'] = undefined;
/**
 * @member {String} language
 */

MinimalRepository.prototype['language'] = undefined;
/**
 * @member {String} languages_url
 */

MinimalRepository.prototype['languages_url'] = undefined;
/**
 * @member {module:model/MinimalRepositoryLicense} license
 */

MinimalRepository.prototype['license'] = undefined;
/**
 * @member {String} merges_url
 */

MinimalRepository.prototype['merges_url'] = undefined;
/**
 * @member {String} milestones_url
 */

MinimalRepository.prototype['milestones_url'] = undefined;
/**
 * @member {String} mirror_url
 */

MinimalRepository.prototype['mirror_url'] = undefined;
/**
 * @member {String} name
 */

MinimalRepository.prototype['name'] = undefined;
/**
 * @member {Number} network_count
 */

MinimalRepository.prototype['network_count'] = undefined;
/**
 * @member {String} node_id
 */

MinimalRepository.prototype['node_id'] = undefined;
/**
 * @member {String} notifications_url
 */

MinimalRepository.prototype['notifications_url'] = undefined;
/**
 * @member {Number} open_issues
 */

MinimalRepository.prototype['open_issues'] = undefined;
/**
 * @member {Number} open_issues_count
 */

MinimalRepository.prototype['open_issues_count'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

MinimalRepository.prototype['owner'] = undefined;
/**
 * @member {module:model/MinimalRepositoryPermissions} permissions
 */

MinimalRepository.prototype['permissions'] = undefined;
/**
 * @member {Boolean} private
 */

MinimalRepository.prototype['private'] = undefined;
/**
 * @member {String} pulls_url
 */

MinimalRepository.prototype['pulls_url'] = undefined;
/**
 * @member {Date} pushed_at
 */

MinimalRepository.prototype['pushed_at'] = undefined;
/**
 * @member {String} releases_url
 */

MinimalRepository.prototype['releases_url'] = undefined;
/**
 * @member {Number} size
 */

MinimalRepository.prototype['size'] = undefined;
/**
 * @member {String} ssh_url
 */

MinimalRepository.prototype['ssh_url'] = undefined;
/**
 * @member {Number} stargazers_count
 */

MinimalRepository.prototype['stargazers_count'] = undefined;
/**
 * @member {String} stargazers_url
 */

MinimalRepository.prototype['stargazers_url'] = undefined;
/**
 * @member {String} statuses_url
 */

MinimalRepository.prototype['statuses_url'] = undefined;
/**
 * @member {Number} subscribers_count
 */

MinimalRepository.prototype['subscribers_count'] = undefined;
/**
 * @member {String} subscribers_url
 */

MinimalRepository.prototype['subscribers_url'] = undefined;
/**
 * @member {String} subscription_url
 */

MinimalRepository.prototype['subscription_url'] = undefined;
/**
 * @member {String} svn_url
 */

MinimalRepository.prototype['svn_url'] = undefined;
/**
 * @member {String} tags_url
 */

MinimalRepository.prototype['tags_url'] = undefined;
/**
 * @member {String} teams_url
 */

MinimalRepository.prototype['teams_url'] = undefined;
/**
 * @member {String} temp_clone_token
 */

MinimalRepository.prototype['temp_clone_token'] = undefined;
/**
 * @member {String} template_repository
 */

MinimalRepository.prototype['template_repository'] = undefined;
/**
 * @member {Array.<String>} topics
 */

MinimalRepository.prototype['topics'] = undefined;
/**
 * @member {String} trees_url
 */

MinimalRepository.prototype['trees_url'] = undefined;
/**
 * @member {Date} updated_at
 */

MinimalRepository.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

MinimalRepository.prototype['url'] = undefined;
/**
 * @member {String} visibility
 */

MinimalRepository.prototype['visibility'] = undefined;
/**
 * @member {Number} watchers
 */

MinimalRepository.prototype['watchers'] = undefined;
/**
 * @member {Number} watchers_count
 */

MinimalRepository.prototype['watchers_count'] = undefined;
var _default = MinimalRepository;
exports["default"] = _default;