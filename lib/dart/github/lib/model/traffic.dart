part of openapi.api;

class Traffic {
  
  int count = null;
  
  DateTime timestamp = null;
  
  int uniques = null;

  Traffic({
    this.count,
    this.timestamp,
    this.uniques,
  });

  @override
  String toString() {
    return 'Traffic[count=$count, timestamp=$timestamp, uniques=$uniques, ]';
  }

  Traffic.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    count = json['count'];
    timestamp = (json['timestamp'] == null) ?
      null :
      DateTime.parse(json['timestamp']);
    uniques = json['uniques'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (count != null)
      json['count'] = count;
    if (timestamp != null)
      json['timestamp'] = timestamp == null ? null : timestamp.toUtc().toIso8601String();
    if (uniques != null)
      json['uniques'] = uniques;
    return json;
  }

  static List<Traffic> listFromJson(List<dynamic> json) {
    return json == null ? List<Traffic>() : json.map((value) => Traffic.fromJson(value)).toList();
  }

  static Map<String, Traffic> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Traffic>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Traffic.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Traffic-objects as value to a dart map
  static Map<String, List<Traffic>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Traffic>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Traffic.listFromJson(value);
       });
     }
     return map;
  }
}

