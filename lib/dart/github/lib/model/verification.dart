part of openapi.api;

class Verification {
  
  String payload = null;
  
  String reason = null;
  
  String signature = null;
  
  bool verified = null;

  Verification({
    this.payload,
    this.reason,
    this.signature,
    this.verified,
  });

  @override
  String toString() {
    return 'Verification[payload=$payload, reason=$reason, signature=$signature, verified=$verified, ]';
  }

  Verification.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    payload = json['payload'];
    reason = json['reason'];
    signature = json['signature'];
    verified = json['verified'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['payload'] = payload;
    if (reason != null)
      json['reason'] = reason;
      json['signature'] = signature;
    if (verified != null)
      json['verified'] = verified;
    return json;
  }

  static List<Verification> listFromJson(List<dynamic> json) {
    return json == null ? List<Verification>() : json.map((value) => Verification.fromJson(value)).toList();
  }

  static Map<String, Verification> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Verification>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Verification.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Verification-objects as value to a dart map
  static Map<String, List<Verification>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Verification>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Verification.listFromJson(value);
       });
     }
     return map;
  }
}

