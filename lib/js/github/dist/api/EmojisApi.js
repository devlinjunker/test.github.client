"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Emojis service.
* @module api/EmojisApi
* @version 0.0.5
*/
var EmojisApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmojisApi. 
  * @alias module:api/EmojisApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmojisApi(apiClient) {
    _classCallCheck(this, EmojisApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the emojisGet operation.
   * @callback module:api/EmojisApi~emojisGetCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: String}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get emojis
   * Lists all the emojis available to use on GitHub.
   * @param {module:api/EmojisApi~emojisGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: String}>}
   */


  _createClass(EmojisApi, [{
    key: "emojisGet",
    value: function emojisGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/emojis', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmojisApi;
}();

exports["default"] = EmojisApi;