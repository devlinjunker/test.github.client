part of openapi.api;

class ActionsBillingUsageMinutesUsedBreakdown {
  /* Total minutes used on macOS runner machines. */
  int MACOS = null;
  /* Total minutes used on Ubuntu runner machines. */
  int UBUNTU = null;
  /* Total minutes used on Windows runner machines. */
  int WINDOWS = null;

  ActionsBillingUsageMinutesUsedBreakdown({
    this.MACOS,
    this.UBUNTU,
    this.WINDOWS,
  });

  @override
  String toString() {
    return 'ActionsBillingUsageMinutesUsedBreakdown[MACOS=$MACOS, UBUNTU=$UBUNTU, WINDOWS=$WINDOWS, ]';
  }

  ActionsBillingUsageMinutesUsedBreakdown.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    MACOS = json['MACOS'];
    UBUNTU = json['UBUNTU'];
    WINDOWS = json['WINDOWS'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (MACOS != null)
      json['MACOS'] = MACOS;
    if (UBUNTU != null)
      json['UBUNTU'] = UBUNTU;
    if (WINDOWS != null)
      json['WINDOWS'] = WINDOWS;
    return json;
  }

  static List<ActionsBillingUsageMinutesUsedBreakdown> listFromJson(List<dynamic> json) {
    return json == null ? List<ActionsBillingUsageMinutesUsedBreakdown>() : json.map((value) => ActionsBillingUsageMinutesUsedBreakdown.fromJson(value)).toList();
  }

  static Map<String, ActionsBillingUsageMinutesUsedBreakdown> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ActionsBillingUsageMinutesUsedBreakdown>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ActionsBillingUsageMinutesUsedBreakdown.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ActionsBillingUsageMinutesUsedBreakdown-objects as value to a dart map
  static Map<String, List<ActionsBillingUsageMinutesUsedBreakdown>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ActionsBillingUsageMinutesUsedBreakdown>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ActionsBillingUsageMinutesUsedBreakdown.listFromJson(value);
       });
     }
     return map;
  }
}

