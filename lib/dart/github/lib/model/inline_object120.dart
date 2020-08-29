part of openapi.api;

class InlineObject120 {
  /* An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters. */
  List<String> names = [];

  InlineObject120({
    this.names,
  });

  @override
  String toString() {
    return 'InlineObject120[names=$names, ]';
  }

  InlineObject120.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    names = (json['names'] == null) ?
      null :
      (json['names'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (names != null)
      json['names'] = names;
    return json;
  }

  static List<InlineObject120> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject120>() : json.map((value) => InlineObject120.fromJson(value)).toList();
  }

  static Map<String, InlineObject120> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject120>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject120.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject120-objects as value to a dart map
  static Map<String, List<InlineObject120>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject120>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject120.listFromJson(value);
       });
     }
     return map;
  }
}

