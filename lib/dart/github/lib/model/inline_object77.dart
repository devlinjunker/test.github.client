part of openapi.api;

class InlineObject77 {
  /* Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import). */
  String useLfs = null;
  //enum useLfsEnum {  opt_in,  opt_out,  };{

  InlineObject77({
    this.useLfs,
  });

  @override
  String toString() {
    return 'InlineObject77[useLfs=$useLfs, ]';
  }

  InlineObject77.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    useLfs = json['use_lfs'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (useLfs != null)
      json['use_lfs'] = useLfs;
    return json;
  }

  static List<InlineObject77> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject77>() : json.map((value) => InlineObject77.fromJson(value)).toList();
  }

  static Map<String, InlineObject77> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject77>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject77.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject77-objects as value to a dart map
  static Map<String, List<InlineObject77>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject77>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject77.listFromJson(value);
       });
     }
     return map;
  }
}

