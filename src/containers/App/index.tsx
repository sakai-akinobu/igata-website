import * as Ajv from "ajv";
import {convert} from "igata";
import * as React from "react";
import {useState} from "react";

import ContentContainer from "../../components/ContentContainer";
import ContentHeader from "../../components/ContentHeader";
import Editor from "../../components/Editor";
import Examples from "../../components/Examples";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Installation from "../../components/Installation";
import OutputCode from "../../components/OutputCode";
import SectionTitle from "../../components/SectionTitle";
import SplitLayout from "../../components/SplitLayout";
import ValidationErrors from "../../components/ValidationErrors";
import defaultSampleCode from "../../utils/defaultSampleCode";

export default function App() {
  const [inputCode, setInputCode] = useState(defaultSampleCode);
  const [outputCode, setOutputCode] = useState(tryParseToFlowCode(defaultSampleCode));
  const [jsonParseErrorMessage, setJsonParseErrorMessage] = useState("");
  const [jsonSchemaValidationErrorMessages, setJsonSchemaValidationErrorMessages] = useState<string[]>([]);

  const handleChangeInputCode = (value: string) => {
    setInputCode(value);
    setOutputCode(tryParseToFlowCode(value));
    setJsonParseErrorMessage(validateAsJson(value));
    setJsonSchemaValidationErrorMessages(validateAsJsonSchema(value));
  };

  const errors = jsonParseErrorMessage ? [jsonParseErrorMessage] : jsonSchemaValidationErrorMessages;

  return (
    <div>
      <Header />
      <ContentContainer>
        <ContentHeader />
        <Installation />
        <Examples />
        <div>
          <SectionTitle title="Try it out" />
          <SplitLayout>
            <Editor value={inputCode} onChange={handleChangeInputCode} />
            <OutputCode value={outputCode} />
          </SplitLayout>
          <ValidationErrors errors={errors} />
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}

function tryParseToFlowCode(value: string): string {
  let flowCode = "";
  try {
    flowCode = convert(JSON.parse(value));
  } catch (e) {
    // tslint:disable-line no-empty
  }
  return flowCode;
}

function validateAsJson(value: string): string {
  let errorMessage = "";
  try {
    JSON.parse(value);
  } catch (e) {
    errorMessage = e.message;
  }
  return errorMessage;
}

function validateAsJsonSchema(value: string): string[] {
  let errors: string[] = [];

  const ajv = new Ajv();
  try {
    if (!ajv.validateSchema(JSON.parse(value))) {
      errors = (ajv.errors || []).map((error) => (
        `${error.dataPath} ${error.message}. ${JSON.stringify(error.params || {})}`
      ));
    }
  } catch (e) {
    // tslint:disable-line no-empty
  }
  return errors;
}
