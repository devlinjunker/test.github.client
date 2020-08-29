part of openapi.api;

class IssueEventLabel {
  
  String color = null;
  
  String name = null;

  IssueEventLabel({
    this.color,
    this.name,
  });

  @override
  String toString() {
    return 'IssueEventLabel[color=$color, name=$name, ]';
  }

  IssueEventLabel.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    color = json['color'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['color'] = color;
      json['name'] = name;
    return json;
  }

  static List<IssueEventLabel> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueEventLabel>() : json.map((value) => IssueEventLabel.fromJson(value)).toList();
  }

  static Map<String, IssueEventLabel> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueEventLabel>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueEventLabel.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueEventLabel-objects as value to a dart map
  static Map<String, List<IssueEventLabel>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueEventLabel>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueEventLabel.listFromJson(value);
       });
     }
     return map;
  }
}

