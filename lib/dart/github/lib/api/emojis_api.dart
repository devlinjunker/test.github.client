part of openapi.api;



class EmojisApi {
  final ApiClient apiClient;

  EmojisApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Get emojis with HTTP info returned
  ///
  /// Lists all the emojis available to use on GitHub.
  Future<Response> emojisGetWithHttpInfo() async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/emojis".replaceAll("{format}","json");

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

  /// Get emojis
  ///
  /// Lists all the emojis available to use on GitHub.
  Future<Map<String, String>> emojisGet() async {
    Response response = await emojisGetWithHttpInfo();
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return Map<String, String>.from(apiClient.deserialize(_decodeBodyBytes(response), 'Map<String, String>'));
          ;
    } else {
      return null;
    }
  }

}
