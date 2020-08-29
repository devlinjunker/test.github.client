part of openapi.api;

class InlineResponse20015 {
  
  bool incompleteResults = null;
  
  List<IssueSearchResultItem> items = [];
  
  int totalCount = null;

  InlineResponse20015({
    this.incompleteResults,
    this.items,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse20015[incompleteResults=$incompleteResults, items=$items, totalCount=$totalCount, ]';
  }

  InlineResponse20015.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    incompleteResults = json['incomplete_results'];
    items = (json['items'] == null) ?
      null :
      IssueSearchResultItem.listFromJson(json['items']);
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

  static List<InlineResponse20015> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20015>() : json.map((value) => InlineResponse20015.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20015> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20015>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20015.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20015-objects as value to a dart map
  static Map<String, List<InlineResponse20015>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20015>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20015.listFromJson(value);
       });
     }
     return map;
  }
}

