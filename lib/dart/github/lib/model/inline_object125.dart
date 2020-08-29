part of openapi.api;

class InlineObject125 {
  /* Set of operations to be performed */
  List<ScimV2OrganizationsOrgUsersScimUserIdOperations> operations = [];
  
  List<String> schemas = [];

  InlineObject125({
    this.operations,
    this.schemas,
  });

  @override
  String toString() {
    return 'InlineObject125[operations=$operations, schemas=$schemas, ]';
  }

  InlineObject125.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    operations = (json['Operations'] == null) ?
      null :
      ScimV2OrganizationsOrgUsersScimUserIdOperations.listFromJson(json['Operations']);
    schemas = (json['schemas'] == null) ?
      null :
      (json['schemas'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (operations != null)
      json['Operations'] = operations;
    if (schemas != null)
      json['schemas'] = schemas;
    return json;
  }

  static List<InlineObject125> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject125>() : json.map((value) => InlineObject125.fromJson(value)).toList();
  }

  static Map<String, InlineObject125> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject125>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject125.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject125-objects as value to a dart map
  static Map<String, List<InlineObject125>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject125>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject125.listFromJson(value);
       });
     }
     return map;
  }
}

