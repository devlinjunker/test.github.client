"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfAnyTypeAnyType = _interopRequireDefault(require("../model/AnyOfAnyTypeAnyType"));

var _BaseGist = _interopRequireDefault(require("../model/BaseGist"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _GistComment = _interopRequireDefault(require("../model/GistComment"));

var _GistCommit = _interopRequireDefault(require("../model/GistCommit"));

var _GistFull = _interopRequireDefault(require("../model/GistFull"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject10"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject11"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject12"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse403"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Gists service.
* @module api/GistsApi
* @version 0.0.5
*/
var GistsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GistsApi. 
  * @alias module:api/GistsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GistsApi(apiClient) {
    _classCallCheck(this, GistsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the gistsCheckIsStarred operation.
   * @callback module:api/GistsApi~gistsCheckIsStarredCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Check if a gist is starred
   * @param {String} gistId gist_id parameter
   * @param {module:api/GistsApi~gistsCheckIsStarredCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(GistsApi, [{
    key: "gistsCheckIsStarred",
    value: function gistsCheckIsStarred(gistId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsCheckIsStarred");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gists/{gist_id}/star', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsCreate operation.
     * @callback module:api/GistsApi~gistsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GistFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a gist
     * Allows you to add a new gist with one or more files.  **Note:** Don't name your files \"gistfile\" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject10} opts.inlineObject10 
     * @param {module:api/GistsApi~gistsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GistFull}
     */

  }, {
    key: "gistsCreate",
    value: function gistsCreate(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject10'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GistFull["default"];
      return this.apiClient.callApi('/gists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsCreateComment operation.
     * @callback module:api/GistsApi~gistsCreateCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GistComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a gist comment
     * @param {String} gistId gist_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject11} opts.inlineObject11 
     * @param {module:api/GistsApi~gistsCreateCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GistComment}
     */

  }, {
    key: "gistsCreateComment",
    value: function gistsCreateComment(gistId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject11']; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsCreateComment");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GistComment["default"];
      return this.apiClient.callApi('/gists/{gist_id}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsDelete operation.
     * @callback module:api/GistsApi~gistsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a gist
     * @param {String} gistId gist_id parameter
     * @param {module:api/GistsApi~gistsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gistsDelete",
    value: function gistsDelete(gistId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsDelete");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gists/{gist_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsDeleteComment operation.
     * @callback module:api/GistsApi~gistsDeleteCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a gist comment
     * @param {String} gistId gist_id parameter
     * @param {Number} commentId comment_id parameter
     * @param {module:api/GistsApi~gistsDeleteCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gistsDeleteComment",
    value: function gistsDeleteComment(gistId, commentId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsDeleteComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling gistsDeleteComment");
      }

      var pathParams = {
        'gist_id': gistId,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gists/{gist_id}/comments/{comment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsFork operation.
     * @callback module:api/GistsApi~gistsForkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseGist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fork a gist
     * **Note**: This was previously `/gists/:gist_id/fork`.
     * @param {String} gistId gist_id parameter
     * @param {module:api/GistsApi~gistsForkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseGist}
     */

  }, {
    key: "gistsFork",
    value: function gistsFork(gistId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsFork");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BaseGist["default"];
      return this.apiClient.callApi('/gists/{gist_id}/forks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsGet operation.
     * @callback module:api/GistsApi~gistsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GistFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a gist
     * @param {String} gistId gist_id parameter
     * @param {module:api/GistsApi~gistsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GistFull}
     */

  }, {
    key: "gistsGet",
    value: function gistsGet(gistId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsGet");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GistFull["default"];
      return this.apiClient.callApi('/gists/{gist_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsGetComment operation.
     * @callback module:api/GistsApi~gistsGetCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GistComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a gist comment
     * @param {String} gistId gist_id parameter
     * @param {Number} commentId comment_id parameter
     * @param {module:api/GistsApi~gistsGetCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GistComment}
     */

  }, {
    key: "gistsGetComment",
    value: function gistsGetComment(gistId, commentId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsGetComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling gistsGetComment");
      }

      var pathParams = {
        'gist_id': gistId,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GistComment["default"];
      return this.apiClient.callApi('/gists/{gist_id}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsGetRevision operation.
     * @callback module:api/GistsApi~gistsGetRevisionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GistFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a gist revision
     * @param {String} gistId gist_id parameter
     * @param {String} sha sha parameter
     * @param {module:api/GistsApi~gistsGetRevisionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GistFull}
     */

  }, {
    key: "gistsGetRevision",
    value: function gistsGetRevision(gistId, sha, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsGetRevision");
      } // verify the required parameter 'sha' is set


      if (sha === undefined || sha === null) {
        throw new Error("Missing the required parameter 'sha' when calling gistsGetRevision");
      }

      var pathParams = {
        'gist_id': gistId,
        'sha': sha
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GistFull["default"];
      return this.apiClient.callApi('/gists/{gist_id}/{sha}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsList operation.
     * @callback module:api/GistsApi~gistsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BaseGist>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List gists for the authenticated user
     * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GistsApi~gistsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BaseGist>}
     */

  }, {
    key: "gistsList",
    value: function gistsList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BaseGist["default"]];
      return this.apiClient.callApi('/gists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsListComments operation.
     * @callback module:api/GistsApi~gistsListCommentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GistComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List gist comments
     * @param {String} gistId gist_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GistsApi~gistsListCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GistComment>}
     */

  }, {
    key: "gistsListComments",
    value: function gistsListComments(gistId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsListComments");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_GistComment["default"]];
      return this.apiClient.callApi('/gists/{gist_id}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsListCommits operation.
     * @callback module:api/GistsApi~gistsListCommitsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GistCommit>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List gist commits
     * @param {String} gistId gist_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GistsApi~gistsListCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GistCommit>}
     */

  }, {
    key: "gistsListCommits",
    value: function gistsListCommits(gistId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsListCommits");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_GistCommit["default"]];
      return this.apiClient.callApi('/gists/{gist_id}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsListForUser operation.
     * @callback module:api/GistsApi~gistsListForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BaseGist>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List gists for a user
     * Lists public gists for the specified user:
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GistsApi~gistsListForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BaseGist>}
     */

  }, {
    key: "gistsListForUser",
    value: function gistsListForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling gistsListForUser");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BaseGist["default"]];
      return this.apiClient.callApi('/users/{username}/gists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsListForks operation.
     * @callback module:api/GistsApi~gistsListForksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GistFull>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List gist forks
     * @param {String} gistId gist_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GistsApi~gistsListForksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GistFull>}
     */

  }, {
    key: "gistsListForks",
    value: function gistsListForks(gistId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsListForks");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_GistFull["default"]];
      return this.apiClient.callApi('/gists/{gist_id}/forks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsListPublic operation.
     * @callback module:api/GistsApi~gistsListPublicCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BaseGist>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public gists
     * List public gists sorted by most recently updated to least recently updated.  Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GistsApi~gistsListPublicCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BaseGist>}
     */

  }, {
    key: "gistsListPublic",
    value: function gistsListPublic(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BaseGist["default"]];
      return this.apiClient.callApi('/gists/public', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsListStarred operation.
     * @callback module:api/GistsApi~gistsListStarredCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BaseGist>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List starred gists
     * List the authenticated user's starred gists:
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GistsApi~gistsListStarredCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BaseGist>}
     */

  }, {
    key: "gistsListStarred",
    value: function gistsListStarred(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BaseGist["default"]];
      return this.apiClient.callApi('/gists/starred', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsStar operation.
     * @callback module:api/GistsApi~gistsStarCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Star a gist
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
     * @param {String} gistId gist_id parameter
     * @param {module:api/GistsApi~gistsStarCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gistsStar",
    value: function gistsStar(gistId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsStar");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gists/{gist_id}/star', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsUnstar operation.
     * @callback module:api/GistsApi~gistsUnstarCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unstar a gist
     * @param {String} gistId gist_id parameter
     * @param {module:api/GistsApi~gistsUnstarCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gistsUnstar",
    value: function gistsUnstar(gistId, callback) {
      var postBody = null; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsUnstar");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gists/{gist_id}/star', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsUpdate operation.
     * @callback module:api/GistsApi~gistsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GistFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a gist
     * Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
     * @param {String} gistId gist_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/GistsApi~gistsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GistFull}
     */

  }, {
    key: "gistsUpdate",
    value: function gistsUpdate(gistId, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsUpdate");
      }

      var pathParams = {
        'gist_id': gistId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GistFull["default"];
      return this.apiClient.callApi('/gists/{gist_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gistsUpdateComment operation.
     * @callback module:api/GistsApi~gistsUpdateCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GistComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a gist comment
     * @param {String} gistId gist_id parameter
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject12} opts.inlineObject12 
     * @param {module:api/GistsApi~gistsUpdateCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GistComment}
     */

  }, {
    key: "gistsUpdateComment",
    value: function gistsUpdateComment(gistId, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject12']; // verify the required parameter 'gistId' is set

      if (gistId === undefined || gistId === null) {
        throw new Error("Missing the required parameter 'gistId' when calling gistsUpdateComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling gistsUpdateComment");
      }

      var pathParams = {
        'gist_id': gistId,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GistComment["default"];
      return this.apiClient.callApi('/gists/{gist_id}/comments/{comment_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GistsApi;
}();

exports["default"] = GistsApi;