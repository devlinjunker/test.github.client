part of openapi.api;

class InlineResponse20019 {
  
  bool incompleteResults = null;
  
  List<UserSearchResultItem> items = [];
  
  int totalCount = null;

  InlineResponse20019({
    this.incompleteResults,
    this.items,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse20019[incompleteResults=$incompleteResults, items=$items, totalCount=$totalCount, ]';
  }

  InlineResponse20019.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    incompleteResults = json['incomplete_results'];
    items = (json['items'] == null) ?
      null :
      UserSearchResultItem.listFromJson(json['items']);
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

  static List<InlineResponse20019> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20019>() : json.map((value) => InlineResponse20019.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20019> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20019>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20019.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20019-objects as value to a dart map
  static Map<String, List<InlineResponse20019>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20019>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20019.listFromJson(value);
       });
     }
     return map;
  }
}

