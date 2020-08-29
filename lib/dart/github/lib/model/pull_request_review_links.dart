part of openapi.api;

class PullRequestReviewLinks {
  
  PullRequestReviewLinksHtml html = null;
  
  PullRequestReviewLinksHtml pullRequest = null;

  PullRequestReviewLinks({
    this.html,
    this.pullRequest,
  });

  @override
  String toString() {
    return 'PullRequestReviewLinks[html=$html, pullRequest=$pullRequest, ]';
  }

  PullRequestReviewLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    html = (json['html'] == null) ?
      null :
      PullRequestReviewLinksHtml.fromJson(json['html']);
    pullRequest = (json['pull_request'] == null) ?
      null :
      PullRequestReviewLinksHtml.fromJson(json['pull_request']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (html != null)
      json['html'] = html;
    if (pullRequest != null)
      json['pull_request'] = pullRequest;
    return json;
  }

  static List<PullRequestReviewLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewLinks>() : json.map((value) => PullRequestReviewLinks.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewLinks-objects as value to a dart map
  static Map<String, List<PullRequestReviewLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewLinks.listFromJson(value);
       });
     }
     return map;
  }
}

