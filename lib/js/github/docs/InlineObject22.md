# GitHubV3RestApi.InlineObject22

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | **Required unless you provide &#x60;invitee_id&#x60;**. Email address of the person you are inviting, which can be an existing GitHub user. | [optional] 
**inviteeId** | **Number** | **Required unless you provide &#x60;email&#x60;**. GitHub user ID for the person you are inviting. | [optional] 
**role** | **String** | Specify role for new member. Can be one of:   \\* &#x60;admin&#x60; - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.   \\* &#x60;direct_member&#x60; - Non-owner organization members with ability to see other members and join teams by invitation.   \\* &#x60;billing_manager&#x60; - Non-owner organization members with ability to manage the billing settings of your organization. | [optional] [default to &#39;direct_member&#39;]
**teamIds** | **[Number]** | Specify IDs for the teams you want to invite new members to. | [optional] 



## Enum: RoleEnum


* `admin` (value: `"admin"`)

* `direct_member` (value: `"direct_member"`)

* `billing_manager` (value: `"billing_manager"`)




