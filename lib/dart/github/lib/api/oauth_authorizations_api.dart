part of openapi.api;



class OauthAuthorizationsApi {
  final ApiClient apiClient;

  OauthAuthorizationsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Create a new authorization with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  Creates OAuth tokens using [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;  To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app&#39;s client ID and secret, found on your OAuth application&#39;s settings page. If your OAuth application intends to create multiple tokens for one user, use &#x60;fingerprint&#x60; to differentiate between them.  You can also create tokens on GitHub from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).  Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).
  Future<Response> oauthAuthorizationsCreateAuthorizationWithHttpInfo({ InlineObject5 inlineObject5 }) async {
    Object postBody = inlineObject5;

    // verify required params are set

    // create path and map variables
    String path = "/authorizations".replaceAll("{format}","json");

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

  /// Create a new authorization
  ///
  ///InlineObject5 inlineObject5 :
  ///    
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  Creates OAuth tokens using [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;  To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app&#39;s client ID and secret, found on your OAuth application&#39;s settings page. If your OAuth application intends to create multiple tokens for one user, use &#x60;fingerprint&#x60; to differentiate between them.  You can also create tokens on GitHub from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).  Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).
  Future<Authorization> oauthAuthorizationsCreateAuthorization({ InlineObject5 inlineObject5 }) async {
    Response response = await oauthAuthorizationsCreateAuthorizationWithHttpInfo( inlineObject5: inlineObject5 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Authorization') as Authorization;
    } else {
      return null;
    }
  }

  /// Delete an authorization with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future oauthAuthorizationsDeleteAuthorizationWithHttpInfo(int authorizationId) async {
    Object postBody;

    // verify required params are set
    if(authorizationId == null) {
     throw ApiException(400, "Missing required param: authorizationId");
    }

    // create path and map variables
    String path = "/authorizations/{authorization_id}".replaceAll("{format}","json").replaceAll("{" + "authorization_id" + "}", authorizationId.toString());

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

  /// Delete an authorization
  ///
  ///int authorizationId  (required):
  ///     authorization_id parameter
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future oauthAuthorizationsDeleteAuthorization(int authorizationId) async {
    Response response = await oauthAuthorizationsDeleteAuthorizationWithHttpInfo(authorizationId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a grant with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  Deleting an OAuth application&#39;s grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
  Future oauthAuthorizationsDeleteGrantWithHttpInfo(int grantId) async {
    Object postBody;

    // verify required params are set
    if(grantId == null) {
     throw ApiException(400, "Missing required param: grantId");
    }

    // create path and map variables
    String path = "/applications/grants/{grant_id}".replaceAll("{format}","json").replaceAll("{" + "grant_id" + "}", grantId.toString());

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

  /// Delete a grant
  ///
  ///int grantId  (required):
  ///     grant_id parameter
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  Deleting an OAuth application&#39;s grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
  Future oauthAuthorizationsDeleteGrant(int grantId) async {
    Response response = await oauthAuthorizationsDeleteGrantWithHttpInfo(grantId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Get a single authorization with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<Response> oauthAuthorizationsGetAuthorizationWithHttpInfo(int authorizationId) async {
    Object postBody;

    // verify required params are set
    if(authorizationId == null) {
     throw ApiException(400, "Missing required param: authorizationId");
    }

    // create path and map variables
    String path = "/authorizations/{authorization_id}".replaceAll("{format}","json").replaceAll("{" + "authorization_id" + "}", authorizationId.toString());

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

  /// Get a single authorization
  ///
  ///int authorizationId  (required):
  ///     authorization_id parameter
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<Authorization> oauthAuthorizationsGetAuthorization(int authorizationId) async {
    Response response = await oauthAuthorizationsGetAuthorizationWithHttpInfo(authorizationId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Authorization') as Authorization;
    } else {
      return null;
    }
  }

  /// Get a single grant with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<Response> oauthAuthorizationsGetGrantWithHttpInfo(int grantId) async {
    Object postBody;

    // verify required params are set
    if(grantId == null) {
     throw ApiException(400, "Missing required param: grantId");
    }

    // create path and map variables
    String path = "/applications/grants/{grant_id}".replaceAll("{format}","json").replaceAll("{" + "grant_id" + "}", grantId.toString());

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

  /// Get a single grant
  ///
  ///int grantId  (required):
  ///     grant_id parameter
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<ApplicationGrant> oauthAuthorizationsGetGrant(int grantId) async {
    Response response = await oauthAuthorizationsGetGrantWithHttpInfo(grantId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ApplicationGrant') as ApplicationGrant;
    } else {
      return null;
    }
  }

  /// Get-or-create an authorization for a specific app with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn&#39;t already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user&#39;s existing authorization for the application if one is present. Otherwise, it creates and returns a new one.  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;  **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<Response> oauthAuthorizationsGetOrCreateAuthorizationForAppWithHttpInfo(String clientId, { InlineObject6 inlineObject6 }) async {
    Object postBody = inlineObject6;

    // verify required params are set
    if(clientId == null) {
     throw ApiException(400, "Missing required param: clientId");
    }

    // create path and map variables
    String path = "/authorizations/clients/{client_id}".replaceAll("{format}","json").replaceAll("{" + "client_id" + "}", clientId.toString());

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

  /// Get-or-create an authorization for a specific app
  ///
  ///String clientId  (required):
  ///    
  ///InlineObject6 inlineObject6 :
  ///    
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn&#39;t already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user&#39;s existing authorization for the application if one is present. Otherwise, it creates and returns a new one.  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;  **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<Authorization> oauthAuthorizationsGetOrCreateAuthorizationForApp(String clientId, { InlineObject6 inlineObject6 }) async {
    Response response = await oauthAuthorizationsGetOrCreateAuthorizationForAppWithHttpInfo(clientId,  inlineObject6: inlineObject6 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Authorization') as Authorization;
    } else {
      return null;
    }
  }

  /// Get-or-create an authorization for a specific app and fingerprint with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. &#x60;fingerprint&#x60; is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user&#39;s existing authorization for the application if one is present. Otherwise, it creates and returns a new one.  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;
  Future<Response> oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintWithHttpInfo(String clientId, String fingerprint, { InlineObject7 inlineObject7 }) async {
    Object postBody = inlineObject7;

    // verify required params are set
    if(clientId == null) {
     throw ApiException(400, "Missing required param: clientId");
    }
    if(fingerprint == null) {
     throw ApiException(400, "Missing required param: fingerprint");
    }

    // create path and map variables
    String path = "/authorizations/clients/{client_id}/{fingerprint}".replaceAll("{format}","json").replaceAll("{" + "client_id" + "}", clientId.toString()).replaceAll("{" + "fingerprint" + "}", fingerprint.toString());

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

  /// Get-or-create an authorization for a specific app and fingerprint
  ///
  ///String clientId  (required):
  ///    
  ///String fingerprint  (required):
  ///     fingerprint parameter
  ///InlineObject7 inlineObject7 :
  ///    
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  **Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).  This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. &#x60;fingerprint&#x60; is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user&#39;s existing authorization for the application if one is present. Otherwise, it creates and returns a new one.  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;
  Future<Authorization> oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(String clientId, String fingerprint, { InlineObject7 inlineObject7 }) async {
    Response response = await oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintWithHttpInfo(clientId, fingerprint,  inlineObject7: inlineObject7 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Authorization') as Authorization;
    } else {
      return null;
    }
  }

  /// List your authorizations with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<Response> oauthAuthorizationsListAuthorizationsWithHttpInfo({ int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/authorizations".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(perPage != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "per_page", perPage));
    }
    if(page != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "page", page));
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

  /// List your authorizations
  ///
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
  Future<List<Authorization>> oauthAuthorizationsListAuthorizations({ int perPage, int page }) async {
    Response response = await oauthAuthorizationsListAuthorizationsWithHttpInfo( perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Authorization>') as List).map((item) => item as Authorization).toList();
    } else {
      return null;
    }
  }

  /// List your grants with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The &#x60;scopes&#x60; returned are the union of scopes authorized for the application. For example, if an application has one token with &#x60;repo&#x60; scope and another token with &#x60;user&#x60; scope, the grant will return &#x60;[\&quot;repo\&quot;, \&quot;user\&quot;]&#x60;.
  Future<Response> oauthAuthorizationsListGrantsWithHttpInfo({ int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/applications/grants".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(perPage != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "per_page", perPage));
    }
    if(page != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "page", page));
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

  /// List your grants
  ///
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The &#x60;scopes&#x60; returned are the union of scopes authorized for the application. For example, if an application has one token with &#x60;repo&#x60; scope and another token with &#x60;user&#x60; scope, the grant will return &#x60;[\&quot;repo\&quot;, \&quot;user\&quot;]&#x60;.
  Future<List<ApplicationGrant>> oauthAuthorizationsListGrants({ int perPage, int page }) async {
    Response response = await oauthAuthorizationsListGrantsWithHttpInfo( perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<ApplicationGrant>') as List).map((item) => item as ApplicationGrant).toList();
    } else {
      return null;
    }
  }

  /// Update an existing authorization with HTTP info returned
  ///
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;  You can only send one of these scope keys at a time.
  Future<Response> oauthAuthorizationsUpdateAuthorizationWithHttpInfo(int authorizationId, { InlineObject8 inlineObject8 }) async {
    Object postBody = inlineObject8;

    // verify required params are set
    if(authorizationId == null) {
     throw ApiException(400, "Missing required param: authorizationId");
    }

    // create path and map variables
    String path = "/authorizations/{authorization_id}".replaceAll("{format}","json").replaceAll("{" + "authorization_id" + "}", authorizationId.toString());

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

  /// Update an existing authorization
  ///
  ///int authorizationId  (required):
  ///     authorization_id parameter
  ///InlineObject8 inlineObject8 :
  ///    
  /// **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).  If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \&quot;[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication).\&quot;  You can only send one of these scope keys at a time.
  Future<Authorization> oauthAuthorizationsUpdateAuthorization(int authorizationId, { InlineObject8 inlineObject8 }) async {
    Response response = await oauthAuthorizationsUpdateAuthorizationWithHttpInfo(authorizationId,  inlineObject8: inlineObject8 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Authorization') as Authorization;
    } else {
      return null;
    }
  }

}
