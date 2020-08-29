part of openapi.api;

class InlineObject55 {
  /* Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://developer.github.com/v3/checks/suites/#auto_trigger_checks-object) description for details. */
  List<ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks> autoTriggerChecks = [];

  InlineObject55({
    this.autoTriggerChecks,
  });

  @override
  String toString() {
    return 'InlineObject55[autoTriggerChecks=$autoTriggerChecks, ]';
  }

  InlineObject55.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    autoTriggerChecks = (json['auto_trigger_checks'] == null) ?
      null :
      ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks.listFromJson(json['auto_trigger_checks']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (autoTriggerChecks != null)
      json['auto_trigger_checks'] = autoTriggerChecks;
    return json;
  }

  static List<InlineObject55> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject55>() : json.map((value) => InlineObject55.fromJson(value)).toList();
  }

  static Map<String, InlineObject55> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject55>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject55.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject55-objects as value to a dart map
  static Map<String, List<InlineObject55>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject55>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject55.listFromJson(value);
       });
     }
     return map;
  }
}

