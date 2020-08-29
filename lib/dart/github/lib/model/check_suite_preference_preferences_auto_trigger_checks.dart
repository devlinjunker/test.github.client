part of openapi.api;

class CheckSuitePreferencePreferencesAutoTriggerChecks {
  
  int appId = null;
  
  bool setting = null;

  CheckSuitePreferencePreferencesAutoTriggerChecks({
    this.appId,
    this.setting,
  });

  @override
  String toString() {
    return 'CheckSuitePreferencePreferencesAutoTriggerChecks[appId=$appId, setting=$setting, ]';
  }

  CheckSuitePreferencePreferencesAutoTriggerChecks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    appId = json['app_id'];
    setting = json['setting'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (appId != null)
      json['app_id'] = appId;
    if (setting != null)
      json['setting'] = setting;
    return json;
  }

  static List<CheckSuitePreferencePreferencesAutoTriggerChecks> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckSuitePreferencePreferencesAutoTriggerChecks>() : json.map((value) => CheckSuitePreferencePreferencesAutoTriggerChecks.fromJson(value)).toList();
  }

  static Map<String, CheckSuitePreferencePreferencesAutoTriggerChecks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckSuitePreferencePreferencesAutoTriggerChecks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckSuitePreferencePreferencesAutoTriggerChecks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckSuitePreferencePreferencesAutoTriggerChecks-objects as value to a dart map
  static Map<String, List<CheckSuitePreferencePreferencesAutoTriggerChecks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckSuitePreferencePreferencesAutoTriggerChecks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckSuitePreferencePreferencesAutoTriggerChecks.listFromJson(value);
       });
     }
     return map;
  }
}

