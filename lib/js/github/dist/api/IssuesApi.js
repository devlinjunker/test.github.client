"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject80"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject81"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject83"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject84"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject85"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject86"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject87"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject88"));

var _InlineObject9 = _interopRequireDefault(require("../model/InlineObject89"));

var _InlineObject10 = _interopRequireDefault(require("../model/InlineObject92"));

var _InlineObject11 = _interopRequireDefault(require("../model/InlineObject93"));

var _InlineObject12 = _interopRequireDefault(require("../model/InlineObject95"));

var _InlineObject13 = _interopRequireDefault(require("../model/InlineObject96"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse503"));

var _Issue = _interopRequireDefault(require("../model/Issue"));

var _IssueComment = _interopRequireDefault(require("../model/IssueComment"));

var _IssueEvent = _interopRequireDefault(require("../model/IssueEvent"));

var _IssueEventForIssue = _interopRequireDefault(require("../model/IssueEventForIssue"));

var _IssueSimple = _interopRequireDefault(require("../model/IssueSimple"));

var _Label = _interopRequireDefault(require("../model/Label"));

var _Milestone = _interopRequireDefault(require("../model/Milestone"));

var _SimpleUser = _interopRequireDefault(require("../model/SimpleUser"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Issues service.
* @module api/IssuesApi
* @version 0.0.5
*/
var IssuesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssuesApi. 
  * @alias module:api/IssuesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssuesApi(apiClient) {
    _classCallCheck(this, IssuesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuesAddAssignees operation.
   * @callback module:api/IssuesApi~issuesAddAssigneesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IssueSimple} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add assignees to an issue
   * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
   * @param {String} owner 
   * @param {String} repo 
   * @param {Number} issueNumber issue_number parameter
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject84} opts.inlineObject84 
   * @param {module:api/IssuesApi~issuesAddAssigneesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IssueSimple}
   */


  _createClass(IssuesApi, [{
    key: "issuesAddAssignees",
    value: function issuesAddAssignees(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject84']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesAddAssignees");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesAddAssignees");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesAddAssignees");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueSimple["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/assignees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesAddLabels operation.
     * @callback module:api/IssuesApi~issuesAddLabelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Label>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add labels to an issue
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject88} opts.inlineObject88 
     * @param {module:api/IssuesApi~issuesAddLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Label>}
     */

  }, {
    key: "issuesAddLabels",
    value: function issuesAddLabels(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject88']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesAddLabels");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesAddLabels");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesAddLabels");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Label["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/labels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesCheckUserCanBeAssigned operation.
     * @callback module:api/IssuesApi~issuesCheckUserCanBeAssignedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a user can be assigned
     * Checks if a user has permission to be assigned to an issue in this repository.  If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.  Otherwise a `404` status code is returned.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} assignee assignee parameter
     * @param {module:api/IssuesApi~issuesCheckUserCanBeAssignedCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuesCheckUserCanBeAssigned",
    value: function issuesCheckUserCanBeAssigned(owner, repo, assignee, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesCheckUserCanBeAssigned");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesCheckUserCanBeAssigned");
      } // verify the required parameter 'assignee' is set


      if (assignee === undefined || assignee === null) {
        throw new Error("Missing the required parameter 'assignee' when calling issuesCheckUserCanBeAssigned");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'assignee': assignee
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/assignees/{assignee}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesCreate operation.
     * @callback module:api/IssuesApi~issuesCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an issue
     * Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject80} opts.inlineObject80 
     * @param {module:api/IssuesApi~issuesCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "issuesCreate",
    value: function issuesCreate(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject80']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesCreate");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesCreate");
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
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesCreateComment operation.
     * @callback module:api/IssuesApi~issuesCreateCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an issue comment
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject86} opts.inlineObject86 
     * @param {module:api/IssuesApi~issuesCreateCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueComment}
     */

  }, {
    key: "issuesCreateComment",
    value: function issuesCreateComment(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject86']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesCreateComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesCreateComment");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesCreateComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesCreateLabel operation.
     * @callback module:api/IssuesApi~issuesCreateLabelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a label
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject92} opts.inlineObject92 
     * @param {module:api/IssuesApi~issuesCreateLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */

  }, {
    key: "issuesCreateLabel",
    value: function issuesCreateLabel(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject92']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesCreateLabel");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesCreateLabel");
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
      var returnType = _Label["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/labels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesCreateMilestone operation.
     * @callback module:api/IssuesApi~issuesCreateMilestoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a milestone
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject95} opts.inlineObject95 
     * @param {module:api/IssuesApi~issuesCreateMilestoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */

  }, {
    key: "issuesCreateMilestone",
    value: function issuesCreateMilestone(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject95']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesCreateMilestone");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesCreateMilestone");
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
      var returnType = _Milestone["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/milestones', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesDeleteComment operation.
     * @callback module:api/IssuesApi~issuesDeleteCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an issue comment
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {module:api/IssuesApi~issuesDeleteCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuesDeleteComment",
    value: function issuesDeleteComment(owner, repo, commentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesDeleteComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesDeleteComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling issuesDeleteComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{comment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesDeleteLabel operation.
     * @callback module:api/IssuesApi~issuesDeleteLabelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a label
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} name name parameter
     * @param {module:api/IssuesApi~issuesDeleteLabelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuesDeleteLabel",
    value: function issuesDeleteLabel(owner, repo, name, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesDeleteLabel");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesDeleteLabel");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling issuesDeleteLabel");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/labels/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesDeleteMilestone operation.
     * @callback module:api/IssuesApi~issuesDeleteMilestoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a milestone
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} milestoneNumber milestone_number parameter
     * @param {module:api/IssuesApi~issuesDeleteMilestoneCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuesDeleteMilestone",
    value: function issuesDeleteMilestone(owner, repo, milestoneNumber, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesDeleteMilestone");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesDeleteMilestone");
      } // verify the required parameter 'milestoneNumber' is set


      if (milestoneNumber === undefined || milestoneNumber === null) {
        throw new Error("Missing the required parameter 'milestoneNumber' when calling issuesDeleteMilestone");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'milestone_number': milestoneNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{milestone_number}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesGet operation.
     * @callback module:api/IssuesApi~issuesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an issue
     * The API returns a [`301 Moved Permanently` status](https://developer.github.com/v3/#http-redirects) if the issue was [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe to the [`issues`](https://developer.github.com/webhooks/event-payloads/#issues) webhook.  **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull request id, use the \"[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\" endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {module:api/IssuesApi~issuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "issuesGet",
    value: function issuesGet(owner, repo, issueNumber, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesGet");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesGet");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesGet");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesGetComment operation.
     * @callback module:api/IssuesApi~issuesGetCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an issue comment
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {module:api/IssuesApi~issuesGetCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueComment}
     */

  }, {
    key: "issuesGetComment",
    value: function issuesGetComment(owner, repo, commentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesGetComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesGetComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling issuesGetComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesGetEvent operation.
     * @callback module:api/IssuesApi~issuesGetEventCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an issue event
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} eventId event_id parameter
     * @param {module:api/IssuesApi~issuesGetEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueEvent}
     */

  }, {
    key: "issuesGetEvent",
    value: function issuesGetEvent(owner, repo, eventId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesGetEvent");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesGetEvent");
      } // verify the required parameter 'eventId' is set


      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling issuesGetEvent");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'event_id': eventId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueEvent["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/events/{event_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesGetLabel operation.
     * @callback module:api/IssuesApi~issuesGetLabelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a label
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} name name parameter
     * @param {module:api/IssuesApi~issuesGetLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */

  }, {
    key: "issuesGetLabel",
    value: function issuesGetLabel(owner, repo, name, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesGetLabel");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesGetLabel");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling issuesGetLabel");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Label["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/labels/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesGetMilestone operation.
     * @callback module:api/IssuesApi~issuesGetMilestoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a milestone
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} milestoneNumber milestone_number parameter
     * @param {module:api/IssuesApi~issuesGetMilestoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */

  }, {
    key: "issuesGetMilestone",
    value: function issuesGetMilestone(owner, repo, milestoneNumber, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesGetMilestone");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesGetMilestone");
      } // verify the required parameter 'milestoneNumber' is set


      if (milestoneNumber === undefined || milestoneNumber === null) {
        throw new Error("Missing the required parameter 'milestoneNumber' when calling issuesGetMilestone");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'milestone_number': milestoneNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Milestone["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{milestone_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesList operation.
     * @callback module:api/IssuesApi~issuesListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Issue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List issues assigned to the authenticated user
     * List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not necessarily assigned to you. See the [Parameters table](https://developer.github.com/v3/issues/#parameters) for more information.   **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull request id, use the \"[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\" endpoint.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter Indicates which sorts of issues to return. Can be one of:   \\* `assigned`: Issues assigned to you   \\* `created`: Issues created by you   \\* `mentioned`: Issues mentioning you   \\* `subscribed`: Issues you're subscribed to updates for   \\* `all`: All issues the authenticated user can see, regardless of participation or creation (default to 'assigned')
     * @param {module:model/String} opts.state Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`. (default to 'open')
     * @param {String} opts.labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param {module:model/String} opts.sort What to sort results by. Can be either `created`, `updated`, `comments`. (default to 'created')
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Boolean} opts.collab 
     * @param {Boolean} opts.orgs 
     * @param {Boolean} opts.owned 
     * @param {Boolean} opts.pulls 
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Issue>}
     */

  }, {
    key: "issuesList",
    value: function issuesList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'state': opts['state'],
        'labels': opts['labels'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'since': opts['since'],
        'collab': opts['collab'],
        'orgs': opts['orgs'],
        'owned': opts['owned'],
        'pulls': opts['pulls'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Issue["default"]];
      return this.apiClient.callApi('/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListAssignees operation.
     * @callback module:api/IssuesApi~issuesListAssigneesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List assignees
     * Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListAssigneesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "issuesListAssignees",
    value: function issuesListAssignees(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListAssignees");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListAssignees");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
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
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/assignees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListComments operation.
     * @callback module:api/IssuesApi~issuesListCommentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List issue comments
     * Issue Comments are ordered by ascending ID.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueComment>}
     */

  }, {
    key: "issuesListComments",
    value: function issuesListComments(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListComments");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListComments");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesListComments");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
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
      var returnType = [_IssueComment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListCommentsForRepo operation.
     * @callback module:api/IssuesApi~issuesListCommentsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List issue comments for a repository
     * By default, Issue Comments are ordered by ascending ID.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort One of `created` (when the repository was starred) or `updated` (when it was last pushed to). (default to 'created')
     * @param {module:model/String} opts.direction Either `asc` or `desc`. Ignored without the `sort` parameter.
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListCommentsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueComment>}
     */

  }, {
    key: "issuesListCommentsForRepo",
    value: function issuesListCommentsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListCommentsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListCommentsForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'sort': opts['sort'],
        'direction': opts['direction'],
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_IssueComment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListEvents operation.
     * @callback module:api/IssuesApi~issuesListEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueEventForIssue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List issue events
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueEventForIssue>}
     */

  }, {
    key: "issuesListEvents",
    value: function issuesListEvents(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListEvents");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListEvents");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesListEvents");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
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
      var returnType = [_IssueEventForIssue["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListEventsForRepo operation.
     * @callback module:api/IssuesApi~issuesListEventsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List issue events for a repository
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListEventsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueEvent>}
     */

  }, {
    key: "issuesListEventsForRepo",
    value: function issuesListEventsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListEventsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListEventsForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
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
      var returnType = [_IssueEvent["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListEventsForTimeline operation.
     * @callback module:api/IssuesApi~issuesListEventsForTimelineCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueEventForIssue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List timeline events for an issue
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListEventsForTimelineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueEventForIssue>}
     */

  }, {
    key: "issuesListEventsForTimeline",
    value: function issuesListEventsForTimeline(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListEventsForTimeline");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListEventsForTimeline");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesListEventsForTimeline");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
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
      var returnType = [_IssueEventForIssue["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/timeline', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListForAuthenticatedUser operation.
     * @callback module:api/IssuesApi~issuesListForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Issue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List user account issues assigned to the authenticated user
     * List issues across owned and member repositories assigned to the authenticated user.  **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull request id, use the \"[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\" endpoint.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter Indicates which sorts of issues to return. Can be one of:   \\* `assigned`: Issues assigned to you   \\* `created`: Issues created by you   \\* `mentioned`: Issues mentioning you   \\* `subscribed`: Issues you're subscribed to updates for   \\* `all`: All issues the authenticated user can see, regardless of participation or creation (default to 'assigned')
     * @param {module:model/String} opts.state Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`. (default to 'open')
     * @param {String} opts.labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param {module:model/String} opts.sort What to sort results by. Can be either `created`, `updated`, `comments`. (default to 'created')
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Issue>}
     */

  }, {
    key: "issuesListForAuthenticatedUser",
    value: function issuesListForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'state': opts['state'],
        'labels': opts['labels'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Issue["default"]];
      return this.apiClient.callApi('/user/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListForOrg operation.
     * @callback module:api/IssuesApi~issuesListForOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Issue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization issues assigned to the authenticated user
     * List issues in an organization assigned to the authenticated user.  **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull request id, use the \"[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\" endpoint.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter Indicates which sorts of issues to return. Can be one of:   \\* `assigned`: Issues assigned to you   \\* `created`: Issues created by you   \\* `mentioned`: Issues mentioning you   \\* `subscribed`: Issues you're subscribed to updates for   \\* `all`: All issues the authenticated user can see, regardless of participation or creation (default to 'assigned')
     * @param {module:model/String} opts.state Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`. (default to 'open')
     * @param {String} opts.labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param {module:model/String} opts.sort What to sort results by. Can be either `created`, `updated`, `comments`. (default to 'created')
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Issue>}
     */

  }, {
    key: "issuesListForOrg",
    value: function issuesListForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling issuesListForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {
        'filter': opts['filter'],
        'state': opts['state'],
        'labels': opts['labels'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Issue["default"]];
      return this.apiClient.callApi('/orgs/{org}/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListForRepo operation.
     * @callback module:api/IssuesApi~issuesListForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository issues
     * List issues in a repository.  **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull request id, use the \"[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\" endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.milestone If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
     * @param {module:model/String} opts.state Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`. (default to 'open')
     * @param {String} opts.assignee Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
     * @param {String} opts.creator The user that created the issue.
     * @param {String} opts.mentioned A user that's mentioned in the issue.
     * @param {String} opts.labels A list of comma separated label names. Example: `bug,ui,@high`
     * @param {module:model/String} opts.sort What to sort results by. Can be either `created`, `updated`, `comments`. (default to 'created')
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueSimple>}
     */

  }, {
    key: "issuesListForRepo",
    value: function issuesListForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'milestone': opts['milestone'],
        'state': opts['state'],
        'assignee': opts['assignee'],
        'creator': opts['creator'],
        'mentioned': opts['mentioned'],
        'labels': opts['labels'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'since': opts['since'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_IssueSimple["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListLabelsForMilestone operation.
     * @callback module:api/IssuesApi~issuesListLabelsForMilestoneCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Label>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List labels for issues in a milestone
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} milestoneNumber milestone_number parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListLabelsForMilestoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Label>}
     */

  }, {
    key: "issuesListLabelsForMilestone",
    value: function issuesListLabelsForMilestone(owner, repo, milestoneNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListLabelsForMilestone");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListLabelsForMilestone");
      } // verify the required parameter 'milestoneNumber' is set


      if (milestoneNumber === undefined || milestoneNumber === null) {
        throw new Error("Missing the required parameter 'milestoneNumber' when calling issuesListLabelsForMilestone");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'milestone_number': milestoneNumber
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
      var returnType = [_Label["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{milestone_number}/labels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListLabelsForRepo operation.
     * @callback module:api/IssuesApi~issuesListLabelsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Label>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List labels for a repository
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListLabelsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Label>}
     */

  }, {
    key: "issuesListLabelsForRepo",
    value: function issuesListLabelsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListLabelsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListLabelsForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
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
      var returnType = [_Label["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/labels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListLabelsOnIssue operation.
     * @callback module:api/IssuesApi~issuesListLabelsOnIssueCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Label>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List labels for an issue
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListLabelsOnIssueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Label>}
     */

  }, {
    key: "issuesListLabelsOnIssue",
    value: function issuesListLabelsOnIssue(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListLabelsOnIssue");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListLabelsOnIssue");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesListLabelsOnIssue");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
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
      var returnType = [_Label["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/labels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesListMilestones operation.
     * @callback module:api/IssuesApi~issuesListMilestonesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Milestone>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List milestones
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state The state of the milestone. Either `open`, `closed`, or `all`. (default to 'open')
     * @param {module:model/String} opts.sort What to sort results by. Either `due_on` or `completeness`. (default to 'due_on')
     * @param {module:model/String} opts.direction The direction of the sort. Either `asc` or `desc`. (default to 'asc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/IssuesApi~issuesListMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Milestone>}
     */

  }, {
    key: "issuesListMilestones",
    value: function issuesListMilestones(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesListMilestones");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesListMilestones");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'state': opts['state'],
        'sort': opts['sort'],
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Milestone["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/milestones', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesLock operation.
     * @callback module:api/IssuesApi~issuesLockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lock an issue
     * Users with push access can lock an issue or pull request's conversation.  Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject89} opts.inlineObject89 
     * @param {module:api/IssuesApi~issuesLockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuesLock",
    value: function issuesLock(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject89']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesLock");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesLock");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesLock");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/lock', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesRemoveAllLabels operation.
     * @callback module:api/IssuesApi~issuesRemoveAllLabelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all labels from an issue
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {module:api/IssuesApi~issuesRemoveAllLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuesRemoveAllLabels",
    value: function issuesRemoveAllLabels(owner, repo, issueNumber, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesRemoveAllLabels");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesRemoveAllLabels");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesRemoveAllLabels");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/labels', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesRemoveAssignees operation.
     * @callback module:api/IssuesApi~issuesRemoveAssigneesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueSimple} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove assignees from an issue
     * Removes one or more assignees from an issue.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject85} opts.inlineObject85 
     * @param {module:api/IssuesApi~issuesRemoveAssigneesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueSimple}
     */

  }, {
    key: "issuesRemoveAssignees",
    value: function issuesRemoveAssignees(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject85']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesRemoveAssignees");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesRemoveAssignees");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesRemoveAssignees");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueSimple["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/assignees', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesRemoveLabel operation.
     * @callback module:api/IssuesApi~issuesRemoveLabelCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Label>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a label from an issue
     * Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {String} name name parameter
     * @param {module:api/IssuesApi~issuesRemoveLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Label>}
     */

  }, {
    key: "issuesRemoveLabel",
    value: function issuesRemoveLabel(owner, repo, issueNumber, name, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesRemoveLabel");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesRemoveLabel");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesRemoveLabel");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling issuesRemoveLabel");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber,
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Label["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesSetLabels operation.
     * @callback module:api/IssuesApi~issuesSetLabelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Label>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set labels for an issue
     * Removes any previous labels and sets the new labels for an issue.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject87} opts.inlineObject87 
     * @param {module:api/IssuesApi~issuesSetLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Label>}
     */

  }, {
    key: "issuesSetLabels",
    value: function issuesSetLabels(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject87']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesSetLabels");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesSetLabels");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesSetLabels");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Label["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/labels', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesUnlock operation.
     * @callback module:api/IssuesApi~issuesUnlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock an issue
     * Users with push access can unlock an issue's conversation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {module:api/IssuesApi~issuesUnlockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuesUnlock",
    value: function issuesUnlock(owner, repo, issueNumber, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesUnlock");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesUnlock");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesUnlock");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/lock', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesUpdate operation.
     * @callback module:api/IssuesApi~issuesUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an issue
     * Issue owners and users with push access can edit an issue.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject83} opts.inlineObject83 
     * @param {module:api/IssuesApi~issuesUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "issuesUpdate",
    value: function issuesUpdate(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject83']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesUpdate");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesUpdate");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling issuesUpdate");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesUpdateComment operation.
     * @callback module:api/IssuesApi~issuesUpdateCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an issue comment
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject81} opts.inlineObject81 
     * @param {module:api/IssuesApi~issuesUpdateCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueComment}
     */

  }, {
    key: "issuesUpdateComment",
    value: function issuesUpdateComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject81']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesUpdateComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesUpdateComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling issuesUpdateComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{comment_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesUpdateLabel operation.
     * @callback module:api/IssuesApi~issuesUpdateLabelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a label
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} name name parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject93} opts.inlineObject93 
     * @param {module:api/IssuesApi~issuesUpdateLabelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */

  }, {
    key: "issuesUpdateLabel",
    value: function issuesUpdateLabel(owner, repo, name, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject93']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesUpdateLabel");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesUpdateLabel");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling issuesUpdateLabel");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Label["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/labels/{name}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesUpdateMilestone operation.
     * @callback module:api/IssuesApi~issuesUpdateMilestoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a milestone
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} milestoneNumber milestone_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject96} opts.inlineObject96 
     * @param {module:api/IssuesApi~issuesUpdateMilestoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */

  }, {
    key: "issuesUpdateMilestone",
    value: function issuesUpdateMilestone(owner, repo, milestoneNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject96']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling issuesUpdateMilestone");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling issuesUpdateMilestone");
      } // verify the required parameter 'milestoneNumber' is set


      if (milestoneNumber === undefined || milestoneNumber === null) {
        throw new Error("Missing the required parameter 'milestoneNumber' when calling issuesUpdateMilestone");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'milestone_number': milestoneNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Milestone["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{milestone_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssuesApi;
}();

exports["default"] = IssuesApi;