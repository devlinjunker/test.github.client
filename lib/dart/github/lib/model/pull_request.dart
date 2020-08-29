part of openapi.api;

class PullRequest {
  
  PullRequestLinks links = null;
  
  String activeLockReason = null;
  
  int additions = null;
  
  SimpleUser assignee = null;
  
  List<SimpleUser> assignees = [];
  
  String authorAssociation = null;
  
  PullRequestBase base = null;
  
  String body = null;
  
  int changedFiles = null;
  
  DateTime closedAt = null;
  
  int comments = null;
  
  String commentsUrl = null;
  
  int commits = null;
  
  String commitsUrl = null;
  
  DateTime createdAt = null;
  
  int deletions = null;
  
  String diffUrl = null;
  /* Indicates whether or not the pull request is a draft. */
  bool draft = null;
  
  PullRequestHead head = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String issueUrl = null;
  
  List<IssueSearchResultItemLabels> labels = [];
  
  bool locked = null;
  /* Indicates whether maintainers can modify the pull request. */
  bool maintainerCanModify = null;
  
  String mergeCommitSha = null;
  
  bool mergeable = null;
  
  String mergeableState = null;
  
  bool merged = null;
  
  DateTime mergedAt = null;
  
  SimpleUser mergedBy = null;
  
  Milestone milestone = null;
  
  String nodeId = null;
  /* Number uniquely identifying the pull request within its repository. */
  int number = null;
  
  String patchUrl = null;
  
  bool rebaseable = null;
  
  List<SimpleUser> requestedReviewers = [];
  
  List<TeamSimple> requestedTeams = [];
  
  String reviewCommentUrl = null;
  
  int reviewComments = null;
  
  String reviewCommentsUrl = null;
  /* State of this Pull Request. Either `open` or `closed`. */
  String state = null;
  //enum stateEnum {  open,  closed,  };{
  
  String statusesUrl = null;
  /* The title of the pull request. */
  String title = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  PullRequest({
    this.links,
    this.activeLockReason,
    this.additions,
    this.assignee,
    this.assignees,
    this.authorAssociation,
    this.base,
    this.body,
    this.changedFiles,
    this.closedAt,
    this.comments,
    this.commentsUrl,
    this.commits,
    this.commitsUrl,
    this.createdAt,
    this.deletions,
    this.diffUrl,
    this.draft,
    this.head,
    this.htmlUrl,
    this.id,
    this.issueUrl,
    this.labels,
    this.locked,
    this.maintainerCanModify,
    this.mergeCommitSha,
    this.mergeable,
    this.mergeableState,
    this.merged,
    this.mergedAt,
    this.mergedBy,
    this.milestone,
    this.nodeId,
    this.number,
    this.patchUrl,
    this.rebaseable,
    this.requestedReviewers,
    this.requestedTeams,
    this.reviewCommentUrl,
    this.reviewComments,
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
    return 'PullRequest[links=$links, activeLockReason=$activeLockReason, additions=$additions, assignee=$assignee, assignees=$assignees, authorAssociation=$authorAssociation, base=$base, body=$body, changedFiles=$changedFiles, closedAt=$closedAt, comments=$comments, commentsUrl=$commentsUrl, commits=$commits, commitsUrl=$commitsUrl, createdAt=$createdAt, deletions=$deletions, diffUrl=$diffUrl, draft=$draft, head=$head, htmlUrl=$htmlUrl, id=$id, issueUrl=$issueUrl, labels=$labels, locked=$locked, maintainerCanModify=$maintainerCanModify, mergeCommitSha=$mergeCommitSha, mergeable=$mergeable, mergeableState=$mergeableState, merged=$merged, mergedAt=$mergedAt, mergedBy=$mergedBy, milestone=$milestone, nodeId=$nodeId, number=$number, patchUrl=$patchUrl, rebaseable=$rebaseable, requestedReviewers=$requestedReviewers, requestedTeams=$requestedTeams, reviewCommentUrl=$reviewCommentUrl, reviewComments=$reviewComments, reviewCommentsUrl=$reviewCommentsUrl, state=$state, statusesUrl=$statusesUrl, title=$title, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  PullRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      PullRequestLinks.fromJson(json['_links']);
    activeLockReason = json['active_lock_reason'];
    additions = json['additions'];
    assignee = (json['assignee'] == null) ?
      null :
      SimpleUser.fromJson(json['assignee']);
    assignees = (json['assignees'] == null) ?
      null :
      SimpleUser.listFromJson(json['assignees']);
    authorAssociation = json['author_association'];
    base = (json['base'] == null) ?
      null :
      PullRequestBase.fromJson(json['base']);
    body = json['body'];
    changedFiles = json['changed_files'];
    closedAt = (json['closed_at'] == null) ?
      null :
      DateTime.parse(json['closed_at']);
    comments = json['comments'];
    commentsUrl = json['comments_url'];
    commits = json['commits'];
    commitsUrl = json['commits_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    deletions = json['deletions'];
    diffUrl = json['diff_url'];
    draft = json['draft'];
    head = (json['head'] == null) ?
      null :
      PullRequestHead.fromJson(json['head']);
    htmlUrl = json['html_url'];
    id = json['id'];
    issueUrl = json['issue_url'];
    labels = (json['labels'] == null) ?
      null :
      IssueSearchResultItemLabels.listFromJson(json['labels']);
    locked = json['locked'];
    maintainerCanModify = json['maintainer_can_modify'];
    mergeCommitSha = json['merge_commit_sha'];
    mergeable = json['mergeable'];
    mergeableState = json['mergeable_state'];
    merged = json['merged'];
    mergedAt = (json['merged_at'] == null) ?
      null :
      DateTime.parse(json['merged_at']);
    mergedBy = (json['merged_by'] == null) ?
      null :
      SimpleUser.fromJson(json['merged_by']);
    milestone = (json['milestone'] == null) ?
      null :
      Milestone.fromJson(json['milestone']);
    nodeId = json['node_id'];
    number = json['number'];
    patchUrl = json['patch_url'];
    rebaseable = json['rebaseable'];
    requestedReviewers = (json['requested_reviewers'] == null) ?
      null :
      SimpleUser.listFromJson(json['requested_reviewers']);
    requestedTeams = (json['requested_teams'] == null) ?
      null :
      TeamSimple.listFromJson(json['requested_teams']);
    reviewCommentUrl = json['review_comment_url'];
    reviewComments = json['review_comments'];
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
    if (additions != null)
      json['additions'] = additions;
      json['assignee'] = assignee;
      json['assignees'] = assignees;
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
    if (base != null)
      json['base'] = base;
      json['body'] = body;
    if (changedFiles != null)
      json['changed_files'] = changedFiles;
      json['closed_at'] = closedAt == null ? null : closedAt.toUtc().toIso8601String();
    if (comments != null)
      json['comments'] = comments;
    if (commentsUrl != null)
      json['comments_url'] = commentsUrl;
    if (commits != null)
      json['commits'] = commits;
    if (commitsUrl != null)
      json['commits_url'] = commitsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (deletions != null)
      json['deletions'] = deletions;
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
    if (maintainerCanModify != null)
      json['maintainer_can_modify'] = maintainerCanModify;
      json['merge_commit_sha'] = mergeCommitSha;
      json['mergeable'] = mergeable;
    if (mergeableState != null)
      json['mergeable_state'] = mergeableState;
    if (merged != null)
      json['merged'] = merged;
      json['merged_at'] = mergedAt == null ? null : mergedAt.toUtc().toIso8601String();
      json['merged_by'] = mergedBy;
      json['milestone'] = milestone;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (number != null)
      json['number'] = number;
    if (patchUrl != null)
      json['patch_url'] = patchUrl;
      json['rebaseable'] = rebaseable;
      json['requested_reviewers'] = requestedReviewers;
      json['requested_teams'] = requestedTeams;
    if (reviewCommentUrl != null)
      json['review_comment_url'] = reviewCommentUrl;
    if (reviewComments != null)
      json['review_comments'] = reviewComments;
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

  static List<PullRequest> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequest>() : json.map((value) => PullRequest.fromJson(value)).toList();
  }

  static Map<String, PullRequest> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequest>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequest.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequest-objects as value to a dart map
  static Map<String, List<PullRequest>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequest>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequest.listFromJson(value);
       });
     }
     return map;
  }
}

