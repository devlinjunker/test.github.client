part of openapi.api;

class CommitActivity {
  
  List<int> days = [];
  
  int total = null;
  
  int week = null;

  CommitActivity({
    this.days,
    this.total,
    this.week,
  });

  @override
  String toString() {
    return 'CommitActivity[days=$days, total=$total, week=$week, ]';
  }

  CommitActivity.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    days = (json['days'] == null) ?
      null :
      (json['days'] as List).cast<int>();
    total = json['total'];
    week = json['week'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (days != null)
      json['days'] = days;
    if (total != null)
      json['total'] = total;
    if (week != null)
      json['week'] = week;
    return json;
  }

  static List<CommitActivity> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitActivity>() : json.map((value) => CommitActivity.fromJson(value)).toList();
  }

  static Map<String, CommitActivity> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitActivity>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitActivity.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitActivity-objects as value to a dart map
  static Map<String, List<CommitActivity>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitActivity>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitActivity.listFromJson(value);
       });
     }
     return map;
  }
}

