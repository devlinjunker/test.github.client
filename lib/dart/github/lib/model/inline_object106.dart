part of openapi.api;

class InlineObject106 {
  /* The text of the review comment. */
  String body = null;

  InlineObject106({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject106[body=$body, ]';
  }

  InlineObject106.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject106> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject106>() : json.map((value) => InlineObject106.fromJson(value)).toList();
  }

  static Map<String, InlineObject106> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject106>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject106.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject106-objects as value to a dart map
  static Map<String, List<InlineObject106>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject106>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject106.listFromJson(value);
       });
     }
     return map;
  }
}

