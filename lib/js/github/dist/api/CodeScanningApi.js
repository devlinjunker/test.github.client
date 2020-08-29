"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _CodeScanningAlert = _interopRequireDefault(require("../model/CodeScanningAlert"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse503"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CodeScanning service.
* @module api/CodeScanningApi
* @version 0.0.5
*/
var CodeScanningApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CodeScanningApi. 
  * @alias module:api/CodeScanningApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CodeScanningApi(apiClient) {
    _classCallCheck(this, CodeScanningApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the codeScanningGetAlert operation.
   * @callback module:api/CodeScanningApi~codeScanningGetAlertCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CodeScanningAlert} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a code scanning alert
   * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.  The security `alert_id` is found at the end of the security alert's URL. For example, the security alert ID for `https://github.com/Octo-org/octo-repo/security/code-scanning/88` is `88`.
   * @param {String} owner 
   * @param {String} repo 
   * @param {Number} alertId alert_id parameter
   * @param {module:api/CodeScanningApi~codeScanningGetAlertCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CodeScanningAlert}
   */


  _createClass(CodeScanningApi, [{
    key: "codeScanningGetAlert",
    value: function codeScanningGetAlert(owner, repo, alertId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling codeScanningGetAlert");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling codeScanningGetAlert");
      } // verify the required parameter 'alertId' is set


      if (alertId === undefined || alertId === null) {
        throw new Error("Missing the required parameter 'alertId' when calling codeScanningGetAlert");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'alert_id': alertId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CodeScanningAlert["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/code-scanning/alerts/{alert_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the codeScanningListAlertsForRepo operation.
     * @callback module:api/CodeScanningApi~codeScanningListAlertsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CodeScanningAlert>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List code scanning alerts for a repository
     * Lists all open code scanning alerts for the default branch (usually `master`) and protected branches in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.state Set to `closed` to list only closed code scanning alerts. (default to 'open')
     * @param {String} opts.ref Returns a list of code scanning alerts for a specific brach reference. The `ref` must be formatted as `heads/<branch name>`.
     * @param {module:api/CodeScanningApi~codeScanningListAlertsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CodeScanningAlert>}
     */

  }, {
    key: "codeScanningListAlertsForRepo",
    value: function codeScanningListAlertsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling codeScanningListAlertsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling codeScanningListAlertsForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'state': opts['state'],
        'ref': opts['ref']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CodeScanningAlert["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/code-scanning/alerts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CodeScanningApi;
}();

exports["default"] = CodeScanningApi;