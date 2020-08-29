part of openapi.api;

class InlineObject12 {
  /* The comment text. */
  String body = null;

  InlineObject12({
    this.body,
  });

  @override
  String toString() {
    return 'InlineObject12[body=$body, ]';
  }

  InlineObject12.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    return json;
  }

  static List<InlineObject12> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject12>() : json.map((value) => InlineObject12.fromJson(value)).toList();
  }

  static Map<String, InlineObject12> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject12>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject12.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject12-objects as value to a dart map
  static Map<String, List<InlineObject12>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject12>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject12.listFromJson(value);
       });
     }
     return map;
  }
}

