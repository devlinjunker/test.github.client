part of openapi.api;

class HovercardContexts {
  
  String message = null;
  
  String octicon = null;

  HovercardContexts({
    this.message,
    this.octicon,
  });

  @override
  String toString() {
    return 'HovercardContexts[message=$message, octicon=$octicon, ]';
  }

  HovercardContexts.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    message = json['message'];
    octicon = json['octicon'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (message != null)
      json['message'] = message;
    if (octicon != null)
      json['octicon'] = octicon;
    return json;
  }

  static List<HovercardContexts> listFromJson(List<dynamic> json) {
    return json == null ? List<HovercardContexts>() : json.map((value) => HovercardContexts.fromJson(value)).toList();
  }

  static Map<String, HovercardContexts> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, HovercardContexts>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = HovercardContexts.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of HovercardContexts-objects as value to a dart map
  static Map<String, List<HovercardContexts>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<HovercardContexts>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = HovercardContexts.listFromJson(value);
       });
     }
     return map;
  }
}

