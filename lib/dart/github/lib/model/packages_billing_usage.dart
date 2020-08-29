part of openapi.api;

class PackagesBillingUsage {
  /* Free storage space (GB) for GitHub Packages. */
  int includedGigabytesBandwidth = null;
  /* Sum of the free and paid storage space (GB) for GitHuub Packages. */
  int totalGigabytesBandwidthUsed = null;
  /* Total paid storage space (GB) for GitHuub Packages. */
  int totalPaidGigabytesBandwidthUsed = null;

  PackagesBillingUsage({
    this.includedGigabytesBandwidth,
    this.totalGigabytesBandwidthUsed,
    this.totalPaidGigabytesBandwidthUsed,
  });

  @override
  String toString() {
    return 'PackagesBillingUsage[includedGigabytesBandwidth=$includedGigabytesBandwidth, totalGigabytesBandwidthUsed=$totalGigabytesBandwidthUsed, totalPaidGigabytesBandwidthUsed=$totalPaidGigabytesBandwidthUsed, ]';
  }

  PackagesBillingUsage.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    includedGigabytesBandwidth = json['included_gigabytes_bandwidth'];
    totalGigabytesBandwidthUsed = json['total_gigabytes_bandwidth_used'];
    totalPaidGigabytesBandwidthUsed = json['total_paid_gigabytes_bandwidth_used'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (includedGigabytesBandwidth != null)
      json['included_gigabytes_bandwidth'] = includedGigabytesBandwidth;
    if (totalGigabytesBandwidthUsed != null)
      json['total_gigabytes_bandwidth_used'] = totalGigabytesBandwidthUsed;
    if (totalPaidGigabytesBandwidthUsed != null)
      json['total_paid_gigabytes_bandwidth_used'] = totalPaidGigabytesBandwidthUsed;
    return json;
  }

  static List<PackagesBillingUsage> listFromJson(List<dynamic> json) {
    return json == null ? List<PackagesBillingUsage>() : json.map((value) => PackagesBillingUsage.fromJson(value)).toList();
  }

  static Map<String, PackagesBillingUsage> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PackagesBillingUsage>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PackagesBillingUsage.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PackagesBillingUsage-objects as value to a dart map
  static Map<String, List<PackagesBillingUsage>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PackagesBillingUsage>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PackagesBillingUsage.listFromJson(value);
       });
     }
     return map;
  }
}

