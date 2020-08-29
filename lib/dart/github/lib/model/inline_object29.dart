part of openapi.api;

class InlineObject29 {
  /* The discussion post's body text. */
  String body = null;
  /* Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post. */
  bool private = false;
  /* The discussion post's title. */
  String title = null;

  InlineObject29({
    this.body,
    this.private,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject29[body=$body, private=$private, title=$title, ]';
  }

  InlineObject29.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    private = json['private'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (private != null)
      json['private'] = private;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject29> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject29>() : json.map((value) => InlineObject29.fromJson(value)).toList();
  }

  static Map<String, InlineObject29> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject29>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject29.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject29-objects as value to a dart map
  static Map<String, List<InlineObject29>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject29>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject29.listFromJson(value);
       });
     }
     return map;
  }
}

