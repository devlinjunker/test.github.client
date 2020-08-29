part of openapi.api;

class InlineObject3 {
  /* The OAuth access token used to authenticate to the GitHub API. */
  String accessToken = null;

  InlineObject3({
    this.accessToken,
  });

  @override
  String toString() {
    return 'InlineObject3[accessToken=$accessToken, ]';
  }

  InlineObject3.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    accessToken = json['access_token'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (accessToken != null)
      json['access_token'] = accessToken;
    return json;
  }

  static List<InlineObject3> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject3>() : json.map((value) => InlineObject3.fromJson(value)).toList();
  }

  static Map<String, InlineObject3> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject3>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject3.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject3-objects as value to a dart map
  static Map<String, List<InlineObject3>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject3>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject3.listFromJson(value);
       });
     }
     return map;
  }
}

