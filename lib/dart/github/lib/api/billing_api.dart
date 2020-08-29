part of openapi.api;



class BillingApi {
  final ApiClient apiClient;

  BillingApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Get GitHub Actions billing for an enterprise with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  The authenticated user must be an enterprise admin.
  Future<Response> billingGetGithubActionsBillingGheWithHttpInfo(String enterpriseId) async {
    Object postBody;

    // verify required params are set
    if(enterpriseId == null) {
     throw ApiException(400, "Missing required param: enterpriseId");
    }

    // create path and map variables
    String path = "/enterprises/{enterprise_id}/settings/billing/actions".replaceAll("{format}","json").replaceAll("{" + "enterprise_id" + "}", enterpriseId.toString());

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

  /// Get GitHub Actions billing for an enterprise
  ///
  ///String enterpriseId  (required):
  ///     Unique identifier of the GitHub Enterprise Cloud instance.
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  The authenticated user must be an enterprise admin.
  Future<ActionsBillingUsage> billingGetGithubActionsBillingGhe(String enterpriseId) async {
    Response response = await billingGetGithubActionsBillingGheWithHttpInfo(enterpriseId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ActionsBillingUsage') as ActionsBillingUsage;
    } else {
      return null;
    }
  }

  /// Get GitHub Actions billing for an organization with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  Access tokens must have the &#x60;read:org&#x60; scope.
  Future<Response> billingGetGithubActionsBillingOrgWithHttpInfo(String org) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/settings/billing/actions".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Get GitHub Actions billing for an organization
  ///
  ///String org  (required):
  ///    
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  Access tokens must have the &#x60;read:org&#x60; scope.
  Future<ActionsBillingUsage> billingGetGithubActionsBillingOrg(String org) async {
    Response response = await billingGetGithubActionsBillingOrgWithHttpInfo(org);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ActionsBillingUsage') as ActionsBillingUsage;
    } else {
      return null;
    }
  }

  /// Get GitHub Actions billing for a user with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  Access tokens must have the &#x60;user&#x60; scope.
  Future<Response> billingGetGithubActionsBillingUserWithHttpInfo(String username) async {
    Object postBody;

    // verify required params are set
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/users/{username}/settings/billing/actions".replaceAll("{format}","json").replaceAll("{" + "username" + "}", username.toString());

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

  /// Get GitHub Actions billing for a user
  ///
  ///String username  (required):
  ///    
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  Access tokens must have the &#x60;user&#x60; scope.
  Future<ActionsBillingUsage> billingGetGithubActionsBillingUser(String username) async {
    Response response = await billingGetGithubActionsBillingUserWithHttpInfo(username);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ActionsBillingUsage') as ActionsBillingUsage;
    } else {
      return null;
    }
  }

  /// Get GitHub Packages billing for an enterprise with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  The authenticated user must be an enterprise admin.
  Future<Response> billingGetGithubPackagesBillingGheWithHttpInfo(String enterpriseId) async {
    Object postBody;

    // verify required params are set
    if(enterpriseId == null) {
     throw ApiException(400, "Missing required param: enterpriseId");
    }

    // create path and map variables
    String path = "/enterprises/{enterprise_id}/settings/billing/packages".replaceAll("{format}","json").replaceAll("{" + "enterprise_id" + "}", enterpriseId.toString());

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

  /// Get GitHub Packages billing for an enterprise
  ///
  ///String enterpriseId  (required):
  ///     Unique identifier of the GitHub Enterprise Cloud instance.
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  The authenticated user must be an enterprise admin.
  Future<PackagesBillingUsage> billingGetGithubPackagesBillingGhe(String enterpriseId) async {
    Response response = await billingGetGithubPackagesBillingGheWithHttpInfo(enterpriseId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PackagesBillingUsage') as PackagesBillingUsage;
    } else {
      return null;
    }
  }

  /// Get GitHub Packages billing for an organization with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage usued for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;read:org&#x60; scope.
  Future<Response> billingGetGithubPackagesBillingOrgWithHttpInfo(String org) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/settings/billing/packages".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Get GitHub Packages billing for an organization
  ///
  ///String org  (required):
  ///    
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage usued for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;read:org&#x60; scope.
  Future<PackagesBillingUsage> billingGetGithubPackagesBillingOrg(String org) async {
    Response response = await billingGetGithubPackagesBillingOrgWithHttpInfo(org);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PackagesBillingUsage') as PackagesBillingUsage;
    } else {
      return null;
    }
  }

  /// Get GitHub Packages billing for a user with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;user&#x60; scope.
  Future<Response> billingGetGithubPackagesBillingUserWithHttpInfo(String username) async {
    Object postBody;

    // verify required params are set
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/users/{username}/settings/billing/packages".replaceAll("{format}","json").replaceAll("{" + "username" + "}", username.toString());

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

  /// Get GitHub Packages billing for a user
  ///
  ///String username  (required):
  ///    
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;user&#x60; scope.
  Future<PackagesBillingUsage> billingGetGithubPackagesBillingUser(String username) async {
    Response response = await billingGetGithubPackagesBillingUserWithHttpInfo(username);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PackagesBillingUsage') as PackagesBillingUsage;
    } else {
      return null;
    }
  }

  /// Get shared storage billing for an enterprise with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  The authenticated user must be an enterprise admin.
  Future<Response> billingGetSharedStorageBillingGheWithHttpInfo(String enterpriseId) async {
    Object postBody;

    // verify required params are set
    if(enterpriseId == null) {
     throw ApiException(400, "Missing required param: enterpriseId");
    }

    // create path and map variables
    String path = "/enterprises/{enterprise_id}/settings/billing/shared-storage".replaceAll("{format}","json").replaceAll("{" + "enterprise_id" + "}", enterpriseId.toString());

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

  /// Get shared storage billing for an enterprise
  ///
  ///String enterpriseId  (required):
  ///     Unique identifier of the GitHub Enterprise Cloud instance.
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  The authenticated user must be an enterprise admin.
  Future<CombinedBillingUsage> billingGetSharedStorageBillingGhe(String enterpriseId) async {
    Response response = await billingGetSharedStorageBillingGheWithHttpInfo(enterpriseId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'CombinedBillingUsage') as CombinedBillingUsage;
    } else {
      return null;
    }
  }

  /// Get shared storage billing for an organization with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;read:org&#x60; scope.
  Future<Response> billingGetSharedStorageBillingOrgWithHttpInfo(String org) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/settings/billing/shared-storage".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Get shared storage billing for an organization
  ///
  ///String org  (required):
  ///    
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;read:org&#x60; scope.
  Future<CombinedBillingUsage> billingGetSharedStorageBillingOrg(String org) async {
    Response response = await billingGetSharedStorageBillingOrgWithHttpInfo(org);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'CombinedBillingUsage') as CombinedBillingUsage;
    } else {
      return null;
    }
  }

  /// Get shared storage billing for a user with HTTP info returned
  ///
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;user&#x60; scope.
  Future<Response> billingGetSharedStorageBillingUserWithHttpInfo(String username) async {
    Object postBody;

    // verify required params are set
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/users/{username}/settings/billing/shared-storage".replaceAll("{format}","json").replaceAll("{" + "username" + "}", username.toString());

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

  /// Get shared storage billing for a user
  ///
  ///String username  (required):
  ///    
  /// **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;user&#x60; scope.
  Future<CombinedBillingUsage> billingGetSharedStorageBillingUser(String username) async {
    Response response = await billingGetSharedStorageBillingUserWithHttpInfo(username);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'CombinedBillingUsage') as CombinedBillingUsage;
    } else {
      return null;
    }
  }

}
