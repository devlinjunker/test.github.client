"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiOverview = _interopRequireDefault(require("../model/ApiOverview"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Meta service.
* @module api/MetaApi
* @version 0.0.5
*/
var MetaApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MetaApi. 
  * @alias module:api/MetaApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MetaApi(apiClient) {
    _classCallCheck(this, MetaApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the metaGet operation.
   * @callback module:api/MetaApi~metaGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ApiOverview} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get GitHub meta information
   * This endpoint provides a list of GitHub's IP addresses. For more information, see \"[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/).\"
   * @param {module:api/MetaApi~metaGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ApiOverview}
   */


  _createClass(MetaApi, [{
    key: "metaGet",
    value: function metaGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApiOverview["default"];
      return this.apiClient.callApi('/meta', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the metaGetOctocat operation.
     * @callback module:api/MetaApi~metaGetOctocatCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Octocat
     * Get the octocat as ASCII art
     * @param {Object} opts Optional parameters
     * @param {String} opts.s The words to show in Octocat's speech bubble
     * @param {module:api/MetaApi~metaGetOctocatCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "metaGetOctocat",
    value: function metaGetOctocat(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        's': opts['s']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/octocat-stream'];
      var returnType = 'String';
      return this.apiClient.callApi('/octocat', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the metaGetZen operation.
     * @callback module:api/MetaApi~metaGetZenCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Zen of GitHub
     * Get a random sentence from the Zen of GitHub
     * @param {module:api/MetaApi~metaGetZenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "metaGetZen",
    value: function metaGetZen(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/zen', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the metaRoot operation.
     * @callback module:api/MetaApi~metaRootCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * GitHub API Root
     * Get Hypermedia links to resources accessible in GitHub's REST API
     * @param {module:api/MetaApi~metaRootCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "metaRoot",
    value: function metaRoot(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MetaApi;
}();

exports["default"] = MetaApi;