part of openapi.api;

class TeamDiscussionComment {
  
  SimpleUser author = null;
  /* The main text of the comment. */
  String body = null;
  
  String bodyHtml = null;
  /* The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server. */
  String bodyVersion = null;
  
  DateTime createdAt = null;
  
  String discussionUrl = null;
  
  String htmlUrl = null;
  
  DateTime lastEditedAt = null;
  
  String nodeId = null;
  /* The unique sequence number of a team discussion comment. */
  int number = null;
  
  ReactionRollup reactions = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  TeamDiscussionComment({
    this.author,
    this.body,
    this.bodyHtml,
    this.bodyVersion,
    this.createdAt,
    this.discussionUrl,
    this.htmlUrl,
    this.lastEditedAt,
    this.nodeId,
    this.number,
    this.reactions,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'TeamDiscussionComment[author=$author, body=$body, bodyHtml=$bodyHtml, bodyVersion=$bodyVersion, createdAt=$createdAt, discussionUrl=$discussionUrl, htmlUrl=$htmlUrl, lastEditedAt=$lastEditedAt, nodeId=$nodeId, number=$number, reactions=$reactions, updatedAt=$updatedAt, url=$url, ]';
  }

  TeamDiscussionComment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      SimpleUser.fromJson(json['author']);
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyVersion = json['body_version'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    discussionUrl = json['discussion_url'];
    htmlUrl = json['html_url'];
    lastEditedAt = (json['last_edited_at'] == null) ?
      null :
      DateTime.parse(json['last_edited_at']);
    nodeId = json['node_id'];
    number = json['number'];
    reactions = (json['reactions'] == null) ?
      null :
      ReactionRollup.fromJson(json['reactions']);
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['author'] = author;
    if (body != null)
      json['body'] = body;
    if (bodyHtml != null)
      json['body_html'] = bodyHtml;
    if (bodyVersion != null)
      json['body_version'] = bodyVersion;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (discussionUrl != null)
      json['discussion_url'] = discussionUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
      json['last_edited_at'] = lastEditedAt == null ? null : lastEditedAt.toUtc().toIso8601String();
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (number != null)
      json['number'] = number;
    if (reactions != null)
      json['reactions'] = reactions;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<TeamDiscussionComment> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamDiscussionComment>() : json.map((value) => TeamDiscussionComment.fromJson(value)).toList();
  }

  static Map<String, TeamDiscussionComment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamDiscussionComment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamDiscussionComment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamDiscussionComment-objects as value to a dart map
  static Map<String, List<TeamDiscussionComment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamDiscussionComment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamDiscussionComment.listFromJson(value);
       });
     }
     return map;
  }
}

