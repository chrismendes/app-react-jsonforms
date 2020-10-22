const apps = [
  {
    "name": "Equipment Request",
    "description": "Use this form to request new laptops, printers, etc.",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN2AAADdgF91YLMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAlJQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtrfCOAAAAMV0Uk5TAAECAwQFBgcICQoLDA0OEBEUFR/Users/matt/Documents/Recruitment/Apps.jsonYXGBobHB4fICEiIyQlJicoKSorLC0uLzAxMjM0Njc4OTs8P0BBQ0RGR0hJSktPUFFTVFVYWVpbXV9gYWJjZmdoaWtsbW5vcHJzdXd4eXp7fH2AgYSGh4iJi4yNjpGSk5SWmJmanJ6foKGjpKWmp6ipqq2vsbKztLe5uru8vcDBwsTFxsnKy8zNzs/Q0dPU1dbY2drb3N3e4OHi4+Tl5ujp6uvs7e7v8PLz9PX5+vv8/f5vwBfaAAAE8UlEQVR42u2b619UVRSG1yAoiamgYYldhPISlnmpLLJCU8KIqLFIS0eMtLTIDBVLQkfR1LK8ZJk5hZfUMBXxygTCyPN/9WGGmcFz5sw+ts+c30/P+4mZvQ/v82Gvtdees7aIJ0+ePN2Vyn3mLX861cwa7pR9XmMfKopsGeWI/4SzqOrCEw74+/ajrqPZ+gHeBOByezpdAmCpfoBm4PpLvvQTn+8AdusHOAE0KM2sBzr0A3QBFUoz5wLczQALD6VcgL9UZQCg0DIbFTsPUGOZAD50HsBvCRDIDMA1023ofOYA2k1nhDwAD+B2gBFTSzXqX2B5aWnpaqDDdMapwQATD/WTeSUAxt3ADS2PAzS74s/sOMA/btiHv0jshgDhpQ+MckD51ecBphpHhspggHVOnRAWAxRZFyQALzsFMEERYK5TAEV2AQrq/CPi4xPXLMjWAbA7aNC6yeYAU65A88DDC/r+/7GhKFUY3BxjBvDkFSCclfDnJ6cAeM8EoPQqwJYkf5Y4BhAwAky7BvBnQZL/rqE6AFo23KarpgC5nQBtY3T6p4iCkClABcBxvf62AIqBE2P1+tsCkKqDnxZo9rcHkBz/mvzvCECn/50AaPW3lwcc8LcPUK7X3wJgnimA74xe/9QAh4eYAuRH9PpHAarmGjQtVT2wBbZr9LdfkMjMye5WRK6XZI4ArA0YVJ2XSQAzXc5zGYBKlwH6J2QQ4ETIoO/n3VNR4AG4DhDuMujU+24nIqa6DfCaywBtORkEqK0waI7PC8N7CmCl8aXN/By388C5XLfzQIXbAMWDAKqKHNKzABesX906/9O4QhR4AK4DuL4IXQ3DMFDjFMBshUS0H/jtPmf8s3copOK1ANe/2eCAmi4CHPBbb0b5nc7GwK3UP3nEXt2WRxwF+EDSAciMk87ZX6qS9ACSW7aiOZha3cARs4H9AIZve4HDwWAwGNy6ZpHl6lbtH2gH/Or/QH8nlT6Ah0a6CJC7ct81+v/aVuYSwNPHB9blxhFuACxIaiw7MzrzAIXXk2OzJfMAewF+X/jw9LoegPmZBngcoDVHRKQkDBxUBRhbFTwWCvVaAoRCoV3+8eYAM7Y1jBMRWQR05Ue/qwW6s9QAViX6e95JCRDVZp8JwNBO2CYi0gDsiQ0/CDBJCWBZ0rrxpwHgKxOAOcBNEZEdQGNseEhfvGUjDcDr2AFghREgblAP/BwbngJQqAAw/CIQ+ToQCNywBAgEAo3dQE+hAWAm0CUi8gpwa1Z0eDNwUWURfgTwrloUvArQZADwnYw16IzpBf6eJiJZywC2KwAUhIE/skRETgMtZq2ZXwJ9IiKyB4hMMkTB6CULo10o9QC9rXWfhwC6H1EAWJ8o13daVRzHRERkUiTRJm6WiLKPJD9Tq5AJH+0Ffoz+XWkFUBed0wTwXOq94LG2xCMbfAoAO4D+p2IfWlL7H8iJJfse4FeL3XDYmljpea5MZTvO6wO+jX+s3HnarEH77N7aIQNTVgOUWBUkxW9vOrrvk/n3K9UDLwA3i+ycQUZeGYgVLSXZKuAHe6egTUBQG8BniSWoqo3AdyKaLji8CETK7fhPvwEsFtF0xWNYj9pFlbg6ABgvouuSS8OdHINaowlYyzUfX6N9/4HGAz0XnXwfn7Znf2F9vPFA11Wv8W/4lVVdMvgU4u5lN0+ePHmypf8A8MtCOjf7rn4AAAAASUVORK5CYII=",
    "fields": [
      {
        "name": "Requested By",
        "type": "text",
        "validation": {
          "required": true
        },
        "default": "{system.currentUser}"
      },
      {
        "name": "Request Date/Time",
        "type": "datetime",
        "validation": {
          "required": true
        },
        "default": "{system.now}"
      },
      {
        "name": "Equipment",
        "type": "object",
        "object": "Equipment",
        "validation": {
          "required": true
        }
      },
      {
        "name": "Quantity",
        "type": "integer",
        "validation": {
          "required": true,
          "min-value": 1,
          "max-value": 10
        }
      },
      {
        "name": "Approved",
        "type": "bool",
        "default": true
      }
    ],
    "layout": [
      {
        "field": "Requested By",
        "position": {"row": 0, "column": 0},
        "display": "textbox"
      },
      {
        "field": "Request Date/Time",
        "position": {"row": 0, "column": 1},
        "display": "datePicker"
      },
      {
        "field": "Equipment",
        "position": {"row": 1, "column": 0},
        "display": "carousel:Equipment.Image",
        "allowCreate": true
      },
      {
        "field": "Quantity",
        "position": {"row": 2, "column": 0},
        "display": "slider",
        "properties": {
          "min-value": 1,
          "max-value": 10,
          "step": 1
        }
      }
    ],
    "workflowTriggers": {
      "onSubmit": [
        "Approval",
        "Reduce Stock"
      ]
    }
  },
  {
    "name": "Edit Manufacturer",
    "description": "Use this form to edit existing manufacturers",
    "icon": "data:image/png;base64,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",
    "fields": "{objects.Manufacturer}",
    "layout": [
      {
        "field": "Name",
        "position": {"row": 0, "column": 0},
        "display": "text"
      },
      {
        "field": "HQ",
        "position": {"row": 1, "column": 0},
        "display": "locationPicker"
      },
      {
        "field": "Contact",
        "position": {"row": 2, "column": 0},
        "display": "text"
      }
    ],
    "workflowTriggers": {
      "onSubmit": [
        "Add Manufacturer"
      ]
    }
  }
];
export default apps;