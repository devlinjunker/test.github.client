"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _CodeOfConduct = _interopRequireDefault(require("../model/CodeOfConduct"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse415"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CodesOfConduct service.
* @module api/CodesOfConductApi
* @version 0.0.5
*/
var CodesOfConductApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CodesOfConductApi. 
  * @alias module:api/CodesOfConductApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CodesOfConductApi(apiClient) {
    _classCallCheck(this, CodesOfConductApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the codesOfConductGetAllCodesOfConduct operation.
   * @callback module:api/CodesOfConductApi~codesOfConductGetAllCodesOfConductCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/CodeOfConduct>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all codes of conduct
   * @param {module:api/CodesOfConductApi~codesOfConductGetAllCodesOfConductCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/CodeOfConduct>}
   */


  _createClass(CodesOfConductApi, [{
    key: "codesOfConductGetAllCodesOfConduct",
    value: function codesOfConductGetAllCodesOfConduct(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CodeOfConduct["default"]];
      return this.apiClient.callApi('/codes_of_conduct', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the codesOfConductGetConductCode operation.
     * @callback module:api/CodesOfConductApi~codesOfConductGetConductCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CodeOfConduct} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a code of conduct
     * @param {String} key key parameter
     * @param {module:api/CodesOfConductApi~codesOfConductGetConductCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CodeOfConduct}
     */

  }, {
    key: "codesOfConductGetConductCode",
    value: function codesOfConductGetConductCode(key, callback) {
      var postBody = null; // verify the required parameter 'key' is set

      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling codesOfConductGetConductCode");
      }

      var pathParams = {
        'key': key
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CodeOfConduct["default"];
      return this.apiClient.callApi('/codes_of_conduct/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the codesOfConductGetForRepo operation.
     * @callback module:api/CodesOfConductApi~codesOfConductGetForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CodeOfConduct} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the code of conduct for a repository
     * This method returns the contents of the repository's code of conduct file, if one is detected.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/CodesOfConductApi~codesOfConductGetForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CodeOfConduct}
     */

  }, {
    key: "codesOfConductGetForRepo",
    value: function codesOfConductGetForRepo(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling codesOfConductGetForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling codesOfConductGetForRepo");
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
      var returnType = _CodeOfConduct["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/community/code_of_conduct', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CodesOfConductApi;
}();

exports["default"] = CodesOfConductApi;