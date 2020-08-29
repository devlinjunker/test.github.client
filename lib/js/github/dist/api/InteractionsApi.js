"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject21"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject78"));

var _InteractionLimit = _interopRequireDefault(require("../model/InteractionLimit"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Interactions service.
* @module api/InteractionsApi
* @version 0.0.5
*/
var InteractionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InteractionsApi. 
  * @alias module:api/InteractionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InteractionsApi(apiClient) {
    _classCallCheck(this, InteractionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the interactionsGetRestrictionsForOrg operation.
   * @callback module:api/InteractionsApi~interactionsGetRestrictionsForOrgCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InteractionLimit} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get interaction restrictions for an organization
   * Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.
   * @param {String} org 
   * @param {module:api/InteractionsApi~interactionsGetRestrictionsForOrgCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InteractionLimit}
   */


  _createClass(InteractionsApi, [{
    key: "interactionsGetRestrictionsForOrg",
    value: function interactionsGetRestrictionsForOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling interactionsGetRestrictionsForOrg");
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
      var returnType = _InteractionLimit["default"];
      return this.apiClient.callApi('/orgs/{org}/interaction-limits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the interactionsGetRestrictionsForRepo operation.
     * @callback module:api/InteractionsApi~interactionsGetRestrictionsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteractionLimit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get interaction restrictions for a repository
     * Shows which group of GitHub users can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/InteractionsApi~interactionsGetRestrictionsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteractionLimit}
     */

  }, {
    key: "interactionsGetRestrictionsForRepo",
    value: function interactionsGetRestrictionsForRepo(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling interactionsGetRestrictionsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling interactionsGetRestrictionsForRepo");
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
      var returnType = _InteractionLimit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/interaction-limits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the interactionsRemoveRestrictionsForOrg operation.
     * @callback module:api/InteractionsApi~interactionsRemoveRestrictionsForOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove interaction restrictions for an organization
     * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
     * @param {String} org 
     * @param {module:api/InteractionsApi~interactionsRemoveRestrictionsForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "interactionsRemoveRestrictionsForOrg",
    value: function interactionsRemoveRestrictionsForOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling interactionsRemoveRestrictionsForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/interaction-limits', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the interactionsRemoveRestrictionsForRepo operation.
     * @callback module:api/InteractionsApi~interactionsRemoveRestrictionsForRepoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove interaction restrictions for a repository
     * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/InteractionsApi~interactionsRemoveRestrictionsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "interactionsRemoveRestrictionsForRepo",
    value: function interactionsRemoveRestrictionsForRepo(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling interactionsRemoveRestrictionsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling interactionsRemoveRestrictionsForRepo");
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
      return this.apiClient.callApi('/repos/{owner}/{repo}/interaction-limits', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the interactionsSetRestrictionsForOrg operation.
     * @callback module:api/InteractionsApi~interactionsSetRestrictionsForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteractionLimit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set interaction restrictions for an organization
     * Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject21} opts.inlineObject21 
     * @param {module:api/InteractionsApi~interactionsSetRestrictionsForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteractionLimit}
     */

  }, {
    key: "interactionsSetRestrictionsForOrg",
    value: function interactionsSetRestrictionsForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject21']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling interactionsSetRestrictionsForOrg");
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
      var returnType = _InteractionLimit["default"];
      return this.apiClient.callApi('/orgs/{org}/interaction-limits', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the interactionsSetRestrictionsForRepo operation.
     * @callback module:api/InteractionsApi~interactionsSetRestrictionsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InteractionLimit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set interaction restrictions for a repository
     * Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject78} opts.inlineObject78 
     * @param {module:api/InteractionsApi~interactionsSetRestrictionsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InteractionLimit}
     */

  }, {
    key: "interactionsSetRestrictionsForRepo",
    value: function interactionsSetRestrictionsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject78']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling interactionsSetRestrictionsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling interactionsSetRestrictionsForRepo");
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
      var returnType = _InteractionLimit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/interaction-limits', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return InteractionsApi;
}();

exports["default"] = InteractionsApi;