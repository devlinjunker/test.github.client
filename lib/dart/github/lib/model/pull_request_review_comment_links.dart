part of openapi.api;

class PullRequestReviewCommentLinks {
  
  PullRequestReviewCommentLinksHtml html = null;
  
  PullRequestReviewCommentLinksPullRequest pullRequest = null;
  
  PullRequestReviewCommentLinksSelf self = null;

  PullRequestReviewCommentLinks({
    this.html,
    this.pullRequest,
    this.self,
  });

  @override
  String toString() {
    return 'PullRequestReviewCommentLinks[html=$html, pullRequest=$pullRequest, self=$self, ]';
  }

  PullRequestReviewCommentLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    html = (json['html'] == null) ?
      null :
      PullRequestReviewCommentLinksHtml.fromJson(json['html']);
    pullRequest = (json['pull_request'] == null) ?
      null :
      PullRequestReviewCommentLinksPullRequest.fromJson(json['pull_request']);
    self = (json['self'] == null) ?
      null :
      PullRequestReviewCommentLinksSelf.fromJson(json['self']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (html != null)
      json['html'] = html;
    if (pullRequest != null)
      json['pull_request'] = pullRequest;
    if (self != null)
      json['self'] = self;
    return json;
  }

  static List<PullRequestReviewCommentLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewCommentLinks>() : json.map((value) => PullRequestReviewCommentLinks.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewCommentLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewCommentLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewCommentLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewCommentLinks-objects as value to a dart map
  static Map<String, List<PullRequestReviewCommentLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewCommentLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewCommentLinks.listFromJson(value);
       });
     }
     return map;
  }
}

