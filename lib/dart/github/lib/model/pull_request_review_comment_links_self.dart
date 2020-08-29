part of openapi.api;

class PullRequestReviewCommentLinksSelf {
  
  String href = null;

  PullRequestReviewCommentLinksSelf({
    this.href,
  });

  @override
  String toString() {
    return 'PullRequestReviewCommentLinksSelf[href=$href, ]';
  }

  PullRequestReviewCommentLinksSelf.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    href = json['href'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (href != null)
      json['href'] = href;
    return json;
  }

  static List<PullRequestReviewCommentLinksSelf> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewCommentLinksSelf>() : json.map((value) => PullRequestReviewCommentLinksSelf.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewCommentLinksSelf> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewCommentLinksSelf>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewCommentLinksSelf.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewCommentLinksSelf-objects as value to a dart map
  static Map<String, List<PullRequestReviewCommentLinksSelf>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewCommentLinksSelf>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewCommentLinksSelf.listFromJson(value);
       });
     }
     return map;
  }
}

