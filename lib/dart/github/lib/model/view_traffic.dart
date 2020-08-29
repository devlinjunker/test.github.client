part of openapi.api;

class ViewTraffic {
  
  int count = null;
  
  int uniques = null;
  
  List<Traffic> views = [];

  ViewTraffic({
    this.count,
    this.uniques,
    this.views,
  });

  @override
  String toString() {
    return 'ViewTraffic[count=$count, uniques=$uniques, views=$views, ]';
  }

  ViewTraffic.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    count = json['count'];
    uniques = json['uniques'];
    views = (json['views'] == null) ?
      null :
      Traffic.listFromJson(json['views']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (count != null)
      json['count'] = count;
    if (uniques != null)
      json['uniques'] = uniques;
    if (views != null)
      json['views'] = views;
    return json;
  }

  static List<ViewTraffic> listFromJson(List<dynamic> json) {
    return json == null ? List<ViewTraffic>() : json.map((value) => ViewTraffic.fromJson(value)).toList();
  }

  static Map<String, ViewTraffic> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ViewTraffic>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ViewTraffic.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ViewTraffic-objects as value to a dart map
  static Map<String, List<ViewTraffic>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ViewTraffic>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ViewTraffic.listFromJson(value);
       });
     }
     return map;
  }
}

