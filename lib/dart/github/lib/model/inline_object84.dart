part of openapi.api;

class InlineObject84 {
  /* Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._ */
  List<String> assignees = [];

  InlineObject84({
    this.assignees,
  });

  @override
  String toString() {
    return 'InlineObject84[assignees=$assignees, ]';
  }

  InlineObject84.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject84> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject84>() : json.map((value) => InlineObject84.fromJson(value)).toList();
  }

  static Map<String, InlineObject84> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject84>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject84.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject84-objects as value to a dart map
  static Map<String, List<InlineObject84>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject84>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject84.listFromJson(value);
       });
     }
     return map;
  }
}

