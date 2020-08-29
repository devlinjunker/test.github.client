part of openapi.api;

class InlineObject143 {
  /* Body of the project */
  String body = null;
  /* Name of the project */
  String name = null;

  InlineObject143({
    this.body,
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject143[body=$body, name=$name, ]';
  }

  InlineObject143.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['body'] = body;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<InlineObject143> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject143>() : json.map((value) => InlineObject143.fromJson(value)).toList();
  }

  static Map<String, InlineObject143> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject143>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject143.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject143-objects as value to a dart map
  static Map<String, List<InlineObject143>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject143>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject143.listFromJson(value);
       });
     }
     return map;
  }
}

