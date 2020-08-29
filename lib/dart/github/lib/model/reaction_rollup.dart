part of openapi.api;

class ReactionRollup {
  
  int +1 = null;
  
  int n1 = null;
  
  int confused = null;
  
  int eyes = null;
  
  int heart = null;
  
  int hooray = null;
  
  int laugh = null;
  
  int rocket = null;
  
  int totalCount = null;
  
  String url = null;

  ReactionRollup({
    this.+1,
    this.n1,
    this.confused,
    this.eyes,
    this.heart,
    this.hooray,
    this.laugh,
    this.rocket,
    this.totalCount,
    this.url,
  });

  @override
  String toString() {
    return 'ReactionRollup[+1=$+1, n1=$n1, confused=$confused, eyes=$eyes, heart=$heart, hooray=$hooray, laugh=$laugh, rocket=$rocket, totalCount=$totalCount, url=$url, ]';
  }

  ReactionRollup.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    +1 = json['+1'];
    n1 = json['-1'];
    confused = json['confused'];
    eyes = json['eyes'];
    heart = json['heart'];
    hooray = json['hooray'];
    laugh = json['laugh'];
    rocket = json['rocket'];
    totalCount = json['total_count'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (+1 != null)
      json['+1'] = +1;
    if (n1 != null)
      json['-1'] = n1;
    if (confused != null)
      json['confused'] = confused;
    if (eyes != null)
      json['eyes'] = eyes;
    if (heart != null)
      json['heart'] = heart;
    if (hooray != null)
      json['hooray'] = hooray;
    if (laugh != null)
      json['laugh'] = laugh;
    if (rocket != null)
      json['rocket'] = rocket;
    if (totalCount != null)
      json['total_count'] = totalCount;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ReactionRollup> listFromJson(List<dynamic> json) {
    return json == null ? List<ReactionRollup>() : json.map((value) => ReactionRollup.fromJson(value)).toList();
  }

  static Map<String, ReactionRollup> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReactionRollup>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReactionRollup.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReactionRollup-objects as value to a dart map
  static Map<String, List<ReactionRollup>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReactionRollup>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReactionRollup.listFromJson(value);
       });
     }
     return map;
  }
}

