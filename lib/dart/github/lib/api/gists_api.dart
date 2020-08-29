part of openapi.api;



class GistsApi {
  final ApiClient apiClient;

  GistsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Check if a gist is starred with HTTP info returned
  ///
  /// 
  Future gistsCheckIsStarredWithHttpInfo(String gistId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/star".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// Check if a gist is starred
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  /// 
  Future gistsCheckIsStarred(String gistId) async {
    Response response = await gistsCheckIsStarredWithHttpInfo(gistId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Create a gist with HTTP info returned
  ///
  /// Allows you to add a new gist with one or more files.  **Note:** Don&#39;t name your files \&quot;gistfile\&quot; with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
  Future<Response> gistsCreateWithHttpInfo({ InlineObject10 inlineObject10 }) async {
    Object postBody = inlineObject10;

    // verify required params are set

    // create path and map variables
    String path = "/gists".replaceAll("{format}","json");

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

  /// Create a gist
  ///
  ///InlineObject10 inlineObject10 :
  ///    
  /// Allows you to add a new gist with one or more files.  **Note:** Don&#39;t name your files \&quot;gistfile\&quot; with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
  Future<GistFull> gistsCreate({ InlineObject10 inlineObject10 }) async {
    Response response = await gistsCreateWithHttpInfo( inlineObject10: inlineObject10 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GistFull') as GistFull;
    } else {
      return null;
    }
  }

  /// Create a gist comment with HTTP info returned
  ///
  /// 
  Future<Response> gistsCreateCommentWithHttpInfo(String gistId, { InlineObject11 inlineObject11 }) async {
    Object postBody = inlineObject11;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/comments".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// Create a gist comment
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///InlineObject11 inlineObject11 :
  ///    
  /// 
  Future<GistComment> gistsCreateComment(String gistId, { InlineObject11 inlineObject11 }) async {
    Response response = await gistsCreateCommentWithHttpInfo(gistId,  inlineObject11: inlineObject11 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GistComment') as GistComment;
    } else {
      return null;
    }
  }

  /// Delete a gist with HTTP info returned
  ///
  /// 
  Future gistsDeleteWithHttpInfo(String gistId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// Delete a gist
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  /// 
  Future gistsDelete(String gistId) async {
    Response response = await gistsDeleteWithHttpInfo(gistId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a gist comment with HTTP info returned
  ///
  /// 
  Future gistsDeleteCommentWithHttpInfo(String gistId, int commentId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }
    if(commentId == null) {
     throw ApiException(400, "Missing required param: commentId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Delete a gist comment
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///int commentId  (required):
  ///     comment_id parameter
  /// 
  Future gistsDeleteComment(String gistId, int commentId) async {
    Response response = await gistsDeleteCommentWithHttpInfo(gistId, commentId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Fork a gist with HTTP info returned
  ///
  /// **Note**: This was previously &#x60;/gists/:gist_id/fork&#x60;.
  Future<Response> gistsForkWithHttpInfo(String gistId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/forks".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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
                                             'POST',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Fork a gist
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  /// **Note**: This was previously &#x60;/gists/:gist_id/fork&#x60;.
  Future<BaseGist> gistsFork(String gistId) async {
    Response response = await gistsForkWithHttpInfo(gistId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'BaseGist') as BaseGist;
    } else {
      return null;
    }
  }

  /// Get a gist with HTTP info returned
  ///
  /// 
  Future<Response> gistsGetWithHttpInfo(String gistId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// Get a gist
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  /// 
  Future<GistFull> gistsGet(String gistId) async {
    Response response = await gistsGetWithHttpInfo(gistId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GistFull') as GistFull;
    } else {
      return null;
    }
  }

  /// Get a gist comment with HTTP info returned
  ///
  /// 
  Future<Response> gistsGetCommentWithHttpInfo(String gistId, int commentId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }
    if(commentId == null) {
     throw ApiException(400, "Missing required param: commentId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Get a gist comment
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///int commentId  (required):
  ///     comment_id parameter
  /// 
  Future<GistComment> gistsGetComment(String gistId, int commentId) async {
    Response response = await gistsGetCommentWithHttpInfo(gistId, commentId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GistComment') as GistComment;
    } else {
      return null;
    }
  }

  /// Get a gist revision with HTTP info returned
  ///
  /// 
  Future<Response> gistsGetRevisionWithHttpInfo(String gistId, String sha) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }
    if(sha == null) {
     throw ApiException(400, "Missing required param: sha");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/{sha}".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString()).replaceAll("{" + "sha" + "}", sha.toString());

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

  /// Get a gist revision
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///String sha  (required):
  ///     sha parameter
  /// 
  Future<GistFull> gistsGetRevision(String gistId, String sha) async {
    Response response = await gistsGetRevisionWithHttpInfo(gistId, sha);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GistFull') as GistFull;
    } else {
      return null;
    }
  }

  /// List gists for the authenticated user with HTTP info returned
  ///
  /// Lists the authenticated user&#39;s gists or if called anonymously, this endpoint returns all public gists:
  Future<Response> gistsListWithHttpInfo({ String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/gists".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(since != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "since", since));
    }
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

  /// List gists for the authenticated user
  ///
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists the authenticated user&#39;s gists or if called anonymously, this endpoint returns all public gists:
  Future<List<BaseGist>> gistsList({ String since, int perPage, int page }) async {
    Response response = await gistsListWithHttpInfo( since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<BaseGist>') as List).map((item) => item as BaseGist).toList();
    } else {
      return null;
    }
  }

  /// List gist comments with HTTP info returned
  ///
  /// 
  Future<Response> gistsListCommentsWithHttpInfo(String gistId, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/comments".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// List gist comments
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<GistComment>> gistsListComments(String gistId, { int perPage, int page }) async {
    Response response = await gistsListCommentsWithHttpInfo(gistId,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<GistComment>') as List).map((item) => item as GistComment).toList();
    } else {
      return null;
    }
  }

  /// List gist commits with HTTP info returned
  ///
  /// 
  Future<Response> gistsListCommitsWithHttpInfo(String gistId, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/commits".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// List gist commits
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<GistCommit>> gistsListCommits(String gistId, { int perPage, int page }) async {
    Response response = await gistsListCommitsWithHttpInfo(gistId,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<GistCommit>') as List).map((item) => item as GistCommit).toList();
    } else {
      return null;
    }
  }

  /// List gists for a user with HTTP info returned
  ///
  /// Lists public gists for the specified user:
  Future<Response> gistsListForUserWithHttpInfo(String username, { String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/users/{username}/gists".replaceAll("{format}","json").replaceAll("{" + "username" + "}", username.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(since != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "since", since));
    }
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

  /// List gists for a user
  ///
  ///String username  (required):
  ///    
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists public gists for the specified user:
  Future<List<BaseGist>> gistsListForUser(String username, { String since, int perPage, int page }) async {
    Response response = await gistsListForUserWithHttpInfo(username,  since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<BaseGist>') as List).map((item) => item as BaseGist).toList();
    } else {
      return null;
    }
  }

  /// List gist forks with HTTP info returned
  ///
  /// 
  Future<Response> gistsListForksWithHttpInfo(String gistId, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/forks".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// List gist forks
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<GistFull>> gistsListForks(String gistId, { int perPage, int page }) async {
    Response response = await gistsListForksWithHttpInfo(gistId,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<GistFull>') as List).map((item) => item as GistFull).toList();
    } else {
      return null;
    }
  }

  /// List public gists with HTTP info returned
  ///
  /// List public gists sorted by most recently updated to least recently updated.  Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
  Future<Response> gistsListPublicWithHttpInfo({ String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/gists/public".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(since != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "since", since));
    }
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

  /// List public gists
  ///
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List public gists sorted by most recently updated to least recently updated.  Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
  Future<List<BaseGist>> gistsListPublic({ String since, int perPage, int page }) async {
    Response response = await gistsListPublicWithHttpInfo( since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<BaseGist>') as List).map((item) => item as BaseGist).toList();
    } else {
      return null;
    }
  }

  /// List starred gists with HTTP info returned
  ///
  /// List the authenticated user&#39;s starred gists:
  Future<Response> gistsListStarredWithHttpInfo({ String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/gists/starred".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(since != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "since", since));
    }
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

  /// List starred gists
  ///
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List the authenticated user&#39;s starred gists:
  Future<List<BaseGist>> gistsListStarred({ String since, int perPage, int page }) async {
    Response response = await gistsListStarredWithHttpInfo( since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<BaseGist>') as List).map((item) => item as BaseGist).toList();
    } else {
      return null;
    }
  }

  /// Star a gist with HTTP info returned
  ///
  /// Note that you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;
  Future gistsStarWithHttpInfo(String gistId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/star".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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
                                             'PUT',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Star a gist
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  /// Note that you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;
  Future gistsStar(String gistId) async {
    Response response = await gistsStarWithHttpInfo(gistId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Unstar a gist with HTTP info returned
  ///
  /// 
  Future gistsUnstarWithHttpInfo(String gistId) async {
    Object postBody;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/star".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// Unstar a gist
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  /// 
  Future gistsUnstar(String gistId) async {
    Response response = await gistsUnstarWithHttpInfo(gistId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Update a gist with HTTP info returned
  ///
  /// Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren&#39;t explicitly changed during an edit are unchanged.
  Future<Response> gistsUpdateWithHttpInfo(String gistId, { UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE }) async {
    Object postBody = UNKNOWN_BASE_TYPE;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString());

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

  /// Update a gist
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE :
  ///    
  /// Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren&#39;t explicitly changed during an edit are unchanged.
  Future<GistFull> gistsUpdate(String gistId, { UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE }) async {
    Response response = await gistsUpdateWithHttpInfo(gistId,  UNKNOWN_BASE_TYPE: UNKNOWN_BASE_TYPE );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GistFull') as GistFull;
    } else {
      return null;
    }
  }

  /// Update a gist comment with HTTP info returned
  ///
  /// 
  Future<Response> gistsUpdateCommentWithHttpInfo(String gistId, int commentId, { InlineObject12 inlineObject12 }) async {
    Object postBody = inlineObject12;

    // verify required params are set
    if(gistId == null) {
     throw ApiException(400, "Missing required param: gistId");
    }
    if(commentId == null) {
     throw ApiException(400, "Missing required param: commentId");
    }

    // create path and map variables
    String path = "/gists/{gist_id}/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "gist_id" + "}", gistId.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Update a gist comment
  ///
  ///String gistId  (required):
  ///     gist_id parameter
  ///int commentId  (required):
  ///     comment_id parameter
  ///InlineObject12 inlineObject12 :
  ///    
  /// 
  Future<GistComment> gistsUpdateComment(String gistId, int commentId, { InlineObject12 inlineObject12 }) async {
    Response response = await gistsUpdateCommentWithHttpInfo(gistId, commentId,  inlineObject12: inlineObject12 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GistComment') as GistComment;
    } else {
      return null;
    }
  }

}
