part of openapi.api;

class IssueEventRename {
  
  String from = null;
  
  String to = null;

  IssueEventRename({
    this.from,
    this.to,
  });

  @override
  String toString() {
    return 'IssueEventRename[from=$from, to=$to, ]';
  }

  IssueEventRename.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    from = json['from'];
    to = json['to'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (from != null)
      json['from'] = from;
    if (to != null)
      json['to'] = to;
    return json;
  }

  static List<IssueEventRename> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueEventRename>() : json.map((value) => IssueEventRename.fromJson(value)).toList();
  }

  static Map<String, IssueEventRename> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueEventRename>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueEventRename.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueEventRename-objects as value to a dart map
  static Map<String, List<IssueEventRename>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueEventRename>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueEventRename.listFromJson(value);
       });
     }
     return map;
  }
}

