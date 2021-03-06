"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _DiffEntry = _interopRequireDefault(require("../model/DiffEntry"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject101"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject102"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject104"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject105"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject106"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject107"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject108"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject109"));

var _InlineObject9 = _interopRequireDefault(require("../model/InlineObject110"));

var _InlineObject10 = _interopRequireDefault(require("../model/InlineObject111"));

var _InlineObject11 = _interopRequireDefault(require("../model/InlineObject112"));

var _InlineObject12 = _interopRequireDefault(require("../model/InlineObject113"));

var _InlineObject13 = _interopRequireDefault(require("../model/InlineObject114"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2021"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse4031"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse415"));

var _PullRequest = _interopRequireDefault(require("../model/PullRequest"));

var _PullRequestMergeResult = _interopRequireDefault(require("../model/PullRequestMergeResult"));

var _PullRequestReview = _interopRequireDefault(require("../model/PullRequestReview"));

var _PullRequestReviewComment = _interopRequireDefault(require("../model/PullRequestReviewComment"));

var _PullRequestReviewRequest = _interopRequireDefault(require("../model/PullRequestReviewRequest"));

var _PullRequestSimple = _interopRequireDefault(require("../model/PullRequestSimple"));

var _ReviewComment = _interopRequireDefault(require("../model/ReviewComment"));

var _SimpleCommit = _interopRequireDefault(require("../model/SimpleCommit"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

var _ValidationErrorSimple = _interopRequireDefault(require("../model/ValidationErrorSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Pulls service.
* @module api/PullsApi
* @version 0.0.5
*/
var PullsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PullsApi. 
  * @alias module:api/PullsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PullsApi(apiClient) {
    _classCallCheck(this, PullsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the pullsCheckIfMerged operation.
   * @callback module:api/PullsApi~pullsCheckIfMergedCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Check if a pull request has been merged
   * @param {String} owner 
   * @param {String} repo 
   * @param {Number} pullNumber 
   * @param {module:api/PullsApi~pullsCheckIfMergedCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PullsApi, [{
    key: "pullsCheckIfMerged",
    value: function pullsCheckIfMerged(owner, repo, pullNumber, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsCheckIfMerged");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsCheckIfMerged");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsCheckIfMerged");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/merge', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsCreate operation.
     * @callback module:api/PullsApi~pullsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a pull request
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.  You can create a new pull request.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject101} opts.inlineObject101 
     * @param {module:api/PullsApi~pullsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequest}
     */

  }, {
    key: "pullsCreate",
    value: function pullsCreate(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject101']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsCreate");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsCreate");
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
      var returnType = _PullRequest["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsCreateReplyForReviewComment operation.
     * @callback module:api/PullsApi~pullsCreateReplyForReviewCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReviewComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a reply for a review comment
     * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject106} opts.inlineObject106 
     * @param {module:api/PullsApi~pullsCreateReplyForReviewCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReviewComment}
     */

  }, {
    key: "pullsCreateReplyForReviewComment",
    value: function pullsCreateReplyForReviewComment(owner, repo, pullNumber, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject106']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsCreateReplyForReviewComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsCreateReplyForReviewComment");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsCreateReplyForReviewComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling pullsCreateReplyForReviewComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber,
        'comment_id': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestReviewComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsCreateReview operation.
     * @callback module:api/PullsApi~pullsCreateReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a review for a pull request
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.  Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.  **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) endpoint.  The `position` value equals the number of lines down from the first \"@@\" hunk header in the file you want to add a comment. The line just below the \"@@\" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject110} opts.inlineObject110 
     * @param {module:api/PullsApi~pullsCreateReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReview}
     */

  }, {
    key: "pullsCreateReview",
    value: function pullsCreateReview(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject110']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsCreateReview");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsCreateReview");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsCreateReview");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsCreateReviewComment operation.
     * @callback module:api/PullsApi~pullsCreateReviewCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReviewComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a review comment for a pull request
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see \"[Create an issue comment](https://developer.github.com/v3/issues/comments/#create-an-issue-comment).\" We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.  You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see [Multi-line comment summary](https://developer.github.com/v3/pulls/comments/#multi-line-comment-summary-3).  **Note:** The position value equals the number of lines down from the first \"@@\" hunk header in the file you want to add a comment. The line just below the \"@@\" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.  If you use the `comfort-fade` preview header, your response will show:  *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`. *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.  If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the `position` attribute. *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject105} opts.inlineObject105 
     * @param {module:api/PullsApi~pullsCreateReviewCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReviewComment}
     */

  }, {
    key: "pullsCreateReviewComment",
    value: function pullsCreateReviewComment(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject105']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsCreateReviewComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsCreateReviewComment");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsCreateReviewComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestReviewComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsDeletePendingReview operation.
     * @callback module:api/PullsApi~pullsDeletePendingReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a pending review for a pull request
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Number} reviewId review_id parameter
     * @param {module:api/PullsApi~pullsDeletePendingReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReview}
     */

  }, {
    key: "pullsDeletePendingReview",
    value: function pullsDeletePendingReview(owner, repo, pullNumber, reviewId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsDeletePendingReview");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsDeletePendingReview");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsDeletePendingReview");
      } // verify the required parameter 'reviewId' is set


      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling pullsDeletePendingReview");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber,
        'review_id': reviewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsDeleteReviewComment operation.
     * @callback module:api/PullsApi~pullsDeleteReviewCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a review comment for a pull request
     * Deletes a review comment.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {module:api/PullsApi~pullsDeleteReviewCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "pullsDeleteReviewComment",
    value: function pullsDeleteReviewComment(owner, repo, commentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsDeleteReviewComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsDeleteReviewComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling pullsDeleteReviewComment");
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
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{comment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsDismissReview operation.
     * @callback module:api/PullsApi~pullsDismissReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dismiss a review for a pull request
     * **Note:** To dismiss a pull request review on a [protected branch](https://developer.github.com/v3/repos/branches/), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Number} reviewId review_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject112} opts.inlineObject112 
     * @param {module:api/PullsApi~pullsDismissReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReview}
     */

  }, {
    key: "pullsDismissReview",
    value: function pullsDismissReview(owner, repo, pullNumber, reviewId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject112']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsDismissReview");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsDismissReview");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsDismissReview");
      } // verify the required parameter 'reviewId' is set


      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling pullsDismissReview");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber,
        'review_id': reviewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsGet operation.
     * @callback module:api/PullsApi~pullsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a pull request
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Lists details of a pull request by providing its number.  When you get, [create](https://developer.github.com/v3/pulls/#create-a-pull-request), or [edit](https://developer.github.com/v3/pulls/#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see \"[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\".  The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.  The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:  *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit. *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch. *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.  Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {module:api/PullsApi~pullsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequest}
     */

  }, {
    key: "pullsGet",
    value: function pullsGet(owner, repo, pullNumber, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsGet");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsGet");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsGet");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PullRequest["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsGetReview operation.
     * @callback module:api/PullsApi~pullsGetReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a review for a pull request
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Number} reviewId review_id parameter
     * @param {module:api/PullsApi~pullsGetReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReview}
     */

  }, {
    key: "pullsGetReview",
    value: function pullsGetReview(owner, repo, pullNumber, reviewId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsGetReview");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsGetReview");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsGetReview");
      } // verify the required parameter 'reviewId' is set


      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling pullsGetReview");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber,
        'review_id': reviewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsGetReviewComment operation.
     * @callback module:api/PullsApi~pullsGetReviewCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReviewComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a review comment for a pull request
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Provides details for a review comment.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.  If you use the `comfort-fade` preview header, your response will show:  *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`. *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.  If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the `position` attribute. *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {module:api/PullsApi~pullsGetReviewCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReviewComment}
     */

  }, {
    key: "pullsGetReviewComment",
    value: function pullsGetReviewComment(owner, repo, commentId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsGetReviewComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsGetReviewComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling pullsGetReviewComment");
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
      var returnType = _PullRequestReviewComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsList operation.
     * @callback module:api/PullsApi~pullsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PullRequestSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List pull requests
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Either `open`, `closed`, or `all` to filter by state. (default to 'open')
     * @param {String} opts.head Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
     * @param {String} opts.base Filter pulls by base branch name. Example: `gh-pages`.
     * @param {module:model/String} opts.sort What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month). (default to 'created')
     * @param {module:model/String} opts.direction The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PullRequestSimple>}
     */

  }, {
    key: "pullsList",
    value: function pullsList(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsList");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsList");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'state': opts['state'],
        'head': opts['head'],
        'base': opts['base'],
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
      var returnType = [_PullRequestSimple["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsListCommentsForReview operation.
     * @callback module:api/PullsApi~pullsListCommentsForReviewCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReviewComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List comments for a pull request review
     * List comments for a specific pull request review.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Number} reviewId review_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListCommentsForReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ReviewComment>}
     */

  }, {
    key: "pullsListCommentsForReview",
    value: function pullsListCommentsForReview(owner, repo, pullNumber, reviewId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsListCommentsForReview");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsListCommentsForReview");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsListCommentsForReview");
      } // verify the required parameter 'reviewId' is set


      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling pullsListCommentsForReview");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber,
        'review_id': reviewId
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
      var returnType = [_ReviewComment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsListCommits operation.
     * @callback module:api/PullsApi~pullsListCommitsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleCommit>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List commits on a pull request
     * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://developer.github.com/v3/repos/commits/#list-commits) endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleCommit>}
     */

  }, {
    key: "pullsListCommits",
    value: function pullsListCommits(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsListCommits");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsListCommits");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsListCommits");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
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
      var returnType = [_SimpleCommit["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsListFiles operation.
     * @callback module:api/PullsApi~pullsListFilesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DiffEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List pull requests files
     * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DiffEntry>}
     */

  }, {
    key: "pullsListFiles",
    value: function pullsListFiles(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsListFiles");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsListFiles");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsListFiles");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
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
      var returnType = [_DiffEntry["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsListRequestedReviewers operation.
     * @callback module:api/PullsApi~pullsListRequestedReviewersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReviewRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List requested reviewers for a pull request
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListRequestedReviewersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReviewRequest}
     */

  }, {
    key: "pullsListRequestedReviewers",
    value: function pullsListRequestedReviewers(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsListRequestedReviewers");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsListRequestedReviewers");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsListRequestedReviewers");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
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
      var returnType = _PullRequestReviewRequest["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsListReviewComments operation.
     * @callback module:api/PullsApi~pullsListReviewCommentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PullRequestReviewComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List review comments on a pull request
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Lists all review comments for a pull request. By default, review comments are in ascending order by ID.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.  If you use the `comfort-fade` preview header, your response will show:  *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`. *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.  If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the `position` attribute. *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort One of `created` (when the repository was starred) or `updated` (when it was last pushed to). (default to 'created')
     * @param {module:model/String} opts.direction Can be either `asc` or `desc`. Ignored without `sort` parameter.
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListReviewCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PullRequestReviewComment>}
     */

  }, {
    key: "pullsListReviewComments",
    value: function pullsListReviewComments(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsListReviewComments");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsListReviewComments");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsListReviewComments");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
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
      var returnType = [_PullRequestReviewComment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsListReviewCommentsForRepo operation.
     * @callback module:api/PullsApi~pullsListReviewCommentsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PullRequestReviewComment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List review comments in a repository
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.  If you use the `comfort-fade` preview header, your response will show:  *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`. *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.  If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the `position` attribute. *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort One of `created` (when the repository was starred) or `updated` (when it was last pushed to). (default to 'created')
     * @param {module:model/String} opts.direction Can be either `asc` or `desc`. Ignored without `sort` parameter.
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListReviewCommentsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PullRequestReviewComment>}
     */

  }, {
    key: "pullsListReviewCommentsForRepo",
    value: function pullsListReviewCommentsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsListReviewCommentsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsListReviewCommentsForRepo");
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
      var returnType = [_PullRequestReviewComment["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsListReviews operation.
     * @callback module:api/PullsApi~pullsListReviewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PullRequestReview>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reviews for a pull request
     * The list of reviews returns in chronological order.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/PullsApi~pullsListReviewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PullRequestReview>}
     */

  }, {
    key: "pullsListReviews",
    value: function pullsListReviews(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsListReviews");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsListReviews");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsListReviews");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
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
      var returnType = [_PullRequestReview["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsMerge operation.
     * @callback module:api/PullsApi~pullsMergeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestMergeResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge a pull request
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject107} opts.inlineObject107 
     * @param {module:api/PullsApi~pullsMergeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestMergeResult}
     */

  }, {
    key: "pullsMerge",
    value: function pullsMerge(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject107']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsMerge");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsMerge");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsMerge");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestMergeResult["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/merge', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsRemoveRequestedReviewers operation.
     * @callback module:api/PullsApi~pullsRemoveRequestedReviewersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove requested reviewers from a pull request
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject109} opts.inlineObject109 
     * @param {module:api/PullsApi~pullsRemoveRequestedReviewersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "pullsRemoveRequestedReviewers",
    value: function pullsRemoveRequestedReviewers(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject109']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsRemoveRequestedReviewers");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsRemoveRequestedReviewers");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsRemoveRequestedReviewers");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsRequestReviewers operation.
     * @callback module:api/PullsApi~pullsRequestReviewersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestSimple} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request reviewers for a pull request
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\" for details.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject108} opts.inlineObject108 
     * @param {module:api/PullsApi~pullsRequestReviewersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestSimple}
     */

  }, {
    key: "pullsRequestReviewers",
    value: function pullsRequestReviewers(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject108']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsRequestReviewers");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsRequestReviewers");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsRequestReviewers");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestSimple["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsSubmitReview operation.
     * @callback module:api/PullsApi~pullsSubmitReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a review for a pull request
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Number} reviewId review_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject113} opts.inlineObject113 
     * @param {module:api/PullsApi~pullsSubmitReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReview}
     */

  }, {
    key: "pullsSubmitReview",
    value: function pullsSubmitReview(owner, repo, pullNumber, reviewId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject113']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsSubmitReview");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsSubmitReview");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsSubmitReview");
      } // verify the required parameter 'reviewId' is set


      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling pullsSubmitReview");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber,
        'review_id': reviewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsUpdate operation.
     * @callback module:api/PullsApi~pullsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a pull request
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject104} opts.inlineObject104 
     * @param {module:api/PullsApi~pullsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequest}
     */

  }, {
    key: "pullsUpdate",
    value: function pullsUpdate(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject104']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsUpdate");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsUpdate");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsUpdate");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequest["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsUpdateBranch operation.
     * @callback module:api/PullsApi~pullsUpdateBranchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2021} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a pull request branch
     * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject114} opts.inlineObject114 
     * @param {module:api/PullsApi~pullsUpdateBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2021}
     */

  }, {
    key: "pullsUpdateBranch",
    value: function pullsUpdateBranch(owner, repo, pullNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject114']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsUpdateBranch");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsUpdateBranch");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsUpdateBranch");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/update-branch', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsUpdateReview operation.
     * @callback module:api/PullsApi~pullsUpdateReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a review for a pull request
     * Update the review summary comment with new text.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} pullNumber 
     * @param {Number} reviewId review_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject111} opts.inlineObject111 
     * @param {module:api/PullsApi~pullsUpdateReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReview}
     */

  }, {
    key: "pullsUpdateReview",
    value: function pullsUpdateReview(owner, repo, pullNumber, reviewId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject111']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsUpdateReview");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsUpdateReview");
      } // verify the required parameter 'pullNumber' is set


      if (pullNumber === undefined || pullNumber === null) {
        throw new Error("Missing the required parameter 'pullNumber' when calling pullsUpdateReview");
      } // verify the required parameter 'reviewId' is set


      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling pullsUpdateReview");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'pull_number': pullNumber,
        'review_id': reviewId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullRequestReview["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullsUpdateReviewComment operation.
     * @callback module:api/PullsApi~pullsUpdateReviewCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequestReviewComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a review comment for a pull request
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Enables you to edit a review comment.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.  If you use the `comfort-fade` preview header, your response will show:  *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`. *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.  If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the `position` attribute. *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject102} opts.inlineObject102 
     * @param {module:api/PullsApi~pullsUpdateReviewCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequestReviewComment}
     */

  }, {
    key: "pullsUpdateReviewComment",
    value: function pullsUpdateReviewComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject102']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling pullsUpdateReviewComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling pullsUpdateReviewComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling pullsUpdateReviewComment");
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
      var returnType = _PullRequestReviewComment["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{comment_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PullsApi;
}();

exports["default"] = PullsApi;