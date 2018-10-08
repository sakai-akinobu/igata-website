import {convert} from "igata";
import * as React from "react";

import ContentContainer from "../../components/ContentContainer";
import ContentHeader from "../../components/ContentHeader";
import Editor from "../../components/Editor";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OutputCode from "../../components/OutputCode";
import SplitLayout from "../../components/SplitLayout";
import defaultSampleCode from "../../utils/defaultSampleCode";

interface IProps extends React.Props<any> {}

interface IState {
  inputCode: string;
  outputCode: string;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      inputCode: defaultSampleCode,
      outputCode: this.tryParseToFlowCode(defaultSampleCode),
    };
  }

  public render() {
    const {
      inputCode,
      outputCode,
    } = this.state;

    return (
      <div>
        <Header />
        <ContentContainer>
          <ContentHeader />
          <SplitLayout>
            <Editor value={inputCode} onChange={this.handleChangeInputCode} />
            <OutputCode value={outputCode} />
          </SplitLayout>
        </ContentContainer>
        <Footer />
      </div>
    );
  }

  private tryParseToFlowCode(value: string): string {
    let flowCode = "";
    try {
      flowCode = convert(JSON.parse(value));
    } catch (e) {
      // tslint:disable-line no-empty
    }
    return flowCode;
  }

  private handleChangeInputCode = (value: string) => {
    this.setState((state) => {
      return {
        ...state,
        inputCode: value,
        outputCode: this.tryParseToFlowCode(value),
      };
    });
  }
}
