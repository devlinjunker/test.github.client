part of openapi.api;

class PullRequestReviewRequest {
  
  List<BranchRestrictionPolicyTeams> teams = [];
  
  List<BranchRestrictionPolicyUsers> users = [];

  PullRequestReviewRequest({
    this.teams,
    this.users,
  });

  @override
  String toString() {
    return 'PullRequestReviewRequest[teams=$teams, users=$users, ]';
  }

  PullRequestReviewRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    teams = (json['teams'] == null) ?
      null :
      BranchRestrictionPolicyTeams.listFromJson(json['teams']);
    users = (json['users'] == null) ?
      null :
      BranchRestrictionPolicyUsers.listFromJson(json['users']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (teams != null)
      json['teams'] = teams;
    if (users != null)
      json['users'] = users;
    return json;
  }

  static List<PullRequestReviewRequest> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestReviewRequest>() : json.map((value) => PullRequestReviewRequest.fromJson(value)).toList();
  }

  static Map<String, PullRequestReviewRequest> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestReviewRequest>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestReviewRequest.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestReviewRequest-objects as value to a dart map
  static Map<String, List<PullRequestReviewRequest>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestReviewRequest>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestReviewRequest.listFromJson(value);
       });
     }
     return map;
  }
}

