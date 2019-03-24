import React, { Component } from 'react';
import { View } from 'react-native';
import Section from '../../../components/Section';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import {
  DialogTitle,
  Dialog,
  DialogContentText,
  DialogActions,
  Button,
} from '../../../../../src/index';
import ComponentDescription from '../../../components/ComponentPage/ComponentDescription';
import propData from '../../../content/components/dialog/propData';

const sections = [{ name: 'Demos' }];

const liveEditCode = `
class DialogPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible: false
      }
    }
    render() {
      return (
        <View>
          <Button text={'Open'} onPress={() => this.setState({ visible: !this.state.visible })} />
          <Dialog
            visible={this.state.visible}
            onTouchOutside={() => this.setState({ visible: false })}>
            <DialogTitle>Use Googles location service?</DialogTitle>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
            <DialogActions>
              <Button text={'Cancel'} onPress={() => this.setState({ visible: false })} />
              <Button text={'OK'} onPress={() => this.setState({ visible: false })} />
            </DialogActions>
          </Dialog>
        </View>
      );
    }
}`;

const usageCode = `import React, { Component } from 'react';
import { View } from 'react-native';
import { Dialog } from 'material-bread';

class DialogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <View>
        <Button onPress={() => store.set({ visible: !this.state.visible })}>
          Open
        </Button>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => this.setState({ visible: false })}>
          <DialogTitle>Use Googles location service?</DialogTitle>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <DialogActions>
            <Button text={'Cancel'} onPress={() => this.setState({ visible: false })} />
            <Button text={'OK'} onPress={() => store.set({ visible: false })}>
          </DialogActions>
        </Dialog>
      </View>
    );
  }
}`;

export default class DialogPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'dialog'}
          title={'Dialog'}
          description={`Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.`}
          importCode={`import { Dialog } from 'material-bread';`}
          docsLink={'https://material.io/design/components/dialogs.html'}
          componentDescription={`Data Table Headers can display action buttons, display number of selected items, display table title, or any other contextual information.`}
          sideScrollMenuItems={sections}
          liveEditCode={liveEditCode}
          liveEditScope={{
            View,
            Button,
            Dialog,
            DialogActions,
            DialogContentText,
            DialogTitle,
          }}
          usageCode={usageCode}
          propData={propData}>
          <Section name="Demos" href="/components/dialog#demos" id="demos">
            <ComponentDescription text="More demos can be seen in the playground" />
          </Section>
        </ComponentPageLayout>
      </div>
    );
  }
}
