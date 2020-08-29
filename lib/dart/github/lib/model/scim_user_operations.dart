part of openapi.api;

class ScimUserOperations {
  
  String op = null;
  //enum opEnum {  add,  remove,  replace,  };{
  
  String path = null;
  
  OneOf<string,object,array> value = null;

  ScimUserOperations({
    this.op,
    this.path,
    this.value,
  });

  @override
  String toString() {
    return 'ScimUserOperations[op=$op, path=$path, value=$value, ]';
  }

  ScimUserOperations.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    op = json['op'];
    path = json['path'];
    value = (json['value'] == null) ?
      null :
      OneOf&lt;string,object,array&gt;.fromJson(json['value']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (op != null)
      json['op'] = op;
    if (path != null)
      json['path'] = path;
    if (value != null)
      json['value'] = value;
    return json;
  }

  static List<ScimUserOperations> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimUserOperations>() : json.map((value) => ScimUserOperations.fromJson(value)).toList();
  }

  static Map<String, ScimUserOperations> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimUserOperations>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimUserOperations.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimUserOperations-objects as value to a dart map
  static Map<String, List<ScimUserOperations>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimUserOperations>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimUserOperations.listFromJson(value);
       });
     }
     return map;
  }
}

