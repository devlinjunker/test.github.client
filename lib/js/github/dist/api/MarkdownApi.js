"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject13"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Markdown service.
* @module api/MarkdownApi
* @version 0.0.5
*/
var MarkdownApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MarkdownApi. 
  * @alias module:api/MarkdownApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MarkdownApi(apiClient) {
    _classCallCheck(this, MarkdownApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the markdownRender operation.
   * @callback module:api/MarkdownApi~markdownRenderCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Render a Markdown document
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject13} opts.inlineObject13 
   * @param {module:api/MarkdownApi~markdownRenderCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(MarkdownApi, [{
    key: "markdownRender",
    value: function markdownRender(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject13'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/markdown', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the markdownRenderRaw operation.
     * @callback module:api/MarkdownApi~markdownRenderRawCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Render a Markdown document in raw mode
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/MarkdownApi~markdownRenderRawCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "markdownRenderRaw",
    value: function markdownRenderRaw(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['text/plain', 'text/x-markdown'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/markdown/raw', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MarkdownApi;
}();

exports["default"] = MarkdownApi;