part of openapi.api;

class IssueSimple {
  
  String activeLockReason = null;
  
  SimpleUser assignee = null;
  
  List<SimpleUser> assignees = [];
  
  String authorAssociation = null;
  
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  
  DateTime closedAt = null;
  
  int comments = null;
  
  String commentsUrl = null;
  
  DateTime createdAt = null;
  
  String eventsUrl = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  List<IssueSearchResultItemLabels> labels = [];
  
  String labelsUrl = null;
  
  bool locked = null;
  
  Milestone milestone = null;
  
  String nodeId = null;
  
  int number = null;
  
  Integration performedViaGithubApp = null;
  
  IssuePullRequest pullRequest = null;
  
  Repository repository = null;
  
  String repositoryUrl = null;
  
  String state = null;
  
  String timelineUrl = null;
  
  String title = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  IssueSimple({
    this.activeLockReason,
    this.assignee,
    this.assignees,
    this.authorAssociation,
    this.body,
    this.bodyHtml,
    this.bodyText,
    this.closedAt,
    this.comments,
    this.commentsUrl,
    this.createdAt,
    this.eventsUrl,
    this.htmlUrl,
    this.id,
    this.labels,
    this.labelsUrl,
    this.locked,
    this.milestone,
    this.nodeId,
    this.number,
    this.performedViaGithubApp,
    this.pullRequest,
    this.repository,
    this.repositoryUrl,
    this.state,
    this.timelineUrl,
    this.title,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'IssueSimple[activeLockReason=$activeLockReason, assignee=$assignee, assignees=$assignees, authorAssociation=$authorAssociation, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, closedAt=$closedAt, comments=$comments, commentsUrl=$commentsUrl, createdAt=$createdAt, eventsUrl=$eventsUrl, htmlUrl=$htmlUrl, id=$id, labels=$labels, labelsUrl=$labelsUrl, locked=$locked, milestone=$milestone, nodeId=$nodeId, number=$number, performedViaGithubApp=$performedViaGithubApp, pullRequest=$pullRequest, repository=$repository, repositoryUrl=$repositoryUrl, state=$state, timelineUrl=$timelineUrl, title=$title, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  IssueSimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    activeLockReason = json['active_lock_reason'];
    assignee = (json['assignee'] == null) ?
      null :
      SimpleUser.fromJson(json['assignee']);
    assignees = (json['assignees'] == null) ?
      null :
      SimpleUser.listFromJson(json['assignees']);
    authorAssociation = json['author_association'];
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyText = json['body_text'];
    closedAt = (json['closed_at'] == null) ?
      null :
      DateTime.parse(json['closed_at']);
    comments = json['comments'];
    commentsUrl = json['comments_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    eventsUrl = json['events_url'];
    htmlUrl = json['html_url'];
    id = json['id'];
    labels = (json['labels'] == null) ?
      null :
      IssueSearchResultItemLabels.listFromJson(json['labels']);
    labelsUrl = json['labels_url'];
    locked = json['locked'];
    milestone = (json['milestone'] == null) ?
      null :
      Milestone.fromJson(json['milestone']);
    nodeId = json['node_id'];
    number = json['number'];
    performedViaGithubApp = (json['performed_via_github_app'] == null) ?
      null :
      Integration.fromJson(json['performed_via_github_app']);
    pullRequest = (json['pull_request'] == null) ?
      null :
      IssuePullRequest.fromJson(json['pull_request']);
    repository = (json['repository'] == null) ?
      null :
      Repository.fromJson(json['repository']);
    repositoryUrl = json['repository_url'];
    state = json['state'];
    timelineUrl = json['timeline_url'];
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
      json['active_lock_reason'] = activeLockReason;
      json['assignee'] = assignee;
      json['assignees'] = assignees;
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
    if (body != null)
      json['body'] = body;
    if (bodyHtml != null)
      json['body_html'] = bodyHtml;
    if (bodyText != null)
      json['body_text'] = bodyText;
      json['closed_at'] = closedAt == null ? null : closedAt.toUtc().toIso8601String();
    if (comments != null)
      json['comments'] = comments;
    if (commentsUrl != null)
      json['comments_url'] = commentsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (eventsUrl != null)
      json['events_url'] = eventsUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (labels != null)
      json['labels'] = labels;
    if (labelsUrl != null)
      json['labels_url'] = labelsUrl;
    if (locked != null)
      json['locked'] = locked;
      json['milestone'] = milestone;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (number != null)
      json['number'] = number;
      json['performed_via_github_app'] = performedViaGithubApp;
    if (pullRequest != null)
      json['pull_request'] = pullRequest;
    if (repository != null)
      json['repository'] = repository;
    if (repositoryUrl != null)
      json['repository_url'] = repositoryUrl;
    if (state != null)
      json['state'] = state;
    if (timelineUrl != null)
      json['timeline_url'] = timelineUrl;
    if (title != null)
      json['title'] = title;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<IssueSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueSimple>() : json.map((value) => IssueSimple.fromJson(value)).toList();
  }

  static Map<String, IssueSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueSimple-objects as value to a dart map
  static Map<String, List<IssueSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueSimple.listFromJson(value);
       });
     }
     return map;
  }
}

