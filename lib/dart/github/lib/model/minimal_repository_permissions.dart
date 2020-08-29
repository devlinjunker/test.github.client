part of openapi.api;

class MinimalRepositoryPermissions {
  
  bool admin = null;
  
  bool pull = null;
  
  bool push = null;

  MinimalRepositoryPermissions({
    this.admin,
    this.pull,
    this.push,
  });

  @override
  String toString() {
    return 'MinimalRepositoryPermissions[admin=$admin, pull=$pull, push=$push, ]';
  }

  MinimalRepositoryPermissions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    admin = json['admin'];
    pull = json['pull'];
    push = json['push'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (admin != null)
      json['admin'] = admin;
    if (pull != null)
      json['pull'] = pull;
    if (push != null)
      json['push'] = push;
    return json;
  }

  static List<MinimalRepositoryPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<MinimalRepositoryPermissions>() : json.map((value) => MinimalRepositoryPermissions.fromJson(value)).toList();
  }

  static Map<String, MinimalRepositoryPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, MinimalRepositoryPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = MinimalRepositoryPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MinimalRepositoryPermissions-objects as value to a dart map
  static Map<String, List<MinimalRepositoryPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<MinimalRepositoryPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = MinimalRepositoryPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

