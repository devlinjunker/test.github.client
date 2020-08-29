part of openapi.api;

class InlineObject32 {
  /* The discussion comment's body text. */
  String body = null;

  InlineObject32({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject32[body=$body, ]';
  }

  InlineObject32.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject32> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject32>() : json.map((value) => InlineObject32.fromJson(value)).toList();
  }

  static Map<String, InlineObject32> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject32>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject32.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject32-objects as value to a dart map
  static Map<String, List<InlineObject32>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject32>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject32.listFromJson(value);
       });
     }
     return map;
  }
}

