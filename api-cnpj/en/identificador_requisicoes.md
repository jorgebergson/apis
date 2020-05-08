# Optional Request Identifier

## Request header field (X-Request-Tag)

This field is optional when using API calls and serves as a request identifier. If a company needs, for example, to group the number of requests made by each department, it can use this field in order to identify in the billing the number of requests for each group item.

The field is free text (string up to 32 characters) and has no content validation. Therefore, it is up to the customer to keep track of the information that is sent to this field so that the billing report makes the appropriate grouping.

This attribute can be used by the class entity and / or economic group in the global modality, with an entity charge for the purposes of identifying the associate who makes the request. In the case of class entities or economic groups that carry out the contract at a cost to the member, it is not necessary to carry out the grouping, as each member will have his own consumption key.