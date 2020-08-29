part of openapi.api;

class InlineObject108 {
  /* An array of user `login`s that will be requested. */
  List<String> reviewers = [];
  /* An array of team `slug`s that will be requested. */
  List<String> teamReviewers = [];

  InlineObject108({
    this.reviewers,
    this.teamReviewers,
  });

  @override
  String toString() {
    return 'InlineObject108[reviewers=$reviewers, teamReviewers=$teamReviewers, ]';
  }

  InlineObject108.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject108> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject108>() : json.map((value) => InlineObject108.fromJson(value)).toList();
  }

  static Map<String, InlineObject108> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject108>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject108.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject108-objects as value to a dart map
  static Map<String, List<InlineObject108>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject108>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject108.listFromJson(value);
       });
     }
     return map;
  }
}

