part of openapi.api;

class PullRequestReviewCommentLinksHtml {
  
  String href = null;

  PullRequestReviewCommentLinksHtml({
    this.href,
  });

  @override
  String toString() {
    return 'PullRequestReviewCommentLinksHtml[href=$href, ]';
  }

  PullRequestReviewCommentLinksHtml.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    href = json['href'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (href != null)
      json['href'] = href;
    return json;
  }

  static List<PullRequestReviewCommentLinksHtml> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewCommentLinksHtml>() : json.map((value) => PullRequestReviewCommentLinksHtml.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewCommentLinksHtml> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewCommentLinksHtml>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewCommentLinksHtml.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewCommentLinksHtml-objects as value to a dart map
  static Map<String, List<PullRequestReviewCommentLinksHtml>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewCommentLinksHtml>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewCommentLinksHtml.listFromJson(value);
       });
     }
     return map;
  }
}

