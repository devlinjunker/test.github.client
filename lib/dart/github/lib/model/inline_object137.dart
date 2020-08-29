part of openapi.api;

class InlineObject137 {
  /* The new short biography of the user. */
  String bio = null;
  /* The new blog URL of the user. */
  String blog = null;
  /* The new company of the user. */
  String company = null;
  /* The publicly visible email address of the user. */
  String email = null;
  /* The new hiring availability of the user. */
  bool hireable = null;
  /* The new location of the user. */
  String location = null;
  /* The new name of the user. */
  String name = null;
  /* The new Twitter username of the user. */
  String twitterUsername = null;

  InlineObject137({
    this.bio,
    this.blog,
    this.company,
    this.email,
    this.hireable,
    this.location,
    this.name,
    this.twitterUsername,
  });

  @override
  String toString() {
    return 'InlineObject137[bio=$bio, blog=$blog, company=$company, email=$email, hireable=$hireable, location=$location, name=$name, twitterUsername=$twitterUsername, ]';
  }

  InlineObject137.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    bio = json['bio'];
    blog = json['blog'];
    company = json['company'];
    email = json['email'];
    hireable = json['hireable'];
    location = json['location'];
    name = json['name'];
    twitterUsername = json['twitter_username'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (bio != null)
      json['bio'] = bio;
    if (blog != null)
      json['blog'] = blog;
    if (company != null)
      json['company'] = company;
    if (email != null)
      json['email'] = email;
    if (hireable != null)
      json['hireable'] = hireable;
    if (location != null)
      json['location'] = location;
    if (name != null)
      json['name'] = name;
      json['twitter_username'] = twitterUsername;
    return json;
  }

  static List<InlineObject137> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject137>() : json.map((value) => InlineObject137.fromJson(value)).toList();
  }

  static Map<String, InlineObject137> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject137>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject137.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject137-objects as value to a dart map
  static Map<String, List<InlineObject137>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject137>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject137.listFromJson(value);
       });
     }
     return map;
  }
}

