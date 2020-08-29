part of openapi.api;



class MarkdownApi {
  final ApiClient apiClient;

  MarkdownApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Render a Markdown document with HTTP info returned
  ///
  /// 
  Future markdownRenderWithHttpInfo({ InlineObject13 inlineObject13 }) async {
    Object postBody = inlineObject13;

    // verify required params are set

    // create path and map variables
    String path = "/markdown".replaceAll("{format}","json");

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

  /// Render a Markdown document
  ///
  ///InlineObject13 inlineObject13 :
  ///    
  /// 
  Future markdownRender({ InlineObject13 inlineObject13 }) async {
    Response response = await markdownRenderWithHttpInfo( inlineObject13: inlineObject13 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Render a Markdown document in raw mode with HTTP info returned
  ///
  /// You must send Markdown as plain text (using a &#x60;Content-Type&#x60; header of &#x60;text/plain&#x60; or &#x60;text/x-markdown&#x60;) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
  Future<Response> markdownRenderRawWithHttpInfo({ String body }) async {
    Object postBody = body;

    // verify required params are set

    // create path and map variables
    String path = "/markdown/raw".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};

    List<String> contentTypes = ["text/plain","text/x-markdown"];

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

  /// Render a Markdown document in raw mode
  ///
  ///String body :
  ///    
  /// You must send Markdown as plain text (using a &#x60;Content-Type&#x60; header of &#x60;text/plain&#x60; or &#x60;text/x-markdown&#x60;) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
  Future<String> markdownRenderRaw({ String body }) async {
    Response response = await markdownRenderRawWithHttpInfo( body: body );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'String') as String;
    } else {
      return null;
    }
  }

}
