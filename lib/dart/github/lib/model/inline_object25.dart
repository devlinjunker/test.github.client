part of openapi.api;

class InlineObject25 {
  /* The description of the project. */
  String body = null;
  /* The name of the project. */
  String name = null;

  InlineObject25({
    this.body,
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject25[body=$body, name=$name, ]';
  }

  InlineObject25.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<InlineObject25> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject25>() : json.map((value) => InlineObject25.fromJson(value)).toList();
  }

  static Map<String, InlineObject25> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject25>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject25.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject25-objects as value to a dart map
  static Map<String, List<InlineObject25>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject25>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject25.listFromJson(value);
       });
     }
     return map;
  }
}

