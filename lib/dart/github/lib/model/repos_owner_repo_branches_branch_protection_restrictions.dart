part of openapi.api;

class ReposOwnerRepoBranchesBranchProtectionRestrictions {
  /* The list of app `slug`s with push access */
  List<String> apps = [];
  /* The list of team `slug`s with push access */
  List<String> teams = [];
  /* The list of user `login`s with push access */
  List<String> users = [];

  ReposOwnerRepoBranchesBranchProtectionRestrictions({
    this.apps,
    this.teams,
    this.users,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoBranchesBranchProtectionRestrictions[apps=$apps, teams=$teams, users=$users, ]';
  }

  ReposOwnerRepoBranchesBranchProtectionRestrictions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    apps = (json['apps'] == null) ?
      null :
      (json['apps'] as List).cast<String>();
    teams = (json['teams'] == null) ?
      null :
      (json['teams'] as List).cast<String>();
    users = (json['users'] == null) ?
      null :
      (json['users'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (apps != null)
      json['apps'] = apps;
    if (teams != null)
      json['teams'] = teams;
    if (users != null)
      json['users'] = users;
    return json;
  }

  static List<ReposOwnerRepoBranchesBranchProtectionRestrictions> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoBranchesBranchProtectionRestrictions>() : json.map((value) => ReposOwnerRepoBranchesBranchProtectionRestrictions.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoBranchesBranchProtectionRestrictions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoBranchesBranchProtectionRestrictions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoBranchesBranchProtectionRestrictions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoBranchesBranchProtectionRestrictions-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoBranchesBranchProtectionRestrictions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoBranchesBranchProtectionRestrictions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoBranchesBranchProtectionRestrictions.listFromJson(value);
       });
     }
     return map;
  }
}

