part of openapi.api;

class CommitStats {
  
  int additions = null;
  
  int deletions = null;
  
  int total = null;

  CommitStats({
    this.additions,
    this.deletions,
    this.total,
  });

  @override
  String toString() {
    return 'CommitStats[additions=$additions, deletions=$deletions, total=$total, ]';
  }

  CommitStats.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    additions = json['additions'];
    deletions = json['deletions'];
    total = json['total'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (additions != null)
      json['additions'] = additions;
    if (deletions != null)
      json['deletions'] = deletions;
    if (total != null)
      json['total'] = total;
    return json;
  }

  static List<CommitStats> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitStats>() : json.map((value) => CommitStats.fromJson(value)).toList();
  }

  static Map<String, CommitStats> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitStats>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitStats.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitStats-objects as value to a dart map
  static Map<String, List<CommitStats>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitStats>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitStats.listFromJson(value);
       });
     }
     return map;
  }
}

