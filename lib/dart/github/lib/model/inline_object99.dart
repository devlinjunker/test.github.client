part of openapi.api;

class InlineObject99 {
  
  ReposOwnerRepoPagesSource source_ = null;

  InlineObject99({
    this.source_,
  });

  @override
  String toString() {
    return 'InlineObject99[source_=$source_, ]';
  }

  InlineObject99.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    source_ = (json['source'] == null) ?
      null :
      ReposOwnerRepoPagesSource.fromJson(json['source']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (source_ != null)
      json['source'] = source_;
    return json;
  }

  static List<InlineObject99> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject99>() : json.map((value) => InlineObject99.fromJson(value)).toList();
  }

  static Map<String, InlineObject99> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject99>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject99.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject99-objects as value to a dart map
  static Map<String, List<InlineObject99>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject99>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject99.listFromJson(value);
       });
     }
     return map;
  }
}

