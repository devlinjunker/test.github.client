part of openapi.api;

class Page {
  /* The Pages site's custom domain */
  String cname = null;
  /* Whether the Page has a custom 404 page. */
  bool custom404 = false;
  /* The web address the Page can be accessed from. */
  String htmlUrl = null;
  
  PagesSourceHash source_ = null;
  /* The status of the most recent build of the Page. */
  String status = null;
  //enum statusEnum {  built,  building,  errored,  };{
  /* The API address for accessing this Page resource. */
  String url = null;

  Page({
    this.cname,
    this.custom404,
    this.htmlUrl,
    this.source_,
    this.status,
    this.url,
  });

  @override
  String toString() {
    return 'Page[cname=$cname, custom404=$custom404, htmlUrl=$htmlUrl, source_=$source_, status=$status, url=$url, ]';
  }

  Page.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    cname = json['cname'];
    custom404 = json['custom_404'];
    htmlUrl = json['html_url'];
    source_ = (json['source'] == null) ?
      null :
      PagesSourceHash.fromJson(json['source']);
    status = json['status'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['cname'] = cname;
    if (custom404 != null)
      json['custom_404'] = custom404;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (source_ != null)
      json['source'] = source_;
      json['status'] = status;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Page> listFromJson(List<dynamic> json) {
    return json == null ? List<Page>() : json.map((value) => Page.fromJson(value)).toList();
  }

  static Map<String, Page> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Page>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Page.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Page-objects as value to a dart map
  static Map<String, List<Page>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Page>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Page.listFromJson(value);
       });
     }
     return map;
  }
}

