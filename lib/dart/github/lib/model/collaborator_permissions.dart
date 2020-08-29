part of openapi.api;

class CollaboratorPermissions {
  
  bool admin = null;
  
  bool pull = null;
  
  bool push = null;

  CollaboratorPermissions({
    this.admin,
    this.pull,
    this.push,
  });

  @override
  String toString() {
    return 'CollaboratorPermissions[admin=$admin, pull=$pull, push=$push, ]';
  }

  CollaboratorPermissions.fromJson(Map<String, dynamic> json) {
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

  static List<CollaboratorPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<CollaboratorPermissions>() : json.map((value) => CollaboratorPermissions.fromJson(value)).toList();
  }

  static Map<String, CollaboratorPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CollaboratorPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CollaboratorPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CollaboratorPermissions-objects as value to a dart map
  static Map<String, List<CollaboratorPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CollaboratorPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CollaboratorPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

