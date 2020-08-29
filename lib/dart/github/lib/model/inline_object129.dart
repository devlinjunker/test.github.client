part of openapi.api;

class InlineObject129 {
  /* The discussion comment's body text. */
  String body = null;

  InlineObject129({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject129[body=$body, ]';
  }

  InlineObject129.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject129> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject129>() : json.map((value) => InlineObject129.fromJson(value)).toList();
  }

  static Map<String, InlineObject129> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject129>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject129.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject129-objects as value to a dart map
  static Map<String, List<InlineObject129>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject129>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject129.listFromJson(value);
       });
     }
     return map;
  }
}

