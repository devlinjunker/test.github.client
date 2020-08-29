"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _RateLimitOverview = _interopRequireDefault(require("../model/RateLimitOverview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* RateLimit service.
* @module api/RateLimitApi
* @version 0.0.5
*/
var RateLimitApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RateLimitApi. 
  * @alias module:api/RateLimitApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RateLimitApi(apiClient) {
    _classCallCheck(this, RateLimitApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the rateLimitGet operation.
   * @callback module:api/RateLimitApi~rateLimitGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RateLimitOverview} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get rate limit status for the authenticated user
   * **Note:** Accessing this endpoint does not count against your REST API rate limit.  **Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.
   * @param {module:api/RateLimitApi~rateLimitGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/RateLimitOverview}
   */


  _createClass(RateLimitApi, [{
    key: "rateLimitGet",
    value: function rateLimitGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RateLimitOverview["default"];
      return this.apiClient.callApi('/rate_limit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RateLimitApi;
}();

exports["default"] = RateLimitApi;