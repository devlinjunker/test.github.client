"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _CredentialAuthorization = _interopRequireDefault(require("../model/CredentialAuthorization"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject141"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject16"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject19"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject20"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject22"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject23"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse4031"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse415"));

var _OneOfvalidationErrorvalidationErrorSimple = _interopRequireDefault(require("../model/OneOfvalidationErrorvalidationErrorSimple"));

var _OrgHook = _interopRequireDefault(require("../model/OrgHook"));

var _OrgMembership = _interopRequireDefault(require("../model/OrgMembership"));

var _OrganizationFull = _interopRequireDefault(require("../model/OrganizationFull"));

var _OrganizationInvitation = _interopRequireDefault(require("../model/OrganizationInvitation"));

var _OrganizationSimple = _interopRequireDefault(require("../model/OrganizationSimple"));

var _SimpleUser = _interopRequireDefault(require("../model/SimpleUser"));

var _Team = _interopRequireDefault(require("../model/Team"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Orgs service.
* @module api/OrgsApi
* @version 0.0.5
*/
var OrgsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrgsApi. 
  * @alias module:api/OrgsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrgsApi(apiClient) {
    _classCallCheck(this, OrgsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the orgsBlockUser operation.
   * @callback module:api/OrgsApi~orgsBlockUserCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Block a user from an organization
   * @param {String} org 
   * @param {String} username 
   * @param {module:api/OrgsApi~orgsBlockUserCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(OrgsApi, [{
    key: "orgsBlockUser",
    value: function orgsBlockUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsBlockUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsBlockUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/blocks/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsCheckBlockedUser operation.
     * @callback module:api/OrgsApi~orgsCheckBlockedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a user is blocked by an organization
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsCheckBlockedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsCheckBlockedUser",
    value: function orgsCheckBlockedUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsCheckBlockedUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsCheckBlockedUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/blocks/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsCheckMembershipForUser operation.
     * @callback module:api/OrgsApi~orgsCheckMembershipForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check organization membership for a user
     * Check if a user is, publicly or privately, a member of the organization.
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsCheckMembershipForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsCheckMembershipForUser",
    value: function orgsCheckMembershipForUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsCheckMembershipForUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsCheckMembershipForUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/members/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsCheckPublicMembershipForUser operation.
     * @callback module:api/OrgsApi~orgsCheckPublicMembershipForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check public organization membership for a user
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsCheckPublicMembershipForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsCheckPublicMembershipForUser",
    value: function orgsCheckPublicMembershipForUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsCheckPublicMembershipForUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsCheckPublicMembershipForUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/public_members/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsConvertMemberToOutsideCollaborator operation.
     * @callback module:api/OrgsApi~orgsConvertMemberToOutsideCollaboratorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert an organization member to outside collaborator
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see \"[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)\".
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsConvertMemberToOutsideCollaboratorCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsConvertMemberToOutsideCollaborator",
    value: function orgsConvertMemberToOutsideCollaborator(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsConvertMemberToOutsideCollaborator");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsConvertMemberToOutsideCollaborator");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/outside_collaborators/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsCreateInvitation operation.
     * @callback module:api/OrgsApi~orgsCreateInvitationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationInvitation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization invitation
     * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject22} opts.inlineObject22 
     * @param {module:api/OrgsApi~orgsCreateInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationInvitation}
     */

  }, {
    key: "orgsCreateInvitation",
    value: function orgsCreateInvitation(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject22']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsCreateInvitation");
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
      var returnType = _OrganizationInvitation["default"];
      return this.apiClient.callApi('/orgs/{org}/invitations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsCreateWebhook operation.
     * @callback module:api/OrgsApi~orgsCreateWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization webhook
     * Here's how you can create a hook that posts payloads in JSON format:
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject19} opts.inlineObject19 
     * @param {module:api/OrgsApi~orgsCreateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrgHook}
     */

  }, {
    key: "orgsCreateWebhook",
    value: function orgsCreateWebhook(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject19']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsCreateWebhook");
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
      var returnType = _OrgHook["default"];
      return this.apiClient.callApi('/orgs/{org}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsDeleteWebhook operation.
     * @callback module:api/OrgsApi~orgsDeleteWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an organization webhook
     * @param {String} org 
     * @param {Number} hookId 
     * @param {module:api/OrgsApi~orgsDeleteWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsDeleteWebhook",
    value: function orgsDeleteWebhook(org, hookId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsDeleteWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling orgsDeleteWebhook");
      }

      var pathParams = {
        'org': org,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/hooks/{hook_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsGet operation.
     * @callback module:api/OrgsApi~orgsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).  GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See \"[Authenticating with GitHub Apps](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/)\" for details. For an example response, see \"[Response with GitHub plan information](https://developer.github.com/v3/orgs/#response-with-github-plan-information).\"
     * @param {String} org 
     * @param {module:api/OrgsApi~orgsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationFull}
     */

  }, {
    key: "orgsGet",
    value: function orgsGet(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsGet");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrganizationFull["default"];
      return this.apiClient.callApi('/orgs/{org}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsGetMembershipForAuthenticatedUser operation.
     * @callback module:api/OrgsApi~orgsGetMembershipForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization membership for the authenticated user
     * @param {String} org 
     * @param {module:api/OrgsApi~orgsGetMembershipForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrgMembership}
     */

  }, {
    key: "orgsGetMembershipForAuthenticatedUser",
    value: function orgsGetMembershipForAuthenticatedUser(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsGetMembershipForAuthenticatedUser");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrgMembership["default"];
      return this.apiClient.callApi('/user/memberships/orgs/{org}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsGetMembershipForUser operation.
     * @callback module:api/OrgsApi~orgsGetMembershipForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization membership for a user
     * In order to get a user's membership with an organization, the authenticated user must be an organization member.
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsGetMembershipForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrgMembership}
     */

  }, {
    key: "orgsGetMembershipForUser",
    value: function orgsGetMembershipForUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsGetMembershipForUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsGetMembershipForUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrgMembership["default"];
      return this.apiClient.callApi('/orgs/{org}/memberships/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsGetWebhook operation.
     * @callback module:api/OrgsApi~orgsGetWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization webhook
     * @param {String} org 
     * @param {Number} hookId 
     * @param {module:api/OrgsApi~orgsGetWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrgHook}
     */

  }, {
    key: "orgsGetWebhook",
    value: function orgsGetWebhook(org, hookId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsGetWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling orgsGetWebhook");
      }

      var pathParams = {
        'org': org,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrgHook["default"];
      return this.apiClient.callApi('/orgs/{org}/hooks/{hook_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsList operation.
     * @callback module:api/OrgsApi~orgsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganizationSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organizations
     * Lists all organizations, in the order that they were created on GitHub.  **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of organizations.
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {module:api/OrgsApi~orgsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganizationSimple>}
     */

  }, {
    key: "orgsList",
    value: function orgsList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'since': opts['since'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrganizationSimple["default"]];
      return this.apiClient.callApi('/organizations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListAppInstallations operation.
     * @callback module:api/OrgsApi~orgsListAppInstallationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List app installations for an organization
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListAppInstallationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */

  }, {
    key: "orgsListAppInstallations",
    value: function orgsListAppInstallations(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListAppInstallations");
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/orgs/{org}/installations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListBlockedUsers operation.
     * @callback module:api/OrgsApi~orgsListBlockedUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users blocked by an organization
     * List the users blocked by an organization.
     * @param {String} org 
     * @param {module:api/OrgsApi~orgsListBlockedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "orgsListBlockedUsers",
    value: function orgsListBlockedUsers(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListBlockedUsers");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/orgs/{org}/blocks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListForAuthenticatedUser operation.
     * @callback module:api/OrgsApi~orgsListForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganizationSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organizations for the authenticated user
     * List organizations for the authenticated user.  **OAuth scope requirements**  This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganizationSimple>}
     */

  }, {
    key: "orgsListForAuthenticatedUser",
    value: function orgsListForAuthenticatedUser(opts, callback) {
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
      var returnType = [_OrganizationSimple["default"]];
      return this.apiClient.callApi('/user/orgs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListForUser operation.
     * @callback module:api/OrgsApi~orgsListForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganizationSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organizations for a user
     * List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.  This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://developer.github.com/v3/orgs/#list-organizations-for-the-authenticated-user) API instead.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganizationSimple>}
     */

  }, {
    key: "orgsListForUser",
    value: function orgsListForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsListForUser");
      }

      var pathParams = {
        'username': username
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
      var returnType = [_OrganizationSimple["default"]];
      return this.apiClient.callApi('/users/{username}/orgs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListInvitationTeams operation.
     * @callback module:api/OrgsApi~orgsListInvitationTeamsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization invitation teams
     * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
     * @param {String} org 
     * @param {Number} invitationId invitation_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListInvitationTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */

  }, {
    key: "orgsListInvitationTeams",
    value: function orgsListInvitationTeams(org, invitationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListInvitationTeams");
      } // verify the required parameter 'invitationId' is set


      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling orgsListInvitationTeams");
      }

      var pathParams = {
        'org': org,
        'invitation_id': invitationId
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
      return this.apiClient.callApi('/orgs/{org}/invitations/{invitation_id}/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListMembers operation.
     * @callback module:api/OrgsApi~orgsListMembersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization members
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter Filter members returned in the list. Can be one of:   \\* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.   \\* `all` - All members the authenticated user can see. (default to 'all')
     * @param {module:model/String} opts.role Filter members returned by their role. Can be one of:   \\* `all` - All members of the organization, regardless of role.   \\* `admin` - Organization owners.   \\* `member` - Non-owner organization members. (default to 'all')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "orgsListMembers",
    value: function orgsListMembers(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListMembers");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {
        'filter': opts['filter'],
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
      return this.apiClient.callApi('/orgs/{org}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListMembershipsForAuthenticatedUser operation.
     * @callback module:api/OrgsApi~orgsListMembershipsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrgMembership>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization memberships for the authenticated user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListMembershipsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrgMembership>}
     */

  }, {
    key: "orgsListMembershipsForAuthenticatedUser",
    value: function orgsListMembershipsForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
      var returnType = [_OrgMembership["default"]];
      return this.apiClient.callApi('/user/memberships/orgs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListOutsideCollaborators operation.
     * @callback module:api/OrgsApi~orgsListOutsideCollaboratorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List outside collaborators for an organization
     * List all users who are outside collaborators of an organization.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter Filter the list of outside collaborators. Can be one of:   \\* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.   \\* `all`: All outside collaborators. (default to 'all')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListOutsideCollaboratorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "orgsListOutsideCollaborators",
    value: function orgsListOutsideCollaborators(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListOutsideCollaborators");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {
        'filter': opts['filter'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/orgs/{org}/outside_collaborators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListPendingInvitations operation.
     * @callback module:api/OrgsApi~orgsListPendingInvitationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganizationInvitation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List pending organization invitations
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListPendingInvitationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganizationInvitation>}
     */

  }, {
    key: "orgsListPendingInvitations",
    value: function orgsListPendingInvitations(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListPendingInvitations");
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
      var returnType = [_OrganizationInvitation["default"]];
      return this.apiClient.callApi('/orgs/{org}/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListPublicMembers operation.
     * @callback module:api/OrgsApi~orgsListPublicMembersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public organization members
     * Members of an organization can choose to have their membership publicized or not.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListPublicMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "orgsListPublicMembers",
    value: function orgsListPublicMembers(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListPublicMembers");
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/orgs/{org}/public_members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListSamlSsoAuthorizations operation.
     * @callback module:api/OrgsApi~orgsListSamlSsoAuthorizationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CredentialAuthorization>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List SAML SSO authorizations for an organization
     * Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products).  An authenticated organization owner with the `read:org` scope can list all credential authorizations for an organization that uses SAML single sign-on (SSO). The credentials are either personal access tokens or SSH keys that organization members have authorized for the organization. For more information, see [About authentication with SAML single sign-on](https://help.github.com/en/articles/about-authentication-with-saml-single-sign-on).
     * @param {String} org 
     * @param {module:api/OrgsApi~orgsListSamlSsoAuthorizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CredentialAuthorization>}
     */

  }, {
    key: "orgsListSamlSsoAuthorizations",
    value: function orgsListSamlSsoAuthorizations(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListSamlSsoAuthorizations");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CredentialAuthorization["default"]];
      return this.apiClient.callApi('/orgs/{org}/credential-authorizations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsListWebhooks operation.
     * @callback module:api/OrgsApi~orgsListWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrgHook>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization webhooks
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OrgsApi~orgsListWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrgHook>}
     */

  }, {
    key: "orgsListWebhooks",
    value: function orgsListWebhooks(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsListWebhooks");
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
      var returnType = [_OrgHook["default"]];
      return this.apiClient.callApi('/orgs/{org}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsPingWebhook operation.
     * @callback module:api/OrgsApi~orgsPingWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping an organization webhook
     * This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.
     * @param {String} org 
     * @param {Number} hookId 
     * @param {module:api/OrgsApi~orgsPingWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsPingWebhook",
    value: function orgsPingWebhook(org, hookId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsPingWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling orgsPingWebhook");
      }

      var pathParams = {
        'org': org,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/hooks/{hook_id}/pings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsRemoveMember operation.
     * @callback module:api/OrgsApi~orgsRemoveMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an organization member
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsRemoveMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsRemoveMember",
    value: function orgsRemoveMember(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsRemoveMember");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsRemoveMember");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/members/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsRemoveMembershipForUser operation.
     * @callback module:api/OrgsApi~orgsRemoveMembershipForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove organization membership for a user
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.  If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsRemoveMembershipForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsRemoveMembershipForUser",
    value: function orgsRemoveMembershipForUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsRemoveMembershipForUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsRemoveMembershipForUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/memberships/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsRemoveOutsideCollaborator operation.
     * @callback module:api/OrgsApi~orgsRemoveOutsideCollaboratorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove outside collaborator from an organization
     * Removing a user from this list will remove them from all the organization's repositories.
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsRemoveOutsideCollaboratorCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsRemoveOutsideCollaborator",
    value: function orgsRemoveOutsideCollaborator(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsRemoveOutsideCollaborator");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsRemoveOutsideCollaborator");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/outside_collaborators/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsRemovePublicMembershipForAuthenticatedUser operation.
     * @callback module:api/OrgsApi~orgsRemovePublicMembershipForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove public organization membership for the authenticated user
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsRemovePublicMembershipForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsRemovePublicMembershipForAuthenticatedUser",
    value: function orgsRemovePublicMembershipForAuthenticatedUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsRemovePublicMembershipForAuthenticatedUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsRemovePublicMembershipForAuthenticatedUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/public_members/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsRemoveSamlSsoAuthorization operation.
     * @callback module:api/OrgsApi~orgsRemoveSamlSsoAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a SAML SSO authorization for an organization
     * Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products).  An authenticated organization owner with the `admin:org` scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone's credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.
     * @param {String} org 
     * @param {Number} credentialId credential_id parameter
     * @param {module:api/OrgsApi~orgsRemoveSamlSsoAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsRemoveSamlSsoAuthorization",
    value: function orgsRemoveSamlSsoAuthorization(org, credentialId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsRemoveSamlSsoAuthorization");
      } // verify the required parameter 'credentialId' is set


      if (credentialId === undefined || credentialId === null) {
        throw new Error("Missing the required parameter 'credentialId' when calling orgsRemoveSamlSsoAuthorization");
      }

      var pathParams = {
        'org': org,
        'credential_id': credentialId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/credential-authorizations/{credential_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsSetMembershipForUser operation.
     * @callback module:api/OrgsApi~orgsSetMembershipForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set organization membership for a user
     * Only authenticated organization owners can add a member to the organization or update the member's role.  *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://developer.github.com/v3/orgs/members/#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.      *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.  **Rate limits**  To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     * @param {String} org 
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject23} opts.inlineObject23 
     * @param {module:api/OrgsApi~orgsSetMembershipForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrgMembership}
     */

  }, {
    key: "orgsSetMembershipForUser",
    value: function orgsSetMembershipForUser(org, username, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject23']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsSetMembershipForUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsSetMembershipForUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrgMembership["default"];
      return this.apiClient.callApi('/orgs/{org}/memberships/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsSetPublicMembershipForAuthenticatedUser operation.
     * @callback module:api/OrgsApi~orgsSetPublicMembershipForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set public organization membership for the authenticated user
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)  Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsSetPublicMembershipForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsSetPublicMembershipForAuthenticatedUser",
    value: function orgsSetPublicMembershipForAuthenticatedUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsSetPublicMembershipForAuthenticatedUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsSetPublicMembershipForAuthenticatedUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/public_members/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsUnblockUser operation.
     * @callback module:api/OrgsApi~orgsUnblockUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unblock a user from an organization
     * @param {String} org 
     * @param {String} username 
     * @param {module:api/OrgsApi~orgsUnblockUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "orgsUnblockUser",
    value: function orgsUnblockUser(org, username, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsUnblockUser");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling orgsUnblockUser");
      }

      var pathParams = {
        'org': org,
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/blocks/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsUpdate operation.
     * @callback module:api/OrgsApi~orgsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organization
     * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).  Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject16} opts.inlineObject16 
     * @param {module:api/OrgsApi~orgsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationFull}
     */

  }, {
    key: "orgsUpdate",
    value: function orgsUpdate(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject16']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsUpdate");
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
      var returnType = _OrganizationFull["default"];
      return this.apiClient.callApi('/orgs/{org}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsUpdateMembershipForAuthenticatedUser operation.
     * @callback module:api/OrgsApi~orgsUpdateMembershipForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organization membership for the authenticated user
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject141} opts.inlineObject141 
     * @param {module:api/OrgsApi~orgsUpdateMembershipForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrgMembership}
     */

  }, {
    key: "orgsUpdateMembershipForAuthenticatedUser",
    value: function orgsUpdateMembershipForAuthenticatedUser(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject141']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsUpdateMembershipForAuthenticatedUser");
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
      var returnType = _OrgMembership["default"];
      return this.apiClient.callApi('/user/memberships/orgs/{org}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the orgsUpdateWebhook operation.
     * @callback module:api/OrgsApi~orgsUpdateWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organization webhook
     * @param {String} org 
     * @param {Number} hookId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject20} opts.inlineObject20 
     * @param {module:api/OrgsApi~orgsUpdateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrgHook}
     */

  }, {
    key: "orgsUpdateWebhook",
    value: function orgsUpdateWebhook(org, hookId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject20']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling orgsUpdateWebhook");
      } // verify the required parameter 'hookId' is set


      if (hookId === undefined || hookId === null) {
        throw new Error("Missing the required parameter 'hookId' when calling orgsUpdateWebhook");
      }

      var pathParams = {
        'org': org,
        'hook_id': hookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrgHook["default"];
      return this.apiClient.callApi('/orgs/{org}/hooks/{hook_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OrgsApi;
}();

exports["default"] = OrgsApi;