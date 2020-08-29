part of openapi.api;

class IssueEventForIssue {
  
  SimpleUser actor = null;
  
  String authorAssociation = null;
  
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  
  String commitId = null;
  
  String commitUrl = null;
  
  String createdAt = null;
  
  String event = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String issueUrl = null;
  
  String lockReason = null;
  
  String message = null;
  
  String nodeId = null;
  
  String pullRequestUrl = null;
  
  String sha = null;
  
  String state = null;
  
  String submittedAt = null;
  
  String updatedAt = null;
  
  String url = null;

  IssueEventForIssue({
    this.actor,
    this.authorAssociation,
    this.body,
    this.bodyHtml,
    this.bodyText,
    this.commitId,
    this.commitUrl,
    this.createdAt,
    this.event,
    this.htmlUrl,
    this.id,
    this.issueUrl,
    this.lockReason,
    this.message,
    this.nodeId,
    this.pullRequestUrl,
    this.sha,
    this.state,
    this.submittedAt,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'IssueEventForIssue[actor=$actor, authorAssociation=$authorAssociation, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, commitId=$commitId, commitUrl=$commitUrl, createdAt=$createdAt, event=$event, htmlUrl=$htmlUrl, id=$id, issueUrl=$issueUrl, lockReason=$lockReason, message=$message, nodeId=$nodeId, pullRequestUrl=$pullRequestUrl, sha=$sha, state=$state, submittedAt=$submittedAt, updatedAt=$updatedAt, url=$url, ]';
  }

  IssueEventForIssue.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    actor = (json['actor'] == null) ?
      null :
      SimpleUser.fromJson(json['actor']);
    authorAssociation = json['author_association'];
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyText = json['body_text'];
    commitId = json['commit_id'];
    commitUrl = json['commit_url'];
    createdAt = json['created_at'];
    event = json['event'];
    htmlUrl = json['html_url'];
    id = json['id'];
    issueUrl = json['issue_url'];
    lockReason = json['lock_reason'];
    message = json['message'];
    nodeId = json['node_id'];
    pullRequestUrl = json['pull_request_url'];
    sha = json['sha'];
    state = json['state'];
    submittedAt = json['submitted_at'];
    updatedAt = json['updated_at'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['actor'] = actor;
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
    if (body != null)
      json['body'] = body;
    if (bodyHtml != null)
      json['body_html'] = bodyHtml;
    if (bodyText != null)
      json['body_text'] = bodyText;
      json['commit_id'] = commitId;
      json['commit_url'] = commitUrl;
    if (createdAt != null)
      json['created_at'] = createdAt;
    if (event != null)
      json['event'] = event;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (issueUrl != null)
      json['issue_url'] = issueUrl;
    if (lockReason != null)
      json['lock_reason'] = lockReason;
    if (message != null)
      json['message'] = message;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (pullRequestUrl != null)
      json['pull_request_url'] = pullRequestUrl;
    if (sha != null)
      json['sha'] = sha;
    if (state != null)
      json['state'] = state;
    if (submittedAt != null)
      json['submitted_at'] = submittedAt;
    if (updatedAt != null)
      json['updated_at'] = updatedAt;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<IssueEventForIssue> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueEventForIssue>() : json.map((value) => IssueEventForIssue.fromJson(value)).toList();
  }

  static Map<String, IssueEventForIssue> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueEventForIssue>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueEventForIssue.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueEventForIssue-objects as value to a dart map
  static Map<String, List<IssueEventForIssue>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueEventForIssue>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueEventForIssue.listFromJson(value);
       });
     }
     return map;
  }
}

