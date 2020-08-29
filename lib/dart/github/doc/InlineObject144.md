# openapi.model.InlineObject144

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowMergeCommit** | **bool** | Whether to allow merge commits for pull requests. | [optional] [default to true]
**allowRebaseMerge** | **bool** | Whether to allow rebase merges for pull requests. | [optional] [default to true]
**allowSquashMerge** | **bool** | Whether to allow squash merges for pull requests. | [optional] [default to true]
**autoInit** | **bool** | Whether the repository is initialized with a minimal README. | [optional] [default to false]
**deleteBranchOnMerge** | **bool** | Whether to delete head branches when pull requests are merged | [optional] [default to false]
**description** | **String** | A short description of the repository. | [optional] [default to null]
**gitignoreTemplate** | **String** | The desired language or platform to apply to the .gitignore. | [optional] [default to null]
**hasDownloads** | **bool** | Whether downloads are enabled. | [optional] [default to true]
**hasIssues** | **bool** | Whether issues are enabled. | [optional] [default to true]
**hasProjects** | **bool** | Whether projects are enabled. | [optional] [default to true]
**hasWiki** | **bool** | Whether the wiki is enabled. | [optional] [default to true]
**homepage** | **String** | A URL with more information about the repository. | [optional] [default to null]
**isTemplate** | **bool** | Whether this repository acts as a template that can be used to generate new repositories. | [optional] [default to false]
**licenseTemplate** | **String** | The license keyword of the open source license for this repository. | [optional] [default to null]
**name** | **String** | The name of the repository. | [default to null]
**private** | **bool** | Whether the repository is private or public. | [optional] [default to false]
**teamId** | **int** | The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


