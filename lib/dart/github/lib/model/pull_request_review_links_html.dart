part of openapi.api;

class PullRequestReviewLinksHtml {
  
  String href = null;

  PullRequestReviewLinksHtml({
    this.href,
  });

  @override
  String toString() {
    return 'PullRequestReviewLinksHtml[href=$href, ]';
  }

  PullRequestReviewLinksHtml.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    href = json['href'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (href != null)
      json['href'] = href;
    return json;
  }

  static List<PullRequestReviewLinksHtml> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewLinksHtml>() : json.map((value) => PullRequestReviewLinksHtml.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewLinksHtml> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewLinksHtml>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewLinksHtml.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewLinksHtml-objects as value to a dart map
  static Map<String, List<PullRequestReviewLinksHtml>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewLinksHtml>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewLinksHtml.listFromJson(value);
       });
     }
     return map;
  }
}

