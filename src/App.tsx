import * as tsx from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends tsx.Component<{}> {
    render() {
        return <div>Hello playground</div>;
    }
}
