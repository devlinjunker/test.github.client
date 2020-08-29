part of openapi.api;

class ContributorActivity {
  
  SimpleUser author = null;
  
  int total = null;
  
  List<ContributorActivityWeeks> weeks = [];

  ContributorActivity({
    this.author,
    this.total,
    this.weeks,
  });

  @override
  String toString() {
    return 'ContributorActivity[author=$author, total=$total, weeks=$weeks, ]';
  }

  ContributorActivity.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      SimpleUser.fromJson(json['author']);
    total = json['total'];
    weeks = (json['weeks'] == null) ?
      null :
      ContributorActivityWeeks.listFromJson(json['weeks']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['author'] = author;
    if (total != null)
      json['total'] = total;
    if (weeks != null)
      json['weeks'] = weeks;
    return json;
  }

  static List<ContributorActivity> listFromJson(List<dynamic> json) {
    return json == null ? List<ContributorActivity>() : json.map((value) => ContributorActivity.fromJson(value)).toList();
  }

  static Map<String, ContributorActivity> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContributorActivity>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContributorActivity.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContributorActivity-objects as value to a dart map
  static Map<String, List<ContributorActivity>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContributorActivity>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContributorActivity.listFromJson(value);
       });
     }
     return map;
  }
}

