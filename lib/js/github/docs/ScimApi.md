# GitHubV3RestApi.ScimApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scimDeleteUserFromOrg**](ScimApi.md#scimDeleteUserFromOrg) | **DELETE** /scim/v2/organizations/{org}/Users/{scim_user_id} | Delete a SCIM user from an organization
[**scimGetProvisioningInformationForUser**](ScimApi.md#scimGetProvisioningInformationForUser) | **GET** /scim/v2/organizations/{org}/Users/{scim_user_id} | Get SCIM provisioning information for a user
[**scimListProvisionedIdentities**](ScimApi.md#scimListProvisionedIdentities) | **GET** /scim/v2/organizations/{org}/Users | List SCIM provisioned identities
[**scimProvisionAndInviteUser**](ScimApi.md#scimProvisionAndInviteUser) | **POST** /scim/v2/organizations/{org}/Users | Provision and invite a SCIM user
[**scimSetInformationForProvisionedUser**](ScimApi.md#scimSetInformationForProvisionedUser) | **PUT** /scim/v2/organizations/{org}/Users/{scim_user_id} | Update a provisioned organization membership
[**scimUpdateAttributeForUser**](ScimApi.md#scimUpdateAttributeForUser) | **PATCH** /scim/v2/organizations/{org}/Users/{scim_user_id} | Update an attribute for a SCIM user



## scimDeleteUserFromOrg

> scimDeleteUserFromOrg(org, scimUserId)

Delete a SCIM user from an organization

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ScimApi();
let org = "org_example"; // String | 
let scimUserId = "scimUserId_example"; // String | scim_user_id parameter
apiInstance.scimDeleteUserFromOrg(org, scimUserId, (error, data, response) => {
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
 **scimUserId** | **String**| scim_user_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/scim+json


## scimGetProvisioningInformationForUser

> ScimUser scimGetProvisioningInformationForUser(org, scimUserId)

Get SCIM provisioning information for a user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ScimApi();
let org = "org_example"; // String | 
let scimUserId = "scimUserId_example"; // String | scim_user_id parameter
apiInstance.scimGetProvisioningInformationForUser(org, scimUserId, (error, data, response) => {
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
 **scimUserId** | **String**| scim_user_id parameter | 

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/scim+json, application/json, 


## scimListProvisionedIdentities

> ScimUserList scimListProvisionedIdentities(org, opts)

List SCIM provisioned identities

Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the &#x60;filter&#x60; parameter, the resources for all matching provisions members are returned.  When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account&#39;s metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:   - When a user with a SCIM-provisioned external identity is removed from an organization, the account&#39;s metadata is preserved to allow the user to re-join the organization in the future.   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).   - When a user is invited over SCIM, an external identity is created that matches with the invitee&#39;s email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.  The returned list of external identities can include an entry for a &#x60;null&#x60; user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:  1. The user is granted access by the IdP and is not a member of the GitHub organization.  1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.  1. After successfully authenticating with the SAML SSO IdP, the &#x60;null&#x60; external identity entry is created and the user is prompted to sign in to their GitHub account:    - If the user signs in, their GitHub account is linked to this entry.    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity &#x60;null&#x60; entry remains in place.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ScimApi();
let org = "org_example"; // String | 
let opts = {
  'startIndex': 56, // Number | Used for pagination: the index of the first result to return.
  'count': 56, // Number | Used for pagination: the number of results to return.
  'filter': "filter_example" // String | Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query:  `?filter=userName%20eq%20\\\"Octocat\\\"`.  To filter results for for the identity with the email `octocat@github.com`, you would use this query:  `?filter=emails%20eq%20\\\"octocat@github.com\\\"`.
};
apiInstance.scimListProvisionedIdentities(org, opts, (error, data, response) => {
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
 **startIndex** | **Number**| Used for pagination: the index of the first result to return. | [optional] 
 **count** | **Number**| Used for pagination: the number of results to return. | [optional] 
 **filter** | **String**| Filters results using the equals query parameter operator (&#x60;eq&#x60;). You can filter results that are equal to &#x60;id&#x60;, &#x60;userName&#x60;, &#x60;emails&#x60;, and &#x60;external_id&#x60;. For example, to search for an identity with the &#x60;userName&#x60; Octocat, you would use this query:  &#x60;?filter&#x3D;userName%20eq%20\\\&quot;Octocat\\\&quot;&#x60;.  To filter results for for the identity with the email &#x60;octocat@github.com&#x60;, you would use this query:  &#x60;?filter&#x3D;emails%20eq%20\\\&quot;octocat@github.com\\\&quot;&#x60;. | [optional] 

### Return type

[**ScimUserList**](ScimUserList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/scim+json, application/json, 


## scimProvisionAndInviteUser

> ScimUser scimProvisionAndInviteUser(org, opts)

Provision and invite a SCIM user

Provision organization membership for a user, and send an activation email to the email address.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ScimApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject123': new GitHubV3RestApi.InlineObject123() // InlineObject123 | 
};
apiInstance.scimProvisionAndInviteUser(org, opts, (error, data, response) => {
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
 **inlineObject123** | [**InlineObject123**](InlineObject123.md)|  | [optional] 

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/scim+json, application/json, 


## scimSetInformationForProvisionedUser

> ScimUser scimSetInformationForProvisionedUser(org, scimUserId, opts)

Update a provisioned organization membership

Replaces an existing provisioned user&#39;s information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don&#39;t provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://developer.github.com/v3/scim/#update-an-attribute-for-a-scim-user) endpoint instead.  You must at least provide the required values for the user: &#x60;userName&#x60;, &#x60;name&#x60;, and &#x60;emails&#x60;.  **Warning:** Setting &#x60;active: false&#x60; removes the user from the organization, deletes the external identity, and deletes the associated &#x60;{scim_user_id}&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ScimApi();
let org = "org_example"; // String | 
let scimUserId = "scimUserId_example"; // String | scim_user_id parameter
let opts = {
  'inlineObject124': new GitHubV3RestApi.InlineObject124() // InlineObject124 | 
};
apiInstance.scimSetInformationForProvisionedUser(org, scimUserId, opts, (error, data, response) => {
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
 **scimUserId** | **String**| scim_user_id parameter | 
 **inlineObject124** | [**InlineObject124**](InlineObject124.md)|  | [optional] 

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/scim+json, application/json, 


## scimUpdateAttributeForUser

> ScimUser scimUpdateAttributeForUser(org, scimUserId, opts)

Update an attribute for a SCIM user

Allows you to change a provisioned user&#39;s individual attributes. To change a user&#39;s values, you must provide a specific &#x60;Operations&#x60; JSON format that contains at least one of the &#x60;add&#x60;, &#x60;remove&#x60;, or &#x60;replace&#x60; operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).  **Note:** Complicated SCIM &#x60;path&#x60; selectors that include filters are not supported. For example, a &#x60;path&#x60; selector defined as &#x60;\&quot;path\&quot;: \&quot;emails[type eq \\\&quot;work\\\&quot;]\&quot;&#x60; will not work.  **Warning:** If you set &#x60;active:false&#x60; using the &#x60;replace&#x60; operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated &#x60;:scim_user_id&#x60;.  &#x60;&#x60;&#x60; {   \&quot;Operations\&quot;:[{     \&quot;op\&quot;:\&quot;replace\&quot;,     \&quot;value\&quot;:{       \&quot;active\&quot;:false     }   }] } &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ScimApi();
let org = "org_example"; // String | 
let scimUserId = "scimUserId_example"; // String | scim_user_id parameter
let opts = {
  'inlineObject125': new GitHubV3RestApi.InlineObject125() // InlineObject125 | 
};
apiInstance.scimUpdateAttributeForUser(org, scimUserId, opts, (error, data, response) => {
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
 **scimUserId** | **String**| scim_user_id parameter | 
 **inlineObject125** | [**InlineObject125**](InlineObject125.md)|  | [optional] 

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/scim+json, application/json, 

