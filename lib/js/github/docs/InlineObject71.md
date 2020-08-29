# GitHubV3RestApi.InlineObject71

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseTree** | **String** | The SHA1 of the tree you want to update with new data. If you don&#39;t set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted. | [optional] 
**tree** | [**[ReposOwnerRepoGitTreesTree]**](ReposOwnerRepoGitTreesTree.md) | Objects (of &#x60;path&#x60;, &#x60;mode&#x60;, &#x60;type&#x60;, and &#x60;sha&#x60;) specifying a tree structure. | 


