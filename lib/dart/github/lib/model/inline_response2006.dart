part of openapi.api;

class InlineResponse2006 {
  
  List<Artifact> artifacts = [];
  
  int totalCount = null;

  InlineResponse2006({
    this.artifacts,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2006[artifacts=$artifacts, totalCount=$totalCount, ]';
  }

  InlineResponse2006.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    artifacts = (json['artifacts'] == null) ?
      null :
      Artifact.listFromJson(json['artifacts']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (artifacts != null)
      json['artifacts'] = artifacts;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse2006> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2006>() : json.map((value) => InlineResponse2006.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2006> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2006>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2006.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2006-objects as value to a dart map
  static Map<String, List<InlineResponse2006>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2006>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2006.listFromJson(value);
       });
     }
     return map;
  }
}

