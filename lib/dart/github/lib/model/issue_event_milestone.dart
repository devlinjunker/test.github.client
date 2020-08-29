part of openapi.api;

class IssueEventMilestone {
  
  String title = null;

  IssueEventMilestone({
    this.title,
  });

  @override
  String toString() {
    return 'IssueEventMilestone[title=$title, ]';
  }

  IssueEventMilestone.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<IssueEventMilestone> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueEventMilestone>() : json.map((value) => IssueEventMilestone.fromJson(value)).toList();
  }

  static Map<String, IssueEventMilestone> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueEventMilestone>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueEventMilestone.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueEventMilestone-objects as value to a dart map
  static Map<String, List<IssueEventMilestone>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueEventMilestone>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueEventMilestone.listFromJson(value);
       });
     }
     return map;
  }
}

