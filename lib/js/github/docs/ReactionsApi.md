# GitHubV3RestApi.ReactionsApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reactionsCreateForCommitComment**](ReactionsApi.md#reactionsCreateForCommitComment) | **POST** /repos/{owner}/{repo}/comments/{comment_id}/reactions | Create reaction for a commit comment
[**reactionsCreateForIssue**](ReactionsApi.md#reactionsCreateForIssue) | **POST** /repos/{owner}/{repo}/issues/{issue_number}/reactions | Create reaction for an issue
[**reactionsCreateForIssueComment**](ReactionsApi.md#reactionsCreateForIssueComment) | **POST** /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions | Create reaction for an issue comment
[**reactionsCreateForPullRequestReviewComment**](ReactionsApi.md#reactionsCreateForPullRequestReviewComment) | **POST** /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions | Create reaction for a pull request review comment
[**reactionsCreateForTeamDiscussionCommentInOrg**](ReactionsApi.md#reactionsCreateForTeamDiscussionCommentInOrg) | **POST** /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions | Create reaction for a team discussion comment
[**reactionsCreateForTeamDiscussionCommentLegacy**](ReactionsApi.md#reactionsCreateForTeamDiscussionCommentLegacy) | **POST** /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions | Create reaction for a team discussion comment (Legacy)
[**reactionsCreateForTeamDiscussionInOrg**](ReactionsApi.md#reactionsCreateForTeamDiscussionInOrg) | **POST** /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions | Create reaction for a team discussion
[**reactionsCreateForTeamDiscussionLegacy**](ReactionsApi.md#reactionsCreateForTeamDiscussionLegacy) | **POST** /teams/{team_id}/discussions/{discussion_number}/reactions | Create reaction for a team discussion (Legacy)
[**reactionsDeleteForCommitComment**](ReactionsApi.md#reactionsDeleteForCommitComment) | **DELETE** /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id} | Delete a commit comment reaction
[**reactionsDeleteForIssue**](ReactionsApi.md#reactionsDeleteForIssue) | **DELETE** /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id} | Delete an issue reaction
[**reactionsDeleteForIssueComment**](ReactionsApi.md#reactionsDeleteForIssueComment) | **DELETE** /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id} | Delete an issue comment reaction
[**reactionsDeleteForPullRequestComment**](ReactionsApi.md#reactionsDeleteForPullRequestComment) | **DELETE** /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id} | Delete a pull request comment reaction
[**reactionsDeleteForTeamDiscussion**](ReactionsApi.md#reactionsDeleteForTeamDiscussion) | **DELETE** /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id} | Delete team discussion reaction
[**reactionsDeleteForTeamDiscussionComment**](ReactionsApi.md#reactionsDeleteForTeamDiscussionComment) | **DELETE** /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id} | Delete team discussion comment reaction
[**reactionsDeleteLegacy**](ReactionsApi.md#reactionsDeleteLegacy) | **DELETE** /reactions/{reaction_id} | Delete a reaction (Legacy)
[**reactionsListForCommitComment**](ReactionsApi.md#reactionsListForCommitComment) | **GET** /repos/{owner}/{repo}/comments/{comment_id}/reactions | List reactions for a commit comment
[**reactionsListForIssue**](ReactionsApi.md#reactionsListForIssue) | **GET** /repos/{owner}/{repo}/issues/{issue_number}/reactions | List reactions for an issue
[**reactionsListForIssueComment**](ReactionsApi.md#reactionsListForIssueComment) | **GET** /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions | List reactions for an issue comment
[**reactionsListForPullRequestReviewComment**](ReactionsApi.md#reactionsListForPullRequestReviewComment) | **GET** /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions | List reactions for a pull request review comment
[**reactionsListForTeamDiscussionCommentInOrg**](ReactionsApi.md#reactionsListForTeamDiscussionCommentInOrg) | **GET** /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions | List reactions for a team discussion comment
[**reactionsListForTeamDiscussionCommentLegacy**](ReactionsApi.md#reactionsListForTeamDiscussionCommentLegacy) | **GET** /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions | List reactions for a team discussion comment (Legacy)
[**reactionsListForTeamDiscussionInOrg**](ReactionsApi.md#reactionsListForTeamDiscussionInOrg) | **GET** /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions | List reactions for a team discussion
[**reactionsListForTeamDiscussionLegacy**](ReactionsApi.md#reactionsListForTeamDiscussionLegacy) | **GET** /teams/{team_id}/discussions/{discussion_number}/reactions | List reactions for a team discussion (Legacy)



## reactionsCreateForCommitComment

> Reaction reactionsCreateForCommitComment(owner, repo, commentId, opts)

Create reaction for a commit comment

Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this commit comment.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let opts = {
  'inlineObject58': new GitHubV3RestApi.InlineObject58() // InlineObject58 | 
};
apiInstance.reactionsCreateForCommitComment(owner, repo, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **inlineObject58** | [**InlineObject58**](InlineObject58.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsCreateForIssue

> Reaction reactionsCreateForIssue(owner, repo, issueNumber, opts)

Create reaction for an issue

Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this issue.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let issueNumber = 56; // Number | issue_number parameter
let opts = {
  'inlineObject90': new GitHubV3RestApi.InlineObject90() // InlineObject90 | 
};
apiInstance.reactionsCreateForIssue(owner, repo, issueNumber, opts, (error, data, response) => {
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
 **issueNumber** | **Number**| issue_number parameter | 
 **inlineObject90** | [**InlineObject90**](InlineObject90.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsCreateForIssueComment

> Reaction reactionsCreateForIssueComment(owner, repo, commentId, opts)

Create reaction for an issue comment

Create a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this issue comment.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let opts = {
  'inlineObject82': new GitHubV3RestApi.InlineObject82() // InlineObject82 | 
};
apiInstance.reactionsCreateForIssueComment(owner, repo, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **inlineObject82** | [**InlineObject82**](InlineObject82.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsCreateForPullRequestReviewComment

> Reaction reactionsCreateForPullRequestReviewComment(owner, repo, commentId, opts)

Create reaction for a pull request review comment

Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this pull request review comment.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let opts = {
  'inlineObject103': new GitHubV3RestApi.InlineObject103() // InlineObject103 | 
};
apiInstance.reactionsCreateForPullRequestReviewComment(owner, repo, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **inlineObject103** | [**InlineObject103**](InlineObject103.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsCreateForTeamDiscussionCommentInOrg

> Reaction reactionsCreateForTeamDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, opts)

Create reaction for a team discussion comment

Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion comment.  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let org = "org_example"; // String | 
let teamSlug = "teamSlug_example"; // String | team_slug parameter
let discussionNumber = 56; // Number | 
let commentNumber = 56; // Number | 
let opts = {
  'inlineObject33': new GitHubV3RestApi.InlineObject33() // InlineObject33 | 
};
apiInstance.reactionsCreateForTeamDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, opts, (error, data, response) => {
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
 **teamSlug** | **String**| team_slug parameter | 
 **discussionNumber** | **Number**|  | 
 **commentNumber** | **Number**|  | 
 **inlineObject33** | [**InlineObject33**](InlineObject33.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsCreateForTeamDiscussionCommentLegacy

> Reaction reactionsCreateForTeamDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, opts)

Create reaction for a team discussion comment (Legacy)

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;Create reaction for a team discussion comment&#x60;](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment) endpoint.  Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion comment.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let teamId = 56; // Number | 
let discussionNumber = 56; // Number | 
let commentNumber = 56; // Number | 
let opts = {
  'inlineObject131': new GitHubV3RestApi.InlineObject131() // InlineObject131 | 
};
apiInstance.reactionsCreateForTeamDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, opts, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **discussionNumber** | **Number**|  | 
 **commentNumber** | **Number**|  | 
 **inlineObject131** | [**InlineObject131**](InlineObject131.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsCreateForTeamDiscussionInOrg

> Reaction reactionsCreateForTeamDiscussionInOrg(org, teamSlug, discussionNumber, opts)

Create reaction for a team discussion

Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion.  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let org = "org_example"; // String | 
let teamSlug = "teamSlug_example"; // String | team_slug parameter
let discussionNumber = 56; // Number | 
let opts = {
  'inlineObject34': new GitHubV3RestApi.InlineObject34() // InlineObject34 | 
};
apiInstance.reactionsCreateForTeamDiscussionInOrg(org, teamSlug, discussionNumber, opts, (error, data, response) => {
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
 **teamSlug** | **String**| team_slug parameter | 
 **discussionNumber** | **Number**|  | 
 **inlineObject34** | [**InlineObject34**](InlineObject34.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsCreateForTeamDiscussionLegacy

> Reaction reactionsCreateForTeamDiscussionLegacy(teamId, discussionNumber, opts)

Create reaction for a team discussion (Legacy)

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;Create reaction for a team discussion&#x60;](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion) endpoint.  Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let teamId = 56; // Number | 
let discussionNumber = 56; // Number | 
let opts = {
  'inlineObject132': new GitHubV3RestApi.InlineObject132() // InlineObject132 | 
};
apiInstance.reactionsCreateForTeamDiscussionLegacy(teamId, discussionNumber, opts, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **discussionNumber** | **Number**|  | 
 **inlineObject132** | [**InlineObject132**](InlineObject132.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reactionsDeleteForCommitComment

> reactionsDeleteForCommitComment(owner, repo, commentId, reactionId)

Delete a commit comment reaction

**Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id&#x60;.  Delete a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let reactionId = 56; // Number | 
apiInstance.reactionsDeleteForCommitComment(owner, repo, commentId, reactionId, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **reactionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reactionsDeleteForIssue

> reactionsDeleteForIssue(owner, repo, issueNumber, reactionId)

Delete an issue reaction

**Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id&#x60;.  Delete a reaction to an [issue](https://developer.github.com/v3/issues/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let issueNumber = 56; // Number | issue_number parameter
let reactionId = 56; // Number | 
apiInstance.reactionsDeleteForIssue(owner, repo, issueNumber, reactionId, (error, data, response) => {
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
 **issueNumber** | **Number**| issue_number parameter | 
 **reactionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reactionsDeleteForIssueComment

> reactionsDeleteForIssueComment(owner, repo, commentId, reactionId)

Delete an issue comment reaction

**Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id&#x60;.  Delete a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let reactionId = 56; // Number | 
apiInstance.reactionsDeleteForIssueComment(owner, repo, commentId, reactionId, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **reactionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reactionsDeleteForPullRequestComment

> reactionsDeleteForPullRequestComment(owner, repo, commentId, reactionId)

Delete a pull request comment reaction

**Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.&#x60;  Delete a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let reactionId = 56; // Number | 
apiInstance.reactionsDeleteForPullRequestComment(owner, repo, commentId, reactionId, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **reactionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reactionsDeleteForTeamDiscussion

> reactionsDeleteForTeamDiscussion(org, teamSlug, discussionNumber, reactionId)

Delete team discussion reaction

**Note:** You can also specify a team or organization with &#x60;team_id&#x60; and &#x60;org_id&#x60; using the route &#x60;DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id&#x60;.  Delete a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let org = "org_example"; // String | 
let teamSlug = "teamSlug_example"; // String | team_slug parameter
let discussionNumber = 56; // Number | 
let reactionId = 56; // Number | 
apiInstance.reactionsDeleteForTeamDiscussion(org, teamSlug, discussionNumber, reactionId, (error, data, response) => {
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
 **org** | **String**|  | 
 **teamSlug** | **String**| team_slug parameter | 
 **discussionNumber** | **Number**|  | 
 **reactionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reactionsDeleteForTeamDiscussionComment

> reactionsDeleteForTeamDiscussionComment(org, teamSlug, discussionNumber, commentNumber, reactionId)

Delete team discussion comment reaction

**Note:** You can also specify a team or organization with &#x60;team_id&#x60; and &#x60;org_id&#x60; using the route &#x60;DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id&#x60;.  Delete a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let org = "org_example"; // String | 
let teamSlug = "teamSlug_example"; // String | team_slug parameter
let discussionNumber = 56; // Number | 
let commentNumber = 56; // Number | 
let reactionId = 56; // Number | 
apiInstance.reactionsDeleteForTeamDiscussionComment(org, teamSlug, discussionNumber, commentNumber, reactionId, (error, data, response) => {
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
 **org** | **String**|  | 
 **teamSlug** | **String**| team_slug parameter | 
 **discussionNumber** | **Number**|  | 
 **commentNumber** | **Number**|  | 
 **reactionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reactionsDeleteLegacy

> reactionsDeleteLegacy(reactionId)

Delete a reaction (Legacy)

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).  OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let reactionId = 56; // Number | 
apiInstance.reactionsDeleteLegacy(reactionId, (error, data, response) => {
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
 **reactionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForCommitComment

> [Reaction] reactionsListForCommitComment(owner, repo, commentId, opts)

List reactions for a commit comment

List the reactions to a [commit comment](https://developer.github.com/v3/repos/comments/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a commit comment.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForCommitComment(owner, repo, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a commit comment. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForIssue

> [Reaction] reactionsListForIssue(owner, repo, issueNumber, opts)

List reactions for an issue

List the reactions to an [issue](https://developer.github.com/v3/issues/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let issueNumber = 56; // Number | issue_number parameter
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForIssue(owner, repo, issueNumber, opts, (error, data, response) => {
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
 **issueNumber** | **Number**| issue_number parameter | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForIssueComment

> [Reaction] reactionsListForIssueComment(owner, repo, commentId, opts)

List reactions for an issue comment

List the reactions to an [issue comment](https://developer.github.com/v3/issues/comments/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue comment.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForIssueComment(owner, repo, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue comment. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForPullRequestReviewComment

> [Reaction] reactionsListForPullRequestReviewComment(owner, repo, commentId, opts)

List reactions for a pull request review comment

List the reactions to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commentId = 56; // Number | comment_id parameter
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForPullRequestReviewComment(owner, repo, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**| comment_id parameter | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a pull request review comment. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForTeamDiscussionCommentInOrg

> [Reaction] reactionsListForTeamDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, opts)

List reactions for a team discussion comment

List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let org = "org_example"; // String | 
let teamSlug = "teamSlug_example"; // String | team_slug parameter
let discussionNumber = 56; // Number | 
let commentNumber = 56; // Number | 
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForTeamDiscussionCommentInOrg(org, teamSlug, discussionNumber, commentNumber, opts, (error, data, response) => {
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
 **teamSlug** | **String**| team_slug parameter | 
 **discussionNumber** | **Number**|  | 
 **commentNumber** | **Number**|  | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForTeamDiscussionCommentLegacy

> [Reaction] reactionsListForTeamDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, opts)

List reactions for a team discussion comment (Legacy)

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;List reactions for a team discussion comment&#x60;](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment) endpoint.  List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let teamId = 56; // Number | 
let discussionNumber = 56; // Number | 
let commentNumber = 56; // Number | 
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForTeamDiscussionCommentLegacy(teamId, discussionNumber, commentNumber, opts, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **discussionNumber** | **Number**|  | 
 **commentNumber** | **Number**|  | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForTeamDiscussionInOrg

> [Reaction] reactionsListForTeamDiscussionInOrg(org, teamSlug, discussionNumber, opts)

List reactions for a team discussion

List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let org = "org_example"; // String | 
let teamSlug = "teamSlug_example"; // String | team_slug parameter
let discussionNumber = 56; // Number | 
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForTeamDiscussionInOrg(org, teamSlug, discussionNumber, opts, (error, data, response) => {
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
 **teamSlug** | **String**| team_slug parameter | 
 **discussionNumber** | **Number**|  | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactionsListForTeamDiscussionLegacy

> [Reaction] reactionsListForTeamDiscussionLegacy(teamId, discussionNumber, opts)

List reactions for a team discussion (Legacy)

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;List reactions for a team discussion&#x60;](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion) endpoint.  List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ReactionsApi();
let teamId = 56; // Number | 
let discussionNumber = 56; // Number | 
let opts = {
  'content': "content_example", // String | Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.reactionsListForTeamDiscussionLegacy(teamId, discussionNumber, opts, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **discussionNumber** | **Number**|  | 
 **content** | **String**| Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

