"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionsPublicKey = _interopRequireDefault(require("../model/ActionsPublicKey"));

var _ActionsSecret = _interopRequireDefault(require("../model/ActionsSecret"));

var _Artifact = _interopRequireDefault(require("../model/Artifact"));

var _AuthenticationToken = _interopRequireDefault(require("../model/AuthenticationToken"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject17"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject18"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject47"));

var _InlineObject4 = _interopRequireDefault(require("../model/InlineObject48"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20010"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse2007"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse2008"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse2009"));

var _Job = _interopRequireDefault(require("../model/Job"));

var _OrganizationActionsSecret = _interopRequireDefault(require("../model/OrganizationActionsSecret"));

var _Runner = _interopRequireDefault(require("../model/Runner"));

var _RunnerApplication = _interopRequireDefault(require("../model/RunnerApplication"));

var _Workflow = _interopRequireDefault(require("../model/Workflow"));

var _WorkflowRun = _interopRequireDefault(require("../model/WorkflowRun"));

var _WorkflowRunUsage = _interopRequireDefault(require("../model/WorkflowRunUsage"));

var _WorkflowUsage = _interopRequireDefault(require("../model/WorkflowUsage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Actions service.
* @module api/ActionsApi
* @version 0.0.5
*/
var ActionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActionsApi. 
  * @alias module:api/ActionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActionsApi(apiClient) {
    _classCallCheck(this, ActionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the actionsAddSelectedRepoToOrgSecret operation.
   * @callback module:api/ActionsApi~actionsAddSelectedRepoToOrgSecretCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add selected repository to an organization secret
   * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   * @param {String} org 
   * @param {String} secretName secret_name parameter
   * @param {Number} repositoryId repository_id parameter
   * @param {module:api/ActionsApi~actionsAddSelectedRepoToOrgSecretCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ActionsApi, [{
    key: "actionsAddSelectedRepoToOrgSecret",
    value: function actionsAddSelectedRepoToOrgSecret(org, secretName, repositoryId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsAddSelectedRepoToOrgSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsAddSelectedRepoToOrgSecret");
      } // verify the required parameter 'repositoryId' is set


      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling actionsAddSelectedRepoToOrgSecret");
      }

      var pathParams = {
        'org': org,
        'secret_name': secretName,
        'repository_id': repositoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCancelWorkflowRun operation.
     * @callback module:api/ActionsApi~actionsCancelWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a workflow run
     * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {module:api/ActionsApi~actionsCancelWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsCancelWorkflowRun",
    value: function actionsCancelWorkflowRun(owner, repo, runId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsCancelWorkflowRun");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsCancelWorkflowRun");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsCancelWorkflowRun");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCreateOrUpdateOrgSecret operation.
     * @callback module:api/ActionsApi~actionsCreateOrUpdateOrgSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update an organization secret
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  ``` const sodium = require('tweetsodium');  const key = \"base64-encoded-public-key\"; const value = \"plain-text-secret\";  // Convert the message and key to Uint8Array's (Buffer implements that interface) const messageBytes = Buffer.from(value); const keyBytes = Buffer.from(key, 'base64');  // Encrypt using LibSodium. const encryptedBytes = sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted = Buffer.from(encryptedBytes).toString('base64');  console.log(encrypted); ```   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  ``` from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -> str:   \"\"\"Encrypt a Unicode string using the public key.\"\"\"   public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())   sealed_box = public.SealedBox(public_key)   encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))   return b64encode(encrypted).decode(\"utf-8\") ```  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  ``` var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\"); var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");  var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); ```  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  ```ruby require \"rbnacl\" require \"base64\"  key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\") public_key = RbNaCl::PublicKey.new(key)  box = RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret = box.encrypt(\"my_secret\")  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) ```
     * @param {String} org 
     * @param {String} secretName secret_name parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.inlineObject17 
     * @param {module:api/ActionsApi~actionsCreateOrUpdateOrgSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsCreateOrUpdateOrgSecret",
    value: function actionsCreateOrUpdateOrgSecret(org, secretName, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject17']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsCreateOrUpdateOrgSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsCreateOrUpdateOrgSecret");
      }

      var pathParams = {
        'org': org,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/{secret_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCreateOrUpdateRepoSecret operation.
     * @callback module:api/ActionsApi~actionsCreateOrUpdateRepoSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a repository secret
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  ``` const sodium = require('tweetsodium');  const key = \"base64-encoded-public-key\"; const value = \"plain-text-secret\";  // Convert the message and key to Uint8Array's (Buffer implements that interface) const messageBytes = Buffer.from(value); const keyBytes = Buffer.from(key, 'base64');  // Encrypt using LibSodium. const encryptedBytes = sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted = Buffer.from(encryptedBytes).toString('base64');  console.log(encrypted); ```   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  ``` from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -> str:   \"\"\"Encrypt a Unicode string using the public key.\"\"\"   public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())   sealed_box = public.SealedBox(public_key)   encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))   return b64encode(encrypted).decode(\"utf-8\") ```  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  ``` var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\"); var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");  var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); ```  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  ```ruby require \"rbnacl\" require \"base64\"  key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\") public_key = RbNaCl::PublicKey.new(key)  box = RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret = box.encrypt(\"my_secret\")  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) ```
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} secretName secret_name parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject47} opts.inlineObject47 
     * @param {module:api/ActionsApi~actionsCreateOrUpdateRepoSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsCreateOrUpdateRepoSecret",
    value: function actionsCreateOrUpdateRepoSecret(owner, repo, secretName, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject47']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsCreateOrUpdateRepoSecret");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsCreateOrUpdateRepoSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsCreateOrUpdateRepoSecret");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/secrets/{secret_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCreateRegistrationTokenForOrg operation.
     * @callback module:api/ActionsApi~actionsCreateRegistrationTokenForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a registration token for an organization
     * **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate using an access token with the `admin:org` scope to use this endpoint.  #### Example using registration token  Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.  ``` ./config.sh --url https://github.com/octo-org --token TOKEN ```
     * @param {String} org 
     * @param {module:api/ActionsApi~actionsCreateRegistrationTokenForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationToken}
     */

  }, {
    key: "actionsCreateRegistrationTokenForOrg",
    value: function actionsCreateRegistrationTokenForOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsCreateRegistrationTokenForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AuthenticationToken["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/runners/registration-token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCreateRegistrationTokenForRepo operation.
     * @callback module:api/ActionsApi~actionsCreateRegistrationTokenForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a registration token for a repository
     * Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.  #### Example using registration token   Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.  ``` ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN ```
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActionsApi~actionsCreateRegistrationTokenForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationToken}
     */

  }, {
    key: "actionsCreateRegistrationTokenForRepo",
    value: function actionsCreateRegistrationTokenForRepo(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsCreateRegistrationTokenForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsCreateRegistrationTokenForRepo");
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
      var returnType = _AuthenticationToken["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runners/registration-token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCreateRemoveTokenForOrg operation.
     * @callback module:api/ActionsApi~actionsCreateRemoveTokenForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a remove token for an organization
     * **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour. You must authenticate using an access token with the `admin:org` scope to use this endpoint.  #### Example using remove token  To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this endpoint.  ``` ./config.sh remove --token TOKEN ```
     * @param {String} org 
     * @param {module:api/ActionsApi~actionsCreateRemoveTokenForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationToken}
     */

  }, {
    key: "actionsCreateRemoveTokenForOrg",
    value: function actionsCreateRemoveTokenForOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsCreateRemoveTokenForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AuthenticationToken["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/runners/remove-token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCreateRemoveTokenForRepo operation.
     * @callback module:api/ActionsApi~actionsCreateRemoveTokenForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a remove token for a repository
     * Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.  #### Example using remove token   To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.  ``` ./config.sh remove --token TOKEN ```
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActionsApi~actionsCreateRemoveTokenForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationToken}
     */

  }, {
    key: "actionsCreateRemoveTokenForRepo",
    value: function actionsCreateRemoveTokenForRepo(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsCreateRemoveTokenForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsCreateRemoveTokenForRepo");
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
      var returnType = _AuthenticationToken["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runners/remove-token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsCreateWorkflowDispatch operation.
     * @callback module:api/ActionsApi~actionsCreateWorkflowDispatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a workflow dispatch event
     * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can also replace `{workflow_id}` with the workflow file name. For example, you could use `main.yml`.  You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see \"[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch).\"  You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see \"[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line).\"
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} workflowId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject48} opts.inlineObject48 
     * @param {module:api/ActionsApi~actionsCreateWorkflowDispatchCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsCreateWorkflowDispatch",
    value: function actionsCreateWorkflowDispatch(owner, repo, workflowId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject48']; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsCreateWorkflowDispatch");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsCreateWorkflowDispatch");
      } // verify the required parameter 'workflowId' is set


      if (workflowId === undefined || workflowId === null) {
        throw new Error("Missing the required parameter 'workflowId' when calling actionsCreateWorkflowDispatch");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'workflow_id': workflowId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDeleteArtifact operation.
     * @callback module:api/ActionsApi~actionsDeleteArtifactCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an artifact
     * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} artifactId artifact_id parameter
     * @param {module:api/ActionsApi~actionsDeleteArtifactCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDeleteArtifact",
    value: function actionsDeleteArtifact(owner, repo, artifactId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDeleteArtifact");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDeleteArtifact");
      } // verify the required parameter 'artifactId' is set


      if (artifactId === undefined || artifactId === null) {
        throw new Error("Missing the required parameter 'artifactId' when calling actionsDeleteArtifact");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'artifact_id': artifactId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/artifacts/{artifact_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDeleteOrgSecret operation.
     * @callback module:api/ActionsApi~actionsDeleteOrgSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an organization secret
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * @param {String} org 
     * @param {String} secretName secret_name parameter
     * @param {module:api/ActionsApi~actionsDeleteOrgSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDeleteOrgSecret",
    value: function actionsDeleteOrgSecret(org, secretName, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsDeleteOrgSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsDeleteOrgSecret");
      }

      var pathParams = {
        'org': org,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/{secret_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDeleteRepoSecret operation.
     * @callback module:api/ActionsApi~actionsDeleteRepoSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a repository secret
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} secretName secret_name parameter
     * @param {module:api/ActionsApi~actionsDeleteRepoSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDeleteRepoSecret",
    value: function actionsDeleteRepoSecret(owner, repo, secretName, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDeleteRepoSecret");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDeleteRepoSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsDeleteRepoSecret");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/secrets/{secret_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDeleteSelfHostedRunnerFromOrg operation.
     * @callback module:api/ActionsApi~actionsDeleteSelfHostedRunnerFromOrgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a self-hosted runner from an organization
     * **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param {String} org 
     * @param {Number} runnerId runner_id parameter
     * @param {module:api/ActionsApi~actionsDeleteSelfHostedRunnerFromOrgCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDeleteSelfHostedRunnerFromOrg",
    value: function actionsDeleteSelfHostedRunnerFromOrg(org, runnerId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsDeleteSelfHostedRunnerFromOrg");
      } // verify the required parameter 'runnerId' is set


      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling actionsDeleteSelfHostedRunnerFromOrg");
      }

      var pathParams = {
        'org': org,
        'runner_id': runnerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/actions/runners/{runner_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDeleteSelfHostedRunnerFromRepo operation.
     * @callback module:api/ActionsApi~actionsDeleteSelfHostedRunnerFromRepoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a self-hosted runner from a repository
     * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `repo` scope to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runnerId runner_id parameter
     * @param {module:api/ActionsApi~actionsDeleteSelfHostedRunnerFromRepoCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDeleteSelfHostedRunnerFromRepo",
    value: function actionsDeleteSelfHostedRunnerFromRepo(owner, repo, runnerId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDeleteSelfHostedRunnerFromRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDeleteSelfHostedRunnerFromRepo");
      } // verify the required parameter 'runnerId' is set


      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling actionsDeleteSelfHostedRunnerFromRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'runner_id': runnerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runners/{runner_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDeleteWorkflowRun operation.
     * @callback module:api/ActionsApi~actionsDeleteWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a workflow run
     * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {module:api/ActionsApi~actionsDeleteWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDeleteWorkflowRun",
    value: function actionsDeleteWorkflowRun(owner, repo, runId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDeleteWorkflowRun");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDeleteWorkflowRun");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsDeleteWorkflowRun");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDeleteWorkflowRunLogs operation.
     * @callback module:api/ActionsApi~actionsDeleteWorkflowRunLogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete workflow run logs
     * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {module:api/ActionsApi~actionsDeleteWorkflowRunLogsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDeleteWorkflowRunLogs",
    value: function actionsDeleteWorkflowRunLogs(owner, repo, runId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDeleteWorkflowRunLogs");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDeleteWorkflowRunLogs");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsDeleteWorkflowRunLogs");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}/logs', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDownloadArtifact operation.
     * @callback module:api/ActionsApi~actionsDownloadArtifactCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download an artifact
     * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} artifactId artifact_id parameter
     * @param {String} archiveFormat archive_format parameter
     * @param {module:api/ActionsApi~actionsDownloadArtifactCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDownloadArtifact",
    value: function actionsDownloadArtifact(owner, repo, artifactId, archiveFormat, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDownloadArtifact");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDownloadArtifact");
      } // verify the required parameter 'artifactId' is set


      if (artifactId === undefined || artifactId === null) {
        throw new Error("Missing the required parameter 'artifactId' when calling actionsDownloadArtifact");
      } // verify the required parameter 'archiveFormat' is set


      if (archiveFormat === undefined || archiveFormat === null) {
        throw new Error("Missing the required parameter 'archiveFormat' when calling actionsDownloadArtifact");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'artifact_id': artifactId,
        'archive_format': archiveFormat
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDownloadJobLogsForWorkflowRun operation.
     * @callback module:api/ActionsApi~actionsDownloadJobLogsForWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download job logs for a workflow run
     * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} jobId job_id parameter
     * @param {module:api/ActionsApi~actionsDownloadJobLogsForWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDownloadJobLogsForWorkflowRun",
    value: function actionsDownloadJobLogsForWorkflowRun(owner, repo, jobId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDownloadJobLogsForWorkflowRun");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDownloadJobLogsForWorkflowRun");
      } // verify the required parameter 'jobId' is set


      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling actionsDownloadJobLogsForWorkflowRun");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'job_id': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/jobs/{job_id}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsDownloadWorkflowRunLogs operation.
     * @callback module:api/ActionsApi~actionsDownloadWorkflowRunLogsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download workflow run logs
     * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {module:api/ActionsApi~actionsDownloadWorkflowRunLogsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsDownloadWorkflowRunLogs",
    value: function actionsDownloadWorkflowRunLogs(owner, repo, runId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsDownloadWorkflowRunLogs");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsDownloadWorkflowRunLogs");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsDownloadWorkflowRunLogs");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetArtifact operation.
     * @callback module:api/ActionsApi~actionsGetArtifactCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Artifact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an artifact
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} artifactId artifact_id parameter
     * @param {module:api/ActionsApi~actionsGetArtifactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Artifact}
     */

  }, {
    key: "actionsGetArtifact",
    value: function actionsGetArtifact(owner, repo, artifactId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetArtifact");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetArtifact");
      } // verify the required parameter 'artifactId' is set


      if (artifactId === undefined || artifactId === null) {
        throw new Error("Missing the required parameter 'artifactId' when calling actionsGetArtifact");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'artifact_id': artifactId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Artifact["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/artifacts/{artifact_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetJobForWorkflowRun operation.
     * @callback module:api/ActionsApi~actionsGetJobForWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a job for a workflow run
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} jobId job_id parameter
     * @param {module:api/ActionsApi~actionsGetJobForWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Job}
     */

  }, {
    key: "actionsGetJobForWorkflowRun",
    value: function actionsGetJobForWorkflowRun(owner, repo, jobId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetJobForWorkflowRun");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetJobForWorkflowRun");
      } // verify the required parameter 'jobId' is set


      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling actionsGetJobForWorkflowRun");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'job_id': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Job["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/jobs/{job_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetOrgPublicKey operation.
     * @callback module:api/ActionsApi~actionsGetOrgPublicKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionsPublicKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization public key
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * @param {String} org 
     * @param {module:api/ActionsApi~actionsGetOrgPublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionsPublicKey}
     */

  }, {
    key: "actionsGetOrgPublicKey",
    value: function actionsGetOrgPublicKey(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsGetOrgPublicKey");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ActionsPublicKey["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/public-key', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetOrgSecret operation.
     * @callback module:api/ActionsApi~actionsGetOrgSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationActionsSecret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an organization secret
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * @param {String} org 
     * @param {String} secretName secret_name parameter
     * @param {module:api/ActionsApi~actionsGetOrgSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationActionsSecret}
     */

  }, {
    key: "actionsGetOrgSecret",
    value: function actionsGetOrgSecret(org, secretName, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsGetOrgSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsGetOrgSecret");
      }

      var pathParams = {
        'org': org,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrganizationActionsSecret["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/{secret_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetRepoPublicKey operation.
     * @callback module:api/ActionsApi~actionsGetRepoPublicKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionsPublicKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a repository public key
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActionsApi~actionsGetRepoPublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionsPublicKey}
     */

  }, {
    key: "actionsGetRepoPublicKey",
    value: function actionsGetRepoPublicKey(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetRepoPublicKey");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetRepoPublicKey");
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
      var returnType = _ActionsPublicKey["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/secrets/public-key', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetRepoSecret operation.
     * @callback module:api/ActionsApi~actionsGetRepoSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionsSecret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a repository secret
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {String} secretName secret_name parameter
     * @param {module:api/ActionsApi~actionsGetRepoSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionsSecret}
     */

  }, {
    key: "actionsGetRepoSecret",
    value: function actionsGetRepoSecret(owner, repo, secretName, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetRepoSecret");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetRepoSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsGetRepoSecret");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ActionsSecret["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/secrets/{secret_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetSelfHostedRunnerForOrg operation.
     * @callback module:api/ActionsApi~actionsGetSelfHostedRunnerForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Runner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a self-hosted runner for an organization
     * **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Gets a specific self-hosted runner for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param {String} org 
     * @param {Number} runnerId runner_id parameter
     * @param {module:api/ActionsApi~actionsGetSelfHostedRunnerForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Runner}
     */

  }, {
    key: "actionsGetSelfHostedRunnerForOrg",
    value: function actionsGetSelfHostedRunnerForOrg(org, runnerId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsGetSelfHostedRunnerForOrg");
      } // verify the required parameter 'runnerId' is set


      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling actionsGetSelfHostedRunnerForOrg");
      }

      var pathParams = {
        'org': org,
        'runner_id': runnerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Runner["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/runners/{runner_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetSelfHostedRunnerForRepo operation.
     * @callback module:api/ActionsApi~actionsGetSelfHostedRunnerForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Runner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a self-hosted runner for a repository
     * Gets a specific self-hosted runner. You must authenticate using an access token with the `repo` scope to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runnerId runner_id parameter
     * @param {module:api/ActionsApi~actionsGetSelfHostedRunnerForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Runner}
     */

  }, {
    key: "actionsGetSelfHostedRunnerForRepo",
    value: function actionsGetSelfHostedRunnerForRepo(owner, repo, runnerId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetSelfHostedRunnerForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetSelfHostedRunnerForRepo");
      } // verify the required parameter 'runnerId' is set


      if (runnerId === undefined || runnerId === null) {
        throw new Error("Missing the required parameter 'runnerId' when calling actionsGetSelfHostedRunnerForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'runner_id': runnerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Runner["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runners/{runner_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetWorkflow operation.
     * @callback module:api/ActionsApi~actionsGetWorkflowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workflow
     * Gets a specific workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} workflowId 
     * @param {module:api/ActionsApi~actionsGetWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workflow}
     */

  }, {
    key: "actionsGetWorkflow",
    value: function actionsGetWorkflow(owner, repo, workflowId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetWorkflow");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetWorkflow");
      } // verify the required parameter 'workflowId' is set


      if (workflowId === undefined || workflowId === null) {
        throw new Error("Missing the required parameter 'workflowId' when calling actionsGetWorkflow");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'workflow_id': workflowId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Workflow["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/workflows/{workflow_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetWorkflowRun operation.
     * @callback module:api/ActionsApi~actionsGetWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workflow run
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {module:api/ActionsApi~actionsGetWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowRun}
     */

  }, {
    key: "actionsGetWorkflowRun",
    value: function actionsGetWorkflowRun(owner, repo, runId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetWorkflowRun");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetWorkflowRun");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsGetWorkflowRun");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowRun["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetWorkflowRunUsage operation.
     * @callback module:api/ActionsApi~actionsGetWorkflowRunUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowRunUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workflow run usage
     * **Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \"[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\"  Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {module:api/ActionsApi~actionsGetWorkflowRunUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowRunUsage}
     */

  }, {
    key: "actionsGetWorkflowRunUsage",
    value: function actionsGetWorkflowRunUsage(owner, repo, runId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetWorkflowRunUsage");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetWorkflowRunUsage");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsGetWorkflowRunUsage");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowRunUsage["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}/timing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsGetWorkflowUsage operation.
     * @callback module:api/ActionsApi~actionsGetWorkflowUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workflow usage
     * **Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \"[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\"  Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} workflowId 
     * @param {module:api/ActionsApi~actionsGetWorkflowUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowUsage}
     */

  }, {
    key: "actionsGetWorkflowUsage",
    value: function actionsGetWorkflowUsage(owner, repo, workflowId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsGetWorkflowUsage");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsGetWorkflowUsage");
      } // verify the required parameter 'workflowId' is set


      if (workflowId === undefined || workflowId === null) {
        throw new Error("Missing the required parameter 'workflowId' when calling actionsGetWorkflowUsage");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'workflow_id': workflowId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowUsage["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListArtifactsForRepo operation.
     * @callback module:api/ActionsApi~actionsListArtifactsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List artifacts for a repository
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListArtifactsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: "actionsListArtifactsForRepo",
    value: function actionsListArtifactsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListArtifactsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListArtifactsForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
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
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/artifacts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListJobsForWorkflowRun operation.
     * @callback module:api/ActionsApi~actionsListJobsForWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List jobs for a workflow run
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter Filters jobs by their `completed_at` timestamp. Can be one of:   \\* `latest`: Returns jobs from the most recent execution of the workflow run.   \\* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run. (default to 'latest')
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListJobsForWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */

  }, {
    key: "actionsListJobsForWorkflowRun",
    value: function actionsListJobsForWorkflowRun(owner, repo, runId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListJobsForWorkflowRun");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListJobsForWorkflowRun");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsListJobsForWorkflowRun");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {
        'filter': opts['filter'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse7["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}/jobs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListOrgSecrets operation.
     * @callback module:api/ActionsApi~actionsListOrgSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization secrets
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListOrgSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "actionsListOrgSecrets",
    value: function actionsListOrgSecrets(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsListOrgSecrets");
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
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/secrets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListRepoSecrets operation.
     * @callback module:api/ActionsApi~actionsListRepoSecretsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository secrets
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListRepoSecretsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */

  }, {
    key: "actionsListRepoSecrets",
    value: function actionsListRepoSecrets(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListRepoSecrets");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListRepoSecrets");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
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
      var returnType = _InlineResponse8["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/secrets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListRepoWorkflows operation.
     * @callback module:api/ActionsApi~actionsListRepoWorkflowsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List repository workflows
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListRepoWorkflowsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */

  }, {
    key: "actionsListRepoWorkflows",
    value: function actionsListRepoWorkflows(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListRepoWorkflows");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListRepoWorkflows");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/workflows', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListRunnerApplicationsForOrg operation.
     * @callback module:api/ActionsApi~actionsListRunnerApplicationsForOrgCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunnerApplication>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List runner applications for an organization
     * **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param {String} org 
     * @param {module:api/ActionsApi~actionsListRunnerApplicationsForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RunnerApplication>}
     */

  }, {
    key: "actionsListRunnerApplicationsForOrg",
    value: function actionsListRunnerApplicationsForOrg(org, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsListRunnerApplicationsForOrg");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RunnerApplication["default"]];
      return this.apiClient.callApi('/orgs/{org}/actions/runners/downloads', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListRunnerApplicationsForRepo operation.
     * @callback module:api/ActionsApi~actionsListRunnerApplicationsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RunnerApplication>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List runner applications for a repository
     * Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `repo` scope to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {module:api/ActionsApi~actionsListRunnerApplicationsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RunnerApplication>}
     */

  }, {
    key: "actionsListRunnerApplicationsForRepo",
    value: function actionsListRunnerApplicationsForRepo(owner, repo, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListRunnerApplicationsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListRunnerApplicationsForRepo");
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
      var returnType = [_RunnerApplication["default"]];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runners/downloads', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListSelectedReposForOrgSecret operation.
     * @callback module:api/ActionsApi~actionsListSelectedReposForOrgSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List selected repositories for an organization secret
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * @param {String} org 
     * @param {String} secretName secret_name parameter
     * @param {module:api/ActionsApi~actionsListSelectedReposForOrgSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "actionsListSelectedReposForOrgSecret",
    value: function actionsListSelectedReposForOrgSecret(org, secretName, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsListSelectedReposForOrgSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsListSelectedReposForOrgSecret");
      }

      var pathParams = {
        'org': org,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/{secret_name}/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListSelfHostedRunnersForOrg operation.
     * @callback module:api/ActionsApi~actionsListSelfHostedRunnersForOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List self-hosted runners for an organization
     * **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists all self-hosted runners for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListSelfHostedRunnersForOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "actionsListSelfHostedRunnersForOrg",
    value: function actionsListSelfHostedRunnersForOrg(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsListSelfHostedRunnersForOrg");
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/orgs/{org}/actions/runners', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListSelfHostedRunnersForRepo operation.
     * @callback module:api/ActionsApi~actionsListSelfHostedRunnersForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List self-hosted runners for a repository
     * Lists all self-hosted runners for a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListSelfHostedRunnersForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "actionsListSelfHostedRunnersForRepo",
    value: function actionsListSelfHostedRunnersForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListSelfHostedRunnersForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListSelfHostedRunnersForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runners', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListWorkflowRunArtifacts operation.
     * @callback module:api/ActionsApi~actionsListWorkflowRunArtifactsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List workflow run artifacts
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListWorkflowRunArtifactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: "actionsListWorkflowRunArtifacts",
    value: function actionsListWorkflowRunArtifacts(owner, repo, runId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListWorkflowRunArtifacts");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListWorkflowRunArtifacts");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsListWorkflowRunArtifacts");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
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
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListWorkflowRuns operation.
     * @callback module:api/ActionsApi~actionsListWorkflowRunsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List workflow runs
     * List all workflow runs for a workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} workflowId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.actor Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
     * @param {String} opts.branch Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
     * @param {String} opts.event Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see \"[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"
     * @param {module:model/String} opts.status Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in \"[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\"
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListWorkflowRunsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */

  }, {
    key: "actionsListWorkflowRuns",
    value: function actionsListWorkflowRuns(owner, repo, workflowId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListWorkflowRuns");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListWorkflowRuns");
      } // verify the required parameter 'workflowId' is set


      if (workflowId === undefined || workflowId === null) {
        throw new Error("Missing the required parameter 'workflowId' when calling actionsListWorkflowRuns");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'workflow_id': workflowId
      };
      var queryParams = {
        'actor': opts['actor'],
        'branch': opts['branch'],
        'event': opts['event'],
        'status': opts['status'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsListWorkflowRunsForRepo operation.
     * @callback module:api/ActionsApi~actionsListWorkflowRunsForRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List workflow runs for a repository
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Object} opts Optional parameters
     * @param {String} opts.actor Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
     * @param {String} opts.branch Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
     * @param {String} opts.event Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see \"[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"
     * @param {module:model/String} opts.status Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in \"[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\"
     * @param {Number} opts.perPage Results per page (max 100) (default to 30)
     * @param {Number} opts.page Page number of the results to fetch. (default to 1)
     * @param {module:api/ActionsApi~actionsListWorkflowRunsForRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */

  }, {
    key: "actionsListWorkflowRunsForRepo",
    value: function actionsListWorkflowRunsForRepo(owner, repo, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsListWorkflowRunsForRepo");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsListWorkflowRunsForRepo");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo
      };
      var queryParams = {
        'actor': opts['actor'],
        'branch': opts['branch'],
        'event': opts['event'],
        'status': opts['status'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6["default"];
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsReRunWorkflow operation.
     * @callback module:api/ActionsApi~actionsReRunWorkflowCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Re-run a workflow
     * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     * @param {String} owner 
     * @param {String} repo 
     * @param {Number} runId 
     * @param {module:api/ActionsApi~actionsReRunWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsReRunWorkflow",
    value: function actionsReRunWorkflow(owner, repo, runId, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling actionsReRunWorkflow");
      } // verify the required parameter 'repo' is set


      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling actionsReRunWorkflow");
      } // verify the required parameter 'runId' is set


      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling actionsReRunWorkflow");
      }

      var pathParams = {
        'owner': owner,
        'repo': repo,
        'run_id': runId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repos/{owner}/{repo}/actions/runs/{run_id}/rerun', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsRemoveSelectedRepoFromOrgSecret operation.
     * @callback module:api/ActionsApi~actionsRemoveSelectedRepoFromOrgSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove selected repository from an organization secret
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * @param {String} org 
     * @param {String} secretName secret_name parameter
     * @param {Number} repositoryId repository_id parameter
     * @param {module:api/ActionsApi~actionsRemoveSelectedRepoFromOrgSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsRemoveSelectedRepoFromOrgSecret",
    value: function actionsRemoveSelectedRepoFromOrgSecret(org, secretName, repositoryId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsRemoveSelectedRepoFromOrgSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsRemoveSelectedRepoFromOrgSecret");
      } // verify the required parameter 'repositoryId' is set


      if (repositoryId === undefined || repositoryId === null) {
        throw new Error("Missing the required parameter 'repositoryId' when calling actionsRemoveSelectedRepoFromOrgSecret");
      }

      var pathParams = {
        'org': org,
        'secret_name': secretName,
        'repository_id': repositoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the actionsSetSelectedReposForOrgSecret operation.
     * @callback module:api/ActionsApi~actionsSetSelectedReposForOrgSecretCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set selected repositories for an organization secret
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     * @param {String} org 
     * @param {String} secretName secret_name parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject18} opts.inlineObject18 
     * @param {module:api/ActionsApi~actionsSetSelectedReposForOrgSecretCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "actionsSetSelectedReposForOrgSecret",
    value: function actionsSetSelectedReposForOrgSecret(org, secretName, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject18']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling actionsSetSelectedReposForOrgSecret");
      } // verify the required parameter 'secretName' is set


      if (secretName === undefined || secretName === null) {
        throw new Error("Missing the required parameter 'secretName' when calling actionsSetSelectedReposForOrgSecret");
      }

      var pathParams = {
        'org': org,
        'secret_name': secretName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/orgs/{org}/actions/secrets/{secret_name}/repositories', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ActionsApi;
}();

exports["default"] = ActionsApi;