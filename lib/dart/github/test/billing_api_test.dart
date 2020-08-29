import 'package:openapi/api.dart';
import 'package:test/test.dart';


/// tests for BillingApi
void main() {
  var instance = BillingApi();

  group('tests for BillingApi', () {
    // Get GitHub Actions billing for an enterprise
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  The authenticated user must be an enterprise admin.
    //
    //Future<ActionsBillingUsage> billingGetGithubActionsBillingGhe(String enterpriseId) async 
    test('test billingGetGithubActionsBillingGhe', () async {
      // TODO
    });

    // Get GitHub Actions billing for an organization
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  Access tokens must have the `read:org` scope.
    //
    //Future<ActionsBillingUsage> billingGetGithubActionsBillingOrg(String org) async 
    test('test billingGetGithubActionsBillingOrg', () async {
      // TODO
    });

    // Get GitHub Actions billing for a user
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".  Access tokens must have the `user` scope.
    //
    //Future<ActionsBillingUsage> billingGetGithubActionsBillingUser(String username) async 
    test('test billingGetGithubActionsBillingUser', () async {
      // TODO
    });

    // Get GitHub Packages billing for an enterprise
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  The authenticated user must be an enterprise admin.
    //
    //Future<PackagesBillingUsage> billingGetGithubPackagesBillingGhe(String enterpriseId) async 
    test('test billingGetGithubPackagesBillingGhe', () async {
      // TODO
    });

    // Get GitHub Packages billing for an organization
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage usued for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `read:org` scope.
    //
    //Future<PackagesBillingUsage> billingGetGithubPackagesBillingOrg(String org) async 
    test('test billingGetGithubPackagesBillingOrg', () async {
      // TODO
    });

    // Get GitHub Packages billing for a user
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `user` scope.
    //
    //Future<PackagesBillingUsage> billingGetGithubPackagesBillingUser(String username) async 
    test('test billingGetGithubPackagesBillingUser', () async {
      // TODO
    });

    // Get shared storage billing for an enterprise
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  The authenticated user must be an enterprise admin.
    //
    //Future<CombinedBillingUsage> billingGetSharedStorageBillingGhe(String enterpriseId) async 
    test('test billingGetSharedStorageBillingGhe', () async {
      // TODO
    });

    // Get shared storage billing for an organization
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `read:org` scope.
    //
    //Future<CombinedBillingUsage> billingGetSharedStorageBillingOrg(String org) async 
    test('test billingGetSharedStorageBillingOrg', () async {
      // TODO
    });

    // Get shared storage billing for a user
    //
    // **Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"  Access tokens must have the `user` scope.
    //
    //Future<CombinedBillingUsage> billingGetSharedStorageBillingUser(String username) async 
    test('test billingGetSharedStorageBillingUser', () async {
      // TODO
    });

  });
}
