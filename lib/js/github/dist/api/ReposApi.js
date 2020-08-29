"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _BranchProtection = _interopRequireDefault(require("../model/BranchProtection"));

var _BranchRestrictionPolicy = _interopRequireDefault(require("../model/BranchRestrictionPolicy"));

var _BranchShort = _interopRequireDefault(require("../model/BranchShort"));

var _BranchWithProtection = _interopRequireDefault(require("../model/BranchWithProtection"));

var _CloneTraffic = _interopRequireDefault(require("../model/CloneTraffic"));

var _Collaborator = _interopRequireDefault(require("../model/Collaborator"));

var _CombinedCommitStatus = _interopRequireDefault(require("../model/CombinedCommitStatus"));

var _Commit = _interopRequireDefault(require("../model/Commit"));

var _CommitActivity = _interopRequireDefault(require("../model/CommitActivity"));

var _CommitComment = _interopRequireDefault(require("../model/CommitComment"));

var _CommitComparison = _interopRequireDefault(require("../model/CommitComparison"));

var _CommunityProfile = _interopRequireDefault(require("../model/CommunityProfile"));

var _ContentFile = _interopRequireDefault(require("../model/ContentFile"));

var _ContentTraffic = _interopRequireDefault(require("../model/ContentTraffic"));

var _Contributor = _interopRequireDefault(require("../model/Contributor"));

var _ContributorActivity = _interopRequireDefault(require("../model/ContributorActivity"));

var _DeployKey = _interopRequireDefault(require("../model/DeployKey"));

var _Deployment = _interopRequireDefault(require("../model/Deployment"));

var _DeploymentStatus = _interopRequireDefault(require("../model/DeploymentStatus"));

var _FileCommit = _interopRequireDefault(require("../model/FileCommit"));

var _FullRepository = _interopRequireDefault(require("../model/FullRepository"));

var _Hook = _interopRequireDefault(require("../model/Hook"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject115"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject116"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject117"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject118"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject120"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject121"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject122"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject144"));

var _InlineObject9 = _interopRequireDefault(require("../model/InlineObject26"));

var _InlineObject10 = _interopRequireDefault(require("../model/InlineObject46"));

var _InlineObject11 = _interopRequireDefault(require("../model/InlineObject49"));

var _InlineObject12 = _interopRequireDefault(require("../model/InlineObject50"));

var _InlineObject13 = _interopRequireDefault(require("../model/InlineObject51"));

var _InlineObject14 = _interopRequireDefault(require("../model/InlineObject56"));

var _InlineObject15 = _interopRequireDefault(require("../model/InlineObject57"));

var _InlineObject16 = _interopRequireDefault(require("../model/InlineObject59"));

var _InlineObject17 = _interopRequireDefault(require("../model/InlineObject60"));

var _InlineObject18 = _interopRequireDefault(require("../model/InlineObject61"));

var _InlineObject19 = _interopRequireDefault(require("../model/InlineObject62"));

var _InlineObject20 = _interopRequireDefault(require("../model/InlineObject63"));

var _InlineObject21 = _interopRequireDefault(require("../model/InlineObject64"));

var _InlineObject22 = _interopRequireDefault(require("../model/InlineObject65"));

var _InlineObject23 = _interopRequireDefault(require("../model/InlineObject72"));

var _InlineObject24 = _interopRequireDefault(require("../model/InlineObject73"));

var _InlineObject25 = _interopRequireDefault(require("../model/InlineObject79"));

var _InlineObject26 = _interopRequireDefault(require("../model/InlineObject91"));

var _InlineObject27 = _interopRequireDefault(require("../model/InlineObject94"));

var _InlineObject28 = _interopRequireDefault(require("../model/InlineObject98"));

var _InlineObject29 = _interopRequireDefault(require("../model/InlineObject99"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse202"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse4031"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse503"));

var _Integration = _interopRequireDefault(require("../model/Integration"));

var _MinimalRepository = _interopRequireDefault(require("../model/MinimalRepository"));

var _OneOfarraycontentFilecontentSymlinkcontentSubmodule = _interopRequireDefault(require("../model/OneOfarraycontentFilecontentSymlinkcontentSubmodule"));

var _Page = _interopRequireDefault(require("../model/Page"));

var _PageBuild = _interopRequireDefault(require("../model/PageBuild"));

var _PageBuildStatus = _interopRequireDefault(require("../model/PageBuildStatus"));

var _ParticipationStats = _interopRequireDefault(require("../model/ParticipationStats"));

var _ProtectedBranch = _interopRequireDefault(require("../model/ProtectedBranch"));

var _ProtectedBranchAdminEnforced = _interopRequireDefault(require("../model/ProtectedBranchAdminEnforced"));

var _ProtectedBranchPullRequestReview = _interopRequireDefault(require("../model/ProtectedBranchPullRequestReview"));

var _PullRequestSimple = _interopRequireDefault(require("../model/PullRequestSimple"));

var _ReferrerTraffic = _interopRequireDefault(require("../model/ReferrerTraffic"));

var _Release = _interopRequireDefault(require("../model/Release"));

var _ReleaseAsset = _interopRequireDefault(require("../model/ReleaseAsset"));

var _Repository = _interopRequireDefault(require("../model/Repository"));

var _RepositoryCollaboratorPermission = _interopRequireDefault(require("../model/RepositoryCollaboratorPermission"));

var _RepositoryInvitation = _interopRequireDefault(require("../model/RepositoryInvitation"));

var _ShortBranch = _interopRequireDefault(require("../model/ShortBranch"));

var _SimpleCommit = _interopRequireDefault(require("../model/SimpleCommit"));

var _SimpleUser = _interopRequireDefault(require("../model/SimpleUser"));

var _Status = _interopRequireDefault(require("../model/Status"));

var _StatusCheckPolicy = _interopRequireDefault(require("../model/StatusCheckPolicy"));

var _Tag = _interopRequireDefault(require("../model/Tag"));

var _Team = _interopRequireDefault(require("../model/Team"));

var _Topic = _interopRequireDefault(require("../model/Topic"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

var _ValidationErrorSimple = _interopRequireDefault(require("../model/ValidationErrorSimple"));

var _ViewTraffic = _interopRequireDefault(require("../model/ViewTraffic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Repos service.
* @module api/ReposApi
* @version 0.0.5
*/
var ReposApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ReposApi. 
  * @alias module:api/ReposApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ReposApi(apiClient) {
    _classCallCheck(this, ReposApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the reposAcceptInvitation operation.
   * @callback module:api/ReposApi~reposAcceptInvitationCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Accept a repository invitation
   * @param {Number} invitationId invitation_id parameter
   * @param {module:api/ReposApi~reposAcceptInvitationCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ReposApi, [{
    key: "reposAcceptInvitation",
    value: function reposAcceptInvitation(invitationId, callback) {
      var postBody = null; // verify the required parameter 'invitationId' is set

      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling reposAcceptInvitation");
      }

      var pathParams = {
        'invitation_id': invitationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/repository_invitations/{invitation_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposAddAppAccessRestrictions operation.
     * @callback module:api/ReposApi~reposAddAppAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Integration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add app access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.  | Type    | Description                                                                                                                                                | | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposAddAppAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Integration>}
     */

  }, {
    key: "reposAddAppAccessRestrictions",
    value: function reposAddAppAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposAddAppAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposAddAppAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposAddAppAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Integration["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposAddCollaborator operation.
     * @callback module:api/ReposApi~reposAddCollaboratorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryInvitation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a repository collaborator
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.  For more information the permission levels, see \"[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)\".  Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"  The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://developer.github.com/v3/repos/invitations/).  **Rate limits**  To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject56} opts.inlineObject56 
     * @param {module:api/ReposApi~reposAddCollaboratorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryInvitation}
     */

  }, {
    key: "reposAddCollaborator",
    value: function reposAddCollaborator(owner, repo, username, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject56']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposAddCollaborator");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposAddCollaborator");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling reposAddCollaborator");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RepositoryInvitation["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposAddStatusCheckContexts operation.
     * @callback module:api/ReposApi~reposAddStatusCheckContextsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposAddStatusCheckContextsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "reposAddStatusCheckContexts",
    value: function reposAddStatusCheckContexts(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposAddStatusCheckContexts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposAddStatusCheckContexts");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposAddStatusCheckContexts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposAddTeamAccessRestrictions operation.
     * @callback module:api/ReposApi~reposAddTeamAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add team access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Grants the specified teams push access for this branch. You can also give push access to child teams.  | Type    | Description                                                                                                                                | | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposAddTeamAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "reposAddTeamAccessRestrictions",
    value: function reposAddTeamAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposAddTeamAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposAddTeamAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposAddTeamAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Team["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposAddUserAccessRestrictions operation.
     * @callback module:api/ReposApi~reposAddUserAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add user access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Grants the specified people push access for this branch.  | Type    | Description                                                                                                                   | | ------- | ----------------------------------------------------------------------------------------------------------------------------- | | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposAddUserAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "reposAddUserAccessRestrictions",
    value: function reposAddUserAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposAddUserAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposAddUserAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposAddUserAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCheckCollaborator operation.
     * @callback module:api/ReposApi~reposCheckCollaboratorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a user is a repository collaborator
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.  Team members will include the members of child teams.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} username 
     * @param {module:api/ReposApi~reposCheckCollaboratorCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposCheckCollaborator",
    value: function reposCheckCollaborator(owner, repo, username, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCheckCollaborator");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCheckCollaborator");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling reposCheckCollaborator");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCheckVulnerabilityAlerts operation.
     * @callback module:api/ReposApi~reposCheckVulnerabilityAlertsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if vulnerability alerts are enabled for a repository
     * Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin access to the repository. For more information, see \"[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)\".
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposCheckVulnerabilityAlertsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposCheckVulnerabilityAlerts",
    value: function reposCheckVulnerabilityAlerts(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCheckVulnerabilityAlerts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCheckVulnerabilityAlerts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/vulnerability-alerts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCompareCommits operation.
     * @callback module:api/ReposApi~reposCompareCommitsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComparison} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compare two commits
     * Both `:base` and `:head` must be branch names in `:repo`. To compare branches across other repositories in the same network as `:repo`, use the format `<USERNAME>:branch`.  The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.  The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.  **Working with large comparisons**  The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://developer.github.com/v3/repos/commits/#list-commits) to enumerate all commits in the range.  For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long to generate. You can typically resolve this error by using a smaller commit range.  **Signature verification object**  The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:  These are the possible values for `reason` in the `verification` object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | `expired_key`            | The key that made the signature is expired.                                                                                       | | `not_signing_key`        | The \"signing\" flag is not among the usage flags in the GPG key that made the signature.                                           | | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         | | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      | | `unsigned`               | The object does not include a signature.                                                                                          | | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      | | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          | | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. | | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             | | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  | | `malformed_signature`    | There was an error parsing the signature.                                                                                         | | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} base base parameter
     * @param {String} head head parameter
     * @param {module:api/ReposApi~reposCompareCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComparison}
     */

  }, {
    key: "reposCompareCommits",
    value: function reposCompareCommits(owner, repo, base, head, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCompareCommits");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCompareCommits");
      } // verify the required parameter 'base' is set


      if (base === undefined || base === null) {
        throw new Error("Missing the required parameter 'base' when calling reposCompareCommits");
      } // verify the required parameter 'head' is set


      if (head === undefined || head === null) {
        throw new Error("Missing the required parameter 'head' when calling reposCompareCommits");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'base': base,
        'head': head
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommitComparison["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/compare/{base}...{head}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateCommitComment operation.
     * @callback module:api/ReposApi~reposCreateCommitCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a commit comment
     * Create a comment for a commit using its `:commit_sha`.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} commitSha commit_sha+ parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject59} opts.inlineObject59 
     * @param {module:api/ReposApi~reposCreateCommitCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComment}
     */

  }, {
    key: "reposCreateCommitComment",
    value: function reposCreateCommitComment(owner, repo, commitSha, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject59']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateCommitComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateCommitComment");
      } // verify the required parameter 'commitSha' is set


      if (commitSha === undefined || commitSha === null) {
        throw new Error("Missing the required parameter 'commitSha' when calling reposCreateCommitComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'commit_sha': commitSha
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CommitComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{commit_sha}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateCommitSignatureProtection operation.
     * @callback module:api/ReposApi~reposCreateCommitSignatureProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProtectedBranchAdminEnforced} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create commit signature protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposCreateCommitSignatureProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProtectedBranchAdminEnforced}
     */

  }, {
    key: "reposCreateCommitSignatureProtection",
    value: function reposCreateCommitSignatureProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateCommitSignatureProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateCommitSignatureProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposCreateCommitSignatureProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProtectedBranchAdminEnforced["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateCommitStatus operation.
     * @callback module:api/ReposApi~reposCreateCommitStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a commit status
     * Users with push access in a repository can create commit statuses for a given SHA.  Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} sha sha parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject118} opts.inlineObject118 
     * @param {module:api/ReposApi~reposCreateCommitStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Status}
     */

  }, {
    key: "reposCreateCommitStatus",
    value: function reposCreateCommitStatus(owner, repo, sha, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject118']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateCommitStatus");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateCommitStatus");
      } // verify the required parameter 'sha' is set


      if (sha === undefined || sha === null) {
        throw new Error("Missing the required parameter 'sha' when calling reposCreateCommitStatus");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'sha': sha
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Status["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/statuses/{sha}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateDeployKey operation.
     * @callback module:api/ReposApi~reposCreateDeployKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeployKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a deploy key
     * You can create a read-only deploy key.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject91} opts.inlineObject91 
     * @param {module:api/ReposApi~reposCreateDeployKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeployKey}
     */

  }, {
    key: "reposCreateDeployKey",
    value: function reposCreateDeployKey(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject91']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateDeployKey");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateDeployKey");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DeployKey["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateDeployment operation.
     * @callback module:api/ReposApi~reposCreateDeploymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deployment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a deployment
     * Deployments offer a few configurable parameters with certain defaults.  The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them before we merge a pull request.  The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter makes it easier to track which environments have requested deployments. The default environment is `production`.  The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds, the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will return a failure response.  By default, [commit statuses](https://developer.github.com/v3/repos/statuses) for every submitted context must be in a `success` state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do not require any contexts or create any commit statuses, the deployment will always succeed.  The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text field that will be passed on when a deployment event is dispatched.  The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an application with debugging enabled.  Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.  #### Merged branch response You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating a deployment. This auto-merge happens when: *   Auto-merge option is enabled in the repository *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example *   There are no merge conflicts  If there are no new commits in the base branch, a new request to create a deployment should give a successful response.  #### Merge conflict response This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.  #### Failed commit status checks This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success` status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject62} opts.inlineObject62 
     * @param {module:api/ReposApi~reposCreateDeploymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deployment}
     */

  }, {
    key: "reposCreateDeployment",
    value: function reposCreateDeployment(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject62']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateDeployment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateDeployment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Deployment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/deployments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateDeploymentStatus operation.
     * @callback module:api/ReposApi~reposCreateDeploymentStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeploymentStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a deployment status
     * Users with `push` access can create deployment statuses for a given deployment.  GitHub Apps require `read & write` access to \"Deployments\" and `read-only` access to \"Repo contents\" (for private repos). OAuth Apps require the `repo_deployment` scope.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} deploymentId deployment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject63} opts.inlineObject63 
     * @param {module:api/ReposApi~reposCreateDeploymentStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeploymentStatus}
     */

  }, {
    key: "reposCreateDeploymentStatus",
    value: function reposCreateDeploymentStatus(owner, repo, deploymentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject63']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateDeploymentStatus");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateDeploymentStatus");
      } // verify the required parameter 'deploymentId' is set


      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling reposCreateDeploymentStatus");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'deployment_id': deploymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DeploymentStatus["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/deployments/{deployment_id}/statuses', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateDispatchEvent operation.
     * @callback module:api/ReposApi~reposCreateDispatchEventCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository dispatch event
     * You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see \"[RepositoryDispatchEvent](https://developer.github.com/webhooks/event-payloads/#repository_dispatch).\"  The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow. For a test example, see the [input example](https://developer.github.com/v3/repos/#example-4).  To give you write access to the repository, you must use a personal access token with the `repo` scope. For more information, see \"[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)\" in the GitHub Help documentation.  This input example shows how you can use the `client_payload` as a test to debug your workflow.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject64} opts.inlineObject64 
     * @param {module:api/ReposApi~reposCreateDispatchEventCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposCreateDispatchEvent",
    value: function reposCreateDispatchEvent(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject64']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateDispatchEvent");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateDispatchEvent");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/dispatches', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateForAuthenticatedUser operation.
     * @callback module:api/ReposApi~reposCreateForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository for the authenticated user
     * Creates a new repository for the authenticated user.  **OAuth scope requirements**  When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:  *   `public_repo` scope or `repo` scope to create a public repository *   `repo` scope to create a private repository
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject144} opts.inlineObject144 
     * @param {module:api/ReposApi~reposCreateForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "reposCreateForAuthenticatedUser",
    value: function reposCreateForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject144'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/scim+json'];
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/user/repos', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateFork operation.
     * @callback module:api/ReposApi~reposCreateForkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a fork
     * Create a fork for the authenticated user.  **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject65} opts.inlineObject65 
     * @param {module:api/ReposApi~reposCreateForkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "reposCreateFork",
    value: function reposCreateFork(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject65']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateFork");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateFork");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/scim+json'];
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/forks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateInOrg operation.
     * @callback module:api/ReposApi~reposCreateInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization repository
     * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.  **OAuth scope requirements**  When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:  *   `public_repo` scope or `repo` scope to create a public repository *   `repo` scope to create a private repository
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject26} opts.inlineObject26 
     * @param {module:api/ReposApi~reposCreateInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "reposCreateInOrg",
    value: function reposCreateInOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject26']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reposCreateInOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/orgs/{org}/repos', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateOrUpdateFileContents operation.
     * @callback module:api/ReposApi~reposCreateOrUpdateFileContentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update file contents
     * Creates a new file or replaces an existing file in a repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} path path+ parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject60} opts.inlineObject60 
     * @param {module:api/ReposApi~reposCreateOrUpdateFileContentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileCommit}
     */

  }, {
    key: "reposCreateOrUpdateFileContents",
    value: function reposCreateOrUpdateFileContents(owner, repo, path, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject60']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateOrUpdateFileContents");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateOrUpdateFileContents");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling reposCreateOrUpdateFileContents");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'path': path
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileCommit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/contents/{path}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreatePagesSite operation.
     * @callback module:api/ReposApi~reposCreatePagesSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Page} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a GitHub Pages site
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject99} opts.inlineObject99 
     * @param {module:api/ReposApi~reposCreatePagesSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Page}
     */

  }, {
    key: "reposCreatePagesSite",
    value: function reposCreatePagesSite(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject99']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreatePagesSite");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreatePagesSite");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Page["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateRelease operation.
     * @callback module:api/ReposApi~reposCreateReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a release
     * Users with push access to the repository can create a release.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject115} opts.inlineObject115 
     * @param {module:api/ReposApi~reposCreateReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */

  }, {
    key: "reposCreateRelease",
    value: function reposCreateRelease(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject115']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateRelease");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateRelease");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Release["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateUsingTemplate operation.
     * @callback module:api/ReposApi~reposCreateUsingTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository using a template
     * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://developer.github.com/v3/repos/#get-a-repository) endpoint and check that the `is_template` key is `true`.  **OAuth scope requirements**  When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:  *   `public_repo` scope or `repo` scope to create a public repository *   `repo` scope to create a private repository
     * @param {String} templateOwner template_owner parameter
     * @param {String} templateRepo template_repo parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject122} opts.inlineObject122 
     * @param {module:api/ReposApi~reposCreateUsingTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "reposCreateUsingTemplate",
    value: function reposCreateUsingTemplate(templateOwner, templateRepo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject122']; // verify the required parameter 'templateOwner' is set

      if (templateOwner === undefined || templateOwner === null) {
        throw new Error("Missing the required parameter 'templateOwner' when calling reposCreateUsingTemplate");
      } // verify the required parameter 'templateRepo' is set


      if (templateRepo === undefined || templateRepo === null) {
        throw new Error("Missing the required parameter 'templateRepo' when calling reposCreateUsingTemplate");
      }

      var pathParams = {
        'template_owner': templateOwner,
        'template_repo': templateRepo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repos/{template_owner}/{template_repo}/generate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposCreateWebhook operation.
     * @callback module:api/ReposApi~reposCreateWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Hook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository webhook
     * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can share the same `config` as long as those webhooks do not have any `events` that overlap.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject72} opts.inlineObject72 
     * @param {module:api/ReposApi~reposCreateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Hook}
     */

  }, {
    key: "reposCreateWebhook",
    value: function reposCreateWebhook(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject72']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposCreateWebhook");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposCreateWebhook");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Hook["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeclineInvitation operation.
     * @callback module:api/ReposApi~reposDeclineInvitationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decline a repository invitation
     * @param {Number} invitationId invitation_id parameter
     * @param {module:api/ReposApi~reposDeclineInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeclineInvitation",
    value: function reposDeclineInvitation(invitationId, callback) {
      var postBody = null; // verify the required parameter 'invitationId' is set

      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling reposDeclineInvitation");
      }

      var pathParams = {
        'invitation_id': invitationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/repository_invitations/{invitation_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDelete operation.
     * @callback module:api/ReposApi~reposDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a repository
     * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.  If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, you will get a `403 Forbidden` response.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDelete",
    value: function reposDelete(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDelete");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDelete");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteAccessRestrictions operation.
     * @callback module:api/ReposApi~reposDeleteAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Disables the ability to restrict who can push to this branch.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposDeleteAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteAccessRestrictions",
    value: function reposDeleteAccessRestrictions(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposDeleteAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteAdminBranchProtection operation.
     * @callback module:api/ReposApi~reposDeleteAdminBranchProtectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete admin branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposDeleteAdminBranchProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteAdminBranchProtection",
    value: function reposDeleteAdminBranchProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteAdminBranchProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteAdminBranchProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposDeleteAdminBranchProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteBranchProtection operation.
     * @callback module:api/ReposApi~reposDeleteBranchProtectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposDeleteBranchProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteBranchProtection",
    value: function reposDeleteBranchProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteBranchProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteBranchProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposDeleteBranchProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteCommitComment operation.
     * @callback module:api/ReposApi~reposDeleteCommitCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a commit comment
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {module:api/ReposApi~reposDeleteCommitCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteCommitComment",
    value: function reposDeleteCommitComment(owner, repo, commentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteCommitComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteCommitComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reposDeleteCommitComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{comment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteCommitSignatureProtection operation.
     * @callback module:api/ReposApi~reposDeleteCommitSignatureProtectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete commit signature protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposDeleteCommitSignatureProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteCommitSignatureProtection",
    value: function reposDeleteCommitSignatureProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteCommitSignatureProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteCommitSignatureProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposDeleteCommitSignatureProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteDeployKey operation.
     * @callback module:api/ReposApi~reposDeleteDeployKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a deploy key
     * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} keyId key_id parameter
     * @param {module:api/ReposApi~reposDeleteDeployKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteDeployKey",
    value: function reposDeleteDeployKey(owner, repo, keyId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteDeployKey");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteDeployKey");
      } // verify the required parameter 'keyId' is set


      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling reposDeleteDeployKey");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/keys/{key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteDeployment operation.
     * @callback module:api/ReposApi~reposDeleteDeploymentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a deployment
     * To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.  To set a deployment as inactive, you must:  *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment. *   Mark the active deployment as inactive by adding any non-successful deployment status.  For more information, see \"[Create a deployment](https://developer.github.com/v3/repos/deployments/#create-a-deployment)\" and \"[Create a deployment status](https://developer.github.com/v3/repos/deployments/#create-a-deployment-status).\"
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} deploymentId deployment_id parameter
     * @param {module:api/ReposApi~reposDeleteDeploymentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteDeployment",
    value: function reposDeleteDeployment(owner, repo, deploymentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteDeployment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteDeployment");
      } // verify the required parameter 'deploymentId' is set


      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling reposDeleteDeployment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'deployment_id': deploymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/deployments/{deployment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteFile operation.
     * @callback module:api/ReposApi~reposDeleteFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file
     * Deletes a file in a repository.  You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.  The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.  You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} path path+ parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject61} opts.inlineObject61 
     * @param {module:api/ReposApi~reposDeleteFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileCommit}
     */

  }, {
    key: "reposDeleteFile",
    value: function reposDeleteFile(owner, repo, path, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject61']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteFile");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteFile");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling reposDeleteFile");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'path': path
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileCommit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/contents/{path}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteInvitation operation.
     * @callback module:api/ReposApi~reposDeleteInvitationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a repository invitation
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} invitationId invitation_id parameter
     * @param {module:api/ReposApi~reposDeleteInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteInvitation",
    value: function reposDeleteInvitation(owner, repo, invitationId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteInvitation");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteInvitation");
      } // verify the required parameter 'invitationId' is set


      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling reposDeleteInvitation");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'invitation_id': invitationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/invitations/{invitation_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeletePagesSite operation.
     * @callback module:api/ReposApi~reposDeletePagesSiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a GitHub Pages site
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposDeletePagesSiteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeletePagesSite",
    value: function reposDeletePagesSite(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeletePagesSite");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeletePagesSite");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeletePullRequestReviewProtection operation.
     * @callback module:api/ReposApi~reposDeletePullRequestReviewProtectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete pull request review protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposDeletePullRequestReviewProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeletePullRequestReviewProtection",
    value: function reposDeletePullRequestReviewProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeletePullRequestReviewProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeletePullRequestReviewProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposDeletePullRequestReviewProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteRelease operation.
     * @callback module:api/ReposApi~reposDeleteReleaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a release
     * Users with push access to the repository can delete a release.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} releaseId release_id parameter
     * @param {module:api/ReposApi~reposDeleteReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteRelease",
    value: function reposDeleteRelease(owner, repo, releaseId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteRelease");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteRelease");
      } // verify the required parameter 'releaseId' is set


      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling reposDeleteRelease");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'release_id': releaseId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{release_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteReleaseAsset operation.
     * @callback module:api/ReposApi~reposDeleteReleaseAssetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a release asset
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} assetId asset_id parameter
     * @param {module:api/ReposApi~reposDeleteReleaseAssetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteReleaseAsset",
    value: function reposDeleteReleaseAsset(owner, repo, assetId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteReleaseAsset");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteReleaseAsset");
      } // verify the required parameter 'assetId' is set


      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling reposDeleteReleaseAsset");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'asset_id': assetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/assets/{asset_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDeleteWebhook operation.
     * @callback module:api/ReposApi~reposDeleteWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a repository webhook
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} hookId 
     * @param {module:api/ReposApi~reposDeleteWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDeleteWebhook",
    value: function reposDeleteWebhook(owner, repo, hookId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDeleteWebhook");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDeleteWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling reposDeleteWebhook");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hook_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDisableAutomatedSecurityFixes operation.
     * @callback module:api/ReposApi~reposDisableAutomatedSecurityFixesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable automated security fixes
     * Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see \"[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)\".
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposDisableAutomatedSecurityFixesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDisableAutomatedSecurityFixes",
    value: function reposDisableAutomatedSecurityFixes(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDisableAutomatedSecurityFixes");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDisableAutomatedSecurityFixes");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/automated-security-fixes', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDisableVulnerabilityAlerts operation.
     * @callback module:api/ReposApi~reposDisableVulnerabilityAlertsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable vulnerability alerts
     * Disables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see \"[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)\".
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposDisableVulnerabilityAlertsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDisableVulnerabilityAlerts",
    value: function reposDisableVulnerabilityAlerts(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDisableVulnerabilityAlerts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDisableVulnerabilityAlerts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/vulnerability-alerts', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDownloadTarballArchive operation.
     * @callback module:api/ReposApi~reposDownloadTarballArchiveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a repository archive (tar)
     * Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. **Note**: For private repositories, these links are temporary and expire after five minutes.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref parameter
     * @param {module:api/ReposApi~reposDownloadTarballArchiveCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDownloadTarballArchive",
    value: function reposDownloadTarballArchive(owner, repo, ref, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDownloadTarballArchive");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDownloadTarballArchive");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling reposDownloadTarballArchive");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/tarball/{ref}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposDownloadZipballArchive operation.
     * @callback module:api/ReposApi~reposDownloadZipballArchiveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a repository archive (zip)
     * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. **Note**: For private repositories, these links are temporary and expire after five minutes.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref parameter
     * @param {module:api/ReposApi~reposDownloadZipballArchiveCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposDownloadZipballArchive",
    value: function reposDownloadZipballArchive(owner, repo, ref, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposDownloadZipballArchive");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposDownloadZipballArchive");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling reposDownloadZipballArchive");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/zipball/{ref}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposEnableAutomatedSecurityFixes operation.
     * @callback module:api/ReposApi~reposEnableAutomatedSecurityFixesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable automated security fixes
     * Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see \"[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)\".
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposEnableAutomatedSecurityFixesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposEnableAutomatedSecurityFixes",
    value: function reposEnableAutomatedSecurityFixes(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposEnableAutomatedSecurityFixes");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposEnableAutomatedSecurityFixes");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/automated-security-fixes', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposEnableVulnerabilityAlerts operation.
     * @callback module:api/ReposApi~reposEnableVulnerabilityAlertsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable vulnerability alerts
     * Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see \"[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)\".
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposEnableVulnerabilityAlertsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposEnableVulnerabilityAlerts",
    value: function reposEnableVulnerabilityAlerts(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposEnableVulnerabilityAlerts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposEnableVulnerabilityAlerts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/vulnerability-alerts', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGet operation.
     * @callback module:api/ReposApi~reposGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullRepository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a repository
     * When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.  The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullRepository}
     */

  }, {
    key: "reposGet",
    value: function reposGet(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGet");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGet");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FullRepository["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetAccessRestrictions operation.
     * @callback module:api/ReposApi~reposGetAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BranchRestrictionPolicy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Lists who has access to this protected branch.  **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BranchRestrictionPolicy}
     */

  }, {
    key: "reposGetAccessRestrictions",
    value: function reposGetAccessRestrictions(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BranchRestrictionPolicy["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetAdminBranchProtection operation.
     * @callback module:api/ReposApi~reposGetAdminBranchProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProtectedBranchAdminEnforced} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get admin branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetAdminBranchProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProtectedBranchAdminEnforced}
     */

  }, {
    key: "reposGetAdminBranchProtection",
    value: function reposGetAdminBranchProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetAdminBranchProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetAdminBranchProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetAdminBranchProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProtectedBranchAdminEnforced["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetAllStatusCheckContexts operation.
     * @callback module:api/ReposApi~reposGetAllStatusCheckContextsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetAllStatusCheckContextsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "reposGetAllStatusCheckContexts",
    value: function reposGetAllStatusCheckContexts(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetAllStatusCheckContexts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetAllStatusCheckContexts");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetAllStatusCheckContexts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetAllTopics operation.
     * @callback module:api/ReposApi~reposGetAllTopicsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Topic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all repository topics
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetAllTopicsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Topic}
     */

  }, {
    key: "reposGetAllTopics",
    value: function reposGetAllTopics(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetAllTopics");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetAllTopics");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Topic["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/topics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetAppsWithAccessToProtectedBranch operation.
     * @callback module:api/ReposApi~reposGetAppsWithAccessToProtectedBranchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Integration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get apps with access to the protected branch
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetAppsWithAccessToProtectedBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Integration>}
     */

  }, {
    key: "reposGetAppsWithAccessToProtectedBranch",
    value: function reposGetAppsWithAccessToProtectedBranch(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetAppsWithAccessToProtectedBranch");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetAppsWithAccessToProtectedBranch");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetAppsWithAccessToProtectedBranch");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Integration["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetBranch operation.
     * @callback module:api/ReposApi~reposGetBranchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BranchWithProtection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a branch
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BranchWithProtection}
     */

  }, {
    key: "reposGetBranch",
    value: function reposGetBranch(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetBranch");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetBranch");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetBranch");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BranchWithProtection["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetBranchProtection operation.
     * @callback module:api/ReposApi~reposGetBranchProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BranchProtection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetBranchProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BranchProtection}
     */

  }, {
    key: "reposGetBranchProtection",
    value: function reposGetBranchProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetBranchProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetBranchProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetBranchProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BranchProtection["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetClones operation.
     * @callback module:api/ReposApi~reposGetClonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloneTraffic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get repository clones
     * Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.per Must be one of: `day`, `week`. (default to 'day')
     * @param {module:api/ReposApi~reposGetClonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloneTraffic}
     */

  }, {
    key: "reposGetClones",
    value: function reposGetClones(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetClones");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetClones");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per': opts['per']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CloneTraffic["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/traffic/clones', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCodeFrequencyStats operation.
     * @callback module:api/ReposApi~reposGetCodeFrequencyStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Array>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the weekly commit activity
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetCodeFrequencyStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Array>}
     */

  }, {
    key: "reposGetCodeFrequencyStats",
    value: function reposGetCodeFrequencyStats(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCodeFrequencyStats");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCodeFrequencyStats");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Array];
      return this.apiClient.callApi('/repos/{owner}/{repo}/stats/code_frequency', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCollaboratorPermissionLevel operation.
     * @callback module:api/ReposApi~reposGetCollaboratorPermissionLevelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryCollaboratorPermission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get repository permissions for a user
     * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} username 
     * @param {module:api/ReposApi~reposGetCollaboratorPermissionLevelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryCollaboratorPermission}
     */

  }, {
    key: "reposGetCollaboratorPermissionLevel",
    value: function reposGetCollaboratorPermissionLevel(owner, repo, username, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCollaboratorPermissionLevel");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCollaboratorPermissionLevel");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling reposGetCollaboratorPermissionLevel");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RepositoryCollaboratorPermission["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators/{username}/permission', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCombinedStatusForRef operation.
     * @callback module:api/ReposApi~reposGetCombinedStatusForRefCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CombinedCommitStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the combined status for a specific reference
     * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.  The most recent status for each context is returned, up to 100. This field [paginates](https://developer.github.com/v3/#pagination) if there are over 100 contexts.  Additionally, a combined `state` is returned. The `state` is one of:  *   **failure** if any of the contexts report as `error` or `failure` *   **pending** if there are no statuses or a context is `pending` *   **success** if the latest status for all contexts is `success`
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {module:api/ReposApi~reposGetCombinedStatusForRefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CombinedCommitStatus}
     */

  }, {
    key: "reposGetCombinedStatusForRef",
    value: function reposGetCombinedStatusForRef(owner, repo, ref, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCombinedStatusForRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCombinedStatusForRef");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling reposGetCombinedStatusForRef");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CombinedCommitStatus["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{ref}/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCommit operation.
     * @callback module:api/ReposApi~reposGetCommitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a commit
     * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.  You can pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.  To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.  **Signature verification object**  The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:  These are the possible values for `reason` in the `verification` object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | `expired_key`            | The key that made the signature is expired.                                                                                       | | `not_signing_key`        | The \"signing\" flag is not among the usage flags in the GPG key that made the signature.                                           | | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         | | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      | | `unsigned`               | The object does not include a signature.                                                                                          | | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      | | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          | | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. | | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             | | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  | | `malformed_signature`    | There was an error parsing the signature.                                                                                         | | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {module:api/ReposApi~reposGetCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commit}
     */

  }, {
    key: "reposGetCommit",
    value: function reposGetCommit(owner, repo, ref, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCommit");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCommit");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling reposGetCommit");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Commit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{ref}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCommitActivityStats operation.
     * @callback module:api/ReposApi~reposGetCommitActivityStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CommitActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the last year of commit activity
     * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetCommitActivityStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CommitActivity>}
     */

  }, {
    key: "reposGetCommitActivityStats",
    value: function reposGetCommitActivityStats(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCommitActivityStats");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCommitActivityStats");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CommitActivity["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/stats/commit_activity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCommitComment operation.
     * @callback module:api/ReposApi~reposGetCommitCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a commit comment
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {module:api/ReposApi~reposGetCommitCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComment}
     */

  }, {
    key: "reposGetCommitComment",
    value: function reposGetCommitComment(owner, repo, commentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCommitComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCommitComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reposGetCommitComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommitComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCommitSignatureProtection operation.
     * @callback module:api/ReposApi~reposGetCommitSignatureProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProtectedBranchAdminEnforced} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get commit signature protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.  **Note**: You must enable branch protection to require signed commits.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetCommitSignatureProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProtectedBranchAdminEnforced}
     */

  }, {
    key: "reposGetCommitSignatureProtection",
    value: function reposGetCommitSignatureProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCommitSignatureProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCommitSignatureProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetCommitSignatureProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProtectedBranchAdminEnforced["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetCommunityProfileMetrics operation.
     * @callback module:api/ReposApi~reposGetCommunityProfileMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommunityProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get community profile metrics
     * This endpoint will return all community profile metrics, including an overall health score, repository description, the presence of documentation, detected code of conduct, detected license, and the presence of ISSUE\\_TEMPLATE, PULL\\_REQUEST\\_TEMPLATE, README, and CONTRIBUTING files.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetCommunityProfileMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommunityProfile}
     */

  }, {
    key: "reposGetCommunityProfileMetrics",
    value: function reposGetCommunityProfileMetrics(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetCommunityProfileMetrics");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetCommunityProfileMetrics");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommunityProfile["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/community/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetContent operation.
     * @callback module:api/ReposApi~reposGetContentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfarraycontentFilecontentSymlinkcontentSubmodule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get repository content
     * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit `:path`, you will receive the contents of all files in the repository.  Files and symlinks support [a custom media type](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML (when supported). All content types support [a custom media type](https://developer.github.com/v3/repos/contents/#custom-media-types) to ensure the content is returned in a consistent object format.  **Note**: *   To get a repository's contents recursively, you can [recursively get the tree](https://developer.github.com/v3/git/trees/). *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees API](https://developer.github.com/v3/git/trees/#get-a-tree). *   This API supports files up to 1 megabyte in size.  #### If the content is a directory The response will be an array of objects, one object for each item in the directory. When listing the contents of a directory, submodules have their \"type\" specified as \"file\". Logically, the value _should_ be \"submodule\". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW). In the next major version of the API, the type will be returned as \"submodule\".  #### If the content is a symlink  If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object  describing the symlink itself.  #### If the content is a submodule The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out the submodule at that specific commit.  If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links[\"git\"]`) and the github.com URLs (`html_url` and `_links[\"html\"]`) will have null values.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} path path+ parameter
     * @param {Object} opts Optional parameters
     * @param {String} opts.ref The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
     * @param {module:api/ReposApi~reposGetContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfarraycontentFilecontentSymlinkcontentSubmodule}
     */

  }, {
    key: "reposGetContent",
    value: function reposGetContent(owner, repo, path, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetContent");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetContent");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling reposGetContent");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'path': path
      };
      var queryParams = {
        'ref': opts['ref']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/vnd.github.v3.object'];
      var returnType = _OneOfarraycontentFilecontentSymlinkcontentSubmodule["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/contents/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetContributorsStats operation.
     * @callback module:api/ReposApi~reposGetContributorsStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContributorActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all contributor commit activity
     *  Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:  *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time). *   `a` - Number of additions *   `d` - Number of deletions *   `c` - Number of commits
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetContributorsStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContributorActivity>}
     */

  }, {
    key: "reposGetContributorsStats",
    value: function reposGetContributorsStats(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetContributorsStats");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetContributorsStats");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ContributorActivity["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/stats/contributors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetDeployKey operation.
     * @callback module:api/ReposApi~reposGetDeployKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeployKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deploy key
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} keyId key_id parameter
     * @param {module:api/ReposApi~reposGetDeployKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeployKey}
     */

  }, {
    key: "reposGetDeployKey",
    value: function reposGetDeployKey(owner, repo, keyId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetDeployKey");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetDeployKey");
      } // verify the required parameter 'keyId' is set


      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling reposGetDeployKey");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeployKey["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/keys/{key_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetDeployment operation.
     * @callback module:api/ReposApi~reposGetDeploymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deployment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deployment
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} deploymentId deployment_id parameter
     * @param {module:api/ReposApi~reposGetDeploymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deployment}
     */

  }, {
    key: "reposGetDeployment",
    value: function reposGetDeployment(owner, repo, deploymentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetDeployment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetDeployment");
      } // verify the required parameter 'deploymentId' is set


      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling reposGetDeployment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'deployment_id': deploymentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Deployment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/deployments/{deployment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetDeploymentStatus operation.
     * @callback module:api/ReposApi~reposGetDeploymentStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeploymentStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deployment status
     * Users with pull access can view a deployment status for a deployment:
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} deploymentId deployment_id parameter
     * @param {Number} statusId status_id parameter
     * @param {module:api/ReposApi~reposGetDeploymentStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeploymentStatus}
     */

  }, {
    key: "reposGetDeploymentStatus",
    value: function reposGetDeploymentStatus(owner, repo, deploymentId, statusId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetDeploymentStatus");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetDeploymentStatus");
      } // verify the required parameter 'deploymentId' is set


      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling reposGetDeploymentStatus");
      } // verify the required parameter 'statusId' is set


      if (statusId === undefined || statusId === null) {
        throw new Error("Missing the required parameter 'statusId' when calling reposGetDeploymentStatus");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'deployment_id': deploymentId,
        'status_id': statusId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeploymentStatus["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetLatestPagesBuild operation.
     * @callback module:api/ReposApi~reposGetLatestPagesBuildCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBuild} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get latest Pages build
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetLatestPagesBuildCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBuild}
     */

  }, {
    key: "reposGetLatestPagesBuild",
    value: function reposGetLatestPagesBuild(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetLatestPagesBuild");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetLatestPagesBuild");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBuild["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages/builds/latest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetLatestRelease operation.
     * @callback module:api/ReposApi~reposGetLatestReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the latest release
     * View the latest published full release for the repository.  The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetLatestReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */

  }, {
    key: "reposGetLatestRelease",
    value: function reposGetLatestRelease(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetLatestRelease");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetLatestRelease");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Release["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/latest', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetPages operation.
     * @callback module:api/ReposApi~reposGetPagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Page} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a GitHub Pages site
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetPagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Page}
     */

  }, {
    key: "reposGetPages",
    value: function reposGetPages(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetPages");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetPages");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Page["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetPagesBuild operation.
     * @callback module:api/ReposApi~reposGetPagesBuildCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBuild} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get GitHub Pages build
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} buildId build_id parameter
     * @param {module:api/ReposApi~reposGetPagesBuildCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBuild}
     */

  }, {
    key: "reposGetPagesBuild",
    value: function reposGetPagesBuild(owner, repo, buildId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetPagesBuild");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetPagesBuild");
      } // verify the required parameter 'buildId' is set


      if (buildId === undefined || buildId === null) {
        throw new Error("Missing the required parameter 'buildId' when calling reposGetPagesBuild");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'build_id': buildId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBuild["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages/builds/{build_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetParticipationStats operation.
     * @callback module:api/ReposApi~reposGetParticipationStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParticipationStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the weekly commit count
     * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.  The array order is oldest week (index 0) to most recent week.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetParticipationStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParticipationStats}
     */

  }, {
    key: "reposGetParticipationStats",
    value: function reposGetParticipationStats(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetParticipationStats");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetParticipationStats");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ParticipationStats["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/stats/participation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetPullRequestReviewProtection operation.
     * @callback module:api/ReposApi~reposGetPullRequestReviewProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProtectedBranchPullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get pull request review protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetPullRequestReviewProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProtectedBranchPullRequestReview}
     */

  }, {
    key: "reposGetPullRequestReviewProtection",
    value: function reposGetPullRequestReviewProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetPullRequestReviewProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetPullRequestReviewProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetPullRequestReviewProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.github.luke-cage-preview+json'];
      var returnType = _ProtectedBranchPullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetPunchCardStats operation.
     * @callback module:api/ReposApi~reposGetPunchCardStatsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Array>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the hourly commit count for each day
     * Each array contains the day number, hour number, and number of commits:  *   `0-6`: Sunday - Saturday *   `0-23`: Hour of day *   Number of commits  For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetPunchCardStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Array>}
     */

  }, {
    key: "reposGetPunchCardStats",
    value: function reposGetPunchCardStats(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetPunchCardStats");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetPunchCardStats");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Array];
      return this.apiClient.callApi('/repos/{owner}/{repo}/stats/punch_card', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetReadme operation.
     * @callback module:api/ReposApi~reposGetReadmeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a repository README
     * Gets the preferred README for a repository.  READMEs support [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ref The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
     * @param {module:api/ReposApi~reposGetReadmeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentFile}
     */

  }, {
    key: "reposGetReadme",
    value: function reposGetReadme(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetReadme");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetReadme");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'ref': opts['ref']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContentFile["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/readme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetRelease operation.
     * @callback module:api/ReposApi~reposGetReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a release
     * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://developer.github.com/v3/#hypermedia).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} releaseId release_id parameter
     * @param {module:api/ReposApi~reposGetReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */

  }, {
    key: "reposGetRelease",
    value: function reposGetRelease(owner, repo, releaseId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetRelease");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetRelease");
      } // verify the required parameter 'releaseId' is set


      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling reposGetRelease");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'release_id': releaseId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Release["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{release_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetReleaseAsset operation.
     * @callback module:api/ReposApi~reposGetReleaseAssetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReleaseAsset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a release asset
     * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://developer.github.com/v3/media/#media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} assetId asset_id parameter
     * @param {module:api/ReposApi~reposGetReleaseAssetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReleaseAsset}
     */

  }, {
    key: "reposGetReleaseAsset",
    value: function reposGetReleaseAsset(owner, repo, assetId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetReleaseAsset");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetReleaseAsset");
      } // verify the required parameter 'assetId' is set


      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling reposGetReleaseAsset");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'asset_id': assetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReleaseAsset["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/assets/{asset_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetReleaseByTag operation.
     * @callback module:api/ReposApi~reposGetReleaseByTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a release by tag name
     * Get a published release with the specified tag.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} tag tag+ parameter
     * @param {module:api/ReposApi~reposGetReleaseByTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */

  }, {
    key: "reposGetReleaseByTag",
    value: function reposGetReleaseByTag(owner, repo, tag, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetReleaseByTag");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetReleaseByTag");
      } // verify the required parameter 'tag' is set


      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling reposGetReleaseByTag");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'tag': tag
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Release["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/tags/{tag}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetStatusChecksProtection operation.
     * @callback module:api/ReposApi~reposGetStatusChecksProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusCheckPolicy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status checks protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetStatusChecksProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusCheckPolicy}
     */

  }, {
    key: "reposGetStatusChecksProtection",
    value: function reposGetStatusChecksProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetStatusChecksProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetStatusChecksProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetStatusChecksProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StatusCheckPolicy["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetTeamsWithAccessToProtectedBranch operation.
     * @callback module:api/ReposApi~reposGetTeamsWithAccessToProtectedBranchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get teams with access to the protected branch
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Lists the teams who have push access to this branch. The list includes child teams.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetTeamsWithAccessToProtectedBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "reposGetTeamsWithAccessToProtectedBranch",
    value: function reposGetTeamsWithAccessToProtectedBranch(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetTeamsWithAccessToProtectedBranch");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetTeamsWithAccessToProtectedBranch");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetTeamsWithAccessToProtectedBranch");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Team["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetTopPaths operation.
     * @callback module:api/ReposApi~reposGetTopPathsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContentTraffic>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get top referral paths
     * Get the top 10 popular contents over the last 14 days.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetTopPathsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContentTraffic>}
     */

  }, {
    key: "reposGetTopPaths",
    value: function reposGetTopPaths(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetTopPaths");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetTopPaths");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ContentTraffic["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/traffic/popular/paths', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetTopReferrers operation.
     * @callback module:api/ReposApi~reposGetTopReferrersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReferrerTraffic>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get top referral sources
     * Get the top 10 referrers over the last 14 days.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposGetTopReferrersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ReferrerTraffic>}
     */

  }, {
    key: "reposGetTopReferrers",
    value: function reposGetTopReferrers(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetTopReferrers");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetTopReferrers");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ReferrerTraffic["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/traffic/popular/referrers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetUsersWithAccessToProtectedBranch operation.
     * @callback module:api/ReposApi~reposGetUsersWithAccessToProtectedBranchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users with access to the protected branch
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Lists the people who have push access to this branch.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposGetUsersWithAccessToProtectedBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "reposGetUsersWithAccessToProtectedBranch",
    value: function reposGetUsersWithAccessToProtectedBranch(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetUsersWithAccessToProtectedBranch");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetUsersWithAccessToProtectedBranch");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposGetUsersWithAccessToProtectedBranch");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetViews operation.
     * @callback module:api/ReposApi~reposGetViewsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewTraffic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get page views
     * Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.per Must be one of: `day`, `week`. (default to 'day')
     * @param {module:api/ReposApi~reposGetViewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewTraffic}
     */

  }, {
    key: "reposGetViews",
    value: function reposGetViews(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetViews");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetViews");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per': opts['per']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewTraffic["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/traffic/views', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposGetWebhook operation.
     * @callback module:api/ReposApi~reposGetWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Hook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a repository webhook
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} hookId 
     * @param {module:api/ReposApi~reposGetWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Hook}
     */

  }, {
    key: "reposGetWebhook",
    value: function reposGetWebhook(owner, repo, hookId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposGetWebhook");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposGetWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling reposGetWebhook");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Hook["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hook_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListBranches operation.
     * @callback module:api/ReposApi~reposListBranchesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ShortBranch>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List branches
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts._protected Setting to `true` returns only protected branches. When set to `false`, only unprotected branches are returned. Omitting this parameter returns all branches.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ShortBranch>}
     */

  }, {
    key: "reposListBranches",
    value: function reposListBranches(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListBranches");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListBranches");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'protected': opts['_protected'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ShortBranch["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListBranchesForHeadCommit operation.
     * @callback module:api/ReposApi~reposListBranchesForHeadCommitCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BranchShort>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List branches for HEAD commit
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} commitSha commit_sha+ parameter
     * @param {module:api/ReposApi~reposListBranchesForHeadCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BranchShort>}
     */

  }, {
    key: "reposListBranchesForHeadCommit",
    value: function reposListBranchesForHeadCommit(owner, repo, commitSha, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListBranchesForHeadCommit");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListBranchesForHeadCommit");
      } // verify the required parameter 'commitSha' is set


      if (commitSha === undefined || commitSha === null) {
        throw new Error("Missing the required parameter 'commitSha' when calling reposListBranchesForHeadCommit");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'commit_sha': commitSha
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BranchShort["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListCollaborators operation.
     * @callback module:api/ReposApi~reposListCollaboratorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Collaborator>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository collaborators
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.  Team members will include the members of child teams.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.affiliation Filter collaborators returned by their affiliation. Can be one of:   \\* `outside`: All outside collaborators of an organization-owned repository.   \\* `direct`: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.   \\* `all`: All collaborators the authenticated user can see. (default to 'all')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListCollaboratorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Collaborator>}
     */

  }, {
    key: "reposListCollaborators",
    value: function reposListCollaborators(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListCollaborators");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListCollaborators");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'affiliation': opts['affiliation'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Collaborator["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListCommentsForCommit operation.
     * @callback module:api/ReposApi~reposListCommentsForCommitCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CommitComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List commit comments
     * Use the `:commit_sha` to specify the commit that will have its comments listed.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} commitSha commit_sha+ parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListCommentsForCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CommitComment>}
     */

  }, {
    key: "reposListCommentsForCommit",
    value: function reposListCommentsForCommit(owner, repo, commitSha, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListCommentsForCommit");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListCommentsForCommit");
      } // verify the required parameter 'commitSha' is set


      if (commitSha === undefined || commitSha === null) {
        throw new Error("Missing the required parameter 'commitSha' when calling reposListCommentsForCommit");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'commit_sha': commitSha
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CommitComment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{commit_sha}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListCommitCommentsForRepo operation.
     * @callback module:api/ReposApi~reposListCommitCommentsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CommitComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List commit comments for a repository
     * Commit Comments use [these custom media types](https://developer.github.com/v3/repos/comments/#custom-media-types). You can read more about the use of media types in the API [here](https://developer.github.com/v3/media/).  Comments are ordered by ascending ID.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListCommitCommentsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CommitComment>}
     */

  }, {
    key: "reposListCommitCommentsForRepo",
    value: function reposListCommitCommentsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListCommitCommentsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListCommitCommentsForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CommitComment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListCommitStatusesForRef operation.
     * @callback module:api/ReposApi~reposListCommitStatusesForRefCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Status>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List commit statuses for a reference
     * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.  This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListCommitStatusesForRefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Status>}
     */

  }, {
    key: "reposListCommitStatusesForRef",
    value: function reposListCommitStatusesForRef(owner, repo, ref, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListCommitStatusesForRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListCommitStatusesForRef");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling reposListCommitStatusesForRef");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Status["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{ref}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListCommits operation.
     * @callback module:api/ReposApi~reposListCommitsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleCommit>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List commits
     * **Signature verification object**  The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:  These are the possible values for `reason` in the `verification` object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | `expired_key`            | The key that made the signature is expired.                                                                                       | | `not_signing_key`        | The \"signing\" flag is not among the usage flags in the GPG key that made the signature.                                           | | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         | | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      | | `unsigned`               | The object does not include a signature.                                                                                          | | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      | | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          | | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. | | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             | | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  | | `malformed_signature`    | There was an error parsing the signature.                                                                                         | | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sha SHA or branch to start listing commits from. Default: the repository’s default branch (usually `master`).
     * @param {String} opts.path Only commits containing this file path will be returned.
     * @param {String} opts.author GitHub login or email address by which to filter by commit author.
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {String} opts.until Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleCommit>}
     */

  }, {
    key: "reposListCommits",
    value: function reposListCommits(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListCommits");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListCommits");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'sha': opts['sha'],
        'path': opts['path'],
        'author': opts['author'],
        'since': opts['since'],
        'until': opts['until'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/scim+json'];
      var returnType = [_SimpleCommit["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListContributors operation.
     * @callback module:api/ReposApi~reposListContributorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Contributor>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository contributors
     * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.  GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.anon Set to `1` or `true` to include anonymous contributors in results.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListContributorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Contributor>}
     */

  }, {
    key: "reposListContributors",
    value: function reposListContributors(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListContributors");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListContributors");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'anon': opts['anon'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Contributor["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/contributors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListDeployKeys operation.
     * @callback module:api/ReposApi~reposListDeployKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeployKey>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List deploy keys
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListDeployKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DeployKey>}
     */

  }, {
    key: "reposListDeployKeys",
    value: function reposListDeployKeys(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListDeployKeys");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListDeployKeys");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_DeployKey["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListDeploymentStatuses operation.
     * @callback module:api/ReposApi~reposListDeploymentStatusesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeploymentStatus>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List deployment statuses
     * Users with pull access can view deployment statuses for a deployment:
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} deploymentId deployment_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListDeploymentStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DeploymentStatus>}
     */

  }, {
    key: "reposListDeploymentStatuses",
    value: function reposListDeploymentStatuses(owner, repo, deploymentId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListDeploymentStatuses");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListDeploymentStatuses");
      } // verify the required parameter 'deploymentId' is set


      if (deploymentId === undefined || deploymentId === null) {
        throw new Error("Missing the required parameter 'deploymentId' when calling reposListDeploymentStatuses");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'deployment_id': deploymentId
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_DeploymentStatus["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/deployments/{deployment_id}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListDeployments operation.
     * @callback module:api/ReposApi~reposListDeploymentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Deployment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List deployments
     * Simple filtering of deployments is available via query parameters:
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sha The SHA recorded at creation time. (default to 'none')
     * @param {String} opts.ref The name of the ref. This can be a branch, tag, or SHA. (default to 'none')
     * @param {String} opts.task The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`). (default to 'none')
     * @param {String} opts.environment The name of the environment that was deployed to (e.g., `staging` or `production`). (default to 'none')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListDeploymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Deployment>}
     */

  }, {
    key: "reposListDeployments",
    value: function reposListDeployments(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListDeployments");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListDeployments");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'sha': opts['sha'],
        'ref': opts['ref'],
        'task': opts['task'],
        'environment': opts['environment'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Deployment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/deployments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListForAuthenticatedUser operation.
     * @callback module:api/ReposApi~reposListForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories for the authenticated user
     * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.  The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.visibility Can be one of `all`, `public`, or `private`. (default to 'all')
     * @param {String} opts.affiliation Comma-separated list of values. Can include:   \\* `owner`: Repositories that are owned by the authenticated user.   \\* `collaborator`: Repositories that the user has been added to as a collaborator.   \\* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on. (default to 'owner,collaborator,organization_member')
     * @param {module:model/String} opts.type Can be one of `all`, `owner`, `public`, `private`, `member`. Default: `all`      Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**. (default to 'all')
     * @param {module:model/String} opts.sort Can be one of `created`, `updated`, `pushed`, `full_name`. (default to 'full_name')
     * @param {module:model/String} opts.direction Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {String} opts.before Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {module:api/ReposApi~reposListForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repository>}
     */

  }, {
    key: "reposListForAuthenticatedUser",
    value: function reposListForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'visibility': opts['visibility'],
        'affiliation': opts['affiliation'],
        'type': opts['type'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page'],
        'since': opts['since'],
        'before': opts['before']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Repository["default"]];
      return this.apiClient.callApi('/user/repos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListForOrg operation.
     * @callback module:api/ReposApi~reposListForOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization repositories
     * Lists repositories for the specified organization.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Specifies the types of repositories you want returned. Can be one of `all`, `public`, `private`, `forks`, `sources`, `member`, `internal`. Default: `all`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `type` can also be `internal`.
     * @param {module:model/String} opts.sort Can be one of `created`, `updated`, `pushed`, `full_name`. (default to 'created')
     * @param {module:model/String} opts.direction Can be one of `asc` or `desc`. Default: when using `full_name`: `asc`, otherwise `desc`
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "reposListForOrg",
    value: function reposListForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reposListForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {
        'type': opts['type'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/orgs/{org}/repos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListForUser operation.
     * @callback module:api/ReposApi~reposListForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories for a user
     * Lists public repositories for the specified user.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Can be one of `all`, `owner`, `member`. (default to 'owner')
     * @param {module:model/String} opts.sort Can be one of `created`, `updated`, `pushed`, `full_name`. (default to 'full_name')
     * @param {module:model/String} opts.direction Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "reposListForUser",
    value: function reposListForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling reposListForUser");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'type': opts['type'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/users/{username}/repos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListForks operation.
     * @callback module:api/ReposApi~reposListForksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List forks
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort The sort order. Can be either `newest`, `oldest`, or `stargazers`. (default to 'newest')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListForksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "reposListForks",
    value: function reposListForks(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListForks");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListForks");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'sort': opts['sort'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/scim+json'];
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/forks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListInvitations operation.
     * @callback module:api/ReposApi~reposListInvitationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RepositoryInvitation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository invitations
     * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListInvitationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RepositoryInvitation>}
     */

  }, {
    key: "reposListInvitations",
    value: function reposListInvitations(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListInvitations");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListInvitations");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RepositoryInvitation["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListInvitationsForAuthenticatedUser operation.
     * @callback module:api/ReposApi~reposListInvitationsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RepositoryInvitation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository invitations for the authenticated user
     * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListInvitationsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RepositoryInvitation>}
     */

  }, {
    key: "reposListInvitationsForAuthenticatedUser",
    value: function reposListInvitationsForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RepositoryInvitation["default"]];
      return this.apiClient.callApi('/user/repository_invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListLanguages operation.
     * @callback module:api/ReposApi~reposListLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Number}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository languages
     * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposListLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Number}>}
     */

  }, {
    key: "reposListLanguages",
    value: function reposListLanguages(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListLanguages");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListLanguages");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'Number'
      };
      return this.apiClient.callApi('/repos/{owner}/{repo}/languages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListPagesBuilds operation.
     * @callback module:api/ReposApi~reposListPagesBuildsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PageBuild>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List GitHub Pages builds
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListPagesBuildsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PageBuild>}
     */

  }, {
    key: "reposListPagesBuilds",
    value: function reposListPagesBuilds(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListPagesBuilds");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListPagesBuilds");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_PageBuild["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages/builds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListPublic operation.
     * @callback module:api/ReposApi~reposListPublicCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public repositories
     * Lists all public repositories in the order that they were created.  Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of repositories.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {String} opts.visibility 
     * @param {module:api/ReposApi~reposListPublicCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "reposListPublic",
    value: function reposListPublic(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'per_page': opts['perPage'],
        'since': opts['since'],
        'visibility': opts['visibility']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListPullRequestsAssociatedWithCommit operation.
     * @callback module:api/ReposApi~reposListPullRequestsAssociatedWithCommitCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PullRequestSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List pull requests associated with a commit
     * Lists all pull requests containing the provided commit SHA, which can be from any point in the commit history. The results will include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests) endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} commitSha commit_sha+ parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListPullRequestsAssociatedWithCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PullRequestSimple>}
     */

  }, {
    key: "reposListPullRequestsAssociatedWithCommit",
    value: function reposListPullRequestsAssociatedWithCommit(owner, repo, commitSha, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListPullRequestsAssociatedWithCommit");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListPullRequestsAssociatedWithCommit");
      } // verify the required parameter 'commitSha' is set


      if (commitSha === undefined || commitSha === null) {
        throw new Error("Missing the required parameter 'commitSha' when calling reposListPullRequestsAssociatedWithCommit");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'commit_sha': commitSha
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_PullRequestSimple["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{commit_sha}/pulls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListReleaseAssets operation.
     * @callback module:api/ReposApi~reposListReleaseAssetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReleaseAsset>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List release assets
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} releaseId release_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListReleaseAssetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ReleaseAsset>}
     */

  }, {
    key: "reposListReleaseAssets",
    value: function reposListReleaseAssets(owner, repo, releaseId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListReleaseAssets");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListReleaseAssets");
      } // verify the required parameter 'releaseId' is set


      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling reposListReleaseAssets");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'release_id': releaseId
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ReleaseAsset["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{release_id}/assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListReleases operation.
     * @callback module:api/ReposApi~reposListReleasesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Release>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List releases
     * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://developer.github.com/v3/repos/#list-repository-tags).  Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListReleasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Release>}
     */

  }, {
    key: "reposListReleases",
    value: function reposListReleases(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListReleases");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListReleases");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Release["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListTags operation.
     * @callback module:api/ReposApi~reposListTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository tags
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Tag>}
     */

  }, {
    key: "reposListTags",
    value: function reposListTags(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListTags");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListTags");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Tag["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/tags', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListTeams operation.
     * @callback module:api/ReposApi~reposListTeamsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository teams
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "reposListTeams",
    value: function reposListTeams(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListTeams");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListTeams");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Team["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposListWebhooks operation.
     * @callback module:api/ReposApi~reposListWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Hook>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository webhooks
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReposApi~reposListWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Hook>}
     */

  }, {
    key: "reposListWebhooks",
    value: function reposListWebhooks(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposListWebhooks");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposListWebhooks");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Hook["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposMerge operation.
     * @callback module:api/ReposApi~reposMergeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge a branch
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject94} opts.inlineObject94 
     * @param {module:api/ReposApi~reposMergeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commit}
     */

  }, {
    key: "reposMerge",
    value: function reposMerge(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject94']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposMerge");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposMerge");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Commit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/merges', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposPingWebhook operation.
     * @callback module:api/ReposApi~reposPingWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping a repository webhook
     * This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} hookId 
     * @param {module:api/ReposApi~reposPingWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposPingWebhook",
    value: function reposPingWebhook(owner, repo, hookId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposPingWebhook");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposPingWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling reposPingWebhook");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hook_id}/pings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposRemoveAppAccessRestrictions operation.
     * @callback module:api/ReposApi~reposRemoveAppAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Integration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove app access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.  | Type    | Description                                                                                                                                                | | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposRemoveAppAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Integration>}
     */

  }, {
    key: "reposRemoveAppAccessRestrictions",
    value: function reposRemoveAppAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposRemoveAppAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposRemoveAppAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposRemoveAppAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Integration["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposRemoveCollaborator operation.
     * @callback module:api/ReposApi~reposRemoveCollaboratorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a repository collaborator
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} username 
     * @param {module:api/ReposApi~reposRemoveCollaboratorCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposRemoveCollaborator",
    value: function reposRemoveCollaborator(owner, repo, username, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposRemoveCollaborator");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposRemoveCollaborator");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling reposRemoveCollaborator");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposRemoveStatusCheckContexts operation.
     * @callback module:api/ReposApi~reposRemoveStatusCheckContextsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposRemoveStatusCheckContextsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "reposRemoveStatusCheckContexts",
    value: function reposRemoveStatusCheckContexts(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposRemoveStatusCheckContexts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposRemoveStatusCheckContexts");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposRemoveStatusCheckContexts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposRemoveStatusCheckProtection operation.
     * @callback module:api/ReposApi~reposRemoveStatusCheckProtectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove status check protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposRemoveStatusCheckProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposRemoveStatusCheckProtection",
    value: function reposRemoveStatusCheckProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposRemoveStatusCheckProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposRemoveStatusCheckProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposRemoveStatusCheckProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposRemoveTeamAccessRestrictions operation.
     * @callback module:api/ReposApi~reposRemoveTeamAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove team access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Removes the ability of a team to push to this branch. You can also remove push access for child teams.  | Type    | Description                                                                                                                                         | | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposRemoveTeamAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "reposRemoveTeamAccessRestrictions",
    value: function reposRemoveTeamAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposRemoveTeamAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposRemoveTeamAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposRemoveTeamAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Team["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposRemoveUserAccessRestrictions operation.
     * @callback module:api/ReposApi~reposRemoveUserAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove user access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Removes the ability of a user to push to this branch.  | Type    | Description                                                                                                                                   | | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- | | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposRemoveUserAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "reposRemoveUserAccessRestrictions",
    value: function reposRemoveUserAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposRemoveUserAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposRemoveUserAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposRemoveUserAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposReplaceAllTopics operation.
     * @callback module:api/ReposApi~reposReplaceAllTopicsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Topic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace all repository topics
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject120} opts.inlineObject120 
     * @param {module:api/ReposApi~reposReplaceAllTopicsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Topic}
     */

  }, {
    key: "reposReplaceAllTopics",
    value: function reposReplaceAllTopics(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject120']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposReplaceAllTopics");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposReplaceAllTopics");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Topic["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/topics', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposRequestPagesBuild operation.
     * @callback module:api/ReposApi~reposRequestPagesBuildCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBuildStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a GitHub Pages build
     * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.  Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ReposApi~reposRequestPagesBuildCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBuildStatus}
     */

  }, {
    key: "reposRequestPagesBuild",
    value: function reposRequestPagesBuild(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposRequestPagesBuild");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposRequestPagesBuild");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBuildStatus["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages/builds', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposSetAdminBranchProtection operation.
     * @callback module:api/ReposApi~reposSetAdminBranchProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProtectedBranchAdminEnforced} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set admin branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {module:api/ReposApi~reposSetAdminBranchProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProtectedBranchAdminEnforced}
     */

  }, {
    key: "reposSetAdminBranchProtection",
    value: function reposSetAdminBranchProtection(owner, repo, branch, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposSetAdminBranchProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposSetAdminBranchProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposSetAdminBranchProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProtectedBranchAdminEnforced["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposSetAppAccessRestrictions operation.
     * @callback module:api/ReposApi~reposSetAppAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Integration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set app access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.  | Type    | Description                                                                                                                                                | | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposSetAppAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Integration>}
     */

  }, {
    key: "reposSetAppAccessRestrictions",
    value: function reposSetAppAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposSetAppAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposSetAppAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposSetAppAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Integration["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposSetStatusCheckContexts operation.
     * @callback module:api/ReposApi~reposSetStatusCheckContextsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set status check contexts
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposSetStatusCheckContextsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "reposSetStatusCheckContexts",
    value: function reposSetStatusCheckContexts(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposSetStatusCheckContexts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposSetStatusCheckContexts");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposSetStatusCheckContexts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposSetTeamAccessRestrictions operation.
     * @callback module:api/ReposApi~reposSetTeamAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set team access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.  | Type    | Description                                                                                                                                | | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposSetTeamAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "reposSetTeamAccessRestrictions",
    value: function reposSetTeamAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposSetTeamAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposSetTeamAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposSetTeamAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Team["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposSetUserAccessRestrictions operation.
     * @callback module:api/ReposApi~reposSetUserAccessRestrictionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set user access restrictions
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.  | Type    | Description                                                                                                                   | | ------- | ----------------------------------------------------------------------------------------------------------------------------- | | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody 
     * @param {module:api/ReposApi~reposSetUserAccessRestrictionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "reposSetUserAccessRestrictions",
    value: function reposSetUserAccessRestrictions(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['requestBody']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposSetUserAccessRestrictions");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposSetUserAccessRestrictions");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposSetUserAccessRestrictions");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposTestPushWebhook operation.
     * @callback module:api/ReposApi~reposTestPushWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test the push repository webhook
     * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.  **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} hookId 
     * @param {module:api/ReposApi~reposTestPushWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposTestPushWebhook",
    value: function reposTestPushWebhook(owner, repo, hookId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposTestPushWebhook");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposTestPushWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling reposTestPushWebhook");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hook_id}/tests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposTransfer operation.
     * @callback module:api/ReposApi~reposTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer a repository
     * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject121} opts.inlineObject121 
     * @param {module:api/ReposApi~reposTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "reposTransfer",
    value: function reposTransfer(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject121']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposTransfer");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposTransfer");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/transfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdate operation.
     * @callback module:api/ReposApi~reposUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullRepository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a repository
     * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://developer.github.com/v3/repos/#replace-all-repository-topics) endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject46} opts.inlineObject46 
     * @param {module:api/ReposApi~reposUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullRepository}
     */

  }, {
    key: "reposUpdate",
    value: function reposUpdate(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject46']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdate");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdate");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FullRepository["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateBranchProtection operation.
     * @callback module:api/ReposApi~reposUpdateBranchProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProtectedBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update branch protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Protecting a branch requires admin or owner permissions to the repository.  **Note**: Passing new arrays of `users` and `teams` replaces their previous values.  **Note**: The list of users, apps, and teams in total is limited to 100 items.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject49} opts.inlineObject49 
     * @param {module:api/ReposApi~reposUpdateBranchProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProtectedBranch}
     */

  }, {
    key: "reposUpdateBranchProtection",
    value: function reposUpdateBranchProtection(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject49']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateBranchProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateBranchProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposUpdateBranchProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProtectedBranch["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateCommitComment operation.
     * @callback module:api/ReposApi~reposUpdateCommitCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a commit comment
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject57} opts.inlineObject57 
     * @param {module:api/ReposApi~reposUpdateCommitCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComment}
     */

  }, {
    key: "reposUpdateCommitComment",
    value: function reposUpdateCommitComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject57']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateCommitComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateCommitComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reposUpdateCommitComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CommitComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{comment_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateInformationAboutPagesSite operation.
     * @callback module:api/ReposApi~reposUpdateInformationAboutPagesSiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update information about a GitHub Pages site
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject98} opts.inlineObject98 
     * @param {module:api/ReposApi~reposUpdateInformationAboutPagesSiteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reposUpdateInformationAboutPagesSite",
    value: function reposUpdateInformationAboutPagesSite(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject98']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateInformationAboutPagesSite");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateInformationAboutPagesSite");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/scim+json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/pages', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateInvitation operation.
     * @callback module:api/ReposApi~reposUpdateInvitationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryInvitation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a repository invitation
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} invitationId invitation_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject79} opts.inlineObject79 
     * @param {module:api/ReposApi~reposUpdateInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryInvitation}
     */

  }, {
    key: "reposUpdateInvitation",
    value: function reposUpdateInvitation(owner, repo, invitationId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject79']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateInvitation");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateInvitation");
      } // verify the required parameter 'invitationId' is set


      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling reposUpdateInvitation");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'invitation_id': invitationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RepositoryInvitation["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/invitations/{invitation_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdatePullRequestReviewProtection operation.
     * @callback module:api/ReposApi~reposUpdatePullRequestReviewProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProtectedBranchPullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update pull request review protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.  **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject50} opts.inlineObject50 
     * @param {module:api/ReposApi~reposUpdatePullRequestReviewProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProtectedBranchPullRequestReview}
     */

  }, {
    key: "reposUpdatePullRequestReviewProtection",
    value: function reposUpdatePullRequestReviewProtection(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject50']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdatePullRequestReviewProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdatePullRequestReviewProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposUpdatePullRequestReviewProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProtectedBranchPullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateRelease operation.
     * @callback module:api/ReposApi~reposUpdateReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a release
     * Users with push access to the repository can edit a release.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} releaseId release_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject117} opts.inlineObject117 
     * @param {module:api/ReposApi~reposUpdateReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */

  }, {
    key: "reposUpdateRelease",
    value: function reposUpdateRelease(owner, repo, releaseId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject117']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateRelease");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateRelease");
      } // verify the required parameter 'releaseId' is set


      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling reposUpdateRelease");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'release_id': releaseId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Release["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{release_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateReleaseAsset operation.
     * @callback module:api/ReposApi~reposUpdateReleaseAssetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReleaseAsset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a release asset
     * Users with push access to the repository can edit a release asset.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} assetId asset_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject116} opts.inlineObject116 
     * @param {module:api/ReposApi~reposUpdateReleaseAssetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReleaseAsset}
     */

  }, {
    key: "reposUpdateReleaseAsset",
    value: function reposUpdateReleaseAsset(owner, repo, assetId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject116']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateReleaseAsset");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateReleaseAsset");
      } // verify the required parameter 'assetId' is set


      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling reposUpdateReleaseAsset");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'asset_id': assetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ReleaseAsset["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/assets/{asset_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateStatusCheckProtection operation.
     * @callback module:api/ReposApi~reposUpdateStatusCheckProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusCheckPolicy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update status check protection
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} branch branch+ parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject51} opts.inlineObject51 
     * @param {module:api/ReposApi~reposUpdateStatusCheckProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusCheckPolicy}
     */

  }, {
    key: "reposUpdateStatusCheckProtection",
    value: function reposUpdateStatusCheckProtection(owner, repo, branch, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject51']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateStatusCheckProtection");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateStatusCheckProtection");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling reposUpdateStatusCheckProtection");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'branch': branch
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _StatusCheckPolicy["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUpdateWebhook operation.
     * @callback module:api/ReposApi~reposUpdateWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Hook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a repository webhook
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} hookId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject73} opts.inlineObject73 
     * @param {module:api/ReposApi~reposUpdateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Hook}
     */

  }, {
    key: "reposUpdateWebhook",
    value: function reposUpdateWebhook(owner, repo, hookId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject73']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUpdateWebhook");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUpdateWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling reposUpdateWebhook");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Hook["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hook_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reposUploadReleaseAsset operation.
     * @callback module:api/ReposApi~reposUploadReleaseAssetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReleaseAsset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a release asset
     * This endpoint makes use of [a Hypermedia relation](https://developer.github.com/v3/#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in the response of the [Create a release endpoint](https://developer.github.com/v3/repos/releases/#create-a-release) to upload a release asset.  You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.  Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:   `application/zip`  GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.  When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.  **Notes:** *   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The \"[List assets for a release](https://developer.github.com/v3/repos/releases/#list-assets-for-a-release)\" endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://github.com/contact). *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} releaseId release_id parameter
     * @param {Object} opts Optional parameters
     * @param {String} opts.name name parameter
     * @param {String} opts.label label parameter
     * @param {String} opts.body 
     * @param {module:api/ReposApi~reposUploadReleaseAssetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReleaseAsset}
     */

  }, {
    key: "reposUploadReleaseAsset",
    value: function reposUploadReleaseAsset(owner, repo, releaseId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reposUploadReleaseAsset");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reposUploadReleaseAsset");
      } // verify the required parameter 'releaseId' is set


      if (releaseId === undefined || releaseId === null) {
        throw new Error("Missing the required parameter 'releaseId' when calling reposUploadReleaseAsset");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'release_id': releaseId
      };
      var queryParams = {
        'name': opts['name'],
        'label': opts['label']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReleaseAsset["default"];
      var basePaths = ['{origin}'];
      var basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI

      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index'] >= basePaths.length || opts['_base_path_index'] < 0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }

        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{release_id}/assets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, basePath, callback);
    }
  }]);

  return ReposApi;
}();

exports["default"] = ReposApi;