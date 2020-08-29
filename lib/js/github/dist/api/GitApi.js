"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _GitCommit = _interopRequireDefault(require("../model/GitCommit"));

var _GitRef = _interopRequireDefault(require("../model/GitRef"));

var _GitTag = _interopRequireDefault(require("../model/GitTag"));

var _GitTree = _interopRequireDefault(require("../model/GitTree"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject66"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject67"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject68"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject69"));

var _InlineObject5 = _interopRequireDefault(require("../model/InlineObject70"));

var _InlineObject6 = _interopRequireDefault(require("../model/InlineObject71"));

var _ShortBlob = _interopRequireDefault(require("../model/ShortBlob"));

var _ValidationError = _interopRequireDefault(require("../model/ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Git service.
* @module api/GitApi
* @version 0.0.5
*/
var GitApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GitApi. 
  * @alias module:api/GitApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GitApi(apiClient) {
    _classCallCheck(this, GitApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the gitCreateBlob operation.
   * @callback module:api/GitApi~gitCreateBlobCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ShortBlob} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a blob
   * @param {String} owner 
   * @param {String} repo 
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject66} opts.inlineObject66 
   * @param {module:api/GitApi~gitCreateBlobCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ShortBlob}
   */


  _createClass(GitApi, [{
    key: "gitCreateBlob",
    value: function gitCreateBlob(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject66']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitCreateBlob");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitCreateBlob");
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
      var returnType = _ShortBlob["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/blobs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitCreateCommit operation.
     * @callback module:api/GitApi~gitCreateCommitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a commit
     * Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  In this example, the payload of the signature would be:    **Signature verification object**  The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:  These are the possible values for `reason` in the `verification` object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | `expired_key`            | The key that made the signature is expired.                                                                                       | | `not_signing_key`        | The \"signing\" flag is not among the usage flags in the GPG key that made the signature.                                           | | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         | | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      | | `unsigned`               | The object does not include a signature.                                                                                          | | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      | | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          | | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. | | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             | | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  | | `malformed_signature`    | There was an error parsing the signature.                                                                                         | | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject67} opts.inlineObject67 
     * @param {module:api/GitApi~gitCreateCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitCommit}
     */

  }, {
    key: "gitCreateCommit",
    value: function gitCreateCommit(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject67']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitCreateCommit");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitCreateCommit");
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
      var returnType = _GitCommit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/commits', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitCreateRef operation.
     * @callback module:api/GitApi~gitCreateRefCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRef} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a reference
     * Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject68} opts.inlineObject68 
     * @param {module:api/GitApi~gitCreateRefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRef}
     */

  }, {
    key: "gitCreateRef",
    value: function gitCreateRef(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject68']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitCreateRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitCreateRef");
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
      var returnType = _GitRef["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitCreateTag operation.
     * @callback module:api/GitApi~gitCreateTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a tag object
     * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://developer.github.com/v3/git/refs/#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://developer.github.com/v3/git/refs/#create-a-reference) the tag reference - this call would be unnecessary.  **Signature verification object**  The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:  These are the possible values for `reason` in the `verification` object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | `expired_key`            | The key that made the signature is expired.                                                                                       | | `not_signing_key`        | The \"signing\" flag is not among the usage flags in the GPG key that made the signature.                                           | | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         | | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      | | `unsigned`               | The object does not include a signature.                                                                                          | | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      | | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          | | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. | | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             | | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  | | `malformed_signature`    | There was an error parsing the signature.                                                                                         | | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject70} opts.inlineObject70 
     * @param {module:api/GitApi~gitCreateTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTag}
     */

  }, {
    key: "gitCreateTag",
    value: function gitCreateTag(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject70']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitCreateTag");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitCreateTag");
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
      var returnType = _GitTag["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/tags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitCreateTree operation.
     * @callback module:api/GitApi~gitCreateTreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a tree
     * The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.  If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see \"[Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)\" and \"[Update a reference](https://developer.github.com/v3/git/refs/#update-a-reference).\"
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject71} opts.inlineObject71 
     * @param {module:api/GitApi~gitCreateTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTree}
     */

  }, {
    key: "gitCreateTree",
    value: function gitCreateTree(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject71']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitCreateTree");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitCreateTree");
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
      var returnType = _GitTree["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/trees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitDeleteRef operation.
     * @callback module:api/GitApi~gitDeleteRefCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a reference
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {module:api/GitApi~gitDeleteRefCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gitDeleteRef",
    value: function gitDeleteRef(owner, repo, ref, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitDeleteRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitDeleteRef");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling gitDeleteRef");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs/{ref}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitGetBlob operation.
     * @callback module:api/GitApi~gitGetBlobCallback
     * @param {String} error Error message, if any.
     * @param {Blob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a blob
     * The `content` in the response will always be Base64 encoded.  _Note_: This API supports blobs up to 100 megabytes in size.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} fileSha file_sha parameter
     * @param {module:api/GitApi~gitGetBlobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Blob}
     */

  }, {
    key: "gitGetBlob",
    value: function gitGetBlob(owner, repo, fileSha, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitGetBlob");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitGetBlob");
      } // verify the required parameter 'fileSha' is set


      if (fileSha === undefined || fileSha === null) {
        throw new Error("Missing the required parameter 'fileSha' when calling gitGetBlob");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'file_sha': fileSha
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Blob';
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/blobs/{file_sha}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitGetCommit operation.
     * @callback module:api/GitApi~gitGetCommitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a commit
     * Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  **Signature verification object**  The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:  These are the possible values for `reason` in the `verification` object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | `expired_key`            | The key that made the signature is expired.                                                                                       | | `not_signing_key`        | The \"signing\" flag is not among the usage flags in the GPG key that made the signature.                                           | | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         | | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      | | `unsigned`               | The object does not include a signature.                                                                                          | | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      | | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          | | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. | | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             | | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  | | `malformed_signature`    | There was an error parsing the signature.                                                                                         | | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} commitSha commit_sha+ parameter
     * @param {module:api/GitApi~gitGetCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitCommit}
     */

  }, {
    key: "gitGetCommit",
    value: function gitGetCommit(owner, repo, commitSha, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitGetCommit");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitGetCommit");
      } // verify the required parameter 'commitSha' is set


      if (commitSha === undefined || commitSha === null) {
        throw new Error("Missing the required parameter 'commitSha' when calling gitGetCommit");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'commit_sha': commitSha
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GitCommit["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/commits/{commit_sha}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitGetRef operation.
     * @callback module:api/GitApi~gitGetRefCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRef} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a reference
     * Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \"[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\".
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {module:api/GitApi~gitGetRefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRef}
     */

  }, {
    key: "gitGetRef",
    value: function gitGetRef(owner, repo, ref, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitGetRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitGetRef");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling gitGetRef");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GitRef["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/ref/{ref}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitGetTag operation.
     * @callback module:api/GitApi~gitGetTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a tag
     * **Signature verification object**  The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:  These are the possible values for `reason` in the `verification` object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | `expired_key`            | The key that made the signature is expired.                                                                                       | | `not_signing_key`        | The \"signing\" flag is not among the usage flags in the GPG key that made the signature.                                           | | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         | | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      | | `unsigned`               | The object does not include a signature.                                                                                          | | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      | | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          | | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. | | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             | | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  | | `malformed_signature`    | There was an error parsing the signature.                                                                                         | | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} tagSha tag_sha parameter
     * @param {module:api/GitApi~gitGetTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTag}
     */

  }, {
    key: "gitGetTag",
    value: function gitGetTag(owner, repo, tagSha, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitGetTag");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitGetTag");
      } // verify the required parameter 'tagSha' is set


      if (tagSha === undefined || tagSha === null) {
        throw new Error("Missing the required parameter 'tagSha' when calling gitGetTag");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'tag_sha': tagSha
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GitTag["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/tags/{tag_sha}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitGetTree operation.
     * @callback module:api/GitApi~gitGetTreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitTree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a tree
     * Returns a single tree using the SHA1 value for that tree.  If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} treeSha tree_sha parameter
     * @param {Object} opts Optional parameters
     * @param {String} opts.recursive Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `\"true\"`, and `\"false\"`. Omit this parameter to prevent recursively returning objects or subtrees.
     * @param {module:api/GitApi~gitGetTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitTree}
     */

  }, {
    key: "gitGetTree",
    value: function gitGetTree(owner, repo, treeSha, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitGetTree");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitGetTree");
      } // verify the required parameter 'treeSha' is set


      if (treeSha === undefined || treeSha === null) {
        throw new Error("Missing the required parameter 'treeSha' when calling gitGetTree");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'tree_sha': treeSha
      };
      var queryParams = {
        'recursive': opts['recursive']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GitTree["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/trees/{tree_sha}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitListMatchingRefs operation.
     * @callback module:api/GitApi~gitListMatchingRefsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GitRef>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List matching references
     * Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.  When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \"[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\".  If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/GitApi~gitListMatchingRefsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GitRef>}
     */

  }, {
    key: "gitListMatchingRefs",
    value: function gitListMatchingRefs(owner, repo, ref, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitListMatchingRefs");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitListMatchingRefs");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling gitListMatchingRefs");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
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
      var returnType = [_GitRef["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/matching-refs/{ref}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gitUpdateRef operation.
     * @callback module:api/GitApi~gitUpdateRefCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitRef} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a reference
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} ref ref+ parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject69} opts.inlineObject69 
     * @param {module:api/GitApi~gitUpdateRefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitRef}
     */

  }, {
    key: "gitUpdateRef",
    value: function gitUpdateRef(owner, repo, ref, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject69']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling gitUpdateRef");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling gitUpdateRef");
      } // verify the required parameter 'ref' is set


      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling gitUpdateRef");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'ref': ref
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GitRef["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs/{ref}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GitApi;
}();

exports["default"] = GitApi;