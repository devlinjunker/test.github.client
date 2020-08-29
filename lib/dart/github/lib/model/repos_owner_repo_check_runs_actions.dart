part of openapi.api;

class ReposOwnerRepoCheckRunsActions {
  /* A short explanation of what this action would do. The maximum size is 40 characters. */
  String description = null;
  /* A reference for the action on the integrator's system. The maximum size is 20 characters. */
  String identifier = null;
  /* The text to be displayed on a button in the web UI. The maximum size is 20 characters. */
  String label = null;

  ReposOwnerRepoCheckRunsActions({
    this.description,
    this.identifier,
    this.label,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoCheckRunsActions[description=$description, identifier=$identifier, label=$label, ]';
  }

  ReposOwnerRepoCheckRunsActions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    identifier = json['identifier'];
    label = json['label'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (description != null)
      json['description'] = description;
    if (identifier != null)
      json['identifier'] = identifier;
    if (label != null)
      json['label'] = label;
    return json;
  }

  static List<ReposOwnerRepoCheckRunsActions> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoCheckRunsActions>() : json.map((value) => ReposOwnerRepoCheckRunsActions.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoCheckRunsActions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoCheckRunsActions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoCheckRunsActions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoCheckRunsActions-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoCheckRunsActions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoCheckRunsActions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoCheckRunsActions.listFromJson(value);
       });
     }
     return map;
  }
}

