"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject100"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject143"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject25"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject39"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject40"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject41"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject42"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject43"));

var _InlineObject9 = _interopRequireDefault(require("../model/InlineObject44"));

var _InlineObject10 = _interopRequireDefault(require("../model/InlineObject45"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse4032"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse4033"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse5031"));

var _OneOfobjectobject = _interopRequireDefault(require("../model/OneOfobjectobject"));

var _OneOfvalidationErrorvalidationErrorSimple = _interopRequireDefault(require("../model/OneOfvalidationErrorvalidationErrorSimple"));

var _Project = _interopRequireDefault(require("../model/Project"));

var _ProjectCard = _interopRequireDefault(require("../model/ProjectCard"));

var _ProjectColumn = _interopRequireDefault(require("../model/ProjectColumn"));

var _RepositoryCollaboratorPermission = _interopRequireDefault(require("../model/RepositoryCollaboratorPermission"));

var _SimpleUser = _interopRequireDefault(require("../model/SimpleUser"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

var _ValidationErrorSimple = _interopRequireDefault(require("../model/ValidationErrorSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Projects service.
* @module api/ProjectsApi
* @version 0.0.5
*/
var ProjectsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectsApi. 
  * @alias module:api/ProjectsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectsApi(apiClient) {
    _classCallCheck(this, ProjectsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectsAddCollaborator operation.
   * @callback module:api/ProjectsApi~projectsAddCollaboratorCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add project collaborator
   * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
   * @param {Number} projectId 
   * @param {String} username 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject44} opts.inlineObject44 
   * @param {module:api/ProjectsApi~projectsAddCollaboratorCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ProjectsApi, [{
    key: "projectsAddCollaborator",
    value: function projectsAddCollaborator(projectId, username, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject44']; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsAddCollaborator");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling projectsAddCollaborator");
      }

      var pathParams = {
        'project_id': projectId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/projects/{project_id}/collaborators/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsCreateCard operation.
     * @callback module:api/ProjectsApi~projectsCreateCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project card
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.  Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull request id, use the \"[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\" endpoint.
     * @param {Number} columnId column_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~projectsCreateCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectCard}
     */

  }, {
    key: "projectsCreateCard",
    value: function projectsCreateCard(columnId, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'columnId' is set

      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling projectsCreateCard");
      }

      var pathParams = {
        'column_id': columnId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProjectCard["default"];
      return this.apiClient.callApi('/projects/columns/{column_id}/cards', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsCreateColumn operation.
     * @callback module:api/ProjectsApi~projectsCreateColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project column
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject45} opts.inlineObject45 
     * @param {module:api/ProjectsApi~projectsCreateColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectColumn}
     */

  }, {
    key: "projectsCreateColumn",
    value: function projectsCreateColumn(projectId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject45']; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsCreateColumn");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProjectColumn["default"];
      return this.apiClient.callApi('/projects/{project_id}/columns', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsCreateForAuthenticatedUser operation.
     * @callback module:api/ProjectsApi~projectsCreateForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject143} opts.inlineObject143 
     * @param {module:api/ProjectsApi~projectsCreateForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectsCreateForAuthenticatedUser",
    value: function projectsCreateForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject143'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/user/projects', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsCreateForOrg operation.
     * @callback module:api/ProjectsApi~projectsCreateForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization project
     * Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject25} opts.inlineObject25 
     * @param {module:api/ProjectsApi~projectsCreateForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectsCreateForOrg",
    value: function projectsCreateForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject25']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling projectsCreateForOrg");
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
      var returnType = _Project["default"];
      return this.apiClient.callApi('/orgs/{org}/projects', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsCreateForRepo operation.
     * @callback module:api/ProjectsApi~projectsCreateForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository project
     * Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject100} opts.inlineObject100 
     * @param {module:api/ProjectsApi~projectsCreateForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectsCreateForRepo",
    value: function projectsCreateForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject100']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling projectsCreateForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling projectsCreateForRepo");
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
      var returnType = _Project["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/projects', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsDelete operation.
     * @callback module:api/ProjectsApi~projectsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project
     * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
     * @param {Number} projectId 
     * @param {module:api/ProjectsApi~projectsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectsDelete",
    value: function projectsDelete(projectId, callback) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsDelete");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/projects/{project_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsDeleteCard operation.
     * @callback module:api/ProjectsApi~projectsDeleteCardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project card
     * @param {Number} cardId card_id parameter
     * @param {module:api/ProjectsApi~projectsDeleteCardCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectsDeleteCard",
    value: function projectsDeleteCard(cardId, callback) {
      var postBody = null; // verify the required parameter 'cardId' is set

      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling projectsDeleteCard");
      }

      var pathParams = {
        'card_id': cardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/projects/columns/cards/{card_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsDeleteColumn operation.
     * @callback module:api/ProjectsApi~projectsDeleteColumnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project column
     * @param {Number} columnId column_id parameter
     * @param {module:api/ProjectsApi~projectsDeleteColumnCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectsDeleteColumn",
    value: function projectsDeleteColumn(columnId, callback) {
      var postBody = null; // verify the required parameter 'columnId' is set

      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling projectsDeleteColumn");
      }

      var pathParams = {
        'column_id': columnId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/projects/columns/{column_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsGet operation.
     * @callback module:api/ProjectsApi~projectsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project
     * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param {Number} projectId 
     * @param {module:api/ProjectsApi~projectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectsGet",
    value: function projectsGet(projectId, callback) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsGet");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/projects/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsGetCard operation.
     * @callback module:api/ProjectsApi~projectsGetCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project card
     * @param {Number} cardId card_id parameter
     * @param {module:api/ProjectsApi~projectsGetCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectCard}
     */

  }, {
    key: "projectsGetCard",
    value: function projectsGetCard(cardId, callback) {
      var postBody = null; // verify the required parameter 'cardId' is set

      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling projectsGetCard");
      }

      var pathParams = {
        'card_id': cardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectCard["default"];
      return this.apiClient.callApi('/projects/columns/cards/{card_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsGetColumn operation.
     * @callback module:api/ProjectsApi~projectsGetColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project column
     * @param {Number} columnId column_id parameter
     * @param {module:api/ProjectsApi~projectsGetColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectColumn}
     */

  }, {
    key: "projectsGetColumn",
    value: function projectsGetColumn(columnId, callback) {
      var postBody = null; // verify the required parameter 'columnId' is set

      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling projectsGetColumn");
      }

      var pathParams = {
        'column_id': columnId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectColumn["default"];
      return this.apiClient.callApi('/projects/columns/{column_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsGetPermissionForUser operation.
     * @callback module:api/ProjectsApi~projectsGetPermissionForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryCollaboratorPermission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project permission for a user
     * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
     * @param {Number} projectId 
     * @param {String} username 
     * @param {module:api/ProjectsApi~projectsGetPermissionForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryCollaboratorPermission}
     */

  }, {
    key: "projectsGetPermissionForUser",
    value: function projectsGetPermissionForUser(projectId, username, callback) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsGetPermissionForUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling projectsGetPermissionForUser");
      }

      var pathParams = {
        'project_id': projectId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RepositoryCollaboratorPermission["default"];
      return this.apiClient.callApi('/projects/{project_id}/collaborators/{username}/permission', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsListCards operation.
     * @callback module:api/ProjectsApi~projectsListCardsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectCard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project cards
     * @param {Number} columnId column_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.archivedState Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`. (default to 'not_archived')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ProjectsApi~projectsListCardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectCard>}
     */

  }, {
    key: "projectsListCards",
    value: function projectsListCards(columnId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'columnId' is set

      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling projectsListCards");
      }

      var pathParams = {
        'column_id': columnId
      };
      var queryParams = {
        'archived_state': opts['archivedState'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ProjectCard["default"]];
      return this.apiClient.callApi('/projects/columns/{column_id}/cards', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsListCollaborators operation.
     * @callback module:api/ProjectsApi~projectsListCollaboratorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project collaborators
     * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.affiliation Filters the collaborators by their affiliation. Can be one of:   \\* `outside`: Outside collaborators of a project that are not a member of the project's organization.   \\* `direct`: Collaborators with permissions to a project, regardless of organization membership status.   \\* `all`: All collaborators the authenticated user can see. (default to 'all')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ProjectsApi~projectsListCollaboratorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "projectsListCollaborators",
    value: function projectsListCollaborators(projectId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsListCollaborators");
      }

      var pathParams = {
        'project_id': projectId
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/projects/{project_id}/collaborators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsListColumns operation.
     * @callback module:api/ProjectsApi~projectsListColumnsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectColumn>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project columns
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ProjectsApi~projectsListColumnsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectColumn>}
     */

  }, {
    key: "projectsListColumns",
    value: function projectsListColumns(projectId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsListColumns");
      }

      var pathParams = {
        'project_id': projectId
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
      var returnType = [_ProjectColumn["default"]];
      return this.apiClient.callApi('/projects/{project_id}/columns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsListForOrg operation.
     * @callback module:api/ProjectsApi~projectsListForOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Project>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization projects
     * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`. (default to 'open')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ProjectsApi~projectsListForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Project>}
     */

  }, {
    key: "projectsListForOrg",
    value: function projectsListForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling projectsListForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {
        'state': opts['state'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Project["default"]];
      return this.apiClient.callApi('/orgs/{org}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsListForRepo operation.
     * @callback module:api/ProjectsApi~projectsListForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Project>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository projects
     * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`. (default to 'open')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ProjectsApi~projectsListForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Project>}
     */

  }, {
    key: "projectsListForRepo",
    value: function projectsListForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling projectsListForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling projectsListForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'state': opts['state'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Project["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsListForUser operation.
     * @callback module:api/ProjectsApi~projectsListForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Project>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List user projects
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`. (default to 'open')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ProjectsApi~projectsListForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Project>}
     */

  }, {
    key: "projectsListForUser",
    value: function projectsListForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling projectsListForUser");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'state': opts['state'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Project["default"]];
      return this.apiClient.callApi('/users/{username}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsMoveCard operation.
     * @callback module:api/ProjectsApi~projectsMoveCardCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move a project card
     * @param {Number} cardId card_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject40} opts.inlineObject40 
     * @param {module:api/ProjectsApi~projectsMoveCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "projectsMoveCard",
    value: function projectsMoveCard(cardId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject40']; // verify the required parameter 'cardId' is set

      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling projectsMoveCard");
      }

      var pathParams = {
        'card_id': cardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/projects/columns/cards/{card_id}/moves', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsMoveColumn operation.
     * @callback module:api/ProjectsApi~projectsMoveColumnCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move a project column
     * @param {Number} columnId column_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject42} opts.inlineObject42 
     * @param {module:api/ProjectsApi~projectsMoveColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "projectsMoveColumn",
    value: function projectsMoveColumn(columnId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject42']; // verify the required parameter 'columnId' is set

      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling projectsMoveColumn");
      }

      var pathParams = {
        'column_id': columnId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/projects/columns/{column_id}/moves', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsRemoveCollaborator operation.
     * @callback module:api/ProjectsApi~projectsRemoveCollaboratorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove user as a collaborator
     * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
     * @param {Number} projectId 
     * @param {String} username 
     * @param {module:api/ProjectsApi~projectsRemoveCollaboratorCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectsRemoveCollaborator",
    value: function projectsRemoveCollaborator(projectId, username, callback) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsRemoveCollaborator");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling projectsRemoveCollaborator");
      }

      var pathParams = {
        'project_id': projectId,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/projects/{project_id}/collaborators/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsUpdate operation.
     * @callback module:api/ProjectsApi~projectsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a project
     * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     * @param {Number} projectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject43} opts.inlineObject43 
     * @param {module:api/ProjectsApi~projectsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectsUpdate",
    value: function projectsUpdate(projectId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject43']; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsUpdate");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/projects/{project_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsUpdateCard operation.
     * @callback module:api/ProjectsApi~projectsUpdateCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing project card
     * @param {Number} cardId card_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject39} opts.inlineObject39 
     * @param {module:api/ProjectsApi~projectsUpdateCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectCard}
     */

  }, {
    key: "projectsUpdateCard",
    value: function projectsUpdateCard(cardId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject39']; // verify the required parameter 'cardId' is set

      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling projectsUpdateCard");
      }

      var pathParams = {
        'card_id': cardId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProjectCard["default"];
      return this.apiClient.callApi('/projects/columns/cards/{card_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsUpdateColumn operation.
     * @callback module:api/ProjectsApi~projectsUpdateColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing project column
     * @param {Number} columnId column_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject41} opts.inlineObject41 
     * @param {module:api/ProjectsApi~projectsUpdateColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectColumn}
     */

  }, {
    key: "projectsUpdateColumn",
    value: function projectsUpdateColumn(columnId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject41']; // verify the required parameter 'columnId' is set

      if (columnId === undefined || columnId === null) {
        throw new Error("Missing the required parameter 'columnId' when calling projectsUpdateColumn");
      }

      var pathParams = {
        'column_id': columnId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProjectColumn["default"];
      return this.apiClient.callApi('/projects/columns/{column_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectsApi;
}();

exports["default"] = ProjectsApi;