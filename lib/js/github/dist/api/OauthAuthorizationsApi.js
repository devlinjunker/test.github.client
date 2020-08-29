"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationGrant = _interopRequireDefault(require("../model/ApplicationGrant"));

var _Authorization = _interopRequireDefault(require("../model/Authorization"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject5"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject6"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject7"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject8"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* OauthAuthorizations service.
* @module api/OauthAuthorizationsApi
* @version 0.0.5
*/
var OauthAuthorizationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OauthAuthorizationsApi. 
  * @alias module:api/OauthAuthorizationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OauthAuthorizationsApi(apiClient) {
    _classCallCheck(this, OauthAuthorizationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the oauthAuthorizationsCreateAuthorization operation.
   * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsCreateAuthorizationCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Authorization} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new authorization
   * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  Creates OAuth tokens using [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\"  To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.  You can also create tokens on GitHub from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).  Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject5} opts.inlineObject5 
   * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsCreateAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Authorization}
   */


  _createClass(OauthAuthorizationsApi, [{
    key: "oauthAuthorizationsCreateAuthorization",
    value: function oauthAuthorizationsCreateAuthorization(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject5'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/authorizations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsDeleteAuthorization operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsDeleteAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an authorization
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     * @param {Number} authorizationId authorization_id parameter
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsDeleteAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "oauthAuthorizationsDeleteAuthorization",
    value: function oauthAuthorizationsDeleteAuthorization(authorizationId, callback) {
      var postBody = null; // verify the required parameter 'authorizationId' is set

      if (authorizationId === undefined || authorizationId === null) {
        throw new Error("Missing the required parameter 'authorizationId' when calling oauthAuthorizationsDeleteAuthorization");
      }

      var pathParams = {
        'authorization_id': authorizationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/authorizations/{authorization_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsDeleteGrant operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsDeleteGrantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a grant
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     * @param {Number} grantId grant_id parameter
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsDeleteGrantCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "oauthAuthorizationsDeleteGrant",
    value: function oauthAuthorizationsDeleteGrant(grantId, callback) {
      var postBody = null; // verify the required parameter 'grantId' is set

      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling oauthAuthorizationsDeleteGrant");
      }

      var pathParams = {
        'grant_id': grantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/applications/grants/{grant_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsGetAuthorization operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsGetAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single authorization
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     * @param {Number} authorizationId authorization_id parameter
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsGetAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "oauthAuthorizationsGetAuthorization",
    value: function oauthAuthorizationsGetAuthorization(authorizationId, callback) {
      var postBody = null; // verify the required parameter 'authorizationId' is set

      if (authorizationId === undefined || authorizationId === null) {
        throw new Error("Missing the required parameter 'authorizationId' when calling oauthAuthorizationsGetAuthorization");
      }

      var pathParams = {
        'authorization_id': authorizationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/authorizations/{authorization_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsGetGrant operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsGetGrantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationGrant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single grant
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     * @param {Number} grantId grant_id parameter
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsGetGrantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationGrant}
     */

  }, {
    key: "oauthAuthorizationsGetGrant",
    value: function oauthAuthorizationsGetGrant(grantId, callback) {
      var postBody = null; // verify the required parameter 'grantId' is set

      if (grantId === undefined || grantId === null) {
        throw new Error("Missing the required parameter 'grantId' when calling oauthAuthorizationsGetGrant");
      }

      var pathParams = {
        'grant_id': grantId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationGrant["default"];
      return this.apiClient.callApi('/applications/grants/{grant_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsGetOrCreateAuthorizationForApp operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsGetOrCreateAuthorizationForAppCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get-or-create an authorization for a specific app
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\"  **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     * @param {String} clientId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject6} opts.inlineObject6 
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsGetOrCreateAuthorizationForAppCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "oauthAuthorizationsGetOrCreateAuthorizationForApp",
    value: function oauthAuthorizationsGetOrCreateAuthorizationForApp(clientId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject6']; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling oauthAuthorizationsGetOrCreateAuthorizationForApp");
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
      return this.apiClient.callApi('/authorizations/clients/{client_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get-or-create an authorization for a specific app and fingerprint
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\"
     * @param {String} clientId 
     * @param {String} fingerprint fingerprint parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject7} opts.inlineObject7 
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint",
    value: function oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(clientId, fingerprint, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject7']; // verify the required parameter 'clientId' is set

      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint");
      } // verify the required parameter 'fingerprint' is set


      if (fingerprint === undefined || fingerprint === null) {
        throw new Error("Missing the required parameter 'fingerprint' when calling oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint");
      }

      var pathParams = {
        'client_id': clientId,
        'fingerprint': fingerprint
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/authorizations/clients/{client_id}/{fingerprint}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsListAuthorizations operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsListAuthorizationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Authorization>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List your authorizations
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsListAuthorizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Authorization>}
     */

  }, {
    key: "oauthAuthorizationsListAuthorizations",
    value: function oauthAuthorizationsListAuthorizations(opts, callback) {
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
      var returnType = [_Authorization["default"]];
      return this.apiClient.callApi('/authorizations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsListGrants operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsListGrantsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApplicationGrant>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List your grants
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `[\"repo\", \"user\"]`.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsListGrantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApplicationGrant>}
     */

  }, {
    key: "oauthAuthorizationsListGrants",
    value: function oauthAuthorizationsListGrants(opts, callback) {
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
      var returnType = [_ApplicationGrant["default"]];
      return this.apiClient.callApi('/applications/grants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the oauthAuthorizationsUpdateAuthorization operation.
     * @callback module:api/OauthAuthorizationsApi~oauthAuthorizationsUpdateAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Authorization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing authorization
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\"  You can only send one of these scope keys at a time.
     * @param {Number} authorizationId authorization_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject8} opts.inlineObject8 
     * @param {module:api/OauthAuthorizationsApi~oauthAuthorizationsUpdateAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Authorization}
     */

  }, {
    key: "oauthAuthorizationsUpdateAuthorization",
    value: function oauthAuthorizationsUpdateAuthorization(authorizationId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject8']; // verify the required parameter 'authorizationId' is set

      if (authorizationId === undefined || authorizationId === null) {
        throw new Error("Missing the required parameter 'authorizationId' when calling oauthAuthorizationsUpdateAuthorization");
      }

      var pathParams = {
        'authorization_id': authorizationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Authorization["default"];
      return this.apiClient.callApi('/authorizations/{authorization_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OauthAuthorizationsApi;
}();

exports["default"] = OauthAuthorizationsApi;