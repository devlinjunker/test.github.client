# GitHubV3RestApi.SearchApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchCode**](SearchApi.md#searchCode) | **GET** /search/code | Search code
[**searchCommits**](SearchApi.md#searchCommits) | **GET** /search/commits | Search commits
[**searchIssuesAndPullRequests**](SearchApi.md#searchIssuesAndPullRequests) | **GET** /search/issues | Search issues and pull requests
[**searchLabels**](SearchApi.md#searchLabels) | **GET** /search/labels | Search labels
[**searchRepos**](SearchApi.md#searchRepos) | **GET** /search/repositories | Search repositories
[**searchTopics**](SearchApi.md#searchTopics) | **GET** /search/topics | Search topics
[**searchUsers**](SearchApi.md#searchUsers) | **GET** /search/users | Search users



## searchCode

> InlineResponse20013 searchCode(q, opts)

Search code

Searches for query terms inside of a file. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find the definition of the &#x60;addClass&#x60; function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:  &#x60;q&#x3D;addClass+in:file+language:js+repo:jquery/jquery&#x60;  This query searches for the keyword &#x60;addClass&#x60; within a file&#39;s contents. The query limits the search to files where the language is JavaScript in the &#x60;jquery/jquery&#x60; repository.  #### Considerations for code search  Due to the complexity of searching code, there are a few restrictions on how searches are performed:  *   Only the _default branch_ is considered. In most cases, this will be the &#x60;master&#x60; branch. *   Only files smaller than 384 KB are searchable. *   You must always include at least one search term when searching source code. For example, searching for [&#x60;language:go&#x60;](https://github.com/search?utf8&#x3D;%E2%9C%93&amp;q&#x3D;language%3Ago&amp;type&#x3D;Code) is not valid, while [&#x60;amazing language:go&#x60;](https://github.com/search?utf8&#x3D;%E2%9C%93&amp;q&#x3D;amazing+language%3Ago&amp;type&#x3D;Code) is.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.SearchApi();
let q = "q_example"; // String | The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching code](https://help.github.com/articles/searching-code/)\" for a detailed list of qualifiers.
let opts = {
  'sort': "sort_example", // String | Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  'order': "'desc'", // String | Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.searchCode(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \&quot;[Searching code](https://help.github.com/articles/searching-code/)\&quot; for a detailed list of qualifiers. | 
 **sort** | **String**| Sorts the results of your query. Can only be &#x60;indexed&#x60;, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results) | [optional] 
 **order** | **String**| Determines whether the first search result returned is the highest number of matches (&#x60;desc&#x60;) or lowest number of matches (&#x60;asc&#x60;). This parameter is ignored unless you provide &#x60;sort&#x60;. | [optional] [default to &#39;desc&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchCommits

> InlineResponse20014 searchCommits(q, opts)

Search commits

Find commits via various criteria on the default branch (usually &#x60;master&#x60;). This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for commits, you can get text match metadata for the **message** field when you provide the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:  &#x60;q&#x3D;repo:octocat/Spoon-Knife+css&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.SearchApi();
let q = "q_example"; // String | The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching commits](https://help.github.com/articles/searching-commits/)\" for a detailed list of qualifiers.
let opts = {
  'sort': "sort_example", // String | Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  'order': "'desc'", // String | Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.searchCommits(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \&quot;[Searching commits](https://help.github.com/articles/searching-commits/)\&quot; for a detailed list of qualifiers. | 
 **sort** | **String**| Sorts the results of your query by &#x60;author-date&#x60; or &#x60;committer-date&#x60;. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results) | [optional] 
 **order** | **String**| Determines whether the first search result returned is the highest number of matches (&#x60;desc&#x60;) or lowest number of matches (&#x60;asc&#x60;). This parameter is ignored unless you provide &#x60;sort&#x60;. | [optional] [default to &#39;desc&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchIssuesAndPullRequests

> InlineResponse20015 searchIssuesAndPullRequests(q, opts)

Search issues and pull requests

Find issues by state and keyword. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.  &#x60;q&#x3D;windows+label:bug+language:python+state:open&amp;sort&#x3D;created&amp;order&#x3D;asc&#x60;  This query searches for the keyword &#x60;windows&#x60;, within any open issue that is labeled as &#x60;bug&#x60;. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, whick means the oldest issues appear first in the search results.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.SearchApi();
let q = "q_example"; // String | The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)\" for a detailed list of qualifiers.
let opts = {
  'sort': "sort_example", // String | Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  'order': "'desc'", // String | Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.searchIssuesAndPullRequests(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \&quot;[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)\&quot; for a detailed list of qualifiers. | 
 **sort** | **String**| Sorts the results of your query by the number of &#x60;comments&#x60;, &#x60;reactions&#x60;, &#x60;reactions-+1&#x60;, &#x60;reactions--1&#x60;, &#x60;reactions-smile&#x60;, &#x60;reactions-thinking_face&#x60;, &#x60;reactions-heart&#x60;, &#x60;reactions-tada&#x60;, or &#x60;interactions&#x60;. You can also sort results by how recently the items were &#x60;created&#x60; or &#x60;updated&#x60;, Default: [best match](https://developer.github.com/v3/search/#ranking-search-results) | [optional] 
 **order** | **String**| Determines whether the first search result returned is the highest number of matches (&#x60;desc&#x60;) or lowest number of matches (&#x60;asc&#x60;). This parameter is ignored unless you provide &#x60;sort&#x60;. | [optional] [default to &#39;desc&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchLabels

> InlineResponse20016 searchLabels(repositoryId, q, opts)

Search labels

Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to find labels in the &#x60;linguist&#x60; repository that match &#x60;bug&#x60;, &#x60;defect&#x60;, or &#x60;enhancement&#x60;. Your query might look like this:  &#x60;q&#x3D;bug+defect+enhancement&amp;repository_id&#x3D;64778136&#x60;  The labels that best match the query appear first in the search results.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.SearchApi();
let repositoryId = 56; // Number | The id of the repository.
let q = "q_example"; // String | The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).
let opts = {
  'sort': "sort_example", // String | Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  'order': "'desc'" // String | Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
};
apiInstance.searchLabels(repositoryId, q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **Number**| The id of the repository. | 
 **q** | **String**| The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). | 
 **sort** | **String**| Sorts the results of your query by when the label was &#x60;created&#x60; or &#x60;updated&#x60;. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results) | [optional] 
 **order** | **String**| Determines whether the first search result returned is the highest number of matches (&#x60;desc&#x60;) or lowest number of matches (&#x60;asc&#x60;). This parameter is ignored unless you provide &#x60;sort&#x60;. | [optional] [default to &#39;desc&#39;]

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchRepos

> InlineResponse20017 searchRepos(q, opts)

Search repositories

Find repositories via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:  &#x60;q&#x3D;tetris+language:assembly&amp;sort&#x3D;stars&amp;order&#x3D;desc&#x60;  This query searches for repositories with the word &#x60;tetris&#x60; in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.  When you include the &#x60;mercy&#x60; preview header, you can also search for multiple topics by adding more &#x60;topic:&#x60; instances. For example, your query might look like this:  &#x60;q&#x3D;topic:ruby+topic:rails&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.SearchApi();
let q = "q_example"; // String | The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)\" for a detailed list of qualifiers.
let opts = {
  'sort': "sort_example", // String | Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  'order': "'desc'", // String | Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.searchRepos(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \&quot;[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)\&quot; for a detailed list of qualifiers. | 
 **sort** | **String**| Sorts the results of your query by number of &#x60;stars&#x60;, &#x60;forks&#x60;, or &#x60;help-wanted-issues&#x60; or how recently the items were &#x60;updated&#x60;. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results) | [optional] 
 **order** | **String**| Determines whether the first search result returned is the highest number of matches (&#x60;desc&#x60;) or lowest number of matches (&#x60;asc&#x60;). This parameter is ignored unless you provide &#x60;sort&#x60;. | [optional] [default to &#39;desc&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchTopics

> InlineResponse20018 searchTopics(q)

Search topics

Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination). See \&quot;[Searching topics](https://help.github.com/articles/searching-topics/)\&quot; for a detailed list of qualifiers.  When searching for topics, you can get text match metadata for the topic&#39;s **short\\_description**, **description**, **name**, or **display\\_name** field when you pass the &#x60;text-match&#x60; media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:  &#x60;q&#x3D;ruby+is:featured&#x60;  This query searches for topics with the keyword &#x60;ruby&#x60; and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.SearchApi();
let q = "q_example"; // String | The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).
apiInstance.searchTopics(q, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). | 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchUsers

> InlineResponse20019 searchUsers(q, opts)

Search users

Find users via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).  When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the &#x60;text-match&#x60; media type. For more details about highlighting search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).  For example, if you&#39;re looking for a list of popular users, you might try this query:  &#x60;q&#x3D;tom+repos:%3E42+followers:%3E1000&#x60;  This query searches for users with the name &#x60;tom&#x60;. The results are restricted to users with more than 42 repositories and over 1,000 followers.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.SearchApi();
let q = "q_example"; // String | The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \"[Searching users](https://help.github.com/articles/searching-users/)\" for a detailed list of qualifiers.
let opts = {
  'sort': "sort_example", // String | Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  'order': "'desc'", // String | Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.searchUsers(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See \&quot;[Searching users](https://help.github.com/articles/searching-users/)\&quot; for a detailed list of qualifiers. | 
 **sort** | **String**| Sorts the results of your query by number of &#x60;followers&#x60; or &#x60;repositories&#x60;, or when the person &#x60;joined&#x60; GitHub. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results) | [optional] 
 **order** | **String**| Determines whether the first search result returned is the highest number of matches (&#x60;desc&#x60;) or lowest number of matches (&#x60;asc&#x60;). This parameter is ignored unless you provide &#x60;sort&#x60;. | [optional] [default to &#39;desc&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

