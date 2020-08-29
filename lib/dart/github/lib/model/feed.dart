part of openapi.api;

class Feed {
  
  FeedLinks links = null;
  
  String currentUserActorUrl = null;
  
  String currentUserOrganizationUrl = null;
  
  List<String> currentUserOrganizationUrls = [];
  
  String currentUserPublicUrl = null;
  
  String currentUserUrl = null;
  
  String securityAdvisoriesUrl = null;
  
  String timelineUrl = null;
  
  String userUrl = null;

  Feed({
    this.links,
    this.currentUserActorUrl,
    this.currentUserOrganizationUrl,
    this.currentUserOrganizationUrls,
    this.currentUserPublicUrl,
    this.currentUserUrl,
    this.securityAdvisoriesUrl,
    this.timelineUrl,
    this.userUrl,
  });

  @override
  String toString() {
    return 'Feed[links=$links, currentUserActorUrl=$currentUserActorUrl, currentUserOrganizationUrl=$currentUserOrganizationUrl, currentUserOrganizationUrls=$currentUserOrganizationUrls, currentUserPublicUrl=$currentUserPublicUrl, currentUserUrl=$currentUserUrl, securityAdvisoriesUrl=$securityAdvisoriesUrl, timelineUrl=$timelineUrl, userUrl=$userUrl, ]';
  }

  Feed.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      FeedLinks.fromJson(json['_links']);
    currentUserActorUrl = json['current_user_actor_url'];
    currentUserOrganizationUrl = json['current_user_organization_url'];
    currentUserOrganizationUrls = (json['current_user_organization_urls'] == null) ?
      null :
      (json['current_user_organization_urls'] as List).cast<String>();
    currentUserPublicUrl = json['current_user_public_url'];
    currentUserUrl = json['current_user_url'];
    securityAdvisoriesUrl = json['security_advisories_url'];
    timelineUrl = json['timeline_url'];
    userUrl = json['user_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (links != null)
      json['_links'] = links;
    if (currentUserActorUrl != null)
      json['current_user_actor_url'] = currentUserActorUrl;
    if (currentUserOrganizationUrl != null)
      json['current_user_organization_url'] = currentUserOrganizationUrl;
    if (currentUserOrganizationUrls != null)
      json['current_user_organization_urls'] = currentUserOrganizationUrls;
    if (currentUserPublicUrl != null)
      json['current_user_public_url'] = currentUserPublicUrl;
    if (currentUserUrl != null)
      json['current_user_url'] = currentUserUrl;
    if (securityAdvisoriesUrl != null)
      json['security_advisories_url'] = securityAdvisoriesUrl;
    if (timelineUrl != null)
      json['timeline_url'] = timelineUrl;
    if (userUrl != null)
      json['user_url'] = userUrl;
    return json;
  }

  static List<Feed> listFromJson(List<dynamic> json) {
    return json == null ? List<Feed>() : json.map((value) => Feed.fromJson(value)).toList();
  }

  static Map<String, Feed> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Feed>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Feed.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Feed-objects as value to a dart map
  static Map<String, List<Feed>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Feed>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Feed.listFromJson(value);
       });
     }
     return map;
  }
}

