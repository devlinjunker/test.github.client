part of openapi.api;

class InlineResponse403Block {
  
  String createdAt = null;
  
  String htmlUrl = null;
  
  String reason = null;

  InlineResponse403Block({
    this.createdAt,
    this.htmlUrl,
    this.reason,
  });

  @override
  String toString() {
    return 'InlineResponse403Block[createdAt=$createdAt, htmlUrl=$htmlUrl, reason=$reason, ]';
  }

  InlineResponse403Block.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = json['created_at'];
    htmlUrl = json['html_url'];
    reason = json['reason'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt;
      json['html_url'] = htmlUrl;
    if (reason != null)
      json['reason'] = reason;
    return json;
  }

  static List<InlineResponse403Block> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse403Block>() : json.map((value) => InlineResponse403Block.fromJson(value)).toList();
  }

  static Map<String, InlineResponse403Block> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse403Block>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse403Block.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse403Block-objects as value to a dart map
  static Map<String, List<InlineResponse403Block>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse403Block>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse403Block.listFromJson(value);
       });
     }
     return map;
  }
}

