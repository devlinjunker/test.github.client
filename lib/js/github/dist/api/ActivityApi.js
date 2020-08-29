"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _Event = _interopRequireDefault(require("../model/Event"));

var _Feed = _interopRequireDefault(require("../model/Feed"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject119"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject14"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject15"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject97"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse202"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse503"));

var _MinimalRepository = _interopRequireDefault(require("../model/MinimalRepository"));

var _Repository = _interopRequireDefault(require("../model/Repository"));

var _RepositorySubscription = _interopRequireDefault(require("../model/RepositorySubscription"));

var _SimpleUser = _interopRequireDefault(require("../model/SimpleUser"));

var _Thread = _interopRequireDefault(require("../model/Thread"));

var _ThreadSubscription = _interopRequireDefault(require("../model/ThreadSubscription"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Activity service.
* @module api/ActivityApi
* @version 0.0.5
*/
var ActivityApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActivityApi. 
  * @alias module:api/ActivityApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActivityApi(apiClient) {
    _classCallCheck(this, ActivityApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the activityCheckRepoIsStarredByAuthenticatedUser operation.
   * @callback module:api/ActivityApi~activityCheckRepoIsStarredByAuthenticatedUserCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Check if a repository is starred by the authenticated user
   * @param {String} owner 
   * @param {String} repo 
   * @param {module:api/ActivityApi~activityCheckRepoIsStarredByAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ActivityApi, [{
    key: "activityCheckRepoIsStarredByAuthenticatedUser",
    value: function activityCheckRepoIsStarredByAuthenticatedUser(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityCheckRepoIsStarredByAuthenticatedUser");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityCheckRepoIsStarredByAuthenticatedUser");
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
      var returnType = null;
      return this.apiClient.callApi('/user/starred/{owner}/{repo}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityDeleteRepoSubscription operation.
     * @callback module:api/ActivityApi~activityDeleteRepoSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a repository subscription
     * This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://developer.github.com/v3/activity/watching/#set-a-repository-subscription).
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActivityApi~activityDeleteRepoSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "activityDeleteRepoSubscription",
    value: function activityDeleteRepoSubscription(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityDeleteRepoSubscription");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityDeleteRepoSubscription");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/subscription', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityDeleteThreadSubscription operation.
     * @callback module:api/ActivityApi~activityDeleteThreadSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a thread subscription
     * Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription) endpoint and set `ignore` to `true`.
     * @param {Number} threadId thread_id parameter
     * @param {module:api/ActivityApi~activityDeleteThreadSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "activityDeleteThreadSubscription",
    value: function activityDeleteThreadSubscription(threadId, callback) {
      var postBody = null; // verify the required parameter 'threadId' is set

      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling activityDeleteThreadSubscription");
      }

      var pathParams = {
        'thread_id': threadId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/notifications/threads/{thread_id}/subscription', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityGetFeeds operation.
     * @callback module:api/ActivityApi~activityGetFeedsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Feed} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get feeds
     * GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:  *   **Timeline**: The GitHub global public timeline *   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia) *   **Current user public**: The public timeline for the authenticated user *   **Current user**: The private timeline for the authenticated user *   **Current user actor**: The private timeline for activity created by the authenticated user *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of. *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.  **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
     * @param {module:api/ActivityApi~activityGetFeedsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Feed}
     */

  }, {
    key: "activityGetFeeds",
    value: function activityGetFeeds(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Feed["default"];
      return this.apiClient.callApi('/feeds', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityGetRepoSubscription operation.
     * @callback module:api/ActivityApi~activityGetRepoSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositorySubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a repository subscription
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActivityApi~activityGetRepoSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositorySubscription}
     */

  }, {
    key: "activityGetRepoSubscription",
    value: function activityGetRepoSubscription(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityGetRepoSubscription");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityGetRepoSubscription");
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
      var returnType = _RepositorySubscription["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/subscription', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityGetThread operation.
     * @callback module:api/ActivityApi~activityGetThreadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Thread} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a thread
     * @param {Number} threadId thread_id parameter
     * @param {module:api/ActivityApi~activityGetThreadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Thread}
     */

  }, {
    key: "activityGetThread",
    value: function activityGetThread(threadId, callback) {
      var postBody = null; // verify the required parameter 'threadId' is set

      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling activityGetThread");
      }

      var pathParams = {
        'thread_id': threadId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Thread["default"];
      return this.apiClient.callApi('/notifications/threads/{thread_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityGetThreadSubscriptionForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityGetThreadSubscriptionForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThreadSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a thread subscription for the authenticated user
     * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://developer.github.com/v3/activity/watching/#get-a-repository-subscription).  Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
     * @param {Number} threadId thread_id parameter
     * @param {module:api/ActivityApi~activityGetThreadSubscriptionForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ThreadSubscription}
     */

  }, {
    key: "activityGetThreadSubscriptionForAuthenticatedUser",
    value: function activityGetThreadSubscriptionForAuthenticatedUser(threadId, callback) {
      var postBody = null; // verify the required parameter 'threadId' is set

      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling activityGetThreadSubscriptionForAuthenticatedUser");
      }

      var pathParams = {
        'thread_id': threadId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ThreadSubscription["default"];
      return this.apiClient.callApi('/notifications/threads/{thread_id}/subscription', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListEventsForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityListEventsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List events for the authenticated user
     * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListEventsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListEventsForAuthenticatedUser",
    value: function activityListEventsForAuthenticatedUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activityListEventsForAuthenticatedUser");
      }

      var pathParams = {
        'username': username
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/users/{username}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListNotificationsForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityListNotificationsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Thread>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List notifications for the authenticated user
     * List all notifications for the current user, sorted by most recently updated.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.all If `true`, show notifications marked as read. (default to false)
     * @param {Boolean} opts.participating If `true`, only shows notifications in which the user is directly participating or mentioned. (default to false)
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {String} opts.before Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListNotificationsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Thread>}
     */

  }, {
    key: "activityListNotificationsForAuthenticatedUser",
    value: function activityListNotificationsForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'all': opts['all'],
        'participating': opts['participating'],
        'since': opts['since'],
        'before': opts['before'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Thread["default"]];
      return this.apiClient.callApi('/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListOrgEventsForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityListOrgEventsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization events for the authenticated user
     * This is the user's organization dashboard. You must be authenticated as the user to view this.
     * @param {String} username 
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListOrgEventsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListOrgEventsForAuthenticatedUser",
    value: function activityListOrgEventsForAuthenticatedUser(username, org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activityListOrgEventsForAuthenticatedUser");
      } // verify the required parameter 'org' is set


      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling activityListOrgEventsForAuthenticatedUser");
      }

      var pathParams = {
        'username': username,
        'org': org
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/users/{username}/events/orgs/{org}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListPublicEvents operation.
     * @callback module:api/ActivityApi~activityListPublicEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public events
     * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListPublicEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListPublicEvents",
    value: function activityListPublicEvents(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListPublicEventsForRepoNetwork operation.
     * @callback module:api/ActivityApi~activityListPublicEventsForRepoNetworkCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public events for a network of repositories
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListPublicEventsForRepoNetworkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListPublicEventsForRepoNetwork",
    value: function activityListPublicEventsForRepoNetwork(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityListPublicEventsForRepoNetwork");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityListPublicEventsForRepoNetwork");
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/networks/{owner}/{repo}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListPublicEventsForUser operation.
     * @callback module:api/ActivityApi~activityListPublicEventsForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public events for a user
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListPublicEventsForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListPublicEventsForUser",
    value: function activityListPublicEventsForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activityListPublicEventsForUser");
      }

      var pathParams = {
        'username': username
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/users/{username}/events/public', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListPublicOrgEvents operation.
     * @callback module:api/ActivityApi~activityListPublicOrgEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public organization events
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListPublicOrgEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListPublicOrgEvents",
    value: function activityListPublicOrgEvents(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling activityListPublicOrgEvents");
      }

      var pathParams = {
        'org': org
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/orgs/{org}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListReceivedEventsForUser operation.
     * @callback module:api/ActivityApi~activityListReceivedEventsForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List events received by the authenticated user
     * These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListReceivedEventsForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListReceivedEventsForUser",
    value: function activityListReceivedEventsForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activityListReceivedEventsForUser");
      }

      var pathParams = {
        'username': username
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/users/{username}/received_events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListReceivedPublicEventsForUser operation.
     * @callback module:api/ActivityApi~activityListReceivedPublicEventsForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List public events received by a user
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListReceivedPublicEventsForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListReceivedPublicEventsForUser",
    value: function activityListReceivedPublicEventsForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activityListReceivedPublicEventsForUser");
      }

      var pathParams = {
        'username': username
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/users/{username}/received_events/public', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListRepoEvents operation.
     * @callback module:api/ActivityApi~activityListRepoEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository events
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListRepoEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */

  }, {
    key: "activityListRepoEvents",
    value: function activityListRepoEvents(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityListRepoEvents");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityListRepoEvents");
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
      var returnType = [_Event["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListRepoNotificationsForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityListRepoNotificationsForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Thread>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository notifications for the authenticated user
     * List all notifications for the current user.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.all If `true`, show notifications marked as read. (default to false)
     * @param {Boolean} opts.participating If `true`, only shows notifications in which the user is directly participating or mentioned. (default to false)
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {String} opts.before Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListRepoNotificationsForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Thread>}
     */

  }, {
    key: "activityListRepoNotificationsForAuthenticatedUser",
    value: function activityListRepoNotificationsForAuthenticatedUser(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityListRepoNotificationsForAuthenticatedUser");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityListRepoNotificationsForAuthenticatedUser");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'all': opts['all'],
        'participating': opts['participating'],
        'since': opts['since'],
        'before': opts['before'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Thread["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListReposStarredByAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityListReposStarredByAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories starred by the authenticated user
     * Lists repositories the authenticated user has starred.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort One of `created` (when the repository was starred) or `updated` (when it was last pushed to). (default to 'created')
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListReposStarredByAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repository>}
     */

  }, {
    key: "activityListReposStarredByAuthenticatedUser",
    value: function activityListReposStarredByAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'sort': opts['sort'],
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/vnd.github.v3.star+json'];
      var returnType = [_Repository["default"]];
      return this.apiClient.callApi('/user/starred', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListReposStarredByUser operation.
     * @callback module:api/ActivityApi~activityListReposStarredByUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories starred by a user
     * Lists repositories a user has starred.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort One of `created` (when the repository was starred) or `updated` (when it was last pushed to). (default to 'created')
     * @param {module:model/String} opts.direction One of `asc` (ascending) or `desc` (descending). (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListReposStarredByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repository>}
     */

  }, {
    key: "activityListReposStarredByUser",
    value: function activityListReposStarredByUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activityListReposStarredByUser");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'sort': opts['sort'],
        'direction': opts['direction'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/vnd.github.v3.star+json'];
      var returnType = [_Repository["default"]];
      return this.apiClient.callApi('/users/{username}/starred', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListReposWatchedByUser operation.
     * @callback module:api/ActivityApi~activityListReposWatchedByUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories watched by a user
     * Lists repositories a user is watching.
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListReposWatchedByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "activityListReposWatchedByUser",
    value: function activityListReposWatchedByUser(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling activityListReposWatchedByUser");
      }

      var pathParams = {
        'username': username
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
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/users/{username}/subscriptions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListStargazersForRepo operation.
     * @callback module:api/ActivityApi~activityListStargazersForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List stargazers
     * Lists the people that have starred the repository.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListStargazersForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "activityListStargazersForRepo",
    value: function activityListStargazersForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityListStargazersForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityListStargazersForRepo");
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
      var accepts = ['application/json', 'application/vnd.github.v3.star+json'];
      var returnType = [_SimpleUser["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/stargazers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListWatchedReposForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityListWatchedReposForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories watched by the authenticated user
     * Lists repositories the authenticated user is watching.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListWatchedReposForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "activityListWatchedReposForAuthenticatedUser",
    value: function activityListWatchedReposForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/user/subscriptions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityListWatchersForRepo operation.
     * @callback module:api/ActivityApi~activityListWatchersForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List watchers
     * Lists the people watching the specified repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActivityApi~activityListWatchersForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleUser>}
     */

  }, {
    key: "activityListWatchersForRepo",
    value: function activityListWatchersForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityListWatchersForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityListWatchersForRepo");
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
      return this.apiClient.callApi('/repos/{owner}/{repo}/subscribers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityMarkNotificationsAsRead operation.
     * @callback module:api/ActivityApi~activityMarkNotificationsAsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse202} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark notifications as read
     * Marks all notifications as \"read\" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as \"read.\" To check whether any \"unread\" notifications remain, you can use the [List notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject14} opts.inlineObject14 
     * @param {module:api/ActivityApi~activityMarkNotificationsAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse202}
     */

  }, {
    key: "activityMarkNotificationsAsRead",
    value: function activityMarkNotificationsAsRead(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject14'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/notifications', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityMarkRepoNotificationsAsRead operation.
     * @callback module:api/ActivityApi~activityMarkRepoNotificationsAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark repository notifications as read
     * Marks all notifications in a repository as \"read\" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as \"read.\" To check whether any \"unread\" notifications remain, you can use the [List repository notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject97} opts.inlineObject97 
     * @param {module:api/ActivityApi~activityMarkRepoNotificationsAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "activityMarkRepoNotificationsAsRead",
    value: function activityMarkRepoNotificationsAsRead(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject97']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityMarkRepoNotificationsAsRead");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityMarkRepoNotificationsAsRead");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/notifications', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityMarkThreadAsRead operation.
     * @callback module:api/ActivityApi~activityMarkThreadAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a thread as read
     * @param {Number} threadId thread_id parameter
     * @param {module:api/ActivityApi~activityMarkThreadAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "activityMarkThreadAsRead",
    value: function activityMarkThreadAsRead(threadId, callback) {
      var postBody = null; // verify the required parameter 'threadId' is set

      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling activityMarkThreadAsRead");
      }

      var pathParams = {
        'thread_id': threadId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/notifications/threads/{thread_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activitySetRepoSubscription operation.
     * @callback module:api/ActivityApi~activitySetRepoSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositorySubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a repository subscription
     * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription) completely.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject119} opts.inlineObject119 
     * @param {module:api/ActivityApi~activitySetRepoSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositorySubscription}
     */

  }, {
    key: "activitySetRepoSubscription",
    value: function activitySetRepoSubscription(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject119']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activitySetRepoSubscription");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activitySetRepoSubscription");
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
      var returnType = _RepositorySubscription["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/subscription', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activitySetThreadSubscription operation.
     * @callback module:api/ActivityApi~activitySetThreadSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThreadSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a thread subscription
     * If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.  You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.  Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription) endpoint.
     * @param {Number} threadId thread_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject15} opts.inlineObject15 
     * @param {module:api/ActivityApi~activitySetThreadSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ThreadSubscription}
     */

  }, {
    key: "activitySetThreadSubscription",
    value: function activitySetThreadSubscription(threadId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject15']; // verify the required parameter 'threadId' is set

      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling activitySetThreadSubscription");
      }

      var pathParams = {
        'thread_id': threadId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ThreadSubscription["default"];
      return this.apiClient.callApi('/notifications/threads/{thread_id}/subscription', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityStarRepoForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityStarRepoForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Star a repository for the authenticated user
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActivityApi~activityStarRepoForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "activityStarRepoForAuthenticatedUser",
    value: function activityStarRepoForAuthenticatedUser(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityStarRepoForAuthenticatedUser");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityStarRepoForAuthenticatedUser");
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
      var returnType = null;
      return this.apiClient.callApi('/user/starred/{owner}/{repo}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the activityUnstarRepoForAuthenticatedUser operation.
     * @callback module:api/ActivityApi~activityUnstarRepoForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unstar a repository for the authenticated user
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActivityApi~activityUnstarRepoForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "activityUnstarRepoForAuthenticatedUser",
    value: function activityUnstarRepoForAuthenticatedUser(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling activityUnstarRepoForAuthenticatedUser");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling activityUnstarRepoForAuthenticatedUser");
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
      var returnType = null;
      return this.apiClient.callApi('/user/starred/{owner}/{repo}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ActivityApi;
}();

exports["default"] = ActivityApi;