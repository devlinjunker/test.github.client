part of openapi.api;

class InlineObject130 {
  /* The discussion comment's body text. */
  String body = null;

  InlineObject130({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject130[body=$body, ]';
  }

  InlineObject130.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject130> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject130>() : json.map((value) => InlineObject130.fromJson(value)).toList();
  }

  static Map<String, InlineObject130> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject130>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject130.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject130-objects as value to a dart map
  static Map<String, List<InlineObject130>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject130>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject130.listFromJson(value);
       });
     }
     return map;
  }
}

