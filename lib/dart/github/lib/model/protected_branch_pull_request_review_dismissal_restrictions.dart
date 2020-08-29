part of openapi.api;

class ProtectedBranchPullRequestReviewDismissalRestrictions {
  /* The list of teams with review dismissal access. */
  List<Team> teams = [];
  
  String teamsUrl = null;
  
  String url = null;
  /* The list of users with review dismissal access. */
  List<SimpleUser> users = [];
  
  String usersUrl = null;

  ProtectedBranchPullRequestReviewDismissalRestrictions({
    this.teams,
    this.teamsUrl,
    this.url,
    this.users,
    this.usersUrl,
  });

  @override
  String toString() {
    return 'ProtectedBranchPullRequestReviewDismissalRestrictions[teams=$teams, teamsUrl=$teamsUrl, url=$url, users=$users, usersUrl=$usersUrl, ]';
  }

  ProtectedBranchPullRequestReviewDismissalRestrictions.fromJson(Map<String, dynamic> json) {
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

  static List<ProtectedBranchPullRequestReviewDismissalRestrictions> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchPullRequestReviewDismissalRestrictions>() : json.map((value) => ProtectedBranchPullRequestReviewDismissalRestrictions.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchPullRequestReviewDismissalRestrictions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchPullRequestReviewDismissalRestrictions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchPullRequestReviewDismissalRestrictions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchPullRequestReviewDismissalRestrictions-objects as value to a dart map
  static Map<String, List<ProtectedBranchPullRequestReviewDismissalRestrictions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchPullRequestReviewDismissalRestrictions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchPullRequestReviewDismissalRestrictions.listFromJson(value);
       });
     }
     return map;
  }
}

