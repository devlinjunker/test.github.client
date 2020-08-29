part of openapi.api;

class InlineResponse2001 {
  
  List<Repository> repositories = [];
  
  String repositorySelection = null;
  
  int totalCount = null;

  InlineResponse2001({
    this.repositories,
    this.repositorySelection,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2001[repositories=$repositories, repositorySelection=$repositorySelection, totalCount=$totalCount, ]';
  }

  InlineResponse2001.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    repositories = (json['repositories'] == null) ?
      null :
      Repository.listFromJson(json['repositories']);
    repositorySelection = json['repository_selection'];
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (repositories != null)
      json['repositories'] = repositories;
    if (repositorySelection != null)
      json['repository_selection'] = repositorySelection;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse2001> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2001>() : json.map((value) => InlineResponse2001.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2001> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2001>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2001.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2001-objects as value to a dart map
  static Map<String, List<InlineResponse2001>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2001>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2001.listFromJson(value);
       });
     }
     return map;
  }
}

