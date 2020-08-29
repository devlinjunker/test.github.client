part of openapi.api;

class InlineObject102 {
  /* The text of the reply to the review comment. */
  String body = null;

  InlineObject102({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject102[body=$body, ]';
  }

  InlineObject102.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject102> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject102>() : json.map((value) => InlineObject102.fromJson(value)).toList();
  }

  static Map<String, InlineObject102> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject102>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject102.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject102-objects as value to a dart map
  static Map<String, List<InlineObject102>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject102>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject102.listFromJson(value);
       });
     }
     return map;
  }
}

