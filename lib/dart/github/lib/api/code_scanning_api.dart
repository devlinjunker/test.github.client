part of openapi.api;



class CodeScanningApi {
  final ApiClient apiClient;

  CodeScanningApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Get a code scanning alert with HTTP info returned
  ///
  /// Gets a single code scanning alert. You must use an access token with the &#x60;security_events&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;security_events&#x60; read permission to use this endpoint.  The security &#x60;alert_id&#x60; is found at the end of the security alert&#39;s URL. For example, the security alert ID for &#x60;https://github.com/Octo-org/octo-repo/security/code-scanning/88&#x60; is &#x60;88&#x60;.
  Future<Response> codeScanningGetAlertWithHttpInfo(String owner, String repo, int alertId) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(alertId == null) {
     throw ApiException(400, "Missing required param: alertId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/code-scanning/alerts/{alert_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "alert_id" + "}", alertId.toString());

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

  /// Get a code scanning alert
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int alertId  (required):
  ///     alert_id parameter
  /// Gets a single code scanning alert. You must use an access token with the &#x60;security_events&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;security_events&#x60; read permission to use this endpoint.  The security &#x60;alert_id&#x60; is found at the end of the security alert&#39;s URL. For example, the security alert ID for &#x60;https://github.com/Octo-org/octo-repo/security/code-scanning/88&#x60; is &#x60;88&#x60;.
  Future<CodeScanningAlert> codeScanningGetAlert(String owner, String repo, int alertId) async {
    Response response = await codeScanningGetAlertWithHttpInfo(owner, repo, alertId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'CodeScanningAlert') as CodeScanningAlert;
    } else {
      return null;
    }
  }

  /// List code scanning alerts for a repository with HTTP info returned
  ///
  /// Lists all open code scanning alerts for the default branch (usually &#x60;master&#x60;) and protected branches in a repository. You must use an access token with the &#x60;security_events&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;security_events&#x60; read permission to use this endpoint.
  Future<Response> codeScanningListAlertsForRepoWithHttpInfo(String owner, String repo, { String state, String ref }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/code-scanning/alerts".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
    }
    if(ref != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "ref", ref));
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

  /// List code scanning alerts for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String state :
  ///     Set to `closed` to list only closed code scanning alerts.
  ///String ref :
  ///     Returns a list of code scanning alerts for a specific brach reference. The `ref` must be formatted as `heads/<branch name>`.
  /// Lists all open code scanning alerts for the default branch (usually &#x60;master&#x60;) and protected branches in a repository. You must use an access token with the &#x60;security_events&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;security_events&#x60; read permission to use this endpoint.
  Future<List<CodeScanningAlert>> codeScanningListAlertsForRepo(String owner, String repo, { String state, String ref }) async {
    Response response = await codeScanningListAlertsForRepoWithHttpInfo(owner, repo,  state: state, ref: ref );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<CodeScanningAlert>') as List).map((item) => item as CodeScanningAlert).toList();
    } else {
      return null;
    }
  }

}
