# openapi.api.ActionsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

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


# **actionsAddSelectedRepoToOrgSecret**
> actionsAddSelectedRepoToOrgSecret(org, secretName, repositoryId)

Add selected repository to an organization secret

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var secretName = secretName_example; // String | secret_name parameter
var repositoryId = 56; // int | repository_id parameter

try { 
    api_instance.actionsAddSelectedRepoToOrgSecret(org, secretName, repositoryId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsAddSelectedRepoToOrgSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]
 **repositoryId** | **int**| repository_id parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCancelWorkflowRun**
> actionsCancelWorkflowRun(owner, repo, runId)

Cancel a workflow run

Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 

try { 
    api_instance.actionsCancelWorkflowRun(owner, repo, runId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCancelWorkflowRun: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCreateOrUpdateOrgSecret**
> actionsCreateOrUpdateOrgSecret(org, secretName, inlineObject17)

Create or update an organization secret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  ``` const sodium = require('tweetsodium');  const key = \"base64-encoded-public-key\"; const value = \"plain-text-secret\";  // Convert the message and key to Uint8Array's (Buffer implements that interface) const messageBytes = Buffer.from(value); const keyBytes = Buffer.from(key, 'base64');  // Encrypt using LibSodium. const encryptedBytes = sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted = Buffer.from(encryptedBytes).toString('base64');  console.log(encrypted); ```   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  ``` from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -> str:   \"\"\"Encrypt a Unicode string using the public key.\"\"\"   public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())   sealed_box = public.SealedBox(public_key)   encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))   return b64encode(encrypted).decode(\"utf-8\") ```  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  ``` var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\"); var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");  var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); ```  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  ```ruby require \"rbnacl\" require \"base64\"  key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\") public_key = RbNaCl::PublicKey.new(key)  box = RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret = box.encrypt(\"my_secret\")  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) ```

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var secretName = secretName_example; // String | secret_name parameter
var inlineObject17 = InlineObject17(); // InlineObject17 | 

try { 
    api_instance.actionsCreateOrUpdateOrgSecret(org, secretName, inlineObject17);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCreateOrUpdateOrgSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]
 **inlineObject17** | [**InlineObject17**](InlineObject17.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCreateOrUpdateRepoSecret**
> actionsCreateOrUpdateRepoSecret(owner, repo, secretName, inlineObject47)

Create or update a repository secret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  ``` const sodium = require('tweetsodium');  const key = \"base64-encoded-public-key\"; const value = \"plain-text-secret\";  // Convert the message and key to Uint8Array's (Buffer implements that interface) const messageBytes = Buffer.from(value); const keyBytes = Buffer.from(key, 'base64');  // Encrypt using LibSodium. const encryptedBytes = sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted = Buffer.from(encryptedBytes).toString('base64');  console.log(encrypted); ```   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  ``` from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -> str:   \"\"\"Encrypt a Unicode string using the public key.\"\"\"   public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())   sealed_box = public.SealedBox(public_key)   encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))   return b64encode(encrypted).decode(\"utf-8\") ```  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  ``` var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\"); var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");  var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); ```  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  ```ruby require \"rbnacl\" require \"base64\"  key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\") public_key = RbNaCl::PublicKey.new(key)  box = RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret = box.encrypt(\"my_secret\")  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) ```

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var secretName = secretName_example; // String | secret_name parameter
var inlineObject47 = InlineObject47(); // InlineObject47 | 

try { 
    api_instance.actionsCreateOrUpdateRepoSecret(owner, repo, secretName, inlineObject47);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCreateOrUpdateRepoSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]
 **inlineObject47** | [**InlineObject47**](InlineObject47.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCreateRegistrationTokenForOrg**
> AuthenticationToken actionsCreateRegistrationTokenForOrg(org)

Create a registration token for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate using an access token with the `admin:org` scope to use this endpoint.  #### Example using registration token  Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.  ``` ./config.sh --url https://github.com/octo-org --token TOKEN ```

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 

try { 
    var result = api_instance.actionsCreateRegistrationTokenForOrg(org);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCreateRegistrationTokenForOrg: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]

### Return type

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCreateRegistrationTokenForRepo**
> AuthenticationToken actionsCreateRegistrationTokenForRepo(owner, repo)

Create a registration token for a repository

Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.  #### Example using registration token   Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.  ``` ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN ```

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 

try { 
    var result = api_instance.actionsCreateRegistrationTokenForRepo(owner, repo);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCreateRegistrationTokenForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]

### Return type

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCreateRemoveTokenForOrg**
> AuthenticationToken actionsCreateRemoveTokenForOrg(org)

Create a remove token for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour. You must authenticate using an access token with the `admin:org` scope to use this endpoint.  #### Example using remove token  To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this endpoint.  ``` ./config.sh remove --token TOKEN ```

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 

try { 
    var result = api_instance.actionsCreateRemoveTokenForOrg(org);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCreateRemoveTokenForOrg: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]

### Return type

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCreateRemoveTokenForRepo**
> AuthenticationToken actionsCreateRemoveTokenForRepo(owner, repo)

Create a remove token for a repository

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.  #### Example using remove token   To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.  ``` ./config.sh remove --token TOKEN ```

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 

try { 
    var result = api_instance.actionsCreateRemoveTokenForRepo(owner, repo);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCreateRemoveTokenForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]

### Return type

[**AuthenticationToken**](AuthenticationToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsCreateWorkflowDispatch**
> actionsCreateWorkflowDispatch(owner, repo, workflowId, inlineObject48)

Create a workflow dispatch event

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can also replace `{workflow_id}` with the workflow file name. For example, you could use `main.yml`.  You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see \"[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch).\"  You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see \"[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line).\"

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var workflowId = 56; // int | 
var inlineObject48 = InlineObject48(); // InlineObject48 | 

try { 
    api_instance.actionsCreateWorkflowDispatch(owner, repo, workflowId, inlineObject48);
} catch (e) {
    print("Exception when calling ActionsApi->actionsCreateWorkflowDispatch: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **workflowId** | **int**|  | [default to null]
 **inlineObject48** | [**InlineObject48**](InlineObject48.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDeleteArtifact**
> actionsDeleteArtifact(owner, repo, artifactId)

Delete an artifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var artifactId = 56; // int | artifact_id parameter

try { 
    api_instance.actionsDeleteArtifact(owner, repo, artifactId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDeleteArtifact: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **artifactId** | **int**| artifact_id parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDeleteOrgSecret**
> actionsDeleteOrgSecret(org, secretName)

Delete an organization secret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var secretName = secretName_example; // String | secret_name parameter

try { 
    api_instance.actionsDeleteOrgSecret(org, secretName);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDeleteOrgSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDeleteRepoSecret**
> actionsDeleteRepoSecret(owner, repo, secretName)

Delete a repository secret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var secretName = secretName_example; // String | secret_name parameter

try { 
    api_instance.actionsDeleteRepoSecret(owner, repo, secretName);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDeleteRepoSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDeleteSelfHostedRunnerFromOrg**
> actionsDeleteSelfHostedRunnerFromOrg(org, runnerId)

Delete a self-hosted runner from an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var runnerId = 56; // int | runner_id parameter

try { 
    api_instance.actionsDeleteSelfHostedRunnerFromOrg(org, runnerId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDeleteSelfHostedRunnerFromOrg: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **runnerId** | **int**| runner_id parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDeleteSelfHostedRunnerFromRepo**
> actionsDeleteSelfHostedRunnerFromRepo(owner, repo, runnerId)

Delete a self-hosted runner from a repository

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `repo` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runnerId = 56; // int | runner_id parameter

try { 
    api_instance.actionsDeleteSelfHostedRunnerFromRepo(owner, repo, runnerId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDeleteSelfHostedRunnerFromRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runnerId** | **int**| runner_id parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDeleteWorkflowRun**
> actionsDeleteWorkflowRun(owner, repo, runId)

Delete a workflow run

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 

try { 
    api_instance.actionsDeleteWorkflowRun(owner, repo, runId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDeleteWorkflowRun: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDeleteWorkflowRunLogs**
> actionsDeleteWorkflowRunLogs(owner, repo, runId)

Delete workflow run logs

Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 

try { 
    api_instance.actionsDeleteWorkflowRunLogs(owner, repo, runId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDeleteWorkflowRunLogs: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDownloadArtifact**
> actionsDownloadArtifact(owner, repo, artifactId, archiveFormat)

Download an artifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var artifactId = 56; // int | artifact_id parameter
var archiveFormat = archiveFormat_example; // String | archive_format parameter

try { 
    api_instance.actionsDownloadArtifact(owner, repo, artifactId, archiveFormat);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDownloadArtifact: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **artifactId** | **int**| artifact_id parameter | [default to null]
 **archiveFormat** | **String**| archive_format parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDownloadJobLogsForWorkflowRun**
> actionsDownloadJobLogsForWorkflowRun(owner, repo, jobId)

Download job logs for a workflow run

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var jobId = 56; // int | job_id parameter

try { 
    api_instance.actionsDownloadJobLogsForWorkflowRun(owner, repo, jobId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDownloadJobLogsForWorkflowRun: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **jobId** | **int**| job_id parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsDownloadWorkflowRunLogs**
> actionsDownloadWorkflowRunLogs(owner, repo, runId)

Download workflow run logs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 

try { 
    api_instance.actionsDownloadWorkflowRunLogs(owner, repo, runId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsDownloadWorkflowRunLogs: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetArtifact**
> Artifact actionsGetArtifact(owner, repo, artifactId)

Get an artifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var artifactId = 56; // int | artifact_id parameter

try { 
    var result = api_instance.actionsGetArtifact(owner, repo, artifactId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetArtifact: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **artifactId** | **int**| artifact_id parameter | [default to null]

### Return type

[**Artifact**](Artifact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetJobForWorkflowRun**
> Job actionsGetJobForWorkflowRun(owner, repo, jobId)

Get a job for a workflow run

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var jobId = 56; // int | job_id parameter

try { 
    var result = api_instance.actionsGetJobForWorkflowRun(owner, repo, jobId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetJobForWorkflowRun: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **jobId** | **int**| job_id parameter | [default to null]

### Return type

[**Job**](Job.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetOrgPublicKey**
> ActionsPublicKey actionsGetOrgPublicKey(org)

Get an organization public key

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 

try { 
    var result = api_instance.actionsGetOrgPublicKey(org);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetOrgPublicKey: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]

### Return type

[**ActionsPublicKey**](ActionsPublicKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetOrgSecret**
> OrganizationActionsSecret actionsGetOrgSecret(org, secretName)

Get an organization secret

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var secretName = secretName_example; // String | secret_name parameter

try { 
    var result = api_instance.actionsGetOrgSecret(org, secretName);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetOrgSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]

### Return type

[**OrganizationActionsSecret**](OrganizationActionsSecret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetRepoPublicKey**
> ActionsPublicKey actionsGetRepoPublicKey(owner, repo)

Get a repository public key

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 

try { 
    var result = api_instance.actionsGetRepoPublicKey(owner, repo);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetRepoPublicKey: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]

### Return type

[**ActionsPublicKey**](ActionsPublicKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetRepoSecret**
> ActionsSecret actionsGetRepoSecret(owner, repo, secretName)

Get a repository secret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var secretName = secretName_example; // String | secret_name parameter

try { 
    var result = api_instance.actionsGetRepoSecret(owner, repo, secretName);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetRepoSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]

### Return type

[**ActionsSecret**](ActionsSecret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetSelfHostedRunnerForOrg**
> Runner actionsGetSelfHostedRunnerForOrg(org, runnerId)

Get a self-hosted runner for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Gets a specific self-hosted runner for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var runnerId = 56; // int | runner_id parameter

try { 
    var result = api_instance.actionsGetSelfHostedRunnerForOrg(org, runnerId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetSelfHostedRunnerForOrg: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **runnerId** | **int**| runner_id parameter | [default to null]

### Return type

[**Runner**](Runner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetSelfHostedRunnerForRepo**
> Runner actionsGetSelfHostedRunnerForRepo(owner, repo, runnerId)

Get a self-hosted runner for a repository

Gets a specific self-hosted runner. You must authenticate using an access token with the `repo` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runnerId = 56; // int | runner_id parameter

try { 
    var result = api_instance.actionsGetSelfHostedRunnerForRepo(owner, repo, runnerId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetSelfHostedRunnerForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runnerId** | **int**| runner_id parameter | [default to null]

### Return type

[**Runner**](Runner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetWorkflow**
> Workflow actionsGetWorkflow(owner, repo, workflowId)

Get a workflow

Gets a specific workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var workflowId = 56; // int | 

try { 
    var result = api_instance.actionsGetWorkflow(owner, repo, workflowId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetWorkflow: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **workflowId** | **int**|  | [default to null]

### Return type

[**Workflow**](Workflow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetWorkflowRun**
> WorkflowRun actionsGetWorkflowRun(owner, repo, runId)

Get a workflow run

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 

try { 
    var result = api_instance.actionsGetWorkflowRun(owner, repo, runId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetWorkflowRun: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]

### Return type

[**WorkflowRun**](WorkflowRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetWorkflowRunUsage**
> WorkflowRunUsage actionsGetWorkflowRunUsage(owner, repo, runId)

Get workflow run usage

**Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \"[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\"  Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 

try { 
    var result = api_instance.actionsGetWorkflowRunUsage(owner, repo, runId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetWorkflowRunUsage: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]

### Return type

[**WorkflowRunUsage**](WorkflowRunUsage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsGetWorkflowUsage**
> WorkflowUsage actionsGetWorkflowUsage(owner, repo, workflowId)

Get workflow usage

**Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \"[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\"  Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var workflowId = 56; // int | 

try { 
    var result = api_instance.actionsGetWorkflowUsage(owner, repo, workflowId);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsGetWorkflowUsage: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **workflowId** | **int**|  | [default to null]

### Return type

[**WorkflowUsage**](WorkflowUsage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListArtifactsForRepo**
> InlineResponse2006 actionsListArtifactsForRepo(owner, repo, perPage, page)

List artifacts for a repository

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListArtifactsForRepo(owner, repo, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListArtifactsForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListJobsForWorkflowRun**
> InlineResponse2008 actionsListJobsForWorkflowRun(owner, repo, runId, filter, perPage, page)

List jobs for a workflow run

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 
var filter = filter_example; // String | Filters jobs by their `completed_at` timestamp. Can be one of:   \\* `latest`: Returns jobs from the most recent execution of the workflow run.   \\* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run.
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListJobsForWorkflowRun(owner, repo, runId, filter, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListJobsForWorkflowRun: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]
 **filter** | **String**| Filters jobs by their &#x60;completed_at&#x60; timestamp. Can be one of:   \\* &#x60;latest&#x60;: Returns jobs from the most recent execution of the workflow run.   \\* &#x60;all&#x60;: Returns all jobs for a workflow run, including from old executions of the workflow run. | [optional] [default to &quot;latest&quot;]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListOrgSecrets**
> InlineResponse2003 actionsListOrgSecrets(org, perPage, page)

List organization secrets

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListOrgSecrets(org, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListOrgSecrets: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListRepoSecrets**
> InlineResponse2009 actionsListRepoSecrets(owner, repo, perPage, page)

List repository secrets

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListRepoSecrets(owner, repo, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListRepoSecrets: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListRepoWorkflows**
> InlineResponse20010 actionsListRepoWorkflows(owner, repo, perPage, page)

List repository workflows

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListRepoWorkflows(owner, repo, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListRepoWorkflows: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListRunnerApplicationsForOrg**
> List<RunnerApplication> actionsListRunnerApplicationsForOrg(org)

List runner applications for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 

try { 
    var result = api_instance.actionsListRunnerApplicationsForOrg(org);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListRunnerApplicationsForOrg: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]

### Return type

[**List<RunnerApplication>**](RunnerApplication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListRunnerApplicationsForRepo**
> List<RunnerApplication> actionsListRunnerApplicationsForRepo(owner, repo)

List runner applications for a repository

Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `repo` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 

try { 
    var result = api_instance.actionsListRunnerApplicationsForRepo(owner, repo);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListRunnerApplicationsForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]

### Return type

[**List<RunnerApplication>**](RunnerApplication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListSelectedReposForOrgSecret**
> InlineResponse2004 actionsListSelectedReposForOrgSecret(org, secretName)

List selected repositories for an organization secret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var secretName = secretName_example; // String | secret_name parameter

try { 
    var result = api_instance.actionsListSelectedReposForOrgSecret(org, secretName);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListSelectedReposForOrgSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListSelfHostedRunnersForOrg**
> InlineResponse2002 actionsListSelfHostedRunnersForOrg(org, perPage, page)

List self-hosted runners for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists all self-hosted runners for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListSelfHostedRunnersForOrg(org, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListSelfHostedRunnersForOrg: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListSelfHostedRunnersForRepo**
> InlineResponse2002 actionsListSelfHostedRunnersForRepo(owner, repo, perPage, page)

List self-hosted runners for a repository

Lists all self-hosted runners for a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListSelfHostedRunnersForRepo(owner, repo, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListSelfHostedRunnersForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListWorkflowRunArtifacts**
> InlineResponse2006 actionsListWorkflowRunArtifacts(owner, repo, runId, perPage, page)

List workflow run artifacts

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListWorkflowRunArtifacts(owner, repo, runId, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListWorkflowRunArtifacts: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListWorkflowRuns**
> InlineResponse2007 actionsListWorkflowRuns(owner, repo, workflowId, actor, branch, event, status, perPage, page)

List workflow runs

List all workflow runs for a workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var workflowId = 56; // int | 
var actor = actor_example; // String | Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
var branch = branch_example; // String | Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
var event = event_example; // String | Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see \"[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"
var status = status_example; // String | Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in \"[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\"
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListWorkflowRuns(owner, repo, workflowId, actor, branch, event, status, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListWorkflowRuns: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **workflowId** | **int**|  | [default to null]
 **actor** | **String**| Returns someone&#39;s workflow runs. Use the login for the user who created the &#x60;push&#x60; associated with the check suite or workflow run. | [optional] [default to null]
 **branch** | **String**| Returns workflow runs associated with a branch. Use the name of the branch of the &#x60;push&#x60;. | [optional] [default to null]
 **event** | **String**| Returns workflow run triggered by the event you specify. For example, &#x60;push&#x60;, &#x60;pull_request&#x60; or &#x60;issue&#x60;. For more information, see \&quot;[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\&quot; | [optional] [default to null]
 **status** | **String**| Returns workflow runs associated with the check run &#x60;status&#x60; or &#x60;conclusion&#x60; you specify. For example, a conclusion can be &#x60;success&#x60; or a status can be &#x60;completed&#x60;. For more information, see the &#x60;status&#x60; and &#x60;conclusion&#x60; options available in \&quot;[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\&quot; | [optional] [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsListWorkflowRunsForRepo**
> InlineResponse2007 actionsListWorkflowRunsForRepo(owner, repo, actor, branch, event, status, perPage, page)

List workflow runs for a repository

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var actor = actor_example; // String | Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
var branch = branch_example; // String | Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
var event = event_example; // String | Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see \"[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"
var status = status_example; // String | Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in \"[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\"
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.actionsListWorkflowRunsForRepo(owner, repo, actor, branch, event, status, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ActionsApi->actionsListWorkflowRunsForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **actor** | **String**| Returns someone&#39;s workflow runs. Use the login for the user who created the &#x60;push&#x60; associated with the check suite or workflow run. | [optional] [default to null]
 **branch** | **String**| Returns workflow runs associated with a branch. Use the name of the branch of the &#x60;push&#x60;. | [optional] [default to null]
 **event** | **String**| Returns workflow run triggered by the event you specify. For example, &#x60;push&#x60;, &#x60;pull_request&#x60; or &#x60;issue&#x60;. For more information, see \&quot;[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\&quot; | [optional] [default to null]
 **status** | **String**| Returns workflow runs associated with the check run &#x60;status&#x60; or &#x60;conclusion&#x60; you specify. For example, a conclusion can be &#x60;success&#x60; or a status can be &#x60;completed&#x60;. For more information, see the &#x60;status&#x60; and &#x60;conclusion&#x60; options available in \&quot;[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run).\&quot; | [optional] [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsReRunWorkflow**
> actionsReRunWorkflow(owner, repo, runId)

Re-run a workflow

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var runId = 56; // int | 

try { 
    api_instance.actionsReRunWorkflow(owner, repo, runId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsReRunWorkflow: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **runId** | **int**|  | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsRemoveSelectedRepoFromOrgSecret**
> actionsRemoveSelectedRepoFromOrgSecret(org, secretName, repositoryId)

Remove selected repository from an organization secret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var secretName = secretName_example; // String | secret_name parameter
var repositoryId = 56; // int | repository_id parameter

try { 
    api_instance.actionsRemoveSelectedRepoFromOrgSecret(org, secretName, repositoryId);
} catch (e) {
    print("Exception when calling ActionsApi->actionsRemoveSelectedRepoFromOrgSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]
 **repositoryId** | **int**| repository_id parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actionsSetSelectedReposForOrgSecret**
> actionsSetSelectedReposForOrgSecret(org, secretName, inlineObject18)

Set selected repositories for an organization secret

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ActionsApi();
var org = org_example; // String | 
var secretName = secretName_example; // String | secret_name parameter
var inlineObject18 = InlineObject18(); // InlineObject18 | 

try { 
    api_instance.actionsSetSelectedReposForOrgSecret(org, secretName, inlineObject18);
} catch (e) {
    print("Exception when calling ActionsApi->actionsSetSelectedReposForOrgSecret: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | [default to null]
 **secretName** | **String**| secret_name parameter | [default to null]
 **inlineObject18** | [**InlineObject18**](InlineObject18.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

