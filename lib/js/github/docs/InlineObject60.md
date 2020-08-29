# GitHubV3RestApi.InlineObject60

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**ReposOwnerRepoContentsPathAuthor**](ReposOwnerRepoContentsPathAuthor.md) |  | [optional] 
**branch** | **String** | The branch name. Default: the repository’s default branch (usually &#x60;master&#x60;) | [optional] 
**committer** | [**ReposOwnerRepoContentsPathCommitter**](ReposOwnerRepoContentsPathCommitter.md) |  | [optional] 
**content** | **String** | The new file content, using Base64 encoding. | 
**message** | **String** | The commit message. | 
**sha** | **String** | **Required if you are updating a file**. The blob SHA of the file being replaced. | [optional] 


