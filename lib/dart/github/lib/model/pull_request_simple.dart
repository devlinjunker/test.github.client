part of openapi.api;

class PullRequestSimple {
  
  PullRequestLinks links = null;
  
  String activeLockReason = null;
  
  SimpleUser assignee = null;
  
  List<SimpleUser> assignees = [];
  
  String authorAssociation = null;
  
  PullRequestSimpleBase base = null;
  
  String body = null;
  
  DateTime closedAt = null;
  
  String commentsUrl = null;
  
  String commitsUrl = null;
  
  DateTime createdAt = null;
  
  String diffUrl = null;
  /* Indicates whether or not the pull request is a draft. */
  bool draft = null;
  
  PullRequestSimpleBase head = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String issueUrl = null;
  
  List<PullRequestSimpleLabels> labels = [];
  
  bool locked = null;
  
  String mergeCommitSha = null;
  
  DateTime mergedAt = null;
  
  Milestone milestone = null;
  
  String nodeId = null;
  
  int number = null;
  
  String patchUrl = null;
  
  List<SimpleUser> requestedReviewers = [];
  
  List<TeamSimple> requestedTeams = [];
  
  String reviewCommentUrl = null;
  
  String reviewCommentsUrl = null;
  
  String state = null;
  
  String statusesUrl = null;
  
  String title = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  PullRequestSimple({
    this.links,
    this.activeLockReason,
    this.assignee,
    this.assignees,
    this.authorAssociation,
    this.base,
    this.body,
    this.closedAt,
    this.commentsUrl,
    this.commitsUrl,
    this.createdAt,
    this.diffUrl,
    this.draft,
    this.head,
    this.htmlUrl,
    this.id,
    this.issueUrl,
    this.labels,
    this.locked,
    this.mergeCommitSha,
    this.mergedAt,
    this.milestone,
    this.nodeId,
    this.number,
    this.patchUrl,
    this.requestedReviewers,
    this.requestedTeams,
    this.reviewCommentUrl,
    this.reviewCommentsUrl,
    this.state,
    this.statusesUrl,
    this.title,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'PullRequestSimple[links=$links, activeLockReason=$activeLockReason, assignee=$assignee, assignees=$assignees, authorAssociation=$authorAssociation, base=$base, body=$body, closedAt=$closedAt, commentsUrl=$commentsUrl, commitsUrl=$commitsUrl, createdAt=$createdAt, diffUrl=$diffUrl, draft=$draft, head=$head, htmlUrl=$htmlUrl, id=$id, issueUrl=$issueUrl, labels=$labels, locked=$locked, mergeCommitSha=$mergeCommitSha, mergedAt=$mergedAt, milestone=$milestone, nodeId=$nodeId, number=$number, patchUrl=$patchUrl, requestedReviewers=$requestedReviewers, requestedTeams=$requestedTeams, reviewCommentUrl=$reviewCommentUrl, reviewCommentsUrl=$reviewCommentsUrl, state=$state, statusesUrl=$statusesUrl, title=$title, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  PullRequestSimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      PullRequestLinks.fromJson(json['_links']);
    activeLockReason = json['active_lock_reason'];
    assignee = (json['assignee'] == null) ?
      null :
      SimpleUser.fromJson(json['assignee']);
    assignees = (json['assignees'] == null) ?
      null :
      SimpleUser.listFromJson(json['assignees']);
    authorAssociation = json['author_association'];
    base = (json['base'] == null) ?
      null :
      PullRequestSimpleBase.fromJson(json['base']);
    body = json['body'];
    closedAt = (json['closed_at'] == null) ?
      null :
      DateTime.parse(json['closed_at']);
    commentsUrl = json['comments_url'];
    commitsUrl = json['commits_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    diffUrl = json['diff_url'];
    draft = json['draft'];
    head = (json['head'] == null) ?
      null :
      PullRequestSimpleBase.fromJson(json['head']);
    htmlUrl = json['html_url'];
    id = json['id'];
    issueUrl = json['issue_url'];
    labels = (json['labels'] == null) ?
      null :
      PullRequestSimpleLabels.listFromJson(json['labels']);
    locked = json['locked'];
    mergeCommitSha = json['merge_commit_sha'];
    mergedAt = (json['merged_at'] == null) ?
      null :
      DateTime.parse(json['merged_at']);
    milestone = (json['milestone'] == null) ?
      null :
      Milestone.fromJson(json['milestone']);
    nodeId = json['node_id'];
    number = json['number'];
    patchUrl = json['patch_url'];
    requestedReviewers = (json['requested_reviewers'] == null) ?
      null :
      SimpleUser.listFromJson(json['requested_reviewers']);
    requestedTeams = (json['requested_teams'] == null) ?
      null :
      TeamSimple.listFromJson(json['requested_teams']);
    reviewCommentUrl = json['review_comment_url'];
    reviewCommentsUrl = json['review_comments_url'];
    state = json['state'];
    statusesUrl = json['statuses_url'];
    title = json['title'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (links != null)
      json['_links'] = links;
      json['active_lock_reason'] = activeLockReason;
      json['assignee'] = assignee;
      json['assignees'] = assignees;
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
    if (base != null)
      json['base'] = base;
      json['body'] = body;
      json['closed_at'] = closedAt == null ? null : closedAt.toUtc().toIso8601String();
    if (commentsUrl != null)
      json['comments_url'] = commentsUrl;
    if (commitsUrl != null)
      json['commits_url'] = commitsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (diffUrl != null)
      json['diff_url'] = diffUrl;
    if (draft != null)
      json['draft'] = draft;
    if (head != null)
      json['head'] = head;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (issueUrl != null)
      json['issue_url'] = issueUrl;
    if (labels != null)
      json['labels'] = labels;
    if (locked != null)
      json['locked'] = locked;
      json['merge_commit_sha'] = mergeCommitSha;
      json['merged_at'] = mergedAt == null ? null : mergedAt.toUtc().toIso8601String();
      json['milestone'] = milestone;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (number != null)
      json['number'] = number;
    if (patchUrl != null)
      json['patch_url'] = patchUrl;
      json['requested_reviewers'] = requestedReviewers;
      json['requested_teams'] = requestedTeams;
    if (reviewCommentUrl != null)
      json['review_comment_url'] = reviewCommentUrl;
    if (reviewCommentsUrl != null)
      json['review_comments_url'] = reviewCommentsUrl;
    if (state != null)
      json['state'] = state;
    if (statusesUrl != null)
      json['statuses_url'] = statusesUrl;
    if (title != null)
      json['title'] = title;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<PullRequestSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestSimple>() : json.map((value) => PullRequestSimple.fromJson(value)).toList();
  }

  static Map<String, PullRequestSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestSimple-objects as value to a dart map
  static Map<String, List<PullRequestSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestSimple.listFromJson(value);
       });
     }
     return map;
  }
}

