part of openapi.api;

class PullRequestLinks {
  
  Link comments = null;
  
  Link commits = null;
  
  Link html = null;
  
  Link issue = null;
  
  Link reviewComment = null;
  
  Link reviewComments = null;
  
  Link self = null;
  
  Link statuses = null;

  PullRequestLinks({
    this.comments,
    this.commits,
    this.html,
    this.issue,
    this.reviewComment,
    this.reviewComments,
    this.self,
    this.statuses,
  });

  @override
  String toString() {
    return 'PullRequestLinks[comments=$comments, commits=$commits, html=$html, issue=$issue, reviewComment=$reviewComment, reviewComments=$reviewComments, self=$self, statuses=$statuses, ]';
  }

  PullRequestLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    comments = (json['comments'] == null) ?
      null :
      Link.fromJson(json['comments']);
    commits = (json['commits'] == null) ?
      null :
      Link.fromJson(json['commits']);
    html = (json['html'] == null) ?
      null :
      Link.fromJson(json['html']);
    issue = (json['issue'] == null) ?
      null :
      Link.fromJson(json['issue']);
    reviewComment = (json['review_comment'] == null) ?
      null :
      Link.fromJson(json['review_comment']);
    reviewComments = (json['review_comments'] == null) ?
      null :
      Link.fromJson(json['review_comments']);
    self = (json['self'] == null) ?
      null :
      Link.fromJson(json['self']);
    statuses = (json['statuses'] == null) ?
      null :
      Link.fromJson(json['statuses']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (comments != null)
      json['comments'] = comments;
    if (commits != null)
      json['commits'] = commits;
    if (html != null)
      json['html'] = html;
    if (issue != null)
      json['issue'] = issue;
    if (reviewComment != null)
      json['review_comment'] = reviewComment;
    if (reviewComments != null)
      json['review_comments'] = reviewComments;
    if (self != null)
      json['self'] = self;
    if (statuses != null)
      json['statuses'] = statuses;
    return json;
  }

  static List<PullRequestLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestLinks>() : json.map((value) => PullRequestLinks.fromJson(value)).toList();
  }

  static Map<String, PullRequestLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestLinks-objects as value to a dart map
  static Map<String, List<PullRequestLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestLinks.listFromJson(value);
       });
     }
     return map;
  }
}

