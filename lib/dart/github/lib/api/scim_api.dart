part of openapi.api;



class ScimApi {
  final ApiClient apiClient;

  ScimApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Delete a SCIM user from an organization with HTTP info returned
  ///
  /// 
  Future scimDeleteUserFromOrgWithHttpInfo(String org, String scimUserId) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(scimUserId == null) {
     throw ApiException(400, "Missing required param: scimUserId");
    }

    // create path and map variables
    String path = "/scim/v2/organizations/{org}/Users/{scim_user_id}".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "scim_user_id" + "}", scimUserId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};

    List<String> contentTypes = [];

    String nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    List<String> authNames = [];

    if(nullableContentType != null && nullableContentType.startsWith("multipart/form-data")) {
      bool hasFields = false;
      MultipartRequest mp = MultipartRequest(null, null);
      if(hasFields)
        postBody = mp;
    }
    else {
    }

    var response = await apiClient.invokeAPI(path,
                                             'DELETE',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Delete a SCIM user from an organization
  ///
  ///String org  (required):
  ///    
  ///String scimUserId  (required):
  ///     scim_user_id parameter
  /// 
  Future scimDeleteUserFromOrg(String org, String scimUserId) async {
    Response response = await scimDeleteUserFromOrgWithHttpInfo(org, scimUserId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Get SCIM provisioning information for a user with HTTP info returned
  ///
  /// 
  Future<Response> scimGetProvisioningInformationForUserWithHttpInfo(String org, String scimUserId) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(scimUserId == null) {
     throw ApiException(400, "Missing required param: scimUserId");
    }

    // create path and map variables
    String path = "/scim/v2/organizations/{org}/Users/{scim_user_id}".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "scim_user_id" + "}", scimUserId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};

    List<String> contentTypes = [];

    String nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    List<String> authNames = [];

    if(nullableContentType != null && nullableContentType.startsWith("multipart/form-data")) {
      bool hasFields = false;
      MultipartRequest mp = MultipartRequest(null, null);
      if(hasFields)
        postBody = mp;
    }
    else {
    }

    var response = await apiClient.invokeAPI(path,
                                             'GET',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Get SCIM provisioning information for a user
  ///
  ///String org  (required):
  ///    
  ///String scimUserId  (required):
  ///     scim_user_id parameter
  /// 
  Future<ScimUser> scimGetProvisioningInformationForUser(String org, String scimUserId) async {
    Response response = await scimGetProvisioningInformationForUserWithHttpInfo(org, scimUserId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ScimUser') as ScimUser;
    } else {
      return null;
    }
  }

  /// List SCIM provisioned identities with HTTP info returned
  ///
  /// Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the &#x60;filter&#x60; parameter, the resources for all matching provisions members are returned.  When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account&#39;s metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:   - When a user with a SCIM-provisioned external identity is removed from an organization, the account&#39;s metadata is preserved to allow the user to re-join the organization in the future.   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).   - When a user is invited over SCIM, an external identity is created that matches with the invitee&#39;s email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.  The returned list of external identities can include an entry for a &#x60;null&#x60; user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:  1. The user is granted access by the IdP and is not a member of the GitHub organization.  1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.  1. After successfully authenticating with the SAML SSO IdP, the &#x60;null&#x60; external identity entry is created and the user is prompted to sign in to their GitHub account:    - If the user signs in, their GitHub account is linked to this entry.    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity &#x60;null&#x60; entry remains in place.
  Future<Response> scimListProvisionedIdentitiesWithHttpInfo(String org, { int startIndex, int count, String filter }) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/scim/v2/organizations/{org}/Users".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(startIndex != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "startIndex", startIndex));
    }
    if(count != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "count", count));
    }
    if(filter != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "filter", filter));
    }

    List<String> contentTypes = [];

    String nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    List<String> authNames = [];

    if(nullableContentType != null && nullableContentType.startsWith("multipart/form-data")) {
      bool hasFields = false;
      MultipartRequest mp = MultipartRequest(null, null);
      if(hasFields)
        postBody = mp;
    }
    else {
    }

    var response = await apiClient.invokeAPI(path,
                                             'GET',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// List SCIM provisioned identities
  ///
  ///String org  (required):
  ///    
  ///int startIndex :
  ///     Used for pagination: the index of the first result to return.
  ///int count :
  ///     Used for pagination: the number of results to return.
  ///String filter :
  ///     Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query:  `?filter=userName%20eq%20\\\"Octocat\\\"`.  To filter results for for the identity with the email `octocat@github.com`, you would use this query:  `?filter=emails%20eq%20\\\"octocat@github.com\\\"`.
  /// Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the &#x60;filter&#x60; parameter, the resources for all matching provisions members are returned.  When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account&#39;s metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:   - When a user with a SCIM-provisioned external identity is removed from an organization, the account&#39;s metadata is preserved to allow the user to re-join the organization in the future.   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).   - When a user is invited over SCIM, an external identity is created that matches with the invitee&#39;s email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.  The returned list of external identities can include an entry for a &#x60;null&#x60; user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:  1. The user is granted access by the IdP and is not a member of the GitHub organization.  1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.  1. After successfully authenticating with the SAML SSO IdP, the &#x60;null&#x60; external identity entry is created and the user is prompted to sign in to their GitHub account:    - If the user signs in, their GitHub account is linked to this entry.    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity &#x60;null&#x60; entry remains in place.
  Future<ScimUserList> scimListProvisionedIdentities(String org, { int startIndex, int count, String filter }) async {
    Response response = await scimListProvisionedIdentitiesWithHttpInfo(org,  startIndex: startIndex, count: count, filter: filter );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ScimUserList') as ScimUserList;
    } else {
      return null;
    }
  }

  /// Provision and invite a SCIM user with HTTP info returned
  ///
  /// Provision organization membership for a user, and send an activation email to the email address.
  Future<Response> scimProvisionAndInviteUserWithHttpInfo(String org, { InlineObject123 inlineObject123 }) async {
    Object postBody = inlineObject123;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/scim/v2/organizations/{org}/Users".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};

    List<String> contentTypes = ["application/json"];

    String nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    List<String> authNames = [];

    if(nullableContentType != null && nullableContentType.startsWith("multipart/form-data")) {
      bool hasFields = false;
      MultipartRequest mp = MultipartRequest(null, null);
      if(hasFields)
        postBody = mp;
    }
    else {
    }

    var response = await apiClient.invokeAPI(path,
                                             'POST',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Provision and invite a SCIM user
  ///
  ///String org  (required):
  ///    
  ///InlineObject123 inlineObject123 :
  ///    
  /// Provision organization membership for a user, and send an activation email to the email address.
  Future<ScimUser> scimProvisionAndInviteUser(String org, { InlineObject123 inlineObject123 }) async {
    Response response = await scimProvisionAndInviteUserWithHttpInfo(org,  inlineObject123: inlineObject123 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ScimUser') as ScimUser;
    } else {
      return null;
    }
  }

  /// Update a provisioned organization membership with HTTP info returned
  ///
  /// Replaces an existing provisioned user&#39;s information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don&#39;t provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://developer.github.com/v3/scim/#update-an-attribute-for-a-scim-user) endpoint instead.  You must at least provide the required values for the user: &#x60;userName&#x60;, &#x60;name&#x60;, and &#x60;emails&#x60;.  **Warning:** Setting &#x60;active: false&#x60; removes the user from the organization, deletes the external identity, and deletes the associated &#x60;{scim_user_id}&#x60;.
  Future<Response> scimSetInformationForProvisionedUserWithHttpInfo(String org, String scimUserId, { InlineObject124 inlineObject124 }) async {
    Object postBody = inlineObject124;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(scimUserId == null) {
     throw ApiException(400, "Missing required param: scimUserId");
    }

    // create path and map variables
    String path = "/scim/v2/organizations/{org}/Users/{scim_user_id}".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "scim_user_id" + "}", scimUserId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};

    List<String> contentTypes = ["application/json"];

    String nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    List<String> authNames = [];

    if(nullableContentType != null && nullableContentType.startsWith("multipart/form-data")) {
      bool hasFields = false;
      MultipartRequest mp = MultipartRequest(null, null);
      if(hasFields)
        postBody = mp;
    }
    else {
    }

    var response = await apiClient.invokeAPI(path,
                                             'PUT',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Update a provisioned organization membership
  ///
  ///String org  (required):
  ///    
  ///String scimUserId  (required):
  ///     scim_user_id parameter
  ///InlineObject124 inlineObject124 :
  ///    
  /// Replaces an existing provisioned user&#39;s information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don&#39;t provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://developer.github.com/v3/scim/#update-an-attribute-for-a-scim-user) endpoint instead.  You must at least provide the required values for the user: &#x60;userName&#x60;, &#x60;name&#x60;, and &#x60;emails&#x60;.  **Warning:** Setting &#x60;active: false&#x60; removes the user from the organization, deletes the external identity, and deletes the associated &#x60;{scim_user_id}&#x60;.
  Future<ScimUser> scimSetInformationForProvisionedUser(String org, String scimUserId, { InlineObject124 inlineObject124 }) async {
    Response response = await scimSetInformationForProvisionedUserWithHttpInfo(org, scimUserId,  inlineObject124: inlineObject124 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ScimUser') as ScimUser;
    } else {
      return null;
    }
  }

  /// Update an attribute for a SCIM user with HTTP info returned
  ///
  /// Allows you to change a provisioned user&#39;s individual attributes. To change a user&#39;s values, you must provide a specific &#x60;Operations&#x60; JSON format that contains at least one of the &#x60;add&#x60;, &#x60;remove&#x60;, or &#x60;replace&#x60; operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).  **Note:** Complicated SCIM &#x60;path&#x60; selectors that include filters are not supported. For example, a &#x60;path&#x60; selector defined as &#x60;\&quot;path\&quot;: \&quot;emails[type eq \\\&quot;work\\\&quot;]\&quot;&#x60; will not work.  **Warning:** If you set &#x60;active:false&#x60; using the &#x60;replace&#x60; operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated &#x60;:scim_user_id&#x60;.  &#x60;&#x60;&#x60; {   \&quot;Operations\&quot;:[{     \&quot;op\&quot;:\&quot;replace\&quot;,     \&quot;value\&quot;:{       \&quot;active\&quot;:false     }   }] } &#x60;&#x60;&#x60;
  Future<Response> scimUpdateAttributeForUserWithHttpInfo(String org, String scimUserId, { InlineObject125 inlineObject125 }) async {
    Object postBody = inlineObject125;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(scimUserId == null) {
     throw ApiException(400, "Missing required param: scimUserId");
    }

    // create path and map variables
    String path = "/scim/v2/organizations/{org}/Users/{scim_user_id}".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "scim_user_id" + "}", scimUserId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};

    List<String> contentTypes = ["application/json"];

    String nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    List<String> authNames = [];

    if(nullableContentType != null && nullableContentType.startsWith("multipart/form-data")) {
      bool hasFields = false;
      MultipartRequest mp = MultipartRequest(null, null);
      if(hasFields)
        postBody = mp;
    }
    else {
    }

    var response = await apiClient.invokeAPI(path,
                                             'PATCH',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Update an attribute for a SCIM user
  ///
  ///String org  (required):
  ///    
  ///String scimUserId  (required):
  ///     scim_user_id parameter
  ///InlineObject125 inlineObject125 :
  ///    
  /// Allows you to change a provisioned user&#39;s individual attributes. To change a user&#39;s values, you must provide a specific &#x60;Operations&#x60; JSON format that contains at least one of the &#x60;add&#x60;, &#x60;remove&#x60;, or &#x60;replace&#x60; operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).  **Note:** Complicated SCIM &#x60;path&#x60; selectors that include filters are not supported. For example, a &#x60;path&#x60; selector defined as &#x60;\&quot;path\&quot;: \&quot;emails[type eq \\\&quot;work\\\&quot;]\&quot;&#x60; will not work.  **Warning:** If you set &#x60;active:false&#x60; using the &#x60;replace&#x60; operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated &#x60;:scim_user_id&#x60;.  &#x60;&#x60;&#x60; {   \&quot;Operations\&quot;:[{     \&quot;op\&quot;:\&quot;replace\&quot;,     \&quot;value\&quot;:{       \&quot;active\&quot;:false     }   }] } &#x60;&#x60;&#x60;
  Future<ScimUser> scimUpdateAttributeForUser(String org, String scimUserId, { InlineObject125 inlineObject125 }) async {
    Response response = await scimUpdateAttributeForUserWithHttpInfo(org, scimUserId,  inlineObject125: inlineObject125 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ScimUser') as ScimUser;
    } else {
      return null;
    }
  }

}
