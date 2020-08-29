part of openapi.api;



class PullsApi {
  final ApiClient apiClient;

  PullsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Check if a pull request has been merged with HTTP info returned
  ///
  /// 
  Future pullsCheckIfMergedWithHttpInfo(String owner, String repo, int pullNumber) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/merge".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Check if a pull request has been merged
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  /// 
  Future pullsCheckIfMerged(String owner, String repo, int pullNumber) async {
    Response response = await pullsCheckIfMergedWithHttpInfo(owner, repo, pullNumber);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Create a pull request with HTTP info returned
  ///
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.  You can create a new pull request.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<Response> pullsCreateWithHttpInfo(String owner, String repo, { InlineObject101 inlineObject101 }) async {
    Object postBody = inlineObject101;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject101 inlineObject101 :
  ///    
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.  You can create a new pull request.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<PullRequest> pullsCreate(String owner, String repo, { InlineObject101 inlineObject101 }) async {
    Response response = await pullsCreateWithHttpInfo(owner, repo,  inlineObject101: inlineObject101 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequest') as PullRequest;
    } else {
      return null;
    }
  }

  /// Create a reply for a review comment with HTTP info returned
  ///
  /// Creates a reply to a review comment for a pull request. For the &#x60;comment_id&#x60;, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<Response> pullsCreateReplyForReviewCommentWithHttpInfo(String owner, String repo, int pullNumber, int commentId, { InlineObject106 inlineObject106 }) async {
    Object postBody = inlineObject106;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }
    if(commentId == null) {
     throw ApiException(400, "Missing required param: commentId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Create a reply for a review comment
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///InlineObject106 inlineObject106 :
  ///    
  /// Creates a reply to a review comment for a pull request. For the &#x60;comment_id&#x60;, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<PullRequestReviewComment> pullsCreateReplyForReviewComment(String owner, String repo, int pullNumber, int commentId, { InlineObject106 inlineObject106 }) async {
    Response response = await pullsCreateReplyForReviewCommentWithHttpInfo(owner, repo, pullNumber, commentId,  inlineObject106: inlineObject106 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReviewComment') as PullRequestReviewComment;
    } else {
      return null;
    }
  }

  /// Create a review for a pull request with HTTP info returned
  ///
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.  Pull request reviews created in the &#x60;PENDING&#x60; state do not include the &#x60;submitted_at&#x60; property in the response.  **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the &#x60;application/vnd.github.v3.diff&#x60; [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the &#x60;Accept&#x60; header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) endpoint.  The &#x60;position&#x60; value equals the number of lines down from the first \&quot;@@\&quot; hunk header in the file you want to add a comment. The line just below the \&quot;@@\&quot; line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
  Future<Response> pullsCreateReviewWithHttpInfo(String owner, String repo, int pullNumber, { InlineObject110 inlineObject110 }) async {
    Object postBody = inlineObject110;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Create a review for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///InlineObject110 inlineObject110 :
  ///    
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.  Pull request reviews created in the &#x60;PENDING&#x60; state do not include the &#x60;submitted_at&#x60; property in the response.  **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the &#x60;application/vnd.github.v3.diff&#x60; [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the &#x60;Accept&#x60; header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) endpoint.  The &#x60;position&#x60; value equals the number of lines down from the first \&quot;@@\&quot; hunk header in the file you want to add a comment. The line just below the \&quot;@@\&quot; line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
  Future<PullRequestReview> pullsCreateReview(String owner, String repo, int pullNumber, { InlineObject110 inlineObject110 }) async {
    Response response = await pullsCreateReviewWithHttpInfo(owner, repo, pullNumber,  inlineObject110: inlineObject110 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReview') as PullRequestReview;
    } else {
      return null;
    }
  }

  /// Create a review comment for a pull request with HTTP info returned
  ///
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see \&quot;[Create an issue comment](https://developer.github.com/v3/issues/comments/#create-an-issue-comment).\&quot; We recommend creating a review comment using &#x60;line&#x60;, &#x60;side&#x60;, and optionally &#x60;start_line&#x60; and &#x60;start_side&#x60; if your comment applies to more than one line in the pull request diff.  You can still create a review comment using the &#x60;position&#x60; parameter. When you use &#x60;position&#x60;, the &#x60;line&#x60;, &#x60;side&#x60;, &#x60;start_line&#x60;, and &#x60;start_side&#x60; parameters are not required. For more information, see [Multi-line comment summary](https://developer.github.com/v3/pulls/comments/#multi-line-comment-summary-3).  **Note:** The position value equals the number of lines down from the first \&quot;@@\&quot; hunk header in the file you want to add a comment. The line just below the \&quot;@@\&quot; line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
  Future<Response> pullsCreateReviewCommentWithHttpInfo(String owner, String repo, int pullNumber, { InlineObject105 inlineObject105 }) async {
    Object postBody = inlineObject105;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/comments".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Create a review comment for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///InlineObject105 inlineObject105 :
  ///    
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see \&quot;[Create an issue comment](https://developer.github.com/v3/issues/comments/#create-an-issue-comment).\&quot; We recommend creating a review comment using &#x60;line&#x60;, &#x60;side&#x60;, and optionally &#x60;start_line&#x60; and &#x60;start_side&#x60; if your comment applies to more than one line in the pull request diff.  You can still create a review comment using the &#x60;position&#x60; parameter. When you use &#x60;position&#x60;, the &#x60;line&#x60;, &#x60;side&#x60;, &#x60;start_line&#x60;, and &#x60;start_side&#x60; parameters are not required. For more information, see [Multi-line comment summary](https://developer.github.com/v3/pulls/comments/#multi-line-comment-summary-3).  **Note:** The position value equals the number of lines down from the first \&quot;@@\&quot; hunk header in the file you want to add a comment. The line just below the \&quot;@@\&quot; line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.  This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
  Future<PullRequestReviewComment> pullsCreateReviewComment(String owner, String repo, int pullNumber, { InlineObject105 inlineObject105 }) async {
    Response response = await pullsCreateReviewCommentWithHttpInfo(owner, repo, pullNumber,  inlineObject105: inlineObject105 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReviewComment') as PullRequestReviewComment;
    } else {
      return null;
    }
  }

  /// Delete a pending review for a pull request with HTTP info returned
  ///
  /// 
  Future<Response> pullsDeletePendingReviewWithHttpInfo(String owner, String repo, int pullNumber, int reviewId) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }
    if(reviewId == null) {
     throw ApiException(400, "Missing required param: reviewId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString()).replaceAll("{" + "review_id" + "}", reviewId.toString());

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

  /// Delete a pending review for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int reviewId  (required):
  ///     review_id parameter
  /// 
  Future<PullRequestReview> pullsDeletePendingReview(String owner, String repo, int pullNumber, int reviewId) async {
    Response response = await pullsDeletePendingReviewWithHttpInfo(owner, repo, pullNumber, reviewId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReview') as PullRequestReview;
    } else {
      return null;
    }
  }

  /// Delete a review comment for a pull request with HTTP info returned
  ///
  /// Deletes a review comment.
  Future pullsDeleteReviewCommentWithHttpInfo(String owner, String repo, int commentId) async {
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
    String path = "/repos/{owner}/{repo}/pulls/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Delete a review comment for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  /// Deletes a review comment.
  Future pullsDeleteReviewComment(String owner, String repo, int commentId) async {
    Response response = await pullsDeleteReviewCommentWithHttpInfo(owner, repo, commentId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Dismiss a review for a pull request with HTTP info returned
  ///
  /// **Note:** To dismiss a pull request review on a [protected branch](https://developer.github.com/v3/repos/branches/), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
  Future<Response> pullsDismissReviewWithHttpInfo(String owner, String repo, int pullNumber, int reviewId, { InlineObject112 inlineObject112 }) async {
    Object postBody = inlineObject112;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }
    if(reviewId == null) {
     throw ApiException(400, "Missing required param: reviewId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString()).replaceAll("{" + "review_id" + "}", reviewId.toString());

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

  /// Dismiss a review for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int reviewId  (required):
  ///     review_id parameter
  ///InlineObject112 inlineObject112 :
  ///    
  /// **Note:** To dismiss a pull request review on a [protected branch](https://developer.github.com/v3/repos/branches/), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
  Future<PullRequestReview> pullsDismissReview(String owner, String repo, int pullNumber, int reviewId, { InlineObject112 inlineObject112 }) async {
    Response response = await pullsDismissReviewWithHttpInfo(owner, repo, pullNumber, reviewId,  inlineObject112: inlineObject112 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReview') as PullRequestReview;
    } else {
      return null;
    }
  }

  /// Get a pull request with HTTP info returned
  ///
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Lists details of a pull request by providing its number.  When you get, [create](https://developer.github.com/v3/pulls/#create-a-pull-request), or [edit](https://developer.github.com/v3/pulls/#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the &#x60;mergeable&#x60; key. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.  The value of the &#x60;mergeable&#x60; attribute can be &#x60;true&#x60;, &#x60;false&#x60;, or &#x60;null&#x60;. If the value is &#x60;null&#x60;, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-&#x60;null&#x60; value for the &#x60;mergeable&#x60; attribute in the response. If &#x60;mergeable&#x60; is &#x60;true&#x60;, then &#x60;merge_commit_sha&#x60; will be the SHA of the _test_ merge commit.  The value of the &#x60;merge_commit_sha&#x60; attribute changes depending on the state of the pull request. Before merging a pull request, the &#x60;merge_commit_sha&#x60; attribute holds the SHA of the _test_ merge commit. After merging a pull request, the &#x60;merge_commit_sha&#x60; attribute changes depending on how you merged the pull request:  *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), &#x60;merge_commit_sha&#x60; represents the SHA of the merge commit. *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), &#x60;merge_commit_sha&#x60; represents the SHA of the squashed commit on the base branch. *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), &#x60;merge_commit_sha&#x60; represents the commit that the base branch was updated to.  Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
  Future<Response> pullsGetWithHttpInfo(String owner, String repo, int pullNumber) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Get a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  Lists details of a pull request by providing its number.  When you get, [create](https://developer.github.com/v3/pulls/#create-a-pull-request), or [edit](https://developer.github.com/v3/pulls/#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the &#x60;mergeable&#x60; key. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.  The value of the &#x60;mergeable&#x60; attribute can be &#x60;true&#x60;, &#x60;false&#x60;, or &#x60;null&#x60;. If the value is &#x60;null&#x60;, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-&#x60;null&#x60; value for the &#x60;mergeable&#x60; attribute in the response. If &#x60;mergeable&#x60; is &#x60;true&#x60;, then &#x60;merge_commit_sha&#x60; will be the SHA of the _test_ merge commit.  The value of the &#x60;merge_commit_sha&#x60; attribute changes depending on the state of the pull request. Before merging a pull request, the &#x60;merge_commit_sha&#x60; attribute holds the SHA of the _test_ merge commit. After merging a pull request, the &#x60;merge_commit_sha&#x60; attribute changes depending on how you merged the pull request:  *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), &#x60;merge_commit_sha&#x60; represents the SHA of the merge commit. *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), &#x60;merge_commit_sha&#x60; represents the SHA of the squashed commit on the base branch. *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), &#x60;merge_commit_sha&#x60; represents the commit that the base branch was updated to.  Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
  Future<PullRequest> pullsGet(String owner, String repo, int pullNumber) async {
    Response response = await pullsGetWithHttpInfo(owner, repo, pullNumber);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequest') as PullRequest;
    } else {
      return null;
    }
  }

  /// Get a review for a pull request with HTTP info returned
  ///
  /// 
  Future<Response> pullsGetReviewWithHttpInfo(String owner, String repo, int pullNumber, int reviewId) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }
    if(reviewId == null) {
     throw ApiException(400, "Missing required param: reviewId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString()).replaceAll("{" + "review_id" + "}", reviewId.toString());

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

  /// Get a review for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int reviewId  (required):
  ///     review_id parameter
  /// 
  Future<PullRequestReview> pullsGetReview(String owner, String repo, int pullNumber, int reviewId) async {
    Response response = await pullsGetReviewWithHttpInfo(owner, repo, pullNumber, reviewId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReview') as PullRequestReview;
    } else {
      return null;
    }
  }

  /// Get a review comment for a pull request with HTTP info returned
  ///
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Provides details for a review comment.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The &#x60;reactions&#x60; key will have the following payload where &#x60;url&#x60; can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
  Future<Response> pullsGetReviewCommentWithHttpInfo(String owner, String repo, int commentId) async {
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
    String path = "/repos/{owner}/{repo}/pulls/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Get a review comment for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Provides details for a review comment.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The &#x60;reactions&#x60; key will have the following payload where &#x60;url&#x60; can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
  Future<PullRequestReviewComment> pullsGetReviewComment(String owner, String repo, int commentId) async {
    Response response = await pullsGetReviewCommentWithHttpInfo(owner, repo, commentId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReviewComment') as PullRequestReviewComment;
    } else {
      return null;
    }
  }

  /// List pull requests with HTTP info returned
  ///
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
  Future<Response> pullsListWithHttpInfo(String owner, String repo, { String state, String head, String base, String sort, String direction, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
    }
    if(head != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "head", head));
    }
    if(base != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "base", base));
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

  /// List pull requests
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String state :
  ///     Either `open`, `closed`, or `all` to filter by state.
  ///String head :
  ///     Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
  ///String base :
  ///     Filter pulls by base branch name. Example: `gh-pages`.
  ///String sort :
  ///     What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).
  ///String direction :
  ///     The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
  Future<List<PullRequestSimple>> pullsList(String owner, String repo, { String state, String head, String base, String sort, String direction, int perPage, int page }) async {
    Response response = await pullsListWithHttpInfo(owner, repo,  state: state, head: head, base: base, sort: sort, direction: direction, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<PullRequestSimple>') as List).map((item) => item as PullRequestSimple).toList();
    } else {
      return null;
    }
  }

  /// List comments for a pull request review with HTTP info returned
  ///
  /// List comments for a specific pull request review.
  Future<Response> pullsListCommentsForReviewWithHttpInfo(String owner, String repo, int pullNumber, int reviewId, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }
    if(reviewId == null) {
     throw ApiException(400, "Missing required param: reviewId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString()).replaceAll("{" + "review_id" + "}", reviewId.toString());

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

  /// List comments for a pull request review
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int reviewId  (required):
  ///     review_id parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List comments for a specific pull request review.
  Future<List<ReviewComment>> pullsListCommentsForReview(String owner, String repo, int pullNumber, int reviewId, { int perPage, int page }) async {
    Response response = await pullsListCommentsForReviewWithHttpInfo(owner, repo, pullNumber, reviewId,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<ReviewComment>') as List).map((item) => item as ReviewComment).toList();
    } else {
      return null;
    }
  }

  /// List commits on a pull request with HTTP info returned
  ///
  /// Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://developer.github.com/v3/repos/commits/#list-commits) endpoint.
  Future<Response> pullsListCommitsWithHttpInfo(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/commits".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// List commits on a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://developer.github.com/v3/repos/commits/#list-commits) endpoint.
  Future<List<SimpleCommit>> pullsListCommits(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Response response = await pullsListCommitsWithHttpInfo(owner, repo, pullNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<SimpleCommit>') as List).map((item) => item as SimpleCommit).toList();
    } else {
      return null;
    }
  }

  /// List pull requests files with HTTP info returned
  ///
  /// **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
  Future<Response> pullsListFilesWithHttpInfo(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/files".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// List pull requests files
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
  Future<List<DiffEntry>> pullsListFiles(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Response response = await pullsListFilesWithHttpInfo(owner, repo, pullNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<DiffEntry>') as List).map((item) => item as DiffEntry).toList();
    } else {
      return null;
    }
  }

  /// List requested reviewers for a pull request with HTTP info returned
  ///
  /// 
  Future<Response> pullsListRequestedReviewersWithHttpInfo(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// List requested reviewers for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<PullRequestReviewRequest> pullsListRequestedReviewers(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Response response = await pullsListRequestedReviewersWithHttpInfo(owner, repo, pullNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReviewRequest') as PullRequestReviewRequest;
    } else {
      return null;
    }
  }

  /// List review comments on a pull request with HTTP info returned
  ///
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Lists all review comments for a pull request. By default, review comments are in ascending order by ID.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The &#x60;reactions&#x60; key will have the following payload where &#x60;url&#x60; can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
  Future<Response> pullsListReviewCommentsWithHttpInfo(String owner, String repo, int pullNumber, { String sort, String direction, String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/comments".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// List review comments on a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///String sort :
  ///     One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  ///String direction :
  ///     Can be either `asc` or `desc`. Ignored without `sort` parameter.
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Lists all review comments for a pull request. By default, review comments are in ascending order by ID.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The &#x60;reactions&#x60; key will have the following payload where &#x60;url&#x60; can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
  Future<List<PullRequestReviewComment>> pullsListReviewComments(String owner, String repo, int pullNumber, { String sort, String direction, String since, int perPage, int page }) async {
    Response response = await pullsListReviewCommentsWithHttpInfo(owner, repo, pullNumber,  sort: sort, direction: direction, since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<PullRequestReviewComment>') as List).map((item) => item as PullRequestReviewComment).toList();
    } else {
      return null;
    }
  }

  /// List review comments in a repository with HTTP info returned
  ///
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The &#x60;reactions&#x60; key will have the following payload where &#x60;url&#x60; can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
  Future<Response> pullsListReviewCommentsForRepoWithHttpInfo(String owner, String repo, { String sort, String direction, String since, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/comments".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// List review comments in a repository
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String sort :
  ///     One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  ///String direction :
  ///     Can be either `asc` or `desc`. Ignored without `sort` parameter.
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.  The &#x60;reactions&#x60; key will have the following payload where &#x60;url&#x60; can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
  Future<List<PullRequestReviewComment>> pullsListReviewCommentsForRepo(String owner, String repo, { String sort, String direction, String since, int perPage, int page }) async {
    Response response = await pullsListReviewCommentsForRepoWithHttpInfo(owner, repo,  sort: sort, direction: direction, since: since, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<PullRequestReviewComment>') as List).map((item) => item as PullRequestReviewComment).toList();
    } else {
      return null;
    }
  }

  /// List reviews for a pull request with HTTP info returned
  ///
  /// The list of reviews returns in chronological order.
  Future<Response> pullsListReviewsWithHttpInfo(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// List reviews for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// The list of reviews returns in chronological order.
  Future<List<PullRequestReview>> pullsListReviews(String owner, String repo, int pullNumber, { int perPage, int page }) async {
    Response response = await pullsListReviewsWithHttpInfo(owner, repo, pullNumber,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<PullRequestReview>') as List).map((item) => item as PullRequestReview).toList();
    } else {
      return null;
    }
  }

  /// Merge a pull request with HTTP info returned
  ///
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<Response> pullsMergeWithHttpInfo(String owner, String repo, int pullNumber, { InlineObject107 inlineObject107 }) async {
    Object postBody = inlineObject107;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/merge".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Merge a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///InlineObject107 inlineObject107 :
  ///    
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<PullRequestMergeResult> pullsMerge(String owner, String repo, int pullNumber, { InlineObject107 inlineObject107 }) async {
    Response response = await pullsMergeWithHttpInfo(owner, repo, pullNumber,  inlineObject107: inlineObject107 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestMergeResult') as PullRequestMergeResult;
    } else {
      return null;
    }
  }

  /// Remove requested reviewers from a pull request with HTTP info returned
  ///
  /// 
  Future pullsRemoveRequestedReviewersWithHttpInfo(String owner, String repo, int pullNumber, { InlineObject109 inlineObject109 }) async {
    Object postBody = inlineObject109;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Remove requested reviewers from a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///InlineObject109 inlineObject109 :
  ///    
  /// 
  Future pullsRemoveRequestedReviewers(String owner, String repo, int pullNumber, { InlineObject109 inlineObject109 }) async {
    Response response = await pullsRemoveRequestedReviewersWithHttpInfo(owner, repo, pullNumber,  inlineObject109: inlineObject109 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Request reviewers for a pull request with HTTP info returned
  ///
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<Response> pullsRequestReviewersWithHttpInfo(String owner, String repo, int pullNumber, { InlineObject108 inlineObject108 }) async {
    Object postBody = inlineObject108;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Request reviewers for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///InlineObject108 inlineObject108 :
  ///    
  /// This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \&quot;[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)\&quot; and \&quot;[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)\&quot; for details.
  Future<PullRequestSimple> pullsRequestReviewers(String owner, String repo, int pullNumber, { InlineObject108 inlineObject108 }) async {
    Response response = await pullsRequestReviewersWithHttpInfo(owner, repo, pullNumber,  inlineObject108: inlineObject108 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestSimple') as PullRequestSimple;
    } else {
      return null;
    }
  }

  /// Submit a review for a pull request with HTTP info returned
  ///
  /// 
  Future<Response> pullsSubmitReviewWithHttpInfo(String owner, String repo, int pullNumber, int reviewId, { InlineObject113 inlineObject113 }) async {
    Object postBody = inlineObject113;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }
    if(reviewId == null) {
     throw ApiException(400, "Missing required param: reviewId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString()).replaceAll("{" + "review_id" + "}", reviewId.toString());

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

  /// Submit a review for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int reviewId  (required):
  ///     review_id parameter
  ///InlineObject113 inlineObject113 :
  ///    
  /// 
  Future<PullRequestReview> pullsSubmitReview(String owner, String repo, int pullNumber, int reviewId, { InlineObject113 inlineObject113 }) async {
    Response response = await pullsSubmitReviewWithHttpInfo(owner, repo, pullNumber, reviewId,  inlineObject113: inlineObject113 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReview') as PullRequestReview;
    } else {
      return null;
    }
  }

  /// Update a pull request with HTTP info returned
  ///
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
  Future<Response> pullsUpdateWithHttpInfo(String owner, String repo, int pullNumber, { InlineObject104 inlineObject104 }) async {
    Object postBody = inlineObject104;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Update a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///InlineObject104 inlineObject104 :
  ///    
  /// Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub&#39;s products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.  To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
  Future<PullRequest> pullsUpdate(String owner, String repo, int pullNumber, { InlineObject104 inlineObject104 }) async {
    Response response = await pullsUpdateWithHttpInfo(owner, repo, pullNumber,  inlineObject104: inlineObject104 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequest') as PullRequest;
    } else {
      return null;
    }
  }

  /// Update a pull request branch with HTTP info returned
  ///
  /// Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
  Future<Response> pullsUpdateBranchWithHttpInfo(String owner, String repo, int pullNumber, { InlineObject114 inlineObject114 }) async {
    Object postBody = inlineObject114;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString());

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

  /// Update a pull request branch
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///InlineObject114 inlineObject114 :
  ///    
  /// Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
  Future<InlineResponse2021> pullsUpdateBranch(String owner, String repo, int pullNumber, { InlineObject114 inlineObject114 }) async {
    Response response = await pullsUpdateBranchWithHttpInfo(owner, repo, pullNumber,  inlineObject114: inlineObject114 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'InlineResponse2021') as InlineResponse2021;
    } else {
      return null;
    }
  }

  /// Update a review for a pull request with HTTP info returned
  ///
  /// Update the review summary comment with new text.
  Future<Response> pullsUpdateReviewWithHttpInfo(String owner, String repo, int pullNumber, int reviewId, { InlineObject111 inlineObject111 }) async {
    Object postBody = inlineObject111;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(pullNumber == null) {
     throw ApiException(400, "Missing required param: pullNumber");
    }
    if(reviewId == null) {
     throw ApiException(400, "Missing required param: reviewId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "pull_number" + "}", pullNumber.toString()).replaceAll("{" + "review_id" + "}", reviewId.toString());

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

  /// Update a review for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int pullNumber  (required):
  ///    
  ///int reviewId  (required):
  ///     review_id parameter
  ///InlineObject111 inlineObject111 :
  ///    
  /// Update the review summary comment with new text.
  Future<PullRequestReview> pullsUpdateReview(String owner, String repo, int pullNumber, int reviewId, { InlineObject111 inlineObject111 }) async {
    Response response = await pullsUpdateReviewWithHttpInfo(owner, repo, pullNumber, reviewId,  inlineObject111: inlineObject111 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReview') as PullRequestReview;
    } else {
      return null;
    }
  }

  /// Update a review comment for a pull request with HTTP info returned
  ///
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Enables you to edit a review comment.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
  Future<Response> pullsUpdateReviewCommentWithHttpInfo(String owner, String repo, int commentId, { InlineObject102 inlineObject102 }) async {
    Object postBody = inlineObject102;

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
    String path = "/repos/{owner}/{repo}/pulls/comments/{comment_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "comment_id" + "}", commentId.toString());

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

  /// Update a review comment for a pull request
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int commentId  (required):
  ///     comment_id parameter
  ///InlineObject102 inlineObject102 :
  ///    
  /// **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.  Enables you to edit a review comment.  **Multi-line comment summary**  **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.  Use the &#x60;comfort-fade&#x60; preview header and the &#x60;line&#x60; parameter to show multi-line comment-supported fields in the response.  If you use the &#x60;comfort-fade&#x60; preview header, your response will show:  *   For multi-line comments, values for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, &#x60;start_side&#x60;, &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60;. *   For single-line comments, values for &#x60;line&#x60;, &#x60;original_line&#x60;, and &#x60;side&#x60; and a &#x60;null&#x60; value for &#x60;start_line&#x60;, &#x60;original_start_line&#x60;, and &#x60;start_side&#x60;.  If you don&#39;t use the &#x60;comfort-fade&#x60; preview header, multi-line and single-line comments will appear the same way in the response with a single &#x60;position&#x60; attribute. Your response will show:  *   For multi-line comments, the last line of the comment range for the &#x60;position&#x60; attribute. *   For single-line comments, the diff-positioned way of referencing comments for the &#x60;position&#x60; attribute. For more information, see &#x60;position&#x60; in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
  Future<PullRequestReviewComment> pullsUpdateReviewComment(String owner, String repo, int commentId, { InlineObject102 inlineObject102 }) async {
    Response response = await pullsUpdateReviewCommentWithHttpInfo(owner, repo, commentId,  inlineObject102: inlineObject102 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PullRequestReviewComment') as PullRequestReviewComment;
    } else {
      return null;
    }
  }

}
