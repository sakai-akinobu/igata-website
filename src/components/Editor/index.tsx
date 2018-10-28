import * as React from "react";
import * as ReactCodemirror from "react-codemirror";

import styles from "./styles.scss";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export default class Editor extends React.Component<IProps> {
  private codemirror: React.RefObject<any> = React.createRef();

  public render() {
    const {value, onChange} = this.props;
    return (
      <ReactCodemirror
        value={value}
        onChange={(v: string) => onChange(v)} options={({
          lineNumbers: true,
          mode: "javascript",
          theme: "monokai",
        })}
        className={styles.textarea}
        ref={this.codemirror}
      />
    );
  }

  public componentDidMount() {
    const codeMirror = this.codemirror.current.codeMirror;
    setTimeout(() => codeMirror.refresh(), 0);
  }

}
