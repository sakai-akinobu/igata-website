import * as React from "react";

import ContentContainer from "../components/ContentContainer";
import Editor from "../components/Editor";
import Header from "../components/Header";
import OutputCode from "../components/OutputCode";
import SplitLayout from "../components/SplitLayout";

export default function App() {
  return (
    <div>
      <Header />
      <ContentContainer>
        <SplitLayout>
          <Editor />
          <OutputCode />
        </SplitLayout>
      </ContentContainer>
    </div>
  );
}
