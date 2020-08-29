part of openapi.api;

class RepoSearchResultItem {
  
  bool allowMergeCommit = null;
  
  bool allowRebaseMerge = null;
  
  bool allowSquashMerge = null;
  
  String archiveUrl = null;
  
  bool archived = null;
  
  String assigneesUrl = null;
  
  String blobsUrl = null;
  
  String branchesUrl = null;
  
  String cloneUrl = null;
  
  String collaboratorsUrl = null;
  
  String commentsUrl = null;
  
  String commitsUrl = null;
  
  String compareUrl = null;
  
  String contentsUrl = null;
  
  String contributorsUrl = null;
  
  DateTime createdAt = null;
  
  String defaultBranch = null;
  
  bool deleteBranchOnMerge = null;
  
  String deploymentsUrl = null;
  
  String description = null;
  /* Returns whether or not this repository disabled. */
  bool disabled = null;
  
  String downloadsUrl = null;
  
  String eventsUrl = null;
  
  bool fork = null;
  
  int forks = null;
  
  int forksCount = null;
  
  String forksUrl = null;
  
  String fullName = null;
  
  String gitCommitsUrl = null;
  
  String gitRefsUrl = null;
  
  String gitTagsUrl = null;
  
  String gitUrl = null;
  
  bool hasDownloads = null;
  
  bool hasIssues = null;
  
  bool hasPages = null;
  
  bool hasProjects = null;
  
  bool hasWiki = null;
  
  String homepage = null;
  
  String hooksUrl = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String issueCommentUrl = null;
  
  String issueEventsUrl = null;
  
  String issuesUrl = null;
  
  String keysUrl = null;
  
  String labelsUrl = null;
  
  String language = null;
  
  String languagesUrl = null;
  
  LicenseSimple license = null;
  
  String masterBranch = null;
  
  String mergesUrl = null;
  
  String milestonesUrl = null;
  
  String mirrorUrl = null;
  
  String name = null;
  
  String nodeId = null;
  
  String notificationsUrl = null;
  
  int openIssues = null;
  
  int openIssuesCount = null;
  
  SimpleUser owner = null;
  
  CollaboratorPermissions permissions = null;
  
  bool private = null;
  
  String pullsUrl = null;
  
  DateTime pushedAt = null;
  
  String releasesUrl = null;
  
  int score = null;
  
  int size = null;
  
  String sshUrl = null;
  
  int stargazersCount = null;
  
  String stargazersUrl = null;
  
  String statusesUrl = null;
  
  String subscribersUrl = null;
  
  String subscriptionUrl = null;
  
  String svnUrl = null;
  
  String tagsUrl = null;
  
  String teamsUrl = null;
  
  String tempCloneToken = null;
  
  List<Object> textMatches = [];
  
  List<String> topics = [];
  
  String treesUrl = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  int watchers = null;
  
  int watchersCount = null;

  RepoSearchResultItem({
    this.allowMergeCommit,
    this.allowRebaseMerge,
    this.allowSquashMerge,
    this.archiveUrl,
    this.archived,
    this.assigneesUrl,
    this.blobsUrl,
    this.branchesUrl,
    this.cloneUrl,
    this.collaboratorsUrl,
    this.commentsUrl,
    this.commitsUrl,
    this.compareUrl,
    this.contentsUrl,
    this.contributorsUrl,
    this.createdAt,
    this.defaultBranch,
    this.deleteBranchOnMerge,
    this.deploymentsUrl,
    this.description,
    this.disabled,
    this.downloadsUrl,
    this.eventsUrl,
    this.fork,
    this.forks,
    this.forksCount,
    this.forksUrl,
    this.fullName,
    this.gitCommitsUrl,
    this.gitRefsUrl,
    this.gitTagsUrl,
    this.gitUrl,
    this.hasDownloads,
    this.hasIssues,
    this.hasPages,
    this.hasProjects,
    this.hasWiki,
    this.homepage,
    this.hooksUrl,
    this.htmlUrl,
    this.id,
    this.issueCommentUrl,
    this.issueEventsUrl,
    this.issuesUrl,
    this.keysUrl,
    this.labelsUrl,
    this.language,
    this.languagesUrl,
    this.license,
    this.masterBranch,
    this.mergesUrl,
    this.milestonesUrl,
    this.mirrorUrl,
    this.name,
    this.nodeId,
    this.notificationsUrl,
    this.openIssues,
    this.openIssuesCount,
    this.owner,
    this.permissions,
    this.private,
    this.pullsUrl,
    this.pushedAt,
    this.releasesUrl,
    this.score,
    this.size,
    this.sshUrl,
    this.stargazersCount,
    this.stargazersUrl,
    this.statusesUrl,
    this.subscribersUrl,
    this.subscriptionUrl,
    this.svnUrl,
    this.tagsUrl,
    this.teamsUrl,
    this.tempCloneToken,
    this.textMatches,
    this.topics,
    this.treesUrl,
    this.updatedAt,
    this.url,
    this.watchers,
    this.watchersCount,
  });

  @override
  String toString() {
    return 'RepoSearchResultItem[allowMergeCommit=$allowMergeCommit, allowRebaseMerge=$allowRebaseMerge, allowSquashMerge=$allowSquashMerge, archiveUrl=$archiveUrl, archived=$archived, assigneesUrl=$assigneesUrl, blobsUrl=$blobsUrl, branchesUrl=$branchesUrl, cloneUrl=$cloneUrl, collaboratorsUrl=$collaboratorsUrl, commentsUrl=$commentsUrl, commitsUrl=$commitsUrl, compareUrl=$compareUrl, contentsUrl=$contentsUrl, contributorsUrl=$contributorsUrl, createdAt=$createdAt, defaultBranch=$defaultBranch, deleteBranchOnMerge=$deleteBranchOnMerge, deploymentsUrl=$deploymentsUrl, description=$description, disabled=$disabled, downloadsUrl=$downloadsUrl, eventsUrl=$eventsUrl, fork=$fork, forks=$forks, forksCount=$forksCount, forksUrl=$forksUrl, fullName=$fullName, gitCommitsUrl=$gitCommitsUrl, gitRefsUrl=$gitRefsUrl, gitTagsUrl=$gitTagsUrl, gitUrl=$gitUrl, hasDownloads=$hasDownloads, hasIssues=$hasIssues, hasPages=$hasPages, hasProjects=$hasProjects, hasWiki=$hasWiki, homepage=$homepage, hooksUrl=$hooksUrl, htmlUrl=$htmlUrl, id=$id, issueCommentUrl=$issueCommentUrl, issueEventsUrl=$issueEventsUrl, issuesUrl=$issuesUrl, keysUrl=$keysUrl, labelsUrl=$labelsUrl, language=$language, languagesUrl=$languagesUrl, license=$license, masterBranch=$masterBranch, mergesUrl=$mergesUrl, milestonesUrl=$milestonesUrl, mirrorUrl=$mirrorUrl, name=$name, nodeId=$nodeId, notificationsUrl=$notificationsUrl, openIssues=$openIssues, openIssuesCount=$openIssuesCount, owner=$owner, permissions=$permissions, private=$private, pullsUrl=$pullsUrl, pushedAt=$pushedAt, releasesUrl=$releasesUrl, score=$score, size=$size, sshUrl=$sshUrl, stargazersCount=$stargazersCount, stargazersUrl=$stargazersUrl, statusesUrl=$statusesUrl, subscribersUrl=$subscribersUrl, subscriptionUrl=$subscriptionUrl, svnUrl=$svnUrl, tagsUrl=$tagsUrl, teamsUrl=$teamsUrl, tempCloneToken=$tempCloneToken, textMatches=$textMatches, topics=$topics, treesUrl=$treesUrl, updatedAt=$updatedAt, url=$url, watchers=$watchers, watchersCount=$watchersCount, ]';
  }

  RepoSearchResultItem.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    allowMergeCommit = json['allow_merge_commit'];
    allowRebaseMerge = json['allow_rebase_merge'];
    allowSquashMerge = json['allow_squash_merge'];
    archiveUrl = json['archive_url'];
    archived = json['archived'];
    assigneesUrl = json['assignees_url'];
    blobsUrl = json['blobs_url'];
    branchesUrl = json['branches_url'];
    cloneUrl = json['clone_url'];
    collaboratorsUrl = json['collaborators_url'];
    commentsUrl = json['comments_url'];
    commitsUrl = json['commits_url'];
    compareUrl = json['compare_url'];
    contentsUrl = json['contents_url'];
    contributorsUrl = json['contributors_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    defaultBranch = json['default_branch'];
    deleteBranchOnMerge = json['delete_branch_on_merge'];
    deploymentsUrl = json['deployments_url'];
    description = json['description'];
    disabled = json['disabled'];
    downloadsUrl = json['downloads_url'];
    eventsUrl = json['events_url'];
    fork = json['fork'];
    forks = json['forks'];
    forksCount = json['forks_count'];
    forksUrl = json['forks_url'];
    fullName = json['full_name'];
    gitCommitsUrl = json['git_commits_url'];
    gitRefsUrl = json['git_refs_url'];
    gitTagsUrl = json['git_tags_url'];
    gitUrl = json['git_url'];
    hasDownloads = json['has_downloads'];
    hasIssues = json['has_issues'];
    hasPages = json['has_pages'];
    hasProjects = json['has_projects'];
    hasWiki = json['has_wiki'];
    homepage = json['homepage'];
    hooksUrl = json['hooks_url'];
    htmlUrl = json['html_url'];
    id = json['id'];
    issueCommentUrl = json['issue_comment_url'];
    issueEventsUrl = json['issue_events_url'];
    issuesUrl = json['issues_url'];
    keysUrl = json['keys_url'];
    labelsUrl = json['labels_url'];
    language = json['language'];
    languagesUrl = json['languages_url'];
    license = (json['license'] == null) ?
      null :
      LicenseSimple.fromJson(json['license']);
    masterBranch = json['master_branch'];
    mergesUrl = json['merges_url'];
    milestonesUrl = json['milestones_url'];
    mirrorUrl = json['mirror_url'];
    name = json['name'];
    nodeId = json['node_id'];
    notificationsUrl = json['notifications_url'];
    openIssues = json['open_issues'];
    openIssuesCount = json['open_issues_count'];
    owner = (json['owner'] == null) ?
      null :
      SimpleUser.fromJson(json['owner']);
    permissions = (json['permissions'] == null) ?
      null :
      CollaboratorPermissions.fromJson(json['permissions']);
    private = json['private'];
    pullsUrl = json['pulls_url'];
    pushedAt = (json['pushed_at'] == null) ?
      null :
      DateTime.parse(json['pushed_at']);
    releasesUrl = json['releases_url'];
    score = json['score'];
    size = json['size'];
    sshUrl = json['ssh_url'];
    stargazersCount = json['stargazers_count'];
    stargazersUrl = json['stargazers_url'];
    statusesUrl = json['statuses_url'];
    subscribersUrl = json['subscribers_url'];
    subscriptionUrl = json['subscription_url'];
    svnUrl = json['svn_url'];
    tagsUrl = json['tags_url'];
    teamsUrl = json['teams_url'];
    tempCloneToken = json['temp_clone_token'];
    textMatches = (json['text_matches'] == null) ?
      null :
      Object.listFromJson(json['text_matches']);
    topics = (json['topics'] == null) ?
      null :
      (json['topics'] as List).cast<String>();
    treesUrl = json['trees_url'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
    watchers = json['watchers'];
    watchersCount = json['watchers_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (allowMergeCommit != null)
      json['allow_merge_commit'] = allowMergeCommit;
    if (allowRebaseMerge != null)
      json['allow_rebase_merge'] = allowRebaseMerge;
    if (allowSquashMerge != null)
      json['allow_squash_merge'] = allowSquashMerge;
    if (archiveUrl != null)
      json['archive_url'] = archiveUrl;
    if (archived != null)
      json['archived'] = archived;
    if (assigneesUrl != null)
      json['assignees_url'] = assigneesUrl;
    if (blobsUrl != null)
      json['blobs_url'] = blobsUrl;
    if (branchesUrl != null)
      json['branches_url'] = branchesUrl;
    if (cloneUrl != null)
      json['clone_url'] = cloneUrl;
    if (collaboratorsUrl != null)
      json['collaborators_url'] = collaboratorsUrl;
    if (commentsUrl != null)
      json['comments_url'] = commentsUrl;
    if (commitsUrl != null)
      json['commits_url'] = commitsUrl;
    if (compareUrl != null)
      json['compare_url'] = compareUrl;
    if (contentsUrl != null)
      json['contents_url'] = contentsUrl;
    if (contributorsUrl != null)
      json['contributors_url'] = contributorsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (defaultBranch != null)
      json['default_branch'] = defaultBranch;
    if (deleteBranchOnMerge != null)
      json['delete_branch_on_merge'] = deleteBranchOnMerge;
    if (deploymentsUrl != null)
      json['deployments_url'] = deploymentsUrl;
      json['description'] = description;
    if (disabled != null)
      json['disabled'] = disabled;
    if (downloadsUrl != null)
      json['downloads_url'] = downloadsUrl;
    if (eventsUrl != null)
      json['events_url'] = eventsUrl;
    if (fork != null)
      json['fork'] = fork;
    if (forks != null)
      json['forks'] = forks;
    if (forksCount != null)
      json['forks_count'] = forksCount;
    if (forksUrl != null)
      json['forks_url'] = forksUrl;
    if (fullName != null)
      json['full_name'] = fullName;
    if (gitCommitsUrl != null)
      json['git_commits_url'] = gitCommitsUrl;
    if (gitRefsUrl != null)
      json['git_refs_url'] = gitRefsUrl;
    if (gitTagsUrl != null)
      json['git_tags_url'] = gitTagsUrl;
    if (gitUrl != null)
      json['git_url'] = gitUrl;
    if (hasDownloads != null)
      json['has_downloads'] = hasDownloads;
    if (hasIssues != null)
      json['has_issues'] = hasIssues;
    if (hasPages != null)
      json['has_pages'] = hasPages;
    if (hasProjects != null)
      json['has_projects'] = hasProjects;
    if (hasWiki != null)
      json['has_wiki'] = hasWiki;
      json['homepage'] = homepage;
    if (hooksUrl != null)
      json['hooks_url'] = hooksUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (issueCommentUrl != null)
      json['issue_comment_url'] = issueCommentUrl;
    if (issueEventsUrl != null)
      json['issue_events_url'] = issueEventsUrl;
    if (issuesUrl != null)
      json['issues_url'] = issuesUrl;
    if (keysUrl != null)
      json['keys_url'] = keysUrl;
    if (labelsUrl != null)
      json['labels_url'] = labelsUrl;
      json['language'] = language;
    if (languagesUrl != null)
      json['languages_url'] = languagesUrl;
      json['license'] = license;
    if (masterBranch != null)
      json['master_branch'] = masterBranch;
    if (mergesUrl != null)
      json['merges_url'] = mergesUrl;
    if (milestonesUrl != null)
      json['milestones_url'] = milestonesUrl;
      json['mirror_url'] = mirrorUrl;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (notificationsUrl != null)
      json['notifications_url'] = notificationsUrl;
    if (openIssues != null)
      json['open_issues'] = openIssues;
    if (openIssuesCount != null)
      json['open_issues_count'] = openIssuesCount;
      json['owner'] = owner;
    if (permissions != null)
      json['permissions'] = permissions;
    if (private != null)
      json['private'] = private;
    if (pullsUrl != null)
      json['pulls_url'] = pullsUrl;
    if (pushedAt != null)
      json['pushed_at'] = pushedAt == null ? null : pushedAt.toUtc().toIso8601String();
    if (releasesUrl != null)
      json['releases_url'] = releasesUrl;
    if (score != null)
      json['score'] = score;
    if (size != null)
      json['size'] = size;
    if (sshUrl != null)
      json['ssh_url'] = sshUrl;
    if (stargazersCount != null)
      json['stargazers_count'] = stargazersCount;
    if (stargazersUrl != null)
      json['stargazers_url'] = stargazersUrl;
    if (statusesUrl != null)
      json['statuses_url'] = statusesUrl;
    if (subscribersUrl != null)
      json['subscribers_url'] = subscribersUrl;
    if (subscriptionUrl != null)
      json['subscription_url'] = subscriptionUrl;
    if (svnUrl != null)
      json['svn_url'] = svnUrl;
    if (tagsUrl != null)
      json['tags_url'] = tagsUrl;
    if (teamsUrl != null)
      json['teams_url'] = teamsUrl;
    if (tempCloneToken != null)
      json['temp_clone_token'] = tempCloneToken;
    if (textMatches != null)
      json['text_matches'] = textMatches;
    if (topics != null)
      json['topics'] = topics;
    if (treesUrl != null)
      json['trees_url'] = treesUrl;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    if (watchers != null)
      json['watchers'] = watchers;
    if (watchersCount != null)
      json['watchers_count'] = watchersCount;
    return json;
  }

  static List<RepoSearchResultItem> listFromJson(List<dynamic> json) {
    return json == null ? List<RepoSearchResultItem>() : json.map((value) => RepoSearchResultItem.fromJson(value)).toList();
  }

  static Map<String, RepoSearchResultItem> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RepoSearchResultItem>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RepoSearchResultItem.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RepoSearchResultItem-objects as value to a dart map
  static Map<String, List<RepoSearchResultItem>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RepoSearchResultItem>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RepoSearchResultItem.listFromJson(value);
       });
     }
     return map;
  }
}

