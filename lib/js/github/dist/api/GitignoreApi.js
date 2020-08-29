"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GitignoreTemplate = _interopRequireDefault(require("../model/GitignoreTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Gitignore service.
* @module api/GitignoreApi
* @version 0.0.5
*/
var GitignoreApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GitignoreApi. 
  * @alias module:api/GitignoreApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GitignoreApi(apiClient) {
    _classCallCheck(this, GitignoreApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the gitignoreGetAllTemplates operation.
   * @callback module:api/GitignoreApi~gitignoreGetAllTemplatesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<String>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all gitignore templates
   * List all templates available to pass as an option when [creating a repository](https://developer.github.com/v3/repos/#create-a-repository-for-the-authenticated-user).
   * @param {module:api/GitignoreApi~gitignoreGetAllTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<String>}
   */


  _createClass(GitignoreApi, [{
    key: "gitignoreGetAllTemplates",
    value: function gitignoreGetAllTemplates(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/gitignore/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitignoreGetTemplate operation.
     * @callback module:api/GitignoreApi~gitignoreGetTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitignoreTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a gitignore template
     * The API also allows fetching the source of a single template. Use the raw [media type](https://developer.github.com/v3/media/) to get the raw contents.
     * @param {String} name name parameter
     * @param {module:api/GitignoreApi~gitignoreGetTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitignoreTemplate}
     */

  }, {
    key: "gitignoreGetTemplate",
    value: function gitignoreGetTemplate(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling gitignoreGetTemplate");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GitignoreTemplate["default"];
      return this.apiClient.callApi('/gitignore/templates/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GitignoreApi;
}();

exports["default"] = GitignoreApi;