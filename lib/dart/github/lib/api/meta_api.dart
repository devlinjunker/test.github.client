part of openapi.api;



class MetaApi {
  final ApiClient apiClient;

  MetaApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Get GitHub meta information with HTTP info returned
  ///
  /// This endpoint provides a list of GitHub&#39;s IP addresses. For more information, see \&quot;[About GitHub&#39;s IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/).\&quot;
  Future<Response> metaGetWithHttpInfo() async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/meta".replaceAll("{format}","json");

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

  /// Get GitHub meta information
  ///
  /// This endpoint provides a list of GitHub&#39;s IP addresses. For more information, see \&quot;[About GitHub&#39;s IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/).\&quot;
  Future<ApiOverview> metaGet() async {
    Response response = await metaGetWithHttpInfo();
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ApiOverview') as ApiOverview;
    } else {
      return null;
    }
  }

  /// Get Octocat with HTTP info returned
  ///
  /// Get the octocat as ASCII art
  Future<Response> metaGetOctocatWithHttpInfo({ String s }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/octocat".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(s != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "s", s));
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

  /// Get Octocat
  ///
  ///String s :
  ///     The words to show in Octocat's speech bubble
  /// Get the octocat as ASCII art
  Future<String> metaGetOctocat({ String s }) async {
    Response response = await metaGetOctocatWithHttpInfo( s: s );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'String') as String;
    } else {
      return null;
    }
  }

  /// Get the Zen of GitHub with HTTP info returned
  ///
  /// Get a random sentence from the Zen of GitHub
  Future<Response> metaGetZenWithHttpInfo() async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/zen".replaceAll("{format}","json");

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

  /// Get the Zen of GitHub
  ///
  /// Get a random sentence from the Zen of GitHub
  Future<String> metaGetZen() async {
    Response response = await metaGetZenWithHttpInfo();
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'String') as String;
    } else {
      return null;
    }
  }

  /// GitHub API Root with HTTP info returned
  ///
  /// Get Hypermedia links to resources accessible in GitHub&#39;s REST API
  Future<Response> metaRootWithHttpInfo() async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/".replaceAll("{format}","json");

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

  /// GitHub API Root
  ///
  /// Get Hypermedia links to resources accessible in GitHub&#39;s REST API
  Future<InlineResponse200> metaRoot() async {
    Response response = await metaRootWithHttpInfo();
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'InlineResponse200') as InlineResponse200;
    } else {
      return null;
    }
  }

}
