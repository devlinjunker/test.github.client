# GitHubV3RestApi.GitApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gitCreateBlob**](GitApi.md#gitCreateBlob) | **POST** /repos/{owner}/{repo}/git/blobs | Create a blob
[**gitCreateCommit**](GitApi.md#gitCreateCommit) | **POST** /repos/{owner}/{repo}/git/commits | Create a commit
[**gitCreateRef**](GitApi.md#gitCreateRef) | **POST** /repos/{owner}/{repo}/git/refs | Create a reference
[**gitCreateTag**](GitApi.md#gitCreateTag) | **POST** /repos/{owner}/{repo}/git/tags | Create a tag object
[**gitCreateTree**](GitApi.md#gitCreateTree) | **POST** /repos/{owner}/{repo}/git/trees | Create a tree
[**gitDeleteRef**](GitApi.md#gitDeleteRef) | **DELETE** /repos/{owner}/{repo}/git/refs/{ref} | Delete a reference
[**gitGetBlob**](GitApi.md#gitGetBlob) | **GET** /repos/{owner}/{repo}/git/blobs/{file_sha} | Get a blob
[**gitGetCommit**](GitApi.md#gitGetCommit) | **GET** /repos/{owner}/{repo}/git/commits/{commit_sha} | Get a commit
[**gitGetRef**](GitApi.md#gitGetRef) | **GET** /repos/{owner}/{repo}/git/ref/{ref} | Get a reference
[**gitGetTag**](GitApi.md#gitGetTag) | **GET** /repos/{owner}/{repo}/git/tags/{tag_sha} | Get a tag
[**gitGetTree**](GitApi.md#gitGetTree) | **GET** /repos/{owner}/{repo}/git/trees/{tree_sha} | Get a tree
[**gitListMatchingRefs**](GitApi.md#gitListMatchingRefs) | **GET** /repos/{owner}/{repo}/git/matching-refs/{ref} | List matching references
[**gitUpdateRef**](GitApi.md#gitUpdateRef) | **PATCH** /repos/{owner}/{repo}/git/refs/{ref} | Update a reference



## gitCreateBlob

> ShortBlob gitCreateBlob(owner, repo, opts)

Create a blob

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject66': new GitHubV3RestApi.InlineObject66() // InlineObject66 | 
};
apiInstance.gitCreateBlob(owner, repo, opts, (error, data, response) => {
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
 **inlineObject66** | [**InlineObject66**](InlineObject66.md)|  | [optional] 

### Return type

[**ShortBlob**](ShortBlob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gitCreateCommit

> GitCommit gitCreateCommit(owner, repo, opts)

Create a commit

Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  In this example, the payload of the signature would be:    **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject67': new GitHubV3RestApi.InlineObject67() // InlineObject67 | 
};
apiInstance.gitCreateCommit(owner, repo, opts, (error, data, response) => {
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
 **inlineObject67** | [**InlineObject67**](InlineObject67.md)|  | [optional] 

### Return type

[**GitCommit**](GitCommit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gitCreateRef

> GitRef gitCreateRef(owner, repo, opts)

Create a reference

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject68': new GitHubV3RestApi.InlineObject68() // InlineObject68 | 
};
apiInstance.gitCreateRef(owner, repo, opts, (error, data, response) => {
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
 **inlineObject68** | [**InlineObject68**](InlineObject68.md)|  | [optional] 

### Return type

[**GitRef**](GitRef.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gitCreateTag

> GitTag gitCreateTag(owner, repo, opts)

Create a tag object

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://developer.github.com/v3/git/refs/#create-a-reference) the &#x60;refs/tags/[tag]&#x60; reference. If you want to create a lightweight tag, you only have to [create](https://developer.github.com/v3/git/refs/#create-a-reference) the tag reference - this call would be unnecessary.  **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject70': new GitHubV3RestApi.InlineObject70() // InlineObject70 | 
};
apiInstance.gitCreateTag(owner, repo, opts, (error, data, response) => {
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
 **inlineObject70** | [**InlineObject70**](InlineObject70.md)|  | [optional] 

### Return type

[**GitTag**](GitTag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gitCreateTree

> GitTree gitCreateTree(owner, repo, opts)

Create a tree

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.  If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see \&quot;[Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)\&quot; and \&quot;[Update a reference](https://developer.github.com/v3/git/refs/#update-a-reference).\&quot;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject71': new GitHubV3RestApi.InlineObject71() // InlineObject71 | 
};
apiInstance.gitCreateTree(owner, repo, opts, (error, data, response) => {
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
 **inlineObject71** | [**InlineObject71**](InlineObject71.md)|  | [optional] 

### Return type

[**GitTree**](GitTree.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gitDeleteRef

> gitDeleteRef(owner, repo, ref)

Delete a reference

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let ref = "ref_example"; // String | ref+ parameter
apiInstance.gitDeleteRef(owner, repo, ref, (error, data, response) => {
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
 **ref** | **String**| ref+ parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gitGetBlob

> Blob gitGetBlob(owner, repo, fileSha)

Get a blob

The &#x60;content&#x60; in the response will always be Base64 encoded.  _Note_: This API supports blobs up to 100 megabytes in size.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let fileSha = "fileSha_example"; // String | file_sha parameter
apiInstance.gitGetBlob(owner, repo, fileSha, (error, data, response) => {
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
 **fileSha** | **String**| file_sha parameter | 

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gitGetCommit

> GitCommit gitGetCommit(owner, repo, commitSha)

Get a commit

Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).  **Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let commitSha = "commitSha_example"; // String | commit_sha+ parameter
apiInstance.gitGetCommit(owner, repo, commitSha, (error, data, response) => {
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
 **commitSha** | **String**| commit_sha+ parameter | 

### Return type

[**GitCommit**](GitCommit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gitGetRef

> GitRef gitGetRef(owner, repo, ref)

Get a reference

Returns a single reference from your Git database. The &#x60;:ref&#x60; in the URL must be formatted as &#x60;heads/&lt;branch name&gt;&#x60; for branches and &#x60;tags/&lt;tag name&gt;&#x60; for tags. If the &#x60;:ref&#x60; doesn&#39;t match an existing ref, a &#x60;404&#x60; is returned.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let ref = "ref_example"; // String | ref+ parameter
apiInstance.gitGetRef(owner, repo, ref, (error, data, response) => {
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
 **ref** | **String**| ref+ parameter | 

### Return type

[**GitRef**](GitRef.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gitGetTag

> GitTag gitGetTag(owner, repo, tagSha)

Get a tag

**Signature verification object**  The response will include a &#x60;verification&#x60; object that describes the result of verifying the commit&#39;s signature. The following fields are included in the &#x60;verification&#x60; object:  These are the possible values for &#x60;reason&#x60; in the &#x60;verification&#x60; object:  | Value                    | Description                                                                                                                       | | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | | &#x60;expired_key&#x60;            | The key that made the signature is expired.                                                                                       | | &#x60;not_signing_key&#x60;        | The \&quot;signing\&quot; flag is not among the usage flags in the GPG key that made the signature.                                           | | &#x60;gpgverify_error&#x60;        | There was an error communicating with the signature verification service.                                                         | | &#x60;gpgverify_unavailable&#x60;  | The signature verification service is currently unavailable.                                                                      | | &#x60;unsigned&#x60;               | The object does not include a signature.                                                                                          | | &#x60;unknown_signature_type&#x60; | A non-PGP signature was found in the commit.                                                                                      | | &#x60;no_user&#x60;                | No user was associated with the &#x60;committer&#x60; email address in the commit.                                                          | | &#x60;unverified_email&#x60;       | The &#x60;committer&#x60; email address in the commit was associated with a user, but the email address is not verified on her/his account. | | &#x60;bad_email&#x60;              | The &#x60;committer&#x60; email address in the commit is not included in the identities of the PGP key that made the signature.             | | &#x60;unknown_key&#x60;            | The key that made the signature has not been registered with any user&#39;s account.                                                  | | &#x60;malformed_signature&#x60;    | There was an error parsing the signature.                                                                                         | | &#x60;invalid&#x60;                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      | | &#x60;valid&#x60;                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let tagSha = "tagSha_example"; // String | tag_sha parameter
apiInstance.gitGetTag(owner, repo, tagSha, (error, data, response) => {
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
 **tagSha** | **String**| tag_sha parameter | 

### Return type

[**GitTag**](GitTag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gitGetTree

> GitTree gitGetTree(owner, repo, treeSha, opts)

Get a tree

Returns a single tree using the SHA1 value for that tree.  If &#x60;truncated&#x60; is &#x60;true&#x60; in the response then the number of items in the &#x60;tree&#x60; array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let treeSha = "treeSha_example"; // String | tree_sha parameter
let opts = {
  'recursive': "recursive_example" // String | Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `\"true\"`, and `\"false\"`. Omit this parameter to prevent recursively returning objects or subtrees.
};
apiInstance.gitGetTree(owner, repo, treeSha, opts, (error, data, response) => {
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
 **treeSha** | **String**| tree_sha parameter | 
 **recursive** | **String**| Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in &#x60;:tree_sha&#x60;. For example, setting &#x60;recursive&#x60; to any of the following will enable returning objects or subtrees: &#x60;0&#x60;, &#x60;1&#x60;, &#x60;\&quot;true\&quot;&#x60;, and &#x60;\&quot;false\&quot;&#x60;. Omit this parameter to prevent recursively returning objects or subtrees. | [optional] 

### Return type

[**GitTree**](GitTree.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gitListMatchingRefs

> [GitRef] gitListMatchingRefs(owner, repo, ref, opts)

List matching references

Returns an array of references from your Git database that match the supplied name. The &#x60;:ref&#x60; in the URL must be formatted as &#x60;heads/&lt;branch name&gt;&#x60; for branches and &#x60;tags/&lt;tag name&gt;&#x60; for tags. If the &#x60;:ref&#x60; doesn&#39;t exist in the repository, but existing refs start with &#x60;:ref&#x60;, they will be returned as an array.  When you use this endpoint without providing a &#x60;:ref&#x60;, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just &#x60;heads&#x60; and &#x60;tags&#x60;.  **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see \&quot;[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)\&quot;.  If you request matching references for a branch named &#x60;feature&#x60; but the branch &#x60;feature&#x60; doesn&#39;t exist, the response can still include other matching head refs that start with the word &#x60;feature&#x60;, such as &#x60;featureA&#x60; and &#x60;featureB&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let ref = "ref_example"; // String | ref+ parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gitListMatchingRefs(owner, repo, ref, opts, (error, data, response) => {
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
 **ref** | **String**| ref+ parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[GitRef]**](GitRef.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gitUpdateRef

> GitRef gitUpdateRef(owner, repo, ref, opts)

Update a reference

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GitApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let ref = "ref_example"; // String | ref+ parameter
let opts = {
  'inlineObject69': new GitHubV3RestApi.InlineObject69() // InlineObject69 | 
};
apiInstance.gitUpdateRef(owner, repo, ref, opts, (error, data, response) => {
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
 **ref** | **String**| ref+ parameter | 
 **inlineObject69** | [**InlineObject69**](InlineObject69.md)|  | [optional] 

### Return type

[**GitRef**](GitRef.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

