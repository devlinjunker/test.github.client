part of openapi.api;

class InlineObject86 {
  /* The contents of the comment. */
  String body = null;

  InlineObject86({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject86[body=$body, ]';
  }

  InlineObject86.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject86> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject86>() : json.map((value) => InlineObject86.fromJson(value)).toList();
  }

  static Map<String, InlineObject86> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject86>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject86.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject86-objects as value to a dart map
  static Map<String, List<InlineObject86>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject86>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject86.listFromJson(value);
       });
     }
     return map;
  }
}

