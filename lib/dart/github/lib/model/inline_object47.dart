part of openapi.api;

class InlineObject47 {
  /* Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://developer.github.com/v3/actions/secrets/#get-a-repository-public-key) endpoint. */
  String encryptedValue = null;
  /* ID of the key you used to encrypt the secret. */
  String keyId = null;

  InlineObject47({
    this.encryptedValue,
    this.keyId,
  });

  @override
  String toString() {
    return 'InlineObject47[encryptedValue=$encryptedValue, keyId=$keyId, ]';
  }

  InlineObject47.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    encryptedValue = json['encrypted_value'];
    keyId = json['key_id'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (encryptedValue != null)
      json['encrypted_value'] = encryptedValue;
    if (keyId != null)
      json['key_id'] = keyId;
    return json;
  }

  static List<InlineObject47> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject47>() : json.map((value) => InlineObject47.fromJson(value)).toList();
  }

  static Map<String, InlineObject47> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject47>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject47.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject47-objects as value to a dart map
  static Map<String, List<InlineObject47>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject47>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject47.listFromJson(value);
       });
     }
     return map;
  }
}

