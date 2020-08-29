part of openapi.api;

class CheckSuitePreferencePreferences {
  
  List<CheckSuitePreferencePreferencesAutoTriggerChecks> autoTriggerChecks = [];

  CheckSuitePreferencePreferences({
    this.autoTriggerChecks,
  });

  @override
  String toString() {
    return 'CheckSuitePreferencePreferences[autoTriggerChecks=$autoTriggerChecks, ]';
  }

  CheckSuitePreferencePreferences.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    autoTriggerChecks = (json['auto_trigger_checks'] == null) ?
      null :
      CheckSuitePreferencePreferencesAutoTriggerChecks.listFromJson(json['auto_trigger_checks']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (autoTriggerChecks != null)
      json['auto_trigger_checks'] = autoTriggerChecks;
    return json;
  }

  static List<CheckSuitePreferencePreferences> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckSuitePreferencePreferences>() : json.map((value) => CheckSuitePreferencePreferences.fromJson(value)).toList();
  }

  static Map<String, CheckSuitePreferencePreferences> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckSuitePreferencePreferences>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckSuitePreferencePreferences.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckSuitePreferencePreferences-objects as value to a dart map
  static Map<String, List<CheckSuitePreferencePreferences>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckSuitePreferencePreferences>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckSuitePreferencePreferences.listFromJson(value);
       });
     }
     return map;
  }
}

