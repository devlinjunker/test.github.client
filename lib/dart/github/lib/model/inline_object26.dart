part of openapi.api;

class InlineObject26 {
  /* Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. */
  bool allowMergeCommit = true;
  /* Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. */
  bool allowRebaseMerge = true;
  /* Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. */
  bool allowSquashMerge = true;
  /* Pass `true` to create an initial commit with empty README. */
  bool autoInit = false;
  /* Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. */
  bool deleteBranchOnMerge = false;
  /* A short description of the repository. */
  String description = null;
  /* Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, \"Haskell\". */
  String gitignoreTemplate = null;
  /* Either `true` to enable issues for this repository or `false` to disable them. */
  bool hasIssues = true;
  /* Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error. */
  bool hasProjects = true;
  /* Either `true` to enable the wiki for this repository or `false` to disable it. */
  bool hasWiki = true;
  /* A URL with more information about the repository. */
  String homepage = null;
  /* Either `true` to make this repo available as a template repository or `false` to prevent it. */
  bool isTemplate = false;
  /* Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, \"mit\" or \"mpl-2.0\". */
  String licenseTemplate = null;
  /* The name of the repository. */
  String name = null;
  /* Either `true` to create a private repository or `false` to create a public one. */
  bool private = false;
  /* The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization. */
  int teamId = null;
  /* Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. For more information, see \"[Creating an internal repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)\" in the GitHub Help documentation.   The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header. */
  String visibility = null;
  //enum visibilityEnum {  public,  private,  visibility,  internal,  };{

  InlineObject26({
    this.allowMergeCommit,
    this.allowRebaseMerge,
    this.allowSquashMerge,
    this.autoInit,
    this.deleteBranchOnMerge,
    this.description,
    this.gitignoreTemplate,
    this.hasIssues,
    this.hasProjects,
    this.hasWiki,
    this.homepage,
    this.isTemplate,
    this.licenseTemplate,
    this.name,
    this.private,
    this.teamId,
    this.visibility,
  });

  @override
  String toString() {
    return 'InlineObject26[allowMergeCommit=$allowMergeCommit, allowRebaseMerge=$allowRebaseMerge, allowSquashMerge=$allowSquashMerge, autoInit=$autoInit, deleteBranchOnMerge=$deleteBranchOnMerge, description=$description, gitignoreTemplate=$gitignoreTemplate, hasIssues=$hasIssues, hasProjects=$hasProjects, hasWiki=$hasWiki, homepage=$homepage, isTemplate=$isTemplate, licenseTemplate=$licenseTemplate, name=$name, private=$private, teamId=$teamId, visibility=$visibility, ]';
  }

  InlineObject26.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    allowMergeCommit = json['allow_merge_commit'];
    allowRebaseMerge = json['allow_rebase_merge'];
    allowSquashMerge = json['allow_squash_merge'];
    autoInit = json['auto_init'];
    deleteBranchOnMerge = json['delete_branch_on_merge'];
    description = json['description'];
    gitignoreTemplate = json['gitignore_template'];
    hasIssues = json['has_issues'];
    hasProjects = json['has_projects'];
    hasWiki = json['has_wiki'];
    homepage = json['homepage'];
    isTemplate = json['is_template'];
    licenseTemplate = json['license_template'];
    name = json['name'];
    private = json['private'];
    teamId = json['team_id'];
    visibility = json['visibility'];
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
    if (visibility != null)
      json['visibility'] = visibility;
    return json;
  }

  static List<InlineObject26> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject26>() : json.map((value) => InlineObject26.fromJson(value)).toList();
  }

  static Map<String, InlineObject26> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject26>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject26.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject26-objects as value to a dart map
  static Map<String, List<InlineObject26>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject26>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject26.listFromJson(value);
       });
     }
     return map;
  }
}

