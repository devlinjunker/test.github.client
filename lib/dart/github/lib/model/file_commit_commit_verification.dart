part of openapi.api;

class FileCommitCommitVerification {
  
  String payload = null;
  
  String reason = null;
  
  String signature = null;
  
  bool verified = null;

  FileCommitCommitVerification({
    this.payload,
    this.reason,
    this.signature,
    this.verified,
  });

  @override
  String toString() {
    return 'FileCommitCommitVerification[payload=$payload, reason=$reason, signature=$signature, verified=$verified, ]';
  }

  FileCommitCommitVerification.fromJson(Map<String, dynamic> json) {
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

  static List<FileCommitCommitVerification> listFromJson(List<dynamic> json) {
    return json == null ? List<FileCommitCommitVerification>() : json.map((value) => FileCommitCommitVerification.fromJson(value)).toList();
  }

  static Map<String, FileCommitCommitVerification> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, FileCommitCommitVerification>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = FileCommitCommitVerification.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FileCommitCommitVerification-objects as value to a dart map
  static Map<String, List<FileCommitCommitVerification>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<FileCommitCommitVerification>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = FileCommitCommitVerification.listFromJson(value);
       });
     }
     return map;
  }
}

