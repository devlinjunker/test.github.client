part of openapi.api;

class InlineObject30 {
  /* The discussion post's body text. */
  String body = null;
  /* The discussion post's title. */
  String title = null;

  InlineObject30({
    this.body,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject30[body=$body, title=$title, ]';
  }

  InlineObject30.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject30> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject30>() : json.map((value) => InlineObject30.fromJson(value)).toList();
  }

  static Map<String, InlineObject30> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject30>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject30.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject30-objects as value to a dart map
  static Map<String, List<InlineObject30>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject30>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject30.listFromJson(value);
       });
     }
     return map;
  }
}

