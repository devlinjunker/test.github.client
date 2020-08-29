part of openapi.api;



class GitApi {
  final ApiClient apiClient;

  GitApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Create a blob with HTTP info returned
  ///
  /// 
  Future<Response> gitCreateBlobWithHttpInfo(String owner, String repo, { InlineObject66 inlineObject66 }) async {
    Object postBody = inlineObject66;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/blobs".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a blob
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject66 inlineObject66 :
  ///    
  /// 
  Future<ShortBlob> gitCreateBlob(String owner, String repo, { InlineObject66 inlineObject66 }) async {
    Response response = await gitCreateBlobWithHttpInfo(owner, repo,  inlineObject66: inlineObject66 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ShortBlob') as ShortBlob;
    } else {
      return null;
    }
  }

  /// Create a commit with HTTP info returned
  ///
  /// Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  In this example, the payload of the signature would be:    **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<Response> gitCreateCommitWithHttpInfo(String owner, String repo, { InlineObject67 inlineObject67 }) async {
    Object postBody = inlineObject67;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/commits".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a commit
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject67 inlineObject67 :
  ///    
  /// Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  In this example, the payload of the signature would be:    **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<GitCommit> gitCreateCommit(String owner, String repo, { InlineObject67 inlineObject67 }) async {
    Response response = await gitCreateCommitWithHttpInfo(owner, repo,  inlineObject67: inlineObject67 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitCommit') as GitCommit;
    } else {
      return null;
    }
  }

  /// Create a reference with HTTP info returned
  ///
  /// Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
  Future<Response> gitCreateRefWithHttpInfo(String owner, String repo, { InlineObject68 inlineObject68 }) async {
    Object postBody = inlineObject68;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/refs".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a reference
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject68 inlineObject68 :
  ///    
  /// Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
  Future<GitRef> gitCreateRef(String owner, String repo, { InlineObject68 inlineObject68 }) async {
    Response response = await gitCreateRefWithHttpInfo(owner, repo,  inlineObject68: inlineObject68 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitRef') as GitRef;
    } else {
      return null;
    }
  }

  /// Create a tag object with HTTP info returned
  ///
  /// Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://developer.github.com/v3/git/refs/#create-a-reference) the &#x60;refs/tags/[tag]&#x60; reference. If you want to create a lightweight tag, you only have to [create](https://developer.github.com/v3/git/refs/#create-a-reference) the tag reference - this call would be unnecessary.  **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<Response> gitCreateTagWithHttpInfo(String owner, String repo, { InlineObject70 inlineObject70 }) async {
    Object postBody = inlineObject70;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/tags".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a tag object
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject70 inlineObject70 :
  ///    
  /// Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://developer.github.com/v3/git/refs/#create-a-reference) the &#x60;refs/tags/[tag]&#x60; reference. If you want to create a lightweight tag, you only have to [create](https://developer.github.com/v3/git/refs/#create-a-reference) the tag reference - this call would be unnecessary.  **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<GitTag> gitCreateTag(String owner, String repo, { InlineObject70 inlineObject70 }) async {
    Response response = await gitCreateTagWithHttpInfo(owner, repo,  inlineObject70: inlineObject70 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitTag') as GitTag;
    } else {
      return null;
    }
  }

  /// Create a tree with HTTP info returned
  ///
  /// The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.  If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see \&quot;[Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)\&quot; and \&quot;[Update a reference](https://developer.github.com/v3/git/refs/#update-a-reference).\&quot;
  Future<Response> gitCreateTreeWithHttpInfo(String owner, String repo, { InlineObject71 inlineObject71 }) async {
    Object postBody = inlineObject71;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/trees".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a tree
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject71 inlineObject71 :
  ///    
  /// The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.  If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see \&quot;[Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)\&quot; and \&quot;[Update a reference](https://developer.github.com/v3/git/refs/#update-a-reference).\&quot;
  Future<GitTree> gitCreateTree(String owner, String repo, { InlineObject71 inlineObject71 }) async {
    Response response = await gitCreateTreeWithHttpInfo(owner, repo,  inlineObject71: inlineObject71 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitTree') as GitTree;
    } else {
      return null;
    }
  }

  /// Delete a reference with HTTP info returned
  ///
  /// 
  Future gitDeleteRefWithHttpInfo(String owner, String repo, String ref) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(ref == null) {
     throw ApiException(400, "Missing required param: ref");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/refs/{ref}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "ref" + "}", ref.toString());

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

  /// Delete a reference
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String ref  (required):
  ///     ref+ parameter
  /// 
  Future gitDeleteRef(String owner, String repo, String ref) async {
    Response response = await gitDeleteRefWithHttpInfo(owner, repo, ref);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Get a blob with HTTP info returned
  ///
  /// The &#x60;content&#x60; in the response will always be Base64 encoded.  _Note_: This API supports blobs up to 100 megabytes in size.
  Future<Response> gitGetBlobWithHttpInfo(String owner, String repo, String fileSha) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(fileSha == null) {
     throw ApiException(400, "Missing required param: fileSha");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/blobs/{file_sha}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "file_sha" + "}", fileSha.toString());

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

  /// Get a blob
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String fileSha  (required):
  ///     file_sha parameter
  /// The &#x60;content&#x60; in the response will always be Base64 encoded.  _Note_: This API supports blobs up to 100 megabytes in size.
  Future<Blob> gitGetBlob(String owner, String repo, String fileSha) async {
    Response response = await gitGetBlobWithHttpInfo(owner, repo, fileSha);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Blob') as Blob;
    } else {
      return null;
    }
  }

  /// Get a commit with HTTP info returned
  ///
  /// Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<Response> gitGetCommitWithHttpInfo(String owner, String repo, String commitSha) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(commitSha == null) {
     throw ApiException(400, "Missing required param: commitSha");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/commits/{commit_sha}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "commit_sha" + "}", commitSha.toString());

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

  /// Get a commit
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String commitSha  (required):
  ///     commit_sha+ parameter
  /// Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<GitCommit> gitGetCommit(String owner, String repo, String commitSha) async {
    Response response = await gitGetCommitWithHttpInfo(owner, repo, commitSha);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitCommit') as GitCommit;
    } else {
      return null;
    }
  }

  /// Get a reference with HTTP info returned
  ///
  /// Returns a single reference from your Git database. The &#x60;:ref&#x60; in the URL must be formatted as &#x60;heads/&lt;branch name&gt;&#x60; for branches and &#x60;tags/&lt;tag name&gt;&#x60; for tags. If the &#x60;:ref&#x60; doesn&#39;t match an existing ref, a &#x60;404&#x60; is returned.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.
  Future<Response> gitGetRefWithHttpInfo(String owner, String repo, String ref) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(ref == null) {
     throw ApiException(400, "Missing required param: ref");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/ref/{ref}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "ref" + "}", ref.toString());

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

  /// Get a reference
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String ref  (required):
  ///     ref+ parameter
  /// Returns a single reference from your Git database. The &#x60;:ref&#x60; in the URL must be formatted as &#x60;heads/&lt;branch name&gt;&#x60; for branches and &#x60;tags/&lt;tag name&gt;&#x60; for tags. If the &#x60;:ref&#x60; doesn&#39;t match an existing ref, a &#x60;404&#x60; is returned.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.
  Future<GitRef> gitGetRef(String owner, String repo, String ref) async {
    Response response = await gitGetRefWithHttpInfo(owner, repo, ref);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitRef') as GitRef;
    } else {
      return null;
    }
  }

  /// Get a tag with HTTP info returned
  ///
  /// **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<Response> gitGetTagWithHttpInfo(String owner, String repo, String tagSha) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(tagSha == null) {
     throw ApiException(400, "Missing required param: tagSha");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/tags/{tag_sha}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "tag_sha" + "}", tagSha.toString());

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

  /// Get a tag
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String tagSha  (required):
  ///     tag_sha parameter
  /// **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
  Future<GitTag> gitGetTag(String owner, String repo, String tagSha) async {
    Response response = await gitGetTagWithHttpInfo(owner, repo, tagSha);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitTag') as GitTag;
    } else {
      return null;
    }
  }

  /// Get a tree with HTTP info returned
  ///
  /// Returns a single tree using the SHA1 value for that tree.  If &#x60;truncated&#x60; is &#x60;true&#x60; in the response then the number of items in the &#x60;tree&#x60; array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
  Future<Response> gitGetTreeWithHttpInfo(String owner, String repo, String treeSha, { String recursive }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(treeSha == null) {
     throw ApiException(400, "Missing required param: treeSha");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/trees/{tree_sha}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "tree_sha" + "}", treeSha.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(recursive != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "recursive", recursive));
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

  /// Get a tree
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String treeSha  (required):
  ///     tree_sha parameter
  ///String recursive :
  ///     Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `\"true\"`, and `\"false\"`. Omit this parameter to prevent recursively returning objects or subtrees.
  /// Returns a single tree using the SHA1 value for that tree.  If &#x60;truncated&#x60; is &#x60;true&#x60; in the response then the number of items in the &#x60;tree&#x60; array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
  Future<GitTree> gitGetTree(String owner, String repo, String treeSha, { String recursive }) async {
    Response response = await gitGetTreeWithHttpInfo(owner, repo, treeSha,  recursive: recursive );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitTree') as GitTree;
    } else {
      return null;
    }
  }

  /// List matching references with HTTP info returned
  ///
  /// Returns an array of references from your Git database that match the supplied name. The &#x60;:ref&#x60; in the URL must be formatted as &#x60;heads/&lt;branch name&gt;&#x60; for branches and &#x60;tags/&lt;tag name&gt;&#x60; for tags. If the &#x60;:ref&#x60; doesn&#39;t exist in the repository, but existing refs start with &#x60;:ref&#x60;, they will be returned as an array.  When you use this endpoint without providing a &#x60;:ref&#x60;, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just &#x60;heads&#x60; and &#x60;tags&#x60;.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.  If you request matching references for a branch named &#x60;feature&#x60; but the branch &#x60;feature&#x60; doesn&#39;t exist, the response can still include other matching head refs that start with the word &#x60;feature&#x60;, such as &#x60;featureA&#x60; and &#x60;featureB&#x60;.
  Future<Response> gitListMatchingRefsWithHttpInfo(String owner, String repo, String ref, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(ref == null) {
     throw ApiException(400, "Missing required param: ref");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/matching-refs/{ref}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "ref" + "}", ref.toString());

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

  /// List matching references
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String ref  (required):
  ///     ref+ parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Returns an array of references from your Git database that match the supplied name. The &#x60;:ref&#x60; in the URL must be formatted as &#x60;heads/&lt;branch name&gt;&#x60; for branches and &#x60;tags/&lt;tag name&gt;&#x60; for tags. If the &#x60;:ref&#x60; doesn&#39;t exist in the repository, but existing refs start with &#x60;:ref&#x60;, they will be returned as an array.  When you use this endpoint without providing a &#x60;:ref&#x60;, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just &#x60;heads&#x60; and &#x60;tags&#x60;.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.  If you request matching references for a branch named &#x60;feature&#x60; but the branch &#x60;feature&#x60; doesn&#39;t exist, the response can still include other matching head refs that start with the word &#x60;feature&#x60;, such as &#x60;featureA&#x60; and &#x60;featureB&#x60;.
  Future<List<GitRef>> gitListMatchingRefs(String owner, String repo, String ref, { int perPage, int page }) async {
    Response response = await gitListMatchingRefsWithHttpInfo(owner, repo, ref,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<GitRef>') as List).map((item) => item as GitRef).toList();
    } else {
      return null;
    }
  }

  /// Update a reference with HTTP info returned
  ///
  /// 
  Future<Response> gitUpdateRefWithHttpInfo(String owner, String repo, String ref, { InlineObject69 inlineObject69 }) async {
    Object postBody = inlineObject69;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(ref == null) {
     throw ApiException(400, "Missing required param: ref");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/git/refs/{ref}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "ref" + "}", ref.toString());

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

  /// Update a reference
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String ref  (required):
  ///     ref+ parameter
  ///InlineObject69 inlineObject69 :
  ///    
  /// 
  Future<GitRef> gitUpdateRef(String owner, String repo, String ref, { InlineObject69 inlineObject69 }) async {
    Response response = await gitUpdateRefWithHttpInfo(owner, repo, ref,  inlineObject69: inlineObject69 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'GitRef') as GitRef;
    } else {
      return null;
    }
  }

}
