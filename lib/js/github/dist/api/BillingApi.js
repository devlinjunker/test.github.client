"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionsBillingUsage = _interopRequireDefault(require("../model/ActionsBillingUsage"));

var _CombinedBillingUsage = _interopRequireDefault(require("../model/CombinedBillingUsage"));

var _PackagesBillingUsage = _interopRequireDefault(require("../model/PackagesBillingUsage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Billing service.
* @module api/BillingApi
* @version 0.0.5
*/
var BillingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BillingApi. 
  * @alias module:api/BillingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BillingApi(apiClient) {
    _classCallCheck(this, BillingApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the billingGetGithubActionsBillingGhe operation.
   * @callback module:api/BillingApi~billingGetGithubActionsBillingGheCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ActionsBillingUsage} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get GitHub Actions billing for an enterprise
   * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  The authenticated user must be an enterprise admin.
   * @param {String} enterpriseId Unique identifier of the GitHub Enterprise Cloud instance.
   * @param {module:api/BillingApi~billingGetGithubActionsBillingGheCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ActionsBillingUsage}
   */


  _createClass(BillingApi, [{
    key: "billingGetGithubActionsBillingGhe",
    value: function billingGetGithubActionsBillingGhe(enterpriseId, callback) {
      var postBody = null; // verify the required parameter 'enterpriseId' is set

      if (enterpriseId === undefined || enterpriseId === null) {
        throw new Error("Missing the required parameter 'enterpriseId' when calling billingGetGithubActionsBillingGhe");
      }

      var pathParams = {
        'enterprise_id': enterpriseId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ActionsBillingUsage["default"];
      return this.apiClient.callApi('/enterprises/{enterprise_id}/settings/billing/actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetGithubActionsBillingOrg operation.
     * @callback module:api/BillingApi~billingGetGithubActionsBillingOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionsBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get GitHub Actions billing for an organization
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  Access tokens must have the `read:org` scope.
     * @param {String} org 
     * @param {module:api/BillingApi~billingGetGithubActionsBillingOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionsBillingUsage}
     */

  }, {
    key: "billingGetGithubActionsBillingOrg",
    value: function billingGetGithubActionsBillingOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling billingGetGithubActionsBillingOrg");
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
      var returnType = _ActionsBillingUsage["default"];
      return this.apiClient.callApi('/orgs/{org}/settings/billing/actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetGithubActionsBillingUser operation.
     * @callback module:api/BillingApi~billingGetGithubActionsBillingUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionsBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get GitHub Actions billing for a user
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  Access tokens must have the `user` scope.
     * @param {String} username 
     * @param {module:api/BillingApi~billingGetGithubActionsBillingUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionsBillingUsage}
     */

  }, {
    key: "billingGetGithubActionsBillingUser",
    value: function billingGetGithubActionsBillingUser(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling billingGetGithubActionsBillingUser");
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
      var returnType = _ActionsBillingUsage["default"];
      return this.apiClient.callApi('/users/{username}/settings/billing/actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetGithubPackagesBillingGhe operation.
     * @callback module:api/BillingApi~billingGetGithubPackagesBillingGheCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PackagesBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get GitHub Packages billing for an enterprise
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  The authenticated user must be an enterprise admin.
     * @param {String} enterpriseId Unique identifier of the GitHub Enterprise Cloud instance.
     * @param {module:api/BillingApi~billingGetGithubPackagesBillingGheCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PackagesBillingUsage}
     */

  }, {
    key: "billingGetGithubPackagesBillingGhe",
    value: function billingGetGithubPackagesBillingGhe(enterpriseId, callback) {
      var postBody = null; // verify the required parameter 'enterpriseId' is set

      if (enterpriseId === undefined || enterpriseId === null) {
        throw new Error("Missing the required parameter 'enterpriseId' when calling billingGetGithubPackagesBillingGhe");
      }

      var pathParams = {
        'enterprise_id': enterpriseId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PackagesBillingUsage["default"];
      return this.apiClient.callApi('/enterprises/{enterprise_id}/settings/billing/packages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetGithubPackagesBillingOrg operation.
     * @callback module:api/BillingApi~billingGetGithubPackagesBillingOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PackagesBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get GitHub Packages billing for an organization
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage usued for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `read:org` scope.
     * @param {String} org 
     * @param {module:api/BillingApi~billingGetGithubPackagesBillingOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PackagesBillingUsage}
     */

  }, {
    key: "billingGetGithubPackagesBillingOrg",
    value: function billingGetGithubPackagesBillingOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling billingGetGithubPackagesBillingOrg");
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
      var returnType = _PackagesBillingUsage["default"];
      return this.apiClient.callApi('/orgs/{org}/settings/billing/packages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetGithubPackagesBillingUser operation.
     * @callback module:api/BillingApi~billingGetGithubPackagesBillingUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PackagesBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get GitHub Packages billing for a user
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `user` scope.
     * @param {String} username 
     * @param {module:api/BillingApi~billingGetGithubPackagesBillingUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PackagesBillingUsage}
     */

  }, {
    key: "billingGetGithubPackagesBillingUser",
    value: function billingGetGithubPackagesBillingUser(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling billingGetGithubPackagesBillingUser");
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
      var returnType = _PackagesBillingUsage["default"];
      return this.apiClient.callApi('/users/{username}/settings/billing/packages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetSharedStorageBillingGhe operation.
     * @callback module:api/BillingApi~billingGetSharedStorageBillingGheCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CombinedBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get shared storage billing for an enterprise
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  The authenticated user must be an enterprise admin.
     * @param {String} enterpriseId Unique identifier of the GitHub Enterprise Cloud instance.
     * @param {module:api/BillingApi~billingGetSharedStorageBillingGheCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CombinedBillingUsage}
     */

  }, {
    key: "billingGetSharedStorageBillingGhe",
    value: function billingGetSharedStorageBillingGhe(enterpriseId, callback) {
      var postBody = null; // verify the required parameter 'enterpriseId' is set

      if (enterpriseId === undefined || enterpriseId === null) {
        throw new Error("Missing the required parameter 'enterpriseId' when calling billingGetSharedStorageBillingGhe");
      }

      var pathParams = {
        'enterprise_id': enterpriseId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CombinedBillingUsage["default"];
      return this.apiClient.callApi('/enterprises/{enterprise_id}/settings/billing/shared-storage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetSharedStorageBillingOrg operation.
     * @callback module:api/BillingApi~billingGetSharedStorageBillingOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CombinedBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get shared storage billing for an organization
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `read:org` scope.
     * @param {String} org 
     * @param {module:api/BillingApi~billingGetSharedStorageBillingOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CombinedBillingUsage}
     */

  }, {
    key: "billingGetSharedStorageBillingOrg",
    value: function billingGetSharedStorageBillingOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling billingGetSharedStorageBillingOrg");
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
      var returnType = _CombinedBillingUsage["default"];
      return this.apiClient.callApi('/orgs/{org}/settings/billing/shared-storage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the billingGetSharedStorageBillingUser operation.
     * @callback module:api/BillingApi~billingGetSharedStorageBillingUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CombinedBillingUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get shared storage billing for a user
     * **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `user` scope.
     * @param {String} username 
     * @param {module:api/BillingApi~billingGetSharedStorageBillingUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CombinedBillingUsage}
     */

  }, {
    key: "billingGetSharedStorageBillingUser",
    value: function billingGetSharedStorageBillingUser(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling billingGetSharedStorageBillingUser");
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
      var returnType = _CombinedBillingUsage["default"];
      return this.apiClient.callApi('/users/{username}/settings/billing/shared-storage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BillingApi;
}();

exports["default"] = BillingApi;