part of openapi.api;

class InlineResponse2004 {
  
  List<MinimalRepository> repositories = [];
  
  int totalCount = null;

  InlineResponse2004({
    this.repositories,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2004[repositories=$repositories, totalCount=$totalCount, ]';
  }

  InlineResponse2004.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    repositories = (json['repositories'] == null) ?
      null :
      MinimalRepository.listFromJson(json['repositories']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (repositories != null)
      json['repositories'] = repositories;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse2004> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2004>() : json.map((value) => InlineResponse2004.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2004> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2004>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2004.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2004-objects as value to a dart map
  static Map<String, List<InlineResponse2004>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2004>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2004.listFromJson(value);
       });
     }
     return map;
  }
}

