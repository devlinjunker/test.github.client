part of openapi.api;

class ActionsSecret {
  
  DateTime createdAt = null;
  /* The name of the secret. */
  String name = null;
  
  DateTime updatedAt = null;

  ActionsSecret({
    this.createdAt,
    this.name,
    this.updatedAt,
  });

  @override
  String toString() {
    return 'ActionsSecret[createdAt=$createdAt, name=$name, updatedAt=$updatedAt, ]';
  }

  ActionsSecret.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    name = json['name'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (name != null)
      json['name'] = name;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    return json;
  }

  static List<ActionsSecret> listFromJson(List<dynamic> json) {
    return json == null ? List<ActionsSecret>() : json.map((value) => ActionsSecret.fromJson(value)).toList();
  }

  static Map<String, ActionsSecret> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ActionsSecret>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ActionsSecret.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ActionsSecret-objects as value to a dart map
  static Map<String, List<ActionsSecret>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ActionsSecret>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ActionsSecret.listFromJson(value);
       });
     }
     return map;
  }
}

