# GitHubV3RestApi.MigrationsApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**migrationsCancelImport**](MigrationsApi.md#migrationsCancelImport) | **DELETE** /repos/{owner}/{repo}/import | Cancel an import
[**migrationsDeleteArchiveForAuthenticatedUser**](MigrationsApi.md#migrationsDeleteArchiveForAuthenticatedUser) | **DELETE** /user/migrations/{migration_id}/archive | Delete a user migration archive
[**migrationsDeleteArchiveForOrg**](MigrationsApi.md#migrationsDeleteArchiveForOrg) | **DELETE** /orgs/{org}/migrations/{migration_id}/archive | Delete an organization migration archive
[**migrationsDownloadArchiveForOrg**](MigrationsApi.md#migrationsDownloadArchiveForOrg) | **GET** /orgs/{org}/migrations/{migration_id}/archive | Download an organization migration archive
[**migrationsGetArchiveForAuthenticatedUser**](MigrationsApi.md#migrationsGetArchiveForAuthenticatedUser) | **GET** /user/migrations/{migration_id}/archive | Download a user migration archive
[**migrationsGetCommitAuthors**](MigrationsApi.md#migrationsGetCommitAuthors) | **GET** /repos/{owner}/{repo}/import/authors | Get commit authors
[**migrationsGetImportStatus**](MigrationsApi.md#migrationsGetImportStatus) | **GET** /repos/{owner}/{repo}/import | Get an import status
[**migrationsGetLargeFiles**](MigrationsApi.md#migrationsGetLargeFiles) | **GET** /repos/{owner}/{repo}/import/large_files | Get large files
[**migrationsGetStatusForAuthenticatedUser**](MigrationsApi.md#migrationsGetStatusForAuthenticatedUser) | **GET** /user/migrations/{migration_id} | Get a user migration status
[**migrationsGetStatusForOrg**](MigrationsApi.md#migrationsGetStatusForOrg) | **GET** /orgs/{org}/migrations/{migration_id} | Get an organization migration status
[**migrationsListForAuthenticatedUser**](MigrationsApi.md#migrationsListForAuthenticatedUser) | **GET** /user/migrations | List user migrations
[**migrationsListForOrg**](MigrationsApi.md#migrationsListForOrg) | **GET** /orgs/{org}/migrations | List organization migrations
[**migrationsListReposForOrg**](MigrationsApi.md#migrationsListReposForOrg) | **GET** /orgs/{org}/migrations/{migration_id}/repositories | List repositories in an organization migration
[**migrationsListReposForUser**](MigrationsApi.md#migrationsListReposForUser) | **GET** /user/migrations/{migration_id}/repositories | List repositories for a user migration
[**migrationsMapCommitAuthor**](MigrationsApi.md#migrationsMapCommitAuthor) | **PATCH** /repos/{owner}/{repo}/import/authors/{author_id} | Map a commit author
[**migrationsSetLfsPreference**](MigrationsApi.md#migrationsSetLfsPreference) | **PATCH** /repos/{owner}/{repo}/import/lfs | Update Git LFS preference
[**migrationsStartForAuthenticatedUser**](MigrationsApi.md#migrationsStartForAuthenticatedUser) | **POST** /user/migrations | Start a user migration
[**migrationsStartForOrg**](MigrationsApi.md#migrationsStartForOrg) | **POST** /orgs/{org}/migrations | Start an organization migration
[**migrationsStartImport**](MigrationsApi.md#migrationsStartImport) | **PUT** /repos/{owner}/{repo}/import | Start an import
[**migrationsUnlockRepoForAuthenticatedUser**](MigrationsApi.md#migrationsUnlockRepoForAuthenticatedUser) | **DELETE** /user/migrations/{migration_id}/repos/{repo_name}/lock | Unlock a user repository
[**migrationsUnlockRepoForOrg**](MigrationsApi.md#migrationsUnlockRepoForOrg) | **DELETE** /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock | Unlock an organization repository
[**migrationsUpdateImport**](MigrationsApi.md#migrationsUpdateImport) | **PATCH** /repos/{owner}/{repo}/import | Update an import



## migrationsCancelImport

> migrationsCancelImport(owner, repo)

Cancel an import

Stop an import for a repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.migrationsCancelImport(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## migrationsDeleteArchiveForAuthenticatedUser

> migrationsDeleteArchiveForAuthenticatedUser(migrationId)

Delete a user migration archive

Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://developer.github.com/v3/migrations/users/#list-user-migrations) and [Get a user migration status](https://developer.github.com/v3/migrations/users/#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let migrationId = 56; // Number | migration_id parameter
apiInstance.migrationsDeleteArchiveForAuthenticatedUser(migrationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrationId** | **Number**| migration_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsDeleteArchiveForOrg

> migrationsDeleteArchiveForOrg(org, migrationId)

Delete an organization migration archive

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let org = "org_example"; // String | 
let migrationId = 56; // Number | migration_id parameter
apiInstance.migrationsDeleteArchiveForOrg(org, migrationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **migrationId** | **Number**| migration_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsDownloadArchiveForOrg

> migrationsDownloadArchiveForOrg(org, migrationId)

Download an organization migration archive

Fetches the URL to a migration archive.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let org = "org_example"; // String | 
let migrationId = 56; // Number | migration_id parameter
apiInstance.migrationsDownloadArchiveForOrg(org, migrationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **migrationId** | **Number**| migration_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsGetArchiveForAuthenticatedUser

> migrationsGetArchiveForAuthenticatedUser(migrationId)

Download a user migration archive

Fetches the URL to download the migration archive as a &#x60;tar.gz&#x60; file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:  *   attachments *   bases *   commit\\_comments *   issue\\_comments *   issue\\_events *   issues *   milestones *   organizations *   projects *   protected\\_branches *   pull\\_request\\_reviews *   pull\\_requests *   releases *   repositories *   review\\_comments *   schema *   users  The archive will also contain an &#x60;attachments&#x60; directory that includes all attachment files uploaded to GitHub.com and a &#x60;repositories&#x60; directory that contains the repository&#39;s Git data.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let migrationId = 56; // Number | migration_id parameter
apiInstance.migrationsGetArchiveForAuthenticatedUser(migrationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrationId** | **Number**| migration_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsGetCommitAuthors

> [PorterAuthor] migrationsGetCommitAuthors(owner, repo, opts)

Get commit authors

Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username &#x60;hubot&#x60; into something like &#x60;hubot &lt;hubot@12341234-abab-fefe-8787-fedcba987654&gt;&#x60;.  This endpoint and the [Map a commit author](https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author) endpoint allow you to provide correct Git author information.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'since': "since_example" // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
};
apiInstance.migrationsGetCommitAuthors(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 

### Return type

[**[PorterAuthor]**](PorterAuthor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsGetImportStatus

> ModelImport migrationsGetImportStatus(owner, repo)

Get an import status

View the progress of an import.  **Import status**  This section includes details about the possible values of the &#x60;status&#x60; field of the Import Progress response.  An import that does not have errors will progress through these steps:  *   &#x60;detecting&#x60; - the \&quot;detection\&quot; step of the import is in progress because the request did not include a &#x60;vcs&#x60; parameter. The import is identifying the type of source control present at the URL. *   &#x60;importing&#x60; - the \&quot;raw\&quot; step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include &#x60;commit_count&#x60; (the total number of raw commits that will be imported) and &#x60;percent&#x60; (0 - 100, the current progress through the import). *   &#x60;mapping&#x60; - the \&quot;rewrite\&quot; step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information. *   &#x60;pushing&#x60; - the \&quot;push\&quot; step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include &#x60;push_percent&#x60;, which is the percent value reported by &#x60;git push&#x60; when it is \&quot;Writing objects\&quot;. *   &#x60;complete&#x60; - the import is complete, and the repository is ready on GitHub.  If there are problems, you will see one of these in the &#x60;status&#x60; field:  *   &#x60;auth_failed&#x60; - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   &#x60;error&#x60; - the import encountered an error. The import progress response will include the &#x60;failed_step&#x60; and an error message. Contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information. *   &#x60;detection_needs_auth&#x60; - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   &#x60;detection_found_nothing&#x60; - the importer didn&#39;t recognize any source control at the URL. To resolve, [Cancel the import](https://developer.github.com/v3/migrations/source_imports/#cancel-an-import) and [retry](https://developer.github.com/v3/migrations/source_imports/#start-an-import) with the correct URL. *   &#x60;detection_found_multiple&#x60; - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a &#x60;project_choices&#x60; field with the possible project choices as values. To update project choice, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section.  **The project_choices field**  When multiple projects are found at the provided URL, the response hash will include a &#x60;project_choices&#x60; field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.  **Git LFS related fields**  This section includes details about Git LFS related fields that may be present in the Import Progress response.  *   &#x60;use_lfs&#x60; - describes whether the import has been opted in or out of using Git LFS. The value can be &#x60;opt_in&#x60;, &#x60;opt_out&#x60;, or &#x60;undecided&#x60; if no action has been taken. *   &#x60;has_large_files&#x60; - the boolean value describing whether files larger than 100MB were found during the &#x60;importing&#x60; step. *   &#x60;large_files_size&#x60; - the total size in gigabytes of files larger than 100MB found in the originating repository. *   &#x60;large_files_count&#x60; - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a \&quot;Get Large Files\&quot; request.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.migrationsGetImportStatus(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsGetLargeFiles

> [PorterLargeFile] migrationsGetLargeFiles(owner, repo)

Get large files

List files larger than 100MB found during the import

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.migrationsGetLargeFiles(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

[**[PorterLargeFile]**](PorterLargeFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsGetStatusForAuthenticatedUser

> Migration migrationsGetStatusForAuthenticatedUser(migrationId, opts)

Get a user migration status

Fetches a single user migration. The response includes the &#x60;state&#x60; of the migration, which can be one of the following values:  *   &#x60;pending&#x60; - the migration hasn&#39;t started yet. *   &#x60;exporting&#x60; - the migration is in progress. *   &#x60;exported&#x60; - the migration finished successfully. *   &#x60;failed&#x60; - the migration failed.  Once the migration has been &#x60;exported&#x60; you can [download the migration archive](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let migrationId = 56; // Number | migration_id parameter
let opts = {
  'exclude': ["null"] // [String] | 
};
apiInstance.migrationsGetStatusForAuthenticatedUser(migrationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrationId** | **Number**| migration_id parameter | 
 **exclude** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Migration**](Migration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsGetStatusForOrg

> Migration migrationsGetStatusForOrg(org, migrationId)

Get an organization migration status

Fetches the status of a migration.  The &#x60;state&#x60; of a migration can be one of the following values:  *   &#x60;pending&#x60;, which means the migration hasn&#39;t started yet. *   &#x60;exporting&#x60;, which means the migration is in progress. *   &#x60;exported&#x60;, which means the migration finished successfully. *   &#x60;failed&#x60;, which means the migration failed.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let org = "org_example"; // String | 
let migrationId = 56; // Number | migration_id parameter
apiInstance.migrationsGetStatusForOrg(org, migrationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **migrationId** | **Number**| migration_id parameter | 

### Return type

[**Migration**](Migration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsListForAuthenticatedUser

> [Migration] migrationsListForAuthenticatedUser(opts)

List user migrations

Lists all migrations a user has started.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.migrationsListForAuthenticatedUser(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Migration]**](Migration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsListForOrg

> [Migration] migrationsListForOrg(org, opts)

List organization migrations

Lists the most recent migrations.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.migrationsListForOrg(org, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Migration]**](Migration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsListReposForOrg

> [MinimalRepository] migrationsListReposForOrg(org, migrationId, opts)

List repositories in an organization migration

List all the repositories for this organization migration.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let org = "org_example"; // String | 
let migrationId = 56; // Number | migration_id parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.migrationsListReposForOrg(org, migrationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **migrationId** | **Number**| migration_id parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[MinimalRepository]**](MinimalRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsListReposForUser

> [MinimalRepository] migrationsListReposForUser(migrationId, opts)

List repositories for a user migration

Lists all the repositories for this user migration.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let migrationId = 56; // Number | migration_id parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.migrationsListReposForUser(migrationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrationId** | **Number**| migration_id parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[MinimalRepository]**](MinimalRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsMapCommitAuthor

> PorterAuthor migrationsMapCommitAuthor(owner, repo, authorId, opts)

Map a commit author

Update an author&#39;s identity for the import. Your application can continue updating authors any time before you push new commits to the repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let authorId = 56; // Number | author_id parameter
let opts = {
  'inlineObject76': new GitHubV3RestApi.InlineObject76() // InlineObject76 | 
};
apiInstance.migrationsMapCommitAuthor(owner, repo, authorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **authorId** | **Number**| author_id parameter | 
 **inlineObject76** | [**InlineObject76**](InlineObject76.md)|  | [optional] 

### Return type

[**PorterAuthor**](PorterAuthor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## migrationsSetLfsPreference

> ModelImport migrationsSetLfsPreference(owner, repo, opts)

Update Git LFS preference

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject77': new GitHubV3RestApi.InlineObject77() // InlineObject77 | 
};
apiInstance.migrationsSetLfsPreference(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **inlineObject77** | [**InlineObject77**](InlineObject77.md)|  | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## migrationsStartForAuthenticatedUser

> Migration migrationsStartForAuthenticatedUser(opts)

Start a user migration

Initiates the generation of a user migration archive.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let opts = {
  'inlineObject142': new GitHubV3RestApi.InlineObject142() // InlineObject142 | 
};
apiInstance.migrationsStartForAuthenticatedUser(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject142** | [**InlineObject142**](InlineObject142.md)|  | [optional] 

### Return type

[**Migration**](Migration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## migrationsStartForOrg

> Migration migrationsStartForOrg(org, opts)

Start an organization migration

Initiates the generation of a migration archive.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject24': new GitHubV3RestApi.InlineObject24() // InlineObject24 | 
};
apiInstance.migrationsStartForOrg(org, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **inlineObject24** | [**InlineObject24**](InlineObject24.md)|  | [optional] 

### Return type

[**Migration**](Migration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## migrationsStartImport

> ModelImport migrationsStartImport(owner, repo, opts)

Start an import

Start a source import to a GitHub repository using GitHub Importer.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject74': new GitHubV3RestApi.InlineObject74() // InlineObject74 | 
};
apiInstance.migrationsStartImport(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **inlineObject74** | [**InlineObject74**](InlineObject74.md)|  | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## migrationsUnlockRepoForAuthenticatedUser

> migrationsUnlockRepoForAuthenticatedUser(migrationId, repoName)

Unlock a user repository

Unlocks a repository. You can lock repositories when you [start a user migration](https://developer.github.com/v3/migrations/users/#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://developer.github.com/v3/repos/#delete-a-repository) if you no longer need the source data. Returns a status of &#x60;404 Not Found&#x60; if the repository is not locked.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let migrationId = 56; // Number | migration_id parameter
let repoName = "repoName_example"; // String | repo_name parameter
apiInstance.migrationsUnlockRepoForAuthenticatedUser(migrationId, repoName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrationId** | **Number**| migration_id parameter | 
 **repoName** | **String**| repo_name parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsUnlockRepoForOrg

> migrationsUnlockRepoForOrg(org, migrationId, repoName)

Unlock an organization repository

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let org = "org_example"; // String | 
let migrationId = 56; // Number | migration_id parameter
let repoName = "repoName_example"; // String | repo_name parameter
apiInstance.migrationsUnlockRepoForOrg(org, migrationId, repoName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **migrationId** | **Number**| migration_id parameter | 
 **repoName** | **String**| repo_name parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## migrationsUpdateImport

> ModelImport migrationsUpdateImport(owner, repo, opts)

Update an import

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MigrationsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject75': new GitHubV3RestApi.InlineObject75() // InlineObject75 | 
};
apiInstance.migrationsUpdateImport(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **inlineObject75** | [**InlineObject75**](InlineObject75.md)|  | [optional] 

### Return type

[**ModelImport**](ModelImport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

