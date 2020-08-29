"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Authorization = _interopRequireDefault(require("../model/Authorization"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _ContentReferenceAttachment = _interopRequireDefault(require("../model/ContentReferenceAttachment"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject4"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject9"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20020"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse415"));

var _Installation = _interopRequireDefault(require("../model/Installation"));

var _InstallationToken = _interopRequireDefault(require("../model/InstallationToken"));

var _Integration = _interopRequireDefault(require("../model/Integration"));

var _MarketplaceListingPlan = _interopRequireDefault(require("../model/MarketplaceListingPlan"));

var _MarketplacePurchase = _interopRequireDefault(require("../model/MarketplacePurchase"));

var _UserMarketplacePurchase = _interopRequireDefault(require("../model/UserMarketplacePurchase"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

var _ValidationErrorSimple = _interopRequireDefault(require("../model/ValidationErrorSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Apps service.
* @module api/AppsApi
* @version 0.0.5
*/
var AppsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AppsApi. 
  * @alias module:api/AppsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AppsApi(apiClient) {
    _classCallCheck(this, AppsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the appsAddRepoToInstallation operation.
   * @callback module:api/AppsApi~appsAddRepoToInstallationCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a repository to an app installation
   * Add a single repository to an installation. The authenticated user must have admin access to the repository.  You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.
   * @param {Number} installationId installation_id parameter
   * @param {Number} repositoryId repository_id parameter
   * @param {module:api/AppsApi~appsAddRepoToInstallationCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(AppsApi, [{
    key: "appsAddRepoToInstallation",
    value: function appsAddRepoToInstallation(installationId, repositoryId, callback) {
      var postBody = null; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsAddRepoToInstallation");
      } // verify the required parameter 'repositoryId' is set


      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling appsAddRepoToInstallation");
      }

      var pathParams = {
        'installation_id': installationId,
        'repository_id': repositoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/installations/{installation_id}/repositories/{repository_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsCheckAuthorization operation.
     * @callback module:api/AppsApi~appsCheckAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check an authorization
     * **Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).  OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     * @param {String} clientId 
     * @param {String} accessToken 
     * @param {module:api/AppsApi~appsCheckAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "appsCheckAuthorization",
    value: function appsCheckAuthorization(clientId, accessToken, callback) {
      var postBody = null; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsCheckAuthorization");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling appsCheckAuthorization");
      }

      var pathParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/applications/{client_id}/tokens/{access_token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsCheckToken operation.
     * @callback module:api/AppsApi~appsCheckTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check a token
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @param {module:api/AppsApi~appsCheckTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "appsCheckToken",
    value: function appsCheckToken(clientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject2']; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsCheckToken");
      }

      var pathParams = {
        'client_id': clientId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/applications/{client_id}/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsCreateContentAttachment operation.
     * @callback module:api/AppsApi~appsCreateContentAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentReferenceAttachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a content attachment
     * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://developer.github.com/webhooks/event-payloads/#content_reference) to create an attachment.  The app must create a content attachment within six hours of the content reference URL being posted. See \"[Using content attachments](https://developer.github.com/apps/using-content-attachments/)\" for details about content attachments.  You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     * @param {Number} contentReferenceId content_reference_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject9} opts.inlineObject9 
     * @param {module:api/AppsApi~appsCreateContentAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentReferenceAttachment}
     */

  }, {
    key: "appsCreateContentAttachment",
    value: function appsCreateContentAttachment(contentReferenceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject9']; // verify the required parameter 'contentReferenceId' is set

      if (contentReferenceId === undefined || contentReferenceId === null) {
        throw new Error("Missing the required parameter 'contentReferenceId' when calling appsCreateContentAttachment");
      }

      var pathParams = {
        'content_reference_id': contentReferenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ContentReferenceAttachment["default"];
      return this.apiClient.callApi('/content_references/{content_reference_id}/attachments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsCreateFromManifest operation.
     * @callback module:api/AppsApi~appsCreateFromManifestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Integration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a GitHub App from a manifest
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     * @param {String} code code parameter
     * @param {module:api/AppsApi~appsCreateFromManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Integration}
     */

  }, {
    key: "appsCreateFromManifest",
    value: function appsCreateFromManifest(code, callback) {
      var postBody = null; // verify the required parameter 'code' is set

      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling appsCreateFromManifest");
      }

      var pathParams = {
        'code': code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Integration["default"];
      return this.apiClient.callApi('/app-manifests/{code}/conversions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsCreateInstallationAccessToken operation.
     * @callback module:api/AppsApi~appsCreateInstallationAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InstallationToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an installation access token for an app
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {Number} installationId installation_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/AppsApi~appsCreateInstallationAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InstallationToken}
     */

  }, {
    key: "appsCreateInstallationAccessToken",
    value: function appsCreateInstallationAccessToken(installationId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject']; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsCreateInstallationAccessToken");
      }

      var pathParams = {
        'installation_id': installationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InstallationToken["default"];
      return this.apiClient.callApi('/app/installations/{installation_id}/access_tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsDeleteAuthorization operation.
     * @callback module:api/AppsApi~appsDeleteAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an app authorization
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted. Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/AppsApi~appsDeleteAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsDeleteAuthorization",
    value: function appsDeleteAuthorization(clientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject1']; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsDeleteAuthorization");
      }

      var pathParams = {
        'client_id': clientId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/applications/{client_id}/grant', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsDeleteInstallation operation.
     * @callback module:api/AppsApi~appsDeleteInstallationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an installation for the authenticated app
     * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the \"[Suspend an app installation](https://developer.github.com/v3/apps/#suspend-an-app-installation)\" endpoint.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {Number} installationId installation_id parameter
     * @param {module:api/AppsApi~appsDeleteInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsDeleteInstallation",
    value: function appsDeleteInstallation(installationId, callback) {
      var postBody = null; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsDeleteInstallation");
      }

      var pathParams = {
        'installation_id': installationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/app/installations/{installation_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsDeleteToken operation.
     * @callback module:api/AppsApi~appsDeleteTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an app token
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @param {module:api/AppsApi~appsDeleteTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsDeleteToken",
    value: function appsDeleteToken(clientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject3']; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsDeleteToken");
      }

      var pathParams = {
        'client_id': clientId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/applications/{client_id}/token', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetAuthenticated operation.
     * @callback module:api/AppsApi~appsGetAuthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Integration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the authenticated app
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the \"[List installations for the authenticated app](https://developer.github.com/v3/apps/#list-installations-for-the-authenticated-app)\" endpoint.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {module:api/AppsApi~appsGetAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Integration}
     */

  }, {
    key: "appsGetAuthenticated",
    value: function appsGetAuthenticated(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Integration["default"];
      return this.apiClient.callApi('/app', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetBySlug operation.
     * @callback module:api/AppsApi~appsGetBySlugCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Integration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an app
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).  If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     * @param {String} appSlug app_slug parameter
     * @param {module:api/AppsApi~appsGetBySlugCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Integration}
     */

  }, {
    key: "appsGetBySlug",
    value: function appsGetBySlug(appSlug, callback) {
      var postBody = null; // verify the required parameter 'appSlug' is set

      if (appSlug === undefined || appSlug === null) {
        throw new Error("Missing the required parameter 'appSlug' when calling appsGetBySlug");
      }

      var pathParams = {
        'app_slug': appSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Integration["default"];
      return this.apiClient.callApi('/apps/{app_slug}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetInstallation operation.
     * @callback module:api/AppsApi~appsGetInstallationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Installation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an installation for the authenticated app
     * Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {Number} installationId installation_id parameter
     * @param {module:api/AppsApi~appsGetInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Installation}
     */

  }, {
    key: "appsGetInstallation",
    value: function appsGetInstallation(installationId, callback) {
      var postBody = null; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsGetInstallation");
      }

      var pathParams = {
        'installation_id': installationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Installation["default"];
      return this.apiClient.callApi('/app/installations/{installation_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetOrgInstallation operation.
     * @callback module:api/AppsApi~appsGetOrgInstallationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Installation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization installation for the authenticated app
     * Enables an authenticated GitHub App to find the organization's installation information.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {String} org 
     * @param {module:api/AppsApi~appsGetOrgInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Installation}
     */

  }, {
    key: "appsGetOrgInstallation",
    value: function appsGetOrgInstallation(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling appsGetOrgInstallation");
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
      var returnType = _Installation["default"];
      return this.apiClient.callApi('/orgs/{org}/installation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetRepoInstallation operation.
     * @callback module:api/AppsApi~appsGetRepoInstallationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Installation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a repository installation for the authenticated app
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/AppsApi~appsGetRepoInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Installation}
     */

  }, {
    key: "appsGetRepoInstallation",
    value: function appsGetRepoInstallation(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling appsGetRepoInstallation");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling appsGetRepoInstallation");
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
      var returnType = _Installation["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/installation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetSubscriptionPlanForAccount operation.
     * @callback module:api/AppsApi~appsGetSubscriptionPlanForAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MarketplacePurchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a subscription plan for an account
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.  GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param {Number} accountId account_id parameter
     * @param {module:api/AppsApi~appsGetSubscriptionPlanForAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MarketplacePurchase}
     */

  }, {
    key: "appsGetSubscriptionPlanForAccount",
    value: function appsGetSubscriptionPlanForAccount(accountId, callback) {
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling appsGetSubscriptionPlanForAccount");
      }

      var pathParams = {
        'account_id': accountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MarketplacePurchase["default"];
      return this.apiClient.callApi('/marketplace_listing/accounts/{account_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetSubscriptionPlanForAccountStubbed operation.
     * @callback module:api/AppsApi~appsGetSubscriptionPlanForAccountStubbedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MarketplacePurchase} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a subscription plan for an account (stubbed)
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.  GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param {Number} accountId account_id parameter
     * @param {module:api/AppsApi~appsGetSubscriptionPlanForAccountStubbedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MarketplacePurchase}
     */

  }, {
    key: "appsGetSubscriptionPlanForAccountStubbed",
    value: function appsGetSubscriptionPlanForAccountStubbed(accountId, callback) {
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling appsGetSubscriptionPlanForAccountStubbed");
      }

      var pathParams = {
        'account_id': accountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MarketplacePurchase["default"];
      return this.apiClient.callApi('/marketplace_listing/stubbed/accounts/{account_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsGetUserInstallation operation.
     * @callback module:api/AppsApi~appsGetUserInstallationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Installation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user installation for the authenticated app
     * Enables an authenticated GitHub App to find the user’s installation information.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {String} username 
     * @param {module:api/AppsApi~appsGetUserInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Installation}
     */

  }, {
    key: "appsGetUserInstallation",
    value: function appsGetUserInstallation(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling appsGetUserInstallation");
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
      var returnType = _Installation["default"];
      return this.apiClient.callApi('/users/{username}/installation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListAccountsForPlan operation.
     * @callback module:api/AppsApi~appsListAccountsForPlanCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketplacePurchase>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List accounts for a plan
     * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.  GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param {Number} planId plan_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort One of `created` (when the repository was starred) or `updated` (when it was last pushed to). (default to 'created')
     * @param {module:model/String} opts.direction To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListAccountsForPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketplacePurchase>}
     */

  }, {
    key: "appsListAccountsForPlan",
    value: function appsListAccountsForPlan(planId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'planId' is set

      if (planId === undefined || planId === null) {
        throw new Error("Missing the required parameter 'planId' when calling appsListAccountsForPlan");
      }

      var pathParams = {
        'plan_id': planId
      };
      var queryParams = {
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
      var returnType = [_MarketplacePurchase["default"]];
      return this.apiClient.callApi('/marketplace_listing/plans/{plan_id}/accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListAccountsForPlanStubbed operation.
     * @callback module:api/AppsApi~appsListAccountsForPlanStubbedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketplacePurchase>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List accounts for a plan (stubbed)
     * Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.  GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param {Number} planId plan_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort One of `created` (when the repository was starred) or `updated` (when it was last pushed to). (default to 'created')
     * @param {module:model/String} opts.direction To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListAccountsForPlanStubbedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketplacePurchase>}
     */

  }, {
    key: "appsListAccountsForPlanStubbed",
    value: function appsListAccountsForPlanStubbed(planId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'planId' is set

      if (planId === undefined || planId === null) {
        throw new Error("Missing the required parameter 'planId' when calling appsListAccountsForPlanStubbed");
      }

      var pathParams = {
        'plan_id': planId
      };
      var queryParams = {
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
      var returnType = [_MarketplacePurchase["default"]];
      return this.apiClient.callApi('/marketplace_listing/stubbed/plans/{plan_id}/accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListInstallationReposForAuthenticatedUser operation.
     * @callback module:api/AppsApi~appsListInstallationReposForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20020} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories accessible to the user access token
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.  The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.  You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.  The access the user has to each repository is included in the hash under the `permissions` key.
     * @param {Number} installationId installation_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListInstallationReposForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20020}
     */

  }, {
    key: "appsListInstallationReposForAuthenticatedUser",
    value: function appsListInstallationReposForAuthenticatedUser(installationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsListInstallationReposForAuthenticatedUser");
      }

      var pathParams = {
        'installation_id': installationId
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/user/installations/{installation_id}/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListInstallations operation.
     * @callback module:api/AppsApi~appsListInstallationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Installation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List installations for the authenticated app
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.  The permissions the installation has are included under the `permissions` key.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {String} opts.outdated 
     * @param {module:api/AppsApi~appsListInstallationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Installation>}
     */

  }, {
    key: "appsListInstallations",
    value: function appsListInstallations(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page'],
        'since': opts['since'],
        'outdated': opts['outdated']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Installation["default"]];
      return this.apiClient.callApi('/app/installations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListInstallationsForAuthenticatedUser operation.
     * @callback module:api/AppsApi~appsListInstallationsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List app installations accessible to the user access token
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.  You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.  The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.  You can find the permissions for the installation under the `permissions` key.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListInstallationsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */

  }, {
    key: "appsListInstallationsForAuthenticatedUser",
    value: function appsListInstallationsForAuthenticatedUser(opts, callback) {
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
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/user/installations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListPlans operation.
     * @callback module:api/AppsApi~appsListPlansCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketplaceListingPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List plans
     * Lists all plans that are part of your GitHub Marketplace listing.  GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketplaceListingPlan>}
     */

  }, {
    key: "appsListPlans",
    value: function appsListPlans(opts, callback) {
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
      var returnType = [_MarketplaceListingPlan["default"]];
      return this.apiClient.callApi('/marketplace_listing/plans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListPlansStubbed operation.
     * @callback module:api/AppsApi~appsListPlansStubbedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketplaceListingPlan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List plans (stubbed)
     * Lists all plans that are part of your GitHub Marketplace listing.  GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListPlansStubbedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketplaceListingPlan>}
     */

  }, {
    key: "appsListPlansStubbed",
    value: function appsListPlansStubbed(opts, callback) {
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
      var returnType = [_MarketplaceListingPlan["default"]];
      return this.apiClient.callApi('/marketplace_listing/stubbed/plans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListReposAccessibleToInstallation operation.
     * @callback module:api/AppsApi~appsListReposAccessibleToInstallationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories accessible to the app installation
     * List repositories that an app installation can access.  You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListReposAccessibleToInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "appsListReposAccessibleToInstallation",
    value: function appsListReposAccessibleToInstallation(opts, callback) {
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/installation/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListSubscriptionsForAuthenticatedUser operation.
     * @callback module:api/AppsApi~appsListSubscriptionsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserMarketplacePurchase>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List subscriptions for the authenticated user
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListSubscriptionsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserMarketplacePurchase>}
     */

  }, {
    key: "appsListSubscriptionsForAuthenticatedUser",
    value: function appsListSubscriptionsForAuthenticatedUser(opts, callback) {
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
      var returnType = [_UserMarketplacePurchase["default"]];
      return this.apiClient.callApi('/user/marketplace_purchases', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsListSubscriptionsForAuthenticatedUserStubbed operation.
     * @callback module:api/AppsApi~appsListSubscriptionsForAuthenticatedUserStubbedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserMarketplacePurchase>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List subscriptions for the authenticated user (stubbed)
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/AppsApi~appsListSubscriptionsForAuthenticatedUserStubbedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserMarketplacePurchase>}
     */

  }, {
    key: "appsListSubscriptionsForAuthenticatedUserStubbed",
    value: function appsListSubscriptionsForAuthenticatedUserStubbed(opts, callback) {
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
      var returnType = [_UserMarketplacePurchase["default"]];
      return this.apiClient.callApi('/user/marketplace_purchases/stubbed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsRemoveRepoFromInstallation operation.
     * @callback module:api/AppsApi~appsRemoveRepoFromInstallationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a repository from an app installation
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.  You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.
     * @param {Number} installationId installation_id parameter
     * @param {Number} repositoryId repository_id parameter
     * @param {module:api/AppsApi~appsRemoveRepoFromInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsRemoveRepoFromInstallation",
    value: function appsRemoveRepoFromInstallation(installationId, repositoryId, callback) {
      var postBody = null; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsRemoveRepoFromInstallation");
      } // verify the required parameter 'repositoryId' is set


      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling appsRemoveRepoFromInstallation");
      }

      var pathParams = {
        'installation_id': installationId,
        'repository_id': repositoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/installations/{installation_id}/repositories/{repository_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsResetAuthorization operation.
     * @callback module:api/AppsApi~appsResetAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset an authorization
     * **Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).  OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the \"token\" property in the response because changes take effect immediately. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     * @param {String} clientId 
     * @param {String} accessToken 
     * @param {module:api/AppsApi~appsResetAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "appsResetAuthorization",
    value: function appsResetAuthorization(clientId, accessToken, callback) {
      var postBody = null; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsResetAuthorization");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling appsResetAuthorization");
      }

      var pathParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/applications/{client_id}/tokens/{access_token}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsResetToken operation.
     * @callback module:api/AppsApi~appsResetTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset a token
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the \"token\" property in the response because changes take effect immediately. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @param {module:api/AppsApi~appsResetTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "appsResetToken",
    value: function appsResetToken(clientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject4']; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsResetToken");
      }

      var pathParams = {
        'client_id': clientId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/applications/{client_id}/token', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsRevokeAuthorizationForApplication operation.
     * @callback module:api/AppsApi~appsRevokeAuthorizationForApplicationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke an authorization for an application
     * **Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).  OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     * @param {String} clientId 
     * @param {String} accessToken 
     * @param {module:api/AppsApi~appsRevokeAuthorizationForApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsRevokeAuthorizationForApplication",
    value: function appsRevokeAuthorizationForApplication(clientId, accessToken, callback) {
      var postBody = null; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsRevokeAuthorizationForApplication");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling appsRevokeAuthorizationForApplication");
      }

      var pathParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/applications/{client_id}/tokens/{access_token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsRevokeGrantForApplication operation.
     * @callback module:api/AppsApi~appsRevokeGrantForApplicationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke a grant for an application
     * **Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).  OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.  Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under \"Authorized OAuth Apps\" on GitHub](https://github.com/settings/applications#authorized).
     * @param {String} clientId 
     * @param {String} accessToken 
     * @param {module:api/AppsApi~appsRevokeGrantForApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsRevokeGrantForApplication",
    value: function appsRevokeGrantForApplication(clientId, accessToken, callback) {
      var postBody = null; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling appsRevokeGrantForApplication");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling appsRevokeGrantForApplication");
      }

      var pathParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/applications/{client_id}/grants/{access_token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsRevokeInstallationAccessToken operation.
     * @callback module:api/AppsApi~appsRevokeInstallationAccessTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke an installation access token
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.  Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the \"[Create an installation access token for an app](https://developer.github.com/v3/apps/#create-an-installation-access-token-for-an-app)\" endpoint.  You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     * @param {module:api/AppsApi~appsRevokeInstallationAccessTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsRevokeInstallationAccessToken",
    value: function appsRevokeInstallationAccessToken(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/installation/token', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsSuspendInstallation operation.
     * @callback module:api/AppsApi~appsSuspendInstallationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Suspend an app installation
     * **Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see \"[Suspending a GitHub App installation](https://developer.github.com/apps/managing-github-apps/suspending-a-github-app-installation/).\"  Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.  To suspend a GitHub App, you must be an account owner or have admin permissions in the repository or organization where the app is installed.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {Number} installationId installation_id parameter
     * @param {module:api/AppsApi~appsSuspendInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsSuspendInstallation",
    value: function appsSuspendInstallation(installationId, callback) {
      var postBody = null; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsSuspendInstallation");
      }

      var pathParams = {
        'installation_id': installationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/app/installations/{installation_id}/suspended', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the appsUnsuspendInstallation operation.
     * @callback module:api/AppsApi~appsUnsuspendInstallationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unsuspend an app installation
     * **Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see \"[Suspending a GitHub App installation](https://developer.github.com/apps/managing-github-apps/suspending-a-github-app-installation/).\"  Removes a GitHub App installation suspension.  To unsuspend a GitHub App, you must be an account owner or have admin permissions in the repository or organization where the app is installed and suspended.  You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * @param {Number} installationId installation_id parameter
     * @param {module:api/AppsApi~appsUnsuspendInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "appsUnsuspendInstallation",
    value: function appsUnsuspendInstallation(installationId, callback) {
      var postBody = null; // verify the required parameter 'installationId' is set

      if (installationId === undefined || installationId === null) {
        throw new Error("Missing the required parameter 'installationId' when calling appsUnsuspendInstallation");
      }

      var pathParams = {
        'installation_id': installationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/app/installations/{installation_id}/suspended', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AppsApi;
}();

exports["default"] = AppsApi;