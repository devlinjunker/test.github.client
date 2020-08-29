part of openapi.api;

class InlineObject105 {
  /* The text of the review comment. */
  String body = null;
  /* The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`. */
  String commitId = null;
  
  int inReplyTo = null;
  /* **Required with `comfort-fade` preview**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to. */
  int line = null;
  /* The relative path to the file that necessitates a comment. */
  String path = null;
  /* **Required without `comfort-fade` preview**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above. */
  int position = null;
  /* **Required with `comfort-fade` preview**. In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see \"[Diff view options](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)\" in the GitHub Help documentation. */
  String side = null;
  //enum sideEnum {  LEFT,  RIGHT,  };{
  /* **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see \"[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation. */
  int startLine = null;
  /* **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see \"[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation. See `side` in this table for additional context. */
  String startSide = null;
  //enum startSideEnum {  LEFT,  RIGHT,  side,  };{

  InlineObject105({
    this.body,
    this.commitId,
    this.inReplyTo,
    this.line,
    this.path,
    this.position,
    this.side,
    this.startLine,
    this.startSide,
  });

  @override
  String toString() {
    return 'InlineObject105[body=$body, commitId=$commitId, inReplyTo=$inReplyTo, line=$line, path=$path, position=$position, side=$side, startLine=$startLine, startSide=$startSide, ]';
  }

  InlineObject105.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    commitId = json['commit_id'];
    inReplyTo = json['in_reply_to'];
    line = json['line'];
    path = json['path'];
    position = json['position'];
    side = json['side'];
    startLine = json['start_line'];
    startSide = json['start_side'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (commitId != null)
      json['commit_id'] = commitId;
    if (inReplyTo != null)
      json['in_reply_to'] = inReplyTo;
    if (line != null)
      json['line'] = line;
    if (path != null)
      json['path'] = path;
    if (position != null)
      json['position'] = position;
    if (side != null)
      json['side'] = side;
    if (startLine != null)
      json['start_line'] = startLine;
    if (startSide != null)
      json['start_side'] = startSide;
    return json;
  }

  static List<InlineObject105> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject105>() : json.map((value) => InlineObject105.fromJson(value)).toList();
  }

  static Map<String, InlineObject105> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject105>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject105.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject105-objects as value to a dart map
  static Map<String, List<InlineObject105>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject105>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject105.listFromJson(value);
       });
     }
     return map;
  }
}

