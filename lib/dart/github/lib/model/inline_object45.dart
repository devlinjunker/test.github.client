part of openapi.api;

class InlineObject45 {
  /* Name of the project column */
  String name = null;

  InlineObject45({
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject45[name=$name, ]';
  }

  InlineObject45.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<InlineObject45> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject45>() : json.map((value) => InlineObject45.fromJson(value)).toList();
  }

  static Map<String, InlineObject45> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject45>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject45.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject45-objects as value to a dart map
  static Map<String, List<InlineObject45>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject45>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject45.listFromJson(value);
       });
     }
     return map;
  }
}

