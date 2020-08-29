import 'package:openapi/api.dart';
import 'package:test/test.dart';


/// tests for ActionsApi
void main() {
  var instance = ActionsApi();

  group('tests for ActionsApi', () {
    // Add selected repository to an organization secret
    //
    // Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future actionsAddSelectedRepoToOrgSecret(String org, String secretName, int repositoryId) async 
    test('test actionsAddSelectedRepoToOrgSecret', () async {
      // TODO
    });

    // Cancel a workflow run
    //
    // Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
    //
    //Future actionsCancelWorkflowRun(String owner, String repo, int runId) async 
    test('test actionsCancelWorkflowRun', () async {
      // TODO
    });

    // Create or update an organization secret
    //
    // Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  ``` const sodium = require('tweetsodium');  const key = \"base64-encoded-public-key\"; const value = \"plain-text-secret\";  // Convert the message and key to Uint8Array's (Buffer implements that interface) const messageBytes = Buffer.from(value); const keyBytes = Buffer.from(key, 'base64');  // Encrypt using LibSodium. const encryptedBytes = sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted = Buffer.from(encryptedBytes).toString('base64');  console.log(encrypted); ```   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  ``` from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -> str:   \"\"\"Encrypt a Unicode string using the public key.\"\"\"   public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())   sealed_box = public.SealedBox(public_key)   encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))   return b64encode(encrypted).decode(\"utf-8\") ```  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  ``` var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\"); var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");  var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); ```  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  ```ruby require \"rbnacl\" require \"base64\"  key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\") public_key = RbNaCl::PublicKey.new(key)  box = RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret = box.encrypt(\"my_secret\")  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) ```
    //
    //Future actionsCreateOrUpdateOrgSecret(String org, String secretName, { InlineObject17 inlineObject17 }) async 
    test('test actionsCreateOrUpdateOrgSecret', () async {
      // TODO
    });

    // Create or update a repository secret
    //
    // Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.  #### Example encrypting a secret using Node.js  Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.  ``` const sodium = require('tweetsodium');  const key = \"base64-encoded-public-key\"; const value = \"plain-text-secret\";  // Convert the message and key to Uint8Array's (Buffer implements that interface) const messageBytes = Buffer.from(value); const keyBytes = Buffer.from(key, 'base64');  // Encrypt using LibSodium. const encryptedBytes = sodium.seal(messageBytes, keyBytes);  // Base64 the encrypted secret const encrypted = Buffer.from(encryptedBytes).toString('base64');  console.log(encrypted); ```   #### Example encrypting a secret using Python  Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.  ``` from base64 import b64encode from nacl import encoding, public  def encrypt(public_key: str, secret_value: str) -> str:   \"\"\"Encrypt a Unicode string using the public key.\"\"\"   public_key = public.PublicKey(public_key.encode(\"utf-8\"), encoding.Base64Encoder())   sealed_box = public.SealedBox(public_key)   encrypted = sealed_box.encrypt(secret_value.encode(\"utf-8\"))   return b64encode(encrypted).decode(\"utf-8\") ```  #### Example encrypting a secret using C#  Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.  ``` var secretValue = System.Text.Encoding.UTF8.GetBytes(\"mySecret\"); var publicKey = Convert.FromBase64String(\"2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=\");  var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);  Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox)); ```  #### Example encrypting a secret using Ruby  Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.  ```ruby require \"rbnacl\" require \"base64\"  key = Base64.decode64(\"+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=\") public_key = RbNaCl::PublicKey.new(key)  box = RbNaCl::Boxes::Sealed.from_public_key(public_key) encrypted_secret = box.encrypt(\"my_secret\")  # Print the base64 encoded secret puts Base64.strict_encode64(encrypted_secret) ```
    //
    //Future actionsCreateOrUpdateRepoSecret(String owner, String repo, String secretName, { InlineObject47 inlineObject47 }) async 
    test('test actionsCreateOrUpdateRepoSecret', () async {
      // TODO
    });

    // Create a registration token for an organization
    //
    // **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate using an access token with the `admin:org` scope to use this endpoint.  #### Example using registration token  Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.  ``` ./config.sh --url https://github.com/octo-org --token TOKEN ```
    //
    //Future<AuthenticationToken> actionsCreateRegistrationTokenForOrg(String org) async 
    test('test actionsCreateRegistrationTokenForOrg', () async {
      // TODO
    });

    // Create a registration token for a repository
    //
    // Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.  #### Example using registration token   Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.  ``` ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN ```
    //
    //Future<AuthenticationToken> actionsCreateRegistrationTokenForRepo(String owner, String repo) async 
    test('test actionsCreateRegistrationTokenForRepo', () async {
      // TODO
    });

    // Create a remove token for an organization
    //
    // **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.   Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour. You must authenticate using an access token with the `admin:org` scope to use this endpoint.  #### Example using remove token  To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this endpoint.  ``` ./config.sh remove --token TOKEN ```
    //
    //Future<AuthenticationToken> actionsCreateRemoveTokenForOrg(String org) async 
    test('test actionsCreateRemoveTokenForOrg', () async {
      // TODO
    });

    // Create a remove token for a repository
    //
    // Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.  #### Example using remove token   To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.  ``` ./config.sh remove --token TOKEN ```
    //
    //Future<AuthenticationToken> actionsCreateRemoveTokenForRepo(String owner, String repo) async 
    test('test actionsCreateRemoveTokenForRepo', () async {
      // TODO
    });

    // Create a workflow dispatch event
    //
    // You can use this endpoint to manually trigger a GitHub Actions workflow run. You can also replace `{workflow_id}` with the workflow file name. For example, you could use `main.yml`.  You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see \"[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch).\"  You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see \"[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line).\"
    //
    //Future actionsCreateWorkflowDispatch(String owner, String repo, int workflowId, { InlineObject48 inlineObject48 }) async 
    test('test actionsCreateWorkflowDispatch', () async {
      // TODO
    });

    // Delete an artifact
    //
    // Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
    //
    //Future actionsDeleteArtifact(String owner, String repo, int artifactId) async 
    test('test actionsDeleteArtifact', () async {
      // TODO
    });

    // Delete an organization secret
    //
    // Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future actionsDeleteOrgSecret(String org, String secretName) async 
    test('test actionsDeleteOrgSecret', () async {
      // TODO
    });

    // Delete a repository secret
    //
    // Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
    //
    //Future actionsDeleteRepoSecret(String owner, String repo, String secretName) async 
    test('test actionsDeleteRepoSecret', () async {
      // TODO
    });

    // Delete a self-hosted runner from an organization
    //
    // **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
    //
    //Future actionsDeleteSelfHostedRunnerFromOrg(String org, int runnerId) async 
    test('test actionsDeleteSelfHostedRunnerFromOrg', () async {
      // TODO
    });

    // Delete a self-hosted runner from a repository
    //
    // Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `repo` scope to use this endpoint.
    //
    //Future actionsDeleteSelfHostedRunnerFromRepo(String owner, String repo, int runnerId) async 
    test('test actionsDeleteSelfHostedRunnerFromRepo', () async {
      // TODO
    });

    // Delete a workflow run
    //
    // Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use this endpoint.
    //
    //Future actionsDeleteWorkflowRun(String owner, String repo, int runId) async 
    test('test actionsDeleteWorkflowRun', () async {
      // TODO
    });

    // Delete workflow run logs
    //
    // Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
    //
    //Future actionsDeleteWorkflowRunLogs(String owner, String repo, int runId) async 
    test('test actionsDeleteWorkflowRunLogs', () async {
      // TODO
    });

    // Download an artifact
    //
    // Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future actionsDownloadArtifact(String owner, String repo, int artifactId, String archiveFormat) async 
    test('test actionsDownloadArtifact', () async {
      // TODO
    });

    // Download job logs for a workflow run
    //
    // Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future actionsDownloadJobLogsForWorkflowRun(String owner, String repo, int jobId) async 
    test('test actionsDownloadJobLogsForWorkflowRun', () async {
      // TODO
    });

    // Download workflow run logs
    //
    // Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future actionsDownloadWorkflowRunLogs(String owner, String repo, int runId) async 
    test('test actionsDownloadWorkflowRunLogs', () async {
      // TODO
    });

    // Get an artifact
    //
    // Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<Artifact> actionsGetArtifact(String owner, String repo, int artifactId) async 
    test('test actionsGetArtifact', () async {
      // TODO
    });

    // Get a job for a workflow run
    //
    // Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<Job> actionsGetJobForWorkflowRun(String owner, String repo, int jobId) async 
    test('test actionsGetJobForWorkflowRun', () async {
      // TODO
    });

    // Get an organization public key
    //
    // Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future<ActionsPublicKey> actionsGetOrgPublicKey(String org) async 
    test('test actionsGetOrgPublicKey', () async {
      // TODO
    });

    // Get an organization secret
    //
    // Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future<OrganizationActionsSecret> actionsGetOrgSecret(String org, String secretName) async 
    test('test actionsGetOrgSecret', () async {
      // TODO
    });

    // Get a repository public key
    //
    // Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
    //
    //Future<ActionsPublicKey> actionsGetRepoPublicKey(String owner, String repo) async 
    test('test actionsGetRepoPublicKey', () async {
      // TODO
    });

    // Get a repository secret
    //
    // Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
    //
    //Future<ActionsSecret> actionsGetRepoSecret(String owner, String repo, String secretName) async 
    test('test actionsGetRepoSecret', () async {
      // TODO
    });

    // Get a self-hosted runner for an organization
    //
    // **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Gets a specific self-hosted runner for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
    //
    //Future<Runner> actionsGetSelfHostedRunnerForOrg(String org, int runnerId) async 
    test('test actionsGetSelfHostedRunnerForOrg', () async {
      // TODO
    });

    // Get a self-hosted runner for a repository
    //
    // Gets a specific self-hosted runner. You must authenticate using an access token with the `repo` scope to use this endpoint.
    //
    //Future<Runner> actionsGetSelfHostedRunnerForRepo(String owner, String repo, int runnerId) async 
    test('test actionsGetSelfHostedRunnerForRepo', () async {
      // TODO
    });

    // Get a workflow
    //
    // Gets a specific workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<Workflow> actionsGetWorkflow(String owner, String repo, int workflowId) async 
    test('test actionsGetWorkflow', () async {
      // TODO
    });

    // Get a workflow run
    //
    // Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<WorkflowRun> actionsGetWorkflowRun(String owner, String repo, int runId) async 
    test('test actionsGetWorkflowRun', () async {
      // TODO
    });

    // Get workflow run usage
    //
    // **Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \"[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\"  Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<WorkflowRunUsage> actionsGetWorkflowRunUsage(String owner, String repo, int runId) async 
    test('test actionsGetWorkflowRunUsage', () async {
      // TODO
    });

    // Get workflow usage
    //
    // **Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see \"[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage).\"  Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<WorkflowUsage> actionsGetWorkflowUsage(String owner, String repo, int workflowId) async 
    test('test actionsGetWorkflowUsage', () async {
      // TODO
    });

    // List artifacts for a repository
    //
    // Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<InlineResponse2006> actionsListArtifactsForRepo(String owner, String repo, { int perPage, int page }) async 
    test('test actionsListArtifactsForRepo', () async {
      // TODO
    });

    // List jobs for a workflow run
    //
    // Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).
    //
    //Future<InlineResponse2008> actionsListJobsForWorkflowRun(String owner, String repo, int runId, { String filter, int perPage, int page }) async 
    test('test actionsListJobsForWorkflowRun', () async {
      // TODO
    });

    // List organization secrets
    //
    // Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future<InlineResponse2003> actionsListOrgSecrets(String org, { int perPage, int page }) async 
    test('test actionsListOrgSecrets', () async {
      // TODO
    });

    // List repository secrets
    //
    // Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
    //
    //Future<InlineResponse2009> actionsListRepoSecrets(String owner, String repo, { int perPage, int page }) async 
    test('test actionsListRepoSecrets', () async {
      // TODO
    });

    // List repository workflows
    //
    // Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<InlineResponse20010> actionsListRepoWorkflows(String owner, String repo, { int perPage, int page }) async 
    test('test actionsListRepoWorkflows', () async {
      // TODO
    });

    // List runner applications for an organization
    //
    // **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
    //
    //Future<List<RunnerApplication>> actionsListRunnerApplicationsForOrg(String org) async 
    test('test actionsListRunnerApplicationsForOrg', () async {
      // TODO
    });

    // List runner applications for a repository
    //
    // Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `repo` scope to use this endpoint.
    //
    //Future<List<RunnerApplication>> actionsListRunnerApplicationsForRepo(String owner, String repo) async 
    test('test actionsListRunnerApplicationsForRepo', () async {
      // TODO
    });

    // List selected repositories for an organization secret
    //
    // Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future<InlineResponse2004> actionsListSelectedReposForOrgSecret(String org, String secretName) async 
    test('test actionsListSelectedReposForOrgSecret', () async {
      // TODO
    });

    // List self-hosted runners for an organization
    //
    // **Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.  Lists all self-hosted runners for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
    //
    //Future<InlineResponse2002> actionsListSelfHostedRunnersForOrg(String org, { int perPage, int page }) async 
    test('test actionsListSelfHostedRunnersForOrg', () async {
      // TODO
    });

    // List self-hosted runners for a repository
    //
    // Lists all self-hosted runners for a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
    //
    //Future<InlineResponse2002> actionsListSelfHostedRunnersForRepo(String owner, String repo, { int perPage, int page }) async 
    test('test actionsListSelfHostedRunnersForRepo', () async {
      // TODO
    });

    // List workflow run artifacts
    //
    // Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<InlineResponse2006> actionsListWorkflowRunArtifacts(String owner, String repo, int runId, { int perPage, int page }) async 
    test('test actionsListWorkflowRunArtifacts', () async {
      // TODO
    });

    // List workflow runs
    //
    // List all workflow runs for a workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
    //
    //Future<InlineResponse2007> actionsListWorkflowRuns(String owner, String repo, int workflowId, { String actor, String branch, String event, String status, int perPage, int page }) async 
    test('test actionsListWorkflowRuns', () async {
      // TODO
    });

    // List workflow runs for a repository
    //
    // Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).  Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
    //
    //Future<InlineResponse2007> actionsListWorkflowRunsForRepo(String owner, String repo, { String actor, String branch, String event, String status, int perPage, int page }) async 
    test('test actionsListWorkflowRunsForRepo', () async {
      // TODO
    });

    // Re-run a workflow
    //
    // Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
    //
    //Future actionsReRunWorkflow(String owner, String repo, int runId) async 
    test('test actionsReRunWorkflow', () async {
      // TODO
    });

    // Remove selected repository from an organization secret
    //
    // Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future actionsRemoveSelectedRepoFromOrgSecret(String org, String secretName, int repositoryId) async 
    test('test actionsRemoveSelectedRepoFromOrgSecret', () async {
      // TODO
    });

    // Set selected repositories for an organization secret
    //
    // Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
    //
    //Future actionsSetSelectedReposForOrgSecret(String org, String secretName, { InlineObject18 inlineObject18 }) async 
    test('test actionsSetSelectedReposForOrgSecret', () async {
      // TODO
    });

  });
}
