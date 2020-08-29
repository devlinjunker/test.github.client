part of openapi.api;

class RepositoryPermissions {
  
  bool admin = null;
  
  bool maintain = null;
  
  bool pull = null;
  
  bool push = null;
  
  bool triage = null;

  RepositoryPermissions({
    this.admin,
    this.maintain,
    this.pull,
    this.push,
    this.triage,
  });

  @override
  String toString() {
    return 'RepositoryPermissions[admin=$admin, maintain=$maintain, pull=$pull, push=$push, triage=$triage, ]';
  }

  RepositoryPermissions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    admin = json['admin'];
    maintain = json['maintain'];
    pull = json['pull'];
    push = json['push'];
    triage = json['triage'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (admin != null)
      json['admin'] = admin;
    if (maintain != null)
      json['maintain'] = maintain;
    if (pull != null)
      json['pull'] = pull;
    if (push != null)
      json['push'] = push;
    if (triage != null)
      json['triage'] = triage;
    return json;
  }

  static List<RepositoryPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<RepositoryPermissions>() : json.map((value) => RepositoryPermissions.fromJson(value)).toList();
  }

  static Map<String, RepositoryPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RepositoryPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RepositoryPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RepositoryPermissions-objects as value to a dart map
  static Map<String, List<RepositoryPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RepositoryPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RepositoryPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

