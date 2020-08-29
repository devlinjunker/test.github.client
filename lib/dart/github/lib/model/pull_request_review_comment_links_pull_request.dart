part of openapi.api;

class PullRequestReviewCommentLinksPullRequest {
  
  String href = null;

  PullRequestReviewCommentLinksPullRequest({
    this.href,
  });

  @override
  String toString() {
    return 'PullRequestReviewCommentLinksPullRequest[href=$href, ]';
  }

  PullRequestReviewCommentLinksPullRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    href = json['href'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (href != null)
      json['href'] = href;
    return json;
  }

  static List<PullRequestReviewCommentLinksPullRequest> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewCommentLinksPullRequest>() : json.map((value) => PullRequestReviewCommentLinksPullRequest.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewCommentLinksPullRequest> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewCommentLinksPullRequest>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewCommentLinksPullRequest.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewCommentLinksPullRequest-objects as value to a dart map
  static Map<String, List<PullRequestReviewCommentLinksPullRequest>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewCommentLinksPullRequest>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewCommentLinksPullRequest.listFromJson(value);
       });
     }
     return map;
  }
}

