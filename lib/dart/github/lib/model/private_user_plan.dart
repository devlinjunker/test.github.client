part of openapi.api;

class PrivateUserPlan {
  
  int collaborators = null;
  
  String name = null;
  
  int privateRepos = null;
  
  int space = null;

  PrivateUserPlan({
    this.collaborators,
    this.name,
    this.privateRepos,
    this.space,
  });

  @override
  String toString() {
    return 'PrivateUserPlan[collaborators=$collaborators, name=$name, privateRepos=$privateRepos, space=$space, ]';
  }

  PrivateUserPlan.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    collaborators = json['collaborators'];
    name = json['name'];
    privateRepos = json['private_repos'];
    space = json['space'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (collaborators != null)
      json['collaborators'] = collaborators;
    if (name != null)
      json['name'] = name;
    if (privateRepos != null)
      json['private_repos'] = privateRepos;
    if (space != null)
      json['space'] = space;
    return json;
  }

  static List<PrivateUserPlan> listFromJson(List<dynamic> json) {
    return json == null ? List<PrivateUserPlan>() : json.map((value) => PrivateUserPlan.fromJson(value)).toList();
  }

  static Map<String, PrivateUserPlan> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PrivateUserPlan>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PrivateUserPlan.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PrivateUserPlan-objects as value to a dart map
  static Map<String, List<PrivateUserPlan>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PrivateUserPlan>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PrivateUserPlan.listFromJson(value);
       });
     }
     return map;
  }
}

