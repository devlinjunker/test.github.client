part of openapi.api;

class InlineObject54 {
  /* The sha of the head commit. */
  String headSha = null;

  InlineObject54({
    this.headSha,
  });

  @override
  String toString() {
    return 'InlineObject54[headSha=$headSha, ]';
  }

  InlineObject54.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    headSha = json['head_sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (headSha != null)
      json['head_sha'] = headSha;
    return json;
  }

  static List<InlineObject54> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject54>() : json.map((value) => InlineObject54.fromJson(value)).toList();
  }

  static Map<String, InlineObject54> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject54>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject54.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject54-objects as value to a dart map
  static Map<String, List<InlineObject54>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject54>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject54.listFromJson(value);
       });
     }
     return map;
  }
}

