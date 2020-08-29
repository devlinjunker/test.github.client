part of openapi.api;

class ReposOwnerRepoPullsPullNumberReviewsComments {
  /* Text of the review comment. */
  String body = null;
  
  int line = null;
  /* The relative path to the file that necessitates a review comment. */
  String path = null;
  /* The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below. */
  int position = null;
  
  String side = null;
  
  int startLine = null;
  
  String startSide = null;

  ReposOwnerRepoPullsPullNumberReviewsComments({
    this.body,
    this.line,
    this.path,
    this.position,
    this.side,
    this.startLine,
    this.startSide,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoPullsPullNumberReviewsComments[body=$body, line=$line, path=$path, position=$position, side=$side, startLine=$startLine, startSide=$startSide, ]';
  }

  ReposOwnerRepoPullsPullNumberReviewsComments.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
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

  static List<ReposOwnerRepoPullsPullNumberReviewsComments> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoPullsPullNumberReviewsComments>() : json.map((value) => ReposOwnerRepoPullsPullNumberReviewsComments.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoPullsPullNumberReviewsComments> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoPullsPullNumberReviewsComments>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoPullsPullNumberReviewsComments.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoPullsPullNumberReviewsComments-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoPullsPullNumberReviewsComments>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoPullsPullNumberReviewsComments>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoPullsPullNumberReviewsComments.listFromJson(value);
       });
     }
     return map;
  }
}

