part of openapi.api;

class InlineResponse20020 {
  
  List<Repository> repositories = [];
  
  String repositorySelection = null;
  
  int totalCount = null;

  InlineResponse20020({
    this.repositories,
    this.repositorySelection,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse20020[repositories=$repositories, repositorySelection=$repositorySelection, totalCount=$totalCount, ]';
  }

  InlineResponse20020.fromJson(Map<String, dynamic> json) {
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

  static List<InlineResponse20020> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20020>() : json.map((value) => InlineResponse20020.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20020> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20020>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20020.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20020-objects as value to a dart map
  static Map<String, List<InlineResponse20020>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20020>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20020.listFromJson(value);
       });
     }
     return map;
  }
}

