part of openapi.api;



class ProjectsApi {
  final ApiClient apiClient;

  ProjectsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Add project collaborator with HTTP info returned
  ///
  /// Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project &#x60;admin&#x60; to add a collaborator.
  Future projectsAddCollaboratorWithHttpInfo(int projectId, String username, { InlineObject44 inlineObject44 }) async {
    Object postBody = inlineObject44;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/projects/{project_id}/collaborators/{username}".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString()).replaceAll("{" + "username" + "}", username.toString());

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

  /// Add project collaborator
  ///
  ///int projectId  (required):
  ///    
  ///String username  (required):
  ///    
  ///InlineObject44 inlineObject44 :
  ///    
  /// Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project &#x60;admin&#x60; to add a collaborator.
  Future projectsAddCollaborator(int projectId, String username, { InlineObject44 inlineObject44 }) async {
    Response response = await projectsAddCollaboratorWithHttpInfo(projectId, username,  inlineObject44: inlineObject44 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Create a project card with HTTP info returned
  ///
  /// **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key.  Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<Response> projectsCreateCardWithHttpInfo(int columnId, { UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE }) async {
    Object postBody = UNKNOWN_BASE_TYPE;

    // verify required params are set
    if(columnId == null) {
     throw ApiException(400, "Missing required param: columnId");
    }

    // create path and map variables
    String path = "/projects/columns/{column_id}/cards".replaceAll("{format}","json").replaceAll("{" + "column_id" + "}", columnId.toString());

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

  /// Create a project card
  ///
  ///int columnId  (required):
  ///     column_id parameter
  ///UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE :
  ///    
  /// **Note**: GitHub&#39;s REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, \&quot;Issues\&quot; endpoints may return both issues and pull requests in the response. You can identify pull requests by the &#x60;pull_request&#x60; key.  Be aware that the &#x60;id&#x60; of a pull request returned from \&quot;Issues\&quot; endpoints will be an _issue id_. To find out the pull request id, use the \&quot;[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)\&quot; endpoint.
  Future<ProjectCard> projectsCreateCard(int columnId, { UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE }) async {
    Response response = await projectsCreateCardWithHttpInfo(columnId,  UNKNOWN_BASE_TYPE: UNKNOWN_BASE_TYPE );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ProjectCard') as ProjectCard;
    } else {
      return null;
    }
  }

  /// Create a project column with HTTP info returned
  ///
  /// 
  Future<Response> projectsCreateColumnWithHttpInfo(int projectId, { InlineObject45 inlineObject45 }) async {
    Object postBody = inlineObject45;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }

    // create path and map variables
    String path = "/projects/{project_id}/columns".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString());

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

  /// Create a project column
  ///
  ///int projectId  (required):
  ///    
  ///InlineObject45 inlineObject45 :
  ///    
  /// 
  Future<ProjectColumn> projectsCreateColumn(int projectId, { InlineObject45 inlineObject45 }) async {
    Response response = await projectsCreateColumnWithHttpInfo(projectId,  inlineObject45: inlineObject45 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ProjectColumn') as ProjectColumn;
    } else {
      return null;
    }
  }

  /// Create a user project with HTTP info returned
  ///
  /// 
  Future<Response> projectsCreateForAuthenticatedUserWithHttpInfo({ InlineObject143 inlineObject143 }) async {
    Object postBody = inlineObject143;

    // verify required params are set

    // create path and map variables
    String path = "/user/projects".replaceAll("{format}","json");

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

  /// Create a user project
  ///
  ///InlineObject143 inlineObject143 :
  ///    
  /// 
  Future<Project> projectsCreateForAuthenticatedUser({ InlineObject143 inlineObject143 }) async {
    Response response = await projectsCreateForAuthenticatedUserWithHttpInfo( inlineObject143: inlineObject143 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Project') as Project;
    } else {
      return null;
    }
  }

  /// Create an organization project with HTTP info returned
  ///
  /// Creates an organization project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Response> projectsCreateForOrgWithHttpInfo(String org, { InlineObject25 inlineObject25 }) async {
    Object postBody = inlineObject25;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/projects".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Create an organization project
  ///
  ///String org  (required):
  ///    
  ///InlineObject25 inlineObject25 :
  ///    
  /// Creates an organization project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Project> projectsCreateForOrg(String org, { InlineObject25 inlineObject25 }) async {
    Response response = await projectsCreateForOrgWithHttpInfo(org,  inlineObject25: inlineObject25 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Project') as Project;
    } else {
      return null;
    }
  }

  /// Create a repository project with HTTP info returned
  ///
  /// Creates a repository project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Response> projectsCreateForRepoWithHttpInfo(String owner, String repo, { InlineObject100 inlineObject100 }) async {
    Object postBody = inlineObject100;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/projects".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Create a repository project
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject100 inlineObject100 :
  ///    
  /// Creates a repository project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Project> projectsCreateForRepo(String owner, String repo, { InlineObject100 inlineObject100 }) async {
    Response response = await projectsCreateForRepoWithHttpInfo(owner, repo,  inlineObject100: inlineObject100 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Project') as Project;
    } else {
      return null;
    }
  }

  /// Delete a project with HTTP info returned
  ///
  /// Deletes a project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled.
  Future projectsDeleteWithHttpInfo(int projectId) async {
    Object postBody;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }

    // create path and map variables
    String path = "/projects/{project_id}".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString());

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

  /// Delete a project
  ///
  ///int projectId  (required):
  ///    
  /// Deletes a project board. Returns a &#x60;404 Not Found&#x60; status if projects are disabled.
  Future projectsDelete(int projectId) async {
    Response response = await projectsDeleteWithHttpInfo(projectId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a project card with HTTP info returned
  ///
  /// 
  Future projectsDeleteCardWithHttpInfo(int cardId) async {
    Object postBody;

    // verify required params are set
    if(cardId == null) {
     throw ApiException(400, "Missing required param: cardId");
    }

    // create path and map variables
    String path = "/projects/columns/cards/{card_id}".replaceAll("{format}","json").replaceAll("{" + "card_id" + "}", cardId.toString());

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

  /// Delete a project card
  ///
  ///int cardId  (required):
  ///     card_id parameter
  /// 
  Future projectsDeleteCard(int cardId) async {
    Response response = await projectsDeleteCardWithHttpInfo(cardId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a project column with HTTP info returned
  ///
  /// 
  Future projectsDeleteColumnWithHttpInfo(int columnId) async {
    Object postBody;

    // verify required params are set
    if(columnId == null) {
     throw ApiException(400, "Missing required param: columnId");
    }

    // create path and map variables
    String path = "/projects/columns/{column_id}".replaceAll("{format}","json").replaceAll("{" + "column_id" + "}", columnId.toString());

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

  /// Delete a project column
  ///
  ///int columnId  (required):
  ///     column_id parameter
  /// 
  Future projectsDeleteColumn(int columnId) async {
    Response response = await projectsDeleteColumnWithHttpInfo(columnId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Get a project with HTTP info returned
  ///
  /// Gets a project by its &#x60;id&#x60;. Returns a &#x60;404 Not Found&#x60; status if projects are disabled. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Response> projectsGetWithHttpInfo(int projectId) async {
    Object postBody;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }

    // create path and map variables
    String path = "/projects/{project_id}".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString());

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

  /// Get a project
  ///
  ///int projectId  (required):
  ///    
  /// Gets a project by its &#x60;id&#x60;. Returns a &#x60;404 Not Found&#x60; status if projects are disabled. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Project> projectsGet(int projectId) async {
    Response response = await projectsGetWithHttpInfo(projectId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Project') as Project;
    } else {
      return null;
    }
  }

  /// Get a project card with HTTP info returned
  ///
  /// 
  Future<Response> projectsGetCardWithHttpInfo(int cardId) async {
    Object postBody;

    // verify required params are set
    if(cardId == null) {
     throw ApiException(400, "Missing required param: cardId");
    }

    // create path and map variables
    String path = "/projects/columns/cards/{card_id}".replaceAll("{format}","json").replaceAll("{" + "card_id" + "}", cardId.toString());

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

  /// Get a project card
  ///
  ///int cardId  (required):
  ///     card_id parameter
  /// 
  Future<ProjectCard> projectsGetCard(int cardId) async {
    Response response = await projectsGetCardWithHttpInfo(cardId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ProjectCard') as ProjectCard;
    } else {
      return null;
    }
  }

  /// Get a project column with HTTP info returned
  ///
  /// 
  Future<Response> projectsGetColumnWithHttpInfo(int columnId) async {
    Object postBody;

    // verify required params are set
    if(columnId == null) {
     throw ApiException(400, "Missing required param: columnId");
    }

    // create path and map variables
    String path = "/projects/columns/{column_id}".replaceAll("{format}","json").replaceAll("{" + "column_id" + "}", columnId.toString());

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

  /// Get a project column
  ///
  ///int columnId  (required):
  ///     column_id parameter
  /// 
  Future<ProjectColumn> projectsGetColumn(int columnId) async {
    Response response = await projectsGetColumnWithHttpInfo(columnId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ProjectColumn') as ProjectColumn;
    } else {
      return null;
    }
  }

  /// Get project permission for a user with HTTP info returned
  ///
  /// Returns the collaborator&#39;s permission level for an organization project. Possible values for the &#x60;permission&#x60; key: &#x60;admin&#x60;, &#x60;write&#x60;, &#x60;read&#x60;, &#x60;none&#x60;. You must be an organization owner or a project &#x60;admin&#x60; to review a user&#39;s permission level.
  Future<Response> projectsGetPermissionForUserWithHttpInfo(int projectId, String username) async {
    Object postBody;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/projects/{project_id}/collaborators/{username}/permission".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString()).replaceAll("{" + "username" + "}", username.toString());

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

  /// Get project permission for a user
  ///
  ///int projectId  (required):
  ///    
  ///String username  (required):
  ///    
  /// Returns the collaborator&#39;s permission level for an organization project. Possible values for the &#x60;permission&#x60; key: &#x60;admin&#x60;, &#x60;write&#x60;, &#x60;read&#x60;, &#x60;none&#x60;. You must be an organization owner or a project &#x60;admin&#x60; to review a user&#39;s permission level.
  Future<RepositoryCollaboratorPermission> projectsGetPermissionForUser(int projectId, String username) async {
    Response response = await projectsGetPermissionForUserWithHttpInfo(projectId, username);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'RepositoryCollaboratorPermission') as RepositoryCollaboratorPermission;
    } else {
      return null;
    }
  }

  /// List project cards with HTTP info returned
  ///
  /// 
  Future<Response> projectsListCardsWithHttpInfo(int columnId, { String archivedState, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(columnId == null) {
     throw ApiException(400, "Missing required param: columnId");
    }

    // create path and map variables
    String path = "/projects/columns/{column_id}/cards".replaceAll("{format}","json").replaceAll("{" + "column_id" + "}", columnId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(archivedState != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "archived_state", archivedState));
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

  /// List project cards
  ///
  ///int columnId  (required):
  ///     column_id parameter
  ///String archivedState :
  ///     Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<ProjectCard>> projectsListCards(int columnId, { String archivedState, int perPage, int page }) async {
    Response response = await projectsListCardsWithHttpInfo(columnId,  archivedState: archivedState, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<ProjectCard>') as List).map((item) => item as ProjectCard).toList();
    } else {
      return null;
    }
  }

  /// List project collaborators with HTTP info returned
  ///
  /// Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project &#x60;admin&#x60; to list collaborators.
  Future<Response> projectsListCollaboratorsWithHttpInfo(int projectId, { String affiliation, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }

    // create path and map variables
    String path = "/projects/{project_id}/collaborators".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(affiliation != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "affiliation", affiliation));
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

  /// List project collaborators
  ///
  ///int projectId  (required):
  ///    
  ///String affiliation :
  ///     Filters the collaborators by their affiliation. Can be one of:   \\* `outside`: Outside collaborators of a project that are not a member of the project's organization.   \\* `direct`: Collaborators with permissions to a project, regardless of organization membership status.   \\* `all`: All collaborators the authenticated user can see.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project &#x60;admin&#x60; to list collaborators.
  Future<List<SimpleUser>> projectsListCollaborators(int projectId, { String affiliation, int perPage, int page }) async {
    Response response = await projectsListCollaboratorsWithHttpInfo(projectId,  affiliation: affiliation, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<SimpleUser>') as List).map((item) => item as SimpleUser).toList();
    } else {
      return null;
    }
  }

  /// List project columns with HTTP info returned
  ///
  /// 
  Future<Response> projectsListColumnsWithHttpInfo(int projectId, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }

    // create path and map variables
    String path = "/projects/{project_id}/columns".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString());

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

  /// List project columns
  ///
  ///int projectId  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<ProjectColumn>> projectsListColumns(int projectId, { int perPage, int page }) async {
    Response response = await projectsListColumnsWithHttpInfo(projectId,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<ProjectColumn>') as List).map((item) => item as ProjectColumn).toList();
    } else {
      return null;
    }
  }

  /// List organization projects with HTTP info returned
  ///
  /// Lists the projects in an organization. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Response> projectsListForOrgWithHttpInfo(String org, { String state, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/projects".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
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

  /// List organization projects
  ///
  ///String org  (required):
  ///    
  ///String state :
  ///     Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists the projects in an organization. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<List<Project>> projectsListForOrg(String org, { String state, int perPage, int page }) async {
    Response response = await projectsListForOrgWithHttpInfo(org,  state: state, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Project>') as List).map((item) => item as Project).toList();
    } else {
      return null;
    }
  }

  /// List repository projects with HTTP info returned
  ///
  /// Lists the projects in a repository. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Response> projectsListForRepoWithHttpInfo(String owner, String repo, { String state, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/projects".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
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

  /// List repository projects
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String state :
  ///     Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists the projects in a repository. Returns a &#x60;404 Not Found&#x60; status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<List<Project>> projectsListForRepo(String owner, String repo, { String state, int perPage, int page }) async {
    Response response = await projectsListForRepoWithHttpInfo(owner, repo,  state: state, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Project>') as List).map((item) => item as Project).toList();
    } else {
      return null;
    }
  }

  /// List user projects with HTTP info returned
  ///
  /// 
  Future<Response> projectsListForUserWithHttpInfo(String username, { String state, int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/users/{username}/projects".replaceAll("{format}","json").replaceAll("{" + "username" + "}", username.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(state != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "state", state));
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

  /// List user projects
  ///
  ///String username  (required):
  ///    
  ///String state :
  ///     Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// 
  Future<List<Project>> projectsListForUser(String username, { String state, int perPage, int page }) async {
    Response response = await projectsListForUserWithHttpInfo(username,  state: state, perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Project>') as List).map((item) => item as Project).toList();
    } else {
      return null;
    }
  }

  /// Move a project card with HTTP info returned
  ///
  /// 
  Future<Response> projectsMoveCardWithHttpInfo(int cardId, { InlineObject40 inlineObject40 }) async {
    Object postBody = inlineObject40;

    // verify required params are set
    if(cardId == null) {
     throw ApiException(400, "Missing required param: cardId");
    }

    // create path and map variables
    String path = "/projects/columns/cards/{card_id}/moves".replaceAll("{format}","json").replaceAll("{" + "card_id" + "}", cardId.toString());

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

  /// Move a project card
  ///
  ///int cardId  (required):
  ///     card_id parameter
  ///InlineObject40 inlineObject40 :
  ///    
  /// 
  Future<Object> projectsMoveCard(int cardId, { InlineObject40 inlineObject40 }) async {
    Response response = await projectsMoveCardWithHttpInfo(cardId,  inlineObject40: inlineObject40 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Object') as Object;
    } else {
      return null;
    }
  }

  /// Move a project column with HTTP info returned
  ///
  /// 
  Future<Response> projectsMoveColumnWithHttpInfo(int columnId, { InlineObject42 inlineObject42 }) async {
    Object postBody = inlineObject42;

    // verify required params are set
    if(columnId == null) {
     throw ApiException(400, "Missing required param: columnId");
    }

    // create path and map variables
    String path = "/projects/columns/{column_id}/moves".replaceAll("{format}","json").replaceAll("{" + "column_id" + "}", columnId.toString());

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

  /// Move a project column
  ///
  ///int columnId  (required):
  ///     column_id parameter
  ///InlineObject42 inlineObject42 :
  ///    
  /// 
  Future<Object> projectsMoveColumn(int columnId, { InlineObject42 inlineObject42 }) async {
    Response response = await projectsMoveColumnWithHttpInfo(columnId,  inlineObject42: inlineObject42 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Object') as Object;
    } else {
      return null;
    }
  }

  /// Remove user as a collaborator with HTTP info returned
  ///
  /// Removes a collaborator from an organization project. You must be an organization owner or a project &#x60;admin&#x60; to remove a collaborator.
  Future projectsRemoveCollaboratorWithHttpInfo(int projectId, String username) async {
    Object postBody;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }
    if(username == null) {
     throw ApiException(400, "Missing required param: username");
    }

    // create path and map variables
    String path = "/projects/{project_id}/collaborators/{username}".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString()).replaceAll("{" + "username" + "}", username.toString());

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

  /// Remove user as a collaborator
  ///
  ///int projectId  (required):
  ///    
  ///String username  (required):
  ///    
  /// Removes a collaborator from an organization project. You must be an organization owner or a project &#x60;admin&#x60; to remove a collaborator.
  Future projectsRemoveCollaborator(int projectId, String username) async {
    Response response = await projectsRemoveCollaboratorWithHttpInfo(projectId, username);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Update a project with HTTP info returned
  ///
  /// Updates a project board&#39;s information. Returns a &#x60;404 Not Found&#x60; status if projects are disabled. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Response> projectsUpdateWithHttpInfo(int projectId, { InlineObject43 inlineObject43 }) async {
    Object postBody = inlineObject43;

    // verify required params are set
    if(projectId == null) {
     throw ApiException(400, "Missing required param: projectId");
    }

    // create path and map variables
    String path = "/projects/{project_id}".replaceAll("{format}","json").replaceAll("{" + "project_id" + "}", projectId.toString());

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

  /// Update a project
  ///
  ///int projectId  (required):
  ///    
  ///InlineObject43 inlineObject43 :
  ///    
  /// Updates a project board&#39;s information. Returns a &#x60;404 Not Found&#x60; status if projects are disabled. If you do not have sufficient privileges to perform this action, a &#x60;401 Unauthorized&#x60; or &#x60;410 Gone&#x60; status is returned.
  Future<Project> projectsUpdate(int projectId, { InlineObject43 inlineObject43 }) async {
    Response response = await projectsUpdateWithHttpInfo(projectId,  inlineObject43: inlineObject43 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Project') as Project;
    } else {
      return null;
    }
  }

  /// Update an existing project card with HTTP info returned
  ///
  /// 
  Future<Response> projectsUpdateCardWithHttpInfo(int cardId, { InlineObject39 inlineObject39 }) async {
    Object postBody = inlineObject39;

    // verify required params are set
    if(cardId == null) {
     throw ApiException(400, "Missing required param: cardId");
    }

    // create path and map variables
    String path = "/projects/columns/cards/{card_id}".replaceAll("{format}","json").replaceAll("{" + "card_id" + "}", cardId.toString());

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

  /// Update an existing project card
  ///
  ///int cardId  (required):
  ///     card_id parameter
  ///InlineObject39 inlineObject39 :
  ///    
  /// 
  Future<ProjectCard> projectsUpdateCard(int cardId, { InlineObject39 inlineObject39 }) async {
    Response response = await projectsUpdateCardWithHttpInfo(cardId,  inlineObject39: inlineObject39 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ProjectCard') as ProjectCard;
    } else {
      return null;
    }
  }

  /// Update an existing project column with HTTP info returned
  ///
  /// 
  Future<Response> projectsUpdateColumnWithHttpInfo(int columnId, { InlineObject41 inlineObject41 }) async {
    Object postBody = inlineObject41;

    // verify required params are set
    if(columnId == null) {
     throw ApiException(400, "Missing required param: columnId");
    }

    // create path and map variables
    String path = "/projects/columns/{column_id}".replaceAll("{format}","json").replaceAll("{" + "column_id" + "}", columnId.toString());

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

  /// Update an existing project column
  ///
  ///int columnId  (required):
  ///     column_id parameter
  ///InlineObject41 inlineObject41 :
  ///    
  /// 
  Future<ProjectColumn> projectsUpdateColumn(int columnId, { InlineObject41 inlineObject41 }) async {
    Response response = await projectsUpdateColumnWithHttpInfo(columnId,  inlineObject41: inlineObject41 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ProjectColumn') as ProjectColumn;
    } else {
      return null;
    }
  }

}
