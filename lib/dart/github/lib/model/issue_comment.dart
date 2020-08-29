part of openapi.api;

class IssueComment {
  
  String authorAssociation = null;
  /* Contents of the issue comment */
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  
  DateTime createdAt = null;
  
  String htmlUrl = null;
  /* Unique identifier of the issue comment */
  int id = null;
  
  String issueUrl = null;
  
  String nodeId = null;
  
  Integration performedViaGithubApp = null;
  
  ReactionRollup reactions = null;
  
  DateTime updatedAt = null;
  /* URL for the issue comment */
  String url = null;
  
  SimpleUser user = null;

  IssueComment({
    this.authorAssociation,
    this.body,
    this.bodyHtml,
    this.bodyText,
    this.createdAt,
    this.htmlUrl,
    this.id,
    this.issueUrl,
    this.nodeId,
    this.performedViaGithubApp,
    this.reactions,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'IssueComment[authorAssociation=$authorAssociation, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, createdAt=$createdAt, htmlUrl=$htmlUrl, id=$id, issueUrl=$issueUrl, nodeId=$nodeId, performedViaGithubApp=$performedViaGithubApp, reactions=$reactions, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  IssueComment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    authorAssociation = json['author_association'];
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyText = json['body_text'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    htmlUrl = json['html_url'];
    id = json['id'];
    issueUrl = json['issue_url'];
    nodeId = json['node_id'];
    performedViaGithubApp = (json['performed_via_github_app'] == null) ?
      null :
      Integration.fromJson(json['performed_via_github_app']);
    reactions = (json['reactions'] == null) ?
      null :
      ReactionRollup.fromJson(json['reactions']);
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
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
    if (body != null)
      json['body'] = body;
    if (bodyHtml != null)
      json['body_html'] = bodyHtml;
    if (bodyText != null)
      json['body_text'] = bodyText;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (issueUrl != null)
      json['issue_url'] = issueUrl;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['performed_via_github_app'] = performedViaGithubApp;
    if (reactions != null)
      json['reactions'] = reactions;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<IssueComment> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueComment>() : json.map((value) => IssueComment.fromJson(value)).toList();
  }

  static Map<String, IssueComment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueComment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueComment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueComment-objects as value to a dart map
  static Map<String, List<IssueComment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueComment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueComment.listFromJson(value);
       });
     }
     return map;
  }
}

