part of openapi.api;

class InlineObject65 {
  /* Optional parameter to specify the organization name if forking into an organization. */
  String organization = null;

  InlineObject65({
    this.organization,
  });

  @override
  String toString() {
    return 'InlineObject65[organization=$organization, ]';
  }

  InlineObject65.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    organization = json['organization'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (organization != null)
      json['organization'] = organization;
    return json;
  }

  static List<InlineObject65> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject65>() : json.map((value) => InlineObject65.fromJson(value)).toList();
  }

  static Map<String, InlineObject65> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject65>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject65.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject65-objects as value to a dart map
  static Map<String, List<InlineObject65>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject65>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject65.listFromJson(value);
       });
     }
     return map;
  }
}

