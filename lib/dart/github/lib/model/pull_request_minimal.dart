part of openapi.api;

class PullRequestMinimal {
  
  PullRequestMinimalBase base = null;
  
  PullRequestMinimalBase head = null;
  
  int id = null;
  
  int number = null;
  
  String url = null;

  PullRequestMinimal({
    this.base,
    this.head,
    this.id,
    this.number,
    this.url,
  });

  @override
  String toString() {
    return 'PullRequestMinimal[base=$base, head=$head, id=$id, number=$number, url=$url, ]';
  }

  PullRequestMinimal.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    base = (json['base'] == null) ?
      null :
      PullRequestMinimalBase.fromJson(json['base']);
    head = (json['head'] == null) ?
      null :
      PullRequestMinimalBase.fromJson(json['head']);
    id = json['id'];
    number = json['number'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (base != null)
      json['base'] = base;
    if (head != null)
      json['head'] = head;
    if (id != null)
      json['id'] = id;
    if (number != null)
      json['number'] = number;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<PullRequestMinimal> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestMinimal>() : json.map((value) => PullRequestMinimal.fromJson(value)).toList();
  }

  static Map<String, PullRequestMinimal> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestMinimal>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestMinimal.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestMinimal-objects as value to a dart map
  static Map<String, List<PullRequestMinimal>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestMinimal>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestMinimal.listFromJson(value);
       });
     }
     return map;
  }
}

