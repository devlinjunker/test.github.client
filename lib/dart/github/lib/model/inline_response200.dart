part of openapi.api;

class InlineResponse200 {
  
  String authorizationsUrl = null;
  
  String codeSearchUrl = null;
  
  String commitSearchUrl = null;
  
  String currentUserAuthorizationsHtmlUrl = null;
  
  String currentUserRepositoriesUrl = null;
  
  String currentUserUrl = null;
  
  String emailsUrl = null;
  
  String emojisUrl = null;
  
  String eventsUrl = null;
  
  String feedsUrl = null;
  
  String followersUrl = null;
  
  String followingUrl = null;
  
  String gistsUrl = null;
  
  String hubUrl = null;
  
  String issueSearchUrl = null;
  
  String issuesUrl = null;
  
  String keysUrl = null;
  
  String labelSearchUrl = null;
  
  String notificationsUrl = null;
  
  String organizationRepositoriesUrl = null;
  
  String organizationTeamsUrl = null;
  
  String organizationUrl = null;
  
  String publicGistsUrl = null;
  
  String rateLimitUrl = null;
  
  String repositorySearchUrl = null;
  
  String repositoryUrl = null;
  
  String starredGistsUrl = null;
  
  String starredUrl = null;
  
  String topicSearchUrl = null;
  
  String userOrganizationsUrl = null;
  
  String userRepositoriesUrl = null;
  
  String userSearchUrl = null;
  
  String userUrl = null;

  InlineResponse200({
    this.authorizationsUrl,
    this.codeSearchUrl,
    this.commitSearchUrl,
    this.currentUserAuthorizationsHtmlUrl,
    this.currentUserRepositoriesUrl,
    this.currentUserUrl,
    this.emailsUrl,
    this.emojisUrl,
    this.eventsUrl,
    this.feedsUrl,
    this.followersUrl,
    this.followingUrl,
    this.gistsUrl,
    this.hubUrl,
    this.issueSearchUrl,
    this.issuesUrl,
    this.keysUrl,
    this.labelSearchUrl,
    this.notificationsUrl,
    this.organizationRepositoriesUrl,
    this.organizationTeamsUrl,
    this.organizationUrl,
    this.publicGistsUrl,
    this.rateLimitUrl,
    this.repositorySearchUrl,
    this.repositoryUrl,
    this.starredGistsUrl,
    this.starredUrl,
    this.topicSearchUrl,
    this.userOrganizationsUrl,
    this.userRepositoriesUrl,
    this.userSearchUrl,
    this.userUrl,
  });

  @override
  String toString() {
    return 'InlineResponse200[authorizationsUrl=$authorizationsUrl, codeSearchUrl=$codeSearchUrl, commitSearchUrl=$commitSearchUrl, currentUserAuthorizationsHtmlUrl=$currentUserAuthorizationsHtmlUrl, currentUserRepositoriesUrl=$currentUserRepositoriesUrl, currentUserUrl=$currentUserUrl, emailsUrl=$emailsUrl, emojisUrl=$emojisUrl, eventsUrl=$eventsUrl, feedsUrl=$feedsUrl, followersUrl=$followersUrl, followingUrl=$followingUrl, gistsUrl=$gistsUrl, hubUrl=$hubUrl, issueSearchUrl=$issueSearchUrl, issuesUrl=$issuesUrl, keysUrl=$keysUrl, labelSearchUrl=$labelSearchUrl, notificationsUrl=$notificationsUrl, organizationRepositoriesUrl=$organizationRepositoriesUrl, organizationTeamsUrl=$organizationTeamsUrl, organizationUrl=$organizationUrl, publicGistsUrl=$publicGistsUrl, rateLimitUrl=$rateLimitUrl, repositorySearchUrl=$repositorySearchUrl, repositoryUrl=$repositoryUrl, starredGistsUrl=$starredGistsUrl, starredUrl=$starredUrl, topicSearchUrl=$topicSearchUrl, userOrganizationsUrl=$userOrganizationsUrl, userRepositoriesUrl=$userRepositoriesUrl, userSearchUrl=$userSearchUrl, userUrl=$userUrl, ]';
  }

  InlineResponse200.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    authorizationsUrl = json['authorizations_url'];
    codeSearchUrl = json['code_search_url'];
    commitSearchUrl = json['commit_search_url'];
    currentUserAuthorizationsHtmlUrl = json['current_user_authorizations_html_url'];
    currentUserRepositoriesUrl = json['current_user_repositories_url'];
    currentUserUrl = json['current_user_url'];
    emailsUrl = json['emails_url'];
    emojisUrl = json['emojis_url'];
    eventsUrl = json['events_url'];
    feedsUrl = json['feeds_url'];
    followersUrl = json['followers_url'];
    followingUrl = json['following_url'];
    gistsUrl = json['gists_url'];
    hubUrl = json['hub_url'];
    issueSearchUrl = json['issue_search_url'];
    issuesUrl = json['issues_url'];
    keysUrl = json['keys_url'];
    labelSearchUrl = json['label_search_url'];
    notificationsUrl = json['notifications_url'];
    organizationRepositoriesUrl = json['organization_repositories_url'];
    organizationTeamsUrl = json['organization_teams_url'];
    organizationUrl = json['organization_url'];
    publicGistsUrl = json['public_gists_url'];
    rateLimitUrl = json['rate_limit_url'];
    repositorySearchUrl = json['repository_search_url'];
    repositoryUrl = json['repository_url'];
    starredGistsUrl = json['starred_gists_url'];
    starredUrl = json['starred_url'];
    topicSearchUrl = json['topic_search_url'];
    userOrganizationsUrl = json['user_organizations_url'];
    userRepositoriesUrl = json['user_repositories_url'];
    userSearchUrl = json['user_search_url'];
    userUrl = json['user_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (authorizationsUrl != null)
      json['authorizations_url'] = authorizationsUrl;
    if (codeSearchUrl != null)
      json['code_search_url'] = codeSearchUrl;
    if (commitSearchUrl != null)
      json['commit_search_url'] = commitSearchUrl;
    if (currentUserAuthorizationsHtmlUrl != null)
      json['current_user_authorizations_html_url'] = currentUserAuthorizationsHtmlUrl;
    if (currentUserRepositoriesUrl != null)
      json['current_user_repositories_url'] = currentUserRepositoriesUrl;
    if (currentUserUrl != null)
      json['current_user_url'] = currentUserUrl;
    if (emailsUrl != null)
      json['emails_url'] = emailsUrl;
    if (emojisUrl != null)
      json['emojis_url'] = emojisUrl;
    if (eventsUrl != null)
      json['events_url'] = eventsUrl;
    if (feedsUrl != null)
      json['feeds_url'] = feedsUrl;
    if (followersUrl != null)
      json['followers_url'] = followersUrl;
    if (followingUrl != null)
      json['following_url'] = followingUrl;
    if (gistsUrl != null)
      json['gists_url'] = gistsUrl;
    if (hubUrl != null)
      json['hub_url'] = hubUrl;
    if (issueSearchUrl != null)
      json['issue_search_url'] = issueSearchUrl;
    if (issuesUrl != null)
      json['issues_url'] = issuesUrl;
    if (keysUrl != null)
      json['keys_url'] = keysUrl;
    if (labelSearchUrl != null)
      json['label_search_url'] = labelSearchUrl;
    if (notificationsUrl != null)
      json['notifications_url'] = notificationsUrl;
    if (organizationRepositoriesUrl != null)
      json['organization_repositories_url'] = organizationRepositoriesUrl;
    if (organizationTeamsUrl != null)
      json['organization_teams_url'] = organizationTeamsUrl;
    if (organizationUrl != null)
      json['organization_url'] = organizationUrl;
    if (publicGistsUrl != null)
      json['public_gists_url'] = publicGistsUrl;
    if (rateLimitUrl != null)
      json['rate_limit_url'] = rateLimitUrl;
    if (repositorySearchUrl != null)
      json['repository_search_url'] = repositorySearchUrl;
    if (repositoryUrl != null)
      json['repository_url'] = repositoryUrl;
    if (starredGistsUrl != null)
      json['starred_gists_url'] = starredGistsUrl;
    if (starredUrl != null)
      json['starred_url'] = starredUrl;
    if (topicSearchUrl != null)
      json['topic_search_url'] = topicSearchUrl;
    if (userOrganizationsUrl != null)
      json['user_organizations_url'] = userOrganizationsUrl;
    if (userRepositoriesUrl != null)
      json['user_repositories_url'] = userRepositoriesUrl;
    if (userSearchUrl != null)
      json['user_search_url'] = userSearchUrl;
    if (userUrl != null)
      json['user_url'] = userUrl;
    return json;
  }

  static List<InlineResponse200> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse200>() : json.map((value) => InlineResponse200.fromJson(value)).toList();
  }

  static Map<String, InlineResponse200> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse200>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse200.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse200-objects as value to a dart map
  static Map<String, List<InlineResponse200>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse200>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse200.listFromJson(value);
       });
     }
     return map;
  }
}

