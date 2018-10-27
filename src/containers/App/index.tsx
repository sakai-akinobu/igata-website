import * as Ajv from "ajv";
import {convert} from "igata";
import * as React from "react";

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

interface IProps extends React.Props<any> {}

interface IState {
  inputCode: string;
  outputCode: string;
  jsonParseErrorMessage: string;
  jsonSchemaValidationErrorMessages: string[];
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      inputCode: defaultSampleCode,
      jsonParseErrorMessage: "",
      jsonSchemaValidationErrorMessages: [],
      outputCode: tryParseToFlowCode(defaultSampleCode),
    };
  }

  public render() {
    const {
      inputCode,
      outputCode,
      jsonParseErrorMessage,
      jsonSchemaValidationErrorMessages,
    } = this.state;

    const errors = jsonParseErrorMessage
      ? [jsonParseErrorMessage]
      : jsonSchemaValidationErrorMessages;

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
              <Editor value={inputCode} onChange={this.handleChangeInputCode} />
              <OutputCode value={outputCode} />
            </SplitLayout>
            <ValidationErrors errors={errors} />
          </div>
        </ContentContainer>
        <Footer />
      </div>
    );
  }

  private handleChangeInputCode = (value: string) => {
    this.setState((state) => {
      return {
        ...state,
        inputCode: value,
        jsonParseErrorMessage: validateAsJson(value),
        jsonSchemaValidationErrorMessages: validateAsJsonSchema(value),
        outputCode: tryParseToFlowCode(value),
      };
    });
  }
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
