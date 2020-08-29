part of openapi.api;

class ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions {
  /* The list of team `slug`s with dismissal access */
  List<String> teams = [];
  /* The list of user `login`s with dismissal access */
  List<String> users = [];

  ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions({
    this.teams,
    this.users,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions[teams=$teams, users=$users, ]';
  }

  ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    teams = (json['teams'] == null) ?
      null :
      (json['teams'] as List).cast<String>();
    users = (json['users'] == null) ?
      null :
      (json['users'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (teams != null)
      json['teams'] = teams;
    if (users != null)
      json['users'] = users;
    return json;
  }

  static List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions>() : json.map((value) => ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.listFromJson(value);
       });
     }
     return map;
  }
}

