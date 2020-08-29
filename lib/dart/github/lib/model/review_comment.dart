part of openapi.api;

class ReviewComment {
  
  ReviewCommentLinks links = null;
  
  String authorAssociation = null;
  
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  
  String commitId = null;
  
  DateTime createdAt = null;
  
  String diffHunk = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  int inReplyToId = null;
  /* The line of the blob to which the comment applies. The last line of the range for a multi-line comment */
  int line = null;
  
  String nodeId = null;
  
  String originalCommitId = null;
  /* The original line of the blob to which the comment applies. The last line of the range for a multi-line comment */
  int originalLine = null;
  
  int originalPosition = null;
  /* The original first line of the range for a multi-line comment. */
  int originalStartLine = null;
  
  String path = null;
  
  int position = null;
  
  int pullRequestReviewId = null;
  
  String pullRequestUrl = null;
  /* The side of the first line of the range for a multi-line comment. */
  String side = "RIGHT";
  //enum sideEnum {  LEFT,  RIGHT,  };{
  /* The first line of the range for a multi-line comment. */
  int startLine = null;
  /* The side of the first line of the range for a multi-line comment. */
  String startSide = "RIGHT";
  //enum startSideEnum {  LEFT,  RIGHT,  };{
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  ReviewComment({
    this.links,
    this.authorAssociation,
    this.body,
    this.bodyHtml,
    this.bodyText,
    this.commitId,
    this.createdAt,
    this.diffHunk,
    this.htmlUrl,
    this.id,
    this.inReplyToId,
    this.line,
    this.nodeId,
    this.originalCommitId,
    this.originalLine,
    this.originalPosition,
    this.originalStartLine,
    this.path,
    this.position,
    this.pullRequestReviewId,
    this.pullRequestUrl,
    this.side,
    this.startLine,
    this.startSide,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'ReviewComment[links=$links, authorAssociation=$authorAssociation, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, commitId=$commitId, createdAt=$createdAt, diffHunk=$diffHunk, htmlUrl=$htmlUrl, id=$id, inReplyToId=$inReplyToId, line=$line, nodeId=$nodeId, originalCommitId=$originalCommitId, originalLine=$originalLine, originalPosition=$originalPosition, originalStartLine=$originalStartLine, path=$path, position=$position, pullRequestReviewId=$pullRequestReviewId, pullRequestUrl=$pullRequestUrl, side=$side, startLine=$startLine, startSide=$startSide, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  ReviewComment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      ReviewCommentLinks.fromJson(json['_links']);
    authorAssociation = json['author_association'];
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyText = json['body_text'];
    commitId = json['commit_id'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    diffHunk = json['diff_hunk'];
    htmlUrl = json['html_url'];
    id = json['id'];
    inReplyToId = json['in_reply_to_id'];
    line = json['line'];
    nodeId = json['node_id'];
    originalCommitId = json['original_commit_id'];
    originalLine = json['original_line'];
    originalPosition = json['original_position'];
    originalStartLine = json['original_start_line'];
    path = json['path'];
    position = json['position'];
    pullRequestReviewId = json['pull_request_review_id'];
    pullRequestUrl = json['pull_request_url'];
    side = json['side'];
    startLine = json['start_line'];
    startSide = json['start_side'];
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
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (diffHunk != null)
      json['diff_hunk'] = diffHunk;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (inReplyToId != null)
      json['in_reply_to_id'] = inReplyToId;
    if (line != null)
      json['line'] = line;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (originalCommitId != null)
      json['original_commit_id'] = originalCommitId;
    if (originalLine != null)
      json['original_line'] = originalLine;
    if (originalPosition != null)
      json['original_position'] = originalPosition;
      json['original_start_line'] = originalStartLine;
    if (path != null)
      json['path'] = path;
      json['position'] = position;
      json['pull_request_review_id'] = pullRequestReviewId;
    if (pullRequestUrl != null)
      json['pull_request_url'] = pullRequestUrl;
    if (side != null)
      json['side'] = side;
      json['start_line'] = startLine;
      json['start_side'] = startSide;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<ReviewComment> listFromJson(List<dynamic> json) {
    return json == null ? List<ReviewComment>() : json.map((value) => ReviewComment.fromJson(value)).toList();
  }

  static Map<String, ReviewComment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReviewComment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReviewComment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReviewComment-objects as value to a dart map
  static Map<String, List<ReviewComment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReviewComment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReviewComment.listFromJson(value);
       });
     }
     return map;
  }
}

