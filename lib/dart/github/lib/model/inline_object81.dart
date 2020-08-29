part of openapi.api;

class InlineObject81 {
  /* The contents of the comment. */
  String body = null;

  InlineObject81({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject81[body=$body, ]';
  }

  InlineObject81.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject81> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject81>() : json.map((value) => InlineObject81.fromJson(value)).toList();
  }

  static Map<String, InlineObject81> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject81>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject81.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject81-objects as value to a dart map
  static Map<String, List<InlineObject81>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject81>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject81.listFromJson(value);
       });
     }
     return map;
  }
}

