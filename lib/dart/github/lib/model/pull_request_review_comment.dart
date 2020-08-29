part of openapi.api;

class PullRequestReviewComment {
  
  PullRequestReviewCommentLinks links = null;
  /* How the author of the comment is associated with the pull request. */
  String authorAssociation = null;
  /* The text of the comment. */
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  /* The SHA of the commit to which the comment applies. */
  String commitId = null;
  
  DateTime createdAt = null;
  /* The diff of the line that the comment refers to. */
  String diffHunk = null;
  /* HTML URL for the pull request review comment. */
  String htmlUrl = null;
  /* The ID of the pull request review comment. */
  int id = null;
  /* The comment ID to reply to. */
  int inReplyToId = null;
  /* The line of the blob to which the comment applies. The last line of the range for a multi-line comment */
  int line = null;
  /* The node ID of the pull request review comment. */
  String nodeId = null;
  /* The SHA of the original commit to which the comment applies. */
  String originalCommitId = null;
  /* The line of the blob to which the comment applies. The last line of the range for a multi-line comment */
  int originalLine = null;
  /* The index of the original line in the diff to which the comment applies. */
  int originalPosition = null;
  /* The first line of the range for a multi-line comment. */
  int originalStartLine = null;
  /* The relative path of the file to which the comment applies. */
  String path = null;
  /* The line index in the diff to which the comment applies. */
  int position = null;
  /* The ID of the pull request review to which the comment belongs. */
  int pullRequestReviewId = null;
  /* URL for the pull request that the review comment belongs to. */
  String pullRequestUrl = null;
  
  ReactionRollup reactions = null;
  /* The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment */
  String side = "RIGHT";
  //enum sideEnum {  LEFT,  RIGHT,  };{
  /* The first line of the range for a multi-line comment. */
  int startLine = null;
  /* The side of the first line of the range for a multi-line comment. */
  String startSide = "RIGHT";
  //enum startSideEnum {  LEFT,  RIGHT,  };{
  
  DateTime updatedAt = null;
  /* URL for the pull request review comment */
  String url = null;
  
  SimpleUser user = null;

  PullRequestReviewComment({
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
    this.reactions,
    this.side,
    this.startLine,
    this.startSide,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'PullRequestReviewComment[links=$links, authorAssociation=$authorAssociation, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, commitId=$commitId, createdAt=$createdAt, diffHunk=$diffHunk, htmlUrl=$htmlUrl, id=$id, inReplyToId=$inReplyToId, line=$line, nodeId=$nodeId, originalCommitId=$originalCommitId, originalLine=$originalLine, originalPosition=$originalPosition, originalStartLine=$originalStartLine, path=$path, position=$position, pullRequestReviewId=$pullRequestReviewId, pullRequestUrl=$pullRequestUrl, reactions=$reactions, side=$side, startLine=$startLine, startSide=$startSide, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  PullRequestReviewComment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      PullRequestReviewCommentLinks.fromJson(json['_links']);
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
    reactions = (json['reactions'] == null) ?
      null :
      ReactionRollup.fromJson(json['reactions']);
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
    if (position != null)
      json['position'] = position;
      json['pull_request_review_id'] = pullRequestReviewId;
    if (pullRequestUrl != null)
      json['pull_request_url'] = pullRequestUrl;
    if (reactions != null)
      json['reactions'] = reactions;
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

  static List<PullRequestReviewComment> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewComment>() : json.map((value) => PullRequestReviewComment.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewComment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewComment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewComment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewComment-objects as value to a dart map
  static Map<String, List<PullRequestReviewComment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewComment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewComment.listFromJson(value);
       });
     }
     return map;
  }
}

