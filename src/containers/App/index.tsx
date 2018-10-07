import * as React from "react";

import ContentContainer from "../../components/ContentContainer";
import Editor from "../../components/Editor";
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
      outputCode: "",
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
          <SplitLayout>
            <Editor value={inputCode} onChange={this.handleChangeInputCode} />
            <OutputCode value={outputCode} />
          </SplitLayout>
        </ContentContainer>
      </div>
    );
  }

  private handleChangeInputCode = (value: string) => {
    this.setState((state) => {
      return {
        ...state,
        inputCode: value,
        outputCode: value, // TODO
      };
    });
  }
}