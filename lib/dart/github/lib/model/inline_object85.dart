part of openapi.api;

class InlineObject85 {
  /* Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._ */
  List<String> assignees = [];

  InlineObject85({
    this.assignees,
  });

  @override
  String toString() {
    return 'InlineObject85[assignees=$assignees, ]';
  }

  InlineObject85.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    assignees = (json['assignees'] == null) ?
      null :
      (json['assignees'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (assignees != null)
      json['assignees'] = assignees;
    return json;
  }

  static List<InlineObject85> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject85>() : json.map((value) => InlineObject85.fromJson(value)).toList();
  }

  static Map<String, InlineObject85> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject85>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject85.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject85-objects as value to a dart map
  static Map<String, List<InlineObject85>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject85>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject85.listFromJson(value);
       });
     }
     return map;
  }
}

