part of openapi.api;



class ReactionsApi {
  final ApiClient apiClient;

  ReactionsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Create reaction for a commit comment with HTTP info returned
  ///
  /// Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this commit comment.
  Future<Response> reactionsCreateForCommitCommentWithHttpInfo(String owner, String repo, int commentId, { InlineObject58 inlineObject58 }) async {
    Object postBody = inlineObject58;

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
    String path = "/repos/{owner}/{repo}/comments/{comment_id}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Create reaction for a commit comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///InlineObject58 inlineObject58 :
  ///    
  /// Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this commit comment.
  Future<Reaction> reactionsCreateForCommitComment(String owner, String repo, int commentId, { InlineObject58 inlineObject58 }) async {
    Response response = await reactionsCreateForCommitCommentWithHttpInfo(owner, repo, commentId,  inlineObject58: inlineObject58 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Create reaction for an issue with HTTP info returned
  ///
  /// Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this issue.
  Future<Response> reactionsCreateForIssueWithHttpInfo(String owner, String repo, int issueNumber, { InlineObject90 inlineObject90 }) async {
    Object postBody = inlineObject90;

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
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

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

  /// Create reaction for an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///InlineObject90 inlineObject90 :
  ///    
  /// Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this issue.
  Future<Reaction> reactionsCreateForIssue(String owner, String repo, int issueNumber, { InlineObject90 inlineObject90 }) async {
    Response response = await reactionsCreateForIssueWithHttpInfo(owner, repo, issueNumber,  inlineObject90: inlineObject90 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Create reaction for an issue comment with HTTP info returned
  ///
  /// Create a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this issue comment.
  Future<Response> reactionsCreateForIssueCommentWithHttpInfo(String owner, String repo, int commentId, { InlineObject82 inlineObject82 }) async {
    Object postBody = inlineObject82;

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
    String path = "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Create reaction for an issue comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///InlineObject82 inlineObject82 :
  ///    
  /// Create a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this issue comment.
  Future<Reaction> reactionsCreateForIssueComment(String owner, String repo, int commentId, { InlineObject82 inlineObject82 }) async {
    Response response = await reactionsCreateForIssueCommentWithHttpInfo(owner, repo, commentId,  inlineObject82: inlineObject82 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Create reaction for a pull request review comment with HTTP info returned
  ///
  /// Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this pull request review comment.
  Future<Response> reactionsCreateForPullRequestReviewCommentWithHttpInfo(String owner, String repo, int commentId, { InlineObject103 inlineObject103 }) async {
    Object postBody = inlineObject103;

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
    String path = "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Create reaction for a pull request review comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///InlineObject103 inlineObject103 :
  ///    
  /// Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this pull request review comment.
  Future<Reaction> reactionsCreateForPullRequestReviewComment(String owner, String repo, int commentId, { InlineObject103 inlineObject103 }) async {
    Response response = await reactionsCreateForPullRequestReviewCommentWithHttpInfo(owner, repo, commentId,  inlineObject103: inlineObject103 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Create reaction for a team discussion comment with HTTP info returned
  ///
  /// Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion comment.  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions&#x60;.
  Future<Response> reactionsCreateForTeamDiscussionCommentInOrgWithHttpInfo(String org, String teamSlug, int discussionNumber, int commentNumber, { InlineObject33 inlineObject33 }) async {
    Object postBody = inlineObject33;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(teamSlug == null) {
     throw ApiException(400, "Missing required param: teamSlug");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }
    if(commentNumber == null) {
     throw ApiException(400, "Missing required param: commentNumber");
    }

    // create path and map variables
    String path = "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "team_slug" + "}", teamSlug.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString()).replaceAll("{" + "comment_number" + "}", commentNumber.toString());

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

  /// Create reaction for a team discussion comment
  ///
  ///String org  (required):
  ///    
  ///String teamSlug  (required):
  ///     team_slug parameter
  ///int discussionNumber  (required):
  ///    
  ///int commentNumber  (required):
  ///    
  ///InlineObject33 inlineObject33 :
  ///    
  /// Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion comment.  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions&#x60;.
  Future<Reaction> reactionsCreateForTeamDiscussionCommentInOrg(String org, String teamSlug, int discussionNumber, int commentNumber, { InlineObject33 inlineObject33 }) async {
    Response response = await reactionsCreateForTeamDiscussionCommentInOrgWithHttpInfo(org, teamSlug, discussionNumber, commentNumber,  inlineObject33: inlineObject33 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Create reaction for a team discussion comment (Legacy) with HTTP info returned
  ///
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;Create reaction for a team discussion comment&#x60;](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment) endpoint.  Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion comment.
  Future<Response> reactionsCreateForTeamDiscussionCommentLegacyWithHttpInfo(int teamId, int discussionNumber, int commentNumber, { InlineObject131 inlineObject131 }) async {
    Object postBody = inlineObject131;

    // verify required params are set
    if(teamId == null) {
     throw ApiException(400, "Missing required param: teamId");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }
    if(commentNumber == null) {
     throw ApiException(400, "Missing required param: commentNumber");
    }

    // create path and map variables
    String path = "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "team_id" + "}", teamId.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString()).replaceAll("{" + "comment_number" + "}", commentNumber.toString());

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

  /// Create reaction for a team discussion comment (Legacy)
  ///
  ///int teamId  (required):
  ///    
  ///int discussionNumber  (required):
  ///    
  ///int commentNumber  (required):
  ///    
  ///InlineObject131 inlineObject131 :
  ///    
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;Create reaction for a team discussion comment&#x60;](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment) endpoint.  Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion comment.
  Future<Reaction> reactionsCreateForTeamDiscussionCommentLegacy(int teamId, int discussionNumber, int commentNumber, { InlineObject131 inlineObject131 }) async {
    Response response = await reactionsCreateForTeamDiscussionCommentLegacyWithHttpInfo(teamId, discussionNumber, commentNumber,  inlineObject131: inlineObject131 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Create reaction for a team discussion with HTTP info returned
  ///
  /// Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion.  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions&#x60;.
  Future<Response> reactionsCreateForTeamDiscussionInOrgWithHttpInfo(String org, String teamSlug, int discussionNumber, { InlineObject34 inlineObject34 }) async {
    Object postBody = inlineObject34;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(teamSlug == null) {
     throw ApiException(400, "Missing required param: teamSlug");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }

    // create path and map variables
    String path = "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "team_slug" + "}", teamSlug.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString());

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

  /// Create reaction for a team discussion
  ///
  ///String org  (required):
  ///    
  ///String teamSlug  (required):
  ///     team_slug parameter
  ///int discussionNumber  (required):
  ///    
  ///InlineObject34 inlineObject34 :
  ///    
  /// Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion.  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions&#x60;.
  Future<Reaction> reactionsCreateForTeamDiscussionInOrg(String org, String teamSlug, int discussionNumber, { InlineObject34 inlineObject34 }) async {
    Response response = await reactionsCreateForTeamDiscussionInOrgWithHttpInfo(org, teamSlug, discussionNumber,  inlineObject34: inlineObject34 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Create reaction for a team discussion (Legacy) with HTTP info returned
  ///
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;Create reaction for a team discussion&#x60;](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion) endpoint.  Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion.
  Future<Response> reactionsCreateForTeamDiscussionLegacyWithHttpInfo(int teamId, int discussionNumber, { InlineObject132 inlineObject132 }) async {
    Object postBody = inlineObject132;

    // verify required params are set
    if(teamId == null) {
     throw ApiException(400, "Missing required param: teamId");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }

    // create path and map variables
    String path = "/teams/{team_id}/discussions/{discussion_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "team_id" + "}", teamId.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString());

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

  /// Create reaction for a team discussion (Legacy)
  ///
  ///int teamId  (required):
  ///    
  ///int discussionNumber  (required):
  ///    
  ///InlineObject132 inlineObject132 :
  ///    
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;Create reaction for a team discussion&#x60;](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion) endpoint.  Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a &#x60;Status: 200 OK&#x60; means that you already added the reaction type to this team discussion.
  Future<Reaction> reactionsCreateForTeamDiscussionLegacy(int teamId, int discussionNumber, { InlineObject132 inlineObject132 }) async {
    Response response = await reactionsCreateForTeamDiscussionLegacyWithHttpInfo(teamId, discussionNumber,  inlineObject132: inlineObject132 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Reaction') as Reaction;
    } else {
      return null;
    }
  }

  /// Delete a commit comment reaction with HTTP info returned
  ///
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id&#x60;.  Delete a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/).
  Future reactionsDeleteForCommitCommentWithHttpInfo(String owner, String repo, int commentId, int reactionId) async {
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
    if(reactionId == null) {
     throw ApiException(400, "Missing required param: reactionId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString()).replaceAll("{" + "reaction_id" + "}", reactionId.toString());

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

  /// Delete a commit comment reaction
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///int reactionId  (required):
  ///    
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id&#x60;.  Delete a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/).
  Future reactionsDeleteForCommitComment(String owner, String repo, int commentId, int reactionId) async {
    Response response = await reactionsDeleteForCommitCommentWithHttpInfo(owner, repo, commentId, reactionId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete an issue reaction with HTTP info returned
  ///
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id&#x60;.  Delete a reaction to an [issue](https://developer.github.com/v3/issues/).
  Future reactionsDeleteForIssueWithHttpInfo(String owner, String repo, int issueNumber, int reactionId) async {
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
    if(reactionId == null) {
     throw ApiException(400, "Missing required param: reactionId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString()).replaceAll("{" + "reaction_id" + "}", reactionId.toString());

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

  /// Delete an issue reaction
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///int reactionId  (required):
  ///    
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id&#x60;.  Delete a reaction to an [issue](https://developer.github.com/v3/issues/).
  Future reactionsDeleteForIssue(String owner, String repo, int issueNumber, int reactionId) async {
    Response response = await reactionsDeleteForIssueWithHttpInfo(owner, repo, issueNumber, reactionId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete an issue comment reaction with HTTP info returned
  ///
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id&#x60;.  Delete a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/).
  Future reactionsDeleteForIssueCommentWithHttpInfo(String owner, String repo, int commentId, int reactionId) async {
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
    if(reactionId == null) {
     throw ApiException(400, "Missing required param: reactionId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString()).replaceAll("{" + "reaction_id" + "}", reactionId.toString());

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

  /// Delete an issue comment reaction
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///int reactionId  (required):
  ///    
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id&#x60;.  Delete a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/).
  Future reactionsDeleteForIssueComment(String owner, String repo, int commentId, int reactionId) async {
    Response response = await reactionsDeleteForIssueCommentWithHttpInfo(owner, repo, commentId, reactionId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a pull request comment reaction with HTTP info returned
  ///
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.&#x60;  Delete a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
  Future reactionsDeleteForPullRequestCommentWithHttpInfo(String owner, String repo, int commentId, int reactionId) async {
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
    if(reactionId == null) {
     throw ApiException(400, "Missing required param: reactionId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString()).replaceAll("{" + "reaction_id" + "}", reactionId.toString());

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

  /// Delete a pull request comment reaction
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///int reactionId  (required):
  ///    
  /// **Note:** You can also specify a repository by &#x60;repository_id&#x60; using the route &#x60;DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.&#x60;  Delete a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
  Future reactionsDeleteForPullRequestComment(String owner, String repo, int commentId, int reactionId) async {
    Response response = await reactionsDeleteForPullRequestCommentWithHttpInfo(owner, repo, commentId, reactionId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete team discussion reaction with HTTP info returned
  ///
  /// **Note:** You can also specify a team or organization with &#x60;team_id&#x60; and &#x60;org_id&#x60; using the route &#x60;DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id&#x60;.  Delete a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future reactionsDeleteForTeamDiscussionWithHttpInfo(String org, String teamSlug, int discussionNumber, int reactionId) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(teamSlug == null) {
     throw ApiException(400, "Missing required param: teamSlug");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }
    if(reactionId == null) {
     throw ApiException(400, "Missing required param: reactionId");
    }

    // create path and map variables
    String path = "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "team_slug" + "}", teamSlug.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString()).replaceAll("{" + "reaction_id" + "}", reactionId.toString());

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

  /// Delete team discussion reaction
  ///
  ///String org  (required):
  ///    
  ///String teamSlug  (required):
  ///     team_slug parameter
  ///int discussionNumber  (required):
  ///    
  ///int reactionId  (required):
  ///    
  /// **Note:** You can also specify a team or organization with &#x60;team_id&#x60; and &#x60;org_id&#x60; using the route &#x60;DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id&#x60;.  Delete a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future reactionsDeleteForTeamDiscussion(String org, String teamSlug, int discussionNumber, int reactionId) async {
    Response response = await reactionsDeleteForTeamDiscussionWithHttpInfo(org, teamSlug, discussionNumber, reactionId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete team discussion comment reaction with HTTP info returned
  ///
  /// **Note:** You can also specify a team or organization with &#x60;team_id&#x60; and &#x60;org_id&#x60; using the route &#x60;DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id&#x60;.  Delete a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future reactionsDeleteForTeamDiscussionCommentWithHttpInfo(String org, String teamSlug, int discussionNumber, int commentNumber, int reactionId) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(teamSlug == null) {
     throw ApiException(400, "Missing required param: teamSlug");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }
    if(commentNumber == null) {
     throw ApiException(400, "Missing required param: commentNumber");
    }
    if(reactionId == null) {
     throw ApiException(400, "Missing required param: reactionId");
    }

    // create path and map variables
    String path = "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "team_slug" + "}", teamSlug.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString()).replaceAll("{" + "comment_number" + "}", commentNumber.toString()).replaceAll("{" + "reaction_id" + "}", reactionId.toString());

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

  /// Delete team discussion comment reaction
  ///
  ///String org  (required):
  ///    
  ///String teamSlug  (required):
  ///     team_slug parameter
  ///int discussionNumber  (required):
  ///    
  ///int commentNumber  (required):
  ///    
  ///int reactionId  (required):
  ///    
  /// **Note:** You can also specify a team or organization with &#x60;team_id&#x60; and &#x60;org_id&#x60; using the route &#x60;DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id&#x60;.  Delete a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future reactionsDeleteForTeamDiscussionComment(String org, String teamSlug, int discussionNumber, int commentNumber, int reactionId) async {
    Response response = await reactionsDeleteForTeamDiscussionCommentWithHttpInfo(org, teamSlug, discussionNumber, commentNumber, reactionId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a reaction (Legacy) with HTTP info returned
  ///
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).  OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).
  Future reactionsDeleteLegacyWithHttpInfo(int reactionId) async {
    Object postBody;

    // verify required params are set
    if(reactionId == null) {
     throw ApiException(400, "Missing required param: reactionId");
    }

    // create path and map variables
    String path = "/reactions/{reaction_id}".replaceAll("{format}","json").replaceAll("{" + "reaction_id" + "}", reactionId.toString());

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

  /// Delete a reaction (Legacy)
  ///
  ///int reactionId  (required):
  ///    
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).  OAuth access tokens require the &#x60;write:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).
  Future reactionsDeleteLegacy(int reactionId) async {
    Response response = await reactionsDeleteLegacyWithHttpInfo(reactionId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// List reactions for a commit comment with HTTP info returned
  ///
  /// List the reactions to a [commit comment](https://developer.github.com/v3/repos/comments/).
  Future<Response> reactionsListForCommitCommentWithHttpInfo(String owner, String repo, int commentId, { String content, int perPage, int page }) async {
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
    String path = "/repos/{owner}/{repo}/comments/{comment_id}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for a commit comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a commit comment.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List the reactions to a [commit comment](https://developer.github.com/v3/repos/comments/).
  Future<List<Reaction>> reactionsListForCommitComment(String owner, String repo, int commentId, { String content, int perPage, int page }) async {
    Response response = await reactionsListForCommitCommentWithHttpInfo(owner, repo, commentId,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

  /// List reactions for an issue with HTTP info returned
  ///
  /// List the reactions to an [issue](https://developer.github.com/v3/issues/).
  Future<Response> reactionsListForIssueWithHttpInfo(String owner, String repo, int issueNumber, { String content, int perPage, int page }) async {
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
    String path = "/repos/{owner}/{repo}/issues/{issue_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "issue_number" + "}", issueNumber.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for an issue
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int issueNumber  (required):
  ///     issue_number parameter
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List the reactions to an [issue](https://developer.github.com/v3/issues/).
  Future<List<Reaction>> reactionsListForIssue(String owner, String repo, int issueNumber, { String content, int perPage, int page }) async {
    Response response = await reactionsListForIssueWithHttpInfo(owner, repo, issueNumber,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

  /// List reactions for an issue comment with HTTP info returned
  ///
  /// List the reactions to an [issue comment](https://developer.github.com/v3/issues/comments/).
  Future<Response> reactionsListForIssueCommentWithHttpInfo(String owner, String repo, int commentId, { String content, int perPage, int page }) async {
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
    String path = "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for an issue comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue comment.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List the reactions to an [issue comment](https://developer.github.com/v3/issues/comments/).
  Future<List<Reaction>> reactionsListForIssueComment(String owner, String repo, int commentId, { String content, int perPage, int page }) async {
    Response response = await reactionsListForIssueCommentWithHttpInfo(owner, repo, commentId,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

  /// List reactions for a pull request review comment with HTTP info returned
  ///
  /// List the reactions to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
  Future<Response> reactionsListForPullRequestReviewCommentWithHttpInfo(String owner, String repo, int commentId, { String content, int perPage, int page }) async {
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
    String path = "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for a pull request review comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List the reactions to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
  Future<List<Reaction>> reactionsListForPullRequestReviewComment(String owner, String repo, int commentId, { String content, int perPage, int page }) async {
    Response response = await reactionsListForPullRequestReviewCommentWithHttpInfo(owner, repo, commentId,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

  /// List reactions for a team discussion comment with HTTP info returned
  ///
  /// List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions&#x60;.
  Future<Response> reactionsListForTeamDiscussionCommentInOrgWithHttpInfo(String org, String teamSlug, int discussionNumber, int commentNumber, { String content, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(teamSlug == null) {
     throw ApiException(400, "Missing required param: teamSlug");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }
    if(commentNumber == null) {
     throw ApiException(400, "Missing required param: commentNumber");
    }

    // create path and map variables
    String path = "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "team_slug" + "}", teamSlug.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString()).replaceAll("{" + "comment_number" + "}", commentNumber.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for a team discussion comment
  ///
  ///String org  (required):
  ///    
  ///String teamSlug  (required):
  ///     team_slug parameter
  ///int discussionNumber  (required):
  ///    
  ///int commentNumber  (required):
  ///    
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions&#x60;.
  Future<List<Reaction>> reactionsListForTeamDiscussionCommentInOrg(String org, String teamSlug, int discussionNumber, int commentNumber, { String content, int perPage, int page }) async {
    Response response = await reactionsListForTeamDiscussionCommentInOrgWithHttpInfo(org, teamSlug, discussionNumber, commentNumber,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

  /// List reactions for a team discussion comment (Legacy) with HTTP info returned
  ///
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;List reactions for a team discussion comment&#x60;](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment) endpoint.  List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future<Response> reactionsListForTeamDiscussionCommentLegacyWithHttpInfo(int teamId, int discussionNumber, int commentNumber, { String content, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(teamId == null) {
     throw ApiException(400, "Missing required param: teamId");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }
    if(commentNumber == null) {
     throw ApiException(400, "Missing required param: commentNumber");
    }

    // create path and map variables
    String path = "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "team_id" + "}", teamId.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString()).replaceAll("{" + "comment_number" + "}", commentNumber.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for a team discussion comment (Legacy)
  ///
  ///int teamId  (required):
  ///    
  ///int discussionNumber  (required):
  ///    
  ///int commentNumber  (required):
  ///    
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;List reactions for a team discussion comment&#x60;](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment) endpoint.  List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future<List<Reaction>> reactionsListForTeamDiscussionCommentLegacy(int teamId, int discussionNumber, int commentNumber, { String content, int perPage, int page }) async {
    Response response = await reactionsListForTeamDiscussionCommentLegacyWithHttpInfo(teamId, discussionNumber, commentNumber,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

  /// List reactions for a team discussion with HTTP info returned
  ///
  /// List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions&#x60;.
  Future<Response> reactionsListForTeamDiscussionInOrgWithHttpInfo(String org, String teamSlug, int discussionNumber, { String content, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(teamSlug == null) {
     throw ApiException(400, "Missing required param: teamSlug");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }

    // create path and map variables
    String path = "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "team_slug" + "}", teamSlug.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for a team discussion
  ///
  ///String org  (required):
  ///    
  ///String teamSlug  (required):
  ///     team_slug parameter
  ///int discussionNumber  (required):
  ///    
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).  **Note:** You can also specify a team by &#x60;org_id&#x60; and &#x60;team_id&#x60; using the route &#x60;GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions&#x60;.
  Future<List<Reaction>> reactionsListForTeamDiscussionInOrg(String org, String teamSlug, int discussionNumber, { String content, int perPage, int page }) async {
    Response response = await reactionsListForTeamDiscussionInOrgWithHttpInfo(org, teamSlug, discussionNumber,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

  /// List reactions for a team discussion (Legacy) with HTTP info returned
  ///
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;List reactions for a team discussion&#x60;](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion) endpoint.  List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future<Response> reactionsListForTeamDiscussionLegacyWithHttpInfo(int teamId, int discussionNumber, { String content, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(teamId == null) {
     throw ApiException(400, "Missing required param: teamId");
    }
    if(discussionNumber == null) {
     throw ApiException(400, "Missing required param: discussionNumber");
    }

    // create path and map variables
    String path = "/teams/{team_id}/discussions/{discussion_number}/reactions".replaceAll("{format}","json").replaceAll("{" + "team_id" + "}", teamId.toString()).replaceAll("{" + "discussion_number" + "}", discussionNumber.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(content != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "content", content));
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

  /// List reactions for a team discussion (Legacy)
  ///
  ///int teamId  (required):
  ///    
  ///int discussionNumber  (required):
  ///    
  ///String content :
  ///     Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [&#x60;List reactions for a team discussion&#x60;](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion) endpoint.  List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the &#x60;read:discussion&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
  Future<List<Reaction>> reactionsListForTeamDiscussionLegacy(int teamId, int discussionNumber, { String content, int perPage, int page }) async {
    Response response = await reactionsListForTeamDiscussionLegacyWithHttpInfo(teamId, discussionNumber,  content: content, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Reaction>') as List).map((item) => item as Reaction).toList();
    } else {
      return null;
    }
  }

}
