part of openapi.api;



class CodesOfConductApi {
  final ApiClient apiClient;

  CodesOfConductApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Get all codes of conduct with HTTP info returned
  ///
  /// 
  Future<Response> codesOfConductGetAllCodesOfConductWithHttpInfo() async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/codes_of_conduct".replaceAll("{format}","json");

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

  /// Get all codes of conduct
  ///
  /// 
  Future<List<CodeOfConduct>> codesOfConductGetAllCodesOfConduct() async {
    Response response = await codesOfConductGetAllCodesOfConductWithHttpInfo();
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<CodeOfConduct>') as List).map((item) => item as CodeOfConduct).toList();
    } else {
      return null;
    }
  }

  /// Get a code of conduct with HTTP info returned
  ///
  /// 
  Future<Response> codesOfConductGetConductCodeWithHttpInfo(String key) async {
    Object postBody;

    // verify required params are set
    if(key == null) {
     throw ApiException(400, "Missing required param: key");
    }

    // create path and map variables
    String path = "/codes_of_conduct/{key}".replaceAll("{format}","json").replaceAll("{" + "key" + "}", key.toString());

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

  /// Get a code of conduct
  ///
  ///String key  (required):
  ///     key parameter
  /// 
  Future<CodeOfConduct> codesOfConductGetConductCode(String key) async {
    Response response = await codesOfConductGetConductCodeWithHttpInfo(key);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'CodeOfConduct') as CodeOfConduct;
    } else {
      return null;
    }
  }

  /// Get the code of conduct for a repository with HTTP info returned
  ///
  /// This method returns the contents of the repository&#39;s code of conduct file, if one is detected.
  Future<Response> codesOfConductGetForRepoWithHttpInfo(String owner, String repo) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/community/code_of_conduct".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Get the code of conduct for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  /// This method returns the contents of the repository&#39;s code of conduct file, if one is detected.
  Future<CodeOfConduct> codesOfConductGetForRepo(String owner, String repo) async {
    Response response = await codesOfConductGetForRepoWithHttpInfo(owner, repo);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'CodeOfConduct') as CodeOfConduct;
    } else {
      return null;
    }
  }

}
