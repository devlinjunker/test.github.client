part of openapi.api;

class InlineObject18 {
  /* An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) endpoints. */
  List<int> selectedRepositoryIds = [];

  InlineObject18({
    this.selectedRepositoryIds,
  });

  @override
  String toString() {
    return 'InlineObject18[selectedRepositoryIds=$selectedRepositoryIds, ]';
  }

  InlineObject18.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    selectedRepositoryIds = (json['selected_repository_ids'] == null) ?
      null :
      (json['selected_repository_ids'] as List).cast<int>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (selectedRepositoryIds != null)
      json['selected_repository_ids'] = selectedRepositoryIds;
    return json;
  }

  static List<InlineObject18> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject18>() : json.map((value) => InlineObject18.fromJson(value)).toList();
  }

  static Map<String, InlineObject18> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject18>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject18.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject18-objects as value to a dart map
  static Map<String, List<InlineObject18>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject18>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject18.listFromJson(value);
       });
     }
     return map;
  }
}

