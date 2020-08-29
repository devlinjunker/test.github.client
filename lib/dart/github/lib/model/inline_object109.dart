part of openapi.api;

class InlineObject109 {
  /* An array of user `login`s that will be removed. */
  List<String> reviewers = [];
  /* An array of team `slug`s that will be removed. */
  List<String> teamReviewers = [];

  InlineObject109({
    this.reviewers,
    this.teamReviewers,
  });

  @override
  String toString() {
    return 'InlineObject109[reviewers=$reviewers, teamReviewers=$teamReviewers, ]';
  }

  InlineObject109.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    reviewers = (json['reviewers'] == null) ?
      null :
      (json['reviewers'] as List).cast<String>();
    teamReviewers = (json['team_reviewers'] == null) ?
      null :
      (json['team_reviewers'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (reviewers != null)
      json['reviewers'] = reviewers;
    if (teamReviewers != null)
      json['team_reviewers'] = teamReviewers;
    return json;
  }

  static List<InlineObject109> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject109>() : json.map((value) => InlineObject109.fromJson(value)).toList();
  }

  static Map<String, InlineObject109> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject109>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject109.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject109-objects as value to a dart map
  static Map<String, List<InlineObject109>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject109>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject109.listFromJson(value);
       });
     }
     return map;
  }
}

