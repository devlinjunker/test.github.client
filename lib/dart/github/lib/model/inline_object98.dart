part of openapi.api;

class InlineObject98 {
  /* Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see \"[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).\" */
  String cname = null;
  
  AnyOf<string,object> source_ = null;

  InlineObject98({
    this.cname,
    this.source_,
  });

  @override
  String toString() {
    return 'InlineObject98[cname=$cname, source_=$source_, ]';
  }

  InlineObject98.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    cname = json['cname'];
    source_ = (json['source'] == null) ?
      null :
      AnyOf&lt;string,object&gt;.fromJson(json['source']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['cname'] = cname;
    if (source_ != null)
      json['source'] = source_;
    return json;
  }

  static List<InlineObject98> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject98>() : json.map((value) => InlineObject98.fromJson(value)).toList();
  }

  static Map<String, InlineObject98> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject98>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject98.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject98-objects as value to a dart map
  static Map<String, List<InlineObject98>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject98>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject98.listFromJson(value);
       });
     }
     return map;
  }
}

