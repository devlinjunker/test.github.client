part of openapi.api;

class TeamDiscussion {
  
  SimpleUser author = null;
  /* The main text of the discussion. */
  String body = null;
  
  String bodyHtml = null;
  /* The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server. */
  String bodyVersion = null;
  
  int commentsCount = null;
  
  String commentsUrl = null;
  
  DateTime createdAt = null;
  
  String htmlUrl = null;
  
  DateTime lastEditedAt = null;
  
  String nodeId = null;
  /* The unique sequence number of a team discussion. */
  int number = null;
  /* Whether or not this discussion should be pinned for easy retrieval. */
  bool pinned = null;
  /* Whether or not this discussion should be restricted to team members and organization administrators. */
  bool private = null;
  
  ReactionRollup reactions = null;
  
  String teamUrl = null;
  /* The title of the discussion. */
  String title = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  TeamDiscussion({
    this.author,
    this.body,
    this.bodyHtml,
    this.bodyVersion,
    this.commentsCount,
    this.commentsUrl,
    this.createdAt,
    this.htmlUrl,
    this.lastEditedAt,
    this.nodeId,
    this.number,
    this.pinned,
    this.private,
    this.reactions,
    this.teamUrl,
    this.title,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'TeamDiscussion[author=$author, body=$body, bodyHtml=$bodyHtml, bodyVersion=$bodyVersion, commentsCount=$commentsCount, commentsUrl=$commentsUrl, createdAt=$createdAt, htmlUrl=$htmlUrl, lastEditedAt=$lastEditedAt, nodeId=$nodeId, number=$number, pinned=$pinned, private=$private, reactions=$reactions, teamUrl=$teamUrl, title=$title, updatedAt=$updatedAt, url=$url, ]';
  }

  TeamDiscussion.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      SimpleUser.fromJson(json['author']);
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyVersion = json['body_version'];
    commentsCount = json['comments_count'];
    commentsUrl = json['comments_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    htmlUrl = json['html_url'];
    lastEditedAt = (json['last_edited_at'] == null) ?
      null :
      DateTime.parse(json['last_edited_at']);
    nodeId = json['node_id'];
    number = json['number'];
    pinned = json['pinned'];
    private = json['private'];
    reactions = (json['reactions'] == null) ?
      null :
      ReactionRollup.fromJson(json['reactions']);
    teamUrl = json['team_url'];
    title = json['title'];
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
    if (commentsCount != null)
      json['comments_count'] = commentsCount;
    if (commentsUrl != null)
      json['comments_url'] = commentsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
      json['last_edited_at'] = lastEditedAt == null ? null : lastEditedAt.toUtc().toIso8601String();
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (number != null)
      json['number'] = number;
    if (pinned != null)
      json['pinned'] = pinned;
    if (private != null)
      json['private'] = private;
    if (reactions != null)
      json['reactions'] = reactions;
    if (teamUrl != null)
      json['team_url'] = teamUrl;
    if (title != null)
      json['title'] = title;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<TeamDiscussion> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamDiscussion>() : json.map((value) => TeamDiscussion.fromJson(value)).toList();
  }

  static Map<String, TeamDiscussion> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamDiscussion>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamDiscussion.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamDiscussion-objects as value to a dart map
  static Map<String, List<TeamDiscussion>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamDiscussion>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamDiscussion.listFromJson(value);
       });
     }
     return map;
  }
}

