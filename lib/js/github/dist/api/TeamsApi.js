"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _GroupMapping = _interopRequireDefault(require("../model/GroupMapping"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject126"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject127"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject128"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject129"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject130"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject133"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject134"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject135"));

var _InlineObject9 = _interopRequireDefault(require("../model/InlineObject136"));

var _InlineObject10 = _interopRequireDefault(require("../model/InlineObject27"));

var _InlineObject11 = _interopRequireDefault(require("../model/InlineObject28"));

var _InlineObject12 = _interopRequireDefault(require("../model/InlineObject29"));

var _InlineObject13 = _interopRequireDefault(require("../model/InlineObject30"));

var _InlineObject14 = _interopRequireDefault(require("../model/InlineObject31"));

var _InlineObject15 = _interopRequireDefault(require("../model/InlineObject32"));

var _InlineObject16 = _interopRequireDefault(require("../model/InlineObject35"));

var _InlineObject17 = _interopRequireDefault(require("../model/InlineObject36"));

var _InlineObject18 = _interopRequireDefault(require("../model/InlineObject37"));

var _InlineObject19 = _interopRequireDefault(require("../model/InlineObject38"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse4031"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse4221"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse4222"));

var _MinimalRepository = _interopRequireDefault(require("../model/MinimalRepository"));

var _OrganizationInvitation = _interopRequireDefault(require("../model/OrganizationInvitation"));

var _SimpleUser = _interopRequireDefault(require("../model/SimpleUser"));

var _Team = _interopRequireDefault(require("../model/Team"));

var _TeamDiscussion = _interopRequireDefault(require("../model/TeamDiscussion"));

var _TeamDiscussionComment = _interopRequireDefault(require("../model/TeamDiscussionComment"));

var _TeamFull = _interopRequireDefault(require("../model/TeamFull"));

var _TeamMembership = _interopRequireDefault(require("../model/TeamMembership"));

var _TeamProject = _interopRequireDefault(require("../model/TeamProject"));

var _TeamRepository = _interopRequireDefault(require("../model/TeamRepository"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Teams service.
* @module api/TeamsApi
* @version 0.0.5
*/
var TeamsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TeamsApi. 
  * @alias module:api/TeamsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TeamsApi(apiClient) {
    _classCallCheck(this, TeamsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the teamsAddMemberLegacy operation.
   * @callback module:api/TeamsApi~teamsAddMemberLegacyCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add team member (Legacy)
   * The \"Add team member\" endpoint (described below) is deprecated.  We recommend using the [Add or update team membership for a user](https://developer.github.com/v3/teams/members/#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.  Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.  **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"  Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
   * @param {Number} teamId 
   * @param {String} username 
   * @param {module:api/TeamsApi~teamsAddMemberLegacyCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(TeamsApi, [{
    key: "teamsAddMemberLegacy",
    value: function teamsAddMemberLegacy(teamId, username, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsAddMemberLegacy");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsAddMemberLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/members/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsAddOrUpdateMembershipForUserInOrg operation.
     * @callback module:api/TeamsApi~teamsAddOrUpdateMembershipForUserInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update team membership for a user
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.  **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"  An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the \"pending\" state until the person accepts the invitation, at which point the membership will transition to the \"active\" state and the user will be added as a member of the team.  If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject35} opts.inlineObject35 
     * @param {module:api/TeamsApi~teamsAddOrUpdateMembershipForUserInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamMembership}
     */

  }, {
    key: "teamsAddOrUpdateMembershipForUserInOrg",
    value: function teamsAddOrUpdateMembershipForUserInOrg(org, teamSlug, username, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject35']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsAddOrUpdateMembershipForUserInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsAddOrUpdateMembershipForUserInOrg");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsAddOrUpdateMembershipForUserInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamMembership["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/memberships/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsAddOrUpdateMembershipForUserLegacy operation.
     * @callback module:api/TeamsApi~teamsAddOrUpdateMembershipForUserLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update team membership for a user (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://developer.github.com/v3/teams/members/#add-or-update-team-membership-for-a-user) endpoint.  Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.  **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"  If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the \"pending\" state until the user accepts the invitation, at which point the membership will transition to the \"active\" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.  If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     * @param {Number} teamId 
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject133} opts.inlineObject133 
     * @param {module:api/TeamsApi~teamsAddOrUpdateMembershipForUserLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamMembership}
     */

  }, {
    key: "teamsAddOrUpdateMembershipForUserLegacy",
    value: function teamsAddOrUpdateMembershipForUserLegacy(teamId, username, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject133']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsAddOrUpdateMembershipForUserLegacy");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsAddOrUpdateMembershipForUserLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamMembership["default"];
      return this.apiClient.callApi('/teams/{team_id}/memberships/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsAddOrUpdateProjectPermissionsInOrg operation.
     * @callback module:api/TeamsApi~teamsAddOrUpdateProjectPermissionsInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update team project permissions
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject36} opts.inlineObject36 
     * @param {module:api/TeamsApi~teamsAddOrUpdateProjectPermissionsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsAddOrUpdateProjectPermissionsInOrg",
    value: function teamsAddOrUpdateProjectPermissionsInOrg(org, teamSlug, projectId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject36']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsAddOrUpdateProjectPermissionsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsAddOrUpdateProjectPermissionsInOrg");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamsAddOrUpdateProjectPermissionsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/projects/{project_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsAddOrUpdateProjectPermissionsLegacy operation.
     * @callback module:api/TeamsApi~teamsAddOrUpdateProjectPermissionsLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update team project permissions (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://developer.github.com/v3/teams/#add-or-update-team-project-permissions) endpoint.  Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     * @param {Number} teamId 
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject134} opts.inlineObject134 
     * @param {module:api/TeamsApi~teamsAddOrUpdateProjectPermissionsLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsAddOrUpdateProjectPermissionsLegacy",
    value: function teamsAddOrUpdateProjectPermissionsLegacy(teamId, projectId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject134']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsAddOrUpdateProjectPermissionsLegacy");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamsAddOrUpdateProjectPermissionsLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/projects/{project_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsAddOrUpdateRepoPermissionsInOrg operation.
     * @callback module:api/TeamsApi~teamsAddOrUpdateRepoPermissionsInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update team repository permissions
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"  **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.  For more information about the permission levels, see \"[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)\".
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject37} opts.inlineObject37 
     * @param {module:api/TeamsApi~teamsAddOrUpdateRepoPermissionsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsAddOrUpdateRepoPermissionsInOrg",
    value: function teamsAddOrUpdateRepoPermissionsInOrg(org, teamSlug, owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject37']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsAddOrUpdateRepoPermissionsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsAddOrUpdateRepoPermissionsInOrg");
      } // verify the required parameter 'owner' is set


      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsAddOrUpdateRepoPermissionsInOrg");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling teamsAddOrUpdateRepoPermissionsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsAddOrUpdateRepoPermissionsLegacy operation.
     * @callback module:api/TeamsApi~teamsAddOrUpdateRepoPermissionsLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update team repository permissions (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team repository permissions](https://developer.github.com/v3/teams/#add-or-update-team-repository-permissions) endpoint.  To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.  Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
     * @param {Number} teamId 
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject135} opts.inlineObject135 
     * @param {module:api/TeamsApi~teamsAddOrUpdateRepoPermissionsLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsAddOrUpdateRepoPermissionsLegacy",
    value: function teamsAddOrUpdateRepoPermissionsLegacy(teamId, owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject135']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsAddOrUpdateRepoPermissionsLegacy");
      } // verify the required parameter 'owner' is set


      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsAddOrUpdateRepoPermissionsLegacy");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling teamsAddOrUpdateRepoPermissionsLegacy");
      }

      var pathParams = {
        'team_id': teamId,
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
      return this.apiClient.callApi('/teams/{team_id}/repos/{owner}/{repo}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCheckPermissionsForProjectInOrg operation.
     * @callback module:api/TeamsApi~teamsCheckPermissionsForProjectInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamProject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check team permissions for a project
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} projectId 
     * @param {module:api/TeamsApi~teamsCheckPermissionsForProjectInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamProject}
     */

  }, {
    key: "teamsCheckPermissionsForProjectInOrg",
    value: function teamsCheckPermissionsForProjectInOrg(org, teamSlug, projectId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsCheckPermissionsForProjectInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsCheckPermissionsForProjectInOrg");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamsCheckPermissionsForProjectInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamProject["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/projects/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCheckPermissionsForProjectLegacy operation.
     * @callback module:api/TeamsApi~teamsCheckPermissionsForProjectLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamProject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check team permissions for a project (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://developer.github.com/v3/teams/#check-team-permissions-for-a-project) endpoint.  Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     * @param {Number} teamId 
     * @param {Number} projectId 
     * @param {module:api/TeamsApi~teamsCheckPermissionsForProjectLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamProject}
     */

  }, {
    key: "teamsCheckPermissionsForProjectLegacy",
    value: function teamsCheckPermissionsForProjectLegacy(teamId, projectId, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsCheckPermissionsForProjectLegacy");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamsCheckPermissionsForProjectLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamProject["default"];
      return this.apiClient.callApi('/teams/{team_id}/projects/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCheckPermissionsForRepoInOrg operation.
     * @callback module:api/TeamsApi~teamsCheckPermissionsForRepoInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamRepository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check team permissions for a repository
     * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.  You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `application/vnd.github.v3.repository+json` accept header.  If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/TeamsApi~teamsCheckPermissionsForRepoInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamRepository}
     */

  }, {
    key: "teamsCheckPermissionsForRepoInOrg",
    value: function teamsCheckPermissionsForRepoInOrg(org, teamSlug, owner, repo, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsCheckPermissionsForRepoInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsCheckPermissionsForRepoInOrg");
      } // verify the required parameter 'owner' is set


      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsCheckPermissionsForRepoInOrg");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling teamsCheckPermissionsForRepoInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.github.v3.repository+json'];
      var returnType = _TeamRepository["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCheckPermissionsForRepoLegacy operation.
     * @callback module:api/TeamsApi~teamsCheckPermissionsForRepoLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamRepository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check team permissions for a repository (Legacy)
     * **Note**: Repositories inherited through a parent team will also be checked.  **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://developer.github.com/v3/teams/#check-team-permissions-for-a-repository) endpoint.  You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     * @param {Number} teamId 
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/TeamsApi~teamsCheckPermissionsForRepoLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamRepository}
     */

  }, {
    key: "teamsCheckPermissionsForRepoLegacy",
    value: function teamsCheckPermissionsForRepoLegacy(teamId, owner, repo, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsCheckPermissionsForRepoLegacy");
      } // verify the required parameter 'owner' is set


      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsCheckPermissionsForRepoLegacy");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling teamsCheckPermissionsForRepoLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.github.v3.repository+json'];
      var returnType = _TeamRepository["default"];
      return this.apiClient.callApi('/teams/{team_id}/repos/{owner}/{repo}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCreate operation.
     * @callback module:api/TeamsApi~teamsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a team
     * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see \"[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization).\"  When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see \"[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)\".
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject27} opts.inlineObject27 
     * @param {module:api/TeamsApi~teamsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamFull}
     */

  }, {
    key: "teamsCreate",
    value: function teamsCreate(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject27']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsCreate");
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
      var returnType = _TeamFull["default"];
      return this.apiClient.callApi('/orgs/{org}/teams', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCreateDiscussionCommentInOrg operation.
     * @callback module:api/TeamsApi~teamsCreateDiscussionCommentInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussionComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a discussion comment
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject31} opts.inlineObject31 
     * @param {module:api/TeamsApi~teamsCreateDiscussionCommentInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussionComment}
     */

  }, {
    key: "teamsCreateDiscussionCommentInOrg",
    value: function teamsCreateDiscussionCommentInOrg(org, teamSlug, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject31']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsCreateDiscussionCommentInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsCreateDiscussionCommentInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsCreateDiscussionCommentInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussionComment["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCreateDiscussionCommentLegacy operation.
     * @callback module:api/TeamsApi~teamsCreateDiscussionCommentLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussionComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#create-a-discussion-comment) endpoint.  Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject129} opts.inlineObject129 
     * @param {module:api/TeamsApi~teamsCreateDiscussionCommentLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussionComment}
     */

  }, {
    key: "teamsCreateDiscussionCommentLegacy",
    value: function teamsCreateDiscussionCommentLegacy(teamId, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject129']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsCreateDiscussionCommentLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsCreateDiscussionCommentLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussionComment["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCreateDiscussionInOrg operation.
     * @callback module:api/TeamsApi~teamsCreateDiscussionInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a discussion
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject29} opts.inlineObject29 
     * @param {module:api/TeamsApi~teamsCreateDiscussionInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussion}
     */

  }, {
    key: "teamsCreateDiscussionInOrg",
    value: function teamsCreateDiscussionInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject29']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsCreateDiscussionInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsCreateDiscussionInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussion["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCreateDiscussionLegacy operation.
     * @callback module:api/TeamsApi~teamsCreateDiscussionLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://developer.github.com/v3/teams/discussions/#create-a-discussion) endpoint.  Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject127} opts.inlineObject127 
     * @param {module:api/TeamsApi~teamsCreateDiscussionLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussion}
     */

  }, {
    key: "teamsCreateDiscussionLegacy",
    value: function teamsCreateDiscussionLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject127']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsCreateDiscussionLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussion["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCreateOrUpdateIdpGroupConnectionsInOrg operation.
     * @callback module:api/TeamsApi~teamsCreateOrUpdateIdpGroupConnectionsInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update IdP group connections
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject38} opts.inlineObject38 
     * @param {module:api/TeamsApi~teamsCreateOrUpdateIdpGroupConnectionsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMapping}
     */

  }, {
    key: "teamsCreateOrUpdateIdpGroupConnectionsInOrg",
    value: function teamsCreateOrUpdateIdpGroupConnectionsInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject38']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsCreateOrUpdateIdpGroupConnectionsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsCreateOrUpdateIdpGroupConnectionsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GroupMapping["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/team-sync/group-mappings', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsCreateOrUpdateIdpGroupConnectionsLegacy operation.
     * @callback module:api/TeamsApi~teamsCreateOrUpdateIdpGroupConnectionsLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update IdP group connections (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create or update IdP group connections`](https://developer.github.com/v3/teams/team_sync/#create-or-update-idp-group-connections) endpoint.  Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject136} opts.inlineObject136 
     * @param {module:api/TeamsApi~teamsCreateOrUpdateIdpGroupConnectionsLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMapping}
     */

  }, {
    key: "teamsCreateOrUpdateIdpGroupConnectionsLegacy",
    value: function teamsCreateOrUpdateIdpGroupConnectionsLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject136']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsCreateOrUpdateIdpGroupConnectionsLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GroupMapping["default"];
      return this.apiClient.callApi('/teams/{team_id}/team-sync/group-mappings', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsDeleteDiscussionCommentInOrg operation.
     * @callback module:api/TeamsApi~teamsDeleteDiscussionCommentInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a discussion comment
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {module:api/TeamsApi~teamsDeleteDiscussionCommentInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsDeleteDiscussionCommentInOrg",
    value: function teamsDeleteDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsDeleteDiscussionCommentInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsDeleteDiscussionCommentInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsDeleteDiscussionCommentInOrg");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling teamsDeleteDiscussionCommentInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsDeleteDiscussionCommentLegacy operation.
     * @callback module:api/TeamsApi~teamsDeleteDiscussionCommentLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#delete-a-discussion-comment) endpoint.  Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {module:api/TeamsApi~teamsDeleteDiscussionCommentLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsDeleteDiscussionCommentLegacy",
    value: function teamsDeleteDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsDeleteDiscussionCommentLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsDeleteDiscussionCommentLegacy");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling teamsDeleteDiscussionCommentLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsDeleteDiscussionInOrg operation.
     * @callback module:api/TeamsApi~teamsDeleteDiscussionInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a discussion
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {module:api/TeamsApi~teamsDeleteDiscussionInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsDeleteDiscussionInOrg",
    value: function teamsDeleteDiscussionInOrg(org, teamSlug, discussionNumber, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsDeleteDiscussionInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsDeleteDiscussionInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsDeleteDiscussionInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsDeleteDiscussionLegacy operation.
     * @callback module:api/TeamsApi~teamsDeleteDiscussionLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://developer.github.com/v3/teams/discussions/#delete-a-discussion) endpoint.  Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {module:api/TeamsApi~teamsDeleteDiscussionLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsDeleteDiscussionLegacy",
    value: function teamsDeleteDiscussionLegacy(teamId, discussionNumber, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsDeleteDiscussionLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsDeleteDiscussionLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsDeleteInOrg operation.
     * @callback module:api/TeamsApi~teamsDeleteInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a team
     * To delete a team, the authenticated user must be an organization owner or team maintainer.  If you are an organization owner, deleting a parent team will delete all of its child teams as well.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {module:api/TeamsApi~teamsDeleteInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsDeleteInOrg",
    value: function teamsDeleteInOrg(org, teamSlug, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsDeleteInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsDeleteInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsDeleteLegacy operation.
     * @callback module:api/TeamsApi~teamsDeleteLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://developer.github.com/v3/teams/#delete-a-team) endpoint.  To delete a team, the authenticated user must be an organization owner or team maintainer.  If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     * @param {Number} teamId 
     * @param {module:api/TeamsApi~teamsDeleteLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsDeleteLegacy",
    value: function teamsDeleteLegacy(teamId, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsDeleteLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetByName operation.
     * @callback module:api/TeamsApi~teamsGetByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team by name
     * Gets a team using the team's `slug`. GitHub generates the `slug` from the team `name`.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {module:api/TeamsApi~teamsGetByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamFull}
     */

  }, {
    key: "teamsGetByName",
    value: function teamsGetByName(org, teamSlug, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsGetByName");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsGetByName");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamFull["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetDiscussionCommentInOrg operation.
     * @callback module:api/TeamsApi~teamsGetDiscussionCommentInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussionComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a discussion comment
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {module:api/TeamsApi~teamsGetDiscussionCommentInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussionComment}
     */

  }, {
    key: "teamsGetDiscussionCommentInOrg",
    value: function teamsGetDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsGetDiscussionCommentInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsGetDiscussionCommentInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsGetDiscussionCommentInOrg");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling teamsGetDiscussionCommentInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussionComment["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetDiscussionCommentLegacy operation.
     * @callback module:api/TeamsApi~teamsGetDiscussionCommentLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussionComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#get-a-discussion-comment) endpoint.  Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {module:api/TeamsApi~teamsGetDiscussionCommentLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussionComment}
     */

  }, {
    key: "teamsGetDiscussionCommentLegacy",
    value: function teamsGetDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsGetDiscussionCommentLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsGetDiscussionCommentLegacy");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling teamsGetDiscussionCommentLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussionComment["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetDiscussionInOrg operation.
     * @callback module:api/TeamsApi~teamsGetDiscussionInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a discussion
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {module:api/TeamsApi~teamsGetDiscussionInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussion}
     */

  }, {
    key: "teamsGetDiscussionInOrg",
    value: function teamsGetDiscussionInOrg(org, teamSlug, discussionNumber, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsGetDiscussionInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsGetDiscussionInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsGetDiscussionInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussion["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetDiscussionLegacy operation.
     * @callback module:api/TeamsApi~teamsGetDiscussionLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://developer.github.com/v3/teams/discussions/#get-a-discussion) endpoint.  Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {module:api/TeamsApi~teamsGetDiscussionLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussion}
     */

  }, {
    key: "teamsGetDiscussionLegacy",
    value: function teamsGetDiscussionLegacy(teamId, discussionNumber, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsGetDiscussionLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsGetDiscussionLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussion["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetLegacy operation.
     * @callback module:api/TeamsApi~teamsGetLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://developer.github.com/v3/teams/#get-a-team-by-name) endpoint.
     * @param {Number} teamId 
     * @param {module:api/TeamsApi~teamsGetLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamFull}
     */

  }, {
    key: "teamsGetLegacy",
    value: function teamsGetLegacy(teamId, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsGetLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamFull["default"];
      return this.apiClient.callApi('/teams/{team_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetMemberLegacy operation.
     * @callback module:api/TeamsApi~teamsGetMemberLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get team member (Legacy)
     * The \"Get team member\" endpoint (described below) is deprecated.  We recommend using the [Get team membership for a user](https://developer.github.com/v3/teams/members/#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.  To list members in a team, the team must be visible to the authenticated user.
     * @param {Number} teamId 
     * @param {String} username 
     * @param {module:api/TeamsApi~teamsGetMemberLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsGetMemberLegacy",
    value: function teamsGetMemberLegacy(teamId, username, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsGetMemberLegacy");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsGetMemberLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/members/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetMembershipForUserInOrg operation.
     * @callback module:api/TeamsApi~teamsGetMembershipForUserInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get team membership for a user
     * Team members will include the members of child teams.  To get a user's membership with a team, the team must be visible to the authenticated user.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.  **Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://developer.github.com/v3/teams/#create-a-team).
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {String} username 
     * @param {module:api/TeamsApi~teamsGetMembershipForUserInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamMembership}
     */

  }, {
    key: "teamsGetMembershipForUserInOrg",
    value: function teamsGetMembershipForUserInOrg(org, teamSlug, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsGetMembershipForUserInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsGetMembershipForUserInOrg");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsGetMembershipForUserInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamMembership["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/memberships/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGetMembershipForUserLegacy operation.
     * @callback module:api/TeamsApi~teamsGetMembershipForUserLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get team membership for a user (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://developer.github.com/v3/teams/members/#get-team-membership-for-a-user) endpoint.  Team members will include the members of child teams.  To get a user's membership with a team, the team must be visible to the authenticated user.  **Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://developer.github.com/v3/teams/#create-a-team).
     * @param {Number} teamId 
     * @param {String} username 
     * @param {module:api/TeamsApi~teamsGetMembershipForUserLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamMembership}
     */

  }, {
    key: "teamsGetMembershipForUserLegacy",
    value: function teamsGetMembershipForUserLegacy(teamId, username, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsGetMembershipForUserLegacy");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsGetMembershipForUserLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TeamMembership["default"];
      return this.apiClient.callApi('/teams/{team_id}/memberships/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsList operation.
     * @callback module:api/TeamsApi~teamsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List teams
     * Lists all teams in an organization that are visible to the authenticated user.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "teamsList",
    value: function teamsList(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsList");
      }

      var pathParams = {
        'org': org
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
      return this.apiClient.callApi('/orgs/{org}/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListChildInOrg operation.
     * @callback module:api/TeamsApi~teamsListChildInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List child teams
     * Lists the child teams of the team specified by `{team_slug}`.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListChildInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "teamsListChildInOrg",
    value: function teamsListChildInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListChildInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListChildInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
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
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListChildLegacy operation.
     * @callback module:api/TeamsApi~teamsListChildLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List child teams (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://developer.github.com/v3/teams/#list-child-teams) endpoint.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListChildLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "teamsListChildLegacy",
    value: function teamsListChildLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListChildLegacy");
      }

      var pathParams = {
        'team_id': teamId
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
      return this.apiClient.callApi('/teams/{team_id}/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListDiscussionCommentsInOrg operation.
     * @callback module:api/TeamsApi~teamsListDiscussionCommentsInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamDiscussionComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List discussion comments
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListDiscussionCommentsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamDiscussionComment>}
     */

  }, {
    key: "teamsListDiscussionCommentsInOrg",
    value: function teamsListDiscussionCommentsInOrg(org, teamSlug, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListDiscussionCommentsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListDiscussionCommentsInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsListDiscussionCommentsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber
      };
      var queryParams = {
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TeamDiscussionComment["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListDiscussionCommentsLegacy operation.
     * @callback module:api/TeamsApi~teamsListDiscussionCommentsLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamDiscussionComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List discussion comments (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://developer.github.com/v3/teams/discussion_comments/#list-discussion-comments) endpoint.  List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListDiscussionCommentsLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamDiscussionComment>}
     */

  }, {
    key: "teamsListDiscussionCommentsLegacy",
    value: function teamsListDiscussionCommentsLegacy(teamId, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListDiscussionCommentsLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsListDiscussionCommentsLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber
      };
      var queryParams = {
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TeamDiscussionComment["default"]];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListDiscussionsInOrg operation.
     * @callback module:api/TeamsApi~teamsListDiscussionsInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamDiscussion>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List discussions
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListDiscussionsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamDiscussion>}
     */

  }, {
    key: "teamsListDiscussionsInOrg",
    value: function teamsListDiscussionsInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListDiscussionsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListDiscussionsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TeamDiscussion["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListDiscussionsLegacy operation.
     * @callback module:api/TeamsApi~teamsListDiscussionsLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamDiscussion>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List discussions (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://developer.github.com/v3/teams/discussions/#list-discussions) endpoint.  List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListDiscussionsLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamDiscussion>}
     */

  }, {
    key: "teamsListDiscussionsLegacy",
    value: function teamsListDiscussionsLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListDiscussionsLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TeamDiscussion["default"]];
      return this.apiClient.callApi('/teams/{team_id}/discussions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListForAuthenticatedUser operation.
     * @callback module:api/TeamsApi~teamsListForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamFull>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List teams for the authenticated user
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://developer.github.com/apps/building-oauth-apps/).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamFull>}
     */

  }, {
    key: "teamsListForAuthenticatedUser",
    value: function teamsListForAuthenticatedUser(opts, callback) {
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
      var returnType = [_TeamFull["default"]];
      return this.apiClient.callApi('/user/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListIdpGroupsForLegacy operation.
     * @callback module:api/TeamsApi~teamsListIdpGroupsForLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List IdP groups for a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List IdP groups for a team`](https://developer.github.com/v3/teams/team_sync/#list-idp-groups-for-a-team) endpoint.  Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  List IdP groups connected to a team on GitHub.
     * @param {Number} teamId 
     * @param {module:api/TeamsApi~teamsListIdpGroupsForLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMapping}
     */

  }, {
    key: "teamsListIdpGroupsForLegacy",
    value: function teamsListIdpGroupsForLegacy(teamId, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListIdpGroupsForLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GroupMapping["default"];
      return this.apiClient.callApi('/teams/{team_id}/team-sync/group-mappings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListIdpGroupsForOrg operation.
     * @callback module:api/TeamsApi~teamsListIdpGroupsForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List IdP groups for an organization
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  List IdP groups available in an organization. You can limit your page results using the `per_page` parameter. GitHub generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see \"[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89).\"  The `per_page` parameter provides pagination for a list of IdP groups the authenticated user can access in an organization. For example, if the user `octocat` wants to see two groups per page in `octo-org` via cURL, it would look like this:
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListIdpGroupsForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMapping}
     */

  }, {
    key: "teamsListIdpGroupsForOrg",
    value: function teamsListIdpGroupsForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListIdpGroupsForOrg");
      }

      var pathParams = {
        'org': org
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
      var returnType = _GroupMapping["default"];
      return this.apiClient.callApi('/orgs/{org}/team-sync/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListIdpGroupsInOrg operation.
     * @callback module:api/TeamsApi~teamsListIdpGroupsInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List IdP groups for a team
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  List IdP groups connected to a team on GitHub.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {module:api/TeamsApi~teamsListIdpGroupsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMapping}
     */

  }, {
    key: "teamsListIdpGroupsInOrg",
    value: function teamsListIdpGroupsInOrg(org, teamSlug, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListIdpGroupsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListIdpGroupsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GroupMapping["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/team-sync/group-mappings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListMembersInOrg operation.
     * @callback module:api/TeamsApi~teamsListMembersInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List team members
     * Team members will include the members of child teams.  To list members in a team, the team must be visible to the authenticated user.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.role Filters members returned by their role in the team. Can be one of:   \\* `member` - normal members of the team.   \\* `maintainer` - team maintainers.   \\* `all` - all members of the team. (default to 'all')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListMembersInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "teamsListMembersInOrg",
    value: function teamsListMembersInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListMembersInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListMembersInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {
        'role': opts['role'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListMembersLegacy operation.
     * @callback module:api/TeamsApi~teamsListMembersLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List team members (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://developer.github.com/v3/teams/members/#list-team-members) endpoint.  Team members will include the members of child teams.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.role Filters members returned by their role in the team. Can be one of:   \\* `member` - normal members of the team.   \\* `maintainer` - team maintainers.   \\* `all` - all members of the team. (default to 'all')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListMembersLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "teamsListMembersLegacy",
    value: function teamsListMembersLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListMembersLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {
        'role': opts['role'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/teams/{team_id}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListPendingInvitationsInOrg operation.
     * @callback module:api/TeamsApi~teamsListPendingInvitationsInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganizationInvitation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List pending team invitations
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListPendingInvitationsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganizationInvitation>}
     */

  }, {
    key: "teamsListPendingInvitationsInOrg",
    value: function teamsListPendingInvitationsInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListPendingInvitationsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListPendingInvitationsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
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
      var returnType = [_OrganizationInvitation["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListPendingInvitationsLegacy operation.
     * @callback module:api/TeamsApi~teamsListPendingInvitationsLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganizationInvitation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List pending team invitations (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List pending team invitations`](https://developer.github.com/v3/teams/members/#list-pending-team-invitations) endpoint.  The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListPendingInvitationsLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganizationInvitation>}
     */

  }, {
    key: "teamsListPendingInvitationsLegacy",
    value: function teamsListPendingInvitationsLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListPendingInvitationsLegacy");
      }

      var pathParams = {
        'team_id': teamId
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
      var returnType = [_OrganizationInvitation["default"]];
      return this.apiClient.callApi('/teams/{team_id}/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListProjectsInOrg operation.
     * @callback module:api/TeamsApi~teamsListProjectsInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamProject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List team projects
     * Lists the organization projects for a team.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListProjectsInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamProject>}
     */

  }, {
    key: "teamsListProjectsInOrg",
    value: function teamsListProjectsInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListProjectsInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListProjectsInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
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
      var returnType = [_TeamProject["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListProjectsLegacy operation.
     * @callback module:api/TeamsApi~teamsListProjectsLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamProject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List team projects (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://developer.github.com/v3/teams/#list-team-projects) endpoint.  Lists the organization projects for a team.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListProjectsLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamProject>}
     */

  }, {
    key: "teamsListProjectsLegacy",
    value: function teamsListProjectsLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListProjectsLegacy");
      }

      var pathParams = {
        'team_id': teamId
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
      var returnType = [_TeamProject["default"]];
      return this.apiClient.callApi('/teams/{team_id}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListReposInOrg operation.
     * @callback module:api/TeamsApi~teamsListReposInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List team repositories
     * Lists a team's repositories visible to the authenticated user.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListReposInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "teamsListReposInOrg",
    value: function teamsListReposInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsListReposInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsListReposInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
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
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/repos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsListReposLegacy operation.
     * @callback module:api/TeamsApi~teamsListReposLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List team repositories (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://developer.github.com/v3/teams/#list-team-repositories) endpoint.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/TeamsApi~teamsListReposLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "teamsListReposLegacy",
    value: function teamsListReposLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsListReposLegacy");
      }

      var pathParams = {
        'team_id': teamId
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
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/teams/{team_id}/repos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsRemoveMemberLegacy operation.
     * @callback module:api/TeamsApi~teamsRemoveMemberLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove team member (Legacy)
     * The \"Remove team member\" endpoint (described below) is deprecated.  We recommend using the [Remove team membership for a user](https://developer.github.com/v3/teams/members/#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.  Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.  **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
     * @param {Number} teamId 
     * @param {String} username 
     * @param {module:api/TeamsApi~teamsRemoveMemberLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsRemoveMemberLegacy",
    value: function teamsRemoveMemberLegacy(teamId, username, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsRemoveMemberLegacy");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsRemoveMemberLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/members/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsRemoveMembershipForUserInOrg operation.
     * @callback module:api/TeamsApi~teamsRemoveMembershipForUserInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove team membership for a user
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.  **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"  **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {String} username 
     * @param {module:api/TeamsApi~teamsRemoveMembershipForUserInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsRemoveMembershipForUserInOrg",
    value: function teamsRemoveMembershipForUserInOrg(org, teamSlug, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsRemoveMembershipForUserInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsRemoveMembershipForUserInOrg");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsRemoveMembershipForUserInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/memberships/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsRemoveMembershipForUserLegacy operation.
     * @callback module:api/TeamsApi~teamsRemoveMembershipForUserLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove team membership for a user (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://developer.github.com/v3/teams/members/#remove-team-membership-for-a-user) endpoint.  Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.  **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
     * @param {Number} teamId 
     * @param {String} username 
     * @param {module:api/TeamsApi~teamsRemoveMembershipForUserLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsRemoveMembershipForUserLegacy",
    value: function teamsRemoveMembershipForUserLegacy(teamId, username, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsRemoveMembershipForUserLegacy");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling teamsRemoveMembershipForUserLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/memberships/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsRemoveProjectInOrg operation.
     * @callback module:api/TeamsApi~teamsRemoveProjectInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a project from a team
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} projectId 
     * @param {module:api/TeamsApi~teamsRemoveProjectInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsRemoveProjectInOrg",
    value: function teamsRemoveProjectInOrg(org, teamSlug, projectId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsRemoveProjectInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsRemoveProjectInOrg");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamsRemoveProjectInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/projects/{project_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsRemoveProjectLegacy operation.
     * @callback module:api/TeamsApi~teamsRemoveProjectLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a project from a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://developer.github.com/v3/teams/#remove-a-project-from-a-team) endpoint.  Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
     * @param {Number} teamId 
     * @param {Number} projectId 
     * @param {module:api/TeamsApi~teamsRemoveProjectLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsRemoveProjectLegacy",
    value: function teamsRemoveProjectLegacy(teamId, projectId, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsRemoveProjectLegacy");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamsRemoveProjectLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{team_id}/projects/{project_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsRemoveRepoInOrg operation.
     * @callback module:api/TeamsApi~teamsRemoveRepoInOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a repository from a team
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/TeamsApi~teamsRemoveRepoInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsRemoveRepoInOrg",
    value: function teamsRemoveRepoInOrg(org, teamSlug, owner, repo, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsRemoveRepoInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsRemoveRepoInOrg");
      } // verify the required parameter 'owner' is set


      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsRemoveRepoInOrg");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling teamsRemoveRepoInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
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
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsRemoveRepoLegacy operation.
     * @callback module:api/TeamsApi~teamsRemoveRepoLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a repository from a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://developer.github.com/v3/teams/#remove-a-repository-from-a-team) endpoint.  If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
     * @param {Number} teamId 
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/TeamsApi~teamsRemoveRepoLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsRemoveRepoLegacy",
    value: function teamsRemoveRepoLegacy(teamId, owner, repo, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsRemoveRepoLegacy");
      } // verify the required parameter 'owner' is set


      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsRemoveRepoLegacy");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling teamsRemoveRepoLegacy");
      }

      var pathParams = {
        'team_id': teamId,
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
      return this.apiClient.callApi('/teams/{team_id}/repos/{owner}/{repo}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUpdateDiscussionCommentInOrg operation.
     * @callback module:api/TeamsApi~teamsUpdateDiscussionCommentInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussionComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a discussion comment
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject32} opts.inlineObject32 
     * @param {module:api/TeamsApi~teamsUpdateDiscussionCommentInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussionComment}
     */

  }, {
    key: "teamsUpdateDiscussionCommentInOrg",
    value: function teamsUpdateDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject32']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsUpdateDiscussionCommentInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsUpdateDiscussionCommentInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsUpdateDiscussionCommentInOrg");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling teamsUpdateDiscussionCommentInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussionComment["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUpdateDiscussionCommentLegacy operation.
     * @callback module:api/TeamsApi~teamsUpdateDiscussionCommentLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussionComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#update-a-discussion-comment) endpoint.  Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject130} opts.inlineObject130 
     * @param {module:api/TeamsApi~teamsUpdateDiscussionCommentLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussionComment}
     */

  }, {
    key: "teamsUpdateDiscussionCommentLegacy",
    value: function teamsUpdateDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject130']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsUpdateDiscussionCommentLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsUpdateDiscussionCommentLegacy");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling teamsUpdateDiscussionCommentLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussionComment["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUpdateDiscussionInOrg operation.
     * @callback module:api/TeamsApi~teamsUpdateDiscussionInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a discussion
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject30} opts.inlineObject30 
     * @param {module:api/TeamsApi~teamsUpdateDiscussionInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussion}
     */

  }, {
    key: "teamsUpdateDiscussionInOrg",
    value: function teamsUpdateDiscussionInOrg(org, teamSlug, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject30']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsUpdateDiscussionInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsUpdateDiscussionInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsUpdateDiscussionInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussion["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUpdateDiscussionLegacy operation.
     * @callback module:api/TeamsApi~teamsUpdateDiscussionLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamDiscussion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://developer.github.com/v3/teams/discussions/#update-a-discussion) endpoint.  Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject128} opts.inlineObject128 
     * @param {module:api/TeamsApi~teamsUpdateDiscussionLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamDiscussion}
     */

  }, {
    key: "teamsUpdateDiscussionLegacy",
    value: function teamsUpdateDiscussionLegacy(teamId, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject128']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsUpdateDiscussionLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling teamsUpdateDiscussionLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamDiscussion["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUpdateInOrg operation.
     * @callback module:api/TeamsApi~teamsUpdateInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a team
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject28} opts.inlineObject28 
     * @param {module:api/TeamsApi~teamsUpdateInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamFull}
     */

  }, {
    key: "teamsUpdateInOrg",
    value: function teamsUpdateInOrg(org, teamSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject28']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling teamsUpdateInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling teamsUpdateInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamFull["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUpdateLegacy operation.
     * @callback module:api/TeamsApi~teamsUpdateLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a team (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://developer.github.com/v3/teams/#update-a-team) endpoint.  To edit a team, the authenticated user must either be an organization owner or a team maintainer.  **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
     * @param {Number} teamId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject126} opts.inlineObject126 
     * @param {module:api/TeamsApi~teamsUpdateLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamFull}
     */

  }, {
    key: "teamsUpdateLegacy",
    value: function teamsUpdateLegacy(teamId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject126']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamsUpdateLegacy");
      }

      var pathParams = {
        'team_id': teamId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TeamFull["default"];
      return this.apiClient.callApi('/teams/{team_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TeamsApi;
}();

exports["default"] = TeamsApi;