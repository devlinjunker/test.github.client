part of openapi.api;

class ApplicationGrantApp {
  
  String clientId = null;
  
  String name = null;
  
  String url = null;

  ApplicationGrantApp({
    this.clientId,
    this.name,
    this.url,
  });

  @override
  String toString() {
    return 'ApplicationGrantApp[clientId=$clientId, name=$name, url=$url, ]';
  }

  ApplicationGrantApp.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    clientId = json['client_id'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (clientId != null)
      json['client_id'] = clientId;
    if (name != null)
      json['name'] = name;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ApplicationGrantApp> listFromJson(List<dynamic> json) {
    return json == null ? List<ApplicationGrantApp>() : json.map((value) => ApplicationGrantApp.fromJson(value)).toList();
  }

  static Map<String, ApplicationGrantApp> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ApplicationGrantApp>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ApplicationGrantApp.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ApplicationGrantApp-objects as value to a dart map
  static Map<String, List<ApplicationGrantApp>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ApplicationGrantApp>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ApplicationGrantApp.listFromJson(value);
       });
     }
     return map;
  }
}

