part of openapi.api;

class ReviewCommentLinks {
  
  Link html = null;
  
  Link pullRequest = null;
  
  Link self = null;

  ReviewCommentLinks({
    this.html,
    this.pullRequest,
    this.self,
  });

  @override
  String toString() {
    return 'ReviewCommentLinks[html=$html, pullRequest=$pullRequest, self=$self, ]';
  }

  ReviewCommentLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    html = (json['html'] == null) ?
      null :
      Link.fromJson(json['html']);
    pullRequest = (json['pull_request'] == null) ?
      null :
      Link.fromJson(json['pull_request']);
    self = (json['self'] == null) ?
      null :
      Link.fromJson(json['self']);
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

  static List<ReviewCommentLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<ReviewCommentLinks>() : json.map((value) => ReviewCommentLinks.fromJson(value)).toList();
  }

  static Map<String, ReviewCommentLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReviewCommentLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReviewCommentLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReviewCommentLinks-objects as value to a dart map
  static Map<String, List<ReviewCommentLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReviewCommentLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReviewCommentLinks.listFromJson(value);
       });
     }
     return map;
  }
}

