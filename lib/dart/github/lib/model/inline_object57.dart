part of openapi.api;

class InlineObject57 {
  /* The contents of the comment */
  String body = null;

  InlineObject57({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject57[body=$body, ]';
  }

  InlineObject57.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject57> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject57>() : json.map((value) => InlineObject57.fromJson(value)).toList();
  }

  static Map<String, InlineObject57> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject57>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject57.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject57-objects as value to a dart map
  static Map<String, List<InlineObject57>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject57>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject57.listFromJson(value);
       });
     }
     return map;
  }
}

