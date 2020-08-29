part of openapi.api;

class ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks {
  /* The `id` of the GitHub App. */
  int appId = null;
  /* Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them. */
  bool setting = true;

  ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks({
    this.appId,
    this.setting,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks[appId=$appId, setting=$setting, ]';
  }

  ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks>() : json.map((value) => ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks.listFromJson(value);
       });
     }
     return map;
  }
}

