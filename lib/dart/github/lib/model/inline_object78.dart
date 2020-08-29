part of openapi.api;

class InlineObject78 {
  /* Specifies the group of GitHub users who can comment, open issues, or create pull requests for the given repository. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`. */
  String limit = null;
  //enum limitEnum {  existing_users,  contributors_only,  collaborators_only,  };{

  InlineObject78({
    this.limit,
  });

  @override
  String toString() {
    return 'InlineObject78[limit=$limit, ]';
  }

  InlineObject78.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    limit = json['limit'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (limit != null)
      json['limit'] = limit;
    return json;
  }

  static List<InlineObject78> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject78>() : json.map((value) => InlineObject78.fromJson(value)).toList();
  }

  static Map<String, InlineObject78> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject78>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject78.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject78-objects as value to a dart map
  static Map<String, List<InlineObject78>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject78>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject78.listFromJson(value);
       });
     }
     return map;
  }
}

