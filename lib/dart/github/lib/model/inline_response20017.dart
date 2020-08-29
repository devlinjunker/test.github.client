part of openapi.api;

class InlineResponse20017 {
  
  bool incompleteResults = null;
  
  List<RepoSearchResultItem> items = [];
  
  int totalCount = null;

  InlineResponse20017({
    this.incompleteResults,
    this.items,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse20017[incompleteResults=$incompleteResults, items=$items, totalCount=$totalCount, ]';
  }

  InlineResponse20017.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    incompleteResults = json['incomplete_results'];
    items = (json['items'] == null) ?
      null :
      RepoSearchResultItem.listFromJson(json['items']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (incompleteResults != null)
      json['incomplete_results'] = incompleteResults;
    if (items != null)
      json['items'] = items;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse20017> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20017>() : json.map((value) => InlineResponse20017.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20017> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20017>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20017.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20017-objects as value to a dart map
  static Map<String, List<InlineResponse20017>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20017>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20017.listFromJson(value);
       });
     }
     return map;
  }
}

