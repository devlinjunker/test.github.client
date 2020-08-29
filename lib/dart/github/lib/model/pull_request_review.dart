part of openapi.api;

class PullRequestReview {
  
  PullRequestReviewLinks links = null;
  
  String authorAssociation = null;
  /* The text of the review. */
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  /* A commit SHA for the review. */
  String commitId = null;
  
  String htmlUrl = null;
  /* Unique identifier of the review */
  int id = null;
  
  String nodeId = null;
  
  String pullRequestUrl = null;
  
  String state = null;
  
  DateTime submittedAt = null;
  
  SimpleUser user = null;

  PullRequestReview({
    this.links,
    this.authorAssociation,
    this.body,
    this.bodyHtml,
    this.bodyText,
    this.commitId,
    this.htmlUrl,
    this.id,
    this.nodeId,
    this.pullRequestUrl,
    this.state,
    this.submittedAt,
    this.user,
  });

  @override
  String toString() {
    return 'PullRequestReview[links=$links, authorAssociation=$authorAssociation, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, commitId=$commitId, htmlUrl=$htmlUrl, id=$id, nodeId=$nodeId, pullRequestUrl=$pullRequestUrl, state=$state, submittedAt=$submittedAt, user=$user, ]';
  }

  PullRequestReview.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      PullRequestReviewLinks.fromJson(json['_links']);
    authorAssociation = json['author_association'];
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyText = json['body_text'];
    commitId = json['commit_id'];
    htmlUrl = json['html_url'];
    id = json['id'];
    nodeId = json['node_id'];
    pullRequestUrl = json['pull_request_url'];
    state = json['state'];
    submittedAt = (json['submitted_at'] == null) ?
      null :
      DateTime.parse(json['submitted_at']);
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (links != null)
      json['_links'] = links;
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
    if (body != null)
      json['body'] = body;
    if (bodyHtml != null)
      json['body_html'] = bodyHtml;
    if (bodyText != null)
      json['body_text'] = bodyText;
    if (commitId != null)
      json['commit_id'] = commitId;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (pullRequestUrl != null)
      json['pull_request_url'] = pullRequestUrl;
    if (state != null)
      json['state'] = state;
    if (submittedAt != null)
      json['submitted_at'] = submittedAt == null ? null : submittedAt.toUtc().toIso8601String();
      json['user'] = user;
    return json;
  }

  static List<PullRequestReview> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReview>() : json.map((value) => PullRequestReview.fromJson(value)).toList();
  }

  static Map<String, PullRequestReview> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReview>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReview.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReview-objects as value to a dart map
  static Map<String, List<PullRequestReview>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReview>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReview.listFromJson(value);
       });
     }
     return map;
  }
}

