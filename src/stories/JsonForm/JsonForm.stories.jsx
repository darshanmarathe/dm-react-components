import React from "react";
import { useState } from "react";
import JsonForm from "./JsonForm";

export default {
  title: "Advanced/JsonForm [updated]",
  component: JsonForm,
};

export const Basic = () => {
  console.warn(
    "for documantion visit https://github.com/json-editor/json-editor"
  );

  var defaultSchema = {
    title: "Person",
    type: "object",
    required: [
      "name",
      "age",
      "date",
      "favorite_color",
      "gender",
      "location",
      "pets",
    ],
    properties: {
      name: {
        type: "string",
        description: "First and Last name",
        minLength: 4,
        default: "Jeremy Dorn",
      },
      age: {
        type: "integer",
        default: 25,
        minimum: 18,
        maximum: 99,
      },
      favorite_color: {
        type: "string",
        format: "color",
        title: "favorite color",
        default: "#ffa500",
      },
      gender: {
        type: "string",
        enum: ["male", "female", "other"],
      },
      date: {
        type: "string",
        format: "date",
        options: {
          flatpickr: {},
        },
      },
      location: {
        type: "object",
        title: "Location",
        required: ["city", "state", "citystate"],
        properties: {
          city: {
            type: "string",
            default: "San Francisco",
          },
          state: {
            type: "string",
            default: "CA",
          },
          citystate: {
            type: "string",
            description:
              "This is generated automatically from the previous two fields",
            template: "{{city}}, {{state}}",
            watch: {
              city: "location.city",
              state: "location.state",
            },
          },
        },
      },
      pets: {
        type: "array",
        format: "table",
        title: "Pets",
        uniqueItems: true,
        items: {
          type: "object",
          title: "Pet",
          properties: {
            type: {
              type: "string",
              enum: ["cat", "dog", "bird", "reptile", "other"],
              default: "dog",
            },
            name: {
              type: "string",
            },
          },
        },
        default: [
          {
            type: "dog",
            name: "Walter",
          },
        ],
      },
    },
  };
console.log(JSON.stringify(defaultSchema))
  return (
    <JsonForm
      id="Card"
      schema={defaultSchema}
      data={{}}
      onChange={(d) => console.log(d)}
    />
  );
};

export const Disabled = () => {
  console.warn(
    "for documantion visit https://github.com/json-editor/json-editor"
  );

  var defaultSchema = {
    title: "Person",
    type: "object",
    required: [
      "name",
      "age",
      "date",
      "favorite_color",
      "gender",
      "location",
      "pets",
    ],
    properties: {
      name: {
        type: "string",
        description: "First and Last name",
        minLength: 4,
        default: "Jeremy Dorn",
      },
      age: {
        type: "integer",
        default: 25,
        minimum: 18,
        maximum: 99,
      },
      favorite_color: {
        type: "string",
        format: "color",
        title: "favorite color",
        default: "#ffa500",
      },
      gender: {
        type: "string",
        enum: ["male", "female", "other"],
      },
      date: {
        type: "string",
        format: "date",
        options: {
          flatpickr: {},
        },
      },
      location: {
        type: "object",
        title: "Location",
        required: ["city", "state", "citystate"],
        properties: {
          city: {
            type: "string",
            default: "San Francisco",
          },
          state: {
            type: "string",
            default: "CA",
          },
          citystate: {
            type: "string",
            description:
              "This is generated automatically from the previous two fields",
            template: "{{city}}, {{state}}",
            watch: {
              city: "location.city",
              state: "location.state",
            },
          },
        },
      },
      pets: {
        type: "array",
        format: "table",
        title: "Pets",
        uniqueItems: true,
        items: {
          type: "object",
          title: "Pet",
          properties: {
            type: {
              type: "string",
              enum: ["cat", "dog", "bird", "reptile", "other"],
              default: "dog",
            },
            name: {
              type: "string",
            },
          },
        },
        default: [
          {
            type: "dog",
            name: "Walter",
          },
        ],
      },
    },
  };

  return (
    <JsonForm
      id="Form"
      schema={defaultSchema}
      enabled={false}
      data={{}}
      onChange={(d) => console.log(d)}
    />
  );
};

export const Event = () => {
  console.warn(
    "for documantion visit https://github.com/json-editor/json-editor"
  );

  var defaultSchema = {
    title: "Person",
    type: "object",
    required: [
      "name",
      "age",
      "date",
      "favorite_color",
      "gender",
      "location",
      "pets",
    ],
    properties: {
      name: {
        type: "string",
        description: "First and Last name",
        minLength: 4,
        default: "Jeremy Dorn",
      },
      age: {
        type: "integer",
        default: 25,
        minimum: 18,
        maximum: 99,
      },
      favorite_color: {
        type: "string",
        format: "color",
        title: "favorite color",
        default: "#ffa500",
      },
      gender: {
        type: "string",
        enum: ["male", "female", "other"],
      },
      date: {
        type: "string",
        format: "date",
        options: {
          flatpickr: {},
        },
      },
      location: {
        type: "object",
        title: "Location",
        required: ["city", "state", "citystate"],
        properties: {
          city: {
            type: "string",
            default: "San Francisco",
          },
          state: {
            type: "string",
            default: "CA",
          },
          citystate: {
            type: "string",
            description:
              "This is generated automatically from the previous two fields",
            template: "{{city}}, {{state}}",
            watch: {
              city: "location.city",
              state: "location.state",
            },
          },
        },
      },
      pets: {
        type: "array",
        format: "table",
        title: "Pets",
        uniqueItems: true,
        items: {
          type: "object",
          title: "Pet",
          properties: {
            type: {
              type: "string",
              enum: ["cat", "dog", "bird", "reptile", "other"],
              default: "dog",
            },
            name: {
              type: "string",
            },
          },
        },
        default: [
          {
            type: "dog",
            name: "Walter",
          },
        ],
      },
    },
  };
  const [data, setData] = useState({});

  return (
    <div>
      <pre>
        <code> {JSON.stringify(data, null, 4)}</code>{" "}
      </pre>
      <JsonForm
        id="Form3"
        title="Check console.warn"
        schema={defaultSchema}
        enabled={true}
        data={{}}
        onChange={(d) => {
          setData(d);
          console.warn(d);
        }}
      />
      ;
    </div>
  );
};

export const SchemaURL = () => {
  return <>
  Work in Progress.
  </>
}