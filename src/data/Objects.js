const objects = [
  {
    "name": "Equipment",
    "properties": [
      {
        "name": "Name",
        "type": "text",
        "validation": {
          "required": true,
          "max-length": 100
        }
      },
      {
        "name": "Price",
        "type": "currency",
        "validation": {
          "required": true,
          "min-value": 0
        }
      },
      {
        "name": "Image",
        "type": "image"
      },
      {
        "name": "Manufacturer",
        "type": "object",
        "object": "Manufacturer",
        "validation": {
          "required": true
        }
      },
      {
        "name": "Stock",
        "type": "integer",
        "validation": {
          "required": true,
          "min-value": 0
        }
      }
    ]
  },
  {
    "name": "Manufacturer",
    "properties": [
      {
        "name": "Name",
        "type": "text",
        "validation": {
          "required": true,
          "max-length": 150
        }
      },
      {
        "name": "HQ",
        "type": "location"
      },
      {
        "name": "Contact",
        "type": "phone"
      }
    ]
  }
];
export default objects;