part of openapi.api;

class InlineObject2 {
  /* The access_token of the OAuth application. */
  String accessToken = null;

  InlineObject2({
    this.accessToken,
  });

  @override
  String toString() {
    return 'InlineObject2[accessToken=$accessToken, ]';
  }

  InlineObject2.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    accessToken = json['access_token'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (accessToken != null)
      json['access_token'] = accessToken;
    return json;
  }

  static List<InlineObject2> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject2>() : json.map((value) => InlineObject2.fromJson(value)).toList();
  }

  static Map<String, InlineObject2> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject2>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject2.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject2-objects as value to a dart map
  static Map<String, List<InlineObject2>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject2>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject2.listFromJson(value);
       });
     }
     return map;
  }
}

