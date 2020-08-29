part of openapi.api;

class CombinedBillingUsage {
  /* Numbers of days left in billing cycle. */
  int daysLeftInBillingCycle = null;
  /* Estimated storage space (GB) used in billing cycle. */
  int estimatedPaidStorageForMonth = null;
  /* Estimated sum of free and paid storage space (GB) used in billing cycle. */
  int estimatedStorageForMonth = null;

  CombinedBillingUsage({
    this.daysLeftInBillingCycle,
    this.estimatedPaidStorageForMonth,
    this.estimatedStorageForMonth,
  });

  @override
  String toString() {
    return 'CombinedBillingUsage[daysLeftInBillingCycle=$daysLeftInBillingCycle, estimatedPaidStorageForMonth=$estimatedPaidStorageForMonth, estimatedStorageForMonth=$estimatedStorageForMonth, ]';
  }

  CombinedBillingUsage.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    daysLeftInBillingCycle = json['days_left_in_billing_cycle'];
    estimatedPaidStorageForMonth = json['estimated_paid_storage_for_month'];
    estimatedStorageForMonth = json['estimated_storage_for_month'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (daysLeftInBillingCycle != null)
      json['days_left_in_billing_cycle'] = daysLeftInBillingCycle;
    if (estimatedPaidStorageForMonth != null)
      json['estimated_paid_storage_for_month'] = estimatedPaidStorageForMonth;
    if (estimatedStorageForMonth != null)
      json['estimated_storage_for_month'] = estimatedStorageForMonth;
    return json;
  }

  static List<CombinedBillingUsage> listFromJson(List<dynamic> json) {
    return json == null ? List<CombinedBillingUsage>() : json.map((value) => CombinedBillingUsage.fromJson(value)).toList();
  }

  static Map<String, CombinedBillingUsage> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CombinedBillingUsage>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CombinedBillingUsage.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CombinedBillingUsage-objects as value to a dart map
  static Map<String, List<CombinedBillingUsage>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CombinedBillingUsage>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CombinedBillingUsage.listFromJson(value);
       });
     }
     return map;
  }
}

