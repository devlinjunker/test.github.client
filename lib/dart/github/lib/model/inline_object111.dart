part of openapi.api;

class InlineObject111 {
  /* The body text of the pull request review. */
  String body = null;

  InlineObject111({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject111[body=$body, ]';
  }

  InlineObject111.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject111> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject111>() : json.map((value) => InlineObject111.fromJson(value)).toList();
  }

  static Map<String, InlineObject111> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject111>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject111.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject111-objects as value to a dart map
  static Map<String, List<InlineObject111>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject111>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject111.listFromJson(value);
       });
     }
     return map;
  }
}

