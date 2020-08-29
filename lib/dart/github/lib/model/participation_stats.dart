part of openapi.api;

class ParticipationStats {
  
  List<int> all = [];
  
  List<int> owner = [];

  ParticipationStats({
    this.all,
    this.owner,
  });

  @override
  String toString() {
    return 'ParticipationStats[all=$all, owner=$owner, ]';
  }

  ParticipationStats.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    all = (json['all'] == null) ?
      null :
      (json['all'] as List).cast<int>();
    owner = (json['owner'] == null) ?
      null :
      (json['owner'] as List).cast<int>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (all != null)
      json['all'] = all;
    if (owner != null)
      json['owner'] = owner;
    return json;
  }

  static List<ParticipationStats> listFromJson(List<dynamic> json) {
    return json == null ? List<ParticipationStats>() : json.map((value) => ParticipationStats.fromJson(value)).toList();
  }

  static Map<String, ParticipationStats> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ParticipationStats>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ParticipationStats.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ParticipationStats-objects as value to a dart map
  static Map<String, List<ParticipationStats>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ParticipationStats>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ParticipationStats.listFromJson(value);
       });
     }
     return map;
  }
}

