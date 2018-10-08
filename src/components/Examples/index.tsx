import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {hybrid} from "react-syntax-highlighter/styles/hljs";

import SectionTitle from "../SectionTitle";
import styles from "./styles.scss";

const examples = [
  {
    code: `
      import {convert} from 'igata';

      convert({$id: 'String', type: 'string'});
      // => export type String = string;
    `,
    title: "Primitive",
  },
  {
    code: `
      import {convert} from 'igata';

      convert({$id: 'Enum', enum: [1, 2]});
      // => export type Enum = 1 | 2;
    `,
    title: "Enum",
  },
  {
    code: `
      import {convert} from 'igata';

      convert({$id: 'Object', type: 'object', properties: {foo: {type: 'string'}}});
      // => export type Object = {foo?: string};
    `,
    title: "Object",
  },
  {
    code: `
      import {convert} from 'igata';

      convert({$id: 'Array', type: 'array', items: {type: 'string'}});
      // => export type Array = string[];
    `,
    title: "Array",
  },
  {
    code: `
      import {convert} from 'igata';

      convert({$id: 'Tuple', type: 'array', items: [{type: 'string'}, {type: 'number'}]});
      // => export type Tuple = [string, number];
    `,
    title: "Tuple",
  },
  {
    code: `
      import {convert} from 'igata';

      convert({$id: 'Union', type: ['string', 'number']});
      // => export type Union = string | number;
    `,
    title: "Union",
  },
  {
    code: `
      import {convert} from 'igata';

      convert({$id: 'ComplexUnion', anyOf: [{type: 'number'}, {type: 'object', properties: {foo: {type: 'string'}}}]});
      // => export type ComplexUnion = number | {foo?: string};
    `,
    title: "ComplexUnion",
  },
];

export default function Examples() {
  return (
    <div className={styles.examples}>
      <SectionTitle title="Examples" />
      {examples.map((example) => (
        <div key={example.title} className={styles.example}>
          <h3>{example.title}</h3>
          <SyntaxHighlighter
            language="javascript"
            style={hybrid}
          >
            {example.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}
