part of openapi.api;

class InlineResponse2021 {
  
  String message = null;
  
  String url = null;

  InlineResponse2021({
    this.message,
    this.url,
  });

  @override
  String toString() {
    return 'InlineResponse2021[message=$message, url=$url, ]';
  }

  InlineResponse2021.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    message = json['message'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (message != null)
      json['message'] = message;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<InlineResponse2021> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2021>() : json.map((value) => InlineResponse2021.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2021> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2021>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2021.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2021-objects as value to a dart map
  static Map<String, List<InlineResponse2021>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2021>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2021.listFromJson(value);
       });
     }
     return map;
  }
}

