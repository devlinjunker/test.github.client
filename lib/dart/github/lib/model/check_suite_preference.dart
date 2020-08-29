part of openapi.api;

class CheckSuitePreference {
  
  CheckSuitePreferencePreferences preferences = null;
  
  Repository repository = null;

  CheckSuitePreference({
    this.preferences,
    this.repository,
  });

  @override
  String toString() {
    return 'CheckSuitePreference[preferences=$preferences, repository=$repository, ]';
  }

  CheckSuitePreference.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    preferences = (json['preferences'] == null) ?
      null :
      CheckSuitePreferencePreferences.fromJson(json['preferences']);
    repository = (json['repository'] == null) ?
      null :
      Repository.fromJson(json['repository']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (preferences != null)
      json['preferences'] = preferences;
    if (repository != null)
      json['repository'] = repository;
    return json;
  }

  static List<CheckSuitePreference> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckSuitePreference>() : json.map((value) => CheckSuitePreference.fromJson(value)).toList();
  }

  static Map<String, CheckSuitePreference> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckSuitePreference>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckSuitePreference.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckSuitePreference-objects as value to a dart map
  static Map<String, List<CheckSuitePreference>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckSuitePreference>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckSuitePreference.listFromJson(value);
       });
     }
     return map;
  }
}

