part of openapi.api;

class Hovercard {
  
  List<HovercardContexts> contexts = [];

  Hovercard({
    this.contexts,
  });

  @override
  String toString() {
    return 'Hovercard[contexts=$contexts, ]';
  }

  Hovercard.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contexts = (json['contexts'] == null) ?
      null :
      HovercardContexts.listFromJson(json['contexts']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contexts != null)
      json['contexts'] = contexts;
    return json;
  }

  static List<Hovercard> listFromJson(List<dynamic> json) {
    return json == null ? List<Hovercard>() : json.map((value) => Hovercard.fromJson(value)).toList();
  }

  static Map<String, Hovercard> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Hovercard>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Hovercard.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Hovercard-objects as value to a dart map
  static Map<String, List<Hovercard>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Hovercard>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Hovercard.listFromJson(value);
       });
     }
     return map;
  }
}

