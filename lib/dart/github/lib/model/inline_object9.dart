part of openapi.api;

class InlineObject9 {
  /* The body of the attachment */
  String body = null;
  /* The title of the attachment */
  String title = null;

  InlineObject9({
    this.body,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject9[body=$body, title=$title, ]';
  }

  InlineObject9.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject9> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject9>() : json.map((value) => InlineObject9.fromJson(value)).toList();
  }

  static Map<String, InlineObject9> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject9>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject9.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject9-objects as value to a dart map
  static Map<String, List<InlineObject9>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject9>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject9.listFromJson(value);
       });
     }
     return map;
  }
}

