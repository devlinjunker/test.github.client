part of openapi.api;

class InlineObject16 {
  /* Billing email address. This address is not publicized. */
  String billingEmail = null;
  
  String blog = null;
  /* The company name. */
  String company = null;
  /* Default permission level members have for organization repositories:   \\* `read` - can pull, but not push to or administer this repository.   \\* `write` - can pull and push, but not administer this repository.   \\* `admin` - can pull, push, and administer this repository.   \\* `none` - no permissions granted by default. */
  String defaultRepositoryPermission = "read";
  //enum defaultRepositoryPermissionEnum {  read,  write,  admin,  none,  };{
  /* The description of the company. */
  String description = null;
  /* The publicly visible email address. */
  String email = null;
  /* Toggles whether an organization can use organization projects. */
  bool hasOrganizationProjects = null;
  /* Toggles whether repositories that belong to the organization can use repository projects. */
  bool hasRepositoryProjects = null;
  /* The location. */
  String location = null;
  /* Specifies which types of repositories non-admin organization members can create. Can be one of:   \\* `all` - all organization members can create public and private repositories.   \\* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.   \\* `none` - only admin members can create repositories.   **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See [this note](https://developer.github.com/v3/orgs/#members_can_create_repositories) for details. */
  String membersAllowedRepositoryCreationType = null;
  //enum membersAllowedRepositoryCreationTypeEnum {  all,  private,  none,  };{
  /* Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. Can be one of:   \\* `true` - all organization members can create internal repositories.   \\* `false` - only organization owners can create internal repositories.   Default: `true`. For more information, see \"[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation. */
  bool membersCanCreateInternalRepositories = null;
  /* Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:   \\* `true` - all organization members can create private repositories.   \\* `false` - only organization owners can create private repositories.   Default: `true`. For more information, see \"[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation. */
  bool membersCanCreatePrivateRepositories = null;
  /* Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:   \\* `true` - all organization members can create public repositories.   \\* `false` - only organization owners can create public repositories.   Default: `true`. For more information, see \"[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation. */
  bool membersCanCreatePublicRepositories = null;
  /* Toggles the ability of non-admin organization members to create repositories. Can be one of:   \\* `true` - all organization members can create repositories.   \\* `false` - only organization owners can create repositories.   Default: `true`   **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. */
  bool membersCanCreateRepositories = true;
  /* The shorthand name of the company. */
  String name = null;
  /* The Twitter username of the company. */
  String twitterUsername = null;

  InlineObject16({
    this.billingEmail,
    this.blog,
    this.company,
    this.defaultRepositoryPermission,
    this.description,
    this.email,
    this.hasOrganizationProjects,
    this.hasRepositoryProjects,
    this.location,
    this.membersAllowedRepositoryCreationType,
    this.membersCanCreateInternalRepositories,
    this.membersCanCreatePrivateRepositories,
    this.membersCanCreatePublicRepositories,
    this.membersCanCreateRepositories,
    this.name,
    this.twitterUsername,
  });

  @override
  String toString() {
    return 'InlineObject16[billingEmail=$billingEmail, blog=$blog, company=$company, defaultRepositoryPermission=$defaultRepositoryPermission, description=$description, email=$email, hasOrganizationProjects=$hasOrganizationProjects, hasRepositoryProjects=$hasRepositoryProjects, location=$location, membersAllowedRepositoryCreationType=$membersAllowedRepositoryCreationType, membersCanCreateInternalRepositories=$membersCanCreateInternalRepositories, membersCanCreatePrivateRepositories=$membersCanCreatePrivateRepositories, membersCanCreatePublicRepositories=$membersCanCreatePublicRepositories, membersCanCreateRepositories=$membersCanCreateRepositories, name=$name, twitterUsername=$twitterUsername, ]';
  }

  InlineObject16.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    billingEmail = json['billing_email'];
    blog = json['blog'];
    company = json['company'];
    defaultRepositoryPermission = json['default_repository_permission'];
    description = json['description'];
    email = json['email'];
    hasOrganizationProjects = json['has_organization_projects'];
    hasRepositoryProjects = json['has_repository_projects'];
    location = json['location'];
    membersAllowedRepositoryCreationType = json['members_allowed_repository_creation_type'];
    membersCanCreateInternalRepositories = json['members_can_create_internal_repositories'];
    membersCanCreatePrivateRepositories = json['members_can_create_private_repositories'];
    membersCanCreatePublicRepositories = json['members_can_create_public_repositories'];
    membersCanCreateRepositories = json['members_can_create_repositories'];
    name = json['name'];
    twitterUsername = json['twitter_username'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (billingEmail != null)
      json['billing_email'] = billingEmail;
    if (blog != null)
      json['blog'] = blog;
    if (company != null)
      json['company'] = company;
    if (defaultRepositoryPermission != null)
      json['default_repository_permission'] = defaultRepositoryPermission;
    if (description != null)
      json['description'] = description;
    if (email != null)
      json['email'] = email;
    if (hasOrganizationProjects != null)
      json['has_organization_projects'] = hasOrganizationProjects;
    if (hasRepositoryProjects != null)
      json['has_repository_projects'] = hasRepositoryProjects;
    if (location != null)
      json['location'] = location;
    if (membersAllowedRepositoryCreationType != null)
      json['members_allowed_repository_creation_type'] = membersAllowedRepositoryCreationType;
    if (membersCanCreateInternalRepositories != null)
      json['members_can_create_internal_repositories'] = membersCanCreateInternalRepositories;
    if (membersCanCreatePrivateRepositories != null)
      json['members_can_create_private_repositories'] = membersCanCreatePrivateRepositories;
    if (membersCanCreatePublicRepositories != null)
      json['members_can_create_public_repositories'] = membersCanCreatePublicRepositories;
    if (membersCanCreateRepositories != null)
      json['members_can_create_repositories'] = membersCanCreateRepositories;
    if (name != null)
      json['name'] = name;
    if (twitterUsername != null)
      json['twitter_username'] = twitterUsername;
    return json;
  }

  static List<InlineObject16> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject16>() : json.map((value) => InlineObject16.fromJson(value)).toList();
  }

  static Map<String, InlineObject16> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject16>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject16.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject16-objects as value to a dart map
  static Map<String, List<InlineObject16>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject16>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject16.listFromJson(value);
       });
     }
     return map;
  }
}

