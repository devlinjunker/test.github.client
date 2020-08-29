part of openapi.api;

class InlineResponse403 {
  
  InlineResponse403Block block = null;
  
  String documentationUrl = null;
  
  String message = null;

  InlineResponse403({
    this.block,
    this.documentationUrl,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse403[block=$block, documentationUrl=$documentationUrl, message=$message, ]';
  }

  InlineResponse403.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    block = (json['block'] == null) ?
      null :
      InlineResponse403Block.fromJson(json['block']);
    documentationUrl = json['documentation_url'];
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (block != null)
      json['block'] = block;
    if (documentationUrl != null)
      json['documentation_url'] = documentationUrl;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineResponse403> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse403>() : json.map((value) => InlineResponse403.fromJson(value)).toList();
  }

  static Map<String, InlineResponse403> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse403>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse403.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse403-objects as value to a dart map
  static Map<String, List<InlineResponse403>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse403>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse403.listFromJson(value);
       });
     }
     return map;
  }
}

