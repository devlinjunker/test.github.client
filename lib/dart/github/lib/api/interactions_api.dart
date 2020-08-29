part of openapi.api;



class InteractionsApi {
  final ApiClient apiClient;

  InteractionsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Get interaction restrictions for an organization with HTTP info returned
  ///
  /// Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.
  Future<Response> interactionsGetRestrictionsForOrgWithHttpInfo(String org) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/interaction-limits".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Get interaction restrictions for an organization
  ///
  ///String org  (required):
  ///    
  /// Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.
  Future<InteractionLimit> interactionsGetRestrictionsForOrg(String org) async {
    Response response = await interactionsGetRestrictionsForOrgWithHttpInfo(org);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'InteractionLimit') as InteractionLimit;
    } else {
      return null;
    }
  }

  /// Get interaction restrictions for a repository with HTTP info returned
  ///
  /// Shows which group of GitHub users can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
  Future<Response> interactionsGetRestrictionsForRepoWithHttpInfo(String owner, String repo) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/interaction-limits".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Get interaction restrictions for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  /// Shows which group of GitHub users can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
  Future<InteractionLimit> interactionsGetRestrictionsForRepo(String owner, String repo) async {
    Response response = await interactionsGetRestrictionsForRepoWithHttpInfo(owner, repo);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'InteractionLimit') as InteractionLimit;
    } else {
      return null;
    }
  }

  /// Remove interaction restrictions for an organization with HTTP info returned
  ///
  /// Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
  Future interactionsRemoveRestrictionsForOrgWithHttpInfo(String org) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/interaction-limits".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Remove interaction restrictions for an organization
  ///
  ///String org  (required):
  ///    
  /// Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
  Future interactionsRemoveRestrictionsForOrg(String org) async {
    Response response = await interactionsRemoveRestrictionsForOrgWithHttpInfo(org);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Remove interaction restrictions for a repository with HTTP info returned
  ///
  /// Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.
  Future interactionsRemoveRestrictionsForRepoWithHttpInfo(String owner, String repo) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/interaction-limits".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Remove interaction restrictions for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  /// Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.
  Future interactionsRemoveRestrictionsForRepo(String owner, String repo) async {
    Response response = await interactionsRemoveRestrictionsForRepoWithHttpInfo(owner, repo);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Set interaction restrictions for an organization with HTTP info returned
  ///
  /// Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.
  Future<Response> interactionsSetRestrictionsForOrgWithHttpInfo(String org, { InlineObject21 inlineObject21 }) async {
    Object postBody = inlineObject21;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/interaction-limits".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Set interaction restrictions for an organization
  ///
  ///String org  (required):
  ///    
  ///InlineObject21 inlineObject21 :
  ///    
  /// Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.
  Future<InteractionLimit> interactionsSetRestrictionsForOrg(String org, { InlineObject21 inlineObject21 }) async {
    Response response = await interactionsSetRestrictionsForOrgWithHttpInfo(org,  inlineObject21: inlineObject21 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'InteractionLimit') as InteractionLimit;
    } else {
      return null;
    }
  }

  /// Set interaction restrictions for a repository with HTTP info returned
  ///
  /// Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.
  Future<Response> interactionsSetRestrictionsForRepoWithHttpInfo(String owner, String repo, { InlineObject78 inlineObject78 }) async {
    Object postBody = inlineObject78;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/interaction-limits".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Set interaction restrictions for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject78 inlineObject78 :
  ///    
  /// Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.
  Future<InteractionLimit> interactionsSetRestrictionsForRepo(String owner, String repo, { InlineObject78 inlineObject78 }) async {
    Response response = await interactionsSetRestrictionsForRepoWithHttpInfo(owner, repo,  inlineObject78: inlineObject78 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'InteractionLimit') as InteractionLimit;
    } else {
      return null;
    }
  }

}
