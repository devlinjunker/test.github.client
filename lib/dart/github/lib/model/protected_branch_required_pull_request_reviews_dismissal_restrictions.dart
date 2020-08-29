part of openapi.api;

class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions {
  
  List<Team> teams = [];
  
  String teamsUrl = null;
  
  String url = null;
  
  List<SimpleUser> users = [];
  
  String usersUrl = null;

  ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions({
    this.teams,
    this.teamsUrl,
    this.url,
    this.users,
    this.usersUrl,
  });

  @override
  String toString() {
    return 'ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions[teams=$teams, teamsUrl=$teamsUrl, url=$url, users=$users, usersUrl=$usersUrl, ]';
  }

  ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    teams = (json['teams'] == null) ?
      null :
      Team.listFromJson(json['teams']);
    teamsUrl = json['teams_url'];
    url = json['url'];
    users = (json['users'] == null) ?
      null :
      SimpleUser.listFromJson(json['users']);
    usersUrl = json['users_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (teams != null)
      json['teams'] = teams;
    if (teamsUrl != null)
      json['teams_url'] = teamsUrl;
    if (url != null)
      json['url'] = url;
    if (users != null)
      json['users'] = users;
    if (usersUrl != null)
      json['users_url'] = usersUrl;
    return json;
  }

  static List<ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions>() : json.map((value) => ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions-objects as value to a dart map
  static Map<String, List<ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions.listFromJson(value);
       });
     }
     return map;
  }
}

