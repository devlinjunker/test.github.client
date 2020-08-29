"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _License = _interopRequireDefault(require("../model/License"));

var _LicenseContent = _interopRequireDefault(require("../model/LicenseContent"));

var _LicenseSimple = _interopRequireDefault(require("../model/LicenseSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Licenses service.
* @module api/LicensesApi
* @version 0.0.5
*/
var LicensesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LicensesApi. 
  * @alias module:api/LicensesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LicensesApi(apiClient) {
    _classCallCheck(this, LicensesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the licensesGet operation.
   * @callback module:api/LicensesApi~licensesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/License} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a license
   * @param {String} license license parameter
   * @param {module:api/LicensesApi~licensesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/License}
   */


  _createClass(LicensesApi, [{
    key: "licensesGet",
    value: function licensesGet(license, callback) {
      var postBody = null; // verify the required parameter 'license' is set

      if (license === undefined || license === null) {
        throw new Error("Missing the required parameter 'license' when calling licensesGet");
      }

      var pathParams = {
        'license': license
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _License["default"];
      return this.apiClient.callApi('/licenses/{license}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the licensesGetAllCommonlyUsed operation.
     * @callback module:api/LicensesApi~licensesGetAllCommonlyUsedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LicenseSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all commonly used licenses
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.featured 
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {module:api/LicensesApi~licensesGetAllCommonlyUsedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LicenseSimple>}
     */

  }, {
    key: "licensesGetAllCommonlyUsed",
    value: function licensesGetAllCommonlyUsed(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'featured': opts['featured'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LicenseSimple["default"]];
      return this.apiClient.callApi('/licenses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the licensesGetForRepo operation.
     * @callback module:api/LicensesApi~licensesGetForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LicenseContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the license for a repository
     * This method returns the contents of the repository's license file, if one is detected.  Similar to [Get repository content](https://developer.github.com/v3/repos/contents/#get-repository-content), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/LicensesApi~licensesGetForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LicenseContent}
     */

  }, {
    key: "licensesGetForRepo",
    value: function licensesGetForRepo(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling licensesGetForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling licensesGetForRepo");
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
      var returnType = _LicenseContent["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/license', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LicensesApi;
}();

exports["default"] = LicensesApi;