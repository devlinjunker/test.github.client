part of openapi.api;

class InlineObject11 {
  /* The comment text. */
  String body = null;

  InlineObject11({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject11[body=$body, ]';
  }

  InlineObject11.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject11> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject11>() : json.map((value) => InlineObject11.fromJson(value)).toList();
  }

  static Map<String, InlineObject11> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject11>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject11.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject11-objects as value to a dart map
  static Map<String, List<InlineObject11>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject11>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject11.listFromJson(value);
       });
     }
     return map;
  }
}

