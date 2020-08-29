"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20013"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20014"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse20015"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse20016"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse20017"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse20018"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse20019"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse503"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Search service.
* @module api/SearchApi
* @version 0.0.5
*/
var SearchApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SearchApi. 
  * @alias module:api/SearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchApi(apiClient) {
    _classCallCheck(this, SearchApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the searchCode operation.
   * @callback module:api/SearchApi~searchCodeCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20013} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Search code
   * Searches for query terms inside of a file. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:  `q=addClass+in:file+language:js+repo:jquery/jquery`  This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.  #### Considerations for code search  Due to the complexity of searching code, there are a few restrictions on how searches are performed:  *   Only the _default branch_ is considered. In most cases, this will be the `master` branch. *   Only files smaller than 384 KB are searchable. *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
   * @param {String} q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching code](https://help.github.com/articles/searching-code/)\" for a detailed list of qualifiers.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.sort Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
   * @param {module:model/String} opts.order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. (default to 'desc')
   * @param {Number} opts.perPage Results per page (max 100) (default to 30)
   * @param {Number} opts.page Page number of the results to fetch. (default to 1)
   * @param {module:api/SearchApi~searchCodeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse20013}
   */


  _createClass(SearchApi, [{
    key: "searchCode",
    value: function searchCode(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchCode");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'sort': opts['sort'],
        'order': opts['order'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/search/code', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchCommits operation.
     * @callback module:api/SearchApi~searchCommitsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search commits
     * Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:  `q=repo:octocat/Spoon-Knife+css`
     * @param {String} q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching commits](https://help.github.com/articles/searching-commits/)\" for a detailed list of qualifiers.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
     * @param {module:model/String} opts.order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/SearchApi~searchCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */

  }, {
    key: "searchCommits",
    value: function searchCommits(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchCommits");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'sort': opts['sort'],
        'order': opts['order'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/search/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchIssuesAndPullRequests operation.
     * @callback module:api/SearchApi~searchIssuesAndPullRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search issues and pull requests
     * Find issues by state and keyword. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.  `q=windows+label:bug+language:python+state:open&sort=created&order=asc`  This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, whick means the oldest issues appear first in the search results.
     * @param {String} q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)\" for a detailed list of qualifiers.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
     * @param {module:model/String} opts.order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/SearchApi~searchIssuesAndPullRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20015}
     */

  }, {
    key: "searchIssuesAndPullRequests",
    value: function searchIssuesAndPullRequests(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchIssuesAndPullRequests");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'sort': opts['sort'],
        'order': opts['order'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/search/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchLabels operation.
     * @callback module:api/SearchApi~searchLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search labels
     * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:  `q=bug+defect+enhancement&repository_id=64778136`  The labels that best match the query appear first in the search results.
     * @param {Number} repositoryId The id of the repository.
     * @param {String} q The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
     * @param {module:model/String} opts.order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. (default to 'desc')
     * @param {module:api/SearchApi~searchLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20016}
     */

  }, {
    key: "searchLabels",
    value: function searchLabels(repositoryId, q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'repositoryId' is set

      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling searchLabels");
      } // verify the required parameter 'q' is set


      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchLabels");
      }

      var pathParams = {};
      var queryParams = {
        'repository_id': repositoryId,
        'q': q,
        'sort': opts['sort'],
        'order': opts['order']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/search/labels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchRepos operation.
     * @callback module:api/SearchApi~searchReposCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search repositories
     * Find repositories via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:  `q=tetris+language:assembly&sort=stars&order=desc`  This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.  When you include the `mercy` preview header, you can also search for multiple topics by adding more `topic:` instances. For example, your query might look like this:  `q=topic:ruby+topic:rails`
     * @param {String} q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)\" for a detailed list of qualifiers.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
     * @param {module:model/String} opts.order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/SearchApi~searchReposCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20017}
     */

  }, {
    key: "searchRepos",
    value: function searchRepos(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchRepos");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'sort': opts['sort'],
        'order': opts['order'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/search/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchTopics operation.
     * @callback module:api/SearchApi~searchTopicsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search topics
     * Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination). See \"[Searching topics](https://help.github.com/articles/searching-topics/)\" for a detailed list of qualifiers.  When searching for topics, you can get text match metadata for the topic's **short\\_description**, **description**, **name**, or **display\\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:  `q=ruby+is:featured`  This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
     * @param {String} q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).
     * @param {module:api/SearchApi~searchTopicsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20018}
     */

  }, {
    key: "searchTopics",
    value: function searchTopics(q, callback) {
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchTopics");
      }

      var pathParams = {};
      var queryParams = {
        'q': q
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6["default"];
      return this.apiClient.callApi('/search/topics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchUsers operation.
     * @callback module:api/SearchApi~searchUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users
     * Find users via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you're looking for a list of popular users, you might try this query:  `q=tom+repos:%3E42+followers:%3E1000`  This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.
     * @param {String} q The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching users](https://help.github.com/articles/searching-users/)\" for a detailed list of qualifiers.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
     * @param {module:model/String} opts.order Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. (default to 'desc')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/SearchApi~searchUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20019}
     */

  }, {
    key: "searchUsers",
    value: function searchUsers(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchUsers");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'sort': opts['sort'],
        'order': opts['order'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse7["default"];
      return this.apiClient.callApi('/search/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SearchApi;
}();

exports["default"] = SearchApi;