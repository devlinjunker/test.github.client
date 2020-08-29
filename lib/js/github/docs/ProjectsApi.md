# GitHubV3RestApi.ProjectsApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsAddCollaborator**](ProjectsApi.md#projectsAddCollaborator) | **PUT** /projects/{project_id}/collaborators/{username} | Add project collaborator
[**projectsCreateCard**](ProjectsApi.md#projectsCreateCard) | **POST** /projects/columns/{column_id}/cards | Create a project card
[**projectsCreateColumn**](ProjectsApi.md#projectsCreateColumn) | **POST** /projects/{project_id}/columns | Create a project column
[**projectsCreateForAuthenticatedUser**](ProjectsApi.md#projectsCreateForAuthenticatedUser) | **POST** /user/projects | Create a user project
[**projectsCreateForOrg**](ProjectsApi.md#projectsCreateForOrg) | **POST** /orgs/{org}/projects | Create an organization project
[**projectsCreateForRepo**](ProjectsApi.md#projectsCreateForRepo) | **POST** /repos/{owner}/{repo}/projects | Create a repository project
[**projectsDelete**](ProjectsApi.md#projectsDelete) | **DELETE** /projects/{project_id} | Delete a project
[**projectsDeleteCard**](ProjectsApi.md#projectsDeleteCard) | **DELETE** /projects/columns/cards/{card_id} | Delete a project card
[**projectsDeleteColumn**](ProjectsApi.md#projectsDeleteColumn) | **DELETE** /projects/columns/{column_id} | Delete a project column
[**projectsGet**](ProjectsApi.md#projectsGet) | **GET** /projects/{project_id} | Get a project
[**projectsGetCard**](ProjectsApi.md#projectsGetCard) | **GET** /projects/columns/cards/{card_id} | Get a project card
[**projectsGetColumn**](ProjectsApi.md#projectsGetColumn) | **GET** /projects/columns/{column_id} | Get a project column
[**projectsGetPermissionForUser**](ProjectsApi.md#projectsGetPermissionForUser) | **GET** /projects/{project_id}/collaborators/{username}/permission | Get project permission for a user
[**projectsListCards**](ProjectsApi.md#projectsListCards) | **GET** /projects/columns/{column_id}/cards | List project cards
[**projectsListCollaborators**](ProjectsApi.md#projectsListCollaborators) | **GET** /projects/{project_id}/collaborators | List project collaborators
[**projectsListColumns**](ProjectsApi.md#projectsListColumns) | **GET** /projects/{project_id}/columns | List project columns
[**projectsListForOrg**](ProjectsApi.md#projectsListForOrg) | **GET** /orgs/{org}/projects | List organization projects
[**projectsListForRepo**](ProjectsApi.md#projectsListForRepo) | **GET** /repos/{owner}/{repo}/projects | List repository projects
[**projectsListForUser**](ProjectsApi.md#projectsListForUser) | **GET** /users/{username}/projects | List user projects
[**projectsMoveCard**](ProjectsApi.md#projectsMoveCard) | **POST** /projects/columns/cards/{card_id}/moves | Move a project card
[**projectsMoveColumn**](ProjectsApi.md#projectsMoveColumn) | **POST** /projects/columns/{column_id}/moves | Move a project column
[**projectsRemoveCollaborator**](ProjectsApi.md#projectsRemoveCollaborator) | **DELETE** /projects/{project_id}/collaborators/{username} | Remove user as a collaborator
[**projectsUpdate**](ProjectsApi.md#projectsUpdate) | **PATCH** /projects/{project_id} | Update a project
[**projectsUpdateCard**](ProjectsApi.md#projectsUpdateCard) | **PATCH** /projects/columns/cards/{card_id} | Update an existing project card
[**projectsUpdateColumn**](ProjectsApi.md#projectsUpdateColumn) | **PATCH** /projects/columns/{column_id} | Update an existing project column



## projectsAddCollaborator

> projectsAddCollaborator(projectId, username, opts)

Add project collaborator

Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project &#x60;admin&#x60; to add a collaborator.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
let username = "username_example"; // String | 
let opts = {
  'inlineObject44': new GitHubV3RestApi.InlineObject44() // InlineObject44 | 
};
apiInstance.projectsAddCollaborator(projectId, username, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **username** | **String**|  | 
 **inlineObject44** | [**InlineObject44**](InlineObject44.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsCreateCard

> ProjectCard projectsCreateCard(columnId, opts)

Create a project card

**Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key.  Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let columnId = 56; // Number | column_id parameter
let opts = {
  'UNKNOWN_BASE_TYPE': new GitHubV3RestApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.projectsCreateCard(columnId, opts, (error, data, response) => {
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
 **columnId** | **Number**| column_id parameter | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**ProjectCard**](ProjectCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsCreateColumn

> ProjectColumn projectsCreateColumn(projectId, opts)

Create a project column

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
let opts = {
  'inlineObject45': new GitHubV3RestApi.InlineObject45() // InlineObject45 | 
};
apiInstance.projectsCreateColumn(projectId, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **inlineObject45** | [**InlineObject45**](InlineObject45.md)|  | [optional] 

### Return type

[**ProjectColumn**](ProjectColumn.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsCreateForAuthenticatedUser

> Project projectsCreateForAuthenticatedUser(opts)

Create a user project

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let opts = {
  'inlineObject143': new GitHubV3RestApi.InlineObject143() // InlineObject143 | 
};
apiInstance.projectsCreateForAuthenticatedUser(opts, (error, data, response) => {
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
 **inlineObject143** | [**InlineObject143**](InlineObject143.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsCreateForOrg

> Project projectsCreateForOrg(org, opts)

Create an organization project

Creates an organization project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject25': new GitHubV3RestApi.InlineObject25() // InlineObject25 | 
};
apiInstance.projectsCreateForOrg(org, opts, (error, data, response) => {
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
 **inlineObject25** | [**InlineObject25**](InlineObject25.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsCreateForRepo

> Project projectsCreateForRepo(owner, repo, opts)

Create a repository project

Creates a repository project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject100': new GitHubV3RestApi.InlineObject100() // InlineObject100 | 
};
apiInstance.projectsCreateForRepo(owner, repo, opts, (error, data, response) => {
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
 **inlineObject100** | [**InlineObject100**](InlineObject100.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsDelete

> projectsDelete(projectId)

Delete a project

Deletes a project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
apiInstance.projectsDelete(projectId, (error, data, response) => {
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
 **projectId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsDeleteCard

> projectsDeleteCard(cardId)

Delete a project card

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let cardId = 56; // Number | card_id parameter
apiInstance.projectsDeleteCard(cardId, (error, data, response) => {
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
 **cardId** | **Number**| card_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsDeleteColumn

> projectsDeleteColumn(columnId)

Delete a project column

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let columnId = 56; // Number | column_id parameter
apiInstance.projectsDeleteColumn(columnId, (error, data, response) => {
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
 **columnId** | **Number**| column_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsGet

> Project projectsGet(projectId)

Get a project

Gets a project by its &#x60;id&#x60;. Returns a &#x60;404 Not Found&#x60; status if projects are disabled. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
apiInstance.projectsGet(projectId, (error, data, response) => {
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
 **projectId** | **Number**|  | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsGetCard

> ProjectCard projectsGetCard(cardId)

Get a project card

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let cardId = 56; // Number | card_id parameter
apiInstance.projectsGetCard(cardId, (error, data, response) => {
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
 **cardId** | **Number**| card_id parameter | 

### Return type

[**ProjectCard**](ProjectCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsGetColumn

> ProjectColumn projectsGetColumn(columnId)

Get a project column

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let columnId = 56; // Number | column_id parameter
apiInstance.projectsGetColumn(columnId, (error, data, response) => {
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
 **columnId** | **Number**| column_id parameter | 

### Return type

[**ProjectColumn**](ProjectColumn.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsGetPermissionForUser

> RepositoryCollaboratorPermission projectsGetPermissionForUser(projectId, username)

Get project permission for a user

Returns the collaborator&#39;s permission level for an organization project. Possible values for the &#x60;permission&#x60; key: &#x60;admin&#x60;, &#x60;write&#x60;, &#x60;read&#x60;, &#x60;none&#x60;. You must be an organization owner or a project &#x60;admin&#x60; to review a user&#39;s permission level.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
let username = "username_example"; // String | 
apiInstance.projectsGetPermissionForUser(projectId, username, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **username** | **String**|  | 

### Return type

[**RepositoryCollaboratorPermission**](RepositoryCollaboratorPermission.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsListCards

> [ProjectCard] projectsListCards(columnId, opts)

List project cards

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let columnId = 56; // Number | column_id parameter
let opts = {
  'archivedState': "'not_archived'", // String | Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.projectsListCards(columnId, opts, (error, data, response) => {
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
 **columnId** | **Number**| column_id parameter | 
 **archivedState** | **String**| Filters the project cards that are returned by the card&#39;s state. Can be one of &#x60;all&#x60;,&#x60;archived&#x60;, or &#x60;not_archived&#x60;. | [optional] [default to &#39;not_archived&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[ProjectCard]**](ProjectCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsListCollaborators

> [SimpleUser] projectsListCollaborators(projectId, opts)

List project collaborators

Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project &#x60;admin&#x60; to list collaborators.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
let opts = {
  'affiliation': "'all'", // String | Filters the collaborators by their affiliation. Can be one of:   \\* `outside`: Outside collaborators of a project that are not a member of the project's organization.   \\* `direct`: Collaborators with permissions to a project, regardless of organization membership status.   \\* `all`: All collaborators the authenticated user can see.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.projectsListCollaborators(projectId, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **affiliation** | **String**| Filters the collaborators by their affiliation. Can be one of:   \\* &#x60;outside&#x60;: Outside collaborators of a project that are not a member of the project&#39;s organization.   \\* &#x60;direct&#x60;: Collaborators with permissions to a project, regardless of organization membership status.   \\* &#x60;all&#x60;: All collaborators the authenticated user can see. | [optional] [default to &#39;all&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsListColumns

> [ProjectColumn] projectsListColumns(projectId, opts)

List project columns

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.projectsListColumns(projectId, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[ProjectColumn]**](ProjectColumn.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsListForOrg

> [Project] projectsListForOrg(org, opts)

List organization projects

Lists the projects in an organization. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let org = "org_example"; // String | 
let opts = {
  'state': "'open'", // String | Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.projectsListForOrg(org, opts, (error, data, response) => {
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
 **state** | **String**| Indicates the state of the projects to return. Can be either &#x60;open&#x60;, &#x60;closed&#x60;, or &#x60;all&#x60;. | [optional] [default to &#39;open&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsListForRepo

> [Project] projectsListForRepo(owner, repo, opts)

List repository projects

Lists the projects in a repository. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'state': "'open'", // String | Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.projectsListForRepo(owner, repo, opts, (error, data, response) => {
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
 **state** | **String**| Indicates the state of the projects to return. Can be either &#x60;open&#x60;, &#x60;closed&#x60;, or &#x60;all&#x60;. | [optional] [default to &#39;open&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsListForUser

> [Project] projectsListForUser(username, opts)

List user projects

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let username = "username_example"; // String | 
let opts = {
  'state': "'open'", // String | Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.projectsListForUser(username, opts, (error, data, response) => {
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
 **state** | **String**| Indicates the state of the projects to return. Can be either &#x60;open&#x60;, &#x60;closed&#x60;, or &#x60;all&#x60;. | [optional] [default to &#39;open&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsMoveCard

> Object projectsMoveCard(cardId, opts)

Move a project card

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let cardId = 56; // Number | card_id parameter
let opts = {
  'inlineObject40': new GitHubV3RestApi.InlineObject40() // InlineObject40 | 
};
apiInstance.projectsMoveCard(cardId, opts, (error, data, response) => {
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
 **cardId** | **Number**| card_id parameter | 
 **inlineObject40** | [**InlineObject40**](InlineObject40.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsMoveColumn

> Object projectsMoveColumn(columnId, opts)

Move a project column

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let columnId = 56; // Number | column_id parameter
let opts = {
  'inlineObject42': new GitHubV3RestApi.InlineObject42() // InlineObject42 | 
};
apiInstance.projectsMoveColumn(columnId, opts, (error, data, response) => {
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
 **columnId** | **Number**| column_id parameter | 
 **inlineObject42** | [**InlineObject42**](InlineObject42.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsRemoveCollaborator

> projectsRemoveCollaborator(projectId, username)

Remove user as a collaborator

Removes a collaborator from an organization project. You must be an organization owner or a project &#x60;admin&#x60; to remove a collaborator.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
let username = "username_example"; // String | 
apiInstance.projectsRemoveCollaborator(projectId, username, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsUpdate

> Project projectsUpdate(projectId, opts)

Update a project

Updates a project board&#39;s information. Returns a &#x60;404 Not Found&#x60; status if projects are disabled. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let projectId = 56; // Number | 
let opts = {
  'inlineObject43': new GitHubV3RestApi.InlineObject43() // InlineObject43 | 
};
apiInstance.projectsUpdate(projectId, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **inlineObject43** | [**InlineObject43**](InlineObject43.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsUpdateCard

> ProjectCard projectsUpdateCard(cardId, opts)

Update an existing project card

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let cardId = 56; // Number | card_id parameter
let opts = {
  'inlineObject39': new GitHubV3RestApi.InlineObject39() // InlineObject39 | 
};
apiInstance.projectsUpdateCard(cardId, opts, (error, data, response) => {
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
 **cardId** | **Number**| card_id parameter | 
 **inlineObject39** | [**InlineObject39**](InlineObject39.md)|  | [optional] 

### Return type

[**ProjectCard**](ProjectCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsUpdateColumn

> ProjectColumn projectsUpdateColumn(columnId, opts)

Update an existing project column

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ProjectsApi();
let columnId = 56; // Number | column_id parameter
let opts = {
  'inlineObject41': new GitHubV3RestApi.InlineObject41() // InlineObject41 | 
};
apiInstance.projectsUpdateColumn(columnId, opts, (error, data, response) => {
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
 **columnId** | **Number**| column_id parameter | 
 **inlineObject41** | [**InlineObject41**](InlineObject41.md)|  | [optional] 

### Return type

[**ProjectColumn**](ProjectColumn.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

