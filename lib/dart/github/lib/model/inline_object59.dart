part of openapi.api;

class InlineObject59 {
  /* The contents of the comment. */
  String body = null;
  /* **Deprecated**. Use **position** parameter instead. Line number in the file to comment on. */
  int line = null;
  /* Relative path of the file to comment on. */
  String path = null;
  /* Line index in the diff to comment on. */
  int position = null;

  InlineObject59({
    this.body,
    this.line,
    this.path,
    this.position,
  });

  @override
  String toString() {
    return 'InlineObject59[body=$body, line=$line, path=$path, position=$position, ]';
  }

  InlineObject59.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    line = json['line'];
    path = json['path'];
    position = json['position'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (line != null)
      json['line'] = line;
    if (path != null)
      json['path'] = path;
    if (position != null)
      json['position'] = position;
    return json;
  }

  static List<InlineObject59> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject59>() : json.map((value) => InlineObject59.fromJson(value)).toList();
  }

  static Map<String, InlineObject59> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject59>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject59.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject59-objects as value to a dart map
  static Map<String, List<InlineObject59>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject59>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject59.listFromJson(value);
       });
     }
     return map;
  }
}

