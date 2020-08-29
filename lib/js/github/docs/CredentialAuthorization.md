# GitHubV3RestApi.CredentialAuthorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentialAccessedAt** | **Date** | Date when the credential was last accessed. May be null if it was never accessed | [optional] 
**credentialAuthorizedAt** | **Date** | Date when the credential was authorized for use. | 
**credentialId** | **Number** | Unique identifier for the credential. | 
**credentialType** | **String** | Human-readable description of the credential type. | 
**fingerprint** | **String** | Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key. | [optional] 
**login** | **String** | User login that owns the underlying credential. | 
**scopes** | **[String]** | List of oauth scopes the token has been granted. | [optional] 
**tokenLastEight** | **String** | Last eight characters of the credential. Only included in responses with credential_type of personal access token. | [optional] 


