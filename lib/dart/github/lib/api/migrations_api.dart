part of openapi.api;



class MigrationsApi {
  final ApiClient apiClient;

  MigrationsApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  /// Cancel an import with HTTP info returned
  ///
  /// Stop an import for a repository.
  Future migrationsCancelImportWithHttpInfo(String owner, String repo) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Cancel an import
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  /// Stop an import for a repository.
  Future migrationsCancelImport(String owner, String repo) async {
    Response response = await migrationsCancelImportWithHttpInfo(owner, repo);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete a user migration archive with HTTP info returned
  ///
  /// Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://developer.github.com/v3/migrations/users/#list-user-migrations) and [Get a user migration status](https://developer.github.com/v3/migrations/users/#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
  Future migrationsDeleteArchiveForAuthenticatedUserWithHttpInfo(int migrationId) async {
    Object postBody;

    // verify required params are set
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/user/migrations/{migration_id}/archive".replaceAll("{format}","json").replaceAll("{" + "migration_id" + "}", migrationId.toString());

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

  /// Delete a user migration archive
  ///
  ///int migrationId  (required):
  ///     migration_id parameter
  /// Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://developer.github.com/v3/migrations/users/#list-user-migrations) and [Get a user migration status](https://developer.github.com/v3/migrations/users/#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
  Future migrationsDeleteArchiveForAuthenticatedUser(int migrationId) async {
    Response response = await migrationsDeleteArchiveForAuthenticatedUserWithHttpInfo(migrationId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Delete an organization migration archive with HTTP info returned
  ///
  /// Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
  Future migrationsDeleteArchiveForOrgWithHttpInfo(String org, int migrationId) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/orgs/{org}/migrations/{migration_id}/archive".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "migration_id" + "}", migrationId.toString());

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

  /// Delete an organization migration archive
  ///
  ///String org  (required):
  ///    
  ///int migrationId  (required):
  ///     migration_id parameter
  /// Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
  Future migrationsDeleteArchiveForOrg(String org, int migrationId) async {
    Response response = await migrationsDeleteArchiveForOrgWithHttpInfo(org, migrationId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Download an organization migration archive with HTTP info returned
  ///
  /// Fetches the URL to a migration archive.
  Future migrationsDownloadArchiveForOrgWithHttpInfo(String org, int migrationId) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/orgs/{org}/migrations/{migration_id}/archive".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "migration_id" + "}", migrationId.toString());

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

  /// Download an organization migration archive
  ///
  ///String org  (required):
  ///    
  ///int migrationId  (required):
  ///     migration_id parameter
  /// Fetches the URL to a migration archive.
  Future migrationsDownloadArchiveForOrg(String org, int migrationId) async {
    Response response = await migrationsDownloadArchiveForOrgWithHttpInfo(org, migrationId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Download a user migration archive with HTTP info returned
  ///
  /// Fetches the URL to download the migration archive as a &#x60;tar.gz&#x60; file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:  *   attachments *   bases *   commit\\_comments *   issue\\_comments *   issue\\_events *   issues *   milestones *   organizations *   projects *   protected\\_branches *   pull\\_request\\_reviews *   pull\\_requests *   releases *   repositories *   review\\_comments *   schema *   users  The archive will also contain an &#x60;attachments&#x60; directory that includes all attachment files uploaded to GitHub.com and a &#x60;repositories&#x60; directory that contains the repository&#39;s Git data.
  Future migrationsGetArchiveForAuthenticatedUserWithHttpInfo(int migrationId) async {
    Object postBody;

    // verify required params are set
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/user/migrations/{migration_id}/archive".replaceAll("{format}","json").replaceAll("{" + "migration_id" + "}", migrationId.toString());

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

  /// Download a user migration archive
  ///
  ///int migrationId  (required):
  ///     migration_id parameter
  /// Fetches the URL to download the migration archive as a &#x60;tar.gz&#x60; file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:  *   attachments *   bases *   commit\\_comments *   issue\\_comments *   issue\\_events *   issues *   milestones *   organizations *   projects *   protected\\_branches *   pull\\_request\\_reviews *   pull\\_requests *   releases *   repositories *   review\\_comments *   schema *   users  The archive will also contain an &#x60;attachments&#x60; directory that includes all attachment files uploaded to GitHub.com and a &#x60;repositories&#x60; directory that contains the repository&#39;s Git data.
  Future migrationsGetArchiveForAuthenticatedUser(int migrationId) async {
    Response response = await migrationsGetArchiveForAuthenticatedUserWithHttpInfo(migrationId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Get commit authors with HTTP info returned
  ///
  /// Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username &#x60;hubot&#x60; into something like &#x60;hubot &lt;hubot@12341234-abab-fefe-8787-fedcba987654&gt;&#x60;.  This endpoint and the [Map a commit author](https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author) endpoint allow you to provide correct Git author information.
  Future<Response> migrationsGetCommitAuthorsWithHttpInfo(String owner, String repo, { String since }) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import/authors".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(since != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("", "since", since));
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

  /// Get commit authors
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///String since :
  ///     Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  /// Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username &#x60;hubot&#x60; into something like &#x60;hubot &lt;hubot@12341234-abab-fefe-8787-fedcba987654&gt;&#x60;.  This endpoint and the [Map a commit author](https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author) endpoint allow you to provide correct Git author information.
  Future<List<PorterAuthor>> migrationsGetCommitAuthors(String owner, String repo, { String since }) async {
    Response response = await migrationsGetCommitAuthorsWithHttpInfo(owner, repo,  since: since );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<PorterAuthor>') as List).map((item) => item as PorterAuthor).toList();
    } else {
      return null;
    }
  }

  /// Get an import status with HTTP info returned
  ///
  /// View the progress of an import.  **Import status**  This section includes details about the possible values of the &#x60;status&#x60; field of the Import Progress response.  An import that does not have errors will progress through these steps:  *   &#x60;detecting&#x60; - the \&quot;detection\&quot; step of the import is in progress because the request did not include a &#x60;vcs&#x60; parameter. The import is identifying the type of source control present at the URL. *   &#x60;importing&#x60; - the \&quot;raw\&quot; step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include &#x60;commit_count&#x60; (the total number of raw commits that will be imported) and &#x60;percent&#x60; (0 - 100, the current progress through the import). *   &#x60;mapping&#x60; - the \&quot;rewrite\&quot; step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information. *   &#x60;pushing&#x60; - the \&quot;push\&quot; step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include &#x60;push_percent&#x60;, which is the percent value reported by &#x60;git push&#x60; when it is \&quot;Writing objects\&quot;. *   &#x60;complete&#x60; - the import is complete, and the repository is ready on GitHub.  If there are problems, you will see one of these in the &#x60;status&#x60; field:  *   &#x60;auth_failed&#x60; - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   &#x60;error&#x60; - the import encountered an error. The import progress response will include the &#x60;failed_step&#x60; and an error message. Contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information. *   &#x60;detection_needs_auth&#x60; - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   &#x60;detection_found_nothing&#x60; - the importer didn&#39;t recognize any source control at the URL. To resolve, [Cancel the import](https://developer.github.com/v3/migrations/source_imports/#cancel-an-import) and [retry](https://developer.github.com/v3/migrations/source_imports/#start-an-import) with the correct URL. *   &#x60;detection_found_multiple&#x60; - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a &#x60;project_choices&#x60; field with the possible project choices as values. To update project choice, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section.  **The project_choices field**  When multiple projects are found at the provided URL, the response hash will include a &#x60;project_choices&#x60; field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.  **Git LFS related fields**  This section includes details about Git LFS related fields that may be present in the Import Progress response.  *   &#x60;use_lfs&#x60; - describes whether the import has been opted in or out of using Git LFS. The value can be &#x60;opt_in&#x60;, &#x60;opt_out&#x60;, or &#x60;undecided&#x60; if no action has been taken. *   &#x60;has_large_files&#x60; - the boolean value describing whether files larger than 100MB were found during the &#x60;importing&#x60; step. *   &#x60;large_files_size&#x60; - the total size in gigabytes of files larger than 100MB found in the originating repository. *   &#x60;large_files_count&#x60; - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a \&quot;Get Large Files\&quot; request.
  Future<Response> migrationsGetImportStatusWithHttpInfo(String owner, String repo) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Get an import status
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  /// View the progress of an import.  **Import status**  This section includes details about the possible values of the &#x60;status&#x60; field of the Import Progress response.  An import that does not have errors will progress through these steps:  *   &#x60;detecting&#x60; - the \&quot;detection\&quot; step of the import is in progress because the request did not include a &#x60;vcs&#x60; parameter. The import is identifying the type of source control present at the URL. *   &#x60;importing&#x60; - the \&quot;raw\&quot; step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include &#x60;commit_count&#x60; (the total number of raw commits that will be imported) and &#x60;percent&#x60; (0 - 100, the current progress through the import). *   &#x60;mapping&#x60; - the \&quot;rewrite\&quot; step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information. *   &#x60;pushing&#x60; - the \&quot;push\&quot; step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include &#x60;push_percent&#x60;, which is the percent value reported by &#x60;git push&#x60; when it is \&quot;Writing objects\&quot;. *   &#x60;complete&#x60; - the import is complete, and the repository is ready on GitHub.  If there are problems, you will see one of these in the &#x60;status&#x60; field:  *   &#x60;auth_failed&#x60; - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   &#x60;error&#x60; - the import encountered an error. The import progress response will include the &#x60;failed_step&#x60; and an error message. Contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information. *   &#x60;detection_needs_auth&#x60; - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   &#x60;detection_found_nothing&#x60; - the importer didn&#39;t recognize any source control at the URL. To resolve, [Cancel the import](https://developer.github.com/v3/migrations/source_imports/#cancel-an-import) and [retry](https://developer.github.com/v3/migrations/source_imports/#start-an-import) with the correct URL. *   &#x60;detection_found_multiple&#x60; - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a &#x60;project_choices&#x60; field with the possible project choices as values. To update project choice, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section.  **The project_choices field**  When multiple projects are found at the provided URL, the response hash will include a &#x60;project_choices&#x60; field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.  **Git LFS related fields**  This section includes details about Git LFS related fields that may be present in the Import Progress response.  *   &#x60;use_lfs&#x60; - describes whether the import has been opted in or out of using Git LFS. The value can be &#x60;opt_in&#x60;, &#x60;opt_out&#x60;, or &#x60;undecided&#x60; if no action has been taken. *   &#x60;has_large_files&#x60; - the boolean value describing whether files larger than 100MB were found during the &#x60;importing&#x60; step. *   &#x60;large_files_size&#x60; - the total size in gigabytes of files larger than 100MB found in the originating repository. *   &#x60;large_files_count&#x60; - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a \&quot;Get Large Files\&quot; request.
  Future<ModelImport> migrationsGetImportStatus(String owner, String repo) async {
    Response response = await migrationsGetImportStatusWithHttpInfo(owner, repo);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ModelImport') as ModelImport;
    } else {
      return null;
    }
  }

  /// Get large files with HTTP info returned
  ///
  /// List files larger than 100MB found during the import
  Future<Response> migrationsGetLargeFilesWithHttpInfo(String owner, String repo) async {
    Object postBody;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import/large_files".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Get large files
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  /// List files larger than 100MB found during the import
  Future<List<PorterLargeFile>> migrationsGetLargeFiles(String owner, String repo) async {
    Response response = await migrationsGetLargeFilesWithHttpInfo(owner, repo);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<PorterLargeFile>') as List).map((item) => item as PorterLargeFile).toList();
    } else {
      return null;
    }
  }

  /// Get a user migration status with HTTP info returned
  ///
  /// Fetches a single user migration. The response includes the &#x60;state&#x60; of the migration, which can be one of the following values:  *   &#x60;pending&#x60; - the migration hasn&#39;t started yet. *   &#x60;exporting&#x60; - the migration is in progress. *   &#x60;exported&#x60; - the migration finished successfully. *   &#x60;failed&#x60; - the migration failed.  Once the migration has been &#x60;exported&#x60; you can [download the migration archive](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive).
  Future<Response> migrationsGetStatusForAuthenticatedUserWithHttpInfo(int migrationId, { List<String> exclude }) async {
    Object postBody;

    // verify required params are set
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/user/migrations/{migration_id}".replaceAll("{format}","json").replaceAll("{" + "migration_id" + "}", migrationId.toString());

    // query params
    List<QueryParam> queryParams = [];
    Map<String, String> headerParams = {};
    Map<String, String> formParams = {};
    if(exclude != null) {
      queryParams.addAll(_convertParametersForCollectionFormat("multi", "exclude", exclude));
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

  /// Get a user migration status
  ///
  ///int migrationId  (required):
  ///     migration_id parameter
  ///List&lt;String&gt; exclude :
  ///    
  /// Fetches a single user migration. The response includes the &#x60;state&#x60; of the migration, which can be one of the following values:  *   &#x60;pending&#x60; - the migration hasn&#39;t started yet. *   &#x60;exporting&#x60; - the migration is in progress. *   &#x60;exported&#x60; - the migration finished successfully. *   &#x60;failed&#x60; - the migration failed.  Once the migration has been &#x60;exported&#x60; you can [download the migration archive](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive).
  Future<Migration> migrationsGetStatusForAuthenticatedUser(int migrationId, { List<String> exclude }) async {
    Response response = await migrationsGetStatusForAuthenticatedUserWithHttpInfo(migrationId,  exclude: exclude );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Migration') as Migration;
    } else {
      return null;
    }
  }

  /// Get an organization migration status with HTTP info returned
  ///
  /// Fetches the status of a migration.  The &#x60;state&#x60; of a migration can be one of the following values:  *   &#x60;pending&#x60;, which means the migration hasn&#39;t started yet. *   &#x60;exporting&#x60;, which means the migration is in progress. *   &#x60;exported&#x60;, which means the migration finished successfully. *   &#x60;failed&#x60;, which means the migration failed.
  Future<Response> migrationsGetStatusForOrgWithHttpInfo(String org, int migrationId) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/orgs/{org}/migrations/{migration_id}".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "migration_id" + "}", migrationId.toString());

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

  /// Get an organization migration status
  ///
  ///String org  (required):
  ///    
  ///int migrationId  (required):
  ///     migration_id parameter
  /// Fetches the status of a migration.  The &#x60;state&#x60; of a migration can be one of the following values:  *   &#x60;pending&#x60;, which means the migration hasn&#39;t started yet. *   &#x60;exporting&#x60;, which means the migration is in progress. *   &#x60;exported&#x60;, which means the migration finished successfully. *   &#x60;failed&#x60;, which means the migration failed.
  Future<Migration> migrationsGetStatusForOrg(String org, int migrationId) async {
    Response response = await migrationsGetStatusForOrgWithHttpInfo(org, migrationId);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Migration') as Migration;
    } else {
      return null;
    }
  }

  /// List user migrations with HTTP info returned
  ///
  /// Lists all migrations a user has started.
  Future<Response> migrationsListForAuthenticatedUserWithHttpInfo({ int perPage, int page }) async {
    Object postBody;

    // verify required params are set

    // create path and map variables
    String path = "/user/migrations".replaceAll("{format}","json");

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

  /// List user migrations
  ///
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists all migrations a user has started.
  Future<List<Migration>> migrationsListForAuthenticatedUser({ int perPage, int page }) async {
    Response response = await migrationsListForAuthenticatedUserWithHttpInfo( perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Migration>') as List).map((item) => item as Migration).toList();
    } else {
      return null;
    }
  }

  /// List organization migrations with HTTP info returned
  ///
  /// Lists the most recent migrations.
  Future<Response> migrationsListForOrgWithHttpInfo(String org, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/migrations".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// List organization migrations
  ///
  ///String org  (required):
  ///    
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists the most recent migrations.
  Future<List<Migration>> migrationsListForOrg(String org, { int perPage, int page }) async {
    Response response = await migrationsListForOrgWithHttpInfo(org,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<Migration>') as List).map((item) => item as Migration).toList();
    } else {
      return null;
    }
  }

  /// List repositories in an organization migration with HTTP info returned
  ///
  /// List all the repositories for this organization migration.
  Future<Response> migrationsListReposForOrgWithHttpInfo(String org, int migrationId, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/orgs/{org}/migrations/{migration_id}/repositories".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "migration_id" + "}", migrationId.toString());

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

  /// List repositories in an organization migration
  ///
  ///String org  (required):
  ///    
  ///int migrationId  (required):
  ///     migration_id parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// List all the repositories for this organization migration.
  Future<List<MinimalRepository>> migrationsListReposForOrg(String org, int migrationId, { int perPage, int page }) async {
    Response response = await migrationsListReposForOrgWithHttpInfo(org, migrationId,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<MinimalRepository>') as List).map((item) => item as MinimalRepository).toList();
    } else {
      return null;
    }
  }

  /// List repositories for a user migration with HTTP info returned
  ///
  /// Lists all the repositories for this user migration.
  Future<Response> migrationsListReposForUserWithHttpInfo(int migrationId, { int perPage, int page }) async {
    Object postBody;

    // verify required params are set
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }

    // create path and map variables
    String path = "/user/migrations/{migration_id}/repositories".replaceAll("{format}","json").replaceAll("{" + "migration_id" + "}", migrationId.toString());

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

  /// List repositories for a user migration
  ///
  ///int migrationId  (required):
  ///     migration_id parameter
  ///int perPage :
  ///     Results per page (max 100)
  ///int page :
  ///     Page number of the results to fetch.
  /// Lists all the repositories for this user migration.
  Future<List<MinimalRepository>> migrationsListReposForUser(int migrationId, { int perPage, int page }) async {
    Response response = await migrationsListReposForUserWithHttpInfo(migrationId,  perPage: perPage, page: page );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return (apiClient.deserialize(_decodeBodyBytes(response), 'List<MinimalRepository>') as List).map((item) => item as MinimalRepository).toList();
    } else {
      return null;
    }
  }

  /// Map a commit author with HTTP info returned
  ///
  /// Update an author&#39;s identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
  Future<Response> migrationsMapCommitAuthorWithHttpInfo(String owner, String repo, int authorId, { InlineObject76 inlineObject76 }) async {
    Object postBody = inlineObject76;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }
    if(authorId == null) {
     throw ApiException(400, "Missing required param: authorId");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import/authors/{author_id}".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString()).replaceAll("{" + "author_id" + "}", authorId.toString());

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

  /// Map a commit author
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///int authorId  (required):
  ///     author_id parameter
  ///InlineObject76 inlineObject76 :
  ///    
  /// Update an author&#39;s identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
  Future<PorterAuthor> migrationsMapCommitAuthor(String owner, String repo, int authorId, { InlineObject76 inlineObject76 }) async {
    Response response = await migrationsMapCommitAuthorWithHttpInfo(owner, repo, authorId,  inlineObject76: inlineObject76 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'PorterAuthor') as PorterAuthor;
    } else {
      return null;
    }
  }

  /// Update Git LFS preference with HTTP info returned
  ///
  /// You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
  Future<Response> migrationsSetLfsPreferenceWithHttpInfo(String owner, String repo, { InlineObject77 inlineObject77 }) async {
    Object postBody = inlineObject77;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import/lfs".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Update Git LFS preference
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject77 inlineObject77 :
  ///    
  /// You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
  Future<ModelImport> migrationsSetLfsPreference(String owner, String repo, { InlineObject77 inlineObject77 }) async {
    Response response = await migrationsSetLfsPreferenceWithHttpInfo(owner, repo,  inlineObject77: inlineObject77 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ModelImport') as ModelImport;
    } else {
      return null;
    }
  }

  /// Start a user migration with HTTP info returned
  ///
  /// Initiates the generation of a user migration archive.
  Future<Response> migrationsStartForAuthenticatedUserWithHttpInfo({ InlineObject142 inlineObject142 }) async {
    Object postBody = inlineObject142;

    // verify required params are set

    // create path and map variables
    String path = "/user/migrations".replaceAll("{format}","json");

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

  /// Start a user migration
  ///
  ///InlineObject142 inlineObject142 :
  ///    
  /// Initiates the generation of a user migration archive.
  Future<Migration> migrationsStartForAuthenticatedUser({ InlineObject142 inlineObject142 }) async {
    Response response = await migrationsStartForAuthenticatedUserWithHttpInfo( inlineObject142: inlineObject142 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Migration') as Migration;
    } else {
      return null;
    }
  }

  /// Start an organization migration with HTTP info returned
  ///
  /// Initiates the generation of a migration archive.
  Future<Response> migrationsStartForOrgWithHttpInfo(String org, { InlineObject24 inlineObject24 }) async {
    Object postBody = inlineObject24;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }

    // create path and map variables
    String path = "/orgs/{org}/migrations".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString());

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

  /// Start an organization migration
  ///
  ///String org  (required):
  ///    
  ///InlineObject24 inlineObject24 :
  ///    
  /// Initiates the generation of a migration archive.
  Future<Migration> migrationsStartForOrg(String org, { InlineObject24 inlineObject24 }) async {
    Response response = await migrationsStartForOrgWithHttpInfo(org,  inlineObject24: inlineObject24 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'Migration') as Migration;
    } else {
      return null;
    }
  }

  /// Start an import with HTTP info returned
  ///
  /// Start a source import to a GitHub repository using GitHub Importer.
  Future<Response> migrationsStartImportWithHttpInfo(String owner, String repo, { InlineObject74 inlineObject74 }) async {
    Object postBody = inlineObject74;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Start an import
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject74 inlineObject74 :
  ///    
  /// Start a source import to a GitHub repository using GitHub Importer.
  Future<ModelImport> migrationsStartImport(String owner, String repo, { InlineObject74 inlineObject74 }) async {
    Response response = await migrationsStartImportWithHttpInfo(owner, repo,  inlineObject74: inlineObject74 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ModelImport') as ModelImport;
    } else {
      return null;
    }
  }

  /// Unlock a user repository with HTTP info returned
  ///
  /// Unlocks a repository. You can lock repositories when you [start a user migration](https://developer.github.com/v3/migrations/users/#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://developer.github.com/v3/repos/#delete-a-repository) if you no longer need the source data. Returns a status of &#x60;404 Not Found&#x60; if the repository is not locked.
  Future migrationsUnlockRepoForAuthenticatedUserWithHttpInfo(int migrationId, String repoName) async {
    Object postBody;

    // verify required params are set
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }
    if(repoName == null) {
     throw ApiException(400, "Missing required param: repoName");
    }

    // create path and map variables
    String path = "/user/migrations/{migration_id}/repos/{repo_name}/lock".replaceAll("{format}","json").replaceAll("{" + "migration_id" + "}", migrationId.toString()).replaceAll("{" + "repo_name" + "}", repoName.toString());

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

  /// Unlock a user repository
  ///
  ///int migrationId  (required):
  ///     migration_id parameter
  ///String repoName  (required):
  ///     repo_name parameter
  /// Unlocks a repository. You can lock repositories when you [start a user migration](https://developer.github.com/v3/migrations/users/#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://developer.github.com/v3/repos/#delete-a-repository) if you no longer need the source data. Returns a status of &#x60;404 Not Found&#x60; if the repository is not locked.
  Future migrationsUnlockRepoForAuthenticatedUser(int migrationId, String repoName) async {
    Response response = await migrationsUnlockRepoForAuthenticatedUserWithHttpInfo(migrationId, repoName);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Unlock an organization repository with HTTP info returned
  ///
  /// Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.
  Future migrationsUnlockRepoForOrgWithHttpInfo(String org, int migrationId, String repoName) async {
    Object postBody;

    // verify required params are set
    if(org == null) {
     throw ApiException(400, "Missing required param: org");
    }
    if(migrationId == null) {
     throw ApiException(400, "Missing required param: migrationId");
    }
    if(repoName == null) {
     throw ApiException(400, "Missing required param: repoName");
    }

    // create path and map variables
    String path = "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock".replaceAll("{format}","json").replaceAll("{" + "org" + "}", org.toString()).replaceAll("{" + "migration_id" + "}", migrationId.toString()).replaceAll("{" + "repo_name" + "}", repoName.toString());

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

  /// Unlock an organization repository
  ///
  ///String org  (required):
  ///    
  ///int migrationId  (required):
  ///     migration_id parameter
  ///String repoName  (required):
  ///     repo_name parameter
  /// Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.
  Future migrationsUnlockRepoForOrg(String org, int migrationId, String repoName) async {
    Response response = await migrationsUnlockRepoForOrgWithHttpInfo(org, migrationId, repoName);
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
    } else {
      return;
    }
  }

  /// Update an import with HTTP info returned
  ///
  /// An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.
  Future<Response> migrationsUpdateImportWithHttpInfo(String owner, String repo, { InlineObject75 inlineObject75 }) async {
    Object postBody = inlineObject75;

    // verify required params are set
    if(owner == null) {
     throw ApiException(400, "Missing required param: owner");
    }
    if(repo == null) {
     throw ApiException(400, "Missing required param: repo");
    }

    // create path and map variables
    String path = "/repos/{owner}/{repo}/import".replaceAll("{format}","json").replaceAll("{" + "owner" + "}", owner.toString()).replaceAll("{" + "repo" + "}", repo.toString());

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

  /// Update an import
  ///
  ///String owner  (required):
  ///    
  ///String repo  (required):
  ///    
  ///InlineObject75 inlineObject75 :
  ///    
  /// An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.
  Future<ModelImport> migrationsUpdateImport(String owner, String repo, { InlineObject75 inlineObject75 }) async {
    Response response = await migrationsUpdateImportWithHttpInfo(owner, repo,  inlineObject75: inlineObject75 );
    if(response.statusCode >= 400) {
      throw ApiException(response.statusCode, _decodeBodyBytes(response));
    } else if(response.body != null) {
      return apiClient.deserialize(_decodeBodyBytes(response), 'ModelImport') as ModelImport;
    } else {
      return null;
    }
  }

}
