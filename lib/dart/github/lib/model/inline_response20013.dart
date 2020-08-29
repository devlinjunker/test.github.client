part of openapi.api;

class InlineResponse20013 {
  
  bool incompleteResults = null;
  
  List<CodeSearchResultItem> items = [];
  
  int totalCount = null;

  InlineResponse20013({
    this.incompleteResults,
    this.items,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse20013[incompleteResults=$incompleteResults, items=$items, totalCount=$totalCount, ]';
  }

  InlineResponse20013.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    incompleteResults = json['incomplete_results'];
    items = (json['items'] == null) ?
      null :
      CodeSearchResultItem.listFromJson(json['items']);
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

  static List<InlineResponse20013> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20013>() : json.map((value) => InlineResponse20013.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20013> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20013>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20013.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20013-objects as value to a dart map
  static Map<String, List<InlineResponse20013>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20013>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20013.listFromJson(value);
       });
     }
     return map;
  }
}

