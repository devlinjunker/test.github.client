"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _Email = _interopRequireDefault(require("../model/Email"));

var _GpgKey = _interopRequireDefault(require("../model/GpgKey"));

var _Hovercard = _interopRequireDefault(require("../model/Hovercard"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject137"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject138"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject139"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject140"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse415"));

var _Key = _interopRequireDefault(require("../model/Key"));

var _KeySimple = _interopRequireDefault(require("../model/KeySimple"));

var _OneOfobjectarraystring = _interopRequireDefault(require("../model/OneOfobjectarraystring"));

var _OneOfprivateUserpublicUser = _interopRequireDefault(require("../model/OneOfprivateUserpublicUser"));

var _PrivateUser = _interopRequireDefault(require("../model/PrivateUser"));

var _SimpleUser = _interopRequireDefault(require("../model/SimpleUser"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 0.0.5
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the usersAddEmailForAuthenticated operation.
   * @callback module:api/UsersApi~usersAddEmailForAuthenticatedCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Email>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add an email address for the authenticated user
   * This endpoint is accessible with the `user` scope.
   * @param {Object} opts Optional parameters
   * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
   * @param {module:api/UsersApi~usersAddEmailForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Email>}
   */


  _createClass(UsersApi, [{
    key: "usersAddEmailForAuthenticated",
    value: function usersAddEmailForAuthenticated(opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Email["default"]];
      return this.apiClient.callApi('/user/emails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersBlock operation.
     * @callback module:api/UsersApi~usersBlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Block a user
     * @param {String} username 
     * @param {module:api/UsersApi~usersBlockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersBlock",
    value: function usersBlock(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersBlock");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/blocks/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersCheckBlocked operation.
     * @callback module:api/UsersApi~usersCheckBlockedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a user is blocked by the authenticated user
     * If the user is blocked:  If the user is not blocked:
     * @param {String} username 
     * @param {module:api/UsersApi~usersCheckBlockedCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersCheckBlocked",
    value: function usersCheckBlocked(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersCheckBlocked");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/blocks/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersCheckFollowingForUser operation.
     * @callback module:api/UsersApi~usersCheckFollowingForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a user follows another user
     * @param {String} username 
     * @param {String} targetUser target_user parameter
     * @param {module:api/UsersApi~usersCheckFollowingForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersCheckFollowingForUser",
    value: function usersCheckFollowingForUser(username, targetUser, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersCheckFollowingForUser");
      } // verify the required parameter 'targetUser' is set


      if (targetUser === undefined || targetUser === null) {
        throw new Error("Missing the required parameter 'targetUser' when calling usersCheckFollowingForUser");
      }

      var pathParams = {
        'username': username,
        'target_user': targetUser
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/following/{target_user}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersCheckPersonIsFollowedByAuthenticated operation.
     * @callback module:api/UsersApi~usersCheckPersonIsFollowedByAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a person is followed by the authenticated user
     * @param {String} username 
     * @param {module:api/UsersApi~usersCheckPersonIsFollowedByAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersCheckPersonIsFollowedByAuthenticated",
    value: function usersCheckPersonIsFollowedByAuthenticated(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersCheckPersonIsFollowedByAuthenticated");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/following/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersCreateGpgKeyForAuthenticated operation.
     * @callback module:api/UsersApi~usersCreateGpgKeyForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GpgKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a GPG key for the authenticated user
     * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject139} opts.inlineObject139 
     * @param {module:api/UsersApi~usersCreateGpgKeyForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GpgKey}
     */

  }, {
    key: "usersCreateGpgKeyForAuthenticated",
    value: function usersCreateGpgKeyForAuthenticated(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject139'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GpgKey["default"];
      return this.apiClient.callApi('/user/gpg_keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersCreatePublicSshKeyForAuthenticated operation.
     * @callback module:api/UsersApi~usersCreatePublicSshKeyForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Key} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a public SSH key for the authenticated user
     * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject140} opts.inlineObject140 
     * @param {module:api/UsersApi~usersCreatePublicSshKeyForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Key}
     */

  }, {
    key: "usersCreatePublicSshKeyForAuthenticated",
    value: function usersCreatePublicSshKeyForAuthenticated(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject140'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Key["default"];
      return this.apiClient.callApi('/user/keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersDeleteEmailForAuthenticated operation.
     * @callback module:api/UsersApi~usersDeleteEmailForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an email address for the authenticated user
     * This endpoint is accessible with the `user` scope.
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/UsersApi~usersDeleteEmailForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersDeleteEmailForAuthenticated",
    value: function usersDeleteEmailForAuthenticated(opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/emails', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersDeleteGpgKeyForAuthenticated operation.
     * @callback module:api/UsersApi~usersDeleteGpgKeyForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a GPG key for the authenticated user
     * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} gpgKeyId gpg_key_id parameter
     * @param {module:api/UsersApi~usersDeleteGpgKeyForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersDeleteGpgKeyForAuthenticated",
    value: function usersDeleteGpgKeyForAuthenticated(gpgKeyId, callback) {
      var postBody = null; // verify the required parameter 'gpgKeyId' is set

      if (gpgKeyId === undefined || gpgKeyId === null) {
        throw new Error("Missing the required parameter 'gpgKeyId' when calling usersDeleteGpgKeyForAuthenticated");
      }

      var pathParams = {
        'gpg_key_id': gpgKeyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/gpg_keys/{gpg_key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersDeletePublicSshKeyForAuthenticated operation.
     * @callback module:api/UsersApi~usersDeletePublicSshKeyForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a public SSH key for the authenticated user
     * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} keyId key_id parameter
     * @param {module:api/UsersApi~usersDeletePublicSshKeyForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersDeletePublicSshKeyForAuthenticated",
    value: function usersDeletePublicSshKeyForAuthenticated(keyId, callback) {
      var postBody = null; // verify the required parameter 'keyId' is set

      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling usersDeletePublicSshKeyForAuthenticated");
      }

      var pathParams = {
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/keys/{key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersFollow operation.
     * @callback module:api/UsersApi~usersFollowCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Follow a user
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"  Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     * @param {String} username 
     * @param {module:api/UsersApi~usersFollowCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersFollow",
    value: function usersFollow(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersFollow");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/following/{username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersGetAuthenticated operation.
     * @callback module:api/UsersApi~usersGetAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfprivateUserpublicUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the authenticated user
     * If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.  If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
     * @param {module:api/UsersApi~usersGetAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfprivateUserpublicUser}
     */

  }, {
    key: "usersGetAuthenticated",
    value: function usersGetAuthenticated(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OneOfprivateUserpublicUser["default"];
      return this.apiClient.callApi('/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersGetByUsername operation.
     * @callback module:api/UsersApi~usersGetByUsernameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfprivateUserpublicUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user
     * Provides publicly available information about someone with a GitHub account.  GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See \"[Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)\" for details about authentication. For an example response, see \"[Response with GitHub plan information](https://developer.github.com/v3/users/#response-with-github-plan-information).\"  The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://developer.github.com/v3/#authentication).  The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see \"[Emails API](https://developer.github.com/v3/users/emails/)\".
     * @param {String} username 
     * @param {module:api/UsersApi~usersGetByUsernameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfprivateUserpublicUser}
     */

  }, {
    key: "usersGetByUsername",
    value: function usersGetByUsername(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersGetByUsername");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OneOfprivateUserpublicUser["default"];
      return this.apiClient.callApi('/users/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersGetContextForUser operation.
     * @callback module:api/UsersApi~usersGetContextForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Hovercard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contextual information for a user
     * Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.  The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:  ```shell  curl -u username:token   https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192 ```
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.subjectType Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
     * @param {String} opts.subjectId Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.
     * @param {module:api/UsersApi~usersGetContextForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Hovercard}
     */

  }, {
    key: "usersGetContextForUser",
    value: function usersGetContextForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersGetContextForUser");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'subject_type': opts['subjectType'],
        'subject_id': opts['subjectId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Hovercard["default"];
      return this.apiClient.callApi('/users/{username}/hovercard', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersGetGpgKeyForAuthenticated operation.
     * @callback module:api/UsersApi~usersGetGpgKeyForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GpgKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a GPG key for the authenticated user
     * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} gpgKeyId gpg_key_id parameter
     * @param {module:api/UsersApi~usersGetGpgKeyForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GpgKey}
     */

  }, {
    key: "usersGetGpgKeyForAuthenticated",
    value: function usersGetGpgKeyForAuthenticated(gpgKeyId, callback) {
      var postBody = null; // verify the required parameter 'gpgKeyId' is set

      if (gpgKeyId === undefined || gpgKeyId === null) {
        throw new Error("Missing the required parameter 'gpgKeyId' when calling usersGetGpgKeyForAuthenticated");
      }

      var pathParams = {
        'gpg_key_id': gpgKeyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GpgKey["default"];
      return this.apiClient.callApi('/user/gpg_keys/{gpg_key_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersGetPublicSshKeyForAuthenticated operation.
     * @callback module:api/UsersApi~usersGetPublicSshKeyForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Key} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a public SSH key for the authenticated user
     * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} keyId key_id parameter
     * @param {module:api/UsersApi~usersGetPublicSshKeyForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Key}
     */

  }, {
    key: "usersGetPublicSshKeyForAuthenticated",
    value: function usersGetPublicSshKeyForAuthenticated(keyId, callback) {
      var postBody = null; // verify the required parameter 'keyId' is set

      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling usersGetPublicSshKeyForAuthenticated");
      }

      var pathParams = {
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Key["default"];
      return this.apiClient.callApi('/user/keys/{key_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersList operation.
     * @callback module:api/UsersApi~usersListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users
     * Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.  Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of users.
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {module:api/UsersApi~usersListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "usersList",
    value: function usersList(opts, callback) {
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListBlockedByAuthenticated operation.
     * @callback module:api/UsersApi~usersListBlockedByAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users blocked by the authenticated user
     * List the users you've blocked on your personal account.
     * @param {module:api/UsersApi~usersListBlockedByAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "usersListBlockedByAuthenticated",
    value: function usersListBlockedByAuthenticated(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/user/blocks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListEmailsForAuthenticated operation.
     * @callback module:api/UsersApi~usersListEmailsForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Email>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List email addresses for the authenticated user
     * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListEmailsForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Email>}
     */

  }, {
    key: "usersListEmailsForAuthenticated",
    value: function usersListEmailsForAuthenticated(opts, callback) {
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
      var returnType = [_Email["default"]];
      return this.apiClient.callApi('/user/emails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListFollowedByAuthenticated operation.
     * @callback module:api/UsersApi~usersListFollowedByAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the people the authenticated user follows
     * Lists the people who the authenticated user follows.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListFollowedByAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "usersListFollowedByAuthenticated",
    value: function usersListFollowedByAuthenticated(opts, callback) {
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/user/following', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListFollowersForAuthenticatedUser operation.
     * @callback module:api/UsersApi~usersListFollowersForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List followers of the authenticated user
     * Lists the people following the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListFollowersForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "usersListFollowersForAuthenticatedUser",
    value: function usersListFollowersForAuthenticatedUser(opts, callback) {
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/user/followers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListFollowersForUser operation.
     * @callback module:api/UsersApi~usersListFollowersForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List followers of a user
     * Lists the people following the specified user.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListFollowersForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "usersListFollowersForUser",
    value: function usersListFollowersForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersListFollowersForUser");
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/users/{username}/followers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListFollowingForUser operation.
     * @callback module:api/UsersApi~usersListFollowingForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the people a user follows
     * Lists the people who the specified user follows.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListFollowingForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "usersListFollowingForUser",
    value: function usersListFollowingForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersListFollowingForUser");
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/users/{username}/following', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListGpgKeysForAuthenticated operation.
     * @callback module:api/UsersApi~usersListGpgKeysForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GpgKey>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List GPG keys for the authenticated user
     * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListGpgKeysForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GpgKey>}
     */

  }, {
    key: "usersListGpgKeysForAuthenticated",
    value: function usersListGpgKeysForAuthenticated(opts, callback) {
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
      var returnType = [_GpgKey["default"]];
      return this.apiClient.callApi('/user/gpg_keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListGpgKeysForUser operation.
     * @callback module:api/UsersApi~usersListGpgKeysForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GpgKey>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List GPG keys for a user
     * Lists the GPG keys for a user. This information is accessible by anyone.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListGpgKeysForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GpgKey>}
     */

  }, {
    key: "usersListGpgKeysForUser",
    value: function usersListGpgKeysForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersListGpgKeysForUser");
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
      var returnType = [_GpgKey["default"]];
      return this.apiClient.callApi('/users/{username}/gpg_keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListPublicEmailsForAuthenticated operation.
     * @callback module:api/UsersApi~usersListPublicEmailsForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Email>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public email addresses for the authenticated user
     * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://developer.github.com/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListPublicEmailsForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Email>}
     */

  }, {
    key: "usersListPublicEmailsForAuthenticated",
    value: function usersListPublicEmailsForAuthenticated(opts, callback) {
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
      var returnType = [_Email["default"]];
      return this.apiClient.callApi('/user/public_emails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListPublicKeysForUser operation.
     * @callback module:api/UsersApi~usersListPublicKeysForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/KeySimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public keys for a user
     * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListPublicKeysForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/KeySimple>}
     */

  }, {
    key: "usersListPublicKeysForUser",
    value: function usersListPublicKeysForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersListPublicKeysForUser");
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
      var returnType = [_KeySimple["default"]];
      return this.apiClient.callApi('/users/{username}/keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersListPublicSshKeysForAuthenticated operation.
     * @callback module:api/UsersApi~usersListPublicSshKeysForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Key>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public SSH keys for the authenticated user
     * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/UsersApi~usersListPublicSshKeysForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Key>}
     */

  }, {
    key: "usersListPublicSshKeysForAuthenticated",
    value: function usersListPublicSshKeysForAuthenticated(opts, callback) {
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
      var returnType = [_Key["default"]];
      return this.apiClient.callApi('/user/keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersSetPrimaryEmailVisibilityForAuthenticated operation.
     * @callback module:api/UsersApi~usersSetPrimaryEmailVisibilityForAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Email>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set primary email visibility for the authenticated user
     * Sets the visibility for your primary email addresses.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject138} opts.inlineObject138 
     * @param {module:api/UsersApi~usersSetPrimaryEmailVisibilityForAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Email>}
     */

  }, {
    key: "usersSetPrimaryEmailVisibilityForAuthenticated",
    value: function usersSetPrimaryEmailVisibilityForAuthenticated(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject138'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Email["default"]];
      return this.apiClient.callApi('/user/email/visibility', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUnblock operation.
     * @callback module:api/UsersApi~usersUnblockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unblock a user
     * @param {String} username 
     * @param {module:api/UsersApi~usersUnblockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersUnblock",
    value: function usersUnblock(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersUnblock");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/blocks/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUnfollow operation.
     * @callback module:api/UsersApi~usersUnfollowCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unfollow a user
     * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     * @param {String} username 
     * @param {module:api/UsersApi~usersUnfollowCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersUnfollow",
    value: function usersUnfollow(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersUnfollow");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/following/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUpdateAuthenticated operation.
     * @callback module:api/UsersApi~usersUpdateAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivateUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the authenticated user
     * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject137} opts.inlineObject137 
     * @param {module:api/UsersApi~usersUpdateAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrivateUser}
     */

  }, {
    key: "usersUpdateAuthenticated",
    value: function usersUpdateAuthenticated(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject137'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PrivateUser["default"];
      return this.apiClient.callApi('/user', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;