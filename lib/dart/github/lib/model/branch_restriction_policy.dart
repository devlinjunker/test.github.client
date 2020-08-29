part of openapi.api;

class BranchRestrictionPolicy {
  
  List<BranchRestrictionPolicyApps> apps = [];
  
  String appsUrl = null;
  
  List<BranchRestrictionPolicyTeams> teams = [];
  
  String teamsUrl = null;
  
  String url = null;
  
  List<BranchRestrictionPolicyUsers> users = [];
  
  String usersUrl = null;

  BranchRestrictionPolicy({
    this.apps,
    this.appsUrl,
    this.teams,
    this.teamsUrl,
    this.url,
    this.users,
    this.usersUrl,
  });

  @override
  String toString() {
    return 'BranchRestrictionPolicy[apps=$apps, appsUrl=$appsUrl, teams=$teams, teamsUrl=$teamsUrl, url=$url, users=$users, usersUrl=$usersUrl, ]';
  }

  BranchRestrictionPolicy.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    apps = (json['apps'] == null) ?
      null :
      BranchRestrictionPolicyApps.listFromJson(json['apps']);
    appsUrl = json['apps_url'];
    teams = (json['teams'] == null) ?
      null :
      BranchRestrictionPolicyTeams.listFromJson(json['teams']);
    teamsUrl = json['teams_url'];
    url = json['url'];
    users = (json['users'] == null) ?
      null :
      BranchRestrictionPolicyUsers.listFromJson(json['users']);
    usersUrl = json['users_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (apps != null)
      json['apps'] = apps;
    if (appsUrl != null)
      json['apps_url'] = appsUrl;
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

  static List<BranchRestrictionPolicy> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchRestrictionPolicy>() : json.map((value) => BranchRestrictionPolicy.fromJson(value)).toList();
  }

  static Map<String, BranchRestrictionPolicy> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchRestrictionPolicy>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchRestrictionPolicy.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchRestrictionPolicy-objects as value to a dart map
  static Map<String, List<BranchRestrictionPolicy>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchRestrictionPolicy>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchRestrictionPolicy.listFromJson(value);
       });
     }
     return map;
  }
}

