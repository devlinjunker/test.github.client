part of openapi.api;

class InlineObject41 {
  /* Name of the project column */
  String name = null;

  InlineObject41({
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject41[name=$name, ]';
  }

  InlineObject41.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<InlineObject41> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject41>() : json.map((value) => InlineObject41.fromJson(value)).toList();
  }

  static Map<String, InlineObject41> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject41>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject41.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject41-objects as value to a dart map
  static Map<String, List<InlineObject41>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject41>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject41.listFromJson(value);
       });
     }
     return map;
  }
}

