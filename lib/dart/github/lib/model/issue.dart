part of openapi.api;

class Issue {
  
  String activeLockReason = null;
  
  SimpleUser assignee = null;
  
  List<SimpleUser> assignees = [];
  
  String authorAssociation = null;
  /* Contents of the issue */
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  
  DateTime closedAt = null;
  
  SimpleUser closedBy = null;
  
  int comments = null;
  
  String commentsUrl = null;
  
  DateTime createdAt = null;
  
  String eventsUrl = null;
  
  String htmlUrl = null;
  
  int id = null;
  /* Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository */
  List<OneOf<string,object>> labels = [];
  
  String labelsUrl = null;
  
  bool locked = null;
  
  Milestone milestone = null;
  
  String nodeId = null;
  /* Number uniquely identifying the issue within its repository */
  int number = null;
  
  Integration performedViaGithubApp = null;
  
  IssuePullRequest pullRequest = null;
  
  ReactionRollup reactions = null;
  
  Repository repository = null;
  
  String repositoryUrl = null;
  /* State of the issue; either 'open' or 'closed' */
  String state = null;
  
  String timelineUrl = null;
  /* Title of the issue */
  String title = null;
  
  DateTime updatedAt = null;
  /* URL for the issue */
  String url = null;
  
  SimpleUser user = null;

  Issue({
    this.activeLockReason,
    this.assignee,
    this.assignees,
    this.authorAssociation,
    this.body,
    this.bodyHtml,
    this.bodyText,
    this.closedAt,
    this.closedBy,
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
    this.reactions,
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
    return 'Issue[activeLockReason=$activeLockReason, assignee=$assignee, assignees=$assignees, authorAssociation=$authorAssociation, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, closedAt=$closedAt, closedBy=$closedBy, comments=$comments, commentsUrl=$commentsUrl, createdAt=$createdAt, eventsUrl=$eventsUrl, htmlUrl=$htmlUrl, id=$id, labels=$labels, labelsUrl=$labelsUrl, locked=$locked, milestone=$milestone, nodeId=$nodeId, number=$number, performedViaGithubApp=$performedViaGithubApp, pullRequest=$pullRequest, reactions=$reactions, repository=$repository, repositoryUrl=$repositoryUrl, state=$state, timelineUrl=$timelineUrl, title=$title, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  Issue.fromJson(Map<String, dynamic> json) {
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
    closedBy = (json['closed_by'] == null) ?
      null :
      SimpleUser.fromJson(json['closed_by']);
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
      OneOf&lt;string,object&gt;.listFromJson(json['labels']);
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
    reactions = (json['reactions'] == null) ?
      null :
      ReactionRollup.fromJson(json['reactions']);
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
      json['closed_by'] = closedBy;
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
    if (reactions != null)
      json['reactions'] = reactions;
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

  static List<Issue> listFromJson(List<dynamic> json) {
    return json == null ? List<Issue>() : json.map((value) => Issue.fromJson(value)).toList();
  }

  static Map<String, Issue> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Issue>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Issue.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Issue-objects as value to a dart map
  static Map<String, List<Issue>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Issue>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Issue.listFromJson(value);
       });
     }
     return map;
  }
}

