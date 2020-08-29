part of openapi.api;

class InlineObject21 {
  /* Specifies the group of GitHub users who can comment, open issues, or create pull requests in public repositories for the given organization. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`. */
  String limit = null;
  //enum limitEnum {  existing_users,  contributors_only,  collaborators_only,  };{

  InlineObject21({
    this.limit,
  });

  @override
  String toString() {
    return 'InlineObject21[limit=$limit, ]';
  }

  InlineObject21.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    limit = json['limit'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (limit != null)
      json['limit'] = limit;
    return json;
  }

  static List<InlineObject21> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject21>() : json.map((value) => InlineObject21.fromJson(value)).toList();
  }

  static Map<String, InlineObject21> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject21>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject21.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject21-objects as value to a dart map
  static Map<String, List<InlineObject21>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject21>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject21.listFromJson(value);
       });
     }
     return map;
  }
}

