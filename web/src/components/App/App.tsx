import * as React from 'react';

export interface AppProps {
  readonly header: string;
}
class App extends React.Component<AppProps> {
  public render() {
    return <div>Hello {this.props.header}</div>;
  }
}

export default App;
