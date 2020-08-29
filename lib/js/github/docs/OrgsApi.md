# GitHubV3RestApi.OrgsApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orgsBlockUser**](OrgsApi.md#orgsBlockUser) | **PUT** /orgs/{org}/blocks/{username} | Block a user from an organization
[**orgsCheckBlockedUser**](OrgsApi.md#orgsCheckBlockedUser) | **GET** /orgs/{org}/blocks/{username} | Check if a user is blocked by an organization
[**orgsCheckMembershipForUser**](OrgsApi.md#orgsCheckMembershipForUser) | **GET** /orgs/{org}/members/{username} | Check organization membership for a user
[**orgsCheckPublicMembershipForUser**](OrgsApi.md#orgsCheckPublicMembershipForUser) | **GET** /orgs/{org}/public_members/{username} | Check public organization membership for a user
[**orgsConvertMemberToOutsideCollaborator**](OrgsApi.md#orgsConvertMemberToOutsideCollaborator) | **PUT** /orgs/{org}/outside_collaborators/{username} | Convert an organization member to outside collaborator
[**orgsCreateInvitation**](OrgsApi.md#orgsCreateInvitation) | **POST** /orgs/{org}/invitations | Create an organization invitation
[**orgsCreateWebhook**](OrgsApi.md#orgsCreateWebhook) | **POST** /orgs/{org}/hooks | Create an organization webhook
[**orgsDeleteWebhook**](OrgsApi.md#orgsDeleteWebhook) | **DELETE** /orgs/{org}/hooks/{hook_id} | Delete an organization webhook
[**orgsGet**](OrgsApi.md#orgsGet) | **GET** /orgs/{org} | Get an organization
[**orgsGetMembershipForAuthenticatedUser**](OrgsApi.md#orgsGetMembershipForAuthenticatedUser) | **GET** /user/memberships/orgs/{org} | Get an organization membership for the authenticated user
[**orgsGetMembershipForUser**](OrgsApi.md#orgsGetMembershipForUser) | **GET** /orgs/{org}/memberships/{username} | Get organization membership for a user
[**orgsGetWebhook**](OrgsApi.md#orgsGetWebhook) | **GET** /orgs/{org}/hooks/{hook_id} | Get an organization webhook
[**orgsList**](OrgsApi.md#orgsList) | **GET** /organizations | List organizations
[**orgsListAppInstallations**](OrgsApi.md#orgsListAppInstallations) | **GET** /orgs/{org}/installations | List app installations for an organization
[**orgsListBlockedUsers**](OrgsApi.md#orgsListBlockedUsers) | **GET** /orgs/{org}/blocks | List users blocked by an organization
[**orgsListForAuthenticatedUser**](OrgsApi.md#orgsListForAuthenticatedUser) | **GET** /user/orgs | List organizations for the authenticated user
[**orgsListForUser**](OrgsApi.md#orgsListForUser) | **GET** /users/{username}/orgs | List organizations for a user
[**orgsListInvitationTeams**](OrgsApi.md#orgsListInvitationTeams) | **GET** /orgs/{org}/invitations/{invitation_id}/teams | List organization invitation teams
[**orgsListMembers**](OrgsApi.md#orgsListMembers) | **GET** /orgs/{org}/members | List organization members
[**orgsListMembershipsForAuthenticatedUser**](OrgsApi.md#orgsListMembershipsForAuthenticatedUser) | **GET** /user/memberships/orgs | List organization memberships for the authenticated user
[**orgsListOutsideCollaborators**](OrgsApi.md#orgsListOutsideCollaborators) | **GET** /orgs/{org}/outside_collaborators | List outside collaborators for an organization
[**orgsListPendingInvitations**](OrgsApi.md#orgsListPendingInvitations) | **GET** /orgs/{org}/invitations | List pending organization invitations
[**orgsListPublicMembers**](OrgsApi.md#orgsListPublicMembers) | **GET** /orgs/{org}/public_members | List public organization members
[**orgsListSamlSsoAuthorizations**](OrgsApi.md#orgsListSamlSsoAuthorizations) | **GET** /orgs/{org}/credential-authorizations | List SAML SSO authorizations for an organization
[**orgsListWebhooks**](OrgsApi.md#orgsListWebhooks) | **GET** /orgs/{org}/hooks | List organization webhooks
[**orgsPingWebhook**](OrgsApi.md#orgsPingWebhook) | **POST** /orgs/{org}/hooks/{hook_id}/pings | Ping an organization webhook
[**orgsRemoveMember**](OrgsApi.md#orgsRemoveMember) | **DELETE** /orgs/{org}/members/{username} | Remove an organization member
[**orgsRemoveMembershipForUser**](OrgsApi.md#orgsRemoveMembershipForUser) | **DELETE** /orgs/{org}/memberships/{username} | Remove organization membership for a user
[**orgsRemoveOutsideCollaborator**](OrgsApi.md#orgsRemoveOutsideCollaborator) | **DELETE** /orgs/{org}/outside_collaborators/{username} | Remove outside collaborator from an organization
[**orgsRemovePublicMembershipForAuthenticatedUser**](OrgsApi.md#orgsRemovePublicMembershipForAuthenticatedUser) | **DELETE** /orgs/{org}/public_members/{username} | Remove public organization membership for the authenticated user
[**orgsRemoveSamlSsoAuthorization**](OrgsApi.md#orgsRemoveSamlSsoAuthorization) | **DELETE** /orgs/{org}/credential-authorizations/{credential_id} | Remove a SAML SSO authorization for an organization
[**orgsSetMembershipForUser**](OrgsApi.md#orgsSetMembershipForUser) | **PUT** /orgs/{org}/memberships/{username} | Set organization membership for a user
[**orgsSetPublicMembershipForAuthenticatedUser**](OrgsApi.md#orgsSetPublicMembershipForAuthenticatedUser) | **PUT** /orgs/{org}/public_members/{username} | Set public organization membership for the authenticated user
[**orgsUnblockUser**](OrgsApi.md#orgsUnblockUser) | **DELETE** /orgs/{org}/blocks/{username} | Unblock a user from an organization
[**orgsUpdate**](OrgsApi.md#orgsUpdate) | **PATCH** /orgs/{org} | Update an organization
[**orgsUpdateMembershipForAuthenticatedUser**](OrgsApi.md#orgsUpdateMembershipForAuthenticatedUser) | **PATCH** /user/memberships/orgs/{org} | Update an organization membership for the authenticated user
[**orgsUpdateWebhook**](OrgsApi.md#orgsUpdateWebhook) | **PATCH** /orgs/{org}/hooks/{hook_id} | Update an organization webhook



## orgsBlockUser

> orgsBlockUser(org, username)

Block a user from an organization

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsBlockUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsCheckBlockedUser

> orgsCheckBlockedUser(org, username)

Check if a user is blocked by an organization

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsCheckBlockedUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsCheckMembershipForUser

> orgsCheckMembershipForUser(org, username)

Check organization membership for a user

Check if a user is, publicly or privately, a member of the organization.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsCheckMembershipForUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## orgsCheckPublicMembershipForUser

> orgsCheckPublicMembershipForUser(org, username)

Check public organization membership for a user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsCheckPublicMembershipForUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## orgsConvertMemberToOutsideCollaborator

> orgsConvertMemberToOutsideCollaborator(org, username)

Convert an organization member to outside collaborator

When an organization member is converted to an outside collaborator, they&#39;ll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see \&quot;[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)\&quot;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsConvertMemberToOutsideCollaborator(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsCreateInvitation

> OrganizationInvitation orgsCreateInvitation(org, opts)

Create an organization invitation

Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject22': new GitHubV3RestApi.InlineObject22() // InlineObject22 | 
};
apiInstance.orgsCreateInvitation(org, opts, (error, data, response) => {
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
 **inlineObject22** | [**InlineObject22**](InlineObject22.md)|  | [optional] 

### Return type

[**OrganizationInvitation**](OrganizationInvitation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orgsCreateWebhook

> OrgHook orgsCreateWebhook(org, opts)

Create an organization webhook

Here&#39;s how you can create a hook that posts payloads in JSON format:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject19': new GitHubV3RestApi.InlineObject19() // InlineObject19 | 
};
apiInstance.orgsCreateWebhook(org, opts, (error, data, response) => {
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
 **inlineObject19** | [**InlineObject19**](InlineObject19.md)|  | [optional] 

### Return type

[**OrgHook**](OrgHook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orgsDeleteWebhook

> orgsDeleteWebhook(org, hookId)

Delete an organization webhook

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let hookId = 56; // Number | 
apiInstance.orgsDeleteWebhook(org, hookId, (error, data, response) => {
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
 **hookId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsGet

> OrganizationFull orgsGet(org)

Get an organization

To see many of the organization response values, you need to be an authenticated organization owner with the &#x60;admin:org&#x60; scope. When the value of &#x60;two_factor_requirement_enabled&#x60; is &#x60;true&#x60;, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).  GitHub Apps with the &#x60;Organization plan&#x60; permission can use this endpoint to retrieve information about an organization&#39;s GitHub plan. See \&quot;[Authenticating with GitHub Apps](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/)\&quot; for details. For an example response, see \&quot;[Response with GitHub plan information](https://developer.github.com/v3/orgs/#response-with-github-plan-information).\&quot;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
apiInstance.orgsGet(org, (error, data, response) => {
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

### Return type

[**OrganizationFull**](OrganizationFull.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsGetMembershipForAuthenticatedUser

> OrgMembership orgsGetMembershipForAuthenticatedUser(org)

Get an organization membership for the authenticated user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
apiInstance.orgsGetMembershipForAuthenticatedUser(org, (error, data, response) => {
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

### Return type

[**OrgMembership**](OrgMembership.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsGetMembershipForUser

> OrgMembership orgsGetMembershipForUser(org, username)

Get organization membership for a user

In order to get a user&#39;s membership with an organization, the authenticated user must be an organization member.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsGetMembershipForUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**OrgMembership**](OrgMembership.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsGetWebhook

> OrgHook orgsGetWebhook(org, hookId)

Get an organization webhook

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let hookId = 56; // Number | 
apiInstance.orgsGetWebhook(org, hookId, (error, data, response) => {
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
 **hookId** | **Number**|  | 

### Return type

[**OrgHook**](OrgHook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsList

> [OrganizationSimple] orgsList(opts)

List organizations

Lists all organizations, in the order that they were created on GitHub.  **Note:** Pagination is powered exclusively by the &#x60;since&#x60; parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of organizations.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let opts = {
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30 // Number | Results per page (max 100)
};
apiInstance.orgsList(opts, (error, data, response) => {
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
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]

### Return type

[**[OrganizationSimple]**](OrganizationSimple.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListAppInstallations

> InlineResponse2005 orgsListAppInstallations(org, opts)

List app installations for an organization

Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with &#x60;admin:read&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListAppInstallations(org, opts, (error, data, response) => {
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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListBlockedUsers

> [SimpleUser] orgsListBlockedUsers(org)

List users blocked by an organization

List the users blocked by an organization.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
apiInstance.orgsListBlockedUsers(org, (error, data, response) => {
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

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListForAuthenticatedUser

> [OrganizationSimple] orgsListForAuthenticatedUser(opts)

List organizations for the authenticated user

List organizations for the authenticated user.  **OAuth scope requirements**  This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with &#x60;read:org&#x60; scope, you can publicize your organization membership with &#x60;user&#x60; scope, etc.). Therefore, this API requires at least &#x60;user&#x60; or &#x60;read:org&#x60; scope. OAuth requests with insufficient scope receive a &#x60;403 Forbidden&#x60; response.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListForAuthenticatedUser(opts, (error, data, response) => {
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

[**[OrganizationSimple]**](OrganizationSimple.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListForUser

> [OrganizationSimple] orgsListForUser(username, opts)

List organizations for a user

List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.  This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://developer.github.com/v3/orgs/#list-organizations-for-the-authenticated-user) API instead.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListForUser(username, opts, (error, data, response) => {
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

[**[OrganizationSimple]**](OrganizationSimple.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListInvitationTeams

> [Team] orgsListInvitationTeams(org, invitationId, opts)

List organization invitation teams

List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let invitationId = 56; // Number | invitation_id parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListInvitationTeams(org, invitationId, opts, (error, data, response) => {
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
 **invitationId** | **Number**| invitation_id parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Team]**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListMembers

> [SimpleUser] orgsListMembers(org, opts)

List organization members

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'filter': "'all'", // String | Filter members returned in the list. Can be one of:   \\* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.   \\* `all` - All members the authenticated user can see.
  'role': "'all'", // String | Filter members returned by their role. Can be one of:   \\* `all` - All members of the organization, regardless of role.   \\* `admin` - Organization owners.   \\* `member` - Non-owner organization members.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListMembers(org, opts, (error, data, response) => {
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
 **filter** | **String**| Filter members returned in the list. Can be one of:   \\* &#x60;2fa_disabled&#x60; - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.   \\* &#x60;all&#x60; - All members the authenticated user can see. | [optional] [default to &#39;all&#39;]
 **role** | **String**| Filter members returned by their role. Can be one of:   \\* &#x60;all&#x60; - All members of the organization, regardless of role.   \\* &#x60;admin&#x60; - Organization owners.   \\* &#x60;member&#x60; - Non-owner organization members. | [optional] [default to &#39;all&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListMembershipsForAuthenticatedUser

> [OrgMembership] orgsListMembershipsForAuthenticatedUser(opts)

List organization memberships for the authenticated user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let opts = {
  'state': "state_example", // String | Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListMembershipsForAuthenticatedUser(opts, (error, data, response) => {
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
 **state** | **String**| Indicates the state of the memberships to return. Can be either &#x60;active&#x60; or &#x60;pending&#x60;. If not specified, the API returns both active and pending memberships. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[OrgMembership]**](OrgMembership.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListOutsideCollaborators

> [SimpleUser] orgsListOutsideCollaborators(org, opts)

List outside collaborators for an organization

List all users who are outside collaborators of an organization.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'filter': "'all'", // String | Filter the list of outside collaborators. Can be one of:   \\* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.   \\* `all`: All outside collaborators.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListOutsideCollaborators(org, opts, (error, data, response) => {
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
 **filter** | **String**| Filter the list of outside collaborators. Can be one of:   \\* &#x60;2fa_disabled&#x60;: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.   \\* &#x60;all&#x60;: All outside collaborators. | [optional] [default to &#39;all&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListPendingInvitations

> [OrganizationInvitation] orgsListPendingInvitations(org, opts)

List pending organization invitations

The return hash contains a &#x60;role&#x60; field which refers to the Organization Invitation role and will be one of the following values: &#x60;direct_member&#x60;, &#x60;admin&#x60;, &#x60;billing_manager&#x60;, &#x60;hiring_manager&#x60;, or &#x60;reinstate&#x60;. If the invitee is not a GitHub member, the &#x60;login&#x60; field in the return hash will be &#x60;null&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListPendingInvitations(org, opts, (error, data, response) => {
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

[**[OrganizationInvitation]**](OrganizationInvitation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListPublicMembers

> [SimpleUser] orgsListPublicMembers(org, opts)

List public organization members

Members of an organization can choose to have their membership publicized or not.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListPublicMembers(org, opts, (error, data, response) => {
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

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListSamlSsoAuthorizations

> [CredentialAuthorization] orgsListSamlSsoAuthorizations(org)

List SAML SSO authorizations for an organization

Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products).  An authenticated organization owner with the &#x60;read:org&#x60; scope can list all credential authorizations for an organization that uses SAML single sign-on (SSO). The credentials are either personal access tokens or SSH keys that organization members have authorized for the organization. For more information, see [About authentication with SAML single sign-on](https://help.github.com/en/articles/about-authentication-with-saml-single-sign-on).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
apiInstance.orgsListSamlSsoAuthorizations(org, (error, data, response) => {
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

### Return type

[**[CredentialAuthorization]**](CredentialAuthorization.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsListWebhooks

> [OrgHook] orgsListWebhooks(org, opts)

List organization webhooks

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.orgsListWebhooks(org, opts, (error, data, response) => {
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

[**[OrgHook]**](OrgHook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsPingWebhook

> orgsPingWebhook(org, hookId)

Ping an organization webhook

This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let hookId = 56; // Number | 
apiInstance.orgsPingWebhook(org, hookId, (error, data, response) => {
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
 **hookId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsRemoveMember

> orgsRemoveMember(org, username)

Remove an organization member

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization&#39;s repositories.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsRemoveMember(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsRemoveMembershipForUser

> orgsRemoveMembershipForUser(org, username)

Remove organization membership for a user

In order to remove a user&#39;s membership with an organization, the authenticated user must be an organization owner.  If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsRemoveMembershipForUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsRemoveOutsideCollaborator

> orgsRemoveOutsideCollaborator(org, username)

Remove outside collaborator from an organization

Removing a user from this list will remove them from all the organization&#39;s repositories.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsRemoveOutsideCollaborator(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsRemovePublicMembershipForAuthenticatedUser

> orgsRemovePublicMembershipForAuthenticatedUser(org, username)

Remove public organization membership for the authenticated user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsRemovePublicMembershipForAuthenticatedUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## orgsRemoveSamlSsoAuthorization

> orgsRemoveSamlSsoAuthorization(org, credentialId)

Remove a SAML SSO authorization for an organization

Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products).  An authenticated organization owner with the &#x60;admin:org&#x60; scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone&#39;s credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let credentialId = 56; // Number | credential_id parameter
apiInstance.orgsRemoveSamlSsoAuthorization(org, credentialId, (error, data, response) => {
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
 **credentialId** | **Number**| credential_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsSetMembershipForUser

> OrgMembership orgsSetMembershipForUser(org, username, opts)

Set organization membership for a user

Only authenticated organization owners can add a member to the organization or update the member&#39;s role.  *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user&#39;s [membership status](https://developer.github.com/v3/orgs/members/#get-organization-membership-for-a-user) will be &#x60;pending&#x60; until they accept the invitation.      *   Authenticated users can _update_ a user&#39;s membership by passing the &#x60;role&#x60; parameter. If the authenticated user changes a member&#39;s role to &#x60;admin&#x60;, the affected user will receive an email notifying them that they&#39;ve been made an organization owner. If the authenticated user changes an owner&#39;s role to &#x60;member&#x60;, no email will be sent.  **Rate limits**  To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
let opts = {
  'inlineObject23': new GitHubV3RestApi.InlineObject23() // InlineObject23 | 
};
apiInstance.orgsSetMembershipForUser(org, username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **inlineObject23** | [**InlineObject23**](InlineObject23.md)|  | [optional] 

### Return type

[**OrgMembership**](OrgMembership.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orgsSetPublicMembershipForAuthenticatedUser

> orgsSetPublicMembershipForAuthenticatedUser(org, username)

Set public organization membership for the authenticated user

The user can publicize their own membership. (A user cannot publicize the membership for another user.)  Note that you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsSetPublicMembershipForAuthenticatedUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orgsUnblockUser

> orgsUnblockUser(org, username)

Unblock a user from an organization

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let username = "username_example"; // String | 
apiInstance.orgsUnblockUser(org, username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## orgsUpdate

> OrganizationFull orgsUpdate(org, opts)

Update an organization

**Parameter Deprecation Notice:** GitHub will replace and discontinue &#x60;members_allowed_repository_creation_type&#x60; in favor of more granular permissions. The new input parameters are &#x60;members_can_create_public_repositories&#x60;, &#x60;members_can_create_private_repositories&#x60; for all organizations and &#x60;members_can_create_internal_repositories&#x60; for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).  Enables an authenticated organization owner with the &#x60;admin:org&#x60; scope to update the organization&#39;s profile and member privileges.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject16': new GitHubV3RestApi.InlineObject16() // InlineObject16 | 
};
apiInstance.orgsUpdate(org, opts, (error, data, response) => {
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
 **inlineObject16** | [**InlineObject16**](InlineObject16.md)|  | [optional] 

### Return type

[**OrganizationFull**](OrganizationFull.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orgsUpdateMembershipForAuthenticatedUser

> OrgMembership orgsUpdateMembershipForAuthenticatedUser(org, opts)

Update an organization membership for the authenticated user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject141': new GitHubV3RestApi.InlineObject141() // InlineObject141 | 
};
apiInstance.orgsUpdateMembershipForAuthenticatedUser(org, opts, (error, data, response) => {
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
 **inlineObject141** | [**InlineObject141**](InlineObject141.md)|  | [optional] 

### Return type

[**OrgMembership**](OrgMembership.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orgsUpdateWebhook

> OrgHook orgsUpdateWebhook(org, hookId, opts)

Update an organization webhook

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.OrgsApi();
let org = "org_example"; // String | 
let hookId = 56; // Number | 
let opts = {
  'inlineObject20': new GitHubV3RestApi.InlineObject20() // InlineObject20 | 
};
apiInstance.orgsUpdateWebhook(org, hookId, opts, (error, data, response) => {
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
 **hookId** | **Number**|  | 
 **inlineObject20** | [**InlineObject20**](InlineObject20.md)|  | [optional] 

### Return type

[**OrgHook**](OrgHook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

