"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject103"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject131"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject132"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject33"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject34"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject58"));

var _InlineObject7 = _interopRequireDefault(require("../model/InlineObject82"));

var _InlineObject8 = _interopRequireDefault(require("../model/InlineObject90"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse415"));

var _Reaction = _interopRequireDefault(require("../model/Reaction"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Reactions service.
* @module api/ReactionsApi
* @version 0.0.5
*/
var ReactionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ReactionsApi. 
  * @alias module:api/ReactionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ReactionsApi(apiClient) {
    _classCallCheck(this, ReactionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the reactionsCreateForCommitComment operation.
   * @callback module:api/ReactionsApi~reactionsCreateForCommitCommentCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Reaction} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create reaction for a commit comment
   * Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this commit comment.
   * @param {String} owner 
   * @param {String} repo 
   * @param {Number} commentId comment_id parameter
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject58} opts.inlineObject58 
   * @param {module:api/ReactionsApi~reactionsCreateForCommitCommentCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Reaction}
   */


  _createClass(ReactionsApi, [{
    key: "reactionsCreateForCommitComment",
    value: function reactionsCreateForCommitComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject58']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsCreateForCommitComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsCreateForCommitComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsCreateForCommitComment");
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
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{comment_id}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsCreateForIssue operation.
     * @callback module:api/ReactionsApi~reactionsCreateForIssueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reaction for an issue
     * Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject90} opts.inlineObject90 
     * @param {module:api/ReactionsApi~reactionsCreateForIssueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reaction}
     */

  }, {
    key: "reactionsCreateForIssue",
    value: function reactionsCreateForIssue(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject90']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsCreateForIssue");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsCreateForIssue");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling reactionsCreateForIssue");
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
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsCreateForIssueComment operation.
     * @callback module:api/ReactionsApi~reactionsCreateForIssueCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reaction for an issue comment
     * Create a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue comment.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject82} opts.inlineObject82 
     * @param {module:api/ReactionsApi~reactionsCreateForIssueCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reaction}
     */

  }, {
    key: "reactionsCreateForIssueComment",
    value: function reactionsCreateForIssueComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject82']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsCreateForIssueComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsCreateForIssueComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsCreateForIssueComment");
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
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsCreateForPullRequestReviewComment operation.
     * @callback module:api/ReactionsApi~reactionsCreateForPullRequestReviewCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reaction for a pull request review comment
     * Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this pull request review comment.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject103} opts.inlineObject103 
     * @param {module:api/ReactionsApi~reactionsCreateForPullRequestReviewCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reaction}
     */

  }, {
    key: "reactionsCreateForPullRequestReviewComment",
    value: function reactionsCreateForPullRequestReviewComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject103']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsCreateForPullRequestReviewComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsCreateForPullRequestReviewComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsCreateForPullRequestReviewComment");
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
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsCreateForTeamDiscussionCommentInOrg operation.
     * @callback module:api/ReactionsApi~reactionsCreateForTeamDiscussionCommentInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reaction for a team discussion comment
     * Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject33} opts.inlineObject33 
     * @param {module:api/ReactionsApi~reactionsCreateForTeamDiscussionCommentInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reaction}
     */

  }, {
    key: "reactionsCreateForTeamDiscussionCommentInOrg",
    value: function reactionsCreateForTeamDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject33']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reactionsCreateForTeamDiscussionCommentInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling reactionsCreateForTeamDiscussionCommentInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsCreateForTeamDiscussionCommentInOrg");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling reactionsCreateForTeamDiscussionCommentInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsCreateForTeamDiscussionCommentLegacy operation.
     * @callback module:api/ReactionsApi~reactionsCreateForTeamDiscussionCommentLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reaction for a team discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion comment`](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment) endpoint.  Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject131} opts.inlineObject131 
     * @param {module:api/ReactionsApi~reactionsCreateForTeamDiscussionCommentLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reaction}
     */

  }, {
    key: "reactionsCreateForTeamDiscussionCommentLegacy",
    value: function reactionsCreateForTeamDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject131']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling reactionsCreateForTeamDiscussionCommentLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsCreateForTeamDiscussionCommentLegacy");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling reactionsCreateForTeamDiscussionCommentLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsCreateForTeamDiscussionInOrg operation.
     * @callback module:api/ReactionsApi~reactionsCreateForTeamDiscussionInOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reaction for a team discussion
     * Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.  **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject34} opts.inlineObject34 
     * @param {module:api/ReactionsApi~reactionsCreateForTeamDiscussionInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reaction}
     */

  }, {
    key: "reactionsCreateForTeamDiscussionInOrg",
    value: function reactionsCreateForTeamDiscussionInOrg(org, teamSlug, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject34']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reactionsCreateForTeamDiscussionInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling reactionsCreateForTeamDiscussionInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsCreateForTeamDiscussionInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsCreateForTeamDiscussionLegacy operation.
     * @callback module:api/ReactionsApi~reactionsCreateForTeamDiscussionLegacyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reaction for a team discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion) endpoint.  Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject132} opts.inlineObject132 
     * @param {module:api/ReactionsApi~reactionsCreateForTeamDiscussionLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reaction}
     */

  }, {
    key: "reactionsCreateForTeamDiscussionLegacy",
    value: function reactionsCreateForTeamDiscussionLegacy(teamId, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject132']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling reactionsCreateForTeamDiscussionLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsCreateForTeamDiscussionLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Reaction["default"];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsDeleteForCommitComment operation.
     * @callback module:api/ReactionsApi~reactionsDeleteForCommitCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a commit comment reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.  Delete a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Number} reactionId 
     * @param {module:api/ReactionsApi~reactionsDeleteForCommitCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reactionsDeleteForCommitComment",
    value: function reactionsDeleteForCommitComment(owner, repo, commentId, reactionId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsDeleteForCommitComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsDeleteForCommitComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsDeleteForCommitComment");
      } // verify the required parameter 'reactionId' is set


      if (reactionId === undefined || reactionId === null) {
        throw new Error("Missing the required parameter 'reactionId' when calling reactionsDeleteForCommitComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId,
        'reaction_id': reactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsDeleteForIssue operation.
     * @callback module:api/ReactionsApi~reactionsDeleteForIssueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an issue reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.  Delete a reaction to an [issue](https://developer.github.com/v3/issues/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Number} reactionId 
     * @param {module:api/ReactionsApi~reactionsDeleteForIssueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reactionsDeleteForIssue",
    value: function reactionsDeleteForIssue(owner, repo, issueNumber, reactionId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsDeleteForIssue");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsDeleteForIssue");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling reactionsDeleteForIssue");
      } // verify the required parameter 'reactionId' is set


      if (reactionId === undefined || reactionId === null) {
        throw new Error("Missing the required parameter 'reactionId' when calling reactionsDeleteForIssue");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber,
        'reaction_id': reactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsDeleteForIssueComment operation.
     * @callback module:api/ReactionsApi~reactionsDeleteForIssueCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an issue comment reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.  Delete a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Number} reactionId 
     * @param {module:api/ReactionsApi~reactionsDeleteForIssueCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reactionsDeleteForIssueComment",
    value: function reactionsDeleteForIssueComment(owner, repo, commentId, reactionId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsDeleteForIssueComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsDeleteForIssueComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsDeleteForIssueComment");
      } // verify the required parameter 'reactionId' is set


      if (reactionId === undefined || reactionId === null) {
        throw new Error("Missing the required parameter 'reactionId' when calling reactionsDeleteForIssueComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId,
        'reaction_id': reactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsDeleteForPullRequestComment operation.
     * @callback module:api/ReactionsApi~reactionsDeleteForPullRequestCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a pull request comment reaction
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`  Delete a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Number} reactionId 
     * @param {module:api/ReactionsApi~reactionsDeleteForPullRequestCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reactionsDeleteForPullRequestComment",
    value: function reactionsDeleteForPullRequestComment(owner, repo, commentId, reactionId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsDeleteForPullRequestComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsDeleteForPullRequestComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsDeleteForPullRequestComment");
      } // verify the required parameter 'reactionId' is set


      if (reactionId === undefined || reactionId === null) {
        throw new Error("Missing the required parameter 'reactionId' when calling reactionsDeleteForPullRequestComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId,
        'reaction_id': reactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsDeleteForTeamDiscussion operation.
     * @callback module:api/ReactionsApi~reactionsDeleteForTeamDiscussionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete team discussion reaction
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.  Delete a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Number} reactionId 
     * @param {module:api/ReactionsApi~reactionsDeleteForTeamDiscussionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reactionsDeleteForTeamDiscussion",
    value: function reactionsDeleteForTeamDiscussion(org, teamSlug, discussionNumber, reactionId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reactionsDeleteForTeamDiscussion");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling reactionsDeleteForTeamDiscussion");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsDeleteForTeamDiscussion");
      } // verify the required parameter 'reactionId' is set


      if (reactionId === undefined || reactionId === null) {
        throw new Error("Missing the required parameter 'reactionId' when calling reactionsDeleteForTeamDiscussion");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber,
        'reaction_id': reactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsDeleteForTeamDiscussionComment operation.
     * @callback module:api/ReactionsApi~reactionsDeleteForTeamDiscussionCommentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete team discussion comment reaction
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.  Delete a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {Number} reactionId 
     * @param {module:api/ReactionsApi~reactionsDeleteForTeamDiscussionCommentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reactionsDeleteForTeamDiscussionComment",
    value: function reactionsDeleteForTeamDiscussionComment(org, teamSlug, discussionNumber, commentNumber, reactionId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reactionsDeleteForTeamDiscussionComment");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling reactionsDeleteForTeamDiscussionComment");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsDeleteForTeamDiscussionComment");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling reactionsDeleteForTeamDiscussionComment");
      } // verify the required parameter 'reactionId' is set


      if (reactionId === undefined || reactionId === null) {
        throw new Error("Missing the required parameter 'reactionId' when calling reactionsDeleteForTeamDiscussionComment");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber,
        'reaction_id': reactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsDeleteLegacy operation.
     * @callback module:api/ReactionsApi~reactionsDeleteLegacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a reaction (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).  OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).
     * @param {Number} reactionId 
     * @param {module:api/ReactionsApi~reactionsDeleteLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reactionsDeleteLegacy",
    value: function reactionsDeleteLegacy(reactionId, callback) {
      var postBody = null; // verify the required parameter 'reactionId' is set

      if (reactionId === undefined || reactionId === null) {
        throw new Error("Missing the required parameter 'reactionId' when calling reactionsDeleteLegacy");
      }

      var pathParams = {
        'reaction_id': reactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/reactions/{reaction_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForCommitComment operation.
     * @callback module:api/ReactionsApi~reactionsListForCommitCommentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for a commit comment
     * List the reactions to a [commit comment](https://developer.github.com/v3/repos/comments/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a commit comment.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForCommitCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForCommitComment",
    value: function reactionsListForCommitComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsListForCommitComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsListForCommitComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsListForCommitComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{comment_id}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForIssue operation.
     * @callback module:api/ReactionsApi~reactionsListForIssueCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for an issue
     * List the reactions to an [issue](https://developer.github.com/v3/issues/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} issueNumber issue_number parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForIssueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForIssue",
    value: function reactionsListForIssue(owner, repo, issueNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsListForIssue");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsListForIssue");
      } // verify the required parameter 'issueNumber' is set


      if (issueNumber === undefined || issueNumber === null) {
        throw new Error("Missing the required parameter 'issueNumber' when calling reactionsListForIssue");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'issue_number': issueNumber
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{issue_number}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForIssueComment operation.
     * @callback module:api/ReactionsApi~reactionsListForIssueCommentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for an issue comment
     * List the reactions to an [issue comment](https://developer.github.com/v3/issues/comments/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue comment.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForIssueCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForIssueComment",
    value: function reactionsListForIssueComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsListForIssueComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsListForIssueComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsListForIssueComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForPullRequestReviewComment operation.
     * @callback module:api/ReactionsApi~reactionsListForPullRequestReviewCommentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for a pull request review comment
     * List the reactions to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} commentId comment_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForPullRequestReviewCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForPullRequestReviewComment",
    value: function reactionsListForPullRequestReviewComment(owner, repo, commentId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling reactionsListForPullRequestReviewComment");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling reactionsListForPullRequestReviewComment");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reactionsListForPullRequestReviewComment");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'comment_id': commentId
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForTeamDiscussionCommentInOrg operation.
     * @callback module:api/ReactionsApi~reactionsListForTeamDiscussionCommentInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for a team discussion comment
     * List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForTeamDiscussionCommentInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForTeamDiscussionCommentInOrg",
    value: function reactionsListForTeamDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reactionsListForTeamDiscussionCommentInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling reactionsListForTeamDiscussionCommentInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsListForTeamDiscussionCommentInOrg");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling reactionsListForTeamDiscussionCommentInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForTeamDiscussionCommentLegacy operation.
     * @callback module:api/ReactionsApi~reactionsListForTeamDiscussionCommentLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for a team discussion comment (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment) endpoint.  List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Number} commentNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForTeamDiscussionCommentLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForTeamDiscussionCommentLegacy",
    value: function reactionsListForTeamDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling reactionsListForTeamDiscussionCommentLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsListForTeamDiscussionCommentLegacy");
      } // verify the required parameter 'commentNumber' is set


      if (commentNumber === undefined || commentNumber === null) {
        throw new Error("Missing the required parameter 'commentNumber' when calling reactionsListForTeamDiscussionCommentLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber,
        'comment_number': commentNumber
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForTeamDiscussionInOrg operation.
     * @callback module:api/ReactionsApi~reactionsListForTeamDiscussionInOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for a team discussion
     * List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     * @param {String} org 
     * @param {String} teamSlug team_slug parameter
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForTeamDiscussionInOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForTeamDiscussionInOrg",
    value: function reactionsListForTeamDiscussionInOrg(org, teamSlug, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling reactionsListForTeamDiscussionInOrg");
      } // verify the required parameter 'teamSlug' is set


      if (teamSlug === undefined || teamSlug === null) {
        throw new Error("Missing the required parameter 'teamSlug' when calling reactionsListForTeamDiscussionInOrg");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsListForTeamDiscussionInOrg");
      }

      var pathParams = {
        'org': org,
        'team_slug': teamSlug,
        'discussion_number': discussionNumber
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reactionsListForTeamDiscussionLegacy operation.
     * @callback module:api/ReactionsApi~reactionsListForTeamDiscussionLegacyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Reaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions for a team discussion (Legacy)
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion) endpoint.  List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * @param {Number} teamId 
     * @param {Number} discussionNumber 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.content Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ReactionsApi~reactionsListForTeamDiscussionLegacyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Reaction>}
     */

  }, {
    key: "reactionsListForTeamDiscussionLegacy",
    value: function reactionsListForTeamDiscussionLegacy(teamId, discussionNumber, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling reactionsListForTeamDiscussionLegacy");
      } // verify the required parameter 'discussionNumber' is set


      if (discussionNumber === undefined || discussionNumber === null) {
        throw new Error("Missing the required parameter 'discussionNumber' when calling reactionsListForTeamDiscussionLegacy");
      }

      var pathParams = {
        'team_id': teamId,
        'discussion_number': discussionNumber
      };
      var queryParams = {
        'content': opts['content'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Reaction["default"]];
      return this.apiClient.callApi('/teams/{team_id}/discussions/{discussion_number}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ReactionsApi;
}();

exports["default"] = ReactionsApi;