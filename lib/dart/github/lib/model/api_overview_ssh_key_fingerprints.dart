part of openapi.api;

class ApiOverviewSshKeyFingerprints {
  
  String mD5DSA = null;
  
  String mD5RSA = null;
  
  String sHA256DSA = null;
  
  String sHA256RSA = null;

  ApiOverviewSshKeyFingerprints({
    this.mD5DSA,
    this.mD5RSA,
    this.sHA256DSA,
    this.sHA256RSA,
  });

  @override
  String toString() {
    return 'ApiOverviewSshKeyFingerprints[mD5DSA=$mD5DSA, mD5RSA=$mD5RSA, sHA256DSA=$sHA256DSA, sHA256RSA=$sHA256RSA, ]';
  }

  ApiOverviewSshKeyFingerprints.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    mD5DSA = json['MD5_DSA'];
    mD5RSA = json['MD5_RSA'];
    sHA256DSA = json['SHA256_DSA'];
    sHA256RSA = json['SHA256_RSA'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (mD5DSA != null)
      json['MD5_DSA'] = mD5DSA;
    if (mD5RSA != null)
      json['MD5_RSA'] = mD5RSA;
    if (sHA256DSA != null)
      json['SHA256_DSA'] = sHA256DSA;
    if (sHA256RSA != null)
      json['SHA256_RSA'] = sHA256RSA;
    return json;
  }

  static List<ApiOverviewSshKeyFingerprints> listFromJson(List<dynamic> json) {
    return json == null ? List<ApiOverviewSshKeyFingerprints>() : json.map((value) => ApiOverviewSshKeyFingerprints.fromJson(value)).toList();
  }

  static Map<String, ApiOverviewSshKeyFingerprints> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ApiOverviewSshKeyFingerprints>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ApiOverviewSshKeyFingerprints.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ApiOverviewSshKeyFingerprints-objects as value to a dart map
  static Map<String, List<ApiOverviewSshKeyFingerprints>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ApiOverviewSshKeyFingerprints>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ApiOverviewSshKeyFingerprints.listFromJson(value);
       });
     }
     return map;
  }
}

