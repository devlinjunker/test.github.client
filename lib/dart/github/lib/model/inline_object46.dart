part of openapi.api;

class InlineObject46 {
  /* Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. */
  bool allowMergeCommit = true;
  /* Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. */
  bool allowRebaseMerge = true;
  /* Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. */
  bool allowSquashMerge = true;
  /* `true` to archive this repository. **Note**: You cannot unarchive repositories through the API. */
  bool archived = false;
  /* Updates the default branch for this repository. */
  String defaultBranch = null;
  /* Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. */
  bool deleteBranchOnMerge = false;
  /* A short description of the repository. */
  String description = null;
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
  /* The name of the repository. */
  String name = null;
  /* Either `true` to make the repository private or `false` to make it public. Default: `false`.   **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. */
  bool private = false;
  /* Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header. */
  String visibility = null;
  //enum visibilityEnum {  public,  private,  visibility,  internal,  };{

  InlineObject46({
    this.allowMergeCommit,
    this.allowRebaseMerge,
    this.allowSquashMerge,
    this.archived,
    this.defaultBranch,
    this.deleteBranchOnMerge,
    this.description,
    this.hasIssues,
    this.hasProjects,
    this.hasWiki,
    this.homepage,
    this.isTemplate,
    this.name,
    this.private,
    this.visibility,
  });

  @override
  String toString() {
    return 'InlineObject46[allowMergeCommit=$allowMergeCommit, allowRebaseMerge=$allowRebaseMerge, allowSquashMerge=$allowSquashMerge, archived=$archived, defaultBranch=$defaultBranch, deleteBranchOnMerge=$deleteBranchOnMerge, description=$description, hasIssues=$hasIssues, hasProjects=$hasProjects, hasWiki=$hasWiki, homepage=$homepage, isTemplate=$isTemplate, name=$name, private=$private, visibility=$visibility, ]';
  }

  InlineObject46.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    allowMergeCommit = json['allow_merge_commit'];
    allowRebaseMerge = json['allow_rebase_merge'];
    allowSquashMerge = json['allow_squash_merge'];
    archived = json['archived'];
    defaultBranch = json['default_branch'];
    deleteBranchOnMerge = json['delete_branch_on_merge'];
    description = json['description'];
    hasIssues = json['has_issues'];
    hasProjects = json['has_projects'];
    hasWiki = json['has_wiki'];
    homepage = json['homepage'];
    isTemplate = json['is_template'];
    name = json['name'];
    private = json['private'];
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
    if (archived != null)
      json['archived'] = archived;
    if (defaultBranch != null)
      json['default_branch'] = defaultBranch;
    if (deleteBranchOnMerge != null)
      json['delete_branch_on_merge'] = deleteBranchOnMerge;
    if (description != null)
      json['description'] = description;
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
    if (name != null)
      json['name'] = name;
    if (private != null)
      json['private'] = private;
    if (visibility != null)
      json['visibility'] = visibility;
    return json;
  }

  static List<InlineObject46> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject46>() : json.map((value) => InlineObject46.fromJson(value)).toList();
  }

  static Map<String, InlineObject46> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject46>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject46.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject46-objects as value to a dart map
  static Map<String, List<InlineObject46>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject46>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject46.listFromJson(value);
       });
     }
     return map;
  }
}

