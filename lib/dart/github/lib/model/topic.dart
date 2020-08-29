part of openapi.api;

class Topic {
  
  List<String> names = [];

  Topic({
    this.names,
  });

  @override
  String toString() {
    return 'Topic[names=$names, ]';
  }

  Topic.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    names = (json['names'] == null) ?
      null :
      (json['names'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (names != null)
      json['names'] = names;
    return json;
  }

  static List<Topic> listFromJson(List<dynamic> json) {
    return json == null ? List<Topic>() : json.map((value) => Topic.fromJson(value)).toList();
  }

  static Map<String, Topic> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Topic>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Topic.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Topic-objects as value to a dart map
  static Map<String, List<Topic>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Topic>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Topic.listFromJson(value);
       });
     }
     return map;
  }
}

