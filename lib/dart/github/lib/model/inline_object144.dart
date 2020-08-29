part of openapi.api;

class InlineObject144 {
  /* Whether to allow merge commits for pull requests. */
  bool allowMergeCommit = true;
  /* Whether to allow rebase merges for pull requests. */
  bool allowRebaseMerge = true;
  /* Whether to allow squash merges for pull requests. */
  bool allowSquashMerge = true;
  /* Whether the repository is initialized with a minimal README. */
  bool autoInit = false;
  /* Whether to delete head branches when pull requests are merged */
  bool deleteBranchOnMerge = false;
  /* A short description of the repository. */
  String description = null;
  /* The desired language or platform to apply to the .gitignore. */
  String gitignoreTemplate = null;
  /* Whether downloads are enabled. */
  bool hasDownloads = true;
  /* Whether issues are enabled. */
  bool hasIssues = true;
  /* Whether projects are enabled. */
  bool hasProjects = true;
  /* Whether the wiki is enabled. */
  bool hasWiki = true;
  /* A URL with more information about the repository. */
  String homepage = null;
  /* Whether this repository acts as a template that can be used to generate new repositories. */
  bool isTemplate = false;
  /* The license keyword of the open source license for this repository. */
  String licenseTemplate = null;
  /* The name of the repository. */
  String name = null;
  /* Whether the repository is private or public. */
  bool private = false;
  /* The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization. */
  int teamId = null;

  InlineObject144({
    this.allowMergeCommit,
    this.allowRebaseMerge,
    this.allowSquashMerge,
    this.autoInit,
    this.deleteBranchOnMerge,
    this.description,
    this.gitignoreTemplate,
    this.hasDownloads,
    this.hasIssues,
    this.hasProjects,
    this.hasWiki,
    this.homepage,
    this.isTemplate,
    this.licenseTemplate,
    this.name,
    this.private,
    this.teamId,
  });

  @override
  String toString() {
    return 'InlineObject144[allowMergeCommit=$allowMergeCommit, allowRebaseMerge=$allowRebaseMerge, allowSquashMerge=$allowSquashMerge, autoInit=$autoInit, deleteBranchOnMerge=$deleteBranchOnMerge, description=$description, gitignoreTemplate=$gitignoreTemplate, hasDownloads=$hasDownloads, hasIssues=$hasIssues, hasProjects=$hasProjects, hasWiki=$hasWiki, homepage=$homepage, isTemplate=$isTemplate, licenseTemplate=$licenseTemplate, name=$name, private=$private, teamId=$teamId, ]';
  }

  InlineObject144.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    allowMergeCommit = json['allow_merge_commit'];
    allowRebaseMerge = json['allow_rebase_merge'];
    allowSquashMerge = json['allow_squash_merge'];
    autoInit = json['auto_init'];
    deleteBranchOnMerge = json['delete_branch_on_merge'];
    description = json['description'];
    gitignoreTemplate = json['gitignore_template'];
    hasDownloads = json['has_downloads'];
    hasIssues = json['has_issues'];
    hasProjects = json['has_projects'];
    hasWiki = json['has_wiki'];
    homepage = json['homepage'];
    isTemplate = json['is_template'];
    licenseTemplate = json['license_template'];
    name = json['name'];
    private = json['private'];
    teamId = json['team_id'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (allowMergeCommit != null)
      json['allow_merge_commit'] = allowMergeCommit;
    if (allowRebaseMerge != null)
      json['allow_rebase_merge'] = allowRebaseMerge;
    if (allowSquashMerge != null)
      json['allow_squash_merge'] = allowSquashMerge;
    if (autoInit != null)
      json['auto_init'] = autoInit;
    if (deleteBranchOnMerge != null)
      json['delete_branch_on_merge'] = deleteBranchOnMerge;
    if (description != null)
      json['description'] = description;
    if (gitignoreTemplate != null)
      json['gitignore_template'] = gitignoreTemplate;
    if (hasDownloads != null)
      json['has_downloads'] = hasDownloads;
    if (hasIssues != null)
      json['has_issues'] = hasIssues;
    if (hasProjects != null)
      json['has_projects'] = hasProjects;
    if (hasWiki != null)
      json['has_wiki'] = hasWiki;
    if (homepage != null)
      json['homepage'] = homepage;
    if (isTemplate != null)
      json['is_template'] = isTemplate;
    if (licenseTemplate != null)
      json['license_template'] = licenseTemplate;
    if (name != null)
      json['name'] = name;
    if (private != null)
      json['private'] = private;
    if (teamId != null)
      json['team_id'] = teamId;
    return json;
  }

  static List<InlineObject144> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject144>() : json.map((value) => InlineObject144.fromJson(value)).toList();
  }

  static Map<String, InlineObject144> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject144>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject144.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject144-objects as value to a dart map
  static Map<String, List<InlineObject144>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject144>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject144.listFromJson(value);
       });
     }
     return map;
  }
}

