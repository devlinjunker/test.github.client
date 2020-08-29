# GitHubV3RestApi.ActivityApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activityCheckRepoIsStarredByAuthenticatedUser**](ActivityApi.md#activityCheckRepoIsStarredByAuthenticatedUser) | **GET** /user/starred/{owner}/{repo} | Check if a repository is starred by the authenticated user
[**activityDeleteRepoSubscription**](ActivityApi.md#activityDeleteRepoSubscription) | **DELETE** /repos/{owner}/{repo}/subscription | Delete a repository subscription
[**activityDeleteThreadSubscription**](ActivityApi.md#activityDeleteThreadSubscription) | **DELETE** /notifications/threads/{thread_id}/subscription | Delete a thread subscription
[**activityGetFeeds**](ActivityApi.md#activityGetFeeds) | **GET** /feeds | Get feeds
[**activityGetRepoSubscription**](ActivityApi.md#activityGetRepoSubscription) | **GET** /repos/{owner}/{repo}/subscription | Get a repository subscription
[**activityGetThread**](ActivityApi.md#activityGetThread) | **GET** /notifications/threads/{thread_id} | Get a thread
[**activityGetThreadSubscriptionForAuthenticatedUser**](ActivityApi.md#activityGetThreadSubscriptionForAuthenticatedUser) | **GET** /notifications/threads/{thread_id}/subscription | Get a thread subscription for the authenticated user
[**activityListEventsForAuthenticatedUser**](ActivityApi.md#activityListEventsForAuthenticatedUser) | **GET** /users/{username}/events | List events for the authenticated user
[**activityListNotificationsForAuthenticatedUser**](ActivityApi.md#activityListNotificationsForAuthenticatedUser) | **GET** /notifications | List notifications for the authenticated user
[**activityListOrgEventsForAuthenticatedUser**](ActivityApi.md#activityListOrgEventsForAuthenticatedUser) | **GET** /users/{username}/events/orgs/{org} | List organization events for the authenticated user
[**activityListPublicEvents**](ActivityApi.md#activityListPublicEvents) | **GET** /events | List public events
[**activityListPublicEventsForRepoNetwork**](ActivityApi.md#activityListPublicEventsForRepoNetwork) | **GET** /networks/{owner}/{repo}/events | List public events for a network of repositories
[**activityListPublicEventsForUser**](ActivityApi.md#activityListPublicEventsForUser) | **GET** /users/{username}/events/public | List public events for a user
[**activityListPublicOrgEvents**](ActivityApi.md#activityListPublicOrgEvents) | **GET** /orgs/{org}/events | List public organization events
[**activityListReceivedEventsForUser**](ActivityApi.md#activityListReceivedEventsForUser) | **GET** /users/{username}/received_events | List events received by the authenticated user
[**activityListReceivedPublicEventsForUser**](ActivityApi.md#activityListReceivedPublicEventsForUser) | **GET** /users/{username}/received_events/public | List public events received by a user
[**activityListRepoEvents**](ActivityApi.md#activityListRepoEvents) | **GET** /repos/{owner}/{repo}/events | List repository events
[**activityListRepoNotificationsForAuthenticatedUser**](ActivityApi.md#activityListRepoNotificationsForAuthenticatedUser) | **GET** /repos/{owner}/{repo}/notifications | List repository notifications for the authenticated user
[**activityListReposStarredByAuthenticatedUser**](ActivityApi.md#activityListReposStarredByAuthenticatedUser) | **GET** /user/starred | List repositories starred by the authenticated user
[**activityListReposStarredByUser**](ActivityApi.md#activityListReposStarredByUser) | **GET** /users/{username}/starred | List repositories starred by a user
[**activityListReposWatchedByUser**](ActivityApi.md#activityListReposWatchedByUser) | **GET** /users/{username}/subscriptions | List repositories watched by a user
[**activityListStargazersForRepo**](ActivityApi.md#activityListStargazersForRepo) | **GET** /repos/{owner}/{repo}/stargazers | List stargazers
[**activityListWatchedReposForAuthenticatedUser**](ActivityApi.md#activityListWatchedReposForAuthenticatedUser) | **GET** /user/subscriptions | List repositories watched by the authenticated user
[**activityListWatchersForRepo**](ActivityApi.md#activityListWatchersForRepo) | **GET** /repos/{owner}/{repo}/subscribers | List watchers
[**activityMarkNotificationsAsRead**](ActivityApi.md#activityMarkNotificationsAsRead) | **PUT** /notifications | Mark notifications as read
[**activityMarkRepoNotificationsAsRead**](ActivityApi.md#activityMarkRepoNotificationsAsRead) | **PUT** /repos/{owner}/{repo}/notifications | Mark repository notifications as read
[**activityMarkThreadAsRead**](ActivityApi.md#activityMarkThreadAsRead) | **PATCH** /notifications/threads/{thread_id} | Mark a thread as read
[**activitySetRepoSubscription**](ActivityApi.md#activitySetRepoSubscription) | **PUT** /repos/{owner}/{repo}/subscription | Set a repository subscription
[**activitySetThreadSubscription**](ActivityApi.md#activitySetThreadSubscription) | **PUT** /notifications/threads/{thread_id}/subscription | Set a thread subscription
[**activityStarRepoForAuthenticatedUser**](ActivityApi.md#activityStarRepoForAuthenticatedUser) | **PUT** /user/starred/{owner}/{repo} | Star a repository for the authenticated user
[**activityUnstarRepoForAuthenticatedUser**](ActivityApi.md#activityUnstarRepoForAuthenticatedUser) | **DELETE** /user/starred/{owner}/{repo} | Unstar a repository for the authenticated user



## activityCheckRepoIsStarredByAuthenticatedUser

> activityCheckRepoIsStarredByAuthenticatedUser(owner, repo)

Check if a repository is starred by the authenticated user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.activityCheckRepoIsStarredByAuthenticatedUser(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityDeleteRepoSubscription

> activityDeleteRepoSubscription(owner, repo)

Delete a repository subscription

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository&#39;s subscription manually](https://developer.github.com/v3/activity/watching/#set-a-repository-subscription).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.activityDeleteRepoSubscription(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## activityDeleteThreadSubscription

> activityDeleteThreadSubscription(threadId)

Delete a thread subscription

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription) endpoint and set &#x60;ignore&#x60; to &#x60;true&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let threadId = 56; // Number | thread_id parameter
apiInstance.activityDeleteThreadSubscription(threadId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **Number**| thread_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityGetFeeds

> Feed activityGetFeeds()

Get feeds

GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:  *   **Timeline**: The GitHub global public timeline *   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia) *   **Current user public**: The public timeline for the authenticated user *   **Current user**: The private timeline for the authenticated user *   **Current user actor**: The private timeline for activity created by the authenticated user *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of. *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.  **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
apiInstance.activityGetFeeds((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityGetRepoSubscription

> RepositorySubscription activityGetRepoSubscription(owner, repo)

Get a repository subscription

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.activityGetRepoSubscription(owner, repo, (error, data, response) => {
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
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

[**RepositorySubscription**](RepositorySubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityGetThread

> Thread activityGetThread(threadId)

Get a thread

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let threadId = 56; // Number | thread_id parameter
apiInstance.activityGetThread(threadId, (error, data, response) => {
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
 **threadId** | **Number**| thread_id parameter | 

### Return type

[**Thread**](Thread.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityGetThreadSubscriptionForAuthenticatedUser

> ThreadSubscription activityGetThreadSubscriptionForAuthenticatedUser(threadId)

Get a thread subscription for the authenticated user

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://developer.github.com/v3/activity/watching/#get-a-repository-subscription).  Note that subscriptions are only generated if a user is participating in a conversation--for example, they&#39;ve replied to the thread, were **@mentioned**, or manually subscribe to a thread.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let threadId = 56; // Number | thread_id parameter
apiInstance.activityGetThreadSubscriptionForAuthenticatedUser(threadId, (error, data, response) => {
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
 **threadId** | **Number**| thread_id parameter | 

### Return type

[**ThreadSubscription**](ThreadSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListEventsForAuthenticatedUser

> [Event] activityListEventsForAuthenticatedUser(username, opts)

List events for the authenticated user

If you are authenticated as the given user, you will see your private events. Otherwise, you&#39;ll only see public events.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListEventsForAuthenticatedUser(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListNotificationsForAuthenticatedUser

> [Thread] activityListNotificationsForAuthenticatedUser(opts)

List notifications for the authenticated user

List all notifications for the current user, sorted by most recently updated.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let opts = {
  'all': false, // Boolean | If `true`, show notifications marked as read.
  'participating': false, // Boolean | If `true`, only shows notifications in which the user is directly participating or mentioned.
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'before': "before_example", // String | Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListNotificationsForAuthenticatedUser(opts, (error, data, response) => {
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
 **all** | **Boolean**| If &#x60;true&#x60;, show notifications marked as read. | [optional] [default to false]
 **participating** | **Boolean**| If &#x60;true&#x60;, only shows notifications in which the user is directly participating or mentioned. | [optional] [default to false]
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **before** | **String**| Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Thread]**](Thread.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListOrgEventsForAuthenticatedUser

> [Event] activityListOrgEventsForAuthenticatedUser(username, org, opts)

List organization events for the authenticated user

This is the user&#39;s organization dashboard. You must be authenticated as the user to view this.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let username = "username_example"; // String | 
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListOrgEventsForAuthenticatedUser(username, org, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **org** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListPublicEvents

> [Event] activityListPublicEvents(opts)

List public events

We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListPublicEvents(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListPublicEventsForRepoNetwork

> [Event] activityListPublicEventsForRepoNetwork(owner, repo, opts)

List public events for a network of repositories

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListPublicEventsForRepoNetwork(owner, repo, opts, (error, data, response) => {
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
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListPublicEventsForUser

> [Event] activityListPublicEventsForUser(username, opts)

List public events for a user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListPublicEventsForUser(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListPublicOrgEvents

> [Event] activityListPublicOrgEvents(org, opts)

List public organization events

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListPublicOrgEvents(org, opts, (error, data, response) => {
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
 **org** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListReceivedEventsForUser

> [Event] activityListReceivedEventsForUser(username, opts)

List events received by the authenticated user

These are events that you&#39;ve received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you&#39;ll only see public events.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListReceivedEventsForUser(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListReceivedPublicEventsForUser

> [Event] activityListReceivedPublicEventsForUser(username, opts)

List public events received by a user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListReceivedPublicEventsForUser(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListRepoEvents

> [Event] activityListRepoEvents(owner, repo, opts)

List repository events

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListRepoEvents(owner, repo, opts, (error, data, response) => {
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
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListRepoNotificationsForAuthenticatedUser

> [Thread] activityListRepoNotificationsForAuthenticatedUser(owner, repo, opts)

List repository notifications for the authenticated user

List all notifications for the current user.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'all': false, // Boolean | If `true`, show notifications marked as read.
  'participating': false, // Boolean | If `true`, only shows notifications in which the user is directly participating or mentioned.
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'before': "before_example", // String | Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListRepoNotificationsForAuthenticatedUser(owner, repo, opts, (error, data, response) => {
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
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **all** | **Boolean**| If &#x60;true&#x60;, show notifications marked as read. | [optional] [default to false]
 **participating** | **Boolean**| If &#x60;true&#x60;, only shows notifications in which the user is directly participating or mentioned. | [optional] [default to false]
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **before** | **String**| Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Thread]**](Thread.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListReposStarredByAuthenticatedUser

> [Repository] activityListReposStarredByAuthenticatedUser(opts)

List repositories starred by the authenticated user

Lists repositories the authenticated user has starred.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the &#x60;Accept&#x60; header:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let opts = {
  'sort': "'created'", // String | One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  'direction': "'desc'", // String | One of `asc` (ascending) or `desc` (descending).
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListReposStarredByAuthenticatedUser(opts, (error, data, response) => {
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
 **sort** | **String**| One of &#x60;created&#x60; (when the repository was starred) or &#x60;updated&#x60; (when it was last pushed to). | [optional] [default to &#39;created&#39;]
 **direction** | **String**| One of &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending). | [optional] [default to &#39;desc&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Repository]**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.github.v3.star+json


## activityListReposStarredByUser

> [Repository] activityListReposStarredByUser(username, opts)

List repositories starred by a user

Lists repositories a user has starred.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the &#x60;Accept&#x60; header:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let username = "username_example"; // String | 
let opts = {
  'sort': "'created'", // String | One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  'direction': "'desc'", // String | One of `asc` (ascending) or `desc` (descending).
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListReposStarredByUser(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **sort** | **String**| One of &#x60;created&#x60; (when the repository was starred) or &#x60;updated&#x60; (when it was last pushed to). | [optional] [default to &#39;created&#39;]
 **direction** | **String**| One of &#x60;asc&#x60; (ascending) or &#x60;desc&#x60; (descending). | [optional] [default to &#39;desc&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Repository]**](Repository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.github.v3.star+json


## activityListReposWatchedByUser

> [MinimalRepository] activityListReposWatchedByUser(username, opts)

List repositories watched by a user

Lists repositories a user is watching.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListReposWatchedByUser(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[MinimalRepository]**](MinimalRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListStargazersForRepo

> [SimpleUser] activityListStargazersForRepo(owner, repo, opts)

List stargazers

Lists the people that have starred the repository.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the &#x60;Accept&#x60; header:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListStargazersForRepo(owner, repo, opts, (error, data, response) => {
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
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.github.v3.star+json


## activityListWatchedReposForAuthenticatedUser

> [MinimalRepository] activityListWatchedReposForAuthenticatedUser(opts)

List repositories watched by the authenticated user

Lists repositories the authenticated user is watching.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListWatchedReposForAuthenticatedUser(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[MinimalRepository]**](MinimalRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityListWatchersForRepo

> [SimpleUser] activityListWatchersForRepo(owner, repo, opts)

List watchers

Lists the people watching the specified repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.activityListWatchersForRepo(owner, repo, opts, (error, data, response) => {
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
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityMarkNotificationsAsRead

> InlineResponse202 activityMarkNotificationsAsRead(opts)

Mark notifications as read

Marks all notifications as \&quot;read\&quot; removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a &#x60;202 Accepted&#x60; status and GitHub will run an asynchronous process to mark notifications as \&quot;read.\&quot; To check whether any \&quot;unread\&quot; notifications remain, you can use the [List notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter &#x60;all&#x3D;false&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let opts = {
  'inlineObject14': new GitHubV3RestApi.InlineObject14() // InlineObject14 | 
};
apiInstance.activityMarkNotificationsAsRead(opts, (error, data, response) => {
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
 **inlineObject14** | [**InlineObject14**](InlineObject14.md)|  | [optional] 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## activityMarkRepoNotificationsAsRead

> activityMarkRepoNotificationsAsRead(owner, repo, opts)

Mark repository notifications as read

Marks all notifications in a repository as \&quot;read\&quot; removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a &#x60;202 Accepted&#x60; status and GitHub will run an asynchronous process to mark notifications as \&quot;read.\&quot; To check whether any \&quot;unread\&quot; notifications remain, you can use the [List repository notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter &#x60;all&#x3D;false&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject97': new GitHubV3RestApi.InlineObject97() // InlineObject97 | 
};
apiInstance.activityMarkRepoNotificationsAsRead(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **inlineObject97** | [**InlineObject97**](InlineObject97.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## activityMarkThreadAsRead

> activityMarkThreadAsRead(threadId)

Mark a thread as read

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let threadId = 56; // Number | thread_id parameter
apiInstance.activityMarkThreadAsRead(threadId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **Number**| thread_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activitySetRepoSubscription

> RepositorySubscription activitySetRepoSubscription(owner, repo, opts)

Set a repository subscription

If you would like to watch a repository, set &#x60;subscribed&#x60; to &#x60;true&#x60;. If you would like to ignore notifications made within a repository, set &#x60;ignored&#x60; to &#x60;true&#x60;. If you would like to stop watching a repository, [delete the repository&#39;s subscription](https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription) completely.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject119': new GitHubV3RestApi.InlineObject119() // InlineObject119 | 
};
apiInstance.activitySetRepoSubscription(owner, repo, opts, (error, data, response) => {
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
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **inlineObject119** | [**InlineObject119**](InlineObject119.md)|  | [optional] 

### Return type

[**RepositorySubscription**](RepositorySubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## activitySetThreadSubscription

> ThreadSubscription activitySetThreadSubscription(threadId, opts)

Set a thread subscription

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.  You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.  Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription) endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let threadId = 56; // Number | thread_id parameter
let opts = {
  'inlineObject15': new GitHubV3RestApi.InlineObject15() // InlineObject15 | 
};
apiInstance.activitySetThreadSubscription(threadId, opts, (error, data, response) => {
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
 **threadId** | **Number**| thread_id parameter | 
 **inlineObject15** | [**InlineObject15**](InlineObject15.md)|  | [optional] 

### Return type

[**ThreadSubscription**](ThreadSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## activityStarRepoForAuthenticatedUser

> activityStarRepoForAuthenticatedUser(owner, repo)

Star a repository for the authenticated user

Note that you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.activityStarRepoForAuthenticatedUser(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## activityUnstarRepoForAuthenticatedUser

> activityUnstarRepoForAuthenticatedUser(owner, repo)

Unstar a repository for the authenticated user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActivityApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.activityUnstarRepoForAuthenticatedUser(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

