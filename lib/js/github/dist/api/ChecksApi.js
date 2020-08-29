"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CheckAnnotation = _interopRequireDefault(require("../model/CheckAnnotation"));

var _CheckRun = _interopRequireDefault(require("../model/CheckRun"));

var _CheckSuite = _interopRequireDefault(require("../model/CheckSuite"));

var _CheckSuitePreference = _interopRequireDefault(require("../model/CheckSuitePreference"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject52"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject53"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject54"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject55"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20011"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20012"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Checks service.
* @module api/ChecksApi
* @version 0.0.5
*/
var ChecksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ChecksApi. 
  * @alias module:api/ChecksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ChecksApi(apiClient) {
    _classCallCheck(this, ChecksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the checksCreate operation.
   * @callback module:api/ChecksApi~checksCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CheckRun} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a check run
   * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
   * @param {String} owner 
   * @param {String} repo 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject52} opts.inlineObject52 
   * @param {module:api/ChecksApi~checksCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CheckRun}
   */


  _createClass(ChecksApi, [{
    key: "checksCreate",
    value: function checksCreate(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject52']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksCreate");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksCreate");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CheckRun["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-runs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksCreateSuite operation.
     * @callback module:api/ChecksApi~checksCreateSuiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckSuite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a check suite
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  By default, check suites are automatically created when you create a [check run](https://developer.github.com/v3/checks/runs/). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using \"[Update repository preferences for check suites](https://developer.github.com/v3/checks/suites/#update-repository-preferences-for-check-suites)\". Your GitHub App must have the `checks:write` permission to create check suites.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject54} opts.inlineObject54 
     * @param {module:api/ChecksApi~checksCreateSuiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckSuite}
     */

  }, {
    key: "checksCreateSuite",
    value: function checksCreateSuite(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject54']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksCreateSuite");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksCreateSuite");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CheckSuite["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-suites', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksGet operation.
     * @callback module:api/ChecksApi~checksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a check run
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} checkRunId check_run_id parameter
     * @param {module:api/ChecksApi~checksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckRun}
     */

  }, {
    key: "checksGet",
    value: function checksGet(owner, repo, checkRunId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksGet");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksGet");
      } // verify the required parameter 'checkRunId' is set


      if (checkRunId === undefined || checkRunId === null) {
        throw new Error("Missing the required parameter 'checkRunId' when calling checksGet");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'check_run_id': checkRunId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CheckRun["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-runs/{check_run_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksGetSuite operation.
     * @callback module:api/ChecksApi~checksGetSuiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckSuite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a check suite
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} checkSuiteId check_suite_id parameter
     * @param {module:api/ChecksApi~checksGetSuiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckSuite}
     */

  }, {
    key: "checksGetSuite",
    value: function checksGetSuite(owner, repo, checkSuiteId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksGetSuite");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksGetSuite");
      } // verify the required parameter 'checkSuiteId' is set


      if (checkSuiteId === undefined || checkSuiteId === null) {
        throw new Error("Missing the required parameter 'checkSuiteId' when calling checksGetSuite");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'check_suite_id': checkSuiteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CheckSuite["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-suites/{check_suite_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksListAnnotations operation.
     * @callback module:api/ChecksApi~checksListAnnotationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CheckAnnotation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List check run annotations
     * Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} checkRunId check_run_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ChecksApi~checksListAnnotationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CheckAnnotation>}
     */

  }, {
    key: "checksListAnnotations",
    value: function checksListAnnotations(owner, repo, checkRunId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksListAnnotations");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksListAnnotations");
      } // verify the required parameter 'checkRunId' is set


      if (checkRunId === undefined || checkRunId === null) {
        throw new Error("Missing the required parameter 'checkRunId' when calling checksListAnnotations");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'check_run_id': checkRunId
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
      var returnType = [_CheckAnnotation["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksListForRef operation.
     * @callback module:api/ChecksApi~checksListForRefCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List check runs for a Git reference
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {Object} opts Optional parameters
     * @param {String} opts.checkName Returns check runs with the specified `name`.
     * @param {module:model/String} opts.status Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
     * @param {module:model/String} opts.filter Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`. (default to 'latest')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ChecksApi~checksListForRefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */

  }, {
    key: "checksListForRef",
    value: function checksListForRef(owner, repo, ref, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksListForRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksListForRef");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling checksListForRef");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {
        'check_name': opts['checkName'],
        'status': opts['status'],
        'filter': opts['filter'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{ref}/check-runs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksListForSuite operation.
     * @callback module:api/ChecksApi~checksListForSuiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List check runs in a check suite
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} checkSuiteId check_suite_id parameter
     * @param {Object} opts Optional parameters
     * @param {String} opts.checkName Returns check runs with the specified `name`.
     * @param {module:model/String} opts.status Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
     * @param {module:model/String} opts.filter Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`. (default to 'latest')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ChecksApi~checksListForSuiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */

  }, {
    key: "checksListForSuite",
    value: function checksListForSuite(owner, repo, checkSuiteId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksListForSuite");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksListForSuite");
      } // verify the required parameter 'checkSuiteId' is set


      if (checkSuiteId === undefined || checkSuiteId === null) {
        throw new Error("Missing the required parameter 'checkSuiteId' when calling checksListForSuite");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'check_suite_id': checkSuiteId
      };
      var queryParams = {
        'check_name': opts['checkName'],
        'status': opts['status'],
        'filter': opts['filter'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksListSuitesForRef operation.
     * @callback module:api/ChecksApi~checksListSuitesForRefCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List check suites for a Git reference
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.appId Filters check suites by GitHub App `id`.
     * @param {String} opts.checkName Returns check runs with the specified `name`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ChecksApi~checksListSuitesForRefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20012}
     */

  }, {
    key: "checksListSuitesForRef",
    value: function checksListSuitesForRef(owner, repo, ref, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksListSuitesForRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksListSuitesForRef");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling checksListSuitesForRef");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {
        'app_id': opts['appId'],
        'check_name': opts['checkName'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{ref}/check-suites', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksRerequestSuite operation.
     * @callback module:api/ChecksApi~checksRerequestSuiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rerequest a check suite
     * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://developer.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.  To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} checkSuiteId check_suite_id parameter
     * @param {module:api/ChecksApi~checksRerequestSuiteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "checksRerequestSuite",
    value: function checksRerequestSuite(owner, repo, checkSuiteId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksRerequestSuite");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksRerequestSuite");
      } // verify the required parameter 'checkSuiteId' is set


      if (checkSuiteId === undefined || checkSuiteId === null) {
        throw new Error("Missing the required parameter 'checkSuiteId' when calling checksRerequestSuite");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'check_suite_id': checkSuiteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksSetSuitesPreferences operation.
     * @callback module:api/ChecksApi~checksSetSuitesPreferencesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckSuitePreference} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update repository preferences for check suites
     * Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject55} opts.inlineObject55 
     * @param {module:api/ChecksApi~checksSetSuitesPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckSuitePreference}
     */

  }, {
    key: "checksSetSuitesPreferences",
    value: function checksSetSuitesPreferences(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject55']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksSetSuitesPreferences");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksSetSuitesPreferences");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CheckSuitePreference["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-suites/preferences', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checksUpdate operation.
     * @callback module:api/ChecksApi~checksUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a check run
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} checkRunId check_run_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject53} opts.inlineObject53 
     * @param {module:api/ChecksApi~checksUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckRun}
     */

  }, {
    key: "checksUpdate",
    value: function checksUpdate(owner, repo, checkRunId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject53']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling checksUpdate");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling checksUpdate");
      } // verify the required parameter 'checkRunId' is set


      if (checkRunId === undefined || checkRunId === null) {
        throw new Error("Missing the required parameter 'checkRunId' when calling checksUpdate");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'check_run_id': checkRunId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CheckRun["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/check-runs/{check_run_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ChecksApi;
}();

exports["default"] = ChecksApi;