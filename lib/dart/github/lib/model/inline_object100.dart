part of openapi.api;

class InlineObject100 {
  /* The description of the project. */
  String body = null;
  /* The name of the project. */
  String name = null;

  InlineObject100({
    this.body,
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject100[body=$body, name=$name, ]';
  }

  InlineObject100.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject100> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject100>() : json.map((value) => InlineObject100.fromJson(value)).toList();
  }

  static Map<String, InlineObject100> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject100>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject100.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject100-objects as value to a dart map
  static Map<String, List<InlineObject100>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject100>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject100.listFromJson(value);
       });
     }
     return map;
  }
}

