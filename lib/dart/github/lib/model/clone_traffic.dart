part of openapi.api;

class CloneTraffic {
  
  List<Traffic> clones = [];
  
  int count = null;
  
  int uniques = null;

  CloneTraffic({
    this.clones,
    this.count,
    this.uniques,
  });

  @override
  String toString() {
    return 'CloneTraffic[clones=$clones, count=$count, uniques=$uniques, ]';
  }

  CloneTraffic.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    clones = (json['clones'] == null) ?
      null :
      Traffic.listFromJson(json['clones']);
    count = json['count'];
    uniques = json['uniques'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (clones != null)
      json['clones'] = clones;
    if (count != null)
      json['count'] = count;
    if (uniques != null)
      json['uniques'] = uniques;
    return json;
  }

  static List<CloneTraffic> listFromJson(List<dynamic> json) {
    return json == null ? List<CloneTraffic>() : json.map((value) => CloneTraffic.fromJson(value)).toList();
  }

  static Map<String, CloneTraffic> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CloneTraffic>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CloneTraffic.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CloneTraffic-objects as value to a dart map
  static Map<String, List<CloneTraffic>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CloneTraffic>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CloneTraffic.listFromJson(value);
       });
     }
     return map;
  }
}

