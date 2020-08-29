part of openapi.api;

class InlineObject139 {
  /* A GPG key in ASCII-armored format. */
  String armoredPublicKey = null;

  InlineObject139({
    this.armoredPublicKey,
  });

  @override
  String toString() {
    return 'InlineObject139[armoredPublicKey=$armoredPublicKey, ]';
  }

  InlineObject139.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    armoredPublicKey = json['armored_public_key'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (armoredPublicKey != null)
      json['armored_public_key'] = armoredPublicKey;
    return json;
  }

  static List<InlineObject139> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject139>() : json.map((value) => InlineObject139.fromJson(value)).toList();
  }

  static Map<String, InlineObject139> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject139>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject139.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject139-objects as value to a dart map
  static Map<String, List<InlineObject139>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject139>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject139.listFromJson(value);
       });
     }
     return map;
  }
}

