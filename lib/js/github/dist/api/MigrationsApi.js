"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject142"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject24"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject74"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject75"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject76"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject77"));

var _Migration = _interopRequireDefault(require("../model/Migration"));

var _MinimalRepository = _interopRequireDefault(require("../model/MinimalRepository"));

var _ModelImport = _interopRequireDefault(require("../model/ModelImport"));

var _PorterAuthor = _interopRequireDefault(require("../model/PorterAuthor"));

var _PorterLargeFile = _interopRequireDefault(require("../model/PorterLargeFile"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Migrations service.
* @module api/MigrationsApi
* @version 0.0.5
*/
var MigrationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MigrationsApi. 
  * @alias module:api/MigrationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MigrationsApi(apiClient) {
    _classCallCheck(this, MigrationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the migrationsCancelImport operation.
   * @callback module:api/MigrationsApi~migrationsCancelImportCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel an import
   * Stop an import for a repository.
   * @param {String} owner 
   * @param {String} repo 
   * @param {module:api/MigrationsApi~migrationsCancelImportCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(MigrationsApi, [{
    key: "migrationsCancelImport",
    value: function migrationsCancelImport(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsCancelImport");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsCancelImport");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/import', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsDeleteArchiveForAuthenticatedUser operation.
     * @callback module:api/MigrationsApi~migrationsDeleteArchiveForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user migration archive
     * Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://developer.github.com/v3/migrations/users/#list-user-migrations) and [Get a user migration status](https://developer.github.com/v3/migrations/users/#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
     * @param {Number} migrationId migration_id parameter
     * @param {module:api/MigrationsApi~migrationsDeleteArchiveForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "migrationsDeleteArchiveForAuthenticatedUser",
    value: function migrationsDeleteArchiveForAuthenticatedUser(migrationId, callback) {
      var postBody = null; // verify the required parameter 'migrationId' is set

      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsDeleteArchiveForAuthenticatedUser");
      }

      var pathParams = {
        'migration_id': migrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/migrations/{migration_id}/archive', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsDeleteArchiveForOrg operation.
     * @callback module:api/MigrationsApi~migrationsDeleteArchiveForOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an organization migration archive
     * Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
     * @param {String} org 
     * @param {Number} migrationId migration_id parameter
     * @param {module:api/MigrationsApi~migrationsDeleteArchiveForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "migrationsDeleteArchiveForOrg",
    value: function migrationsDeleteArchiveForOrg(org, migrationId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling migrationsDeleteArchiveForOrg");
      } // verify the required parameter 'migrationId' is set


      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsDeleteArchiveForOrg");
      }

      var pathParams = {
        'org': org,
        'migration_id': migrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/migrations/{migration_id}/archive', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsDownloadArchiveForOrg operation.
     * @callback module:api/MigrationsApi~migrationsDownloadArchiveForOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download an organization migration archive
     * Fetches the URL to a migration archive.
     * @param {String} org 
     * @param {Number} migrationId migration_id parameter
     * @param {module:api/MigrationsApi~migrationsDownloadArchiveForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "migrationsDownloadArchiveForOrg",
    value: function migrationsDownloadArchiveForOrg(org, migrationId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling migrationsDownloadArchiveForOrg");
      } // verify the required parameter 'migrationId' is set


      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsDownloadArchiveForOrg");
      }

      var pathParams = {
        'org': org,
        'migration_id': migrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/migrations/{migration_id}/archive', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsGetArchiveForAuthenticatedUser operation.
     * @callback module:api/MigrationsApi~migrationsGetArchiveForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a user migration archive
     * Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:  *   attachments *   bases *   commit\\_comments *   issue\\_comments *   issue\\_events *   issues *   milestones *   organizations *   projects *   protected\\_branches *   pull\\_request\\_reviews *   pull\\_requests *   releases *   repositories *   review\\_comments *   schema *   users  The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
     * @param {Number} migrationId migration_id parameter
     * @param {module:api/MigrationsApi~migrationsGetArchiveForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "migrationsGetArchiveForAuthenticatedUser",
    value: function migrationsGetArchiveForAuthenticatedUser(migrationId, callback) {
      var postBody = null; // verify the required parameter 'migrationId' is set

      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsGetArchiveForAuthenticatedUser");
      }

      var pathParams = {
        'migration_id': migrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/migrations/{migration_id}/archive', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsGetCommitAuthors operation.
     * @callback module:api/MigrationsApi~migrationsGetCommitAuthorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PorterAuthor>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get commit authors
     * Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.  This endpoint and the [Map a commit author](https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author) endpoint allow you to provide correct Git author information.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * @param {module:api/MigrationsApi~migrationsGetCommitAuthorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PorterAuthor>}
     */

  }, {
    key: "migrationsGetCommitAuthors",
    value: function migrationsGetCommitAuthors(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsGetCommitAuthors");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsGetCommitAuthors");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'since': opts['since']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_PorterAuthor["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/import/authors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsGetImportStatus operation.
     * @callback module:api/MigrationsApi~migrationsGetImportStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an import status
     * View the progress of an import.  **Import status**  This section includes details about the possible values of the `status` field of the Import Progress response.  An import that does not have errors will progress through these steps:  *   `detecting` - the \"detection\" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL. *   `importing` - the \"raw\" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import). *   `mapping` - the \"rewrite\" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information. *   `pushing` - the \"push\" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is \"Writing objects\". *   `complete` - the import is complete, and the repository is ready on GitHub.  If there are problems, you will see one of these in the `status` field:  *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information. *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section. *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://developer.github.com/v3/migrations/source_imports/#cancel-an-import) and [retry](https://developer.github.com/v3/migrations/source_imports/#start-an-import) with the correct URL. *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section.  **The project_choices field**  When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.  **Git LFS related fields**  This section includes details about Git LFS related fields that may be present in the Import Progress response.  *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken. *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step. *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository. *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a \"Get Large Files\" request.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/MigrationsApi~migrationsGetImportStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelImport}
     */

  }, {
    key: "migrationsGetImportStatus",
    value: function migrationsGetImportStatus(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsGetImportStatus");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsGetImportStatus");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelImport["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/import', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsGetLargeFiles operation.
     * @callback module:api/MigrationsApi~migrationsGetLargeFilesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PorterLargeFile>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get large files
     * List files larger than 100MB found during the import
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/MigrationsApi~migrationsGetLargeFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PorterLargeFile>}
     */

  }, {
    key: "migrationsGetLargeFiles",
    value: function migrationsGetLargeFiles(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsGetLargeFiles");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsGetLargeFiles");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_PorterLargeFile["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/import/large_files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsGetStatusForAuthenticatedUser operation.
     * @callback module:api/MigrationsApi~migrationsGetStatusForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Migration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user migration status
     * Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:  *   `pending` - the migration hasn't started yet. *   `exporting` - the migration is in progress. *   `exported` - the migration finished successfully. *   `failed` - the migration failed.  Once the migration has been `exported` you can [download the migration archive](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive).
     * @param {Number} migrationId migration_id parameter
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.exclude 
     * @param {module:api/MigrationsApi~migrationsGetStatusForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Migration}
     */

  }, {
    key: "migrationsGetStatusForAuthenticatedUser",
    value: function migrationsGetStatusForAuthenticatedUser(migrationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'migrationId' is set

      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsGetStatusForAuthenticatedUser");
      }

      var pathParams = {
        'migration_id': migrationId
      };
      var queryParams = {
        'exclude': this.apiClient.buildCollectionParam(opts['exclude'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Migration["default"];
      return this.apiClient.callApi('/user/migrations/{migration_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsGetStatusForOrg operation.
     * @callback module:api/MigrationsApi~migrationsGetStatusForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Migration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization migration status
     * Fetches the status of a migration.  The `state` of a migration can be one of the following values:  *   `pending`, which means the migration hasn't started yet. *   `exporting`, which means the migration is in progress. *   `exported`, which means the migration finished successfully. *   `failed`, which means the migration failed.
     * @param {String} org 
     * @param {Number} migrationId migration_id parameter
     * @param {module:api/MigrationsApi~migrationsGetStatusForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Migration}
     */

  }, {
    key: "migrationsGetStatusForOrg",
    value: function migrationsGetStatusForOrg(org, migrationId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling migrationsGetStatusForOrg");
      } // verify the required parameter 'migrationId' is set


      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsGetStatusForOrg");
      }

      var pathParams = {
        'org': org,
        'migration_id': migrationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Migration["default"];
      return this.apiClient.callApi('/orgs/{org}/migrations/{migration_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsListForAuthenticatedUser operation.
     * @callback module:api/MigrationsApi~migrationsListForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Migration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List user migrations
     * Lists all migrations a user has started.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/MigrationsApi~migrationsListForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Migration>}
     */

  }, {
    key: "migrationsListForAuthenticatedUser",
    value: function migrationsListForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Migration["default"]];
      return this.apiClient.callApi('/user/migrations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsListForOrg operation.
     * @callback module:api/MigrationsApi~migrationsListForOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Migration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization migrations
     * Lists the most recent migrations.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/MigrationsApi~migrationsListForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Migration>}
     */

  }, {
    key: "migrationsListForOrg",
    value: function migrationsListForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling migrationsListForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Migration["default"]];
      return this.apiClient.callApi('/orgs/{org}/migrations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsListReposForOrg operation.
     * @callback module:api/MigrationsApi~migrationsListReposForOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories in an organization migration
     * List all the repositories for this organization migration.
     * @param {String} org 
     * @param {Number} migrationId migration_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/MigrationsApi~migrationsListReposForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "migrationsListReposForOrg",
    value: function migrationsListReposForOrg(org, migrationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling migrationsListReposForOrg");
      } // verify the required parameter 'migrationId' is set


      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsListReposForOrg");
      }

      var pathParams = {
        'org': org,
        'migration_id': migrationId
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/orgs/{org}/migrations/{migration_id}/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsListReposForUser operation.
     * @callback module:api/MigrationsApi~migrationsListReposForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MinimalRepository>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repositories for a user migration
     * Lists all the repositories for this user migration.
     * @param {Number} migrationId migration_id parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/MigrationsApi~migrationsListReposForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MinimalRepository>}
     */

  }, {
    key: "migrationsListReposForUser",
    value: function migrationsListReposForUser(migrationId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'migrationId' is set

      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsListReposForUser");
      }

      var pathParams = {
        'migration_id': migrationId
      };
      var queryParams = {
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MinimalRepository["default"]];
      return this.apiClient.callApi('/user/migrations/{migration_id}/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsMapCommitAuthor operation.
     * @callback module:api/MigrationsApi~migrationsMapCommitAuthorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PorterAuthor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Map a commit author
     * Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} authorId author_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject76} opts.inlineObject76 
     * @param {module:api/MigrationsApi~migrationsMapCommitAuthorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PorterAuthor}
     */

  }, {
    key: "migrationsMapCommitAuthor",
    value: function migrationsMapCommitAuthor(owner, repo, authorId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject76']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsMapCommitAuthor");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsMapCommitAuthor");
      } // verify the required parameter 'authorId' is set


      if (authorId === undefined || authorId === null) {
        throw new Error("Missing the required parameter 'authorId' when calling migrationsMapCommitAuthor");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'author_id': authorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PorterAuthor["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/import/authors/{author_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsSetLfsPreference operation.
     * @callback module:api/MigrationsApi~migrationsSetLfsPreferenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Git LFS preference
     * You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject77} opts.inlineObject77 
     * @param {module:api/MigrationsApi~migrationsSetLfsPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelImport}
     */

  }, {
    key: "migrationsSetLfsPreference",
    value: function migrationsSetLfsPreference(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject77']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsSetLfsPreference");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsSetLfsPreference");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelImport["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/import/lfs', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsStartForAuthenticatedUser operation.
     * @callback module:api/MigrationsApi~migrationsStartForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Migration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a user migration
     * Initiates the generation of a user migration archive.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject142} opts.inlineObject142 
     * @param {module:api/MigrationsApi~migrationsStartForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Migration}
     */

  }, {
    key: "migrationsStartForAuthenticatedUser",
    value: function migrationsStartForAuthenticatedUser(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject142'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Migration["default"];
      return this.apiClient.callApi('/user/migrations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsStartForOrg operation.
     * @callback module:api/MigrationsApi~migrationsStartForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Migration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start an organization migration
     * Initiates the generation of a migration archive.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject24} opts.inlineObject24 
     * @param {module:api/MigrationsApi~migrationsStartForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Migration}
     */

  }, {
    key: "migrationsStartForOrg",
    value: function migrationsStartForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject24']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling migrationsStartForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Migration["default"];
      return this.apiClient.callApi('/orgs/{org}/migrations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsStartImport operation.
     * @callback module:api/MigrationsApi~migrationsStartImportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start an import
     * Start a source import to a GitHub repository using GitHub Importer.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject74} opts.inlineObject74 
     * @param {module:api/MigrationsApi~migrationsStartImportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelImport}
     */

  }, {
    key: "migrationsStartImport",
    value: function migrationsStartImport(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject74']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsStartImport");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsStartImport");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelImport["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/import', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsUnlockRepoForAuthenticatedUser operation.
     * @callback module:api/MigrationsApi~migrationsUnlockRepoForAuthenticatedUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock a user repository
     * Unlocks a repository. You can lock repositories when you [start a user migration](https://developer.github.com/v3/migrations/users/#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://developer.github.com/v3/repos/#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
     * @param {Number} migrationId migration_id parameter
     * @param {String} repoName repo_name parameter
     * @param {module:api/MigrationsApi~migrationsUnlockRepoForAuthenticatedUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "migrationsUnlockRepoForAuthenticatedUser",
    value: function migrationsUnlockRepoForAuthenticatedUser(migrationId, repoName, callback) {
      var postBody = null; // verify the required parameter 'migrationId' is set

      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsUnlockRepoForAuthenticatedUser");
      } // verify the required parameter 'repoName' is set


      if (repoName === undefined || repoName === null) {
        throw new Error("Missing the required parameter 'repoName' when calling migrationsUnlockRepoForAuthenticatedUser");
      }

      var pathParams = {
        'migration_id': migrationId,
        'repo_name': repoName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/user/migrations/{migration_id}/repos/{repo_name}/lock', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsUnlockRepoForOrg operation.
     * @callback module:api/MigrationsApi~migrationsUnlockRepoForOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock an organization repository
     * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.
     * @param {String} org 
     * @param {Number} migrationId migration_id parameter
     * @param {String} repoName repo_name parameter
     * @param {module:api/MigrationsApi~migrationsUnlockRepoForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "migrationsUnlockRepoForOrg",
    value: function migrationsUnlockRepoForOrg(org, migrationId, repoName, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling migrationsUnlockRepoForOrg");
      } // verify the required parameter 'migrationId' is set


      if (migrationId === undefined || migrationId === null) {
        throw new Error("Missing the required parameter 'migrationId' when calling migrationsUnlockRepoForOrg");
      } // verify the required parameter 'repoName' is set


      if (repoName === undefined || repoName === null) {
        throw new Error("Missing the required parameter 'repoName' when calling migrationsUnlockRepoForOrg");
      }

      var pathParams = {
        'org': org,
        'migration_id': migrationId,
        'repo_name': repoName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the migrationsUpdateImport operation.
     * @callback module:api/MigrationsApi~migrationsUpdateImportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an import
     * An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject75} opts.inlineObject75 
     * @param {module:api/MigrationsApi~migrationsUpdateImportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelImport}
     */

  }, {
    key: "migrationsUpdateImport",
    value: function migrationsUpdateImport(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject75']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling migrationsUpdateImport");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling migrationsUpdateImport");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelImport["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/import', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MigrationsApi;
}();

exports["default"] = MigrationsApi;