part of openapi.api;

class InlineObject31 {
  /* The discussion comment's body text. */
  String body = null;

  InlineObject31({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject31[body=$body, ]';
  }

  InlineObject31.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject31> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject31>() : json.map((value) => InlineObject31.fromJson(value)).toList();
  }

  static Map<String, InlineObject31> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject31>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject31.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject31-objects as value to a dart map
  static Map<String, List<InlineObject31>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject31>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject31.listFromJson(value);
       });
     }
     return map;
  }
}

