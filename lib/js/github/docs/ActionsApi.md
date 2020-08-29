# GitHubV3RestApi.ActionsApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionsAddSelectedRepoToOrgSecret**](ActionsApi.md#actionsAddSelectedRepoToOrgSecret) | **PUT** /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id} | Add selected repository to an organization secret
[**actionsCancelWorkflowRun**](ActionsApi.md#actionsCancelWorkflowRun) | **POST** /repos/{owner}/{repo}/actions/runs/{run_id}/cancel | Cancel a workflow run
[**actionsCreateOrUpdateOrgSecret**](ActionsApi.md#actionsCreateOrUpdateOrgSecret) | **PUT** /orgs/{org}/actions/secrets/{secret_name} | Create or update an organization secret
[**actionsCreateOrUpdateRepoSecret**](ActionsApi.md#actionsCreateOrUpdateRepoSecret) | **PUT** /repos/{owner}/{repo}/actions/secrets/{secret_name} | Create or update a repository secret
[**actionsCreateRegistrationTokenForOrg**](ActionsApi.md#actionsCreateRegistrationTokenForOrg) | **POST** /orgs/{org}/actions/runners/registration-token | Create a registration token for an organization
[**actionsCreateRegistrationTokenForRepo**](ActionsApi.md#actionsCreateRegistrationTokenForRepo) | **POST** /repos/{owner}/{repo}/actions/runners/registration-token | Create a registration token for a repository
[**actionsCreateRemoveTokenForOrg**](ActionsApi.md#actionsCreateRemoveTokenForOrg) | **POST** /orgs/{org}/actions/runners/remove-token | Create a remove token for an organization
[**actionsCreateRemoveTokenForRepo**](ActionsApi.md#actionsCreateRemoveTokenForRepo) | **POST** /repos/{owner}/{repo}/actions/runners/remove-token | Create a remove token for a repository
[**actionsCreateWorkflowDispatch**](ActionsApi.md#actionsCreateWorkflowDispatch) | **POST** /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches | Create a workflow dispatch event
[**actionsDeleteArtifact**](ActionsApi.md#actionsDeleteArtifact) | **DELETE** /repos/{owner}/{repo}/actions/artifacts/{artifact_id} | Delete an artifact
[**actionsDeleteOrgSecret**](ActionsApi.md#actionsDeleteOrgSecret) | **DELETE** /orgs/{org}/actions/secrets/{secret_name} | Delete an organization secret
[**actionsDeleteRepoSecret**](ActionsApi.md#actionsDeleteRepoSecret) | **DELETE** /repos/{owner}/{repo}/actions/secrets/{secret_name} | Delete a repository secret
[**actionsDeleteSelfHostedRunnerFromOrg**](ActionsApi.md#actionsDeleteSelfHostedRunnerFromOrg) | **DELETE** /orgs/{org}/actions/runners/{runner_id} | Delete a self-hosted runner from an organization
[**actionsDeleteSelfHostedRunnerFromRepo**](ActionsApi.md#actionsDeleteSelfHostedRunnerFromRepo) | **DELETE** /repos/{owner}/{repo}/actions/runners/{runner_id} | Delete a self-hosted runner from a repository
[**actionsDeleteWorkflowRun**](ActionsApi.md#actionsDeleteWorkflowRun) | **DELETE** /repos/{owner}/{repo}/actions/runs/{run_id} | Delete a workflow run
[**actionsDeleteWorkflowRunLogs**](ActionsApi.md#actionsDeleteWorkflowRunLogs) | **DELETE** /repos/{owner}/{repo}/actions/runs/{run_id}/logs | Delete workflow run logs
[**actionsDownloadArtifact**](ActionsApi.md#actionsDownloadArtifact) | **GET** /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format} | Download an artifact
[**actionsDownloadJobLogsForWorkflowRun**](ActionsApi.md#actionsDownloadJobLogsForWorkflowRun) | **GET** /repos/{owner}/{repo}/actions/jobs/{job_id}/logs | Download job logs for a workflow run
[**actionsDownloadWorkflowRunLogs**](ActionsApi.md#actionsDownloadWorkflowRunLogs) | **GET** /repos/{owner}/{repo}/actions/runs/{run_id}/logs | Download workflow run logs
[**actionsGetArtifact**](ActionsApi.md#actionsGetArtifact) | **GET** /repos/{owner}/{repo}/actions/artifacts/{artifact_id} | Get an artifact
[**actionsGetJobForWorkflowRun**](ActionsApi.md#actionsGetJobForWorkflowRun) | **GET** /repos/{owner}/{repo}/actions/jobs/{job_id} | Get a job for a workflow run
[**actionsGetOrgPublicKey**](ActionsApi.md#actionsGetOrgPublicKey) | **GET** /orgs/{org}/actions/secrets/public-key | Get an organization public key
[**actionsGetOrgSecret**](ActionsApi.md#actionsGetOrgSecret) | **GET** /orgs/{org}/actions/secrets/{secret_name} | Get an organization secret
[**actionsGetRepoPublicKey**](ActionsApi.md#actionsGetRepoPublicKey) | **GET** /repos/{owner}/{repo}/actions/secrets/public-key | Get a repository public key
[**actionsGetRepoSecret**](ActionsApi.md#actionsGetRepoSecret) | **GET** /repos/{owner}/{repo}/actions/secrets/{secret_name} | Get a repository secret
[**actionsGetSelfHostedRunnerForOrg**](ActionsApi.md#actionsGetSelfHostedRunnerForOrg) | **GET** /orgs/{org}/actions/runners/{runner_id} | Get a self-hosted runner for an organization
[**actionsGetSelfHostedRunnerForRepo**](ActionsApi.md#actionsGetSelfHostedRunnerForRepo) | **GET** /repos/{owner}/{repo}/actions/runners/{runner_id} | Get a self-hosted runner for a repository
[**actionsGetWorkflow**](ActionsApi.md#actionsGetWorkflow) | **GET** /repos/{owner}/{repo}/actions/workflows/{workflow_id} | Get a workflow
[**actionsGetWorkflowRun**](ActionsApi.md#actionsGetWorkflowRun) | **GET** /repos/{owner}/{repo}/actions/runs/{run_id} | Get a workflow run
[**actionsGetWorkflowRunUsage**](ActionsApi.md#actionsGetWorkflowRunUsage) | **GET** /repos/{owner}/{repo}/actions/runs/{run_id}/timing | Get workflow run usage
[**actionsGetWorkflowUsage**](ActionsApi.md#actionsGetWorkflowUsage) | **GET** /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing | Get workflow usage
[**actionsListArtifactsForRepo**](ActionsApi.md#actionsListArtifactsForRepo) | **GET** /repos/{owner}/{repo}/actions/artifacts | List artifacts for a repository
[**actionsListJobsForWorkflowRun**](ActionsApi.md#actionsListJobsForWorkflowRun) | **GET** /repos/{owner}/{repo}/actions/runs/{run_id}/jobs | List jobs for a workflow run
[**actionsListOrgSecrets**](ActionsApi.md#actionsListOrgSecrets) | **GET** /orgs/{org}/actions/secrets | List organization secrets
[**actionsListRepoSecrets**](ActionsApi.md#actionsListRepoSecrets) | **GET** /repos/{owner}/{repo}/actions/secrets | List repository secrets
[**actionsListRepoWorkflows**](ActionsApi.md#actionsListRepoWorkflows) | **GET** /repos/{owner}/{repo}/actions/workflows | List repository workflows
[**actionsListRunnerApplicationsForOrg**](ActionsApi.md#actionsListRunnerApplicationsForOrg) | **GET** /orgs/{org}/actions/runners/downloads | List runner applications for an organization
[**actionsListRunnerApplicationsForRepo**](ActionsApi.md#actionsListRunnerApplicationsForRepo) | **GET** /repos/{owner}/{repo}/actions/runners/downloads | List runner applications for a repository
[**actionsListSelectedReposForOrgSecret**](ActionsApi.md#actionsListSelectedReposForOrgSecret) | **GET** /orgs/{org}/actions/secrets/{secret_name}/repositories | List selected repositories for an organization secret
[**actionsListSelfHostedRunnersForOrg**](ActionsApi.md#actionsListSelfHostedRunnersForOrg) | **GET** /orgs/{org}/actions/runners | List self-hosted runners for an organization
[**actionsListSelfHostedRunnersForRepo**](ActionsApi.md#actionsListSelfHostedRunnersForRepo) | **GET** /repos/{owner}/{repo}/actions/runners | List self-hosted runners for a repository
[**actionsListWorkflowRunArtifacts**](ActionsApi.md#actionsListWorkflowRunArtifacts) | **GET** /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts | List workflow run artifacts
[**actionsListWorkflowRuns**](ActionsApi.md#actionsListWorkflowRuns) | **GET** /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs | List workflow runs
[**actionsListWorkflowRunsForRepo**](ActionsApi.md#actionsListWorkflowRunsForRepo) | **GET** /repos/{owner}/{repo}/actions/runs | List workflow runs for a repository
[**actionsReRunWorkflow**](ActionsApi.md#actionsReRunWorkflow) | **POST** /repos/{owner}/{repo}/actions/runs/{run_id}/rerun | Re-run a workflow
[**actionsRemoveSelectedRepoFromOrgSecret**](ActionsApi.md#actionsRemoveSelectedRepoFromOrgSecret) | **DELETE** /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id} | Remove selected repository from an organization secret
[**actionsSetSelectedReposForOrgSecret**](ActionsApi.md#actionsSetSelectedReposForOrgSecret) | **PUT** /orgs/{org}/actions/secrets/{secret_name}/repositories | Set selected repositories for an organization secret



## actionsAddSelectedRepoToOrgSecret

> actionsAddSelectedRepoToOrgSecret(org, secretName, repositoryId)

Add selected repository to an organization secret

Adds a repository to an organization secret when the &#x60;visibility&#x60; for repository access is set to &#x60;selected&#x60;. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
let repositoryId = 56; // Number | repository_id parameter
apiInstance.actionsAddSelectedRepoToOrgSecret(org, secretName, repositoryId, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 
 **repositoryId** | **Number**| repository_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsCancelWorkflowRun

> actionsCancelWorkflowRun(owner, repo, runId)

Cancel a workflow run

Cancels a workflow run using its &#x60;id&#x60;. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;actions:write&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
apiInstance.actionsCancelWorkflowRun(owner, repo, runId, (error, data, response) => {
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
 **runId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsCreateOrUpdateOrgSecret

> actionsCreateOrUpdateOrgSecret(org, secretName, opts)

Create or update an organization secret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  &#x60;&#x60;&#x60; const sodium &#x3D; require(&#39;tweetsodium&#39;);  const key &#x3D; \&quot;base64-encoded-public-key\&quot;; const value &#x3D; \&quot;plain-text-secret\&quot;;  // Convert the message and key to Uint8Array&#39;s (Buffer implements that interface) const messageBytes &#x3D; Buffer.from(value); const keyBytes &#x3D; Buffer.from(key, &#39;base64&#39;);  // Encrypt using LibSodium. const encryptedBytes &#x3D; sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted &#x3D; Buffer.from(encryptedBytes).toString(&#39;base64&#39;);  console.log(encrypted); &#x60;&#x60;&#x60;   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  &#x60;&#x60;&#x60; from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -&gt; str:   \&quot;\&quot;\&quot;Encrypt a Unicode string using the public key.\&quot;\&quot;\&quot;   public_key &#x3D; public.PublicKey(public_key.encode(\&quot;utf-8\&quot;), encoding.Base64Encoder())   sealed_box &#x3D; public.SealedBox(public_key)   encrypted &#x3D; sealed_box.encrypt(secret_value.encode(\&quot;utf-8\&quot;))   return b64encode(encrypted).decode(\&quot;utf-8\&quot;) &#x60;&#x60;&#x60;  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  &#x60;&#x60;&#x60; var secretValue &#x3D; System.Text.Encoding.UTF8.GetBytes(\&quot;mySecret\&quot;); var publicKey &#x3D; Convert.FromBase64String(\&quot;2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU&#x3D;\&quot;);  var sealedPublicKeyBox &#x3D; Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); &#x60;&#x60;&#x60;  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  &#x60;&#x60;&#x60;ruby require \&quot;rbnacl\&quot; require \&quot;base64\&quot;  key &#x3D; Base64.decode64(\&quot;+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0&#x3D;\&quot;) public_key &#x3D; RbNaCl::PublicKey.new(key)  box &#x3D; RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret &#x3D; box.encrypt(\&quot;my_secret\&quot;)  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
let opts = {
  'inlineObject17': new GitHubV3RestApi.InlineObject17() // InlineObject17 | 
};
apiInstance.actionsCreateOrUpdateOrgSecret(org, secretName, opts, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 
 **inlineObject17** | [**InlineObject17**](InlineObject17.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## actionsCreateOrUpdateRepoSecret

> actionsCreateOrUpdateRepoSecret(owner, repo, secretName, opts)

Create or update a repository secret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; repository permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  &#x60;&#x60;&#x60; const sodium &#x3D; require(&#39;tweetsodium&#39;);  const key &#x3D; \&quot;base64-encoded-public-key\&quot;; const value &#x3D; \&quot;plain-text-secret\&quot;;  // Convert the message and key to Uint8Array&#39;s (Buffer implements that interface) const messageBytes &#x3D; Buffer.from(value); const keyBytes &#x3D; Buffer.from(key, &#39;base64&#39;);  // Encrypt using LibSodium. const encryptedBytes &#x3D; sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted &#x3D; Buffer.from(encryptedBytes).toString(&#39;base64&#39;);  console.log(encrypted); &#x60;&#x60;&#x60;   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  &#x60;&#x60;&#x60; from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -&gt; str:   \&quot;\&quot;\&quot;Encrypt a Unicode string using the public key.\&quot;\&quot;\&quot;   public_key &#x3D; public.PublicKey(public_key.encode(\&quot;utf-8\&quot;), encoding.Base64Encoder())   sealed_box &#x3D; public.SealedBox(public_key)   encrypted &#x3D; sealed_box.encrypt(secret_value.encode(\&quot;utf-8\&quot;))   return b64encode(encrypted).decode(\&quot;utf-8\&quot;) &#x60;&#x60;&#x60;  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  &#x60;&#x60;&#x60; var secretValue &#x3D; System.Text.Encoding.UTF8.GetBytes(\&quot;mySecret\&quot;); var publicKey &#x3D; Convert.FromBase64String(\&quot;2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU&#x3D;\&quot;);  var sealedPublicKeyBox &#x3D; Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); &#x60;&#x60;&#x60;  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  &#x60;&#x60;&#x60;ruby require \&quot;rbnacl\&quot; require \&quot;base64\&quot;  key &#x3D; Base64.decode64(\&quot;+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0&#x3D;\&quot;) public_key &#x3D; RbNaCl::PublicKey.new(key)  box &#x3D; RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret &#x3D; box.encrypt(\&quot;my_secret\&quot;)  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
let opts = {
  'inlineObject47': new GitHubV3RestApi.InlineObject47() // InlineObject47 | 
};
apiInstance.actionsCreateOrUpdateRepoSecret(owner, repo, secretName, opts, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 
 **inlineObject47** | [**InlineObject47**](InlineObject47.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## actionsCreateRegistrationTokenForOrg

> AuthenticationToken actionsCreateRegistrationTokenForOrg(org)

Create a registration token for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the &#x60;config&#x60; script. The token expires after one hour. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint.  #### Example using registration token  Configure your self-hosted runner, replacing &#x60;TOKEN&#x60; with the registration token provided by this endpoint.  &#x60;&#x60;&#x60; ./config.sh --url https://github.com/octo-org --token TOKEN &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
apiInstance.actionsCreateRegistrationTokenForOrg(org, (error, data, response) => {
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

### Return type

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsCreateRegistrationTokenForRepo

> AuthenticationToken actionsCreateRegistrationTokenForRepo(owner, repo)

Create a registration token for a repository

Returns a token that you can pass to the &#x60;config&#x60; script. The token expires after one hour. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint.  #### Example using registration token   Configure your self-hosted runner, replacing &#x60;TOKEN&#x60; with the registration token provided by this endpoint.  &#x60;&#x60;&#x60; ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.actionsCreateRegistrationTokenForRepo(owner, repo, (error, data, response) => {
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

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsCreateRemoveTokenForOrg

> AuthenticationToken actionsCreateRemoveTokenForOrg(org)

Create a remove token for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the &#x60;config&#x60; script to remove a self-hosted runner from an organization. The token expires after one hour. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint.  #### Example using remove token  To remove your self-hosted runner from an organization, replace &#x60;TOKEN&#x60; with the remove token provided by this endpoint.  &#x60;&#x60;&#x60; ./config.sh remove --token TOKEN &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
apiInstance.actionsCreateRemoveTokenForOrg(org, (error, data, response) => {
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

### Return type

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsCreateRemoveTokenForRepo

> AuthenticationToken actionsCreateRemoveTokenForRepo(owner, repo)

Create a remove token for a repository

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint.  #### Example using remove token   To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.  &#x60;&#x60;&#x60; ./config.sh remove --token TOKEN &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.actionsCreateRemoveTokenForRepo(owner, repo, (error, data, response) => {
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

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsCreateWorkflowDispatch

> actionsCreateWorkflowDispatch(owner, repo, workflowId, opts)

Create a workflow dispatch event

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can also replace &#x60;{workflow_id}&#x60; with the workflow file name. For example, you could use &#x60;main.yml&#x60;.  You must configure your GitHub Actions workflow to run when the [&#x60;workflow_dispatch&#x60; webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The &#x60;inputs&#x60; are configured in the workflow file. For more information about how to configure the &#x60;workflow_dispatch&#x60; event in the workflow file, see \&quot;[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch).\&quot;  You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;actions:write&#x60; permission to use this endpoint. For more information, see \&quot;[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line).\&quot;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let workflowId = 56; // Number | 
let opts = {
  'inlineObject48': new GitHubV3RestApi.InlineObject48() // InlineObject48 | 
};
apiInstance.actionsCreateWorkflowDispatch(owner, repo, workflowId, opts, (error, data, response) => {
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
 **workflowId** | **Number**|  | 
 **inlineObject48** | [**InlineObject48**](InlineObject48.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## actionsDeleteArtifact

> actionsDeleteArtifact(owner, repo, artifactId)

Delete an artifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;actions:write&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let artifactId = 56; // Number | artifact_id parameter
apiInstance.actionsDeleteArtifact(owner, repo, artifactId, (error, data, response) => {
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
 **artifactId** | **Number**| artifact_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDeleteOrgSecret

> actionsDeleteOrgSecret(org, secretName)

Delete an organization secret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
apiInstance.actionsDeleteOrgSecret(org, secretName, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDeleteRepoSecret

> actionsDeleteRepoSecret(owner, repo, secretName)

Delete a repository secret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; repository permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
apiInstance.actionsDeleteRepoSecret(owner, repo, secretName, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDeleteSelfHostedRunnerFromOrg

> actionsDeleteSelfHostedRunnerFromOrg(org, runnerId)

Delete a self-hosted runner from an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let runnerId = 56; // Number | runner_id parameter
apiInstance.actionsDeleteSelfHostedRunnerFromOrg(org, runnerId, (error, data, response) => {
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
 **runnerId** | **Number**| runner_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDeleteSelfHostedRunnerFromRepo

> actionsDeleteSelfHostedRunnerFromRepo(owner, repo, runnerId)

Delete a self-hosted runner from a repository

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runnerId = 56; // Number | runner_id parameter
apiInstance.actionsDeleteSelfHostedRunnerFromRepo(owner, repo, runnerId, (error, data, response) => {
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
 **runnerId** | **Number**| runner_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDeleteWorkflowRun

> actionsDeleteWorkflowRun(owner, repo, runId)

Delete a workflow run

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:write&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
apiInstance.actionsDeleteWorkflowRun(owner, repo, runId, (error, data, response) => {
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
 **runId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDeleteWorkflowRunLogs

> actionsDeleteWorkflowRunLogs(owner, repo, runId)

Delete workflow run logs

Deletes all logs for a workflow run. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;actions:write&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
apiInstance.actionsDeleteWorkflowRunLogs(owner, repo, runId, (error, data, response) => {
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
 **runId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDownloadArtifact

> actionsDownloadArtifact(owner, repo, artifactId, archiveFormat)

Download an artifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for &#x60;Location:&#x60; in the response header to find the URL for the download. The &#x60;:archive_format&#x60; must be &#x60;zip&#x60;. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let artifactId = 56; // Number | artifact_id parameter
let archiveFormat = "archiveFormat_example"; // String | archive_format parameter
apiInstance.actionsDownloadArtifact(owner, repo, artifactId, archiveFormat, (error, data, response) => {
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
 **artifactId** | **Number**| artifact_id parameter | 
 **archiveFormat** | **String**| archive_format parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDownloadJobLogsForWorkflowRun

> actionsDownloadJobLogsForWorkflowRun(owner, repo, jobId)

Download job logs for a workflow run

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for &#x60;Location:&#x60; in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let jobId = 56; // Number | job_id parameter
apiInstance.actionsDownloadJobLogsForWorkflowRun(owner, repo, jobId, (error, data, response) => {
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
 **jobId** | **Number**| job_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsDownloadWorkflowRunLogs

> actionsDownloadWorkflowRunLogs(owner, repo, runId)

Download workflow run logs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for &#x60;Location:&#x60; in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
apiInstance.actionsDownloadWorkflowRunLogs(owner, repo, runId, (error, data, response) => {
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
 **runId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsGetArtifact

> Artifact actionsGetArtifact(owner, repo, artifactId)

Get an artifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let artifactId = 56; // Number | artifact_id parameter
apiInstance.actionsGetArtifact(owner, repo, artifactId, (error, data, response) => {
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
 **artifactId** | **Number**| artifact_id parameter | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetJobForWorkflowRun

> Job actionsGetJobForWorkflowRun(owner, repo, jobId)

Get a job for a workflow run

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let jobId = 56; // Number | job_id parameter
apiInstance.actionsGetJobForWorkflowRun(owner, repo, jobId, (error, data, response) => {
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
 **jobId** | **Number**| job_id parameter | 

### Return type

[**Job**](Job.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetOrgPublicKey

> ActionsPublicKey actionsGetOrgPublicKey(org)

Get an organization public key

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
apiInstance.actionsGetOrgPublicKey(org, (error, data, response) => {
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

### Return type

[**ActionsPublicKey**](ActionsPublicKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetOrgSecret

> OrganizationActionsSecret actionsGetOrgSecret(org, secretName)

Get an organization secret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
apiInstance.actionsGetOrgSecret(org, secretName, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 

### Return type

[**OrganizationActionsSecret**](OrganizationActionsSecret.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetRepoPublicKey

> ActionsPublicKey actionsGetRepoPublicKey(owner, repo)

Get a repository public key

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;secrets&#x60; repository permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.actionsGetRepoPublicKey(owner, repo, (error, data, response) => {
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

[**ActionsPublicKey**](ActionsPublicKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetRepoSecret

> ActionsSecret actionsGetRepoSecret(owner, repo, secretName)

Get a repository secret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; repository permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
apiInstance.actionsGetRepoSecret(owner, repo, secretName, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 

### Return type

[**ActionsSecret**](ActionsSecret.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetSelfHostedRunnerForOrg

> Runner actionsGetSelfHostedRunnerForOrg(org, runnerId)

Get a self-hosted runner for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Gets a specific self-hosted runner for an organization. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let runnerId = 56; // Number | runner_id parameter
apiInstance.actionsGetSelfHostedRunnerForOrg(org, runnerId, (error, data, response) => {
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
 **runnerId** | **Number**| runner_id parameter | 

### Return type

[**Runner**](Runner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetSelfHostedRunnerForRepo

> Runner actionsGetSelfHostedRunnerForRepo(owner, repo, runnerId)

Get a self-hosted runner for a repository

Gets a specific self-hosted runner. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runnerId = 56; // Number | runner_id parameter
apiInstance.actionsGetSelfHostedRunnerForRepo(owner, repo, runnerId, (error, data, response) => {
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
 **runnerId** | **Number**| runner_id parameter | 

### Return type

[**Runner**](Runner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetWorkflow

> Workflow actionsGetWorkflow(owner, repo, workflowId)

Get a workflow

Gets a specific workflow. You can also replace &#x60;:workflow_id&#x60; with &#x60;:workflow_file_name&#x60;. For example, you could use &#x60;main.yml&#x60;. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let workflowId = 56; // Number | 
apiInstance.actionsGetWorkflow(owner, repo, workflowId, (error, data, response) => {
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
 **workflowId** | **Number**|  | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetWorkflowRun

> WorkflowRun actionsGetWorkflowRun(owner, repo, runId)

Get a workflow run

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
apiInstance.actionsGetWorkflowRun(owner, repo, runId, (error, data, response) => {
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
 **runId** | **Number**|  | 

### Return type

[**WorkflowRun**](WorkflowRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetWorkflowRunUsage

> WorkflowRunUsage actionsGetWorkflowRunUsage(owner, repo, runId)

Get workflow run usage

**Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \&quot;[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\&quot;  Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
apiInstance.actionsGetWorkflowRunUsage(owner, repo, runId, (error, data, response) => {
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
 **runId** | **Number**|  | 

### Return type

[**WorkflowRunUsage**](WorkflowRunUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsGetWorkflowUsage

> WorkflowUsage actionsGetWorkflowUsage(owner, repo, workflowId)

Get workflow usage

**Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \&quot;[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\&quot;  Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  You can also replace &#x60;:workflow_id&#x60; with &#x60;:workflow_file_name&#x60;. For example, you could use &#x60;main.yml&#x60;. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let workflowId = 56; // Number | 
apiInstance.actionsGetWorkflowUsage(owner, repo, workflowId, (error, data, response) => {
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
 **workflowId** | **Number**|  | 

### Return type

[**WorkflowUsage**](WorkflowUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListArtifactsForRepo

> InlineResponse2006 actionsListArtifactsForRepo(owner, repo, opts)

List artifacts for a repository

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListArtifactsForRepo(owner, repo, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListJobsForWorkflowRun

> InlineResponse2008 actionsListJobsForWorkflowRun(owner, repo, runId, opts)

List jobs for a workflow run

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
let opts = {
  'filter': "'latest'", // String | Filters jobs by their `completed_at` timestamp. Can be one of:   \\* `latest`: Returns jobs from the most recent execution of the workflow run.   \\* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListJobsForWorkflowRun(owner, repo, runId, opts, (error, data, response) => {
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
 **runId** | **Number**|  | 
 **filter** | **String**| Filters jobs by their &#x60;completed_at&#x60; timestamp. Can be one of:   \\* &#x60;latest&#x60;: Returns jobs from the most recent execution of the workflow run.   \\* &#x60;all&#x60;: Returns all jobs for a workflow run, including from old executions of the workflow run. | [optional] [default to &#39;latest&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListOrgSecrets

> InlineResponse2003 actionsListOrgSecrets(org, opts)

List organization secrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListOrgSecrets(org, opts, (error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListRepoSecrets

> InlineResponse2009 actionsListRepoSecrets(owner, repo, opts)

List repository secrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; repository permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListRepoSecrets(owner, repo, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListRepoWorkflows

> InlineResponse20010 actionsListRepoWorkflows(owner, repo, opts)

List repository workflows

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListRepoWorkflows(owner, repo, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListRunnerApplicationsForOrg

> [RunnerApplication] actionsListRunnerApplicationsForOrg(org)

List runner applications for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
apiInstance.actionsListRunnerApplicationsForOrg(org, (error, data, response) => {
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

### Return type

[**[RunnerApplication]**](RunnerApplication.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListRunnerApplicationsForRepo

> [RunnerApplication] actionsListRunnerApplicationsForRepo(owner, repo)

List runner applications for a repository

Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.actionsListRunnerApplicationsForRepo(owner, repo, (error, data, response) => {
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

[**[RunnerApplication]**](RunnerApplication.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListSelectedReposForOrgSecret

> InlineResponse2004 actionsListSelectedReposForOrgSecret(org, secretName)

List selected repositories for an organization secret

Lists all repositories that have been selected when the &#x60;visibility&#x60; for repository access to a secret is set to &#x60;selected&#x60;. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
apiInstance.actionsListSelectedReposForOrgSecret(org, secretName, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListSelfHostedRunnersForOrg

> InlineResponse2002 actionsListSelfHostedRunnersForOrg(org, opts)

List self-hosted runners for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists all self-hosted runners for an organization. You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListSelfHostedRunnersForOrg(org, opts, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListSelfHostedRunnersForRepo

> InlineResponse2002 actionsListSelfHostedRunnersForRepo(owner, repo, opts)

List self-hosted runners for a repository

Lists all self-hosted runners for a repository. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListSelfHostedRunnersForRepo(owner, repo, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListWorkflowRunArtifacts

> InlineResponse2006 actionsListWorkflowRunArtifacts(owner, repo, runId, opts)

List workflow run artifacts

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListWorkflowRunArtifacts(owner, repo, runId, opts, (error, data, response) => {
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
 **runId** | **Number**|  | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListWorkflowRuns

> InlineResponse2007 actionsListWorkflowRuns(owner, repo, workflowId, opts)

List workflow runs

List all workflow runs for a workflow. You can also replace &#x60;:workflow_id&#x60; with &#x60;:workflow_file_name&#x60;. For example, you could use &#x60;main.yml&#x60;. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let workflowId = 56; // Number | 
let opts = {
  'actor': "actor_example", // String | Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
  'branch': "branch_example", // String | Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
  'event': "event_example", // String | Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see \"[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"
  'status': "status_example", // String | Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in \"[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\"
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListWorkflowRuns(owner, repo, workflowId, opts, (error, data, response) => {
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
 **workflowId** | **Number**|  | 
 **actor** | **String**| Returns someone&#39;s workflow runs. Use the login for the user who created the &#x60;push&#x60; associated with the check suite or workflow run. | [optional] 
 **branch** | **String**| Returns workflow runs associated with a branch. Use the name of the branch of the &#x60;push&#x60;. | [optional] 
 **event** | **String**| Returns workflow run triggered by the event you specify. For example, &#x60;push&#x60;, &#x60;pull_request&#x60; or &#x60;issue&#x60;. For more information, see \&quot;[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\&quot; | [optional] 
 **status** | **String**| Returns workflow runs associated with the check run &#x60;status&#x60; or &#x60;conclusion&#x60; you specify. For example, a conclusion can be &#x60;success&#x60; or a status can be &#x60;completed&#x60;. For more information, see the &#x60;status&#x60; and &#x60;conclusion&#x60; options available in \&quot;[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\&quot; | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsListWorkflowRunsForRepo

> InlineResponse2007 actionsListWorkflowRunsForRepo(owner, repo, opts)

List workflow runs for a repository

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the &#x60;repo&#x60; scope. GitHub Apps must have the &#x60;actions:read&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'actor': "actor_example", // String | Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
  'branch': "branch_example", // String | Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
  'event': "event_example", // String | Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see \"[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"
  'status': "status_example", // String | Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in \"[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\"
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.actionsListWorkflowRunsForRepo(owner, repo, opts, (error, data, response) => {
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
 **actor** | **String**| Returns someone&#39;s workflow runs. Use the login for the user who created the &#x60;push&#x60; associated with the check suite or workflow run. | [optional] 
 **branch** | **String**| Returns workflow runs associated with a branch. Use the name of the branch of the &#x60;push&#x60;. | [optional] 
 **event** | **String**| Returns workflow run triggered by the event you specify. For example, &#x60;push&#x60;, &#x60;pull_request&#x60; or &#x60;issue&#x60;. For more information, see \&quot;[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\&quot; | [optional] 
 **status** | **String**| Returns workflow runs associated with the check run &#x60;status&#x60; or &#x60;conclusion&#x60; you specify. For example, a conclusion can be &#x60;success&#x60; or a status can be &#x60;completed&#x60;. For more information, see the &#x60;status&#x60; and &#x60;conclusion&#x60; options available in \&quot;[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\&quot; | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsReRunWorkflow

> actionsReRunWorkflow(owner, repo, runId)

Re-run a workflow

Re-runs your workflow run using its &#x60;id&#x60;. You must authenticate using an access token with the &#x60;repo&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;actions:write&#x60; permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let runId = 56; // Number | 
apiInstance.actionsReRunWorkflow(owner, repo, runId, (error, data, response) => {
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
 **runId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsRemoveSelectedRepoFromOrgSecret

> actionsRemoveSelectedRepoFromOrgSecret(org, secretName, repositoryId)

Remove selected repository from an organization secret

Removes a repository from an organization secret when the &#x60;visibility&#x60; for repository access is set to &#x60;selected&#x60;. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
let repositoryId = 56; // Number | repository_id parameter
apiInstance.actionsRemoveSelectedRepoFromOrgSecret(org, secretName, repositoryId, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 
 **repositoryId** | **Number**| repository_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## actionsSetSelectedReposForOrgSecret

> actionsSetSelectedReposForOrgSecret(org, secretName, opts)

Set selected repositories for an organization secret

Replaces all repositories for an organization secret when the &#x60;visibility&#x60; for repository access is set to &#x60;selected&#x60;. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the &#x60;admin:org&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;secrets&#x60; organization permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ActionsApi();
let org = "org_example"; // String | 
let secretName = "secretName_example"; // String | secret_name parameter
let opts = {
  'inlineObject18': new GitHubV3RestApi.InlineObject18() // InlineObject18 | 
};
apiInstance.actionsSetSelectedReposForOrgSecret(org, secretName, opts, (error, data, response) => {
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
 **secretName** | **String**| secret_name parameter | 
 **inlineObject18** | [**InlineObject18**](InlineObject18.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

