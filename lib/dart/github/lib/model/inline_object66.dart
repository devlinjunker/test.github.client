part of openapi.api;

class InlineObject66 {
  /* The new blob's content. */
  String content = null;
  /* The encoding used for `content`. Currently, `\"utf-8\"` and `\"base64\"` are supported. */
  String encoding = "utf-8";

  InlineObject66({
    this.content,
    this.encoding,
  });

  @override
  String toString() {
    return 'InlineObject66[content=$content, encoding=$encoding, ]';
  }

  InlineObject66.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
    encoding = json['encoding'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    if (encoding != null)
      json['encoding'] = encoding;
    return json;
  }

  static List<InlineObject66> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject66>() : json.map((value) => InlineObject66.fromJson(value)).toList();
  }

  static Map<String, InlineObject66> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject66>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject66.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject66-objects as value to a dart map
  static Map<String, List<InlineObject66>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject66>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject66.listFromJson(value);
       });
     }
     return map;
  }
}

