part of openapi.api;

class InlineObject127 {
  /* The discussion post's body text. */
  String body = null;
  /* Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post. */
  bool private = false;
  /* The discussion post's title. */
  String title = null;

  InlineObject127({
    this.body,
    this.private,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject127[body=$body, private=$private, title=$title, ]';
  }

  InlineObject127.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject127> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject127>() : json.map((value) => InlineObject127.fromJson(value)).toList();
  }

  static Map<String, InlineObject127> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject127>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject127.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject127-objects as value to a dart map
  static Map<String, List<InlineObject127>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject127>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject127.listFromJson(value);
       });
     }
     return map;
  }
}

