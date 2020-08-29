"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LicenseSimple = _interopRequireDefault(require("./LicenseSimple"));

var _RepositoryPermissions = _interopRequireDefault(require("./RepositoryPermissions"));

var _RepositoryTemplateRepository = _interopRequireDefault(require("./RepositoryTemplateRepository"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TeamRepository model module.
 * @module model/TeamRepository
 * @version 0.0.5
 */
var TeamRepository = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamRepository</code>.
   * A team&#39;s access to a repository.
   * @alias module:model/TeamRepository
   * @param archiveUrl {String} 
   * @param archived {Boolean} Whether the repository is archived.
   * @param assigneesUrl {String} 
   * @param blobsUrl {String} 
   * @param branchesUrl {String} 
   * @param cloneUrl {String} 
   * @param collaboratorsUrl {String} 
   * @param commentsUrl {String} 
   * @param commitsUrl {String} 
   * @param compareUrl {String} 
   * @param contentsUrl {String} 
   * @param contributorsUrl {String} 
   * @param createdAt {Date} 
   * @param defaultBranch {String} The default branch of the repository.
   * @param deploymentsUrl {String} 
   * @param description {String} 
   * @param disabled {Boolean} Returns whether or not this repository disabled.
   * @param downloadsUrl {String} 
   * @param eventsUrl {String} 
   * @param fork {Boolean} 
   * @param forks {Number} 
   * @param forksCount {Number} 
   * @param forksUrl {String} 
   * @param fullName {String} 
   * @param gitCommitsUrl {String} 
   * @param gitRefsUrl {String} 
   * @param gitTagsUrl {String} 
   * @param gitUrl {String} 
   * @param hasDownloads {Boolean} Whether downloads are enabled.
   * @param hasIssues {Boolean} Whether issues are enabled.
   * @param hasPages {Boolean} 
   * @param hasProjects {Boolean} Whether projects are enabled.
   * @param hasWiki {Boolean} Whether the wiki is enabled.
   * @param homepage {String} 
   * @param hooksUrl {String} 
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the repository
   * @param issueCommentUrl {String} 
   * @param issueEventsUrl {String} 
   * @param issuesUrl {String} 
   * @param keysUrl {String} 
   * @param labelsUrl {String} 
   * @param language {String} 
   * @param languagesUrl {String} 
   * @param license {module:model/LicenseSimple} 
   * @param mergesUrl {String} 
   * @param milestonesUrl {String} 
   * @param mirrorUrl {String} 
   * @param name {String} The name of the repository.
   * @param nodeId {String} 
   * @param notificationsUrl {String} 
   * @param openIssues {Number} 
   * @param openIssuesCount {Number} 
   * @param owner {module:model/SimpleUser} 
   * @param _private {Boolean} Whether the repository is private or public.
   * @param pullsUrl {String} 
   * @param pushedAt {Date} 
   * @param releasesUrl {String} 
   * @param size {Number} 
   * @param sshUrl {String} 
   * @param stargazersCount {Number} 
   * @param stargazersUrl {String} 
   * @param statusesUrl {String} 
   * @param subscribersUrl {String} 
   * @param subscriptionUrl {String} 
   * @param svnUrl {String} 
   * @param tagsUrl {String} 
   * @param teamsUrl {String} 
   * @param treesUrl {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   * @param watchers {Number} 
   * @param watchersCount {Number} 
   */
  function TeamRepository(archiveUrl, archived, assigneesUrl, blobsUrl, branchesUrl, cloneUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, createdAt, defaultBranch, deploymentsUrl, description, disabled, downloadsUrl, eventsUrl, fork, forks, forksCount, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, gitUrl, hasDownloads, hasIssues, hasPages, hasProjects, hasWiki, homepage, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, language, languagesUrl, license, mergesUrl, milestonesUrl, mirrorUrl, name, nodeId, notificationsUrl, openIssues, openIssuesCount, owner, _private, pullsUrl, pushedAt, releasesUrl, size, sshUrl, stargazersCount, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, svnUrl, tagsUrl, teamsUrl, treesUrl, updatedAt, url, watchers, watchersCount) {
    _classCallCheck(this, TeamRepository);

    TeamRepository.initialize(this, archiveUrl, archived, assigneesUrl, blobsUrl, branchesUrl, cloneUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, createdAt, defaultBranch, deploymentsUrl, description, disabled, downloadsUrl, eventsUrl, fork, forks, forksCount, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, gitUrl, hasDownloads, hasIssues, hasPages, hasProjects, hasWiki, homepage, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, language, languagesUrl, license, mergesUrl, milestonesUrl, mirrorUrl, name, nodeId, notificationsUrl, openIssues, openIssuesCount, owner, _private, pullsUrl, pushedAt, releasesUrl, size, sshUrl, stargazersCount, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, svnUrl, tagsUrl, teamsUrl, treesUrl, updatedAt, url, watchers, watchersCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamRepository, null, [{
    key: "initialize",
    value: function initialize(obj, archiveUrl, archived, assigneesUrl, blobsUrl, branchesUrl, cloneUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, createdAt, defaultBranch, deploymentsUrl, description, disabled, downloadsUrl, eventsUrl, fork, forks, forksCount, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, gitUrl, hasDownloads, hasIssues, hasPages, hasProjects, hasWiki, homepage, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, language, languagesUrl, license, mergesUrl, milestonesUrl, mirrorUrl, name, nodeId, notificationsUrl, openIssues, openIssuesCount, owner, _private, pullsUrl, pushedAt, releasesUrl, size, sshUrl, stargazersCount, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, svnUrl, tagsUrl, teamsUrl, treesUrl, updatedAt, url, watchers, watchersCount) {
      obj['archive_url'] = archiveUrl;
      obj['archived'] = archived;
      obj['assignees_url'] = assigneesUrl;
      obj['blobs_url'] = blobsUrl;
      obj['branches_url'] = branchesUrl;
      obj['clone_url'] = cloneUrl;
      obj['collaborators_url'] = collaboratorsUrl;
      obj['comments_url'] = commentsUrl;
      obj['commits_url'] = commitsUrl;
      obj['compare_url'] = compareUrl;
      obj['contents_url'] = contentsUrl;
      obj['contributors_url'] = contributorsUrl;
      obj['created_at'] = createdAt;
      obj['default_branch'] = defaultBranch;
      obj['deployments_url'] = deploymentsUrl;
      obj['description'] = description;
      obj['disabled'] = disabled;
      obj['downloads_url'] = downloadsUrl;
      obj['events_url'] = eventsUrl;
      obj['fork'] = fork;
      obj['forks'] = forks;
      obj['forks_count'] = forksCount;
      obj['forks_url'] = forksUrl;
      obj['full_name'] = fullName;
      obj['git_commits_url'] = gitCommitsUrl;
      obj['git_refs_url'] = gitRefsUrl;
      obj['git_tags_url'] = gitTagsUrl;
      obj['git_url'] = gitUrl;
      obj['has_downloads'] = hasDownloads;
      obj['has_issues'] = hasIssues;
      obj['has_pages'] = hasPages;
      obj['has_projects'] = hasProjects;
      obj['has_wiki'] = hasWiki;
      obj['homepage'] = homepage;
      obj['hooks_url'] = hooksUrl;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['issue_comment_url'] = issueCommentUrl;
      obj['issue_events_url'] = issueEventsUrl;
      obj['issues_url'] = issuesUrl;
      obj['keys_url'] = keysUrl;
      obj['labels_url'] = labelsUrl;
      obj['language'] = language;
      obj['languages_url'] = languagesUrl;
      obj['license'] = license;
      obj['merges_url'] = mergesUrl;
      obj['milestones_url'] = milestonesUrl;
      obj['mirror_url'] = mirrorUrl;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['notifications_url'] = notificationsUrl;
      obj['open_issues'] = openIssues;
      obj['open_issues_count'] = openIssuesCount;
      obj['owner'] = owner;
      obj['private'] = _private;
      obj['pulls_url'] = pullsUrl;
      obj['pushed_at'] = pushedAt;
      obj['releases_url'] = releasesUrl;
      obj['size'] = size;
      obj['ssh_url'] = sshUrl;
      obj['stargazers_count'] = stargazersCount;
      obj['stargazers_url'] = stargazersUrl;
      obj['statuses_url'] = statusesUrl;
      obj['subscribers_url'] = subscribersUrl;
      obj['subscription_url'] = subscriptionUrl;
      obj['svn_url'] = svnUrl;
      obj['tags_url'] = tagsUrl;
      obj['teams_url'] = teamsUrl;
      obj['trees_url'] = treesUrl;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
      obj['watchers'] = watchers;
      obj['watchers_count'] = watchersCount;
    }
    /**
     * Constructs a <code>TeamRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamRepository} obj Optional instance to populate.
     * @return {module:model/TeamRepository} The populated <code>TeamRepository</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamRepository();

        if (data.hasOwnProperty('allow_merge_commit')) {
          obj['allow_merge_commit'] = _ApiClient["default"].convertToType(data['allow_merge_commit'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_rebase_merge')) {
          obj['allow_rebase_merge'] = _ApiClient["default"].convertToType(data['allow_rebase_merge'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_squash_merge')) {
          obj['allow_squash_merge'] = _ApiClient["default"].convertToType(data['allow_squash_merge'], 'Boolean');
        }

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
          obj['license'] = _ApiClient["default"].convertToType(data['license'], _LicenseSimple["default"]);
        }

        if (data.hasOwnProperty('master_branch')) {
          obj['master_branch'] = _ApiClient["default"].convertToType(data['master_branch'], 'String');
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
          obj['permissions'] = _RepositoryPermissions["default"].constructFromObject(data['permissions']);
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
          obj['template_repository'] = _RepositoryTemplateRepository["default"].constructFromObject(data['template_repository']);
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

  return TeamRepository;
}();
/**
 * Whether to allow merge commits for pull requests.
 * @member {Boolean} allow_merge_commit
 * @default true
 */


TeamRepository.prototype['allow_merge_commit'] = true;
/**
 * Whether to allow rebase merges for pull requests.
 * @member {Boolean} allow_rebase_merge
 * @default true
 */

TeamRepository.prototype['allow_rebase_merge'] = true;
/**
 * Whether to allow squash merges for pull requests.
 * @member {Boolean} allow_squash_merge
 * @default true
 */

TeamRepository.prototype['allow_squash_merge'] = true;
/**
 * @member {String} archive_url
 */

TeamRepository.prototype['archive_url'] = undefined;
/**
 * Whether the repository is archived.
 * @member {Boolean} archived
 * @default false
 */

TeamRepository.prototype['archived'] = false;
/**
 * @member {String} assignees_url
 */

TeamRepository.prototype['assignees_url'] = undefined;
/**
 * @member {String} blobs_url
 */

TeamRepository.prototype['blobs_url'] = undefined;
/**
 * @member {String} branches_url
 */

TeamRepository.prototype['branches_url'] = undefined;
/**
 * @member {String} clone_url
 */

TeamRepository.prototype['clone_url'] = undefined;
/**
 * @member {String} collaborators_url
 */

TeamRepository.prototype['collaborators_url'] = undefined;
/**
 * @member {String} comments_url
 */

TeamRepository.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

TeamRepository.prototype['commits_url'] = undefined;
/**
 * @member {String} compare_url
 */

TeamRepository.prototype['compare_url'] = undefined;
/**
 * @member {String} contents_url
 */

TeamRepository.prototype['contents_url'] = undefined;
/**
 * @member {String} contributors_url
 */

TeamRepository.prototype['contributors_url'] = undefined;
/**
 * @member {Date} created_at
 */

TeamRepository.prototype['created_at'] = undefined;
/**
 * The default branch of the repository.
 * @member {String} default_branch
 */

TeamRepository.prototype['default_branch'] = undefined;
/**
 * Whether to delete head branches when pull requests are merged
 * @member {Boolean} delete_branch_on_merge
 * @default false
 */

TeamRepository.prototype['delete_branch_on_merge'] = false;
/**
 * @member {String} deployments_url
 */

TeamRepository.prototype['deployments_url'] = undefined;
/**
 * @member {String} description
 */

TeamRepository.prototype['description'] = undefined;
/**
 * Returns whether or not this repository disabled.
 * @member {Boolean} disabled
 */

TeamRepository.prototype['disabled'] = undefined;
/**
 * @member {String} downloads_url
 */

TeamRepository.prototype['downloads_url'] = undefined;
/**
 * @member {String} events_url
 */

TeamRepository.prototype['events_url'] = undefined;
/**
 * @member {Boolean} fork
 */

TeamRepository.prototype['fork'] = undefined;
/**
 * @member {Number} forks
 */

TeamRepository.prototype['forks'] = undefined;
/**
 * @member {Number} forks_count
 */

TeamRepository.prototype['forks_count'] = undefined;
/**
 * @member {String} forks_url
 */

TeamRepository.prototype['forks_url'] = undefined;
/**
 * @member {String} full_name
 */

TeamRepository.prototype['full_name'] = undefined;
/**
 * @member {String} git_commits_url
 */

TeamRepository.prototype['git_commits_url'] = undefined;
/**
 * @member {String} git_refs_url
 */

TeamRepository.prototype['git_refs_url'] = undefined;
/**
 * @member {String} git_tags_url
 */

TeamRepository.prototype['git_tags_url'] = undefined;
/**
 * @member {String} git_url
 */

TeamRepository.prototype['git_url'] = undefined;
/**
 * Whether downloads are enabled.
 * @member {Boolean} has_downloads
 * @default true
 */

TeamRepository.prototype['has_downloads'] = true;
/**
 * Whether issues are enabled.
 * @member {Boolean} has_issues
 * @default true
 */

TeamRepository.prototype['has_issues'] = true;
/**
 * @member {Boolean} has_pages
 */

TeamRepository.prototype['has_pages'] = undefined;
/**
 * Whether projects are enabled.
 * @member {Boolean} has_projects
 * @default true
 */

TeamRepository.prototype['has_projects'] = true;
/**
 * Whether the wiki is enabled.
 * @member {Boolean} has_wiki
 * @default true
 */

TeamRepository.prototype['has_wiki'] = true;
/**
 * @member {String} homepage
 */

TeamRepository.prototype['homepage'] = undefined;
/**
 * @member {String} hooks_url
 */

TeamRepository.prototype['hooks_url'] = undefined;
/**
 * @member {String} html_url
 */

TeamRepository.prototype['html_url'] = undefined;
/**
 * Unique identifier of the repository
 * @member {Number} id
 */

TeamRepository.prototype['id'] = undefined;
/**
 * Whether this repository acts as a template that can be used to generate new repositories.
 * @member {Boolean} is_template
 * @default false
 */

TeamRepository.prototype['is_template'] = false;
/**
 * @member {String} issue_comment_url
 */

TeamRepository.prototype['issue_comment_url'] = undefined;
/**
 * @member {String} issue_events_url
 */

TeamRepository.prototype['issue_events_url'] = undefined;
/**
 * @member {String} issues_url
 */

TeamRepository.prototype['issues_url'] = undefined;
/**
 * @member {String} keys_url
 */

TeamRepository.prototype['keys_url'] = undefined;
/**
 * @member {String} labels_url
 */

TeamRepository.prototype['labels_url'] = undefined;
/**
 * @member {String} language
 */

TeamRepository.prototype['language'] = undefined;
/**
 * @member {String} languages_url
 */

TeamRepository.prototype['languages_url'] = undefined;
/**
 * @member {module:model/LicenseSimple} license
 */

TeamRepository.prototype['license'] = undefined;
/**
 * @member {String} master_branch
 */

TeamRepository.prototype['master_branch'] = undefined;
/**
 * @member {String} merges_url
 */

TeamRepository.prototype['merges_url'] = undefined;
/**
 * @member {String} milestones_url
 */

TeamRepository.prototype['milestones_url'] = undefined;
/**
 * @member {String} mirror_url
 */

TeamRepository.prototype['mirror_url'] = undefined;
/**
 * The name of the repository.
 * @member {String} name
 */

TeamRepository.prototype['name'] = undefined;
/**
 * @member {Number} network_count
 */

TeamRepository.prototype['network_count'] = undefined;
/**
 * @member {String} node_id
 */

TeamRepository.prototype['node_id'] = undefined;
/**
 * @member {String} notifications_url
 */

TeamRepository.prototype['notifications_url'] = undefined;
/**
 * @member {Number} open_issues
 */

TeamRepository.prototype['open_issues'] = undefined;
/**
 * @member {Number} open_issues_count
 */

TeamRepository.prototype['open_issues_count'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

TeamRepository.prototype['owner'] = undefined;
/**
 * @member {module:model/RepositoryPermissions} permissions
 */

TeamRepository.prototype['permissions'] = undefined;
/**
 * Whether the repository is private or public.
 * @member {Boolean} private
 * @default false
 */

TeamRepository.prototype['private'] = false;
/**
 * @member {String} pulls_url
 */

TeamRepository.prototype['pulls_url'] = undefined;
/**
 * @member {Date} pushed_at
 */

TeamRepository.prototype['pushed_at'] = undefined;
/**
 * @member {String} releases_url
 */

TeamRepository.prototype['releases_url'] = undefined;
/**
 * @member {Number} size
 */

TeamRepository.prototype['size'] = undefined;
/**
 * @member {String} ssh_url
 */

TeamRepository.prototype['ssh_url'] = undefined;
/**
 * @member {Number} stargazers_count
 */

TeamRepository.prototype['stargazers_count'] = undefined;
/**
 * @member {String} stargazers_url
 */

TeamRepository.prototype['stargazers_url'] = undefined;
/**
 * @member {String} statuses_url
 */

TeamRepository.prototype['statuses_url'] = undefined;
/**
 * @member {Number} subscribers_count
 */

TeamRepository.prototype['subscribers_count'] = undefined;
/**
 * @member {String} subscribers_url
 */

TeamRepository.prototype['subscribers_url'] = undefined;
/**
 * @member {String} subscription_url
 */

TeamRepository.prototype['subscription_url'] = undefined;
/**
 * @member {String} svn_url
 */

TeamRepository.prototype['svn_url'] = undefined;
/**
 * @member {String} tags_url
 */

TeamRepository.prototype['tags_url'] = undefined;
/**
 * @member {String} teams_url
 */

TeamRepository.prototype['teams_url'] = undefined;
/**
 * @member {String} temp_clone_token
 */

TeamRepository.prototype['temp_clone_token'] = undefined;
/**
 * @member {module:model/RepositoryTemplateRepository} template_repository
 */

TeamRepository.prototype['template_repository'] = undefined;
/**
 * @member {Array.<String>} topics
 */

TeamRepository.prototype['topics'] = undefined;
/**
 * @member {String} trees_url
 */

TeamRepository.prototype['trees_url'] = undefined;
/**
 * @member {Date} updated_at
 */

TeamRepository.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

TeamRepository.prototype['url'] = undefined;
/**
 * The repository visibility: public, private, or internal.
 * @member {String} visibility
 * @default 'public'
 */

TeamRepository.prototype['visibility'] = 'public';
/**
 * @member {Number} watchers
 */

TeamRepository.prototype['watchers'] = undefined;
/**
 * @member {Number} watchers_count
 */

TeamRepository.prototype['watchers_count'] = undefined;
var _default = TeamRepository;
exports["default"] = _default;