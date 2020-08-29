part of openapi.api;



class IssuesApi {
  final ApiClient apiClient;

  IssuesApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Add assignees to an issue with HTTP info returned
  ///
  /// Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
  Future<Response> issuesAddAssigneesWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject84 inlineObject84 }) async {
    Object postBody = inlineObject84;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/assignees".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Add assignees to an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject84 inlineObject84 :
  ///    
  /// Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
  Future<IssueSimple> issuesAddAssignees(String owner, String repo, int issueNumber, { InlineObject84 inlineObject84 }) async {
    Response response = await issuesAddAssigneesWithHttpInfo(owner, repo, issueNumber,  inlineObject84: inlineObject84 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'IssueSimple') as IssueSimple;
    } else {
      return null;
    }
  }

  /// Add labels to an issue with HTTP info returned
  ///
  /// 
  Future<Response> issuesAddLabelsWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject88 inlineObject88 }) async {
    Object postBody = inlineObject88;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/labels".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Add labels to an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject88 inlineObject88 :
  ///    
  /// 
  Future<List<Label>> issuesAddLabels(String owner, String repo, int issueNumber, { InlineObject88 inlineObject88 }) async {
    Response response = await issuesAddLabelsWithHttpInfo(owner, repo, issueNumber,  inlineObject88: inlineObject88 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Label>') as List).map((item) => item as Label).toList();
    } else {
      return null;
    }
  }

  /// Check if a user can be assigned with HTTP info returned
  ///
  /// Checks if a user has permission to be assigned to an issue in this repository.  If the &#x60;assignee&#x60; can be assigned to issues in the repository, a &#x60;204&#x60; header with no content is returned.  Otherwise a &#x60;404&#x60; status code is returned.
  Future issuesCheckUserCanBeAssignedWithHttpInfo(String owner, String repo, String assignee) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(assignee == null) {
     throw ApiException(400, "Missing required param: assignee");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/assignees/{assignee}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "assignee" + "}", assignee.toString());

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

  /// Check if a user can be assigned
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String assignee  (required):
  ///     assignee parameter
  /// Checks if a user has permission to be assigned to an issue in this repository.  If the &#x60;assignee&#x60; can be assigned to issues in the repository, a &#x60;204&#x60; header with no content is returned.  Otherwise a &#x60;404&#x60; status code is returned.
  Future issuesCheckUserCanBeAssigned(String owner, String repo, String assignee) async {
    Response response = await issuesCheckUserCanBeAssignedWithHttpInfo(owner, repo, assignee);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Create an issue with HTTP info returned
  ///
  /// Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a &#x60;410 Gone&#x60; status.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<Response> issuesCreateWithHttpInfo(String owner, String repo, { InlineObject80 inlineObject80 }) async {
    Object postBody = inlineObject80;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject80 inlineObject80 :
  ///    
  /// Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a &#x60;410 Gone&#x60; status.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<Issue> issuesCreate(String owner, String repo, { InlineObject80 inlineObject80 }) async {
    Response response = await issuesCreateWithHttpInfo(owner, repo,  inlineObject80: inlineObject80 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Issue') as Issue;
    } else {
      return null;
    }
  }

  /// Create an issue comment with HTTP info returned
  ///
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<Response> issuesCreateCommentWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject86 inlineObject86 }) async {
    Object postBody = inlineObject86;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/comments".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Create an issue comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject86 inlineObject86 :
  ///    
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<IssueComment> issuesCreateComment(String owner, String repo, int issueNumber, { InlineObject86 inlineObject86 }) async {
    Response response = await issuesCreateCommentWithHttpInfo(owner, repo, issueNumber,  inlineObject86: inlineObject86 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'IssueComment') as IssueComment;
    } else {
      return null;
    }
  }

  /// Create a label with HTTP info returned
  ///
  /// 
  Future<Response> issuesCreateLabelWithHttpInfo(String owner, String repo, { InlineObject92 inlineObject92 }) async {
    Object postBody = inlineObject92;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/labels".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a label
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject92 inlineObject92 :
  ///    
  /// 
  Future<Label> issuesCreateLabel(String owner, String repo, { InlineObject92 inlineObject92 }) async {
    Response response = await issuesCreateLabelWithHttpInfo(owner, repo,  inlineObject92: inlineObject92 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Label') as Label;
    } else {
      return null;
    }
  }

  /// Create a milestone with HTTP info returned
  ///
  /// 
  Future<Response> issuesCreateMilestoneWithHttpInfo(String owner, String repo, { InlineObject95 inlineObject95 }) async {
    Object postBody = inlineObject95;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/milestones".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a milestone
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject95 inlineObject95 :
  ///    
  /// 
  Future<Milestone> issuesCreateMilestone(String owner, String repo, { InlineObject95 inlineObject95 }) async {
    Response response = await issuesCreateMilestoneWithHttpInfo(owner, repo,  inlineObject95: inlineObject95 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Milestone') as Milestone;
    } else {
      return null;
    }
  }

  /// Delete an issue comment with HTTP info returned
  ///
  /// 
  Future issuesDeleteCommentWithHttpInfo(String owner, String repo, int commentId) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(commentId == null) {
     throw ApiException(400, "Missing required param: commentId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Delete an issue comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  /// 
  Future issuesDeleteComment(String owner, String repo, int commentId) async {
    Response response = await issuesDeleteCommentWithHttpInfo(owner, repo, commentId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a label with HTTP info returned
  ///
  /// 
  Future issuesDeleteLabelWithHttpInfo(String owner, String repo, String name) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(name == null) {
     throw ApiException(400, "Missing required param: name");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/labels/{name}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "name" + "}", name.toString());

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

  /// Delete a label
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String name  (required):
  ///     name parameter
  /// 
  Future issuesDeleteLabel(String owner, String repo, String name) async {
    Response response = await issuesDeleteLabelWithHttpInfo(owner, repo, name);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a milestone with HTTP info returned
  ///
  /// 
  Future issuesDeleteMilestoneWithHttpInfo(String owner, String repo, int milestoneNumber) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(milestoneNumber == null) {
     throw ApiException(400, "Missing required param: milestoneNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/milestones/{milestone_number}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "milestone_number" + "}", milestoneNumber.toString());

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

  /// Delete a milestone
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int milestoneNumber  (required):
  ///     milestone_number parameter
  /// 
  Future issuesDeleteMilestone(String owner, String repo, int milestoneNumber) async {
    Response response = await issuesDeleteMilestoneWithHttpInfo(owner, repo, milestoneNumber);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Get an issue with HTTP info returned
  ///
  /// The API returns a [&#x60;301 Moved Permanently&#x60; status](https://developer.github.com/v3/#http-redirects) if the issue was [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a &#x60;404 Not Found&#x60; status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a &#x60;410 Gone&#x60; status. To receive webhook events for transferred and deleted issues, subscribe to the [&#x60;issues&#x60;](https://developer.github.com/webhooks/event-payloads/#issues) webhook.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<Response> issuesGetWithHttpInfo(String owner, String repo, int issueNumber) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Get an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  /// The API returns a [&#x60;301 Moved Permanently&#x60; status](https://developer.github.com/v3/#http-redirects) if the issue was [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a &#x60;404 Not Found&#x60; status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a &#x60;410 Gone&#x60; status. To receive webhook events for transferred and deleted issues, subscribe to the [&#x60;issues&#x60;](https://developer.github.com/webhooks/event-payloads/#issues) webhook.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<Issue> issuesGet(String owner, String repo, int issueNumber) async {
    Response response = await issuesGetWithHttpInfo(owner, repo, issueNumber);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Issue') as Issue;
    } else {
      return null;
    }
  }

  /// Get an issue comment with HTTP info returned
  ///
  /// 
  Future<Response> issuesGetCommentWithHttpInfo(String owner, String repo, int commentId) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(commentId == null) {
     throw ApiException(400, "Missing required param: commentId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Get an issue comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  /// 
  Future<IssueComment> issuesGetComment(String owner, String repo, int commentId) async {
    Response response = await issuesGetCommentWithHttpInfo(owner, repo, commentId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'IssueComment') as IssueComment;
    } else {
      return null;
    }
  }

  /// Get an issue event with HTTP info returned
  ///
  /// 
  Future<Response> issuesGetEventWithHttpInfo(String owner, String repo, int eventId) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(eventId == null) {
     throw ApiException(400, "Missing required param: eventId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/events/{event_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "event_id" + "}", eventId.toString());

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

  /// Get an issue event
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int eventId  (required):
  ///     event_id parameter
  /// 
  Future<IssueEvent> issuesGetEvent(String owner, String repo, int eventId) async {
    Response response = await issuesGetEventWithHttpInfo(owner, repo, eventId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'IssueEvent') as IssueEvent;
    } else {
      return null;
    }
  }

  /// Get a label with HTTP info returned
  ///
  /// 
  Future<Response> issuesGetLabelWithHttpInfo(String owner, String repo, String name) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(name == null) {
     throw ApiException(400, "Missing required param: name");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/labels/{name}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "name" + "}", name.toString());

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

  /// Get a label
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String name  (required):
  ///     name parameter
  /// 
  Future<Label> issuesGetLabel(String owner, String repo, String name) async {
    Response response = await issuesGetLabelWithHttpInfo(owner, repo, name);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Label') as Label;
    } else {
      return null;
    }
  }

  /// Get a milestone with HTTP info returned
  ///
  /// 
  Future<Response> issuesGetMilestoneWithHttpInfo(String owner, String repo, int milestoneNumber) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(milestoneNumber == null) {
     throw ApiException(400, "Missing required param: milestoneNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/milestones/{milestone_number}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "milestone_number" + "}", milestoneNumber.toString());

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

  /// Get a milestone
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int milestoneNumber  (required):
  ///     milestone_number parameter
  /// 
  Future<Milestone> issuesGetMilestone(String owner, String repo, int milestoneNumber) async {
    Response response = await issuesGetMilestoneWithHttpInfo(owner, repo, milestoneNumber);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Milestone') as Milestone;
    } else {
      return null;
    }
  }

  /// List issues assigned to the authenticated user with HTTP info returned
  ///
  /// List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. You can use the &#x60;filter&#x60; query parameter to fetch issues that are not necessarily assigned to you. See the [Parameters table](https://developer.github.com/v3/issues/#parameters) for more information.   **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<Response> issuesListWithHttpInfo({ String filter, String state, String labels, String sort, String direction, String since, bool collab, bool orgs, bool owned, bool pulls, int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/issues".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(filter != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "filter", filter));
    }
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
    }
    if(labels != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "labels", labels));
    }
    if(sort != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "sort", sort));
    }
    if(direction != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "direction", direction));
    }
    if(since != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "since", since));
    }
    if(collab != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "collab", collab));
    }
    if(orgs != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "orgs", orgs));
    }
    if(owned != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "owned", owned));
    }
    if(pulls != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "pulls", pulls));
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

  /// List issues assigned to the authenticated user
  ///
  ///String filter :
  ///     Indicates which sorts of issues to return. Can be one of:   \\* `assigned`: Issues assigned to you   \\* `created`: Issues created by you   \\* `mentioned`: Issues mentioning you   \\* `subscribed`: Issues you're subscribed to updates for   \\* `all`: All issues the authenticated user can see, regardless of participation or creation
  ///String state :
  ///     Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  ///String labels :
  ///     A list of comma separated label names. Example: `bug,ui,@high`
  ///String sort :
  ///     What to sort results by. Can be either `created`, `updated`, `comments`.
  ///String direction :
  ///     One of `asc` (ascending) or `desc` (descending).
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///bool collab :
  ///    
  ///bool orgs :
  ///    
  ///bool owned :
  ///    
  ///bool pulls :
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. You can use the &#x60;filter&#x60; query parameter to fetch issues that are not necessarily assigned to you. See the [Parameters table](https://developer.github.com/v3/issues/#parameters) for more information.   **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<List<Issue>> issuesList({ String filter, String state, String labels, String sort, String direction, String since, bool collab, bool orgs, bool owned, bool pulls, int perPage, int page }) async {
    Response response = await issuesListWithHttpInfo( filter: filter, state: state, labels: labels, sort: sort, direction: direction, since: since, collab: collab, orgs: orgs, owned: owned, pulls: pulls, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Issue>') as List).map((item) => item as Issue).toList();
    } else {
      return null;
    }
  }

  /// List assignees with HTTP info returned
  ///
  /// Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
  Future<Response> issuesListAssigneesWithHttpInfo(String owner, String repo, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/assignees".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// List assignees
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
  Future<List<SimpleUser>> issuesListAssignees(String owner, String repo, { int perPage, int page }) async {
    Response response = await issuesListAssigneesWithHttpInfo(owner, repo,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<SimpleUser>') as List).map((item) => item as SimpleUser).toList();
    } else {
      return null;
    }
  }

  /// List issue comments with HTTP info returned
  ///
  /// Issue Comments are ordered by ascending ID.
  Future<Response> issuesListCommentsWithHttpInfo(String owner, String repo, int issueNumber, { String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/comments".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// List issue comments
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Issue Comments are ordered by ascending ID.
  Future<List<IssueComment>> issuesListComments(String owner, String repo, int issueNumber, { String since, int perPage, int page }) async {
    Response response = await issuesListCommentsWithHttpInfo(owner, repo, issueNumber,  since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<IssueComment>') as List).map((item) => item as IssueComment).toList();
    } else {
      return null;
    }
  }

  /// List issue comments for a repository with HTTP info returned
  ///
  /// By default, Issue Comments are ordered by ascending ID.
  Future<Response> issuesListCommentsForRepoWithHttpInfo(String owner, String repo, { String sort, String direction, String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/comments".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(sort != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "sort", sort));
    }
    if(direction != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "direction", direction));
    }
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

  /// List issue comments for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String sort :
  ///     One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  ///String direction :
  ///     Either `asc` or `desc`. Ignored without the `sort` parameter.
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// By default, Issue Comments are ordered by ascending ID.
  Future<List<IssueComment>> issuesListCommentsForRepo(String owner, String repo, { String sort, String direction, String since, int perPage, int page }) async {
    Response response = await issuesListCommentsForRepoWithHttpInfo(owner, repo,  sort: sort, direction: direction, since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<IssueComment>') as List).map((item) => item as IssueComment).toList();
    } else {
      return null;
    }
  }

  /// List issue events with HTTP info returned
  ///
  /// 
  Future<Response> issuesListEventsWithHttpInfo(String owner, String repo, int issueNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/events".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// List issue events
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<IssueEventForIssue>> issuesListEvents(String owner, String repo, int issueNumber, { int perPage, int page }) async {
    Response response = await issuesListEventsWithHttpInfo(owner, repo, issueNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<IssueEventForIssue>') as List).map((item) => item as IssueEventForIssue).toList();
    } else {
      return null;
    }
  }

  /// List issue events for a repository with HTTP info returned
  ///
  /// 
  Future<Response> issuesListEventsForRepoWithHttpInfo(String owner, String repo, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/events".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// List issue events for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<IssueEvent>> issuesListEventsForRepo(String owner, String repo, { int perPage, int page }) async {
    Response response = await issuesListEventsForRepoWithHttpInfo(owner, repo,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<IssueEvent>') as List).map((item) => item as IssueEvent).toList();
    } else {
      return null;
    }
  }

  /// List timeline events for an issue with HTTP info returned
  ///
  /// 
  Future<Response> issuesListEventsForTimelineWithHttpInfo(String owner, String repo, int issueNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/timeline".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// List timeline events for an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<IssueEventForIssue>> issuesListEventsForTimeline(String owner, String repo, int issueNumber, { int perPage, int page }) async {
    Response response = await issuesListEventsForTimelineWithHttpInfo(owner, repo, issueNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<IssueEventForIssue>') as List).map((item) => item as IssueEventForIssue).toList();
    } else {
      return null;
    }
  }

  /// List user account issues assigned to the authenticated user with HTTP info returned
  ///
  /// List issues across owned and member repositories assigned to the authenticated user.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<Response> issuesListForAuthenticatedUserWithHttpInfo({ String filter, String state, String labels, String sort, String direction, String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/user/issues".replaceAll("{format}","json");

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(filter != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "filter", filter));
    }
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
    }
    if(labels != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "labels", labels));
    }
    if(sort != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "sort", sort));
    }
    if(direction != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "direction", direction));
    }
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

  /// List user account issues assigned to the authenticated user
  ///
  ///String filter :
  ///     Indicates which sorts of issues to return. Can be one of:   \\* `assigned`: Issues assigned to you   \\* `created`: Issues created by you   \\* `mentioned`: Issues mentioning you   \\* `subscribed`: Issues you're subscribed to updates for   \\* `all`: All issues the authenticated user can see, regardless of participation or creation
  ///String state :
  ///     Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  ///String labels :
  ///     A list of comma separated label names. Example: `bug,ui,@high`
  ///String sort :
  ///     What to sort results by. Can be either `created`, `updated`, `comments`.
  ///String direction :
  ///     One of `asc` (ascending) or `desc` (descending).
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List issues across owned and member repositories assigned to the authenticated user.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<List<Issue>> issuesListForAuthenticatedUser({ String filter, String state, String labels, String sort, String direction, String since, int perPage, int page }) async {
    Response response = await issuesListForAuthenticatedUserWithHttpInfo( filter: filter, state: state, labels: labels, sort: sort, direction: direction, since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Issue>') as List).map((item) => item as Issue).toList();
    } else {
      return null;
    }
  }

  /// List organization issues assigned to the authenticated user with HTTP info returned
  ///
  /// List issues in an organization assigned to the authenticated user.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<Response> issuesListForOrgWithHttpInfo(String org, { String filter, String state, String labels, String sort, String direction, String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/issues".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(filter != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "filter", filter));
    }
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
    }
    if(labels != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "labels", labels));
    }
    if(sort != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "sort", sort));
    }
    if(direction != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "direction", direction));
    }
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

  /// List organization issues assigned to the authenticated user
  ///
  ///String org  (required):
  ///    
  ///String filter :
  ///     Indicates which sorts of issues to return. Can be one of:   \\* `assigned`: Issues assigned to you   \\* `created`: Issues created by you   \\* `mentioned`: Issues mentioning you   \\* `subscribed`: Issues you're subscribed to updates for   \\* `all`: All issues the authenticated user can see, regardless of participation or creation
  ///String state :
  ///     Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  ///String labels :
  ///     A list of comma separated label names. Example: `bug,ui,@high`
  ///String sort :
  ///     What to sort results by. Can be either `created`, `updated`, `comments`.
  ///String direction :
  ///     One of `asc` (ascending) or `desc` (descending).
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List issues in an organization assigned to the authenticated user.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<List<Issue>> issuesListForOrg(String org, { String filter, String state, String labels, String sort, String direction, String since, int perPage, int page }) async {
    Response response = await issuesListForOrgWithHttpInfo(org,  filter: filter, state: state, labels: labels, sort: sort, direction: direction, since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Issue>') as List).map((item) => item as Issue).toList();
    } else {
      return null;
    }
  }

  /// List repository issues with HTTP info returned
  ///
  /// List issues in a repository.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<Response> issuesListForRepoWithHttpInfo(String owner, String repo, { String milestone, String state, String assignee, String creator, String mentioned, String labels, String sort, String direction, String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(milestone != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "milestone", milestone));
    }
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
    }
    if(assignee != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "assignee", assignee));
    }
    if(creator != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "creator", creator));
    }
    if(mentioned != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "mentioned", mentioned));
    }
    if(labels != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "labels", labels));
    }
    if(sort != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "sort", sort));
    }
    if(direction != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "direction", direction));
    }
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

  /// List repository issues
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String milestone :
  ///     If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
  ///String state :
  ///     Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  ///String assignee :
  ///     Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
  ///String creator :
  ///     The user that created the issue.
  ///String mentioned :
  ///     A user that's mentioned in the issue.
  ///String labels :
  ///     A list of comma separated label names. Example: `bug,ui,@high`
  ///String sort :
  ///     What to sort results by. Can be either `created`, `updated`, `comments`.
  ///String direction :
  ///     One of `asc` (ascending) or `desc` (descending).
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List issues in a repository.  **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key. Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<List<IssueSimple>> issuesListForRepo(String owner, String repo, { String milestone, String state, String assignee, String creator, String mentioned, String labels, String sort, String direction, String since, int perPage, int page }) async {
    Response response = await issuesListForRepoWithHttpInfo(owner, repo,  milestone: milestone, state: state, assignee: assignee, creator: creator, mentioned: mentioned, labels: labels, sort: sort, direction: direction, since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<IssueSimple>') as List).map((item) => item as IssueSimple).toList();
    } else {
      return null;
    }
  }

  /// List labels for issues in a milestone with HTTP info returned
  ///
  /// 
  Future<Response> issuesListLabelsForMilestoneWithHttpInfo(String owner, String repo, int milestoneNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(milestoneNumber == null) {
     throw ApiException(400, "Missing required param: milestoneNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/milestones/{milestone_number}/labels".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "milestone_number" + "}", milestoneNumber.toString());

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

  /// List labels for issues in a milestone
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int milestoneNumber  (required):
  ///     milestone_number parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<Label>> issuesListLabelsForMilestone(String owner, String repo, int milestoneNumber, { int perPage, int page }) async {
    Response response = await issuesListLabelsForMilestoneWithHttpInfo(owner, repo, milestoneNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Label>') as List).map((item) => item as Label).toList();
    } else {
      return null;
    }
  }

  /// List labels for a repository with HTTP info returned
  ///
  /// 
  Future<Response> issuesListLabelsForRepoWithHttpInfo(String owner, String repo, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/labels".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// List labels for a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<Label>> issuesListLabelsForRepo(String owner, String repo, { int perPage, int page }) async {
    Response response = await issuesListLabelsForRepoWithHttpInfo(owner, repo,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Label>') as List).map((item) => item as Label).toList();
    } else {
      return null;
    }
  }

  /// List labels for an issue with HTTP info returned
  ///
  /// 
  Future<Response> issuesListLabelsOnIssueWithHttpInfo(String owner, String repo, int issueNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/labels".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// List labels for an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<Label>> issuesListLabelsOnIssue(String owner, String repo, int issueNumber, { int perPage, int page }) async {
    Response response = await issuesListLabelsOnIssueWithHttpInfo(owner, repo, issueNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Label>') as List).map((item) => item as Label).toList();
    } else {
      return null;
    }
  }

  /// List milestones with HTTP info returned
  ///
  /// 
  Future<Response> issuesListMilestonesWithHttpInfo(String owner, String repo, { String state, String sort, String direction, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/milestones".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
    }
    if(sort != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "sort", sort));
    }
    if(direction != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "direction", direction));
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

  /// List milestones
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String state :
  ///     The state of the milestone. Either `open`, `closed`, or `all`.
  ///String sort :
  ///     What to sort results by. Either `due_on` or `completeness`.
  ///String direction :
  ///     The direction of the sort. Either `asc` or `desc`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<Milestone>> issuesListMilestones(String owner, String repo, { String state, String sort, String direction, int perPage, int page }) async {
    Response response = await issuesListMilestonesWithHttpInfo(owner, repo,  state: state, sort: sort, direction: direction, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Milestone>') as List).map((item) => item as Milestone).toList();
    } else {
      return null;
    }
  }

  /// Lock an issue with HTTP info returned
  ///
  /// Users with push access can lock an issue or pull request&#39;s conversation.  Note that, if you choose not to pass any parameters, you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;
  Future issuesLockWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject89 inlineObject89 }) async {
    Object postBody = inlineObject89;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/lock".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Lock an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject89 inlineObject89 :
  ///    
  /// Users with push access can lock an issue or pull request&#39;s conversation.  Note that, if you choose not to pass any parameters, you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;
  Future issuesLock(String owner, String repo, int issueNumber, { InlineObject89 inlineObject89 }) async {
    Response response = await issuesLockWithHttpInfo(owner, repo, issueNumber,  inlineObject89: inlineObject89 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Remove all labels from an issue with HTTP info returned
  ///
  /// 
  Future issuesRemoveAllLabelsWithHttpInfo(String owner, String repo, int issueNumber) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/labels".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Remove all labels from an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  /// 
  Future issuesRemoveAllLabels(String owner, String repo, int issueNumber) async {
    Response response = await issuesRemoveAllLabelsWithHttpInfo(owner, repo, issueNumber);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Remove assignees from an issue with HTTP info returned
  ///
  /// Removes one or more assignees from an issue.
  Future<Response> issuesRemoveAssigneesWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject85 inlineObject85 }) async {
    Object postBody = inlineObject85;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/assignees".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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
                                             'DELETE',
                                             queryParams,
                                             postBody,
                                             headerParams,
                                             formParams,
                                             nullableContentType,
                                             authNames);
    return response;
  }

  /// Remove assignees from an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject85 inlineObject85 :
  ///    
  /// Removes one or more assignees from an issue.
  Future<IssueSimple> issuesRemoveAssignees(String owner, String repo, int issueNumber, { InlineObject85 inlineObject85 }) async {
    Response response = await issuesRemoveAssigneesWithHttpInfo(owner, repo, issueNumber,  inlineObject85: inlineObject85 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'IssueSimple') as IssueSimple;
    } else {
      return null;
    }
  }

  /// Remove a label from an issue with HTTP info returned
  ///
  /// Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a &#x60;404 Not Found&#x60; status if the label does not exist.
  Future<Response> issuesRemoveLabelWithHttpInfo(String owner, String repo, int issueNumber, String name) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }
    if(name == null) {
     throw ApiException(400, "Missing required param: name");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString()).replaceAll("{" + "name" + "}", name.toString());

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

  /// Remove a label from an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///String name  (required):
  ///     name parameter
  /// Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a &#x60;404 Not Found&#x60; status if the label does not exist.
  Future<List<Label>> issuesRemoveLabel(String owner, String repo, int issueNumber, String name) async {
    Response response = await issuesRemoveLabelWithHttpInfo(owner, repo, issueNumber, name);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Label>') as List).map((item) => item as Label).toList();
    } else {
      return null;
    }
  }

  /// Set labels for an issue with HTTP info returned
  ///
  /// Removes any previous labels and sets the new labels for an issue.
  Future<Response> issuesSetLabelsWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject87 inlineObject87 }) async {
    Object postBody = inlineObject87;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/labels".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Set labels for an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject87 inlineObject87 :
  ///    
  /// Removes any previous labels and sets the new labels for an issue.
  Future<List<Label>> issuesSetLabels(String owner, String repo, int issueNumber, { InlineObject87 inlineObject87 }) async {
    Response response = await issuesSetLabelsWithHttpInfo(owner, repo, issueNumber,  inlineObject87: inlineObject87 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Label>') as List).map((item) => item as Label).toList();
    } else {
      return null;
    }
  }

  /// Unlock an issue with HTTP info returned
  ///
  /// Users with push access can unlock an issue&#39;s conversation.
  Future issuesUnlockWithHttpInfo(String owner, String repo, int issueNumber) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/lock".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Unlock an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  /// Users with push access can unlock an issue&#39;s conversation.
  Future issuesUnlock(String owner, String repo, int issueNumber) async {
    Response response = await issuesUnlockWithHttpInfo(owner, repo, issueNumber);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Update an issue with HTTP info returned
  ///
  /// Issue owners and users with push access can edit an issue.
  Future<Response> issuesUpdateWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject83 inlineObject83 }) async {
    Object postBody = inlineObject83;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(issueNumber == null) {
     throw ApiException(400, "Missing required param: issueNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Update an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject83 inlineObject83 :
  ///    
  /// Issue owners and users with push access can edit an issue.
  Future<Issue> issuesUpdate(String owner, String repo, int issueNumber, { InlineObject83 inlineObject83 }) async {
    Response response = await issuesUpdateWithHttpInfo(owner, repo, issueNumber,  inlineObject83: inlineObject83 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Issue') as Issue;
    } else {
      return null;
    }
  }

  /// Update an issue comment with HTTP info returned
  ///
  /// 
  Future<Response> issuesUpdateCommentWithHttpInfo(String owner, String repo, int commentId, { InlineObject81 inlineObject81 }) async {
    Object postBody = inlineObject81;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(commentId == null) {
     throw ApiException(400, "Missing required param: commentId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Update an issue comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///InlineObject81 inlineObject81 :
  ///    
  /// 
  Future<IssueComment> issuesUpdateComment(String owner, String repo, int commentId, { InlineObject81 inlineObject81 }) async {
    Response response = await issuesUpdateCommentWithHttpInfo(owner, repo, commentId,  inlineObject81: inlineObject81 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'IssueComment') as IssueComment;
    } else {
      return null;
    }
  }

  /// Update a label with HTTP info returned
  ///
  /// 
  Future<Response> issuesUpdateLabelWithHttpInfo(String owner, String repo, String name, { InlineObject93 inlineObject93 }) async {
    Object postBody = inlineObject93;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(name == null) {
     throw ApiException(400, "Missing required param: name");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/labels/{name}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "name" + "}", name.toString());

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

  /// Update a label
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String name  (required):
  ///     name parameter
  ///InlineObject93 inlineObject93 :
  ///    
  /// 
  Future<Label> issuesUpdateLabel(String owner, String repo, String name, { InlineObject93 inlineObject93 }) async {
    Response response = await issuesUpdateLabelWithHttpInfo(owner, repo, name,  inlineObject93: inlineObject93 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Label') as Label;
    } else {
      return null;
    }
  }

  /// Update a milestone with HTTP info returned
  ///
  /// 
  Future<Response> issuesUpdateMilestoneWithHttpInfo(String owner, String repo, int milestoneNumber, { InlineObject96 inlineObject96 }) async {
    Object postBody = inlineObject96;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(milestoneNumber == null) {
     throw ApiException(400, "Missing required param: milestoneNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/milestones/{milestone_number}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "milestone_number" + "}", milestoneNumber.toString());

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

  /// Update a milestone
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int milestoneNumber  (required):
  ///     milestone_number parameter
  ///InlineObject96 inlineObject96 :
  ///    
  /// 
  Future<Milestone> issuesUpdateMilestone(String owner, String repo, int milestoneNumber, { InlineObject96 inlineObject96 }) async {
    Response response = await issuesUpdateMilestoneWithHttpInfo(owner, repo, milestoneNumber,  inlineObject96: inlineObject96 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Milestone') as Milestone;
    } else {
      return null;
    }
  }

}
