part of openapi.api;

class ActionsBillingUsage {
  /* The amount of free GitHub Actions minutes available. */
  int includedMinutes = null;
  
  ActionsBillingUsageMinutesUsedBreakdown minutesUsedBreakdown = null;
  /* The sum of the free and paid GitHub Actions minutes used. */
  int totalMinutesUsed = null;
  /* The total paid GitHub Actions minutes used. */
  int totalPaidMinutesUsed = null;

  ActionsBillingUsage({
    this.includedMinutes,
    this.minutesUsedBreakdown,
    this.totalMinutesUsed,
    this.totalPaidMinutesUsed,
  });

  @override
  String toString() {
    return 'ActionsBillingUsage[includedMinutes=$includedMinutes, minutesUsedBreakdown=$minutesUsedBreakdown, totalMinutesUsed=$totalMinutesUsed, totalPaidMinutesUsed=$totalPaidMinutesUsed, ]';
  }

  ActionsBillingUsage.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    includedMinutes = json['included_minutes'];
    minutesUsedBreakdown = (json['minutes_used_breakdown'] == null) ?
      null :
      ActionsBillingUsageMinutesUsedBreakdown.fromJson(json['minutes_used_breakdown']);
    totalMinutesUsed = json['total_minutes_used'];
    totalPaidMinutesUsed = json['total_paid_minutes_used'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (includedMinutes != null)
      json['included_minutes'] = includedMinutes;
    if (minutesUsedBreakdown != null)
      json['minutes_used_breakdown'] = minutesUsedBreakdown;
    if (totalMinutesUsed != null)
      json['total_minutes_used'] = totalMinutesUsed;
    if (totalPaidMinutesUsed != null)
      json['total_paid_minutes_used'] = totalPaidMinutesUsed;
    return json;
  }

  static List<ActionsBillingUsage> listFromJson(List<dynamic> json) {
    return json == null ? List<ActionsBillingUsage>() : json.map((value) => ActionsBillingUsage.fromJson(value)).toList();
  }

  static Map<String, ActionsBillingUsage> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ActionsBillingUsage>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ActionsBillingUsage.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ActionsBillingUsage-objects as value to a dart map
  static Map<String, List<ActionsBillingUsage>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ActionsBillingUsage>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ActionsBillingUsage.listFromJson(value);
       });
     }
     return map;
  }
}

