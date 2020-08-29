# GitHubV3RestApi.InlineObject74

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tfvcProject** | **String** | For a tfvc import, the name of the project that is being imported. | [optional] 
**vcs** | **String** | The originating VCS type. Can be one of &#x60;subversion&#x60;, &#x60;git&#x60;, &#x60;mercurial&#x60;, or &#x60;tfvc&#x60;. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response. | [optional] 
**vcsPassword** | **String** | If authentication is required, the password to provide to &#x60;vcs_url&#x60;. | [optional] 
**vcsUrl** | **String** | The URL of the originating repository. | 
**vcsUsername** | **String** | If authentication is required, the username to provide to &#x60;vcs_url&#x60;. | [optional] 



## Enum: VcsEnum


* `subversion` (value: `"subversion"`)

* `git` (value: `"git"`)

* `mercurial` (value: `"mercurial"`)

* `tfvc` (value: `"tfvc"`)




