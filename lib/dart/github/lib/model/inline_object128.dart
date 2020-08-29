part of openapi.api;

class InlineObject128 {
  /* The discussion post's body text. */
  String body = null;
  /* The discussion post's title. */
  String title = null;

  InlineObject128({
    this.body,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject128[body=$body, title=$title, ]';
  }

  InlineObject128.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject128> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject128>() : json.map((value) => InlineObject128.fromJson(value)).toList();
  }

  static Map<String, InlineObject128> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject128>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject128.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject128-objects as value to a dart map
  static Map<String, List<InlineObject128>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject128>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject128.listFromJson(value);
       });
     }
     return map;
  }
}

