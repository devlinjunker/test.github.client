part of openapi.api;

class InlineObject89 {
  /* The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:   \\* `off-topic`   \\* `too heated`   \\* `resolved`   \\* `spam` */
  String lockReason = null;
  //enum lockReasonEnum {  off-topic,  too heated,  resolved,  spam,  };{

  InlineObject89({
    this.lockReason,
  });

  @override
  String toString() {
    return 'InlineObject89[lockReason=$lockReason, ]';
  }

  InlineObject89.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    lockReason = json['lock_reason'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (lockReason != null)
      json['lock_reason'] = lockReason;
    return json;
  }

  static List<InlineObject89> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject89>() : json.map((value) => InlineObject89.fromJson(value)).toList();
  }

  static Map<String, InlineObject89> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject89>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject89.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject89-objects as value to a dart map
  static Map<String, List<InlineObject89>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject89>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject89.listFromJson(value);
       });
     }
     return map;
  }
}

