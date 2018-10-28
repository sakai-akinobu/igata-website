export default `{
  "$id": "Definition",
  "type": "object",
  "required": [
    "foo"
  ],
  "properties": {
    "foo": {
      "type": "string"
    },
    "bar": {
      "type": ["number", "string"]
    }
  }
}
`;
