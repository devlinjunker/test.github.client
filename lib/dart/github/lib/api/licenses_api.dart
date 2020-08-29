part of openapi.api;



class LicensesApi {
  final ApiClient apiClient;

  LicensesApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Get a license with HTTP info returned
  ///
  /// 
  Future<Response> licensesGetWithHttpInfo(String license) async {
    Object postBody;

    // verify required params are set
    if(license == null) {
     throw ApiException(400, "Missing required param: license");
    }

    // create path and map variables
    String path = "/licenses/{license}".replaceAll("{format}","json").replaceAll("{" + "license" + "}", license.toString());

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

  /// Get a license
  ///
  ///String license  (required):
  ///     license parameter
  /// 
  Future<License> licensesGet(String license) async {
    Response response = await licensesGetWithHttpInfo(license);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'License') as License;
    } else {
      return null;
    }
  }

  /// Get all commonly used licenses with HTTP info returned
  ///
  /// 
  Future<Response> licensesGetAllCommonlyUsedWithHttpInfo({ bool featured, int perPage }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/licenses".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(featured != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "featured", featured));
    }
    if(perPage != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "per_page", perPage));
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

  /// Get all commonly used licenses
  ///
  ///bool featured :
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  /// 
  Future<List<LicenseSimple>> licensesGetAllCommonlyUsed({ bool featured, int perPage }) async {
    Response response = await licensesGetAllCommonlyUsedWithHttpInfo( featured: featured, perPage: perPage );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<LicenseSimple>') as List).map((item) => item as LicenseSimple).toList();
    } else {
      return null;
    }
  }

  /// Get the license for a repository with HTTP info returned
  ///
  /// This method returns the contents of the repository&#39;s license file, if one is detected.  Similar to [Get repository content](https://developer.github.com/v3/repos/contents/#get-repository-content), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.
  Future<Response> licensesGetForRepoWithHttpInfo(String owner, String repo) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/license".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Get the license for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  /// This method returns the contents of the repository&#39;s license file, if one is detected.  Similar to [Get repository content](https://developer.github.com/v3/repos/contents/#get-repository-content), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.
  Future<LicenseContent> licensesGetForRepo(String owner, String repo) async {
    Response response = await licensesGetForRepoWithHttpInfo(owner, repo);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'LicenseContent') as LicenseContent;
    } else {
      return null;
    }
  }

}
